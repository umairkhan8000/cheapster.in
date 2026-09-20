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

// --- BRAND MASTER LIST (102 Premium Brands) ---
const stores = [
  // 1. MEGA BRANDS (Highest Traffic & Volume)
  { name: "Amazon", domain: "amazon.in", category: "Mega Brands", description: "Everything marketplace", link: "https://link.amazon/B03SYMxWN" },
  { name: "Flipkart", domain: "flipkart.com", category: "Mega Brands", description: "Shopping marketplace", link: "https://www.flipkart.com" },
  { name: "Myntra", domain: "myntra.com", category: "Mega Brands", description: "Fashion & lifestyle", link: "https://www.myntra.com" },
  { name: "Nykaa", domain: "nykaa.com", category: "Mega Brands", description: "Beauty & cosmetics", link: "https://www.nykaa.com" },
  { name: "AJIO", domain: "ajio.com", category: "Mega Brands", description: "Fashion destination", link: "https://www.ajio.com" },
  { name: "Tata CLiQ", domain: "tatacliq.com", category: "Mega Brands", description: "Multi-category retail", link: "https://www.tatacliq.com" },
  { name: "Croma", domain: "croma.com", category: "Mega Brands", description: "Electronics", link: "https://www.croma.com" },
  { name: "Tira", domain: "tirabeauty.com", category: "Mega Brands", description: "Premium beauty", link: "https://www.tirabeauty.com" },
  { name: "Meesho", domain: "meesho.com", category: "Mega Brands", description: "Value shopping", link: "https://www.meesho.com" },
  { name: "Shopsy", domain: "shopsy.in", category: "Mega Brands", description: "Value shopping", link: "https://www.shopsy.in" },
  { name: "JioMart", domain: "jiomart.com", category: "Mega Brands", description: "Groceries & more", link: "https://www.jiomart.com" },

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
  { name: "Levi's", domain: "levi.in", category: "Fashion", description: "Premium denim", link: "https://www.levi.in" },
  { name: "Shoppers Stop", domain: "shoppersstop.com", category: "Fashion", description: "Premium retail", link: "https://www.shoppersstop.com" },
  { name: "LimeRoad", domain: "limeroad.com", category: "Fashion", description: "Value fashion", link: "https://www.limeroad.com" },
  { name: "Nike", domain: "nike.com", category: "Fashion", description: "Sports & streetwear", link: "https://www.nike.com/in" },
  { name: "Puma", domain: "puma.com", category: "Fashion", description: "Athletic wear", link: "https://in.puma.com" },
  { name: "Adidas", domain: "adidas.co.in", category: "Fashion", description: "Sports & fashion", link: "https://www.adidas.co.in" },
  { name: "Crocs", domain: "crocs.in", category: "Fashion", description: "Comfort footwear", link: "https://www.crocs.in" },

  // 3. BEAUTY & GROOMING (Skincare, Makeup & Men's Care)
  { name: "Minimalist", domain: "beminimalist.co", category: "Beauty & Grooming", description: "Science skincare", link: "https://www.beminimalist.co" },
  { name: "Plum", domain: "plumgoodness.com", category: "Beauty & Grooming", description: "Vegan beauty", link: "https://www.plumgoodness.com" },
  { name: "The Derma Co", domain: "thedermaco.com", category: "Beauty & Grooming", description: "Dermatological care", link: "https://www.thedermaco.com" },
  { name: "Dot & Key", domain: "dotandkey.com", category: "Beauty & Grooming", description: "Skincare essentials", link: "https://www.dotandkey.com" },
  { name: "Mamaearth", domain: "mamaearth.in", category: "Beauty & Grooming", description: "Toxin-free care", link: "https://www.mamaearth.in" },
  { name: "Aqualogica", domain: "aqualogica.in", category: "Beauty & Grooming", description: "Hydration skincare", link: "https://www.aqualogica.in" },
  { name: "MCaffeine", domain: "mcaffeine.com", category: "Beauty & Grooming", description: "Caffeinated care", link: "https://www.mcaffeine.com" },
  { name: "Foxtale", domain: "foxtale.in", category: "Beauty & Grooming", description: "Skincare essentials", link: "https://www.foxtale.in" },
  { name: "Pilgrim", domain: "discoverpilgrim.com", category: "Beauty & Grooming", description: "Global beauty secrets", link: "https://www.discoverpilgrim.com" },
  { name: "WOW Skin Science", domain: "buywow.in", category: "Beauty & Grooming", description: "Natural care", link: "https://www.buywow.in" },
  { name: "Purplle", domain: "purplle.com", category: "Beauty & Grooming", description: "Beauty shopping", link: "https://www.purplle.com" },
  { name: "Sugar Cosmetics", domain: "sugarcosmetics.com", category: "Beauty & Grooming", description: "Makeup brand", link: "https://www.sugarcosmetics.com" },
  { name: "MyGlamm", domain: "myglamm.com", category: "Beauty & Grooming", description: "Makeup & beauty", link: "https://www.myglamm.com" },
  { name: "Bella Vita", domain: "bellavitaluxury.co.in", category: "Beauty & Grooming", description: "Luxury perfumes", link: "https://www.bellavitaluxury.co.in" },
  { name: "Skinn by Titan", domain: "skinn.in", category: "Beauty & Grooming", description: "Indian luxury fragrances", link: "https://www.skinn.in" },
  { name: "Bath & Body Works", domain: "bathandbodyworks.in", category: "Beauty & Grooming", description: "Premium mists & care", link: "https://www.bathandbodyworks.in" },
  { name: "Swiss Beauty", domain: "swissbeauty.in", category: "Beauty & Grooming", description: "Budget makeup", link: "https://swissbeauty.in" },
  { name: "Renee Cosmetics", domain: "reneecosmetics.in", category: "Beauty & Grooming", description: "Trending makeup", link: "https://www.reneecosmetics.in" },
  { name: "Colorbar", domain: "", category: "Beauty & Grooming", description: "Premium cosmetics", link: "https://www.colorbarcosmetics.com" },
  { name: "MAC Cosmetics", domain: "maccosmetics.in", category: "Beauty & Grooming", description: "Luxury makeup", link: "https://www.maccosmetics.in" },
  { name: "Bare Anatomy", domain: "innovist.com", category: "Beauty & Grooming", description: "Science hair care", link: "https://innovist.com/collections/bare-anatomy" },
  { name: "BBlunt", domain: "bblunt.com", category: "Beauty & Grooming", description: "Salon-style hair care", link: "https://bblunt.com" },
  { name: "Beardo", domain: "beardo.in", category: "Beauty & Grooming", description: "Men's grooming", link: "https://beardo.in" },
  { name: "Bombay Shaving Co", domain: "bombayshavingcompany.com", category: "Beauty & Grooming", description: "Premium grooming", link: "https://bombayshavingcompany.com" },
  { name: "The Man Company", domain: "themancompany.com", category: "Beauty & Grooming", description: "Premium essentials", link: "https://www.themancompany.com" },
  
  // -- ROUTED BEAUTY BRANDS (Redirects to Nykaa) --
  { name: "Lakme", domain: "lakmeindia.com", category: "Beauty & Grooming", description: "Indian makeup giant", link: "https://www.nykaa.com/brands/lakme/c/334" },
  { name: "Maybelline", domain: "maybelline.co.in", category: "Beauty & Grooming", description: "Global makeup", link: "https://www.nykaa.com/brands/maybelline-new-york/c/392" },
  { name: "L'Oréal", domain: "lorealparis.co.in", category: "Beauty & Grooming", description: "Hair & cosmetics", link: "https://www.nykaa.com/brands/loreal-paris/c/595" },

  // 4. TECH & GADGETS (New Gadgets + High-Ticket Resell)
  { name: "Samsung", domain: "samsung.com", category: "Tech", description: "Mobiles & electronics", link: "https://www.samsung.com/in" },
  { name: "OnePlus", domain: "oneplus.in", category: "Tech", description: "Smartphones", link: "https://www.oneplus.in" },
  { name: "Dell", domain: "dell.com", category: "Tech", description: "Laptops & PCs", link: "https://www.dell.com/en-in" },
  { name: "Lenovo", domain: "lenovo.com", category: "Tech", description: "Laptops & tech", link: "https://www.lenovo.com/in" },
  { name: "Realme", domain: "realme.com", category: "Tech", description: "Smartphones & AIoT", link: "https://www.realme.com/in/" },
  { name: "boAt", domain: "boat-lifestyle.com", category: "Tech", description: "Audio & wearables", link: "https://www.boat-lifestyle.com" },
  { name: "Noise", domain: "gonoise.com", category: "Tech", description: "Smartwatches", link: "https://www.gonoise.com" },
  { name: "JBL", domain: "jbl.com", category: "Tech", description: "Premium audio", link: "https://in.jbl.com" },
  { name: "Reliance Digital", domain: "reliancedigital.in", category: "Tech", description: "Tech retail", link: "https://www.reliancedigital.in" },
  { name: "HP", domain: "hp.com", category: "Tech", description: "Laptops & tech", link: "https://www.hp.com/in-en/" },
  { name: "Vijay Sales", domain: "vijaysales.com", category: "Tech", description: "Electronics retail", link: "https://www.vijaysales.com" },
  { name: "Cashify", domain: "cashify.in", category: "Tech", description: "Sell & buy phones", link: "https://www.cashify.in" },
  { name: "ControlZ", domain: "controlz.world", category: "Tech", description: "Premium renewed iPhones", link: "https://www.controlz.world" },
  { name: "Yaantra", domain: "", category: "Tech", description: "Refurbished mobiles", link: "https://www.yaantra.com" },
  { name: "Spinny", domain: "spinny.com", category: "Tech", description: "Buy & sell used cars", link: "https://www.spinny.com" },

  // 5. WELLNESS & HEALTH (Clinical, Pharmacy & Nutrition)
  { name: "Tata 1mg", domain: "1mg.com", category: "Wellness & Health", description: "Online pharmacy", link: "https://www.1mg.com" },
  { name: "Apollo 24|7", domain: "apollo247.com", category: "Wellness & Health", description: "Healthcare delivery", link: "https://www.apollo247.com" },
  { name: "Netmeds", domain: "netmeds.com", category: "Wellness & Health", description: "Medicine delivery", link: "https://www.netmeds.com" },
  { name: "MuscleBlaze", domain: "muscleblaze.com", category: "Wellness & Health", description: "Sports nutrition", link: "https://www.muscleblaze.com" },
  { name: "Myprotein", domain: "myprotein.co.in", category: "Wellness & Health", description: "Fitness supplements", link: "https://www.myprotein.co.in" },
  { name: "Plix", domain: "", category: "Wellness & Health", description: "Plant nutrition", link: "https://www.plixlife.com" },
  { name: "Kapiva", domain: "kapiva.in", category: "Wellness & Health", description: "Ayurvedic nutrition", link: "https://www.kapiva.in" },
  { name: "HealthKart", domain: "healthkart.com", category: "Wellness & Health", description: "Health supplements", link: "https://www.healthkart.com" },
  { name: "Traya", domain: "traya.health", category: "Wellness & Health", description: "Hair fall treatment", link: "https://traya.health" },
  { name: "Man Matters", domain: "manmatters.com", category: "Wellness & Health", description: "Men's wellness", link: "https://manmatters.com" },
  { name: "Perfora", domain: "perforacare.com", category: "Wellness & Health", description: "Premium oral care", link: "https://perforacare.com" },
  
  // -- ROUTED HEALTH BRANDS (Redirects to HealthKart for Max Commission) --
  { name: "Optimum Nutrition", domain: "optimumnutrition.com", category: "Wellness & Health", description: "Premium whey protein", link: "https://www.healthkart.com/brand/optimum-nutrition" },

  // 6. JEWELLERY & GIFTING
  { name: "Lenskart", domain: "lenskart.com", category: "Jewellery & Gifting", description: "Eyewear", link: "https://www.lenskart.com" },
  { name: "Titan", domain: "titan.co.in", category: "Jewellery & Gifting", description: "Watches & Eyeplus", link: "https://www.titan.co.in" },
  { name: "Fastrack", domain: "fastrack.in", category: "Jewellery & Gifting", description: "Youth accessories", link: "https://www.fastrack.in" },
  { name: "CaratLane", domain: "caratlane.com", category: "Jewellery & Gifting", description: "Diamond jewellery", link: "https://www.caratlane.com" },
  { name: "Tanishq", domain: "tanishq.co.in", category: "Jewellery & Gifting", description: "Fine jewellery", link: "https://www.tanishq.co.in" },
  { name: "Giva", domain: "giva.co", category: "Jewellery & Gifting", description: "Silver jewellery", link: "https://www.giva.co" },
  { name: "Palmonas", domain: "palmonas.com", category: "Jewellery & Gifting", description: "Demi-fine jewellery", link: "https://www.palmonas.com" },
  { name: "Melorra", domain: "melorra.com", category: "Jewellery & Gifting", description: "Trendy gold", link: "https://www.melorra.com" },
  { name: "BlueStone", domain: "bluestone.com", category: "Jewellery & Gifting", description: "Fine jewellery", link: "https://www.bluestone.com" },
  { name: "FNP", domain: "fnp.com", category: "Jewellery & Gifting", description: "Flowers & gifts", link: "https://www.fnp.com" },

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
  
  // -- ROUTED HARDWARE (Redirects to Moglix) --
  { name: "Bosch Tools", domain: "bosch-pt.co.in", category: "Home", description: "Power tools", link: "https://www.moglix.com/brands/bosch" },

  // 9. PETS
  { name: "Supertails", domain: "supertails.com", category: "Pets", description: "Pet care & food", link: "https://supertails.com" },
  { name: "Heads Up For Tails", domain: "headsupfortails.com", category: "Pets", description: "Luxury pet supplies", link: "https://headsupfortails.com" },
  
  // -- ROUTED PETS (Redirects directly to Supertails instead of Amazon) --
  { name: "Drools", domain: "drools.com", category: "Pets", description: "Dog & cat food", link: "https://supertails.com/collections/drools" },
  { name: "Pedigree", domain: "pedigree.in", category: "Pets", description: "Dog nutrition", link: "https://supertails.com/collections/pedigree" },
  { name: "Royal Canin", domain: "royalcanin.com", category: "Pets", description: "Premium pet nutrition", link: "https://supertails.com/collections/royal-canin" },

  // 10. DIGITAL & SOFTWARE
  { name: "Hostinger", domain: "hostinger.in", category: "Digital", description: "Web hosting", link: "https://www.hostinger.in" },
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
  
  // -- ROUTED KIDS TOYS (Redirects to Hamleys) --
  { name: "LEGO", domain: "lego.com", category: "Kids", description: "Building blocks", link: "https://www.hamleys.in/brand/lego.html" }
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

// ---------- Shuffle Helper ----------
function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------- Rendering Logic ----------
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

// ---------- Search Setup ----------
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", debounce((e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderUI();
  }));
}

// Populate forms
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
// REMAINDER OF UTILS (Modals, Auth, Forms, PWA)
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

  if (id === "formModal") {
    const form = document.getElementById("rewardForm");
    const success = document.getElementById("successView");
    if (form && success) {
      form.reset();
      form.hidden = false;
      success.hidden = true;
    }
  }
}

document.querySelectorAll("[data-close-modal]").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
});

// ---------- Header offer button + info-modal links ----------
const headerOfferBtn = document.getElementById("headerOfferBtn");
if (headerOfferBtn) headerOfferBtn.addEventListener("click", () => openModal("formModal"));
document.querySelectorAll("[data-info-modal]").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.infoModal));
});

// ---------- Hamburger menu ----------
const hamburgerBtn = document.getElementById("hamburgerBtn");
const headerDropdown = document.getElementById("headerDropdown");

if (hamburgerBtn && headerDropdown) {
  function closeHeaderDropdown() {
    headerDropdown.hidden = true;
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    haptic();
    const isOpen = !headerDropdown.hidden;
    if (isOpen) {
      closeHeaderDropdown();
    } else {
      headerDropdown.hidden = false;
      hamburgerBtn.setAttribute("aria-expanded", "true");
    }
  });

  headerDropdown.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", closeHeaderDropdown);
  });

  document.addEventListener("click", (e) => {
    if (!headerDropdown.hidden && !headerDropdown.contains(e.target)) {
      closeHeaderDropdown();
    }
  });
}

// ---------- Google login (Firebase Auth) ----------
const authBtn = document.getElementById("authBtn");
const authBtnText = document.getElementById("authBtnText");
const logoutBtn = document.getElementById("logoutBtn");
const menuLoginBtn = document.getElementById("menuLoginBtn");
let currentUser = null;

if (authBtn && window.auth) {
  const handleLogin = () => {
    haptic();
    if (currentUser) return;

    window.auth.signInWithPopup(window.googleProvider).catch((err) => {
      console.error("Google sign-in failed:", err.code, err.message);
      if (
        err.code === "auth/popup-blocked" ||
        err.code === "auth/operation-not-supported-in-this-environment" ||
        err.code === "auth/popup-closed-by-user" ||
        err.code === "auth/cancelled-popup-request"
      ) {
        window.auth.signInWithRedirect(window.googleProvider);
      } else if (err.code === "auth/unauthorized-domain") {
        showToast("Domain not authorized for login.", "⚠️");
      } else {
        showToast("Login failed. Please try again.", "❌");
      }
    });
  };

  authBtn.addEventListener("click", handleLogin);
  if (menuLoginBtn) menuLoginBtn.addEventListener("click", handleLogin);

  window.auth.getRedirectResult().catch((err) => {
    if (err) console.error("Google sign-in (redirect) failed:", err.code, err.message);
  });

  const googleIcon = document.getElementById("googleIcon");
  const authAvatarImg = document.getElementById("authAvatarImg");
  const authAvatarFallback = document.getElementById("authAvatarFallback");

  window.auth.onAuthStateChanged((user) => {
    currentUser = user;
    if (user) {
      authBtnText.textContent = user.displayName ? user.displayName.split(" ")[0] : "Account";
      authBtn.title = user.displayName || "Signed in";
      const nameField = document.getElementById("fullName");
      if (nameField && !nameField.value) nameField.value = user.displayName || "";

      if (googleIcon) googleIcon.hidden = true;
      if (authAvatarImg && authAvatarFallback) {
        if (user.photoURL) {
          authAvatarImg.src = user.photoURL;
          authAvatarImg.onerror = () => {
            authAvatarImg.hidden = true;
            authAvatarFallback.hidden = false;
          };
          authAvatarImg.hidden = false;
          authAvatarFallback.hidden = true;
        } else {
          authAvatarFallback.textContent = initials(user.displayName || user.email || "?");
          authAvatarFallback.hidden = false;
          authAvatarImg.hidden = true;
        }
      }

      if (logoutBtn) logoutBtn.hidden = false;
      if (menuLoginBtn) menuLoginBtn.hidden = true;
    } else {
      authBtnText.textContent = "Login";
      authBtn.title = "Login with Google";

      if (googleIcon) googleIcon.hidden = false;
      if (authAvatarImg) authAvatarImg.hidden = true;
      if (authAvatarFallback) authAvatarFallback.hidden = true;

      if (logoutBtn) logoutBtn.hidden = true;
      if (menuLoginBtn) menuLoginBtn.hidden = false;
    }
  });

  if (logoutBtn) logoutBtn.addEventListener("click", () => window.auth.signOut());
} else if (authBtn) {
  const alertNotConfigured = () => showToast("Login isn't configured yet.", "⚠️");
  authBtn.addEventListener("click", alertNotConfigured);
  if (menuLoginBtn) menuLoginBtn.addEventListener("click", alertNotConfigured);
}

// ---------- reward form → WhatsApp ----------
// TODO: replace with your real business WhatsApp number (10-digit, no +91)
const GIVEAWAY_WHATSAPP_NUMBER = "919999999999";

const rewardForm = document.getElementById("rewardForm");
if (rewardForm) {
  rewardForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!currentUser) {
      showToast("Please login with Google first.", "🔒");
      return;
    }

    const submitBtn = document.getElementById("submitRewardBtn");
    const fullName = document.getElementById("fullName").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const brand = document.getElementById("brandSelect").value;

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";
    haptic();

    const text = encodeURIComponent(
      `🎁 Cheapster Giveaway Entry\n\nName: ${fullName}\nWhatsApp: ${whatsapp}\nBrand: ${brand}\nEmail: ${currentUser.email || ""}`
    );
    openStoreLink({ link: `https://wa.me/${GIVEAWAY_WHATSAPP_NUMBER}?text=${text}` });

    setTimeout(() => {
      document.getElementById("rewardForm").hidden = true;
      document.getElementById("successView").hidden = false;
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Entry";
      haptic();
    }, 600);
  });
}

// ---------- contact form → email (Web3Forms) ----------
const WEB3FORMS_ACCESS_KEY = "5f013235-2314-452d-8f2e-2064a1f2d2e0";

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const name = document.getElementById("contactName").value;
    const issue = document.getElementById("contactIssueText").value;
    const message = document.getElementById("contactMessage").value;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }
    haptic();

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Cheapster Support: ${issue}`,
          from_name: "Cheapster.in Contact Form",
          name: name,
          issue: issue,
          message: message
        })
      });
      const data = await res.json();
      if (data.success) {
        showToast("Message sent! We'll get back to you soon.", "✅");
        contactForm.reset();
        closeModal("contactModal");
      } else {
        showToast("Something went wrong. Please try again.", "❌");
      }
    } catch (err) {
      console.error("Web3Forms submission failed:", err);
      showToast("Network error. Please try again.", "❌");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      }
    }
  });
}

// ---------- header shadow on scroll ----------
const header = document.getElementById("siteHeader");
if (header) {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
      ticking = false;
    });
  }, { passive: true });
}

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

// PWA Install Logic
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => console.log('SW fail', err));
  });
}

let deferredPrompt;
const installBtn = document.getElementById('installAppBtn');
const isAndroid = /Android/i.test(navigator.userAgent);

if (installBtn && isAndroid) {
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
