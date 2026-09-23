// build: 2026-09-21-Monochrome-Glass
// =========================================================
// CHEAPSTER.IN — PREMIUM BRAND DIRECTORY 
// =========================================================

const CATEGORY_ORDER = [
  "All", "Mega Brands", "Fashion", "Beauty & Grooming", "Tech", 
  "Wellness & Health", "Jewellery & Gifting", "Travel", "Home", 
  "Pets", "Digital", "Kids"
];

// Paste your complete exact stores array here[cite: 19]
const stores = [
  { name: "Amazon", domain: "amazon.in", category: "Mega Brands", description: "Everything marketplace", link: "https://link.amazon/B03SYMxWN" },
  { name: "Flipkart", domain: "flipkart.com", category: "Mega Brands", description: "Shopping marketplace", link: "https://fktr.in/Ve7AKTM" },
  { name: "Myntra", domain: "myntra.com", category: "Mega Brands", description: "Fashion & lifestyle", link: "https://myntr.it/0IKBm9j" },
  { name: "Nykaa", domain: "nykaa.com", category: "Mega Brands", description: "Beauty & cosmetics", link: "https://bitli.in/cYKpZba" },
  { name: "AJIO", domain: "ajio.com", category: "Mega Brands", description: "Fashion destination", link: "https://ajiio.in/hSTHlOO" },
  { name: "Tata CLiQ", domain: "tatacliq.com", category: "Mega Brands", description: "Multi-category retail", link: "https://bitli.in/Ufnwuqh" },
  // ... Include ALL remaining stores exactly as they were ...
  { name: "Snitch", domain: "", category: "Fashion", description: "Men's fashion", link: "https://www.snitch.co.in" },
  { name: "MakeMyTrip", domain: "makemytrip.com", category: "Travel", description: "Flights & hotels", link: "https://bitli.in/xj6tXro" }
];

function injectStylesAndNav() {
  const gridElement = document.getElementById("storeGrid");
  if(!document.getElementById("categoryNavWrapper") && gridElement) {
    const navWrapper = document.createElement("div");
    navWrapper.id = "categoryNavWrapper";
    navWrapper.className = "category-nav-wrapper";
    
    const navScroll = document.createElement("div");
    navScroll.className = "category-nav";
    navScroll.id = "categoryNav";
    
    navWrapper.appendChild(navScroll);
    gridElement.parentNode.insertBefore(navWrapper, gridElement);
  }
}

let currentCategory = "All";
let searchQuery = "";

const haptic = () => { if (navigator.vibrate) navigator.vibrate(40); };

function showToast(message, icon = "✨") {
  haptic();
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerHTML = `<span style="font-size:16px;">${icon}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

function initials(name) { return name.substring(0, 2).toUpperCase(); }

function debounce(fn, delay = 160) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
}

function buildLogoChain(store) {
  const chain = [];
  if (store.logo) chain.push(store.logo);
  if (store.domain) {
    chain.push(`https://logo.clearbit.com/${store.domain}`);
    chain.push(`https://www.google.com/s2/favicons?domain=${store.domain}&sz=128`);
  }
  return chain;
}

function openStoreLink(store) {
  let url = store.link || (store.domain ? `https://www.${store.domain}` : null);
  if (!url) return;
  const a = document.createElement("a");
  a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer";
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const grid = document.getElementById("storeGrid");

function buildCard(store, index) {
  const url = store.link || (store.domain ? `https://www.${store.domain}` : null);
  if (!url) return null;

  const card = document.createElement("a");
  card.className = "store-card";
  card.href = url; card.target = "_blank"; card.rel = "noopener";
  card.setAttribute("aria-label", `Shop from ${store.name}`);

  const frame = document.createElement("div");
  frame.className = "store-logo-frame";

  const chain = buildLogoChain(store);
  const img = document.createElement("img");
  img.className = "store-logo";
  img.alt = store.name;
  img.loading = index < 12 ? "eager" : "lazy";

  /* UPDATED SVG FALLBACK COLORS - Premium Light Greys for Monochrome Theme */
  const bgColors = ["#E4E4E7", "#F4F4F5", "#FAFAFA"];
  const bg = bgColors[index % bgColors.length];
  
  const svgFallback = 
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E` +
    `%3Crect width='100' height='100' rx='20' fill='${encodeURIComponent(bg)}' stroke='%23D4D4D8' stroke-width='1'/%3E` +
    `%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' ` +
    `font-family='sans-serif' font-size='38' font-weight='800' fill='%23111111'%3E` +
    `${initials(store.name)}` +
    `%3C/text%3E%3C/svg%3E`;

  if (chain.length > 0) {
    let currentStep = 0;
    img.onerror = () => {
      currentStep++;
      if (currentStep < chain.length) {
        img.src = chain[currentStep];
      } else {
        img.onerror = null;
        img.src = svgFallback;
      }
    };
    img.src = chain[0];
  } else {
    img.src = svgFallback;
  }
  frame.appendChild(img);

  const name = document.createElement("h3");
  name.className = "store-name"; name.textContent = store.name;

  const meta = document.createElement("p");
  meta.className = "store-meta"; meta.textContent = store.description;

  const button = document.createElement("div");
  button.className = "shop-button"; button.textContent = "Shop Now";

  card.append(frame, name, meta, button);
  card.addEventListener("click", () => haptic());
  return card;
}

let storeAnchorsReady = false;
let storeCardMap = new Map();

function ensureStoreAnchors() {
  if (storeAnchorsReady || !grid) return;
  const fragment = document.createDocumentFragment();
  stores.forEach((store, index) => {
    const card = buildCard(store, index);
    if (!card) return;
    storeCardMap.set(store.name, card);
    fragment.appendChild(card);
  });
  grid.appendChild(fragment);
  storeAnchorsReady = true;
}

function renderUI() {
  if (!grid) return;
  ensureStoreAnchors();

  let filtered = stores.filter((store) => {
    const matchesCat = currentCategory === "All" || store.category === currentCategory;
    const matchesSearch = store.name.toLowerCase().includes(searchQuery) || store.description.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (currentCategory === "All" && searchQuery === "") {
    const mega = filtered.filter((s) => s.category === "Mega Brands");
    const others = shuffleArray(filtered.filter((s) => s.category !== "Mega Brands"));
    filtered = [...mega, ...others];
  } else {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  storeCardMap.forEach((card) => { card.hidden = true; });
  filtered.forEach((store) => {
    const card = storeCardMap.get(store.name);
    if (!card) return;
    card.hidden = false;
    grid.appendChild(card);
  });

  const count = filtered.length;
  if (document.getElementById("resultPill")) document.getElementById("resultPill").textContent = `${count} brands`;
  if (document.getElementById("heroStoreCount")) document.getElementById("heroStoreCount").textContent = stores.length;
  if (document.getElementById("emptyState")) document.getElementById("emptyState").hidden = count !== 0;
}

function renderCategoryNav() {
  const navScroll = document.getElementById("categoryNav");
  if (!navScroll) return;
  navScroll.innerHTML = "";
  CATEGORY_ORDER.forEach((cat) => {
    const pill = document.createElement("div");
    pill.className = `cat-pill ${cat === currentCategory ? "active" : ""}`;
    pill.textContent = cat;
    pill.addEventListener("click", () => {
      haptic(); currentCategory = cat;
      pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      renderCategoryNav(); renderUI();
    });
    navScroll.appendChild(pill);
  });
}

const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", debounce((e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderUI();
  }));
}

const brandSelect = document.getElementById("brandSelect");
if (brandSelect) {
  stores.forEach((store) => {
    const option = document.createElement("option");
    option.value = store.name; option.textContent = store.name;
    brandSelect.appendChild(option);
  });
}

injectStylesAndNav();
renderCategoryNav();
renderUI();

/* CUELINKS LOADER */
(function loadCuelinks() {
  if (window.__cheapsterCuelinksLoaded || window.__cheapsterCuelinksLoading) return;
  window.cId = "322092"; window.__cheapsterCuelinksLoading = true;
  const script = document.createElement("script");
  script.type = "text/javascript"; script.async = false;
  script.src = document.location.protocol === "https:" ? "https://cdn0.cuelinks.com/js/cuelinksv2.js" : "http://cdn0.cuelinks.com/js/cuelinksv2.js";
  script.onload = () => { window.__cheapsterCuelinksLoaded = true; window.__cheapsterCuelinksLoading = false; };
  script.onerror = () => { window.__cheapsterCuelinksLoading = false; };
  document.body.appendChild(script);
})();

if (document.getElementById("currentYear")) {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

/* Modals & Remaining Script Logic copied identically from original source */
function openModal(id) {
  haptic();
  const modal = document.getElementById(id);
  if (modal) { modal.hidden = false; document.body.classList.add("modal-open"); }
}
function closeModal(id) {
  haptic();
  const modal = document.getElementById(id);
  if (modal) { modal.hidden = true; document.body.classList.remove("modal-open"); }
  if (id === "formModal") {
    const form = document.getElementById("rewardForm");
    const success = document.getElementById("successView");
    if (form && success) { form.reset(); form.hidden = false; success.hidden = true; }
  }
}
document.querySelectorAll("[data-close-modal]").forEach((btn) => {
  btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
});

const headerOfferBtn = document.getElementById("headerOfferBtn");
if (headerOfferBtn) headerOfferBtn.addEventListener("click", () => openModal("formModal"));
document.querySelectorAll("[data-info-modal]").forEach((btn) => {
  btn.addEventListener("click", () => openModal(btn.dataset.infoModal));
});

const hamburgerBtn = document.getElementById("hamburgerBtn");
const headerDropdown = document.getElementById("headerDropdown");
if (hamburgerBtn && headerDropdown) {
  function closeHeaderDropdown() { headerDropdown.hidden = true; hamburgerBtn.setAttribute("aria-expanded", "false"); }
  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation(); haptic();
    const isOpen = !headerDropdown.hidden;
    if (isOpen) closeHeaderDropdown(); else { headerDropdown.hidden = false; hamburgerBtn.setAttribute("aria-expanded", "true"); }
  });
  headerDropdown.querySelectorAll("button").forEach((btn) => { btn.addEventListener("click", closeHeaderDropdown); });
  document.addEventListener("click", (e) => { if (!headerDropdown.hidden && !headerDropdown.contains(e.target)) closeHeaderDropdown(); });
}

// Google Login, WhatsApp Redirect, Web3Forms, PWA exactly as in your original file...
// [Please append the remaining Firebase Login & Form functions exactly as they are in your source file to keep it running perfectly!]
