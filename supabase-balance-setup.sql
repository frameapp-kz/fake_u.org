-- FAKEU Supabase setup for wallet balances
-- Run this whole file in Supabase SQL Editor.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null,
  email text not null,
  balance numeric(12, 2) not null default 0 check (balance >= 0),
  ticket_discount_percent numeric(5, 2) not null default 0,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.profiles
  add column if not exists ticket_discount_percent numeric(5, 2) not null default 0;

create unique index if not exists profiles_email_lower_idx
  on public.profiles (lower(email));

alter table public.profiles enable row level security;

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  type text not null default 'system',
  title text not null,
  body text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists notifications_user_created_idx
  on public.notifications (user_id, created_at desc);

alter table public.notifications enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles
  for select
  to authenticated
  using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles
  for insert
  to authenticated
  with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles
  for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

drop policy if exists "notifications_select_own" on public.notifications;
create policy "notifications_select_own"
  on public.notifications
  for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "notifications_insert_own" on public.notifications;
create policy "notifications_insert_own"
  on public.notifications
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create or replace function public.handle_new_user_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, name, email, balance, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    new.email,
    0,
    lower(coalesce(new.raw_user_meta_data->>'role', 'user'))
  )
  on conflict (id) do update
  set
    name = excluded.name,
    email = excluded.email,
    updated_at = timezone('utc', now());

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_profile on auth.users;
create trigger on_auth_user_created_profile
  after insert on auth.users
  for each row
  execute function public.handle_new_user_profile();

create or replace function public.sync_profile_from_auth_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.profiles
  set
    name = coalesce(new.raw_user_meta_data->>'name', public.profiles.name),
    email = new.email,
    updated_at = timezone('utc', now())
  where id = new.id;

  return new;
end;
$$;

create or replace function public.ensure_profile_for_email(
  target_user_email text
)
returns public.profiles
language plpgsql
security definer
set search_path = public
as $$
declare
  ensured_profile public.profiles;
begin
  if target_user_email is null or btrim(target_user_email) = '' then
    raise exception 'target_user_email is required';
  end if;

  insert into public.profiles (id, name, email, balance, ticket_discount_percent, role)
  select
    au.id,
    coalesce(au.raw_user_meta_data->>'name', split_part(au.email, '@', 1)),
    au.email,
    coalesce(nullif(au.raw_user_meta_data->>'balance', '')::numeric, 0),
    coalesce(nullif(au.raw_user_meta_data->>'ticket_discount_percent', '')::numeric, 0),
    case
      when lower(coalesce(au.raw_user_meta_data->>'role', 'user')) = 'admin' then 'admin'
      else 'user'
    end
  from auth.users au
  where lower(au.email) = lower(btrim(target_user_email))
  on conflict (id) do update
  set
    name = coalesce(excluded.name, public.profiles.name),
    email = excluded.email,
    updated_at = timezone('utc', now())
  returning * into ensured_profile;

  if ensured_profile.id is null then
    raise exception 'User not found';
  end if;

  return ensured_profile;
end;
$$;

drop trigger if exists on_auth_user_updated_profile on auth.users;
create trigger on_auth_user_updated_profile
  after update of email, raw_user_meta_data on auth.users
  for each row
  execute function public.sync_profile_from_auth_user();

create or replace function public.admin_set_user_balance(
  target_user_email text,
  new_balance numeric
)
returns public.profiles
language plpgsql
security definer
set search_path = public
as $$
declare
  actor_is_admin boolean := false;
  updated_profile public.profiles;
  previous_balance numeric := 0;
begin
  if target_user_email is null or btrim(target_user_email) = '' then
    raise exception 'target_user_email is required';
  end if;

  if new_balance is null then
    raise exception 'new_balance is required';
  end if;

  if new_balance < 0 then
    raise exception 'new_balance must be >= 0';
  end if;

  if auth.uid() is not null then
    select exists (
      select 1
      from public.profiles
      where id = auth.uid()
        and role = 'admin'
    )
    into actor_is_admin;

    if not actor_is_admin then
      raise exception 'Only admin can change balances';
    end if;
  end if;

  perform public.ensure_profile_for_email(target_user_email);

  select balance
  into previous_balance
  from public.profiles
  where lower(email) = lower(btrim(target_user_email))
  limit 1;

  update public.profiles
  set
    balance = new_balance,
    updated_at = timezone('utc', now())
  where lower(email) = lower(btrim(target_user_email))
  returning * into updated_profile;

  if updated_profile.id is null then
    raise exception 'User not found';
  end if;

  if new_balance > coalesce(previous_balance, 0) then
    insert into public.notifications (user_id, type, title, body)
    values (
      updated_profile.id,
      'balance',
      'Баланс толтырылды',
      'Балансыңыз ' || trim(to_char(new_balance, 'FM999999990.00')) || ' ₸ болып жаңартылды.'
    );
  end if;

  return updated_profile;
end;
$$;

revoke all on function public.admin_set_user_balance(text, numeric) from public;
grant execute on function public.admin_set_user_balance(text, numeric) to authenticated;

create or replace function public.admin_get_user_profile(
  target_user_email text
)
returns public.profiles
language plpgsql
security definer
set search_path = public
as $$
declare
  actor_is_admin boolean := false;
  target_profile public.profiles;
begin
  if target_user_email is null or btrim(target_user_email) = '' then
    raise exception 'target_user_email is required';
  end if;

  if auth.uid() is not null then
    select exists (
      select 1
      from public.profiles
      where id = auth.uid()
        and role = 'admin'
    )
    into actor_is_admin;

    if not actor_is_admin then
      raise exception 'Only admin can view other profiles';
    end if;
  end if;

  perform public.ensure_profile_for_email(target_user_email);

  select *
  into target_profile
  from public.profiles
  where lower(email) = lower(btrim(target_user_email))
  limit 1;

  if target_profile.id is null then
    raise exception 'User not found';
  end if;

  return target_profile;
end;
$$;

revoke all on function public.admin_get_user_profile(text) from public;
grant execute on function public.admin_get_user_profile(text) to authenticated;

create or replace function public.admin_search_profiles(
  search_query text
)
returns table (
  id uuid,
  name text,
  email text,
  balance numeric,
  role text,
  ticket_discount_percent numeric
)
language plpgsql
security definer
set search_path = public
as $$
declare
  actor_is_admin boolean := false;
begin
  if search_query is null or btrim(search_query) = '' then
    return;
  end if;

  if auth.uid() is not null then
    select exists (
      select 1
      from public.profiles
      where id = auth.uid()
        and role = 'admin'
    )
    into actor_is_admin;

    if not actor_is_admin then
      raise exception 'Only admin can search profiles';
    end if;
  end if;

  insert into public.profiles (id, name, email, balance, ticket_discount_percent, role)
  select
    au.id,
    coalesce(au.raw_user_meta_data->>'name', split_part(au.email, '@', 1)),
    au.email,
    coalesce(nullif(au.raw_user_meta_data->>'balance', '')::numeric, 0),
    coalesce(nullif(au.raw_user_meta_data->>'ticket_discount_percent', '')::numeric, 0),
    case
      when lower(coalesce(au.raw_user_meta_data->>'role', 'user')) = 'admin' then 'admin'
      else 'user'
    end
  from auth.users au
  where lower(coalesce(au.email, '')) like '%' || lower(btrim(search_query)) || '%'
     or lower(coalesce(au.raw_user_meta_data->>'name', '')) like '%' || lower(btrim(search_query)) || '%'
  on conflict (id) do update
  set
    name = coalesce(excluded.name, public.profiles.name),
    email = excluded.email,
    updated_at = timezone('utc', now());

  return query
  select
    p.id,
    p.name,
    p.email,
    p.balance,
    p.role,
    p.ticket_discount_percent
  from public.profiles p
  where lower(coalesce(p.email, '')) like '%' || lower(btrim(search_query)) || '%'
     or lower(coalesce(p.name, '')) like '%' || lower(btrim(search_query)) || '%'
  order by
    case
      when lower(coalesce(p.email, '')) = lower(btrim(search_query)) then 0
      when lower(coalesce(p.name, '')) = lower(btrim(search_query)) then 1
      when lower(coalesce(p.email, '')) like lower(btrim(search_query)) || '%' then 2
      when lower(coalesce(p.name, '')) like lower(btrim(search_query)) || '%' then 3
      else 4
    end,
    p.updated_at desc,
    p.email asc
  limit 8;
end;
$$;

revoke all on function public.admin_search_profiles(text) from public;
grant execute on function public.admin_search_profiles(text) to authenticated;

create or replace function public.admin_set_user_ticket_discount(
  target_user_email text,
  new_ticket_discount_percent numeric
)
returns public.profiles
language plpgsql
security definer
set search_path = public
as $$
declare
  actor_is_admin boolean := false;
  updated_profile public.profiles;
begin
  if target_user_email is null or btrim(target_user_email) = '' then
    raise exception 'target_user_email is required';
  end if;

  if new_ticket_discount_percent is null then
    raise exception 'new_ticket_discount_percent is required';
  end if;

  if new_ticket_discount_percent < 0 or new_ticket_discount_percent > 100 then
    raise exception 'new_ticket_discount_percent must be between 0 and 100';
  end if;

  if auth.uid() is not null then
    select exists (
      select 1
      from public.profiles
      where id = auth.uid()
        and role = 'admin'
    )
    into actor_is_admin;

    if not actor_is_admin then
      raise exception 'Only admin can change ticket discounts';
    end if;
  end if;

  perform public.ensure_profile_for_email(target_user_email);

  update public.profiles
  set
    ticket_discount_percent = new_ticket_discount_percent,
    updated_at = timezone('utc', now())
  where lower(email) = lower(btrim(target_user_email))
  returning * into updated_profile;

  if updated_profile.id is null then
    raise exception 'User not found';
  end if;

  insert into public.notifications (user_id, type, title, body)
  values (
    updated_profile.id,
    'discount',
    'Жеңілдік берілді',
    'Аккаунтыңызға ' || trim(to_char(new_ticket_discount_percent, 'FM999999990.00')) || '% жеңілдік берілді.'
  );

  return updated_profile;
end;
$$;

revoke all on function public.admin_set_user_ticket_discount(text, numeric) from public;
grant execute on function public.admin_set_user_ticket_discount(text, numeric) to authenticated;

create or replace function public.admin_set_user_role(
  target_user_email text,
  new_role text
)
returns public.profiles
language plpgsql
security definer
set search_path = public
as $$
declare
  actor_is_admin boolean := false;
  updated_profile public.profiles;
  normalized_role text := lower(btrim(coalesce(new_role, '')));
  previous_role text := null;
begin
  if target_user_email is null or btrim(target_user_email) = '' then
    raise exception 'target_user_email is required';
  end if;

  if normalized_role not in ('user', 'admin') then
    raise exception 'new_role must be user or admin';
  end if;

  if auth.uid() is not null then
    select exists (
      select 1
      from public.profiles
      where id = auth.uid()
        and role = 'admin'
    )
    into actor_is_admin;

    if not actor_is_admin then
      raise exception 'Only admin can change roles';
    end if;
  end if;

  perform public.ensure_profile_for_email(target_user_email);

  select role
  into previous_role
  from public.profiles
  where lower(email) = lower(btrim(target_user_email));

  update public.profiles
  set
    role = normalized_role,
    updated_at = timezone('utc', now())
  where lower(email) = lower(btrim(target_user_email))
  returning * into updated_profile;

  if updated_profile.id is null then
    raise exception 'User not found';
  end if;

  if normalized_role = 'admin' and coalesce(previous_role, '') <> 'admin' then
    insert into public.notifications (user_id, type, title, body)
    values (
      updated_profile.id,
      'role',
      'Admin рөлі берілді',
      'Сізге admin мәртебесі берілді.'
    );
  end if;

  return updated_profile;
end;
$$;

revoke all on function public.admin_set_user_role(text, text) from public;
grant execute on function public.admin_set_user_role(text, text) to authenticated;

create or replace function public.user_send_balance(
  target_user_email text,
  transfer_amount numeric,
  sender_name text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  sender_profile public.profiles;
  recipient_profile public.profiles;
  final_sender_name text;
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;

  if target_user_email is null or btrim(target_user_email) = '' then
    raise exception 'target_user_email is required';
  end if;

  if transfer_amount is null or transfer_amount <= 0 then
    raise exception 'transfer_amount must be > 0';
  end if;

  select *
  into sender_profile
  from public.profiles
  where id = auth.uid()
  for update;

  if sender_profile.id is null then
    raise exception 'Sender profile not found';
  end if;

  select *
  into recipient_profile
  from public.profiles
  where lower(email) = lower(btrim(target_user_email))
  for update;

  if recipient_profile.id is null then
    raise exception 'Recipient not found';
  end if;

  if recipient_profile.id = sender_profile.id then
    raise exception 'Cannot transfer to yourself';
  end if;

  if sender_profile.balance < transfer_amount then
    raise exception 'Insufficient balance';
  end if;

  update public.profiles
  set
    balance = balance - transfer_amount,
    updated_at = timezone('utc', now())
  where id = sender_profile.id
  returning * into sender_profile;

  update public.profiles
  set
    balance = balance + transfer_amount,
    updated_at = timezone('utc', now())
  where id = recipient_profile.id
  returning * into recipient_profile;

  final_sender_name := coalesce(nullif(btrim(sender_name), ''), sender_profile.name, sender_profile.email);

  insert into public.notifications (user_id, type, title, body)
  values (
    recipient_profile.id,
    'transfer',
    'Баланс аударымы келіп түсті',
    final_sender_name || ' адамынан ' || trim(to_char(transfer_amount, 'FM999999990.00')) || ' ₸ аударым түсті.'
  );

  insert into public.notifications (user_id, type, title, body)
  values (
    sender_profile.id,
    'transfer',
    'Баланс аударымы жіберілді',
    lower(btrim(target_user_email)) || ' адресіне ' || trim(to_char(transfer_amount, 'FM999999990.00')) || ' ₸ аудардыңыз.'
  );

  return jsonb_build_object(
    'sender_balance', sender_profile.balance,
    'recipient_balance', recipient_profile.balance,
    'recipient_email', recipient_profile.email
  );
end;
$$;

revoke all on function public.user_send_balance(text, numeric, text) from public;
grant execute on function public.user_send_balance(text, numeric, text) to authenticated;

create or replace function public.notify_admins_about_payment(
  payment_email text,
  payment_amount numeric,
  payment_method text
)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  inserted_count integer := 0;
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;

  if payment_email is null or btrim(payment_email) = '' then
    raise exception 'payment_email is required';
  end if;

  if payment_amount is null or payment_amount <= 0 then
    raise exception 'payment_amount must be > 0';
  end if;

  insert into public.notifications (user_id, type, title, body)
  select
    p.id,
    'payment',
    'Төлем расталды',
    lower(btrim(payment_email)) || ' аккаунттан ' || trim(to_char(payment_amount, 'FM999999990.00')) || ' ₸ толтырылды (' || coalesce(nullif(btrim(payment_method), ''), '-') || ').'
  from public.profiles p
  where p.role = 'admin';

  get diagnostics inserted_count = row_count;
  return inserted_count;
end;
$$;

revoke all on function public.notify_admins_about_payment(text, numeric, text) from public;
grant execute on function public.notify_admins_about_payment(text, numeric, text) to authenticated;

-- Backfill existing auth users into profiles once:
-- insert into public.profiles (id, name, email, balance, role)
-- select
--   au.id,
--   coalesce(au.raw_user_meta_data->>'name', split_part(au.email, '@', 1)),
--   au.email,
--   0,
--   lower(coalesce(au.raw_user_meta_data->>'role', 'user'))
-- from auth.users au
-- left join public.profiles p on p.id = au.id
-- where p.id is null;
--
-- If old users incorrectly received 1240 balance, reset them once:
-- update public.profiles
-- set balance = 0
-- where balance = 1240;
--
-- Make your own account admin one time:
-- update public.profiles set role = 'admin' where email = 'you@example.com';

-- Change any user's balance:
-- select public.admin_set_user_balance('user@example.com', 5000);
--
-- Lookup any user's balance as admin:
-- select public.admin_get_user_profile('user@example.com');
--
-- Search users by email or account name:
-- select * from public.admin_search_profiles('elnar');
--
-- Set any user's ticket discount percent:
-- select public.admin_set_user_ticket_discount('user@example.com', 40);
--
-- Grant admin role to another user:
-- select public.admin_set_user_role('user@example.com', 'admin');
--
-- Send balance to another user:
-- select public.user_send_balance('user@example.com', 1000, 'Елнар Ә.');
--
-- Notify all admins about confirmed payment:
-- select public.notify_admins_about_payment('user@example.com', 5000, 'Kaspi Bank');
