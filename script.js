// build: 2026-09-21-fix2
// =========================================================
// CHEAPSTER.IN — PREMIUM BRAND DIRECTORY (Category Edition)
// Haptic Feedback, Spotlight Hover, PWA & Category Routing
// =========================================================

// --- CATEGORY ORDER (Most Selling to Least) ---
const CATEGORY_ORDER = [
  "All", 
  "Mega Brands", 
  "Fashion", 
  "Beauty & Grooming", 
  "Tech", 
  "Wellness & Health", 
  "Jewellery & Gifting", 
  "Travel", 
  "Home", 
  "Pets", 
  "Digital", 
  "Kids"
];

// --- BRAND MASTER LIST (Updated & Cleaned) ---
const stores = [
  // 1. MEGA BRANDS (Highest Traffic & Volume)
  { name: "Amazon", domain: "amazon.in", category: "Mega Brands", description: "Everything marketplace", link: "https://link.amazon/B03SYMxWN" },
  { name: "Flipkart", domain: "flipkart.com", category: "Mega Brands", description: "Shopping marketplace", link: "https://fktr.in/Ve7AKTM" },
  { name: "Myntra", domain: "myntra.com", category: "Mega Brands", description: "Fashion & lifestyle", link: "https://myntr.it/0IKBm9j" },
  { name: "Nykaa", domain: "nykaa.com", category: "Mega Brands", description: "Beauty & cosmetics", link: "https://bitli.in/cYKpZba" },
  { name: "AJIO", domain: "ajio.com", category: "Mega Brands", description: "Fashion destination", link: "https://ajiio.in/hSTHlOO" },
  { name: "Tata CLiQ", domain: "tatacliq.com", category: "Mega Brands", description: "Multi-category retail", link: "https://bitli.in/Ufnwuqh" },
  { name: "Croma", domain: "croma.com", category: "Mega Brands", description: "Electronics", link: "https://bitli.in/3MjWfz5" },
  { name: "Tira", domain: "tirabeauty.com", category: "Mega Brands", description: "Premium beauty", link: "https://www.tirabeauty.com" },
  { name: "Shopsy", domain: "shopsy.in", category: "Mega Brands", description: "Value shopping", link: "https://bitli.in/q3GTiTJ" },
  { name: "JioMart", domain: "jiomart.com", category: "Mega Brands", description: "Groceries & more", link: "https://bitli.in/6jJqYGx" },

  // 2. FASHION & FOOTWEAR
  { name: "Snitch", domain: "", category: "Fashion", description: "Men's fashion", link: "https://www.snitch.co.in" },
  { name: "Urbanic", domain: "urbanic.com", category: "Fashion", description: "Gen-Z women's fashion", link: "https://inr.deals/JNTFEn" },
  { name: "Beyoung", domain: "beyoung.in", category: "Fashion", description: "Everyday fashion", link: "https://inr.deals/dg4LBQ" },
  { name: "Savana", domain: "savana.com", category: "Fashion", description: "Trendy fashion", link: "https://www.savana.com" },
  { name: "Bewakoof", domain: "bewakoof.com", category: "Fashion", description: "Quirky fashion", link: "https://www.bewakoof.com" },
  { name: "The Souled Store", domain: "thesouledstore.com", category: "Fashion", description: "Pop culture merch", link: "https://inr.deals/FK7yPZ" },
  { name: "XYXX", domain: "xyxxcrew.com", category: "Fashion", description: "Men's innerwear", link: "https://bitli.in/3zj1f7A" },
  { name: "Cahoot", domain: "cahoot.in", category: "Fashion", description: "Casual streetwear", link: "https://cahoot.in/collections/men-bestsellers?utm_source=Affiliate&utm_medium=iCubesWire&utm_campaign=CPS_Campaign_97_sup679138037_6ab3af29a899e5328_624" },
  { name: "Bonkers Corner", domain: "bonkerscorner.com", category: "Fashion", description: "Gen-Z streetwear", link: "https://www.bonkerscorner.com" },
  { name: "Levi's", domain: "levi.in", category: "Fashion", description: "Premium denim", link: "https://www.levi.in" },
  { name: "Shoppers Stop", domain: "shoppersstop.com", category: "Fashion", description: "Premium retail", link: "https://www.shoppersstop.com" },
  { name: "Crocs", domain: "crocs.in", category: "Fashion", description: "Comfort footwear", link: "https://www.crocs.in" },

  // 3. BEAUTY & GROOMING (Skincare, Makeup & Men's Care)
  { name: "Minimalist", domain: "beminimalist.co", category: "Beauty & Grooming", description: "Science skincare", link: "https://www.beminimalist.co" },
  { name: "Plum", domain: "plumgoodness.com", category: "Beauty & Grooming", description: "Vegan beauty", link: "https://www.plumgoodness.com" },
  { name: "Dot & Key", domain: "dotandkey.com", category: "Beauty & Grooming", description: "Skincare essentials", link: "https://bitli.in/kxVP911" },
  { name: "Mamaearth", domain: "mamaearth.in", category: "Beauty & Grooming", description: "Toxin-free care", link: "https://www.mamaearth.in" },
  { name: "MCaffeine", domain: "mcaffeine.com", category: "Beauty & Grooming", description: "Caffeinated care", link: "https://bitli.in/l5q8RB9" },
  { name: "Foxtale", domain: "foxtale.in", category: "Beauty & Grooming", description: "Skincare essentials", link: "https://bitli.in/0AmuJ4D" },
  { name: "Pilgrim", domain: "discoverpilgrim.com", category: "Beauty & Grooming", description: "Global beauty secrets", link: "https://www.discoverpilgrim.com" },
  { name: "WOW Skin Science", domain: "buywow.in", category: "Beauty & Grooming", description: "Natural care", link: "https://www.buywow.in" },
  { name: "Purplle", domain: "purplle.com", category: "Beauty & Grooming", description: "Beauty shopping", link: "https://www.purplle.com" },
  { name: "Sugar Cosmetics", domain: "sugarcosmetics.com", category: "Beauty & Grooming", description: "Makeup brand", link: "https://www.sugarcosmetics.com" },
  { name: "MyGlamm", domain: "myglamm.com", category: "Beauty & Grooming", description: "Makeup & beauty", link: "https://www.myglamm.com" },
  { name: "Bella Vita", domain: "bellavitaluxury.co.in", category: "Beauty & Grooming", description: "Luxury perfumes", link: "https://bitli.in/my55y0T" },
  { name: "Skinn by Titan", domain: "skinn.in", category: "Beauty & Grooming", description: "Indian luxury fragrances", link: "https://www.skinn.in" },
  { name: "Swiss Beauty", domain: "swissbeauty.in", category: "Beauty & Grooming", description: "Budget makeup", link: "https://bitli.in/aIuUSl6" },
  { name: "MAC Cosmetics", domain: "maccosmetics.in", category: "Beauty & Grooming", description: "Luxury makeup", link: "https://www.maccosmetics.in" },
  { name: "Bare Anatomy", domain: "innovist.com", category: "Beauty & Grooming", description: "Science hair care", link: "https://innovist.com/collections/bare-anatomy" },
  { name: "BBlunt", domain: "bblunt.com", category: "Beauty & Grooming", description: "Salon-style hair care", link: "https://bitli.in/8C5fu33" },
  { name: "Beardo", domain: "beardo.in", category: "Beauty & Grooming", description: "Men's grooming", link: "https://beardo.in" },
  { name: "Bombay Shaving Co", domain: "bombayshavingcompany.com", category: "Beauty & Grooming", description: "Premium grooming", link: "https://bombayshavingcompany.com" },
  { name: "The Man Company", domain: "themancompany.com", category: "Beauty & Grooming", description: "Premium essentials", link: "https://bitli.in/bNc5aYS" },
  { name: "Ghar Soaps", domain: "gharsoaps.in", category: "Beauty & Grooming", description: "Ayurvedic skincare", link: "https://www.gharsoaps.shop/?utm_source=vcommission&utm_medium=132377_&utm_campaign=trackier_13680&click_id=&pub_id=132377&campaign_id=13680" },

  // -- ROUTED BEAUTY BRANDS (Redirects to Nykaa) --
  { name: "Lakme", domain: "lakmeindia.com", category: "Beauty & Grooming", description: "Indian makeup giant", link: "https://www.nykaa.com/brands/lakme/c/334" },
  { name: "Maybelline", domain: "maybelline.co.in", category: "Beauty & Grooming", description: "Global makeup", link: "https://www.nykaa.com/brands/maybelline-new-york/c/392" },
  { name: "L'Oréal", domain: "lorealparis.co.in", category: "Beauty & Grooming", description: "Hair & cosmetics", link: "https://www.nykaa.com/brands/loreal-paris/c/595" },

  // 4. TECH & GADGETS
  { name: "Dell", domain: "dell.com", category: "Tech", description: "Laptops & PCs", link: "https://bitli.in/iNehXK5" },
  { name: "Lenovo", domain: "lenovo.com", category: "Tech", description: "Laptops & tech", link: "https://inr.deals/8SVnGa" },
  { name: "Realme", domain: "realme.com", category: "Tech", description: "Smartphones & AIoT", link: "https://www.realme.com" },
  { name: "boAt", domain: "boat-lifestyle.com", category: "Tech", description: "Audio & wearables", link: "https://www.boat-lifestyle.com" },
  { name: "Noise", domain: "gonoise.com", category: "Tech", description: "Smartwatches", link: "https://www.gonoise.com" },
  { name: "JBL", domain: "jbl.com", category: "Tech", description: "Premium audio", link: "https://inr.deals/lWnHDY" },
  { name: "Reliance Digital", domain: "reliancedigital.in", category: "Tech", description: "Tech retail", link: "https://www.reliancedigital.in" },
  { name: "HP", domain: "hp.com", category: "Tech", description: "Laptops & tech", link: "https://bitli.in/6R3BJ2i" },
  { name: "Vijay Sales", domain: "vijaysales.com", category: "Tech", description: "Electronics retail", link: "https://www.vijaysales.com" },
  { name: "Cashify", domain: "cashify.in", category: "Tech", description: "Sell & buy phones", link: "https://inr.deals/gW2Iby" },
  { name: "Spinny", domain: "spinny.com", category: "Tech", description: "Buy & sell used cars", link: "https://inr.deals/mor4Sf" },

  // 5. WELLNESS & HEALTH
  { name: "Tata 1mg", domain: "1mg.com", category: "Wellness & Health", description: "Online pharmacy", link: "https://www.1mg.com" },
  { name: "Apollo 24|7", domain: "apollo247.com", category: "Wellness & Health", description: "Healthcare delivery", link: "https://www.apollo247.com" },
  { name: "Netmeds", domain: "netmeds.com", category: "Wellness & Health", description: "Medicine delivery", link: "https://bitli.in/zXbiP37" },
  { name: "MuscleBlaze", domain: "muscleblaze.com", category: "Wellness & Health", description: "Sports nutrition", link: "https://www.muscleblaze.com" },
  { name: "Myprotein", domain: "myprotein.co.in", category: "Wellness & Health", description: "Fitness supplements", link: "https://www.myprotein.co.in" },
  { name: "Plix", domain: "", category: "Wellness & Health", description: "Plant nutrition", link: "https://www.plixlife.com" },
  { name: "Kapiva", domain: "kapiva.in", category: "Wellness & Health", description: "Ayurvedic nutrition", link: "https://www.kapiva.in" },
  { name: "HealthKart", domain: "healthkart.com", category: "Wellness & Health", description: "Health supplements", link: "https://www.healthkart.com" },
  { name: "Traya", domain: "traya.health", category: "Wellness & Health", description: "Hair fall treatment", link: "https://traya.health" },
  { name: "Man Matters", domain: "manmatters.com", category: "Wellness & Health", description: "Men's wellness", link: "https://inr.deals/I4BiH6" },
  { name: "Perfora", domain: "perforacare.com", category: "Wellness & Health", description: "Premium oral care", link: "https://inr.deals/ZAEqzs" },

  // -- ROUTED HEALTH BRANDS --
  { name: "Optimum Nutrition", domain: "optimumnutrition.com", category: "Wellness & Health", description: "Premium whey protein", link: "https://www.healthkart.com/brand/optimum-nutrition" },

  // 6. JEWELLERY & GIFTING
  { name: "Lenskart", domain: "lenskart.com", category: "Jewellery & Gifting", description: "Eyewear", link: "https://www.lenskart.com" },
  { name: "Titan", domain: "titan.co.in", category: "Jewellery & Gifting", description: "Watches & Eyeplus", link: "https://www.titan.co.in" },
  { name: "Tanishq", domain: "tanishq.co.in", category: "Jewellery & Gifting", description: "Fine jewellery", link: "https://www.tanishq.co.in" },
  { name: "Giva", domain: "giva.co", category: "Jewellery & Gifting", description: "Silver jewellery", link: "https://www.giva.co" },
  { name: "Palmonas", domain: "palmonas.com", category: "Jewellery & Gifting", description: "Demi-fine jewellery", link: "https://www.palmonas.com" },
  { name: "Melorra", domain: "melorra.com", category: "Jewellery & Gifting", description: "Trendy gold", link: "https://www.melorra.com" },
  { name: "BlueStone", domain: "bluestone.com", category: "Jewellery & Gifting", description: "Fine jewellery", link: "https://www.bluestone.com" },
  { name: "FNP", domain: "fnp.com", category: "Jewellery & Gifting", description: "Flowers & gifts", link: "https://www.fnp.com" },

  // 7. TRAVEL & FLIGHTS
  { name: "MakeMyTrip", domain: "makemytrip.com", category: "Travel", description: "Flights & hotels", link: "https://bitli.in/xj6tXro" },
  { name: "Agoda", domain: "agoda.com", category: "Travel", description: "Hotels & stays", link: "https://inr.deals/E1HvrY" },
  { name: "Booking.com", domain: "booking.com", category: "Travel", description: "Global travel", link: "https://bitli.in/tuUeY6U" },
  { name: "Goibibo", domain: "goibibo.com", category: "Travel", description: "Travel bookings", link: "https://bitli.in/nr6ckLO" },
  { name: "Ixigo", domain: "ixigo.com", category: "Travel", description: "Flight & train bookings", link: "https://www.ixigo.com" },
  { name: "Oyo Rooms", domain: "oyorooms.com", category: "Travel", description: "Budget stays", link: "https://www.oyorooms.com" },

  // 8. HOME & HARDWARE
  { name: "Pepperfry", domain: "pepperfry.com", category: "Home", description: "Furniture marketplace", link: "https://www.pepperfry.com" },
  { name: "WoodenStreet", domain: "woodenstreet.com", category: "Home", description: "Solid wood furniture", link: "https://www.woodenstreet.com" },
  { name: "Urban Ladder", domain: "urbanladder.com", category: "Home", description: "Premium furniture", link: "https://inr.deals/IenJf0" },
  { name: "Wakefit", domain: "wakefit.co", category: "Home", description: "Mattress & furniture", link: "https://www.wakefit.co" },
  { name: "SleepyCat", domain: "sleepycat.in", category: "Home", description: "Sleep solutions", link: "https://sleepycat.in" },
  { name: "Rentomojo", domain: "rentomojo.com", category: "Home", description: "Furniture rentals", link: "https://www.rentomojo.com" },
  { name: "Moglix", domain: "moglix.com", category: "Home", description: "Hardware & tools", link: "https://www.moglix.com" },

  // -- ROUTED HARDWARE --
  { name: "Bosch Tools", domain: "bosch-pt.co.in", category: "Home", description: "Power tools", link: "https://www.moglix.com/brands/bosch" },

  // 9. PETS
  { name: "Supertails", domain: "supertails.com", category: "Pets", description: "Pet care & food", link: "https://supertails.com" },
  { name: "Heads Up For Tails", domain: "headsupfortails.com", category: "Pets", description: "Luxury pet supplies", link: "https://headsupfortails.com" },

  // -- ROUTED PETS --
  { name: "Drools", domain: "drools.com", category: "Pets", description: "Dog & cat food", link: "https://supertails.com/collections/drools" },
  { name: "Pedigree", domain: "pedigree.in", category: "Pets", description: "Dog nutrition", link: "https://supertails.com/collections/pedigree" },
  { name: "Royal Canin", domain: "royalcanin.com", category: "Pets", description: "Premium pet nutrition", link: "https://supertails.com/collections/royal-canin" },

  // 10. DIGITAL & SOFTWARE
  { name: "Hostinger", domain: "hostinger.in", category: "Digital", description: "Web hosting", link: "https://inr.deals/8mfMZB" },
  { name: "GoDaddy", domain: "godaddy.com", category: "Digital", description: "Domains & web tools", link: "https://www.godaddy.com/en-in" },
  { name: "Microsoft", domain: "microsoft.com", category: "Digital", description: "Office 365 & Xbox", link: "https://www.microsoft.com/en-in" },
  { name: "Norton", domain: "norton.com", category: "Digital", description: "Antivirus security", link: "https://in.norton.com" },
  { name: "upGrad", domain: "upgrad.com", category: "Digital", description: "Higher education", link: "https://www.upgrad.com" },
  { name: "Physics Wallah", domain: "pw.live", category: "Digital", description: "EdTech platform", link: "https://www.pw.live" },

  // 11. KIDS & TOYS
  { name: "FirstCry", domain: "firstcry.com", category: "Kids", description: "Kids & baby gear", link: "https://www.firstcry.com" },
  { name: "Hopscotch", domain: "hopscotch.in", category: "Kids", description: "Kids fashion", link: "https://www.hopscotch.in" },
  { name: "Hamleys", domain: "hamleys.in", category: "Kids", description: "Premium toys", link: "https://www.hamleys.in" },
  { name: "Smartivity", domain: "smartivity.in", category: "Kids", description: "DIY & STEM toys", link: "https://www.smartivity.in" },

  // -- ROUTED KIDS TOYS --
  { name: "LEGO", domain: "lego.com", category: "Kids", description: "Building blocks", link: "https://www.hamleys.in/brand/lego.html" }
];

// ---------- Premium UI Injections (Styles & Category Nav) ----------
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

// ---------- App State ----------
let currentCategory = "All";
let searchQuery = "";

// ---------- Premium Interactions Helpers ----------
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
    toast.classList.add("toast-exit");
    toast.addEventListener("animationend", () => toast.remove());
  }, 3500);
}

function initials(name) {
  return name.substring(0, 2).toUpperCase();
}

function debounce(fn, delay = 160) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function buildLogoChain(store) {
  const chain = [];
  
  // Clean Professional Vector Monogram Fallback (100% Crisp & Never Blurry)
  const bgColors = ["#1c3f66", "#0d2138", "#142a44", "#1e293b"];
  const bg = bgColors[Math.floor(Math.random() * bgColors.length)];
  
  const svgFallback = 
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E` +
    `%3Crect width='100' height='100' rx='24' fill='${encodeURIComponent(bg)}'/%3E` +
    `%3Ctext x='50%25' y='53%25' dominant-baseline='middle' text-anchor='middle' ` +
    `font-family='system-ui, sans-serif' font-size='38' font-weight='700' fill='%23ffffff'%3E` +
    `${initials(store.name)}` +
    `%3C/text%3E%3C/svg%3E`;

  chain.push(svgFallback);
  return chain;
}

/*
 * This helper is still used by the WhatsApp flow.
 * Store cards themselves no longer use it for navigation.
 */
function openStoreLink(store) {
  let url =
    store.link ||
    (
      store.domain
        ? `https://www.${store.domain}`
        : null
    );

  if (!url) return;

  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ---------- Shuffle Helper ----------
function shuffleArray(array) {
  let arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [arr[i], arr[j]] =
      [arr[j], arr[i]];
  }

  return arr;
}

// ---------- Rendering Logic ----------
const grid =
  document.getElementById(
    "storeGrid"
  );

/*
 * Cuelinks FIX:
 *
 * Every merchant destination is now represented by a real,
 * persistent <a href=""> element.
 *
 * The previous code created:
 *
 *   div -> click -> temporary <a> -> click() -> remove()
 *
 * This version creates:
 *
 *   <a href="merchant-url"> ... </a>
 *
 * and keeps it in the DOM.
 */
function buildCard(store, index) {

  const url =
    store.link ||
    (
      store.domain
        ? `https://www.${store.domain}`
        : null
    );

  if (!url) {
    return null;
  }

  const card =
    document.createElement("a");

  card.className =
    "store-card";

  card.href =
    url;

  card.target =
    "_blank";

  card.rel =
    "noopener";

  card.setAttribute(
    "aria-label",
    `Shop from ${store.name}`
  );

  card.addEventListener(
    "mousemove",
    (e) => {

      const rect =
        card.getBoundingClientRect();

      card.style.setProperty(
        "--mouse-x",
        `${e.clientX - rect.left}px`
      );

      card.style.setProperty(
        "--mouse-y",
        `${e.clientY - rect.top}px`
      );
    }
  );

  // ---------- Logo ----------
  const frame =
    document.createElement(
      "div"
    );

  frame.className =
    "store-logo-frame";

  const chain =
    buildLogoChain(store);

  const img =
    document.createElement(
      "img"
    );

  img.className =
    "store-logo";

  img.alt =
    store.name;

  img.width =
    100;

  img.height =
    100;

  img.loading =
    index < 12
      ? "eager"
      : "lazy";

  const bgColors = [
    "#1c3f66",
    "#0d2138",
    "#142a44"
  ];

  const bg =
    bgColors[
      index % bgColors.length
    ];

  const svgFallback =
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E` +
    `%3Crect width='100' height='100' rx='20' fill='${encodeURIComponent(bg)}'/%3E` +
    `%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' ` +
    `font-family='sans-serif' font-size='38' font-weight='800' fill='%23ffffff'%3E` +
    `${initials(store.name)}` +
    `%3C/text%3E%3C/svg%3E`;

  if (chain.length > 0) {

    let currentStep = 0;

    img.onerror = () => {

      currentStep++;

      if (
        currentStep <
        chain.length
      ) {

        img.src =
          chain[currentStep];

      } else {

        img.onerror =
          null;

        img.src =
          svgFallback;
      }
    };

    img.src =
      chain[0];

  } else {

    img.src =
      svgFallback;
  }

  frame.appendChild(
    img
  );

  // ---------- Store Name ----------
  const name =
    document.createElement(
      "h3"
    );

  name.className =
    "store-name";

  name.textContent =
    store.name;

  // ---------- Store Description ----------
  const meta =
    document.createElement(
      "p"
    );

  meta.className =
    "store-meta";

  meta.textContent =
    store.description;

  /*
   * Keep the visual Shop Now element.
   *
   * It is deliberately NOT a nested <button>.
   * The parent anchor is the clickable element.
   */
  const button =
    document.createElement(
      "div"
    );

  button.className =
    "shop-button";

  button.textContent =
    "Shop Now";

  card.append(
    frame,
    name,
    meta,
    button
  );

  card.addEventListener(
    "click",
    () => {
      haptic();
    }
  );

  return card;
}

/*
 * Merchant anchors are created only once.
 *
 * Search/category changes will hide/reorder the existing
 * anchor elements rather than destroying and recreating them.
 */
let storeAnchorsReady =
  false;

let storeCardMap =
  new Map();

function ensureStoreAnchors() {

  if (
    storeAnchorsReady ||
    !grid
  ) {
    return;
  }

  const fragment =
    document.createDocumentFragment();

  stores.forEach(
    (store, index) => {

      const card =
        buildCard(
          store,
          index
        );

      if (!card) {
        return;
      }

      storeCardMap.set(
        store.name,
        card
      );

      fragment.appendChild(
        card
      );
    }
  );

  grid.appendChild(
    fragment
  );

  storeAnchorsReady =
    true;
}

function renderUI() {

  if (!grid) {
    return;
  }

  /*
   * First render creates all permanent merchant anchors.
   * Cuelinks will be loaded only after this.
   */
  ensureStoreAnchors();

  let filtered =
    stores.filter(
      (store) => {

        const matchesCat =
          currentCategory === "All" ||
          store.category ===
            currentCategory;

        const matchesSearch =
          store.name
            .toLowerCase()
            .includes(
              searchQuery
            ) ||
          store.description
            .toLowerCase()
            .includes(
              searchQuery
            );

        return (
          matchesCat &&
          matchesSearch
        );
      }
    );

  if (
    currentCategory === "All" &&
    searchQuery === ""
  ) {

    const mega =
      filtered.filter(
        (s) =>
          s.category ===
          "Mega Brands"
      );

    const others =
      shuffleArray(
        filtered.filter(
          (s) =>
            s.category !==
            "Mega Brands"
        )
      );

    filtered =
      [
        ...mega,
        ...others
      ];

  } else {

    filtered.sort(
      (a, b) =>
        a.name.localeCompare(
          b.name
        )
    );
  }

  /*
   * Hide all existing anchors first.
   */
  storeCardMap.forEach(
    (card) => {
      card.hidden = true;
    }
  );

  /*
   * Show and reorder existing anchors.
   *
   * These are the SAME <a> nodes that Cuelinks already sees.
   * We do not recreate them.
   */
  filtered.forEach(
    (store) => {

      const card =
        storeCardMap.get(
          store.name
        );

      if (!card) {
        return;
      }

      card.hidden =
        false;

      grid.appendChild(
        card
      );
    }
  );

  const count =
    filtered.length;

  const resultPill =
    document.getElementById(
      "resultPill"
    );

  const heroStoreCount =
    document.getElementById(
      "heroStoreCount"
    );

  const emptyState =
    document.getElementById(
      "emptyState"
    );

  if (resultPill) {
    resultPill.textContent =
      `${count} brands`;
  }

  if (heroStoreCount) {
    heroStoreCount.textContent =
      stores.length;
  }

  if (emptyState) {
    emptyState.hidden =
      count !== 0;
  }
}

function renderCategoryNav() {

  const navScroll =
    document.getElementById(
      "categoryNav"
    );

  if (!navScroll) {
    return;
  }

  navScroll.innerHTML =
    "";

  CATEGORY_ORDER.forEach(
    (cat) => {

      const pill =
        document.createElement(
          "div"
        );

      pill.className =
        `cat-pill ${
          cat === currentCategory
            ? "active"
            : ""
        }`;

      pill.textContent =
        cat;

      pill.addEventListener(
        "click",
        () => {

          haptic();

          currentCategory =
            cat;

          pill.scrollIntoView({
            behavior:
              "smooth",
            inline:
              "center",
            block:
              "nearest"
          });

          renderCategoryNav();
          renderUI();
        }
      );

      navScroll.appendChild(
        pill
      );
    }
  );
}

// ---------- Search Setup ----------
const searchInput =
  document.getElementById(
    "searchInput"
  );

if (searchInput) {

  searchInput.addEventListener(
    "input",
    debounce(
      (e) => {

        searchQuery =
          e.target.value
            .toLowerCase()
            .trim();

        renderUI();
      }
    )
  );
}

// ---------- Populate Forms ----------
const brandSelect =
  document.getElementById(
    "brandSelect"
  );

if (brandSelect) {

  stores.forEach(
    (store) => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        store.name;

      option.textContent =
        store.name;

      brandSelect.appendChild(
        option
      );
    }
  );
}

// ---------- Initialization ----------
injectStylesAndNav();
renderCategoryNav();
renderUI();

// =========================================================
// CUELINKS LOADER
// =========================================================
//
// IMPORTANT:
// Merchant <a> elements are created FIRST.
// Cuelinks script is loaded SECOND.
//
// This removes the previous race where Cuelinks was loading
// independently while the merchant cards were still being
// generated dynamically.
// =========================================================

(function loadCuelinks() {

  if (
    window.__cheapsterCuelinksLoaded ||
    window.__cheapsterCuelinksLoading
  ) {
    return;
  }

  window.cId =
    "322092";

  window.__cheapsterCuelinksLoading =
    true;

  const script =
    document.createElement(
      "script"
    );

  script.type =
    "text/javascript";

  /*
   * Deliberately NOT async.
   *
   * The loader itself is appended only after all
   * merchant anchors already exist.
   */
  script.async =
    false;

  script.src =
    document.location.protocol ===
    "https:"
      ? "https://cdn0.cuelinks.com/js/cuelinksv2.js"
      : "http://cdn0.cuelinks.com/js/cuelinksv2.js";

  script.onload =
    () => {

      window.__cheapsterCuelinksLoaded =
        true;

      window.__cheapsterCuelinksLoading =
        false;

      console.log(
        "Cheapster: Cuelinks loaded after merchant anchors were rendered."
      );
    };

  script.onerror =
    () => {

      window.__cheapsterCuelinksLoading =
        false;

      console.error(
        "Cheapster: Cuelinks script failed to load."
      );
    };

  document.body.appendChild(
    script
  );

})();

// ---------- Current Year ----------
if (
  document.getElementById(
    "currentYear"
  )
) {

  document.getElementById(
    "currentYear"
  ).textContent =
    new Date().getFullYear();
}

// =========================================================
// REMAINDER OF UTILS
// Modals, Auth, Forms, PWA
// =========================================================

function openModal(id) {

  haptic();

  const modal =
    document.getElementById(
      id
    );

  if (modal) {

    modal.hidden =
      false;

    document.body.classList.add(
      "modal-open"
    );
  }
}

function closeModal(id) {

  haptic();

  const modal =
    document.getElementById(
      id
    );

  if (modal) {

    modal.hidden =
      true;

    document.body.classList.remove(
      "modal-open"
    );
  }

  if (
    id === "formModal"
  ) {

    const form =
      document.getElementById(
        "rewardForm"
      );

    const success =
      document.getElementById(
        "successView"
      );

    if (
      form &&
      success
    ) {

      form.reset();

      form.hidden =
        false;

      success.hidden =
        true;
    }
  }
}

document
  .querySelectorAll(
    "[data-close-modal]"
  )
  .forEach(
    (btn) => {

      btn.addEventListener(
        "click",
        () =>
          closeModal(
            btn.dataset.closeModal
          )
      );
    }
  );

// ---------- Header offer button + info-modal links ----------
const headerOfferBtn =
  document.getElementById(
    "headerOfferBtn"
  );

if (headerOfferBtn) {

  headerOfferBtn.addEventListener(
    "click",
    () =>
      openModal(
        "formModal"
      )
  );
}

document
  .querySelectorAll(
    "[data-info-modal]"
  )
  .forEach(
    (btn) => {

      btn.addEventListener(
        "click",
        () =>
          openModal(
            btn.dataset.infoModal
          )
      );
    }
  );

// ---------- Hamburger menu ----------
const hamburgerBtn =
  document.getElementById(
    "hamburgerBtn"
  );

const headerDropdown =
  document.getElementById(
    "headerDropdown"
  );

if (
  hamburgerBtn &&
  headerDropdown
) {

  function closeHeaderDropdown() {

    headerDropdown.hidden =
      true;

    hamburgerBtn.setAttribute(
      "aria-expanded",
      "false"
    );
  }

  hamburgerBtn.addEventListener(
    "click",
    (e) => {

      e.stopPropagation();

      haptic();

      const isOpen =
        !headerDropdown.hidden;

      if (isOpen) {

        closeHeaderDropdown();

      } else {

        headerDropdown.hidden =
          false;

        hamburgerBtn.setAttribute(
          "aria-expanded",
          "true"
        );
      }
    }
  );

  headerDropdown
    .querySelectorAll(
      "button"
    )
    .forEach(
      (btn) => {

        btn.addEventListener(
          "click",
          closeHeaderDropdown
        );
      }
    );

  document.addEventListener(
    "click",
    (e) => {

      if (
        !headerDropdown.hidden &&
        !headerDropdown.contains(
          e.target
        )
      ) {

        closeHeaderDropdown();
      }
    }
  );
}

// ---------- Google login (Firebase Auth) ----------
const authBtn =
  document.getElementById(
    "authBtn"
  );

const authBtnText =
  document.getElementById(
    "authBtnText"
  );

const logoutBtn =
  document.getElementById(
    "logoutBtn"
  );

const menuLoginBtn =
  document.getElementById(
    "menuLoginBtn"
  );

let currentUser =
  null;

if (
  authBtn &&
  window.auth
) {

  const handleLogin =
    () => {

      haptic();

      if (currentUser) {
        return;
      }

      window.auth
        .signInWithPopup(
          window.googleProvider
        )
        .catch(
          (err) => {

            console.error(
              "Google sign-in failed:",
              err.code,
              err.message
            );

            if (
              err.code ===
                "auth/popup-blocked" ||
              err.code ===
                "auth/operation-not-supported-in-this-environment" ||
              err.code ===
                "auth/popup-closed-by-user" ||
              err.code ===
                "auth/cancelled-popup-request"
            ) {

              window.auth
                .signInWithRedirect(
                  window.googleProvider
                );

            } else if (
              err.code ===
              "auth/unauthorized-domain"
            ) {

              showToast(
                "Domain not authorized for login.",
                "⚠️"
              );

            } else {

              showToast(
                "Login failed. Please try again.",
                "❌"
              );
            }
          }
        );
    };

  authBtn.addEventListener(
    "click",
    handleLogin
  );

  if (menuLoginBtn) {

    menuLoginBtn.addEventListener(
      "click",
      handleLogin
    );
  }

  window.auth
    .getRedirectResult()
    .catch(
      (err) => {

        if (err) {

          console.error(
            "Google sign-in (redirect) failed:",
            err.code,
            err.message
          );
        }
      }
    );

  const googleIcon =
    document.getElementById(
      "googleIcon"
    );

  const authAvatarImg =
    document.getElementById(
      "authAvatarImg"
    );

  const authAvatarFallback =
    document.getElementById(
      "authAvatarFallback"
    );

  window.auth.onAuthStateChanged(
    (user) => {

      currentUser =
        user;

      if (user) {

        authBtnText.textContent =
          user.displayName
            ? user.displayName
                .split(" ")[0]
            : "Account";

        authBtn.title =
          user.displayName ||
          "Signed in";

        const nameField =
          document.getElementById(
            "fullName"
          );

        if (
          nameField &&
          !nameField.value
        ) {

          nameField.value =
            user.displayName ||
            "";
        }

        if (googleIcon) {
          googleIcon.hidden =
            true;
        }

        if (
          authAvatarImg &&
          authAvatarFallback
        ) {

          if (
            user.photoURL
          ) {

            authAvatarImg.src =
              user.photoURL;

            authAvatarImg.onerror =
              () => {

                authAvatarImg.hidden =
                  true;

                authAvatarFallback.hidden =
                  false;
              };

            authAvatarImg.hidden =
              false;

            authAvatarFallback.hidden =
              true;

          } else {

            authAvatarFallback.textContent =
              initials(
                user.displayName ||
                user.email ||
                "?"
              );

            authAvatarFallback.hidden =
              false;

            authAvatarImg.hidden =
              true;
          }
        }

        if (logoutBtn) {
          logoutBtn.hidden =
            false;
        }

        if (menuLoginBtn) {
          menuLoginBtn.hidden =
            true;
        }

      } else {

        authBtnText.textContent =
          "Login";

        authBtn.title =
          "Login with Google";

        if (googleIcon) {
          googleIcon.hidden =
            false;
        }

        if (authAvatarImg) {
          authAvatarImg.hidden =
            true;
        }

        if (authAvatarFallback) {
          authAvatarFallback.hidden =
            true;
        }

        if (logoutBtn) {
          logoutBtn.hidden =
            true;
        }

        if (menuLoginBtn) {
          menuLoginBtn.hidden =
            false;
        }
      }
    }
  );

  if (logoutBtn) {

    logoutBtn.addEventListener(
      "click",
      () =>
        window.auth.signOut()
    );
  }

} else if (authBtn) {

  const alertNotConfigured =
    () =>
      showToast(
        "Login isn't configured yet.",
        "⚠️"
      );

  authBtn.addEventListener(
    "click",
    alertNotConfigured
  );

  if (menuLoginBtn) {

    menuLoginBtn.addEventListener(
      "click",
      alertNotConfigured
    );
  }
}

// ---------- reward form → WhatsApp ----------
const GIVEAWAY_WHATSAPP_NUMBER =
  "919012521219";

const rewardForm =
  document.getElementById(
    "rewardForm"
  );

if (rewardForm) {

  rewardForm.addEventListener(
    "submit",
    (e) => {

      e.preventDefault();

      if (!rewardForm.checkValidity()) {
        rewardForm.reportValidity();
        return;
      }

      if (!currentUser) {

        showToast(
          "Please login with Google first.",
          "🔒"
        );

        return;
      }

      const submitBtn =
        document.getElementById(
          "submitRewardBtn"
        );

      const fullName =
        document.getElementById(
          "fullName"
        ).value;

      const whatsapp =
        document.getElementById(
          "whatsapp"
        ).value;

      const brand =
        document.getElementById(
          "brandSelect"
        ).value;

      submitBtn.disabled =
        true;

      submitBtn.textContent =
        "Submitting...";

      haptic();

      const text =
        encodeURIComponent(
          `🎁 Cheapster Giveaway Entry\n\n` +
          `Name: ${fullName}\n` +
          `WhatsApp: ${whatsapp}\n` +
          `Brand: ${brand}\n` +
          `Email: ${currentUser.email || ""}`
        );

      openStoreLink({
        link:
          `https://wa.me/${GIVEAWAY_WHATSAPP_NUMBER}?text=${text}`
      });

      setTimeout(
        () => {

          document.getElementById(
            "rewardForm"
          ).hidden =
            true;

          document.getElementById(
            "successView"
          ).hidden =
            false;

          submitBtn.disabled =
            false;

          submitBtn.textContent =
            "Submit Entry";

          haptic();

        },
        600
      );
    }
  );
}

// ---------- contact form → email (Web3Forms) ----------
const WEB3FORMS_ACCESS_KEY =
  "5f013235-2314-452d-8f2e-2064a1f2d2e0";

const contactForm =
  document.getElementById(
    "contactForm"
  );

if (contactForm) {

  contactForm.addEventListener(
    "submit",
    async (e) => {

      e.preventDefault();

      const submitBtn =
        contactForm.querySelector(
          'button[type="submit"]'
        );

      const name =
        document.getElementById(
          "contactName"
        ).value;

      const issue =
        document.getElementById(
          "contactIssueText"
        ).value;

      const message =
        document.getElementById(
          "contactMessage"
        ).value;

      if (submitBtn) {

        submitBtn.disabled =
          true;

        submitBtn.textContent =
          "Sending...";
      }

      haptic();

      try {

        const res =
          await fetch(
            "https://api.web3forms.com/submit",
            {
              method:
                "POST",

              headers: {
                "Content-Type":
                  "application/json",

                Accept:
                  "application/json"
              },

              body:
                JSON.stringify({
                  access_key:
                    WEB3FORMS_ACCESS_KEY,

                  subject:
                    `Cheapster Support: ${issue}`,

                  from_name:
                    "Cheapster.in Contact Form",

                  name:
                    name,

                  issue:
                    issue,

                  message:
                    message
                })
            }
          );

        const data =
          await res.json();

        if (data.success) {

          showToast(
            "Message sent! We'll get back to you soon.",
            "✅"
          );

          contactForm.reset();

          closeModal(
            "contactModal"
          );

        } else {

          showToast(
            "Something went wrong. Please try again.",
            "❌"
          );
        }

      } catch (err) {

        console.error(
          "Web3Forms submission failed:",
          err
        );

        showToast(
          "Network error. Please try again.",
          "❌"
        );

      } finally {

        if (submitBtn) {

          submitBtn.disabled =
            false;

          submitBtn.textContent =
            "Send Message";
        }
      }
    }
  );
}

// ---------- header shadow on scroll ----------
const header =
  document.getElementById(
    "siteHeader"
  );

if (header) {

  let ticking =
    false;

  window.addEventListener(
    "scroll",
    () => {

      if (ticking) {
        return;
      }

      ticking =
        true;

      requestAnimationFrame(
        () => {

          header.classList.toggle(
            "is-scrolled",
            window.scrollY >
              12
          );

          ticking =
            false;
        }
      );

    },
    {
      passive:
        true
    }
  );
}

// ---------- Welcome popup ----------
window.addEventListener(
  "load",
  () => {

    if (
      localStorage.getItem(
        "cheapster_welcome_seen"
      ) !== "1"
    ) {

      setTimeout(
        () =>
          openModal(
            "welcomeModal"
          ),
        800
      );
    }
  }
);

const continueBtn =
  document.getElementById(
    "continueBtn"
  );

if (continueBtn) {

  continueBtn.addEventListener(
    "click",
    () => {

      localStorage.setItem(
        "cheapster_welcome_seen",
        "1"
      );

      closeModal(
        "welcomeModal"
      );
    }
  );
}

// ---------- PWA Install Logic ----------
if (
  "serviceWorker" in
  navigator
) {

  window.addEventListener(
    "load",
    () => {

      navigator.serviceWorker
        .register(
          "/sw.js"
        )
        .catch(
          (err) =>
            console.log(
              "SW fail",
              err
            )
        );
    }
  );
}

let deferredPrompt;

const installBtn =
  document.getElementById(
    "installAppBtn"
  );

const isAndroid =
  /Android/i.test(
    navigator.userAgent
  );

if (
  installBtn &&
  isAndroid
) {

  window.addEventListener(
    "beforeinstallprompt",
    (e) => {

      e.preventDefault();

      deferredPrompt =
        e;

      installBtn.style.display =
        "inline-flex";
    }
  );

  installBtn.addEventListener(
    "click",
    async () => {

      haptic();

      if (deferredPrompt) {

        deferredPrompt.prompt();

        deferredPrompt =
          null;

        installBtn.style.display =
          "none";
      }
    }
  );
}
