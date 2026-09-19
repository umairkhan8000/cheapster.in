// =========================================================
// CHEAPSTER.IN — PREMIUM BRAND DIRECTORY (Fixed & Full Edition)
// =========================================================

// --- CATEGORY ORDER (Most Selling to Least) ---
const CATEGORY_ORDER = [
  "All", 
  "Mega Brands", 
  "Fashion", 
  "Beauty", 
  "Tech", 
  "Wellness", 
  "Jewellery", 
  "Travel", 
  "Home", 
  "Pets", 
  "Digital", 
  "Kids", 
  "Food"
];

// --- BRAND MASTER LIST (106 Brands) ---
const stores = [
  // 1. MEGA BRANDS (Highest Traffic)
  { name: "Amazon", domain: "amazon.in", category: "Mega Brands", description: "Everything marketplace", link: "https://www.amazon.in" },
  { name: "Flipkart", domain: "flipkart.com", category: "Mega Brands", description: "Shopping marketplace", link: "https://www.flipkart.com" },
  { name: "Myntra", domain: "myntra.com", category: "Mega Brands", description: "Fashion & lifestyle", link: "https://www.myntra.com" },
  { name: "Nykaa", domain: "nykaa.com", category: "Mega Brands", description: "Beauty & cosmetics", link: "https://www.nykaa.com" },
  { name: "AJIO", domain: "ajio.com", category: "Mega Brands", description: "Fashion destination", link: "https://www.ajio.com" },
  { name: "Tata CLiQ", domain: "tatacliq.com", category: "Mega Brands", description: "Multi-category retail", link: "https://www.tatacliq.com" },
  { name: "Croma", domain: "croma.com", category: "Mega Brands", description: "Electronics", link: "https://www.croma.com" },
  { name: "Meesho", domain: "meesho.com", category: "Mega Brands", description: "Value shopping", link: "https://www.meesho.com" },

  // 2. FASHION & FOOTWEAR
  { name: "Snitch", domain: "", category: "Fashion", description: "Men's fashion", link: "https://www.snitch.co.in" },
  { name: "Urbanic", domain: "urbanic.com", category: "Fashion", description: "Gen-Z women's fashion", link: "https://www.urbanic.com" },
  { name: "Off Duty India", domain: "offduty.in", category: "Fashion", description: "Baggy streetwear", link: "https://www.offduty.in" },
  { name: "Vastrado", domain: "vastrado.com", category: "Fashion", description: "Affordable fast fashion", link: "https://www.vastrado.com" },
  { name: "Beyoung", domain: "beyoung.in", category: "Fashion", description: "Everyday fashion", link: "https://beyoung.in" },
  { name: "Bewakoof", domain: "bewakoof.com", category: "Fashion", description: "Quirky fashion", link: "https://www.bewakoof.com" },
  { name: "The Souled Store", domain: "thesouledstore.com", category: "Fashion", description: "Pop culture merch", link: "https://www.thesouledstore.com" },
  { name: "XYXX", domain: "xyxxcrew.com", category: "Fashion", description: "Men's innerwear", link: "https://xyxxcrew.com" },
  { name: "Campus Sutra", domain: "campussutra.com", category: "Fashion", description: "Casual streetwear", link: "https://www.campussutra.com" },
  { name: "Bonkers Corner", domain: "bonkerscorner.com", category: "Fashion", description: "Gen-Z streetwear", link: "https://www.bonkerscorner.com" },
  { name: "Nike", domain: "nike.com", category: "Fashion", description: "Sports & streetwear", link: "https://www.nike.com/in" },
  { name: "Puma", domain: "puma.com", category: "Fashion", description: "Athletic wear", link: "https://in.puma.com" },
  { name: "Adidas", domain: "adidas.co.in", category: "Fashion", description: "Sports & fashion", link: "https://www.adidas.co.in" },
  { name: "Crocs", domain: "crocs.in", category: "Fashion", description: "Comfort footwear", link: "https://www.crocs.in" },

  // 3. BEAUTY & HAIRCARE
  { name: "Minimalist", domain: "beminimalist.co", category: "Beauty", description: "Science skincare", link: "https://www.beminimalist.co" },
  { name: "Plum", domain: "plumgoodness.com", category: "Beauty", description: "Vegan beauty", link: "https://www.plumgoodness.com" },
  { name: "The Derma Co", domain: "thedermaco.com", category: "Beauty", description: "Dermatological care", link: "https://www.thedermaco.com" },
  { name: "Dot & Key", domain: "dotandkey.com", category: "Beauty", description: "Skincare essentials", link: "https://www.dotandkey.com" },
  { name: "Mamaearth", domain: "mamaearth.in", category: "Beauty", description: "Toxin-free care", link: "https://www.mamaearth.in" },
  { name: "Aqualogica", domain: "aqualogica.in", category: "Beauty", description: "Hydration skincare", link: "https://www.aqualogica.in" },
  { name: "MCaffeine", domain: "mcaffeine.com", category: "Beauty", description: "Caffeinated care", link: "https://www.mcaffeine.com" },
  { name: "Foxtale", domain: "foxtale.in", category: "Beauty", description: "Skincare essentials", link: "https://www.foxtale.in" },
  { name: "Pilgrim", domain: "discoverpilgrim.com", category: "Beauty", description: "Global beauty secrets", link: "https://www.discoverpilgrim.com" },
  { name: "WOW Skin Science", domain: "buywow.in", category: "Beauty", description: "Natural care", link: "https://www.buywow.in" },
  { name: "Purplle", domain: "purplle.com", category: "Beauty", description: "Beauty shopping", link: "https://www.purplle.com" },
  { name: "Sugar Cosmetics", domain: "sugarcosmetics.com", category: "Beauty", description: "Makeup brand", link: "https://www.sugarcosmetics.com" },
  { name: "MyGlamm", domain: "myglamm.com", category: "Beauty", description: "Makeup & beauty", link: "https://www.myglamm.com" },
  { name: "Bella Vita", domain: "bellavitaluxury.co.in", category: "Beauty", description: "Luxury perfumes", link: "https://www.bellavitaluxury.co.in" },
  { name: "Skinn by Titan", domain: "skinn.in", category: "Beauty", description: "Indian luxury fragrances", link: "https://www.skinn.in" },
  { name: "Bath & Body Works", domain: "bathandbodyworks.in", category: "Beauty", description: "Premium mists & care", link: "https://www.bathandbodyworks.in" },
  { name: "Swiss Beauty", domain: "swissbeauty.in", category: "Beauty", description: "Budget makeup", link: "https://swissbeauty.in" },
  { name: "Renee Cosmetics", domain: "reneecosmetics.in", category: "Beauty", description: "Trending makeup", link: "https://www.reneecosmetics.in" },
  { name: "Colorbar", domain: "", category: "Beauty", description: "Premium cosmetics", link: "https://www.colorbarcosmetics.com" },
  { name: "MAC Cosmetics", domain: "maccosmetics.in", category: "Beauty", description: "Luxury makeup", link: "https://www.maccosmetics.in" },
  { name: "Traya", domain: "traya.health", category: "Beauty", description: "Hair fall treatment", link: "https://traya.health" },
  { name: "Bare Anatomy", domain: "innovist.com", category: "Beauty", description: "Science hair care", link: "https://innovist.com/collections/bare-anatomy" },
  { name: "BBlunt", domain: "bblunt.com", category: "Beauty", description: "Salon-style hair care", link: "https://bblunt.com" },
  
  // -- ROUTED BEAUTY BRANDS --
  { name: "Lakme", domain: "lakmeindia.com", category: "Beauty", description: "Indian makeup giant", link: "https://www.nykaa.com/brands/lakme/c/334" },
  { name: "Maybelline", domain: "maybelline.co.in", category: "Beauty", description: "Global makeup", link: "https://www.nykaa.com/brands/maybelline-new-york/c/392" },
  { name: "L'Oréal", domain: "lorealparis.co.in", category: "Beauty", description: "Hair & cosmetics", link: "https://www.nykaa.com/brands/loreal-paris/c/595" },

  // 4. TECH & GADGETS
  { name: "Samsung", domain: "samsung.com", category: "Tech", description: "Mobiles & electronics", link: "https://www.samsung.com/in" },
  { name: "OnePlus", domain: "oneplus.in", category: "Tech", description: "Smartphones", link: "https://www.oneplus.in" },
  { name: "Dell", domain: "dell.com", category: "Tech", description: "Laptops & PCs", link: "https://www.dell.com/en-in" },
  { name: "Lenovo", domain: "lenovo.com", category: "Tech", description: "Laptops & tech", link: "https://www.lenovo.com/in" },
  { name: "Realme", domain: "realme.com", category: "Tech", description: "Smartphones & AIoT", link: "https://www.realme.com/in/" },
  { name: "boAt", domain: "boat-lifestyle.com", category: "Tech", description: "Audio & wearables", link: "https://www.boat-lifestyle.com" },
  { name: "Noise", domain: "gonoise.com", category: "Tech", description: "Smartwatches", link: "https://www.gonoise.com" },
  { name: "JBL", domain: "jbl.com", category: "Tech", description: "Premium audio", link: "https://in.jbl.com" },
  { name: "Reliance Digital", domain: "reliancedigital.in", category: "Tech", description: "Tech retail", link: "https://www.reliancedigital.in" },

  // 5. WELLNESS, GROOMING & DENTAL
  { name: "Beardo", domain: "beardo.in", category: "Wellness", description: "Men's grooming", link: "https://beardo.in" },
  { name: "Bombay Shaving Co", domain: "bombayshavingcompany.com", category: "Wellness", description: "Premium grooming", link: "https://bombayshavingcompany.com" },
  { name: "Man Matters", domain: "manmatters.com", category: "Wellness", description: "Men's wellness", link: "https://manmatters.com" },
  { name: "The Man Company", domain: "themancompany.com", category: "Wellness", description: "Premium essentials", link: "https://themancompany.com" },
  { name: "Perfora", domain: "perforacare.com", category: "Wellness", description: "Premium oral care", link: "https://perforacare.com" },
  { name: "Tata 1mg", domain: "1mg.com", category: "Wellness", description: "Online pharmacy", link: "https://www.1mg.com" },
  { name: "Apollo 24|7", domain: "apollo247.com", category: "Wellness", description: "Healthcare delivery", link: "https://www.apollo247.com" },
  { name: "Netmeds", domain: "netmeds.com", category: "Wellness", description: "Medicine delivery", link: "https://www.netmeds.com" },
  { name: "MuscleBlaze", domain: "muscleblaze.com", category: "Wellness", description: "Sports nutrition", link: "https://www.muscleblaze.com" },
  { name: "Myprotein", domain: "myprotein.co.in", category: "Wellness", description: "Fitness supplements", link: "https://www.myprotein.co.in" },
  { name: "Plix", domain: "", category: "Wellness", description: "Plant nutrition", link: "https://www.plixlife.com" },
  { name: "Kapiva", domain: "kapiva.in", category: "Wellness", description: "Ayurvedic nutrition", link: "https://www.kapiva.in" },
  { name: "HealthKart", domain: "healthkart.com", category: "Wellness", description: "Health supplements", link: "https://www.healthkart.com" },

  // 6. JEWELLERY & ACCESSORIES
  { name: "Lenskart", domain: "lenskart.com", category: "Jewellery", description: "Eyewear", link: "https://www.lenskart.com" },
  { name: "Titan", domain: "titan.co.in", category: "Jewellery", description: "Watches & Eyeplus", link: "https://www.titan.co.in" },
  { name: "Fastrack", domain: "fastrack.in", category: "Jewellery", description: "Youth accessories", link: "https://www.fastrack.in" },
  { name: "CaratLane", domain: "caratlane.com", category: "Jewellery", description: "Diamond jewellery", link: "https://www.caratlane.com" },
  { name: "Tanishq", domain: "tanishq.co.in", category: "Jewellery", description: "Fine jewellery", link: "https://www.tanishq.co.in" },
  { name: "Giva", domain: "giva.co", category: "Jewellery", description: "Silver jewellery", link: "https://www.giva.co" },
  { name: "Palmonas", domain: "palmonas.com", category: "Jewellery", description: "Demi-fine jewellery", link: "https://www.palmonas.com" },
  { name: "Melorra", domain: "melorra.com", category: "Jewellery", description: "Trendy gold", link: "https://www.melorra.com" },
  { name: "BlueStone", domain: "bluestone.com", category: "Jewellery", description: "Fine jewellery", link: "https://www.bluestone.com" },

  // 7. TRAVEL & FLIGHTS
  { name: "MakeMyTrip", domain: "makemytrip.com", category: "Travel", description: "Flights & hotels", link: "https://www.makemytrip.com" },
  { name: "Agoda", domain: "agoda.com", category: "Travel", description: "Hotels & stays", link: "https://www.agoda.com" },
  { name: "Booking.com", domain: "booking.com", category: "Travel", description: "Global travel", link: "https://www.booking.com" },
  { name: "Goibibo", domain: "goibibo.com", category: "Travel", description: "Travel bookings", link: "https://www.goibibo.com" },
  { name: "Ixigo", domain: "ixigo.com", category: "Travel", description: "Flight & train bookings", link: "https://www.ixigo.com" },
  { name: "Oyo Rooms", domain: "oyorooms.com", category: "Travel", description: "Budget stays", link: "https://www.oyorooms.com" },

  // 8. HOME & HARDWARE
  { name: "Pepperfry", domain: "pepperfry.com", category: "Home", description: "Furniture marketplace", link: "https://www.pepperfry.com" },
  { name: "WoodenStreet", domain: "woodenstreet.com", category: "Home", description: "Solid wood furniture", link: "https://www.woodenstreet.com" },
  { name: "Urban Ladder", domain: "urbanladder.com", category: "Home", description: "Premium furniture", link: "https://www.urbanladder.com" },
  { name: "Wakefit", domain: "wakefit.co", category: "Home", description: "Mattress & furniture", link: "https://www.wakefit.co" },
  { name: "SleepyCat", domain: "sleepycat.in", category: "Home", description: "Sleep solutions", link: "https://sleepycat.in" },
  { name: "Rentomojo", domain: "rentomojo.com", category: "Home", description: "Furniture rentals", link: "https://www.rentomojo.com" },
  { name: "Moglix", domain: "moglix.com", category: "Home", description: "Hardware & tools", link: "https://www.moglix.com" },
  { name: "Bosch Tools", domain: "bosch-pt.co.in", category: "Home", description: "Power tools", link: "https://www.amazon.in/bosch-tools" },

  // 9. PETS
  { name: "Supertails", domain: "supertails.com", category: "Pets", description: "Pet care & food", link: "https://supertails.com" },
  { name: "Heads Up For Tails", domain: "headsupfortails.com", category: "Pets", description: "Luxury pet supplies", link: "https://headsupfortails.com" },
  { name: "Drools", domain: "drools.com", category: "Pets", description: "Dog & cat food", link: "https://www.amazon.in/stores/Drools/Drools" },
  { name: "Pedigree", domain: "pedigree.in", category: "Pets", description: "Dog nutrition", link: "https://www.amazon.in/stores/Pedigree" },
  { name: "Royal Canin", domain: "royalcanin.com", category: "Pets", description: "Premium pet nutrition", link: "https://www.amazon.in/stores/RoyalCanin" },

  // 10. DIGITAL & SOFTWARE
  { name: "Hostinger", domain: "hostinger.in", category: "Digital", description: "Web hosting", link: "https://www.hostinger.in" },
  { name: "GoDaddy", domain: "godaddy.com", category: "Digital", description: "Domains & web tools", link: "https://www.godaddy.com/en-in" },
  { name: "Microsoft", domain: "microsoft.com", category: "Digital", description: "Office 365 & Xbox", link: "https://www.microsoft.com/en-in" },
  { name: "Norton", domain: "norton.com", category: "Digital", description: "Antivirus security", link: "https://in.norton.com" },

  // 11. KIDS & TOYS
  { name: "FirstCry", domain: "firstcry.com", category: "Kids", description: "Kids & baby gear", link: "https://www.firstcry.com" },
  { name: "Hamleys", domain: "hamleys.in", category: "Kids", description: "Premium toys", link: "https://www.hamleys.in" },
  { name: "Smartivity", domain: "smartivity.in", category: "Kids", description: "DIY & STEM toys", link: "https://www.smartivity.in" },
  { name: "LEGO", domain: "lego.com", category: "Kids", description: "Building blocks", link: "https://www.amazon.in/stores/LEGO" },

  // 12. FOOD & MEAT
  { name: "Licious", domain: "licious.in", category: "Food", description: "Fresh meat & seafood", link: "https://www.licious.in" },
  { name: "EatSure", domain: "eatsure.com", category: "Food", description: "Food delivery", link: "https://www.eatsure.com" }
];

// ---------- Premium UI Injections (Styles & Category Nav) ----------
function injectStylesAndNav() {
  if(!document.getElementById("cheapster-cat-styles")) {
    const style = document.createElement("style");
    style.id = "cheapster-cat-styles";
    style.innerHTML = `
      .category-nav-wrapper {
        position: sticky;
        top: 60px;
        background: rgba(13, 33, 56, 0.95);
        backdrop-filter: blur(10px);
        z-index: 100;
        padding: 12px 16px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(255,255,255,0.05);
      }
      .category-nav {
        display: flex;
        gap: 10px;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .category-nav::-webkit-scrollbar {
        display: none;
      }
      .cat-pill {
        background: rgba(255, 255, 255, 0.08);
        color: #a3b8cc;
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 20px;
        padding: 8px 18px;
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
        cursor: pointer;
        transition: all 0.25s ease;
        user-select: none;
      }
      .cat-pill:hover {
        background: rgba(255, 255, 255, 0.15);
        color: #ffffff;
      }
      .cat-pill.active {
        background: #ffffff;
        color: #0d2138;
        border-color: #ffffff;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      }
    `;
    document.head.appendChild(style);
  }

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

// ---------- Interactions & Helpers ----------
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

function initials(name) { return name.substring(0, 2).toUpperCase(); }

function debounce(fn, delay = 160) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function buildLogoChain(store) {
  const chain = [];
  if (store.logo) chain.push(store.logo);
  if (store.domain) {
    chain.push(`https://www.google.com/s2/favicons?domain=${store.domain}&sz=128`);
  }
  return chain;
}

function openStoreLink(store) {
  let url = store.link || (store.domain ? `https://www.${store.domain}` : null);
  if (!url) return;
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------- Rendering Cards ----------
const grid = document.getElementById("storeGrid");

function buildCard(store, index) {
  const card = document.createElement("div");
  card.className = "store-card";
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  });

  const frame = document.createElement("div");
  frame.className = "store-logo-frame";

  const chain = buildLogoChain(store);
  const img = document.createElement("img");
  img.className = "store-logo";
  img.alt = store.name;
  img.width = 100;
  img.height = 100;
  img.loading = index < 12 ? "eager" : "lazy";

  const bgColors = ['#1c3f66', '#0d2138', '#142a44']; 
  const bg = bgColors[index % bgColors.length];
  const svgFallback = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='${encodeURIComponent(bg)}'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='38' font-weight='800' fill='%23ffffff'%3E${initials(store.name)}%3C/text%3E%3C/svg%3E`;

  if (chain.length > 0) {
    let currentStep = 0;
    img.onerror = () => {
      currentStep++;
      if (currentStep < chain.length) img.src = chain[currentStep];
      else { img.onerror = null; img.src = svgFallback; }
    };
    img.src = chain[0]; 
  } else { img.src = svgFallback; }
  
  frame.appendChild(img);

  const name = document.createElement("h3");
  name.className = "store-name";
  name.textContent = store.name;

  const meta = document.createElement("p");
  meta.className = "store-meta";
  meta.textContent = store.description;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "shop-button";
  button.textContent = "Shop Now";

  card.append(frame, name, meta, button);
  card.addEventListener("click", () => { haptic(); openStoreLink(store); });
  return card;
}

function renderUI() {
  if (!grid) return;
  let filtered = stores.filter(store => {
    const matchesCat = currentCategory === "All" || store.category === currentCategory;
    const matchesSearch = store.name.toLowerCase().includes(searchQuery) || store.description.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (currentCategory === "All" && searchQuery === "") {
    const mega = filtered.filter(s => s.category === "Mega Brands");
    const others = shuffleArray(filtered.filter(s => s.category !== "Mega Brands"));
    filtered = [...mega, ...others];
  } else {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  const fragment = document.createDocumentFragment();
  filtered.forEach((store, i) => fragment.appendChild(buildCard(store, i)));
  grid.innerHTML = "";
  grid.appendChild(fragment);

  const count = filtered.length;
  const resultPill = document.getElementById("resultPill");
  const heroStoreCount = document.getElementById("heroStoreCount");
  const emptyState = document.getElementById("emptyState");

  if (resultPill) resultPill.textContent = `${count} brands`;
  if (heroStoreCount) heroStoreCount.textContent = stores.length;
  if (emptyState) emptyState.hidden = count !== 0;
}

function renderCategoryNav() {
  const navScroll = document.getElementById("categoryNav");
  if (!navScroll) return;
  navScroll.innerHTML = "";
  
  CATEGORY_ORDER.forEach(cat => {
    const pill = document.createElement("div");
    pill.className = `cat-pill ${cat === currentCategory ? "active" : ""}`;
    pill.textContent = cat;
    pill.addEventListener("click", () => {
      haptic();
      currentCategory = cat;
      pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      renderCategoryNav();
      renderUI();
    });
    navScroll.appendChild(pill);
  });
}

// ---------- Search & Select Setup ----------
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", debounce((e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderUI();
  }));
}

const brandSelect = document.getElementById("brandSelect");
if (brandSelect) {
  stores.forEach(store => {
    const option = document.createElement("option");
    option.value = store.name;
    option.textContent = store.name;
    brandSelect.appendChild(option);
  });
}

// ---------- Initialization ----------
injectStylesAndNav();
renderCategoryNav();
renderUI();

if (document.getElementById("currentYear")) {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

// =========================================================
// UI CONTROLS, MODALS, HAMBURGER, FORMS & GIVEAWAY HANDLERS
// =========================================================

function openModal(id) {
  haptic();
  const modal = document.getElementById(id);
  if (modal) { modal.hidden = false; document.body.classList.add("modal-open"); }
}
function closeModal(id) {
  haptic();
  const modal = document.getElementById(id);
  if (modal) { modal.hidden = true; document.body.classList.remove("modal-open"); }
}

document.querySelectorAll("[data-close-modal]").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
});

window.addEventListener("load", () => {
  if (localStorage.getItem("cheapster_welcome_seen") !== "1") {
    setTimeout(() => openModal("welcomeModal"), 800);
  }
});

const continueBtn = document.getElementById("continueBtn");
if(continueBtn) {
  continueBtn.addEventListener("click", () => {
    localStorage.setItem("cheapster_welcome_seen", "1");
    closeModal("welcomeModal");
  });
}

const loginBtn = document.getElementById("loginBtn");
if(loginBtn) {
  loginBtn.addEventListener("click", () => openModal("loginModal"));
}

const claimGiveawayBtn = document.getElementById("claimGiveawayBtn");
if(claimGiveawayBtn) {
  claimGiveawayBtn.addEventListener("click", () => openModal("giveawayModal"));
}

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");
if(mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener("click", () => {
    haptic();
    mobileNav.hidden = !mobileNav.hidden;
  });
}

const giveawayForm = document.getElementById("giveawayForm");
if(giveawayForm) {
  giveawayForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    haptic();
    
    const submitBtn = giveawayForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;

    const formData = new FormData(giveawayForm);
    const scriptURL = '#'; 

    try {
      if(scriptURL !== '#') {
        await fetch(scriptURL, { method: 'POST', body: formData });
      }
      showToast("Successfully registered for Giveaway!", "🎁");
      giveawayForm.reset();
      closeModal("giveawayModal");
    } catch(err) {
      showToast("Something went wrong. Try again!", "⚠️");
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

const contactForm = document.getElementById("contactForm");
if(contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    haptic();
    showToast("Message sent successfully!", "✉️");
    contactForm.reset();
    closeModal("contactModal");
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => console.log('SW fail', err));
  });
}

let deferredPrompt;
const installBtn = document.getElementById('installAppBtn');
if (installBtn) {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'inline-flex';
  });
  installBtn.addEventListener('click', async () => {
    haptic();
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt = null;
      installBtn.style.display = 'none';
    }
  });
}
