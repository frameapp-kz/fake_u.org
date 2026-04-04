const STORAGE_KEYS = {
  lang: "fakeu-lang",
  localSession: "fakeu-local-session",
  localTickets: "fakeu-local-tickets",
  currentOnayTicket: "fakeu-current-onay-ticket",
  usedTickets: "fakeu-used-tickets"
};

const DEFAULT_ADS_CONFIG_URL =
  "https://www.dropbox.com/scl/fi/7f38p07yppy46sz0pdal7/ads.json?rlkey=w4i270v9k3z3khsf09kcph3y7&st=y7rfm27w&dl=0";

const ADS_CONFIG_URL = normalizeDropboxUrl(
  new URLSearchParams(window.location.search).get("ads") ||
    localStorage.getItem("fakeu-ads-config-url") ||
    DEFAULT_ADS_CONFIG_URL
);

const TRANSLATIONS = {
  kk: {
    ticketsHeading: "Менің билеттерім",
    todayText: "Бүгін",
    ticketSubtitle: "Алматы",
    directionLabel: "Бағыт:",
    timeLabel: "Уақыт:",
    priceLabel: "Құны:",
    checkCodeLabel: "Тексеру коды:",
    empty: "Әзірге белсенді билет жоқ",
    qrRouteLabel: "Бағыт:",
    qrPurchaseTimeLabel: "Сатып алу уақыты",
    supportButton: "Қолдау қызметіне хабарласу"
  },
  ru: {
    ticketsHeading: "Мои билеты",
    todayText: "Сегодня",
    ticketSubtitle: "Алматы",
    directionLabel: "Маршрут:",
    timeLabel: "Время:",
    priceLabel: "Стоимость:",
    checkCodeLabel: "Код проверки:",
    empty: "Пока нет активных билетов",
    qrRouteLabel: "Маршрут:",
    qrPurchaseTimeLabel: "Время покупки",
    supportButton: "Обратиться в поддержку"
  },
  en: {
    ticketsHeading: "My Tickets",
    todayText: "Today",
    ticketSubtitle: "Almaty",
    directionLabel: "Route:",
    timeLabel: "Time:",
    priceLabel: "Price:",
    checkCodeLabel: "Check code:",
    empty: "No active ticket yet",
    qrRouteLabel: "Route:",
    qrPurchaseTimeLabel: "Purchase time",
    supportButton: "Contact Support"
  },
  zh: {
    ticketsHeading: "我的车票",
    todayText: "今天",
    ticketSubtitle: "阿拉木图",
    directionLabel: "路线：",
    timeLabel: "时间：",
    priceLabel: "价格：",
    checkCodeLabel: "校验码：",
    empty: "暂无有效车票",
    qrRouteLabel: "路线：",
    qrPurchaseTimeLabel: "购买时间",
    supportButton: "联系客服"
  }
};

let activeTicket = null;
let isQrClosing = false;
let adsDrawerOpen = false;
let drawerStartY = 0;
let drawerCurrentY = 0;

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  renderCurrentTicket();
  setupQrPopup();
  setupAdsDrawer();
  loadAdsConfig().catch(console.error);
});

function getLang() {
  const lang = localStorage.getItem(STORAGE_KEYS.lang);
  return ["kk", "ru", "en", "zh"].includes(lang) ? lang : "kk";
}

function t(key) {
  return TRANSLATIONS[getLang()][key] || TRANSLATIONS.kk[key] || key;
}

function applyTranslations() {
  document.documentElement.lang = getLang();
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });

  const qrRouteLabel = document.getElementById("qrRouteLabel");
  const qrPurchaseLabel = document.getElementById("qrPurchaseLabel");
  const supportButton = document.getElementById("qrSupportButton");

  if (qrRouteLabel) {
    qrRouteLabel.textContent = t("qrRouteLabel");
  }

  if (qrPurchaseLabel) {
    qrPurchaseLabel.textContent = t("qrPurchaseTimeLabel");
  }

  if (supportButton) {
    supportButton.textContent = t("supportButton");
  }
}

function getCurrentUserId() {
  return localStorage.getItem(STORAGE_KEYS.localSession) || "guest";
}

function getUsedIds() {
  try {
    const usedMap = JSON.parse(localStorage.getItem(STORAGE_KEYS.usedTickets) || "{}");
    return new Set(usedMap[getCurrentUserId()] || []);
  } catch {
    return new Set();
  }
}

function getTickets() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.localTickets) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function getCurrentOnayTicket() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.currentOnayTicket) || "null");
    return stored && typeof stored === "object" ? stored : null;
  } catch {
    return null;
  }
}

function normalizeTicket(ticket) {
  const seed = hashString(`${ticket.id}-${ticket.created_at}-${ticket.bus_number}-${ticket.direction}`);
  return {
    ...ticket,
    ticketCode: generateCode(seed, 3),
    checkCode: `B${String(seed % 10000).padStart(4, "0")}`,
    qrSeed: seed
  };
}

function renderCurrentTicket() {
  const ticketCard = document.getElementById("ticketCard");
  const emptyNode = document.getElementById("ticketEmpty");
  const transportNode = document.getElementById("ticketTransport");
  const routeNode = document.getElementById("ticketRoute");
  const codeNode = document.getElementById("ticketCodeBox");
  const timeNode = document.getElementById("ticketTime");
  const checkNode = document.getElementById("ticketCheckCode");
  const transportIcon = document.getElementById("ticketTransportIcon");
  const currentOnayTicket = getCurrentOnayTicket();
  const currentUserId = getCurrentUserId();
  let resolvedTicket = null;

  if (currentOnayTicket && !getUsedIds().has(currentOnayTicket.id)) {
    resolvedTicket = normalizeTicket(currentOnayTicket);
  }

  if (!resolvedTicket) {
    resolvedTicket = getTickets()
      .filter((ticket) => ticket.user_id === currentUserId)
      .map(normalizeTicket)
      .filter((ticket) => !getUsedIds().has(ticket.id))
      .sort((first, second) => new Date(second.created_at).getTime() - new Date(first.created_at).getTime())[0] || null;
  }

  if (!resolvedTicket) {
    activeTicket = null;
    ticketCard.hidden = true;
    emptyNode.hidden = false;
    emptyNode.textContent = t("empty");
    return;
  }

  activeTicket = resolvedTicket;
  ticketCard.hidden = false;
  emptyNode.hidden = true;

  const transportLabel = activeTicket.transport_type || "Автобус";
  const busNumber = String(activeTicket.bus_number || "").trim().toUpperCase() || "123ABC02";
  transportNode.textContent = transportLabel;
  routeNode.textContent = activeTicket.direction || "49";
  codeNode.textContent = busNumber;
  timeNode.textContent = formatDateTime(activeTicket.created_at);
  checkNode.textContent = activeTicket.checkCode;

  if (transportIcon) {
    transportIcon.src = "../img/autobus.PNG";
  }
}

function formatDateTime(value) {
  const locale = getLang() === "ru" ? "ru-RU" : "kk-KZ";
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value)).replace(",", "");
}

function formatQrDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return getLang() === "ru" ? "11:47 2 апр." : "11:47 2 сәу.";
  }

  const months = {
    kk: ["қаң.", "ақп.", "нау.", "сәу.", "мам.", "мау.", "шіл.", "там.", "қыр.", "қаз.", "қар.", "жел."],
    ru: ["янв.", "февр.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."]
  };
  const lang = getLang();
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${hh}:${mm} ${date.getDate()} ${months[lang][date.getMonth()]}`;
}

function setupQrPopup() {
  const ticketCard = document.getElementById("ticketCard");
  const qrOverlay = document.getElementById("qrOverlay");
  const qrPass = document.getElementById("qrPass");
  const qrSupportButton = document.getElementById("qrSupportButton");

  if (!ticketCard || !qrOverlay || !qrPass) {
    return;
  }

  ticketCard.addEventListener("click", () => {
    if (!activeTicket || isQrClosing) {
      return;
    }

    fillQrPopup(activeTicket);
    openQrPopup();
  });

  qrOverlay.addEventListener("click", () => {
    closeQrPopup();
  });

  if (qrSupportButton) {
    qrSupportButton.addEventListener("click", () => {
      closeQrPopup();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeQrPopup();
    }
  });
}

function setupAdsDrawer() {
  const drawer = document.getElementById("adsDrawer");
  const handle = document.getElementById("adsDrawerHandle");
  const list = document.getElementById("adsDrawerList");

  if (!drawer || !handle || !list) {
    return;
  }

  handle.addEventListener("click", () => {
    setAdsDrawerOpen(!adsDrawerOpen);
  });

  handle.addEventListener("pointerdown", (event) => {
    drawerStartY = event.clientY;
    drawerCurrentY = event.clientY;
    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove", (event) => {
    if (!handle.hasPointerCapture(event.pointerId)) return;
    drawerCurrentY = event.clientY;
  });

  handle.addEventListener("pointerup", (event) => {
    if (!handle.hasPointerCapture(event.pointerId)) return;
    handle.releasePointerCapture(event.pointerId);
    const delta = drawerCurrentY - drawerStartY;

    if (delta < -28) {
      setAdsDrawerOpen(true);
    } else if (delta > 28) {
      setAdsDrawerOpen(false);
    }
  });
}

function setAdsDrawerOpen(nextOpen) {
  const drawer = document.getElementById("adsDrawer");
  const handle = document.getElementById("adsDrawerHandle");
  if (!drawer || !handle) return;

  adsDrawerOpen = Boolean(nextOpen);
  drawer.classList.toggle("is-open", adsDrawerOpen);
  handle.setAttribute("aria-expanded", adsDrawerOpen ? "true" : "false");
}

function normalizeDropboxUrl(url) {
  const value = String(url || "").trim();
  if (!value) return "ads.json";

  if (!/dropbox\.com/i.test(value)) {
    return value;
  }

  try {
    const parsed = new URL(value);
    parsed.searchParams.delete("dl");
    parsed.searchParams.set("raw", "1");
    return parsed.toString();
  } catch {
    const separator = value.includes("?") ? "&" : "?";
    return value.replace(/[?&]dl=0\b/, "").replace(/[?&]dl=1\b/, "") + `${separator}raw=1`;
  }
}

function buildProxyUrl(url) {
  return `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(url)}`;
}

async function fetchAdsJson(url) {
  const directUrl = normalizeDropboxUrl(url);
  const sources = /dropbox\.com/i.test(directUrl)
    ? [buildProxyUrl(directUrl), directUrl]
    : [directUrl];

  let lastError = null;

  for (const source of sources) {
    try {
      const response = await fetch(source, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Ads config failed: ${response.status}`);
      }

      const text = await response.text();
      const jsonStart = text.indexOf("{");
      const jsonEnd = text.lastIndexOf("}");
      const payload = jsonStart >= 0 && jsonEnd > jsonStart ? text.slice(jsonStart, jsonEnd + 1) : text;
      return JSON.parse(payload);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("Ads config failed");
}

async function loadAdsConfig() {
  const globalCard = document.getElementById("globalAdCard");
  const drawerList = document.getElementById("adsDrawerList");
  if (!globalCard || !drawerList) return;

  let config = {};

  try {
    config = await fetchAdsJson(ADS_CONFIG_URL);
  } catch (error) {
    console.warn("ads config fetch failed", error);
  }

  const normalized = normalizeAdsConfig(config);
  renderAdCard(globalCard, normalized.global);

  drawerList.innerHTML = normalized.list
    .map(
      (item) => `
        <a class="ad-banner-card ad-banner-card--drawer${item.Add_Banner ? "" : " is-empty"}" ${item.Add_Banner && item.Add_link && item.Add_link !== "#" ? `href="${escapeAttribute(item.Add_link)}" target="_blank" rel="noopener noreferrer"` : ""}>
          <img class="ad-banner-image" alt="${escapeAttribute(item.name)} banner" ${item.Add_Banner ? `src="${escapeAttribute(normalizeDropboxUrl(item.Add_Banner))}"` : "hidden"}>
        </a>
      `
    )
    .join("");
}

function normalizeAdsConfig(config) {
  const fallbackGlobal = {
    name: "GLOBAL_ADD",
    Add_Banner: "",
    Add_link: "#"
  };

  const global = normalizeAdEntry("GLOBAL_ADD", config?.GLOBAL_ADD || fallbackGlobal);
  const list = Object.keys(config || {})
    .filter((key) => /^\d+_ADD$/i.test(key))
    .sort((first, second) => Number.parseInt(first, 10) - Number.parseInt(second, 10))
    .map((key) => normalizeAdEntry(key.toUpperCase(), config[key]));

  if (!list.length) {
    for (let index = 1; index <= 4; index += 1) {
      list.push(normalizeAdEntry(`${index}_ADD`, {}));
    }
  }

  return { global, list };
}

function normalizeAdEntry(name, entry = {}) {
  return {
    name,
    Add_Banner: normalizeDropboxUrl(String(entry.Add_Banner || "").trim()),
    Add_link: String(entry.Add_link || "#").trim() || "#"
  };
}

function renderAdCard(card, ad) {
  const label = card.querySelector(".ad-banner-label");
  const image = card.querySelector(".ad-banner-image");
  const isClickable = Boolean(ad.Add_Banner && ad.Add_link && ad.Add_link !== "#");
  card.classList.toggle("is-empty", !ad.Add_Banner);
  card.toggleAttribute("href", isClickable);

  if (isClickable) {
    card.href = ad.Add_link;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
  } else {
    card.removeAttribute("href");
    card.removeAttribute("target");
    card.removeAttribute("rel");
  }

  if (label) {
    label.hidden = true;
  }

  if (image) {
    if (ad.Add_Banner) {
      image.src = ad.Add_Banner;
      image.hidden = false;
    } else {
      image.hidden = true;
      image.removeAttribute("src");
    }
  }
}

function openQrPopup() {
  const qrOverlay = document.getElementById("qrOverlay");
  if (!qrOverlay) {
    return;
  }

  qrOverlay.hidden = false;
  qrOverlay.setAttribute("aria-hidden", "false");

  requestAnimationFrame(() => {
    qrOverlay.classList.remove("is-closing");
    qrOverlay.classList.add("is-open");
  });
}

function closeQrPopup() {
  const qrOverlay = document.getElementById("qrOverlay");
  if (!qrOverlay || qrOverlay.hidden || isQrClosing) {
    return;
  }

  isQrClosing = true;
  qrOverlay.classList.remove("is-open");
  qrOverlay.classList.add("is-closing");

  window.setTimeout(() => {
    qrOverlay.hidden = true;
    qrOverlay.setAttribute("aria-hidden", "true");
    qrOverlay.classList.remove("is-closing");
    isQrClosing = false;
  }, 560);
}

function fillQrPopup(ticket) {
  const qrRouteValue = document.getElementById("qrRouteValue");
  const qrPlateValue = document.getElementById("qrPlateValue");
  const qrTimeValue = document.getElementById("qrTimeValue");
  const qrCheckCode = document.getElementById("qrCheckCode");
  const qrCanvas = document.getElementById("qrCanvas");

  if (qrRouteValue) {
    qrRouteValue.textContent = ticket.direction || "49";
  }

  if (qrPlateValue) {
    qrPlateValue.textContent = String(ticket.bus_number || "").trim().toUpperCase() || "458FK02";
  }

  if (qrTimeValue) {
    qrTimeValue.textContent = formatQrDateTime(ticket.created_at);
  }

  if (qrCheckCode) {
    qrCheckCode.textContent = ticket.checkCode;
  }

  if (qrCanvas) {
    renderRandomQr(qrCanvas, `${ticket.qrSeed}-${ticket.direction}-${ticket.bus_number}-${ticket.checkCode}`);
  }
}

function createSeededRandom(seed) {
  let hash = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return () => {
    hash += 0x6d2b79f5;
    let temp = hash;
    temp = Math.imul(temp ^ (temp >>> 15), temp | 1);
    temp ^= temp + Math.imul(temp ^ (temp >>> 7), temp | 61);
    return ((temp ^ (temp >>> 14)) >>> 0) / 4294967296;
  };
}

function isInsideFinder(row, col, startRow, startCol) {
  return row >= startRow && row < startRow + 7 && col >= startCol && col < startCol + 7;
}

function drawFinder(ctx, x, y, size) {
  ctx.fillStyle = "#000000";
  ctx.fillRect(x, y, size * 7, size * 7);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(x + size, y + size, size * 5, size * 5);
  ctx.fillStyle = "#000000";
  ctx.fillRect(x + size * 2, y + size * 2, size * 3, size * 3);
}

function renderRandomQr(canvas, seed) {
  const ctx = canvas.getContext("2d");
  const modules = 21;
  const quietZone = 2;
  const moduleSize = Math.floor(canvas.width / (modules + quietZone * 2));
  const usedSize = moduleSize * (modules + quietZone * 2);
  const offset = Math.floor((canvas.width - usedSize) / 2);
  const random = createSeededRandom(String(seed));

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let row = 0; row < modules; row += 1) {
    for (let col = 0; col < modules; col += 1) {
      const inFinder =
        isInsideFinder(row, col, 0, 0) ||
        isInsideFinder(row, col, 0, modules - 7) ||
        isInsideFinder(row, col, modules - 7, 0);
      const inTiming = (row === 6 && col > 7 && col < modules - 8) || (col === 6 && row > 7 && row < modules - 8);
      const inCenterClearZone = row > 7 && row < modules - 6 && col > 7 && col < modules - 6;
      const inSoftClearZone = row > 5 && row < modules - 4 && col > 5 && col < modules - 4;

      if (inFinder) {
        continue;
      }

      if (inTiming) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(
          offset + (col + quietZone) * moduleSize,
          offset + (row + quietZone) * moduleSize,
          moduleSize,
          moduleSize
        );
        continue;
      }

      let shouldFill = random() > 0.6;

      if (inSoftClearZone) {
        shouldFill = random() > 0.69;
      }

      if (inCenterClearZone) {
        shouldFill = random() > 0.8;
      }

      if ((row + col) % 7 === 0 && random() > 0.34) {
        shouldFill = true;
      }

      if ((row * col) % 11 === 0 && random() > 0.48) {
        shouldFill = true;
      }

      if (shouldFill) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(
          offset + (col + quietZone) * moduleSize,
          offset + (row + quietZone) * moduleSize,
          moduleSize,
          moduleSize
        );
      }
    }
  }

  drawFinder(ctx, offset + quietZone * moduleSize, offset + quietZone * moduleSize, moduleSize);
  drawFinder(ctx, offset + (quietZone + modules - 7) * moduleSize, offset + quietZone * moduleSize, moduleSize);
  drawFinder(ctx, offset + quietZone * moduleSize, offset + (quietZone + modules - 7) * moduleSize, moduleSize);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
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
