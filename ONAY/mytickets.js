const STORAGE_KEYS = {
  lang: "fakeu-lang",
  localSession: "fakeu-local-session",
  localTickets: "fakeu-local-tickets",
  currentOnayTicket: "fakeu-current-onay-ticket",
  usedTickets: "fakeu-used-tickets"
};

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
  }
};

let activeTicket = null;
let isQrClosing = false;

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  renderCurrentTicket();
  setupQrPopup();
});

function getLang() {
  return localStorage.getItem(STORAGE_KEYS.lang) === "ru" ? "ru" : "kk";
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

function openQrPopup() {
  const qrOverlay = document.getElementById("qrOverlay");
  if (!qrOverlay) {
    return;
  }

  qrOverlay.hidden = false;
  qrOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

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
    document.body.style.overflow = "";
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

      let shouldFill = random() > 0.68;

      if (inSoftClearZone) {
        shouldFill = random() > 0.76;
      }

      if (inCenterClearZone) {
        shouldFill = random() > 0.86;
      }

      if ((row + col) % 7 === 0 && random() > 0.4) {
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
