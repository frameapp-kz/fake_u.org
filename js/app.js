const TRANSLATIONS = {
  kk: {
    siteHomeTitle: "FAKE U",
    onayPageTitle: "Билет алу",
    signInPageTitle: "Кіру",
    signUpPageTitle: "Тіркелу",
    adminPageTitle: "Баланс басқару",
    myTicketsPageTitle: "Менің билеттерім",
    historyPageTitle: "Билеттер тарихы",
    plusPageTitle: "Қосымша бөлім",
    sendPayPageTitle: "Аудару",
    kaspiPayPageTitle: "Kaspi Bank",
    halykPayPageTitle: "Halyk Bank",
    freedomPayPageTitle: "Freedom Bank",
    cryptoPayPageTitle: "Crypto Wallet",
    langKk: "Қазақша",
    langRu: "Русский",
    mainMenuHeading: "Басты меню",
    onayCardTitle: "ONAY",
    onayCardText: "Автобусқа оңай билет ал",
    kaspiCardTitle: "Kaspi",
    avtobysCardTitle: "Avtobys",
    disabledCardText: "Бұл қосымша уақытша жұмыс істемейді",
    accountTitle: "Аккаунт туралы мәлімет",
    accountText: "Бұл жерде аккаунт туралы негізгі ақпарат көрсетіледі",
    accountNameLabel: "Атау",
    accountEmailLabel: "Email",
    accountRoleLabel: "Мәртебе",
    accountBalanceLabel: "Баланс",
    guestRole: "Қонақ режимі",
    userRole: "Пайдаланушы",
    adminRole: "Админ",
    adminButton: "Admin панель",
    manageButton: "Басқару",
    signUpTab: "Тіркелу",
    signInTab: "Кіру",
    logoutButton: "Шығу",
    myTicketsButton: "Менің билеттерім",
    fullscreenButton: "Full Screen",
    exitFullscreenButton: "Шығу",
    fullscreenHint: "Бұл режим браузердің артық панельдерін жасырады. Жоғарғы жүйелік статус жолағы құрылғыға байланысты көрінуі мүмкін.",
    backLabel: "← Артқа",
    signInHeading: "Аккаунтқа кіру",
    signInText: "Баланс пен билет тарихы аккаунтыңызға байланып сақталады",
    signUpHeading: "Тіркелу",
    signUpText: "Баланс пен билет тарихы аккаунтыңызға байланып сақталады",
    nameField: "Аккаунт атауы",
    emailField: "Email",
    passwordField: "Құпиясөз",
    confirmPasswordField: "Құпиясөзді қайталау",
    namePlaceholder: "Мысалы, Name",
    emailPlaceholder: "email@example.com",
    passwordPlaceholder: "Кемі 6 таңба",
    confirmPasswordPlaceholder: "Құпиясөзді қайта енгізіңіз",
    signInAction: "Кіру",
    signUpAction: "Тіркелу",
    adminHeading: "Баланс басқару",
    adminText: "Supabase арқылы тіркелген қолданушының балансын өзгертіңіз.",
    adminStateLoading: "Қолжетімділік тексерілуде...",
    adminNeedsSupabase: "Бұл бет тек Supabase режимінде жұмыс істейді. Алдымен толық Supabase publishable key қосыңыз.",
    adminOnly: "Бұл бөлімге тек admin аккаунт кіре алады.",
    adminReady: "Admin режимі белсенді. Email мен жаңа балансты енгізіңіз.",
    adminLookupHeading: "Балансты тексеру",
    adminLookupText: "Қолданушының email арқылы ағымдағы балансын тексеріңіз.",
    adminLookupButton: "Балансты тексеру",
    adminLookupTitle: "Табылған аккаунт",
    adminLookupSuccess: "Аккаунт табылды.",
    adminLookupNotFound: "Мұндай email-пен аккаунт табылмады.",
    adminDiscountHeading: "90% жеңілдік беру",
    adminDiscountText: "Бұл аккаунт әр 100 ₸ билетке тек 10 ₸ төлейді.",
    adminDiscountButton: "90% жеңілдік беру",
    adminDiscountUpdated: "90% жеңілдік сәтті берілді.",
    adminDiscountResetHeading: "Жеңілдікті қайтарып алу",
    adminDiscountResetText: "Бұл аккаунт қайтадан билетті толық бағамен алады.",
    adminDiscountResetButton: "Жеңілдікті алып тастау",
    adminDiscountRemoved: "Жеңілдік өшірілді.",
    targetEmailLabel: "Қолданушы email",
    targetEmailPlaceholder: "user@example.com",
    balanceAmountLabel: "Жаңа баланс",
    balanceAmountPlaceholder: "5000",
    adminSubmitButton: "Балансты жаңарту",
    adminResultTitle: "Жаңартылған аккаунт",
    adminBalanceUpdated: "Баланс сәтті жаңартылды.",
    discountRateLabel: "Жеңілдік",
    notificationsButton: "Хабарламалар",
    notificationsTitle: "Соңғы әрекеттер",
    notificationsEmpty: "Әзірге жаңа хабарлама жоқ",
    reloadButton: "Қайта жүктеу",
    activityBalanceTopUpTitle: "Баланс толтырылды",
    activityDiscountTitle: "Жеңілдік берілді",
    activityTicketTitle: "Жаңа билет алынды",
    activityAdminRoleTitle: "Admin рөлі берілді",
    activityBalanceTopUpText: "Балансыңыз {balance} болып жаңартылды.",
    activityDiscountText: "Аккаунтыңызға {discount}% жеңілдік берілді.",
    activityTicketText: "{direction} бағытына билет алынды. Списано: {price}.",
    activityAdminRoleText: "Сізге admin мәртебесі берілді.",
    buyTicketHeading: "Билет алу",
    buyTicketText: "Автобус түрін, бағытын және нөмірін енгізіңіз",
    ticketPriceNotice: "Әр билет құны: 100 ₸. Билет алу кезінде бұл сома баланстан алынады.",
    ticketDiscountNotice: "Сіздің жеңілдігіңіз: {discount}%. Қолданыстағы билет бағасы: {price}.",
    insufficientBalanceNotice: "Баланс жеткіліксіз. Билет алу үшін кемі 100 ₸ қажет.",
    currentBalanceNotice: "Қазіргі баланс: {balance}",
    insufficientBalanceToast: "Баланс жеткіліксіз. Билет сатып алу мүмкін емес.",
    historyLink: "Билеттер тарихы",
    historyLinkShort: "Тарих",
    myTicketsLinkShort: "Билеттер",
    transportTypeLabel: "Көлік түрі",
    busOption: "Автобус",
    trolleyOption: "Троллейбус",
    directionLabel: "Автобустың бағыты",
    directionPlaceholder: "Мысалы, 49",
    busNumberLabel: "Автобустың нөмірі",
    busNumberPlaceholder: "Мысалы, 123ABC02",
    confirmButton: "Растау",
    myTicketsHeading: "Менің билеттерім",
    myTicketsEmpty: "Әзірге белсенді билет жоқ",
    historyHeading: "Билеттер тарихы",
    historySubheading: "Оңай арқылы алынған билеттер осы жерде сақталады",
    historyEmpty: "Әзірге билет тарихы жоқ",
    todayText: "Бүгін",
    ticketSubtitle: "Алматы қ., электронды билет",
    directionShort: "Бағыт",
    transportShort: "Көлік",
    timeLabel: "Уақыт",
    priceLabel: "Құны",
    checkCodeLabel: "Тексеру коды",
    qrRouteLabel: "Маршрут:",
    qrPurchaseTimeLabel: "Сатып алынған уақыт",
    supportButton: "Қолдау",
    archiveButton: "Тарихқа жіберу",
    plusHeading: "Төлем әдістері",
    plusText: "Қажетті төлем әдісін таңдаңыз. Әр бөлім жеке экранда ашылады.",
    kaspiMethodText: "Kaspi QR және банк картасы арқылы төлеу бөлімі.",
    halykMethodText: "Halyk төлем беті мен карта арқылы аудару бөлімі.",
    freedomMethodText: "Freedom Bank арқылы төлем жасау бөлімі.",
    cryptoMethodText: "Крипто әмиян арқылы төлем жасау бөлімі.",
    sendMethodText: "Email арқылы басқа аккаунтқа баланс аудару бөлімі.",
    paymentMethodText: "Бұл бөлім төлем ағынын қосуға дайын. Кейін бұл жерде нақты төлем формасы мен растау көрсетіледі.",
    openPaymentButton: "Төлемге өту",
    backToPaymentsButton: "Төлем әдістеріне оралу",
    returnHomeButton: "Басты бетке оралу",
    freedomCardLabel: "Карта нөмірі",
    freedomCardHint: "Аудару үшін көшіріп алыңыз",
    copyCardSuccess: "Карта нөмірі көшірілді.",
    cardOwnerLabel: "Карта иесі",
    transferAmountLabel: "Аударылған сумма",
    transferAmountPlaceholder: "Мысалы, 1000",
    transferSenderLabel: "Аударым жасаған адамның Есімі немесе Карта иесінің атауы",
    transferSenderPlaceholder: "Мысалы Пәленше П. / Пәленше Пәленшеев",
    transferHintText: "Сумма аударылған соң Аударымды растау кнопкасын басыңыз.",
    transferConfirmButton: "Аударымды растау",
    transferConfirmed: "Аударым туралы хабарлама жіберілді.",
    transferNotificationTitle: "Аударым расталды",
    transferNotificationText: "{sender} адамынан {amount} аударылды.",
    sendHeading: "Аудару",
    sendText: "Басқа аккаунттың email адресіне тікелей баланс жіберіңіз.",
    receiverEmailLabel: "Қабылдаушы аккаунттың email адресі",
    receiverEmailPlaceholder: "receiver@example.com",
    sendAmountLabel: "Аударылатын сумма",
    sendAmountPlaceholder: "Мысалы, 2500",
    sendSubmitButton: "Аудару",
    sendBalanceHint: "Қазіргі баланс: {balance}",
    transferInsufficientBalance: "Баланс жеткіліксіз. Аударым жасау мүмкін емес.",
    transferRequiresAuth: "Аудару үшін аккаунтқа кіру керек.",
    transferSentSuccess: "Аударым сәтті жіберілді.",
    transferReceivedTitle: "Баланс аударымы келіп түсті",
    transferReceivedText: "{sender} адамынан {amount} аударым түсті.",
    transferSentTitle: "Баланс аударымы жіберілді",
    transferSentText: "{email} адресіне {amount} аудардыңыз.",
    walletInfo: "Баланс: {balance}. Бүгінгі шығын: -{spent}.",
    loginSuccess: "Кіру сәтті орындалды.",
    signupSuccess: "Тіркелу сәтті аяқталды.",
    logoutSuccess: "Сеанстан шықтыңыз.",
    ticketSaved: "Билет сақталды.",
    ticketArchived: "Билет тарихқа жіберілді.",
    supportInfo: "Қолдау қызметі жақын арада қосылады.",
    passwordMismatch: "Құпиясөздер бірдей емес.",
    fillRequired: "Барлық жолдарды толтырыңыз.",
    authFallback: "Supabase publishable key толық емес, жергілікті режим қолданылып тұр.",
    ticketCodeLabel: "Код",
    unknownError: "Бірнәрсе қате кетті. Қайталап көріңіз."
  },
  ru: {
    siteHomeTitle: "FAKE U",
    onayPageTitle: "Покупка билета",
    signInPageTitle: "Вход",
    signUpPageTitle: "Регистрация",
    adminPageTitle: "Управление балансом",
    myTicketsPageTitle: "Мои билеты",
    historyPageTitle: "История билетов",
    plusPageTitle: "Дополнительно",
    sendPayPageTitle: "Перевод",
    kaspiPayPageTitle: "Kaspi Bank",
    halykPayPageTitle: "Halyk Bank",
    freedomPayPageTitle: "Freedom Bank",
    cryptoPayPageTitle: "Crypto Wallet",
    langKk: "Қазақша",
    langRu: "Русский",
    mainMenuHeading: "Главное меню",
    onayCardTitle: "ONAY",
    onayCardText: "Купить билет на автобус быстро",
    kaspiCardTitle: "Kaspi",
    avtobysCardTitle: "Avtobys",
    disabledCardText: "Это приложение временно недоступно",
    accountTitle: "Информация об аккаунте",
    accountText: "Здесь отображается основная информация об аккаунте",
    accountNameLabel: "Имя",
    accountEmailLabel: "Email",
    accountRoleLabel: "Роль",
    accountBalanceLabel: "Баланс",
    guestRole: "Гостевой режим",
    userRole: "Пользователь",
    adminRole: "Админ",
    adminButton: "Admin панель",
    manageButton: "Управление",
    signUpTab: "Регистрация",
    signInTab: "Вход",
    logoutButton: "Выйти",
    myTicketsButton: "Мои билеты",
    fullscreenButton: "Full Screen",
    exitFullscreenButton: "Выйти",
    fullscreenHint: "Этот режим скрывает лишние панели браузера. Верхняя системная строка может оставаться видимой в зависимости от устройства.",
    backLabel: "← Назад",
    signInHeading: "Вход в аккаунт",
    signInText: "Баланс и история билетов будут привязаны к вашему аккаунту",
    signUpHeading: "Регистрация",
    signUpText: "Баланс и история билетов будут привязаны к вашему аккаунту",
    nameField: "Имя аккаунта",
    emailField: "Email",
    passwordField: "Пароль",
    confirmPasswordField: "Повторите пароль",
    namePlaceholder: "Например, Name",
    emailPlaceholder: "email@example.com",
    passwordPlaceholder: "Не менее 6 символов",
    confirmPasswordPlaceholder: "Введите пароль еще раз",
    signInAction: "Войти",
    signUpAction: "Зарегистрироваться",
    adminHeading: "Управление балансом",
    adminText: "Изменяйте баланс пользователей, зарегистрированных через Supabase.",
    adminStateLoading: "Проверка доступа...",
    adminNeedsSupabase: "Эта страница работает только в режиме Supabase. Укажите полный Supabase publishable key.",
    adminOnly: "Этот раздел доступен только admin аккаунту.",
    adminReady: "Режим admin активен. Введите email пользователя и новый баланс.",
    adminLookupHeading: "Проверка баланса",
    adminLookupText: "Проверьте текущий баланс пользователя по email.",
    adminLookupButton: "Проверить баланс",
    adminLookupTitle: "Найденный аккаунт",
    adminLookupSuccess: "Аккаунт найден.",
    adminLookupNotFound: "Аккаунт с таким email не найден.",
    adminDiscountHeading: "Выдать скидку 90%",
    adminDiscountText: "Этот аккаунт будет платить за билет 10 ₸ вместо 100 ₸.",
    adminDiscountButton: "Выдать скидку 90%",
    adminDiscountUpdated: "Скидка 90% успешно выдана.",
    adminDiscountResetHeading: "Снять скидку",
    adminDiscountResetText: "Этот аккаунт снова будет покупать билет по полной цене.",
    adminDiscountResetButton: "Убрать скидку",
    adminDiscountRemoved: "Скидка отключена.",
    targetEmailLabel: "Email пользователя",
    targetEmailPlaceholder: "user@example.com",
    balanceAmountLabel: "Новый баланс",
    balanceAmountPlaceholder: "5000",
    adminSubmitButton: "Обновить баланс",
    adminResultTitle: "Обновленный аккаунт",
    adminBalanceUpdated: "Баланс успешно обновлен.",
    discountRateLabel: "Скидка",
    notificationsButton: "Уведомления",
    notificationsTitle: "Последние действия",
    notificationsEmpty: "Пока нет новых уведомлений",
    reloadButton: "Перезагрузить",
    activityBalanceTopUpTitle: "Баланс пополнен",
    activityDiscountTitle: "Скидка выдана",
    activityTicketTitle: "Куплен новый билет",
    activityAdminRoleTitle: "Выдана роль admin",
    activityBalanceTopUpText: "Ваш баланс обновлен до {balance}.",
    activityDiscountText: "Вашему аккаунту выдана скидка {discount}%.",
    activityTicketText: "Куплен билет по маршруту {direction}. Списано: {price}.",
    activityAdminRoleText: "Вашему аккаунту назначена роль admin.",
    buyTicketHeading: "Купить билет",
    buyTicketText: "Укажите тип транспорта, направление и номер",
    ticketPriceNotice: "Стоимость одного билета: 100 ₸. Эта сумма списывается с баланса при покупке.",
    ticketDiscountNotice: "Ваша скидка: {discount}%. Текущая цена билета: {price}.",
    insufficientBalanceNotice: "Недостаточно средств. Для покупки билета нужно минимум 100 ₸.",
    currentBalanceNotice: "Текущий баланс: {balance}",
    insufficientBalanceToast: "Недостаточно средств. Купить билет нельзя.",
    historyLink: "История билетов",
    historyLinkShort: "История",
    myTicketsLinkShort: "Билеты",
    transportTypeLabel: "Тип транспорта",
    busOption: "Автобус",
    trolleyOption: "Троллейбус",
    directionLabel: "Направление автобуса",
    directionPlaceholder: "Например, 49",
    busNumberLabel: "Номер автобуса",
    busNumberPlaceholder: "Например, 123ABC02",
    confirmButton: "Подтвердить",
    myTicketsHeading: "Мои билеты",
    myTicketsEmpty: "Пока нет активных билетов",
    historyHeading: "История билетов",
    historySubheading: "Здесь сохраняются билеты, купленные через ONAY",
    historyEmpty: "История билетов пока пуста",
    todayText: "Сегодня",
    ticketSubtitle: "г. Алматы, электронный билет",
    directionShort: "Маршрут",
    transportShort: "Транспорт",
    timeLabel: "Время",
    priceLabel: "Стоимость",
    checkCodeLabel: "Код проверки",
    qrRouteLabel: "Маршрут:",
    qrPurchaseTimeLabel: "Время покупки",
    supportButton: "Поддержка",
    archiveButton: "В архив",
    plusHeading: "Способы оплаты",
    plusText: "Выберите нужный способ оплаты. Каждый раздел открывается на отдельной странице.",
    kaspiMethodText: "Раздел оплаты через Kaspi QR и банковскую карту.",
    halykMethodText: "Раздел оплаты и перевода через Halyk Bank.",
    freedomMethodText: "Раздел оплаты через Freedom Bank.",
    cryptoMethodText: "Раздел оплаты через криптокошелек.",
    sendMethodText: "Раздел перевода баланса другому аккаунту по email.",
    paymentMethodText: "Этот раздел готов для будущего платежного сценария. Позже здесь можно подключить реальную форму оплаты и подтверждение.",
    openPaymentButton: "Перейти к оплате",
    backToPaymentsButton: "Вернуться к способам оплаты",
    returnHomeButton: "Вернуться на главную",
    freedomCardLabel: "Номер карты",
    freedomCardHint: "Скопируйте для перевода",
    copyCardSuccess: "Номер карты скопирован.",
    cardOwnerLabel: "Владелец карты",
    transferAmountLabel: "Сумма перевода",
    transferAmountPlaceholder: "Например, 1000",
    transferSenderLabel: "Имя отправителя или название владельца карты",
    transferSenderPlaceholder: "Например, Петров П. / Петров Петрович",
    transferHintText: "После перевода суммы нажмите кнопку подтверждения перевода.",
    transferConfirmButton: "Подтвердить перевод",
    transferConfirmed: "Уведомление о переводе отправлено.",
    transferNotificationTitle: "Перевод подтвержден",
    transferNotificationText: "От {sender} поступил перевод на сумму {amount}.",
    sendHeading: "Перевод",
    sendText: "Отправьте баланс напрямую на email другого аккаунта.",
    receiverEmailLabel: "Email аккаунта получателя",
    receiverEmailPlaceholder: "receiver@example.com",
    sendAmountLabel: "Сумма перевода",
    sendAmountPlaceholder: "Например, 2500",
    sendSubmitButton: "Перевести",
    sendBalanceHint: "Текущий баланс: {balance}",
    transferInsufficientBalance: "Недостаточно средств для перевода.",
    transferRequiresAuth: "Для перевода нужно войти в аккаунт.",
    transferSentSuccess: "Перевод успешно отправлен.",
    transferReceivedTitle: "Поступил перевод баланса",
    transferReceivedText: "От {sender} поступил перевод на сумму {amount}.",
    transferSentTitle: "Перевод баланса отправлен",
    transferSentText: "Вы отправили {amount} на адрес {email}.",
    walletInfo: "Баланс: {balance}. Расход за сегодня: -{spent}.",
    loginSuccess: "Вход выполнен успешно.",
    signupSuccess: "Регистрация завершена.",
    logoutSuccess: "Вы вышли из аккаунта.",
    ticketSaved: "Билет сохранен.",
    ticketArchived: "Билет перемещен в историю.",
    supportInfo: "Поддержка появится немного позже.",
    passwordMismatch: "Пароли не совпадают.",
    fillRequired: "Заполните все поля.",
    authFallback: "Полный Supabase publishable key не указан, используется локальный режим.",
    ticketCodeLabel: "Код",
    unknownError: "Что-то пошло не так. Попробуйте еще раз."
  }
};

const STORAGE_KEYS = {
  lang: "fakeu-lang",
  localUsers: "fakeu-local-users",
  localSession: "fakeu-local-session",
  localTickets: "fakeu-local-tickets",
  currentOnayTicket: "fakeu-current-onay-ticket",
  usedTickets: "fakeu-used-tickets",
  profileCache: "fakeu-profile-cache",
  localNotifications: "fakeu-local-notifications"
};

const state = {
  lang: localStorage.getItem(STORAGE_KEYS.lang) || "kk",
  session: null,
  user: null,
  profile: { name: "Қонақ", email: "-", balance: 0, role: "guest", ticket_discount_percent: 0 },
  supabase: null,
  supabaseMode: false,
  tickets: [],
  notifications: [],
  currentTicket: null,
  usedIds: new Set()
};

const config = {
  url: "https://wcfqoeqfegnnetumcsol.supabase.co",
  anonKey: "sb_publishable_Mbf8sBzfOlEvpurhI9uaFw_0cS8n7_2"
};

const TICKET_PRICE = 100;

document.addEventListener("DOMContentLoaded", () => {
  init().catch((error) => {
    console.error(error);
    showToast(t("unknownError"));
  });
});

async function init() {
  initSupabase();
  enhanceSharedUi();
  bindCommonUi();
  applyLanguage();
  await initAuth();
  await refreshTickets();
  await refreshNotifications();
  bindPageSpecificUi();
  renderAccount();
  renderWallet();
  renderNotifications();
}

function initSupabase() {
  const hasValidKey = typeof config.anonKey === "string" && config.anonKey.length > 32 && !config.anonKey.includes("...");
  if (window.supabase?.createClient && config.url && hasValidKey) {
    state.supabase = window.supabase.createClient(config.url, config.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true
      }
    });
    state.supabaseMode = true;
    return;
  }
  state.supabase = null;
  state.supabaseMode = false;
}

function enhanceSharedUi() {
  ensureNotificationButton();
  ensureToolbarActions();
  ensureNotificationsPanel();
}

function ensureNotificationButton() {
  document.querySelectorAll(".header-actions").forEach((actions) => {
    if (actions.querySelector("[data-action='notifications']")) return;
    const plusButton = actions.querySelector("a[href='plus.html'], a[href=\"plus.html\"]");
    const button = document.createElement("button");
    button.className = "icon-button notification-trigger";
    button.type = "button";
    button.dataset.action = "notifications";
    button.setAttribute("aria-label", t("notificationsButton"));
    button.innerHTML = `
      <span class="icon-bell" aria-hidden="true"></span>
      <span class="notification-badge" data-notification-badge hidden>0</span>
    `;
    if (plusButton?.nextSibling) {
      actions.insertBefore(button, plusButton.nextSibling);
    } else {
      actions.appendChild(button);
    }
  });
}

function ensureToolbarActions() {
  document.querySelectorAll(".lang-toolbar").forEach((toolbar) => {
    if (toolbar.querySelector(".toolbar-actions")) return;
    const fullscreenButton = toolbar.querySelector("[data-action='fullscreen']");
    const actions = document.createElement("div");
    actions.className = "toolbar-actions";
    if (fullscreenButton) {
      fullscreenButton.replaceWith(actions);
      actions.appendChild(fullscreenButton);
    } else {
      toolbar.appendChild(actions);
    }

    const reloadButton = document.createElement("button");
    reloadButton.className = "reload-toggle";
    reloadButton.type = "button";
    reloadButton.dataset.action = "reload";
    reloadButton.setAttribute("aria-label", t("reloadButton"));
    reloadButton.innerHTML = `<span class="icon-reload" aria-hidden="true"></span>`;
    actions.appendChild(reloadButton);
  });
}

function ensureNotificationsPanel() {
  if (document.getElementById("notificationsPanel")) return;

  const panel = document.createElement("div");
  panel.className = "notifications-panel";
  panel.id = "notificationsPanel";
  panel.hidden = true;
  panel.innerHTML = `
    <div class="notifications-card">
      <div class="notifications-card__header">
        <h2 data-i18n="notificationsTitle">${t("notificationsTitle")}</h2>
      </div>
      <div class="notifications-list" id="notificationsList"></div>
      <p class="notifications-empty" id="notificationsEmpty" data-i18n="notificationsEmpty">${t("notificationsEmpty")}</p>
    </div>
  `;
  document.body.appendChild(panel);
}

function bindCommonUi() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem(STORAGE_KEYS.lang, state.lang);
      applyLanguage();
      if (state.profile.role !== "user") {
        state.profile = guestProfile();
      }
      renderAccount();
      renderWallet();
      renderTickets();
      renderHistory();
      if (!state.supabaseMode) {
        showToast(t("authFallback"));
      }
    });
  });

  document.querySelectorAll("[data-action='back']").forEach((button) => {
    button.addEventListener("click", () => {
      navigateTo(document.body.dataset.backTarget || "homepage.html");
    });
  });

  document.querySelectorAll("[data-action='wallet']").forEach((button) => {
    button.addEventListener("click", () => showToast(getWalletToastMessage()));
  });

  document.querySelectorAll("[data-action='fullscreen']").forEach((button) => {
    button.addEventListener("click", async () => {
      await toggleFullscreenMode();
    });
  });

  document.querySelectorAll("[data-action='reload']").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.reload();
    });
  });

  const accountPanel = document.getElementById("accountPanel");
  const notificationsPanel = document.getElementById("notificationsPanel");
  const backdrop = document.getElementById("modalBackdrop");
  const accountTrigger = document.querySelector("[data-action='account']");
  const notificationsTrigger = document.querySelector("[data-action='notifications']");

  if (accountTrigger && accountPanel && backdrop) {
    accountTrigger.addEventListener("click", () => toggleAccountPanel());
    backdrop.addEventListener("click", () => {
      closeAccountPanel();
      closeNotificationsPanel();
    });
  }

  if (notificationsTrigger && notificationsPanel && backdrop) {
    notificationsTrigger.addEventListener("click", () => toggleNotificationsPanel());
  }

  document.querySelector("[data-action='logout']")?.addEventListener("click", async () => {
    await logout();
  });

  document.querySelectorAll("[data-action='copy-card']").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = String(button.dataset.copyValue || "").trim();
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        showToast(t("copyCardSuccess"));
      } catch (error) {
        console.error("clipboard copy failed", error);
        showToast(value);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAccountPanel();
      closeNotificationsPanel();
      closeQrPanel();
    }
  });

  document.addEventListener("fullscreenchange", syncFullscreenUi);
}

async function initAuth() {
  if (state.supabaseMode) {
    const {
      data: { session }
    } = await state.supabase.auth.getSession();
    await handleSessionChange(session);
    state.supabase.auth.onAuthStateChange((_event, session) => {
      queueMicrotask(() => {
        handleSessionChange(session).catch(console.error);
      });
    });
    return;
  }

  const localUser = getCurrentLocalUser();
  if (localUser) {
    state.user = localUser;
    state.session = { user: localUser };
    state.profile = toProfile(localUser, true);
  } else {
    state.user = null;
    state.session = null;
    state.profile = guestProfile();
  }
}

async function handleSessionChange(session) {
  const nextUserId = session?.user?.id || state.user?.id || null;
  const previousRole = nextUserId ? (loadProfileCache()[nextUserId]?.role || state.profile.role) : state.profile.role;
  state.session = session;
  state.user = session?.user || null;
  if (state.user) {
    state.profile = await resolveProfile(state.user);
    if (state.profile.role === "admin" && previousRole !== "admin") {
      await addActivity({
        title: t("activityAdminRoleTitle"),
        body: t("activityAdminRoleText"),
        type: "role"
      });
    }
  } else {
    state.profile = guestProfile();
  }
  await refreshTickets();
  await refreshNotifications();
  renderAccount();
  renderWallet();
}

function bindPageSpecificUi() {
  document.getElementById("signinForm")?.addEventListener("submit", handleSignin);
  document.getElementById("signupForm")?.addEventListener("submit", handleSignup);
  document.getElementById("ticketForm")?.addEventListener("submit", handleTicketSubmit);
  document.getElementById("adminLookupForm")?.addEventListener("submit", handleAdminLookupSubmit);
  document.getElementById("adminBalanceForm")?.addEventListener("submit", handleAdminBalanceSubmit);
  document.getElementById("adminDiscountForm")?.addEventListener("submit", handleAdminDiscountSubmit);
  document.getElementById("adminDiscountResetForm")?.addEventListener("submit", handleAdminDiscountResetSubmit);
  document.getElementById("sendBalanceForm")?.addEventListener("submit", handleSendBalanceSubmit);
  document.querySelectorAll("[data-payment-confirm-form]").forEach((form) => {
    form.addEventListener("submit", handlePaymentConfirmSubmit);
  });

  document.querySelectorAll("[data-transport-option]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-transport-option]").forEach((node) => node.classList.remove("is-active"));
      button.classList.add("is-active");
      const input = document.getElementById("transportTypeInput");
      if (input) input.value = button.dataset.transportOption;
    });
  });

  document.getElementById("ticketsList")?.addEventListener("click", (event) => {
    const card = event.target.closest("[data-ticket-id]");
    if (!card) return;
    const ticket = state.tickets.find((item) => item.id === card.dataset.ticketId);
    if (!ticket) return;
    state.currentTicket = ticket;
    openQrPanel(ticket);
  });

  document.getElementById("qrSupportButton")?.addEventListener("click", () => {
    showToast(t("supportInfo"));
  });

  document.getElementById("archiveTicketButton")?.addEventListener("click", async () => {
    if (!state.currentTicket) return;
    const owner = getTicketOwnerKey();
    const usedMap = loadUsedTicketMap();
    const current = new Set(usedMap[owner] || []);
    current.add(state.currentTicket.id);
    usedMap[owner] = [...current];
    localStorage.setItem(STORAGE_KEYS.usedTickets, JSON.stringify(usedMap));
    state.usedIds = current;
    closeQrPanel();
    renderTickets();
    renderHistory();
    showToast(t("ticketArchived"));
  });

  document.querySelector(".qr-overlay-dim")?.addEventListener("click", closeQrPanel);
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });

  const titleKey = document.body.dataset.titleKey;
  if (titleKey) {
    document.title = t(titleKey);
  }

  document.querySelectorAll("[data-action='notifications']").forEach((button) => {
    button.setAttribute("aria-label", t("notificationsButton"));
  });

  document.querySelectorAll("[data-action='reload']").forEach((button) => {
    button.setAttribute("aria-label", t("reloadButton"));
  });

  syncFullscreenUi();
}

function t(key) {
  return TRANSLATIONS[state.lang][key] || TRANSLATIONS.kk[key] || key;
}

function getBalanceValue(value) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value === "string") {
    const normalized = value.replace(/[^\d.-]/g, "");
    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function getTicketDiscountPercent(profile = state.profile) {
  const discount = getBalanceValue(profile?.ticket_discount_percent ?? 0);
  return Math.max(0, Math.min(100, discount));
}

function getCurrentTicketPrice(profile = state.profile) {
  const discount = getTicketDiscountPercent(profile);
  return Number((TICKET_PRICE * ((100 - discount) / 100)).toFixed(2));
}

function formatWalletAmount(amount) {
  return `${getBalanceValue(amount)} ₸`;
}

function isTodayDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return false;

  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

function getTodaySpentAmount() {
  return state.tickets.reduce((total, ticket) => {
    const ticketPrice = getBalanceValue(ticket.price_paid ?? getCurrentTicketPrice());
    return total + (isTodayDate(ticket.created_at) ? ticketPrice : 0);
  }, 0);
}

function getWalletToastMessage() {
  return t("walletInfo")
    .replace("{balance}", formatWalletAmount(state.profile.balance || 0))
    .replace("{spent}", formatWalletAmount(getTodaySpentAmount()));
}

async function handleSignin(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "").trim();

  if (!email || !password) {
    showToast(t("fillRequired"));
    return;
  }

  try {
    if (state.supabaseMode) {
      const { error } = await state.supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } else {
      const user = loadLocalUsers().find((item) => item.email === email && item.password === password);
      if (!user) {
        throw new Error("Invalid credentials");
      }
      localStorage.setItem(STORAGE_KEYS.localSession, user.id);
      state.user = user;
      state.session = { user };
      state.profile = toProfile(user, true);
      await refreshTickets();
      renderAccount();
      renderWallet();
    }
    showToast(t("loginSuccess"));
    navigateTo("homepage.html");
  } catch (error) {
    console.error(error);
    showToast(error.message || t("unknownError"));
  }
}

async function handleSignup(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "").trim();
  const passwordConfirm = String(formData.get("password_confirm") || "").trim();

  if (!name || !email || !password || !passwordConfirm) {
    showToast(t("fillRequired"));
    return;
  }

  if (password !== passwordConfirm) {
    showToast(t("passwordMismatch"));
    return;
  }

  try {
    if (state.supabaseMode) {
      const { data, error } = await state.supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            balance: 0,
            ticket_discount_percent: 0,
            role: "User"
          }
        }
      });
      if (error) throw error;
      if (data?.user) {
        await bootstrapSupabaseProfile(data.user, { name, email });
      }
    } else {
      const users = loadLocalUsers();
      if (users.some((user) => user.email === email)) {
        throw new Error("Email already registered");
      }
      const newUser = {
        id: generateId(),
        name,
        email,
        password,
        balance: 0,
        ticket_discount_percent: 0,
        role: "User"
      };
      users.push(newUser);
      localStorage.setItem(STORAGE_KEYS.localUsers, JSON.stringify(users));
      localStorage.setItem(STORAGE_KEYS.localSession, newUser.id);
      state.user = newUser;
      state.session = { user: newUser };
      state.profile = toProfile(newUser, true);
      await refreshTickets();
      renderAccount();
      renderWallet();
    }
    showToast(t("signupSuccess"));
    navigateTo("homepage.html");
  } catch (error) {
    console.error(error);
    showToast(error.message || t("unknownError"));
  }
}

async function bootstrapSupabaseProfile(user, overrides = {}) {
  if (!state.supabaseMode || !state.supabase || !user?.id) return null;

  const payload = {
    id: user.id,
    name: overrides.name || user.user_metadata?.name || user.email?.split("@")[0] || "User",
    email: overrides.email || user.email || "-",
    balance: 0,
    ticket_discount_percent: 0,
    role: String(user.user_metadata?.role || "user").toLowerCase() === "admin" ? "admin" : "user"
  };

  try {
    const { data, error } = await state.supabase
      .from("profiles")
      .upsert(payload, { onConflict: "id" })
      .select("name,email,balance,role,ticket_discount_percent")
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.warn("profile bootstrap skipped", error);
    return null;
  }
}

async function handleTicketSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const payload = {
    transport_type: String(formData.get("transport_type") || "").trim(),
    direction: String(formData.get("direction") || "").trim(),
    bus_number: String(formData.get("bus_number") || "").trim().toUpperCase()
  };
  const ticketPrice = getCurrentTicketPrice();

  if (!payload.transport_type || !payload.direction || !payload.bus_number) {
    showToast(t("fillRequired"));
    return;
  }

  if (getBalanceValue(state.profile.balance) < ticketPrice) {
    localStorage.removeItem(STORAGE_KEYS.currentOnayTicket);
    state.currentTicket = null;
    updateOnayPurchaseState();
    showToast(t("insufficientBalanceToast"));
    return;
  }

  const fallbackTicket = {
    id: generateId(),
    user_id: getTicketOwnerKey(),
    transport_type: payload.transport_type,
    direction: payload.direction,
    bus_number: payload.bus_number,
    price_paid: ticketPrice,
    created_at: new Date().toISOString()
  };

  localStorage.setItem(STORAGE_KEYS.currentOnayTicket, JSON.stringify(fallbackTicket));

  try {
    let savedTicket = fallbackTicket;

    if (state.supabaseMode && state.user) {
      const { data, error } = await state.supabase
        .from("tickets")
        .insert({
          user_id: state.user.id,
          transport_type: payload.transport_type,
          direction: payload.direction,
          bus_number: payload.bus_number
        })
        .select()
        .single();

      if (error) {
        console.warn("tickets insert failed, using local fallback", error);
        persistLocalFallbackTicket(fallbackTicket);
      } else if (data) {
        savedTicket = { ...data, price_paid: ticketPrice };
        localStorage.setItem(STORAGE_KEYS.currentOnayTicket, JSON.stringify(savedTicket));
        state.tickets.unshift(normalizeTicket(savedTicket));
      }
    } else {
      persistLocalFallbackTicket(fallbackTicket);
    }

    await deductTicketBalance(ticketPrice);
    await addActivity({
      title: t("activityTicketTitle"),
      body: t("activityTicketText")
        .replace("{direction}", payload.direction)
        .replace("{price}", formatWalletAmount(ticketPrice)),
      type: "ticket"
    });

    renderTickets();
    renderAccount();
    renderWallet();
    updateOnayPurchaseState();
    showToast(t("ticketSaved"));
    navigateTo("ONAY/mytickets.html");
  } catch (error) {
    console.error(error);
    persistLocalFallbackTicket(fallbackTicket);
    await deductTicketBalance(ticketPrice);
    await addActivity({
      title: t("activityTicketTitle"),
      body: t("activityTicketText")
        .replace("{direction}", payload.direction)
        .replace("{price}", formatWalletAmount(ticketPrice)),
      type: "ticket"
    });
    renderAccount();
    renderWallet();
    updateOnayPurchaseState();
    showToast(t("ticketSaved"));
    navigateTo("ONAY/mytickets.html");
  }
}

function persistLocalFallbackTicket(ticket) {
  const localTickets = loadLocalTickets();
  const exists = localTickets.some((item) => item.id === ticket.id);
  if (!exists) {
    localTickets.push(ticket);
    localStorage.setItem(STORAGE_KEYS.localTickets, JSON.stringify(localTickets));
  }

  state.tickets = localTickets
    .filter((item) => item.user_id === getTicketOwnerKey())
    .map(normalizeTicket)
    .sort(byNewest);
  localStorage.setItem(STORAGE_KEYS.currentOnayTicket, JSON.stringify(ticket));
}

async function logout() {
  try {
    if (state.supabaseMode) {
      const { error } = await state.supabase.auth.signOut();
      if (error) throw error;
    } else {
      localStorage.removeItem(STORAGE_KEYS.localSession);
      state.user = null;
      state.session = null;
      state.profile = guestProfile();
      await refreshTickets();
      renderAccount();
      renderWallet();
    }
    closeAccountPanel();
    showToast(t("logoutSuccess"));
    navigateTo("homepage.html");
  } catch (error) {
    console.error(error);
    showToast(error.message || t("unknownError"));
  }
}

async function refreshTickets() {
  state.usedIds = new Set(loadUsedTicketMap()[getTicketOwnerKey()] || []);

  if (state.supabaseMode && state.user) {
    try {
      const { data, error } = await state.supabase
        .from("tickets")
        .select("id,user_id,transport_type,direction,bus_number,created_at")
        .eq("user_id", state.user.id)
        .order("created_at", { ascending: false });
      if (error) throw error;
      state.tickets = (data || []).map(normalizeTicket);
    } catch (error) {
      console.error(error);
      state.tickets = [];
    }
  } else {
    state.tickets = loadLocalTickets()
      .filter((ticket) => ticket.user_id === getTicketOwnerKey())
      .map(normalizeTicket)
      .sort(byNewest);
  }

  renderTickets();
  renderHistory();
}

function renderTickets() {
  const container = document.getElementById("ticketsList");
  const empty = document.getElementById("ticketsEmpty");
  if (!container || !empty) return;

  const activeTickets = state.tickets.filter((ticket) => !state.usedIds.has(ticket.id));
  empty.hidden = activeTickets.length > 0;

  container.innerHTML = activeTickets
    .map((ticket) => {
      const transportImage = ticket.transport_type === "Троллейбус" ? "img/onaymap.jpg" : "img/autobus.PNG";
      return `
        <button class="ticket-card" type="button" data-ticket-id="${ticket.id}" aria-expanded="false">
          <div class="ticket-side" aria-label="ONAY логотипі">
            <img class="ticket-side-logo-image" src="img/onay-logo.PNG" alt="ONAY logo">
          </div>
          <div class="ticket-main">
            <div class="ticket-top">
              <div>
                <h2>${escapeHtml(ticket.transport_type)}</h2>
                <p>${escapeHtml(t("ticketSubtitle"))}</p>
              </div>
              <img class="ticket-chip-image" src="img/onaymap.jpg" alt="Onay map">
            </div>

            <div class="ticket-info-grid">
              <span class="ticket-label">${escapeHtml(t("directionShort"))}</span>
              <div class="ticket-value route-value">
                <img class="bus-mini-image" src="${transportImage}" alt="Transport icon">
                <strong>${escapeHtml(ticket.direction)}</strong>
                <span class="plate-box">${escapeHtml(ticket.ticketCode)}</span>
              </div>
            </div>

            <div class="ticket-info-grid">
              <span class="ticket-label">${escapeHtml(t("transportShort"))}</span>
              <div class="ticket-value">
                <strong>${escapeHtml(ticket.bus_number)}</strong>
              </div>
            </div>

            <div class="ticket-info-grid">
              <span class="ticket-label">${escapeHtml(t("timeLabel"))}</span>
              <div class="ticket-value">
                <strong>${escapeHtml(formatDateTime(ticket.created_at))}</strong>
              </div>
            </div>

            <div class="ticket-info-grid">
              <span class="ticket-label">${escapeHtml(t("checkCodeLabel"))}</span>
              <div class="ticket-value">
                <strong>${escapeHtml(ticket.checkCode)}</strong>
                <img class="ticket-code-icon" src="img/qrticket.PNG" alt="QR ticket icon">
              </div>
            </div>
          </div>
        </button>
      `;
    })
    .join("");
}

function renderHistory() {
  const container = document.getElementById("historyList");
  const empty = document.getElementById("historyEmpty");
  if (!container || !empty) return;

  const archivedTickets = state.tickets.filter((ticket) => state.usedIds.has(ticket.id));
  empty.hidden = archivedTickets.length > 0;

  container.innerHTML = archivedTickets
    .map((ticket) => {
      return `
        <article class="history-ticket">
          <div class="history-ticket__top">
            <div class="history-ticket__title">
              <img class="bus-mini-image" src="img/autobus.PNG" alt="Transport icon">
              <span>${escapeHtml(ticket.transport_type)}</span>
            </div>
            <span class="plate-box">${escapeHtml(ticket.ticketCode)}</span>
          </div>
          <div class="history-ticket__meta">
            <div class="history-ticket__row">
              <span>${escapeHtml(t("directionShort"))}</span>
              <strong>${escapeHtml(ticket.direction)}</strong>
            </div>
            <div class="history-ticket__row">
              <span>${escapeHtml(t("transportShort"))}</span>
              <strong>${escapeHtml(ticket.bus_number)}</strong>
            </div>
            <div class="history-ticket__row">
              <span>${escapeHtml(t("timeLabel"))}</span>
              <strong>${escapeHtml(formatDateTime(ticket.created_at))}</strong>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function openQrPanel(ticket) {
  const panel = document.getElementById("qrPanel");
  if (!panel) return;

  document.getElementById("qrRouteValue").textContent = ticket.direction;
  document.getElementById("qrPlateValue").textContent = ticket.ticketCode;
  document.getElementById("qrTimeValue").textContent = formatDateTime(ticket.created_at);
  document.getElementById("qrCheckCode").textContent = ticket.checkCode;
  drawPseudoQr(document.getElementById("qrCanvas"), ticket.qrSeed);
  panel.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeQrPanel() {
  const panel = document.getElementById("qrPanel");
  if (!panel) return;
  panel.hidden = true;
  document.body.style.overflow = "";
}

function toggleNotificationsPanel() {
  const panel = document.getElementById("notificationsPanel");
  const backdrop = document.getElementById("modalBackdrop");
  const trigger = document.querySelector("[data-action='notifications']");
  if (!panel || !backdrop || !trigger) return;
  const opening = panel.hidden;
  closeAccountPanel();
  panel.hidden = !opening;
  backdrop.hidden = !opening;
  trigger.classList.toggle("is-open", opening);
}

function closeNotificationsPanel() {
  const panel = document.getElementById("notificationsPanel");
  const backdrop = document.getElementById("modalBackdrop");
  const trigger = document.querySelector("[data-action='notifications']");
  if (!panel || !backdrop || !trigger) return;
  panel.hidden = true;
  backdrop.hidden = true;
  trigger.classList.remove("is-open");
}

function toggleAccountPanel() {
  const accountPanel = document.getElementById("accountPanel");
  const backdrop = document.getElementById("modalBackdrop");
  const trigger = document.querySelector("[data-action='account']");
  if (!accountPanel || !backdrop || !trigger) return;
  const opening = accountPanel.hidden;
  closeNotificationsPanel();
  accountPanel.hidden = !opening;
  backdrop.hidden = !opening;
  trigger.classList.toggle("is-open", opening);
}

function closeAccountPanel() {
  const accountPanel = document.getElementById("accountPanel");
  const backdrop = document.getElementById("modalBackdrop");
  const trigger = document.querySelector("[data-action='account']");
  if (!accountPanel || !backdrop || !trigger) return;
  accountPanel.hidden = true;
  backdrop.hidden = true;
  trigger.classList.remove("is-open");
}

function renderAccount() {
  const name = document.querySelector("[data-account-name]");
  const email = document.querySelector("[data-account-email]");
  const role = document.querySelector("[data-account-role]");
  const balance = document.querySelector("[data-account-balance]");

  if (name) name.textContent = state.profile.name || "Guest";
  if (email) email.textContent = state.profile.email || "-";
  if (role) role.textContent = getRoleLabel(state.profile.role);
  if (balance) balance.textContent = formatWalletAmount(state.profile.balance || 0);

  document.querySelectorAll("[data-auth-link='signup'], [data-auth-link='signin']").forEach((link) => {
    link.hidden = state.profile.role !== "guest";
  });
  const logoutButton = document.querySelector("[data-action='logout']");
  if (logoutButton) {
    logoutButton.hidden = state.profile.role === "guest";
  }
  renderAdminLinks();
  renderAdminPage();
}

function renderWallet() {
  document.querySelectorAll("[data-balance]").forEach((node) => {
    node.textContent = formatWalletAmount(state.profile.balance || 0);
  });

  updateOnayPurchaseState();
  updateSendBalanceHint();
}

function updateSendBalanceHint() {
  if (document.body.dataset.page !== "sendpay") return;
  const hint = document.getElementById("sendBalanceHint");
  if (!hint) return;
  hint.textContent = t("sendBalanceHint").replace("{balance}", formatWalletAmount(state.profile.balance || 0));
}

async function resolveProfile(user) {
  let profile = null;

  if (state.supabaseMode) {
    try {
      const { data } = await state.supabase
        .from("profiles")
        .select("name,email,balance,role,ticket_discount_percent")
        .eq("id", user.id)
        .maybeSingle();
      if (data) {
        profile = {
          name: data.name || user.user_metadata?.name || user.email,
          email: data.email || user.email,
          balance: data.balance ?? user.user_metadata?.balance ?? 0,
          role: String(data.role || "user").toLowerCase(),
          ticket_discount_percent: getTicketDiscountPercent(data)
        };
      }
    } catch (error) {
      console.warn("profiles lookup skipped", error);
    }
  }

  if (!profile) {
    profile = {
      name: user.user_metadata?.name || user.name || user.email?.split("@")[0] || "User",
      email: user.email || "-",
      balance: Number(user.user_metadata?.balance ?? user.balance ?? 0),
      role: user.user_metadata?.role?.toLowerCase?.() || user.role?.toLowerCase?.() || "user",
      ticket_discount_percent: getTicketDiscountPercent(user.user_metadata || user)
    };
  }

  const cache = loadProfileCache();
  cache[user.id] = profile;
  localStorage.setItem(STORAGE_KEYS.profileCache, JSON.stringify(cache));
  return profile;
}

function guestProfile() {
  return {
    name: state.lang === "ru" ? "Гость" : "Қонақ",
    email: "-",
    balance: 0,
    role: "guest",
    ticket_discount_percent: 0
  };
}

function toProfile(user, isLocal = false) {
  if (!user) return guestProfile();
  const roleValue = isLocal ? user.role : user.role || user.user_metadata?.role || "user";
  return {
    name: user.name || user.user_metadata?.name || user.email?.split("@")[0] || "User",
    email: user.email || "-",
    balance: Number(user.balance ?? user.user_metadata?.balance ?? 0),
    role: String(roleValue || "user").toLowerCase(),
    ticket_discount_percent: getTicketDiscountPercent(isLocal ? user : (user.user_metadata || user))
  };
}

function getRoleLabel(role) {
  if (role === "admin") return t("adminRole");
  if (role === "user") return t("userRole");
  return t("guestRole");
}

function renderAdminLinks() {
  const isAdmin = state.profile.role === "admin";
  document.querySelectorAll("[data-admin-link]").forEach((link) => {
    link.hidden = !isAdmin;
  });
}

function renderAdminPage() {
  if (document.body.dataset.page !== "admin") return;

  const lookupForm = document.getElementById("adminLookupForm");
  const form = document.getElementById("adminBalanceForm");
  const discountForm = document.getElementById("adminDiscountForm");
  const discountResetForm = document.getElementById("adminDiscountResetForm");
  const stateNode = document.getElementById("adminState");
  const resultBlock = document.getElementById("adminResultBlock");
  if (!form || !lookupForm || !discountForm || !discountResetForm || !stateNode) return;

  let message = t("adminReady");
  let disabled = false;

  if (!state.supabaseMode) {
    message = t("adminNeedsSupabase");
    disabled = true;
  } else if (state.profile.role !== "admin") {
    message = t("adminOnly");
    disabled = true;
  }

  stateNode.textContent = message;
  [...lookupForm.querySelectorAll("input, button"), ...form.querySelectorAll("input, button"), ...discountForm.querySelectorAll("input, button"), ...discountResetForm.querySelectorAll("input, button")].forEach((node) => {
    node.disabled = disabled;
  });

  if (disabled && resultBlock) {
    resultBlock.hidden = true;
  }
}

async function handleAdminBalanceSubmit(event) {
  event.preventDefault();

  if (!state.supabaseMode) {
    showToast(t("adminNeedsSupabase"));
    return;
  }

  if (state.profile.role !== "admin") {
    showToast(t("adminOnly"));
    return;
  }

  const formData = new FormData(event.currentTarget);
  const targetEmail = String(formData.get("target_email") || "").trim();
  const rawBalance = String(formData.get("new_balance") || "").trim();
  const newBalance = Number(rawBalance);

  if (!targetEmail || rawBalance === "") {
    showToast(t("fillRequired"));
    return;
  }

  if (!Number.isFinite(newBalance) || newBalance < 0) {
    showToast(t("unknownError"));
    return;
  }

  try {
    const { data, error } = await state.supabase.rpc("admin_set_user_balance", {
      target_user_email: targetEmail,
      new_balance: newBalance
    });
    if (error) throw error;

    const updated = Array.isArray(data) ? data[0] : data;
    if (!updated) {
      throw new Error(t("unknownError"));
    }

    if (updated.id) {
      const cache = loadProfileCache();
      cache[updated.id] = {
        name: updated.name || "-",
        email: updated.email || "-",
        balance: Number(updated.balance || 0),
        role: String(updated.role || "user").toLowerCase(),
        ticket_discount_percent: getTicketDiscountPercent(updated)
      };
      localStorage.setItem(STORAGE_KEYS.profileCache, JSON.stringify(cache));
    }

    renderAdminResult(updated, "adminResultTitle");

    if (state.user?.email && String(state.user.email).toLowerCase() === String(updated.email || "").toLowerCase()) {
      state.profile = {
        ...state.profile,
        balance: Number(updated.balance || 0),
        role: String(updated.role || state.profile.role || "user").toLowerCase(),
        ticket_discount_percent: getTicketDiscountPercent(updated)
      };
      renderAccount();
      renderWallet();
      await refreshNotifications();
    }

    showToast(t("adminBalanceUpdated"));
    event.currentTarget.reset();
  } catch (error) {
    console.error(error);
    showToast(error.message || t("unknownError"));
  }
}

async function handleAdminLookupSubmit(event) {
  event.preventDefault();

  if (!state.supabaseMode) {
    showToast(t("adminNeedsSupabase"));
    return;
  }

  if (state.profile.role !== "admin") {
    showToast(t("adminOnly"));
    return;
  }

  const formData = new FormData(event.currentTarget);
  const targetEmail = String(formData.get("target_email") || "").trim();

  if (!targetEmail) {
    showToast(t("fillRequired"));
    return;
  }

  try {
    const { data, error } = await state.supabase.rpc("admin_get_user_profile", {
      target_user_email: targetEmail
    });

    if (error) throw error;
    const foundProfile = Array.isArray(data) ? data[0] : data;
    if (!foundProfile) {
      throw new Error(t("adminLookupNotFound"));
    }

    if (foundProfile.id) {
      const cache = loadProfileCache();
      cache[foundProfile.id] = {
        name: foundProfile.name || "-",
        email: foundProfile.email || "-",
        balance: Number(foundProfile.balance || 0),
        role: String(foundProfile.role || "user").toLowerCase(),
        ticket_discount_percent: getTicketDiscountPercent(foundProfile)
      };
      localStorage.setItem(STORAGE_KEYS.profileCache, JSON.stringify(cache));
    }

    renderAdminResult(foundProfile, "adminLookupTitle");
    showToast(t("adminLookupSuccess"));
  } catch (error) {
    console.error(error);
    showToast(error.message || t("unknownError"));
  }
}

async function handleAdminDiscountSubmit(event) {
  event.preventDefault();

  if (!state.supabaseMode) {
    showToast(t("adminNeedsSupabase"));
    return;
  }

  if (state.profile.role !== "admin") {
    showToast(t("adminOnly"));
    return;
  }

  const formData = new FormData(event.currentTarget);
  const targetEmail = String(formData.get("target_email") || "").trim();

  if (!targetEmail) {
    showToast(t("fillRequired"));
    return;
  }

  try {
    const { data, error } = await state.supabase.rpc("admin_set_user_ticket_discount", {
      target_user_email: targetEmail,
      new_ticket_discount_percent: 90
    });
    if (error) throw error;

    const updated = Array.isArray(data) ? data[0] : data;
    if (!updated) {
      throw new Error(t("unknownError"));
    }

    if (updated.id) {
      const cache = loadProfileCache();
      cache[updated.id] = {
        name: updated.name || "-",
        email: updated.email || "-",
        balance: Number(updated.balance || 0),
        role: String(updated.role || "user").toLowerCase(),
        ticket_discount_percent: getTicketDiscountPercent(updated)
      };
      localStorage.setItem(STORAGE_KEYS.profileCache, JSON.stringify(cache));
    }

    renderAdminResult(updated, "adminResultTitle");

    if (state.user?.email && String(state.user.email).toLowerCase() === String(updated.email || "").toLowerCase()) {
      state.profile = {
        ...state.profile,
        balance: Number(updated.balance || state.profile.balance || 0),
        role: String(updated.role || state.profile.role || "user").toLowerCase(),
        ticket_discount_percent: getTicketDiscountPercent(updated)
      };
      try {
        await state.supabase.auth.updateUser({
          data: {
            ...(state.user.user_metadata || {}),
            ticket_discount_percent: getTicketDiscountPercent(updated)
          }
        });
      } catch (metadataError) {
        console.error("Auth metadata discount update failed", metadataError);
      }
      renderAccount();
      renderWallet();
      await refreshNotifications();
    }

    showToast(t("adminDiscountUpdated"));
    event.currentTarget.reset();
  } catch (error) {
    console.error(error);
    showToast(error.message || t("unknownError"));
  }
}

async function handleAdminDiscountResetSubmit(event) {
  event.preventDefault();

  if (!state.supabaseMode) {
    showToast(t("adminNeedsSupabase"));
    return;
  }

  if (state.profile.role !== "admin") {
    showToast(t("adminOnly"));
    return;
  }

  const formData = new FormData(event.currentTarget);
  const targetEmail = String(formData.get("target_email") || "").trim();

  if (!targetEmail) {
    showToast(t("fillRequired"));
    return;
  }

  try {
    const { data, error } = await state.supabase.rpc("admin_set_user_ticket_discount", {
      target_user_email: targetEmail,
      new_ticket_discount_percent: 0
    });
    if (error) throw error;

    const updated = Array.isArray(data) ? data[0] : data;
    if (!updated) {
      throw new Error(t("unknownError"));
    }

    if (updated.id) {
      const cache = loadProfileCache();
      cache[updated.id] = {
        name: updated.name || "-",
        email: updated.email || "-",
        balance: Number(updated.balance || 0),
        role: String(updated.role || "user").toLowerCase(),
        ticket_discount_percent: 0
      };
      localStorage.setItem(STORAGE_KEYS.profileCache, JSON.stringify(cache));
    }

    renderAdminResult(updated, "adminResultTitle");

    if (state.user?.email && String(state.user.email).toLowerCase() === String(updated.email || "").toLowerCase()) {
      state.profile = {
        ...state.profile,
        ticket_discount_percent: 0
      };
      try {
        await state.supabase.auth.updateUser({
          data: {
            ...(state.user.user_metadata || {}),
            ticket_discount_percent: 0
          }
        });
      } catch (metadataError) {
        console.error("Auth metadata discount reset failed", metadataError);
      }
      renderAccount();
      renderWallet();
      await refreshNotifications();
    }

    showToast(t("adminDiscountRemoved"));
    event.currentTarget.reset();
  } catch (error) {
    console.error(error);
    showToast(error.message || t("unknownError"));
  }
}

async function handlePaymentConfirmSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const amountRaw = String(formData.get("amount") || "").trim();
  const senderName = String(formData.get("sender_name") || "").trim();
  const methodName = String(event.currentTarget.dataset.paymentMethod || "").trim();
  const amount = Number(amountRaw);

  if (!amountRaw || !senderName) {
    showToast(t("fillRequired"));
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    showToast(t("fillRequired"));
    return;
  }

  await addActivity({
    title: t("transferNotificationTitle"),
    body: `${t("transferNotificationText")
      .replace("{sender}", senderName)
      .replace("{amount}", formatWalletAmount(amount))}${methodName ? ` (${methodName})` : ""}`,
    type: "transfer"
  });

  showToast(t("transferConfirmed"));
  event.currentTarget.reset();
}

async function handleSendBalanceSubmit(event) {
  event.preventDefault();

  if (state.profile.role === "guest" || !state.user) {
    showToast(t("transferRequiresAuth"));
    return;
  }

  const formData = new FormData(event.currentTarget);
  const receiverEmail = String(formData.get("receiver_email") || "").trim();
  const amountRaw = String(formData.get("amount") || "").trim();
  const amount = Number(amountRaw);

  if (!receiverEmail || !amountRaw) {
    showToast(t("fillRequired"));
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    showToast(t("fillRequired"));
    return;
  }

  if (getBalanceValue(state.profile.balance) < amount) {
    showToast(t("transferInsufficientBalance"));
    return;
  }

  try {
    let shouldCreateLocalSenderActivity = true;

    if (state.supabaseMode && state.supabase) {
      const { data, error } = await state.supabase.rpc("user_send_balance", {
        target_user_email: receiverEmail,
        transfer_amount: amount,
        sender_name: state.profile.name || state.profile.email
      });

      if (error) throw error;

      const result = Array.isArray(data) ? data[0] : data;
      const nextBalance = Number(result?.sender_balance ?? getBalanceValue(state.profile.balance) - amount);
      shouldCreateLocalSenderActivity = false;
      state.profile = {
        ...state.profile,
        balance: nextBalance
      };

      try {
        const { data: authData, error: authError } = await state.supabase.auth.updateUser({
          data: {
            ...(state.user.user_metadata || {}),
            balance: nextBalance
          }
        });

        if (!authError && authData?.user) {
          state.user = authData.user;
          state.session = {
            ...(state.session || {}),
            user: authData.user
          };
        }
      } catch (metadataError) {
        console.error("Auth metadata transfer update failed", metadataError);
      }

      const cache = loadProfileCache();
      if (state.user?.id) {
        cache[state.user.id] = {
          ...(cache[state.user.id] || {}),
          name: state.profile.name,
          email: state.profile.email,
          balance: state.profile.balance,
          role: state.profile.role,
          ticket_discount_percent: state.profile.ticket_discount_percent
        };
        localStorage.setItem(STORAGE_KEYS.profileCache, JSON.stringify(cache));
      }
    } else {
      const users = loadLocalUsers();
      const senderIndex = users.findIndex((user) => user.id === state.user.id);
      const receiverIndex = users.findIndex((user) => String(user.email).toLowerCase() === receiverEmail.toLowerCase());

      if (senderIndex < 0 || receiverIndex < 0) {
        throw new Error(t("adminLookupNotFound"));
      }

      if (senderIndex === receiverIndex) {
        throw new Error(t("unknownError"));
      }

      const senderBalance = getBalanceValue(users[senderIndex].balance);
      if (senderBalance < amount) {
        throw new Error(t("transferInsufficientBalance"));
      }

      users[senderIndex] = {
        ...users[senderIndex],
        balance: senderBalance - amount
      };

      users[receiverIndex] = {
        ...users[receiverIndex],
        balance: getBalanceValue(users[receiverIndex].balance) + amount
      };

      localStorage.setItem(STORAGE_KEYS.localUsers, JSON.stringify(users));
      state.user = users[senderIndex];
      state.session = { user: users[senderIndex] };
      state.profile = toProfile(users[senderIndex], true);

      const cache = loadProfileCache();
      cache[users[senderIndex].id] = {
        ...(cache[users[senderIndex].id] || {}),
        name: users[senderIndex].name,
        email: users[senderIndex].email,
        balance: users[senderIndex].balance,
        role: String(users[senderIndex].role || "user").toLowerCase(),
        ticket_discount_percent: getTicketDiscountPercent(users[senderIndex])
      };
      cache[users[receiverIndex].id] = {
        ...(cache[users[receiverIndex].id] || {}),
        name: users[receiverIndex].name,
        email: users[receiverIndex].email,
        balance: users[receiverIndex].balance,
        role: String(users[receiverIndex].role || "user").toLowerCase(),
        ticket_discount_percent: getTicketDiscountPercent(users[receiverIndex])
      };
      localStorage.setItem(STORAGE_KEYS.profileCache, JSON.stringify(cache));

      await addActivity({
        title: t("transferReceivedTitle"),
        body: t("transferReceivedText")
          .replace("{sender}", state.profile.name || state.profile.email)
          .replace("{amount}", formatWalletAmount(amount)),
        type: "transfer",
        userId: users[receiverIndex].id
      });
    }

    if (shouldCreateLocalSenderActivity) {
      await addActivity({
        title: t("transferSentTitle"),
        body: t("transferSentText")
          .replace("{email}", receiverEmail)
          .replace("{amount}", formatWalletAmount(amount)),
        type: "transfer"
      });
    }

    renderAccount();
    renderWallet();
    updateSendBalanceHint();
    await refreshNotifications();
    showToast(t("transferSentSuccess"));
    event.currentTarget.reset();
  } catch (error) {
    console.error(error);
    showToast(error.message || t("unknownError"));
  }
}

function renderAdminResult(profile, titleKey = "adminResultTitle") {
  const result = document.getElementById("adminResult");
  const resultBlock = document.getElementById("adminResultBlock");
  if (!result || !resultBlock) return;

  const title = document.getElementById("adminResultTitle");
  if (title) {
    title.textContent = t(titleKey);
    title.dataset.i18n = titleKey;
  }

  document.getElementById("adminResultName").textContent = profile.name || "-";
  document.getElementById("adminResultEmail").textContent = profile.email || "-";
  document.getElementById("adminResultBalance").textContent = `${Number(profile.balance || 0)} ₸`;
  document.getElementById("adminResultRole").textContent = getRoleLabel(String(profile.role || "user").toLowerCase());
  document.getElementById("adminResultDiscount").textContent = `${getTicketDiscountPercent(profile)}%`;
  resultBlock.hidden = false;
  resultBlock.open = true;
  result.hidden = false;
}

function normalizeTicket(ticket) {
  const seed = hashString(`${ticket.id}-${ticket.created_at}-${ticket.bus_number}-${ticket.direction}`);
  return {
    ...ticket,
    ticketCode: generateCode(seed, 8),
    checkCode: `B${String(seed % 10000).padStart(4, "0")}`,
    qrSeed: seed
  };
}

function byNewest(a, b) {
  return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
}

function formatDateTime(value) {
  const locale = state.lang === "ru" ? "ru-RU" : "kk-KZ";
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function generateCode(seed, length) {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let current = seed || 1;
  let result = "";
  for (let index = 0; index < length; index += 1) {
    current = (current * 9301 + 49297) % 233280;
    result += alphabet[current % alphabet.length];
  }
  return result;
}

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash) || 1;
}

function drawPseudoQr(canvas, seed) {
  if (!(canvas instanceof HTMLCanvasElement)) return;
  const ctx = canvas.getContext("2d");
  const size = 21;
  const moduleSize = canvas.width / size;
  const rand = seededRandom(seed);

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      if (isFinderArea(row, col, size)) continue;
      const dark = rand() > 0.5;
      if (dark) {
        ctx.fillStyle = "#111111";
        ctx.fillRect(col * moduleSize, row * moduleSize, moduleSize, moduleSize);
      }
    }
  }

  drawFinder(ctx, 0, 0, moduleSize);
  drawFinder(ctx, size - 7, 0, moduleSize);
  drawFinder(ctx, 0, size - 7, moduleSize);
}

function isFinderArea(row, col, size) {
  const topLeft = row < 7 && col < 7;
  const topRight = row < 7 && col >= size - 7;
  const bottomLeft = row >= size - 7 && col < 7;
  return topLeft || topRight || bottomLeft;
}

function drawFinder(ctx, startCol, startRow, moduleSize) {
  const layers = [
    { offset: 0, size: 7, color: "#111111" },
    { offset: 1, size: 5, color: "#ffffff" },
    { offset: 2, size: 3, color: "#111111" }
  ];
  layers.forEach((layer) => {
    ctx.fillStyle = layer.color;
    ctx.fillRect(
      (startCol + layer.offset) * moduleSize,
      (startRow + layer.offset) * moduleSize,
      layer.size * moduleSize,
      layer.size * moduleSize
    );
  });
}

function seededRandom(initialSeed) {
  let seed = initialSeed % 2147483647;
  if (seed <= 0) seed += 2147483646;
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

async function refreshNotifications() {
  if (state.supabaseMode && state.user?.id) {
    try {
      const { data, error } = await state.supabase
        .from("notifications")
        .select("id,type,title,body,created_at")
        .eq("user_id", state.user.id)
        .order("created_at", { ascending: false })
        .limit(30);

      if (error) throw error;
      state.notifications = data || [];
      renderNotifications();
      return;
    } catch (error) {
      console.warn("notifications lookup skipped", error);
    }
  }

  state.notifications = loadLocalNotifications()
    .filter((item) => item.user_id === getTicketOwnerKey())
    .sort(byNewest);
  renderNotifications();
}

function renderNotifications() {
  const list = document.getElementById("notificationsList");
  const empty = document.getElementById("notificationsEmpty");
  if (!list || !empty) return;

  empty.hidden = state.notifications.length > 0;
  list.innerHTML = state.notifications
    .map((item) => `
      <article class="notification-item">
        <div class="notification-item__title-row">
          <strong>${escapeHtml(item.title || "-")}</strong>
          <time>${escapeHtml(formatDateTime(item.created_at))}</time>
        </div>
        <p>${escapeHtml(item.body || "-")}</p>
      </article>
    `)
    .join("");

  document.querySelectorAll("[data-notification-badge]").forEach((badge) => {
    const count = state.notifications.length;
    badge.hidden = count === 0;
    badge.textContent = "";
  });
}

function loadLocalNotifications() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.localNotifications) || "[]");
  } catch {
    return [];
  }
}

function saveLocalNotifications(items) {
  localStorage.setItem(STORAGE_KEYS.localNotifications, JSON.stringify(items));
}

async function addActivity({ title, body, type = "system", userId = state.user?.id || getTicketOwnerKey() }) {
  const entry = {
    id: generateId(),
    user_id: userId,
    type,
    title,
    body,
    created_at: new Date().toISOString()
  };

  if (state.supabaseMode && state.user?.id && userId === state.user.id) {
    try {
      const { error } = await state.supabase
        .from("notifications")
        .insert({
          user_id: state.user.id,
          type,
          title,
          body
        });

      if (!error) {
        await refreshNotifications();
        return;
      }
    } catch (error) {
      console.warn("notification insert skipped", error);
    }
  }

  const items = loadLocalNotifications();
  items.unshift(entry);
  saveLocalNotifications(items.slice(0, 30));
  await refreshNotifications();
}

function showToast(message) {
  const stack = document.getElementById("toastStack");
  if (!stack) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  stack.appendChild(toast);
  window.setTimeout(() => {
    toast.remove();
  }, 3000);
}

function isFullscreenActive() {
  return Boolean(document.fullscreenElement);
}

async function toggleFullscreenMode() {
  try {
    if (isFullscreenActive()) {
      await document.exitFullscreen();
      return;
    }

    const target = document.documentElement;
    if (target?.requestFullscreen) {
      await target.requestFullscreen();
      showToast(t("fullscreenHint"));
    }
  } catch (error) {
    console.error("Fullscreen toggle failed", error);
    showToast(t("fullscreenHint"));
  } finally {
    syncFullscreenUi();
  }
}

function syncFullscreenUi() {
  const active = isFullscreenActive();
  document.body.classList.toggle("is-fullscreen-mode", active);

  document.querySelectorAll("[data-action='fullscreen']").forEach((button) => {
    button.classList.toggle("is-active", active);
    const label = button.querySelector("[data-i18n='fullscreenButton'], [data-i18n='exitFullscreenButton'], span:last-child");
    if (label) {
      label.textContent = active ? t("exitFullscreenButton") : t("fullscreenButton");
      label.dataset.i18n = active ? "exitFullscreenButton" : "fullscreenButton";
    }
  });
}

function loadLocalUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.localUsers) || "[]");
  } catch {
    return [];
  }
}

function getCurrentLocalUser() {
  const sessionId = localStorage.getItem(STORAGE_KEYS.localSession);
  if (!sessionId) return null;
  return loadLocalUsers().find((user) => user.id === sessionId) || null;
}

function loadLocalTickets() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.localTickets) || "[]");
  } catch {
    return [];
  }
}

function loadUsedTicketMap() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.usedTickets) || "{}");
  } catch {
    return {};
  }
}

function loadProfileCache() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.profileCache) || "{}");
  } catch {
    return {};
  }
}

function getTicketOwnerKey() {
  return state.user?.id || "guest";
}

function navigateTo(path) {
  window.location.href = path;
}

function generateId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function updateOnayPurchaseState() {
  if (document.body.dataset.page !== "onay") return;

  const submitButton = document.querySelector("#ticketForm .primary-button");
  const note = document.getElementById("ticketPriceNote");
  const warning = document.getElementById("ticketBalanceWarning");
  const balanceValue = getBalanceValue(state.profile.balance);
  const ticketPrice = getCurrentTicketPrice();
  const hasEnoughBalance = balanceValue >= ticketPrice;
  const balanceText = formatWalletAmount(balanceValue);

  if (note) {
    const discount = getTicketDiscountPercent();
    const discountText = discount > 0
      ? ` ${t("ticketDiscountNotice").replace("{discount}", String(discount)).replace("{price}", formatWalletAmount(ticketPrice))}`
      : "";
    note.textContent = `${t("ticketPriceNotice")} ${t("currentBalanceNotice").replace("{balance}", balanceText)}${discountText}`;
  }

  if (warning) {
    warning.textContent = t("insufficientBalanceNotice").replace("100 ₸", formatWalletAmount(ticketPrice));
    warning.hidden = hasEnoughBalance;
  }

  if (submitButton) {
    submitButton.disabled = !hasEnoughBalance;
    submitButton.classList.toggle("is-disabled", !hasEnoughBalance);
  }
}

async function deductTicketBalance(amount) {
  const nextBalance = Math.max(0, getBalanceValue(state.profile.balance) - getBalanceValue(amount || 0));

  if (state.supabaseMode && state.user?.id && state.supabase) {
    let profilePayload = null;

    try {
      const { data, error } = await state.supabase
        .from("profiles")
        .update({ balance: nextBalance })
        .eq("id", state.user.id)
        .select("name,email,balance,role,ticket_discount_percent")
        .single();

      if (error) throw error;

      if (data) {
        profilePayload = data;
      }
    } catch (error) {
      console.error("Balance update failed", error);
    }

    try {
      const { data, error } = await state.supabase.auth.updateUser({
        data: {
          ...(state.user.user_metadata || {}),
          balance: nextBalance,
          ticket_discount_percent: getTicketDiscountPercent(state.profile)
        }
      });

      if (!error && data?.user) {
        state.user = data.user;
        state.session = {
          ...(state.session || {}),
          user: data.user
        };
      }
    } catch (error) {
      console.error("Auth metadata balance update failed", error);
    }

    state.profile = {
      ...state.profile,
      name: profilePayload?.name || state.profile.name,
      email: profilePayload?.email || state.profile.email,
      balance: Number(profilePayload?.balance ?? nextBalance),
      role: String(profilePayload?.role || state.profile.role || "user").toLowerCase(),
      ticket_discount_percent: getTicketDiscountPercent(profilePayload || state.profile)
    };

    const cache = loadProfileCache();
    cache[state.user.id] = {
      ...(cache[state.user.id] || {}),
      name: state.profile.name,
      email: state.profile.email,
      balance: state.profile.balance,
      role: state.profile.role,
      ticket_discount_percent: state.profile.ticket_discount_percent
    };
    localStorage.setItem(STORAGE_KEYS.profileCache, JSON.stringify(cache));
    return true;
  }

  if (state.user?.id) {
    const users = loadLocalUsers();
    const userIndex = users.findIndex((user) => user.id === state.user.id);

    if (userIndex >= 0) {
      users[userIndex] = { ...users[userIndex], balance: nextBalance };
      localStorage.setItem(STORAGE_KEYS.localUsers, JSON.stringify(users));
      state.user = users[userIndex];
      state.session = { user: users[userIndex] };
    }
  }

  state.profile = {
    ...state.profile,
    balance: nextBalance
  };

  if (state.user?.id) {
    const cache = loadProfileCache();
    cache[state.user.id] = {
      ...(cache[state.user.id] || {}),
      name: state.profile.name,
      email: state.profile.email,
      balance: state.profile.balance,
      role: state.profile.role,
      ticket_discount_percent: state.profile.ticket_discount_percent
    };
    localStorage.setItem(STORAGE_KEYS.profileCache, JSON.stringify(cache));
  }

  return true;
}
