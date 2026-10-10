// build: 2026-10-11-AI-Coupons-Final-Script-V3
// =========================================================
// CHEapSTER.IN — PREMIUM BRAND DIRECTORY 
// =========================================================

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

// --- BRAND MASTER LIST WITH EXACT ZIP LOGO FILENAMES ---
const stores = [
  // 1. MEGA BRANDS
  { name: "Amazon", domain: "amazon.in", category: "Mega Brands", description: "Everything marketplace", link: "https://www.amazon.in/?tag=cheapster0a-21", logo: "hd-logos/amazon.png" },
  { name: "Flipkart", domain: "flipkart.com", category: "Mega Brands", description: "Shopping marketplace", link: "https://fktr.in/Ve7AKTM", logo: "hd-logos/flipkart.png" },
  { name: "Myntra", domain: "myntra.com", category: "Mega Brands", description: "Fashion & lifestyle", link: "https://myntr.it/0IKBm9j", logo: "hd-logos/myntra.png" },
  { name: "Nykaa", domain: "nykaa.com", category: "Mega Brands", description: "Beauty & cosmetics", link: "https://bitli.in/cYKpZba", logo: "hd-logos/nykaa.png" },
  { name: "AJIO", domain: "ajio.com", category: "Mega Brands", description: "Fashion destination", link: "https://ajiio.in/hSTHlOO", logo: "hd-logos/ajio.png" },
  { name: "Tata CLiQ", domain: "tatacliq.com", category: "Mega Brands", description: "Multi-category retail", link: "https://bitli.in/Ufnwuqh", logo: "hd-logos/tatacliq.png" },
  { name: "Croma", domain: "croma.com", category: "Mega Brands", description: "Electronics", link: "https://bitli.in/3MjWfz5", logo: "hd-logos/croma.png" },
  { name: "Tira", domain: "tirabeauty.com", category: "Mega Brands", description: "Premium beauty", link: "https://myntr.it/8rjwEfS", logo: "hd-logos/tirabeautycom.png" }, 
  { name: "Shopsy", domain: "shopsy.in", category: "Mega Brands", description: "Value shopping", link: "https://bitli.in/q3GTiTJ", logo: "hd-logos/shopsy.png" },
  { name: "JioMart", domain: "jiomart.com", category: "Mega Brands", description: "Groceries & more", link: "https://bitli.in/6jJqYGx", logo: "hd-logos/jiomart.png" },
  { name: "Meesho", domain: "meesho.com", category: "Mega Brands", description: "Value shopping marketplace", link: "https://www.meesho.com", logo: "hd-logos/meesho.png" },

  // 2. FASHION & FOOTWEAR
  { name: "Snitch", domain: "", category: "Fashion", description: "Men's fashion", link: "https://myntr.it/4Z4putW", logo: "hd-logos/snitchcom.png" },
  { name: "Urbanic", domain: "urbanic.com", category: "Fashion", description: "Gen-Z women's fashion", link: "https://inr.deals/JNTFEn", logo: "hd-logos/urbanic.png" },
  { name: "Beyoung", domain: "beyoung.in", category: "Fashion", description: "Everyday fashion", link: "https://inr.deals/dg4LBQ", logo: "hd-logos/beyoungin.png" },
  { name: "Savana", domain: "savana.com", category: "Fashion", description: "Trendy fashion", link: "https://www.savana.com", logo: "hd-logos/savana.png" },
  { name: "Bewakoof", domain: "bewakoof.com", category: "Fashion", description: "Quirky fashion", link: "https://myntr.it/k5op88M", logo: "hd-logos/bewakoof.png" },
  { name: "The Souled Store", domain: "thesouledstore.com", category: "Fashion", description: "Pop culture merch", link: "https://myntr.it/DWA75BD", logo: "hd-logos/thesouledstore.png" },
  { name: "XYXX", domain: "xyxxcrew.com", category: "Fashion", description: "Men's innerwear", link: "https://bitli.in/3zj1f7A", logo: "hd-logos/xyxx.png" },
  { name: "Cahoot", domain: "cahoot.in", category: "Fashion", description: "Casual streetwear", link: "https://cahoot.in/collections/men-bestsellers", logo: "hd-logos/cahootin.png" },
  { name: "Bonkers Corner", domain: "bonkerscorner.com", category: "Fashion", description: "Gen-Z streetwear", link: "https://myntr.it/9dOkPqa", logo: "hd-logos/bonkerscorner.png" },
  { name: "Levi's", domain: "levi.in", category: "Fashion", description: "Premium denim", link: "https://www.levi.in", logo: "hd-logos/leviin.png" },
  { name: "Shoppers Stop", domain: "shoppersstop.com", category: "Fashion", description: "Premium retail", link: "https://www.shoppersstop.com", logo: "hd-logos/shoppersstop.png" },
  { name: "Crocs", domain: "crocs.in", category: "Fashion", description: "Comfort footwear", link: "https://www.crocs.in", logo: "hd-logos/crocs.png" },

  // 3. BEAUTY & GROOMING
  { name: "Minimalist", domain: "beminimalist.co", category: "Beauty & Grooming", description: "Science skincare", link: "https://myntr.it/rMINbqf", logo: "hd-logos/minimalist.png" }, 
  { name: "Plum", domain: "plumgoodness.com", category: "Beauty & Grooming", description: "Vegan beauty", link: "https://www.plumgoodness.com", logo: "hd-logos/plum.png" },
  { name: "Dot & Key", domain: "dotandkey.com", category: "Beauty & Grooming", description: "Skincare essentials", link: "https://bitli.in/kxVP911", logo: "hd-logos/dotkey.png" },
  { name: "Mamaearth", domain: "mamaearth.in", category: "Beauty & Grooming", description: "Toxin-free care", link: "https://myntr.it/HKn907y", logo: "hd-logos/mamaearth.png" }, 
  { name: "MCaffeine", domain: "mcaffeine.com", category: "Beauty & Grooming", description: "Caffeinated care", link: "https://bitli.in/l5q8RB9", logo: "hd-logos/mcaffeine.png" },
  { name: "Foxtale", domain: "foxtale.in", category: "Beauty & Grooming", description: "Skincare essentials", link: "https://bitli.in/0AmuJ4D", logo: "hd-logos/foxtale.png" },
  { name: "Pilgrim", domain: "discoverpilgrim.com", category: "Beauty & Grooming", description: "Global beauty secrets", link: "https://myntr.it/b15Xj44", logo: "hd-logos/pilgrim.png" }, 
  { name: "WOW Skin Science", domain: "buywow.in", category: "Beauty & Grooming", description: "Natural care", link: "https://myntr.it/cL2I60J", logo: "hd-logos/wowskinscience.png" }, 
  { name: "Purplle", domain: "purplle.com", category: "Beauty & Grooming", description: "Beauty shopping", link: "https://myntr.it/DtZXMYc", logo: "hd-logos/purplle.png" }, 
  { name: "Sugar Cosmetics", domain: "sugarcosmetics.com", category: "Beauty & Grooming", description: "Makeup brand", link: "https://www.sugarcosmetics.com", logo: "hd-logos/sugarcosmetics.png" },
  { name: "MyGlamm", domain: "myglamm.com", category: "Beauty & Grooming", description: "Makeup & beauty", link: "https://myntr.it/kdZ8qNm", logo: "hd-logos/myglammcom.png" }, 
  { name: "Bella Vita", domain: "bellavitaluxury.co.in", category: "Beauty & Grooming", description: "Luxury perfumes", link: "https://bitli.in/my55y0T", logo: "hd-logos/bellavitaorganiccom.png" },
  { name: "Skinn by Titan", domain: "skinn.in", category: "Beauty & Grooming", description: "Indian luxury fragrances", link: "https://www.skinn.in", logo: "hd-logos/skinnbytitan.png" },
  { name: "Swiss Beauty", domain: "swissbeauty.in", category: "Beauty & Grooming", description: "Budget makeup", link: "https://bitli.in/aIuUSl6", logo: "hd-logos/swissbeautyin.png" },
  { name: "MAC Cosmetics", domain: "maccosmetics.in", category: "Beauty & Grooming", description: "Luxury makeup", link: "https://www.myntra.com/mac", logo: "hd-logos/maccosmeticsin.png" }, 
  { name: "Bare Anatomy", domain: "innovist.com", category: "Beauty & Grooming", description: "Science hair care", link: "https://myntr.it/KZrg2I3", logo: "hd-logos/bareanatomy.png" }, 
  { name: "BBlunt", domain: "bblunt.com", category: "Beauty & Grooming", description: "Salon-style hair care", link: "https://myntr.it/XcUHhAy", logo: "hd-logos/bbluntcom.png" }, 
  { name: "Beardo", domain: "beardo.in", category: "Beauty & Grooming", description: "Men's grooming", link: "https://myntr.it/7LmnKhJ", logo: "hd-logos/beardo.png" }, 
  { name: "Bombay Shaving Co", domain: "bombayshavingcompany.com", category: "Beauty & Grooming", description: "Premium grooming", link: "https://bombayshavingcompany.com", logo: "hd-logos/bombayshavingcompany.png" },
  { name: "The Man Company", domain: "themancompany.com", category: "Beauty & Grooming", description: "Premium essentials", link: "https://bitli.in/bNc5aYS", logo: "hd-logos/themancompany.png" },
  { name: "Ghar Soaps", domain: "gharsoaps.in", category: "Beauty & Grooming", description: "Ayurvedic skincare", link: "https://www.gharsoaps.shop", logo: "hd-logos/gharsoapsin.png" },
  { name: "Lakme", domain: "lakmeindia.com", category: "Beauty & Grooming", description: "Indian makeup giant", link: "https://myntr.it/sZFb9xo", logo: "hd-logos/lakmeindiacom.png" }, 
  { name: "Maybelline", domain: "maybelline.co.in", category: "Beauty & Grooming", description: "Global makeup", link: "https://myntr.it/6W0Y2f6", logo: "hd-logos/maybellinecoin.png" }, 
  { name: "L'Oréal", domain: "lorealparis.co.in", category: "Beauty & Grooming", description: "Hair & cosmetics", link: "https://myntr.it/sgEANQg", logo: "hd-logos/loral.png" }, 

  // 4. TECH & GADGETS
  { name: "Dell", domain: "dell.com", category: "Tech", description: "Laptops & PCs", link: "https://bitli.in/iNehXK5", logo: "hd-logos/dell.png" },
  { name: "Lenovo", domain: "lenovo.com", category: "Tech", description: "Laptops & tech", link: "https://inr.deals/8SVnGa", logo: "hd-logos/lenovo.png" },
  { name: "Realme", domain: "realme.com", category: "Tech", description: "Smartphones & AIoT", link: "https://fktr.in/NklgOgg", logo: "hd-logos/realme.png" }, 
  { name: "boAt", domain: "boat-lifestyle.com", category: "Tech", description: "Audio & wearables", link: "https://www.boat-lifestyle.com", logo: "hd-logos/boat.png" },
  { name: "Noise", domain: "gonoise.com", category: "Tech", description: "Smartwatches", link: "https://www.gonoise.com", logo: "hd-logos/noise.png" },
  { name: "JBL", domain: "jbl.com", category: "Tech", description: "Premium audio", link: "https://inr.deals/lWnHDY", logo: "hd-logos/jbl.png" },
  { name: "Reliance Digital", domain: "reliancedigital.in", category: "Tech", description: "Tech retail", link: "https://www.reliancedigital.in", logo: "hd-logos/reliancedigital.png" },
  { name: "HP", domain: "hp.com", category: "Tech", description: "Laptops & tech", link: "https://bitli.in/6R3BJ2i", logo: "hd-logos/hp.png" },
  { name: "Vijay Sales", domain: "vijaysales.com", category: "Tech", description: "Electronics retail", link: "https://www.vijaysales.com", logo: "hd-logos/vijaysales.png" },
  { name: "Cashify", domain: "cashify.in", category: "Tech", description: "Sell & buy phones", link: "https://inr.deals/gW2Iby", logo: "hd-logos/cashify.png" },
  { name: "Spinny", domain: "spinny.com", category: "Tech", description: "Buy & sell used cars", link: "https://inr.deals/mor4Sf", logo: "hd-logos/spinny.png" },

  // 5. WELLNESS & HEALTH
  { name: "Tata 1mg", domain: "1mg.com", category: "Wellness & Health", description: "Online pharmacy", link: "https://www.amazon.in/b?node=22180802031&tag=cheapster0a-21", logo: "hd-logos/tata1mg.png" }, 
  { name: "Apollo 24|7", domain: "apollo247.com", category: "Wellness & Health", description: "Healthcare delivery", link: "https://www.amazon.in/b?node=22180802031&tag=cheapster0a-21", logo: "hd-logos/apollo247.png" }, 
  { name: "Netmeds", domain: "netmeds.com", category: "Wellness & Health", description: "Medicine delivery", link: "https://bitli.in/zXbiP37", logo: "hd-logos/netmeds.png" },
  { name: "MuscleBlaze", domain: "muscleblaze.com", category: "Wellness & Health", description: "Sports nutrition", link: "https://www.muscleblaze.com", logo: "hd-logos/muscleblaze.png" },
  { name: "Myprotein", domain: "myprotein.co.in", category: "Wellness & Health", description: "Fitness supplements", link: "https://www.myprotein.co.in", logo: "hd-logos/myproteincoin.png" },
  { name: "Plix", domain: "", category: "Wellness & Health", description: "Plant nutrition", link: "https://www.amazon.in/s?k=Plix&tag=cheapster0a-21", logo: "hd-logos/plix.png" }, 
  { name: "Kapiva", domain: "kapiva.in", category: "Wellness & Health", description: "Ayurvedic nutrition", link: "https://www.kapiva.in", logo: "hd-logos/kapiva.png" },
  { name: "HealthKart", domain: "healthkart.com", category: "Wellness & Health", description: "Health supplements", link: "https://www.healthkart.com", logo: "hd-logos/healthkart.png" },
  { name: "Traya", domain: "traya.health", category: "Wellness & Health", description: "Hair fall treatment", link: "https://www.amazon.in/s?k=Traya&tag=cheapster0a-21", logo: "hd-logos/traya.png" }, 
  { name: "Man Matters", domain: "manmatters.com", category: "Wellness & Health", description: "Men's wellness", link: "https://www.amazon.in/s?k=Man+Matters&tag=cheapster0a-21", logo: "hd-logos/manmatters.png" }, 
  { name: "Perfora", domain: "perforacare.com", category: "Wellness & Health", description: "Premium oral care", link: "https://inr.deals/ZAEqzs", logo: "hd-logos/perfora.png" },
  { name: "Optimum Nutrition", domain: "optimumnutrition.com", category: "Wellness & Health", description: "Premium whey protein", link: "https://www.healthkart.com/brand/optimum-nutrition", logo: "hd-logos/optimumnutrition.png" },

  // 6. JEWELLERY & GIFTING
  { name: "Lenskart", domain: "lenskart.com", category: "Jewellery & Gifting", description: "Eyewear", link: "https://www.lenskart.com", logo: "hd-logos/lenskart.png" },
  { name: "Titan", domain: "titan.co.in", category: "Jewellery & Gifting", description: "Watches & Eyeplus", link: "https://www.titan.co.in", logo: "hd-logos/titancoin.png" },
  { name: "Tanishq", domain: "tanishq.co.in", category: "Jewellery & Gifting", description: "Fine jewellery", link: "https://www.tanishq.co.in", logo: "hd-logos/tanishqcoin.png" },
  { name: "Giva", domain: "giva.co", category: "Jewellery & Gifting", description: "Silver jewellery", link: "https://www.amazon.in/s?k=Giva&tag=cheapster0a-21", logo: "hd-logos/giva.png" }, 
  { name: "Palmonas", domain: "palmonas.com", category: "Jewellery & Gifting", description: "Demi-fine jewellery", link: "https://www.palmonas.com", logo: "hd-logos/palmonas.png" },
  { name: "Melorra", domain: "melorra.com", category: "Jewellery & Gifting", description: "Trendy gold", link: "https://www.amazon.in/s?k=Melorra&tag=cheapster0a-21", logo: "hd-logos/melorra.png" }, 
  { name: "BlueStone", domain: "bluestone.com", category: "Jewellery & Gifting", description: "Fine jewellery", link: "https://www.bluestone.com", logo: "hd-logos/bluestone.png" },
  { name: "FNP", domain: "fnp.com", category: "Jewellery & Gifting", description: "Flowers & gifts", link: "https://www.amazon.in/s?k=FNP+gifts&tag=cheapster0a-21", logo: "hd-logos/fnp.png" }, 

  // 7. TRAVEL & FLIGHTS
  { name: "MakeMyTrip", domain: "makemytrip.com", category: "Travel", description: "Flights & hotels", link: "https://bitli.in/xj6tXro", logo: "hd-logos/makemytrip.png" },
  { name: "Agoda", domain: "agoda.com", category: "Travel", description: "Hotels & stays", link: "https://inr.deals/E1HvrY", logo: "hd-logos/agodacom.png" },
  { name: "Booking.com", domain: "booking.com", category: "Travel", description: "Global travel", link: "https://bitli.in/tuUeY6U", logo: "hd-logos/bookingcom.png" },
  { name: "Goibibo", domain: "goibibo.com", category: "Travel", description: "Travel bookings", link: "https://bitli.in/nr6ckLO", logo: "hd-logos/goibibo.png" },
  { name: "Ixigo", domain: "ixigo.com", category: "Travel", description: "Flight & train bookings", link: "https://www.ixigo.com", logo: "hd-logos/ixigo.png" },
  { name: "Oyo Rooms", domain: "oyorooms.com", category: "Travel", description: "Budget stays", link: "https://www.oyorooms.com", logo: "hd-logos/oyorooms.png" },

  // 8. HOME & HARDWARE
  { name: "Pepperfry", domain: "pepperfry.com", category: "Home", description: "Furniture marketplace", link: "https://www.pepperfry.com", logo: "hd-logos/pepperfry.png" },
  { name: "WoodenStreet", domain: "woodenstreet.com", category: "Home", description: "Solid wood furniture", link: "https://www.amazon.in/s?k=Wooden+Street&tag=cheapster0a-21", logo: "hd-logos/woodenstreet.png" }, 
  { name: "Urban Ladder", domain: "urbanladder.com", category: "Home", description: "Premium furniture", link: "https://inr.deals/IenJf0", logo: "hd-logos/urbanladdercom.png" },
  { name: "Wakefit", domain: "wakefit.co", category: "Home", description: "Mattress & furniture", link: "https://www.amazon.in/s?k=Wakefit&tag=cheapster0a-21", logo: "hd-logos/wakefit.png" }, 
  { name: "SleepyCat", domain: "sleepycat.in", category: "Home", description: "Sleep solutions", link: "https://sleepycat.in", logo: "hd-logos/sleepycat.png" },
  { name: "Rentomojo", domain: "rentomojo.com", category: "Home", description: "Furniture rentals", link: "https://www.rentomojo.com", logo: "hd-logos/rentomojo.png" },
  { name: "Moglix", domain: "moglix.com", category: "Home", description: "Hardware & tools", link: "https://www.moglix.com", logo: "hd-logos/moglix.png" },
  { name: "Bosch Tools", domain: "bosch-pt.co.in", category: "Home", description: "Power tools", link: "https://www.moglix.com/brands/bosch", logo: "hd-logos/boschptcoin.png" },

  // 9. PETS
  { name: "Supertails", domain: "supertails.com", category: "Pets", description: "Pet care & food", link: "https://www.amazon.in/h/pets?tag=cheapster0a-21", logo: "hd-logos/supertails.png" }, 
  { name: "Heads Up For Tails", domain: "headsupfortails.com", category: "Pets", description: "Luxury pet supplies", link: "https://www.amazon.in/s?k=Heads+Up+For+Tails&tag=cheapster0a-21", logo: "hd-logos/headsupfortails.png" }, 
  { name: "Drools", domain: "drools.com", category: "Pets", description: "Dog & cat food", link: "https://www.amazon.in/s?k=Drools&tag=cheapster0a-21", logo: "hd-logos/drools.png" }, 
  { name: "Pedigree", domain: "pedigree.in", category: "Pets", description: "Dog nutrition", link: "https://www.amazon.in/s?k=Pedigree&tag=cheapster0a-21", logo: "hd-logos/pedigreein.png" }, 
  { name: "Royal Canin", domain: "royalcanin.com", category: "Pets", description: "Premium pet nutrition", link: "https://www.amazon.in/s?k=Royal+Canin&tag=cheapster0a-21", logo: "hd-logos/royalcanin.png" }, 

  // 10. DIGITAL & SOFTWARE
  { name: "Hostinger", domain: "hostinger.in", category: "Digital", description: "Web hosting", link: "https://inr.deals/8mfMZB", logo: "hd-logos/hostingerin.png" },
  { name: "GoDaddy", domain: "godaddy.com", category: "Digital", description: "Domains & web tools", link: "https://www.godaddy.com/en-in", logo: "hd-logos/godaddy.png" },
  { name: "Microsoft", domain: "microsoft.com", category: "Digital", description: "Office 365 & Xbox", link: "https://www.microsoft.com/en-in", logo: "hd-logos/microsoft.png" },
  { name: "upGrad", domain: "upgrad.com", category: "Digital", description: "Higher education", link: "https://www.upgrad.com", logo: "hd-logos/upgrad.png" },
  { name: "Physics Wallah", domain: "pw.live", category: "Digital", description: "EdTech platform", link: "https://www.pw.live", logo: "hd-logos/pw.png" },

  // 11. KIDS & TOYS
  { name: "FirstCry", domain: "firstcry.com", category: "Kids", description: "Kids & baby gear", link: "https://www.firstcry.com", logo: "hd-logos/firstcry.png" },
  { name: "Hopscotch", domain: "hopscotch.in", category: "Kids", description: "Kids fashion", link: "https://www.amazon.in/s?k=Hopscotch&tag=cheapster0a-21", logo: "hd-logos/hopscotch.png" }, 
  { name: "Hamleys", domain: "hamleys.in", category: "Kids", description: "Premium toys", link: "https://www.amazon.in/s?k=Hamleys&tag=cheapster0a-21", logo: "hd-logos/hamleysin.png" }, 
  { name: "Smartivity", domain: "smartivity.in", category: "Kids", description: "DIY & STEM toys", link: "https://www.amazon.in/s?k=Smartivity&tag=cheapster0a-21", logo: "hd-logos/smartivity.png" }, 
  { name: "LEGO", domain: "lego.com", category: "Kids", description: "Building blocks", link: "https://www.amazon.in/s?k=LEGO&tag=cheapster0a-21", logo: "hd-logos/lego.png" } 
];

// ---------- Premium UI Injections ----------
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
  if (store.logo) {
    chain.push(store.logo);
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

const grid = document.getElementById("storeGrid");

function buildCard(store, index) {
  const url = store.link || (store.domain ? `https://www.${store.domain}` : null);
  if (!url) return null;

  const card = document.createElement("a");
  card.className = "store-card";
  card.href = url;
  card.target = "_blank";

  // CUELINKS EXCLUSION LOGIC for grid only (not AI modal)
  if (url.includes("amazon.in") || url.includes("amzn.to")) {
      card.rel = "noopener noskim";
      card.classList.add("noskim");
  } else {
      card.rel = "noopener";
  }

  card.setAttribute("aria-label", `Shop from ${store.name}`);

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
  img.loading = index < 12 ? "eager" : "lazy";

  const bgColors = ["#1c3f66", "#0d2138", "#142a44"];
  const bg = bgColors[index % bgColors.length];

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
  name.className = "store-name";
  name.textContent = store.name;

  const meta = document.createElement("p");
  meta.className = "store-meta";
  meta.textContent = store.description;

  const button = document.createElement("div");
  button.className = "shop-button";
  button.textContent = "Shop Now";

  card.append(frame, name, meta, button);

  card.addEventListener("click", () => {
      haptic();
  });

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
    const mega = filtered.filter(s => s.category === "Mega Brands");
    const others = shuffleArray(filtered.filter(s => s.category !== "Mega Brands"));
    filtered = [...mega, ...others];
  } else {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  storeCardMap.forEach((card) => { card.hidden = true; });

  filtered.forEach((store) => {
      const card = storeCardMap.get(store.name);
      if (card) { card.hidden = false; grid.appendChild(card); }
  });

  const heroStoreCount = document.getElementById("heroStoreCount");
  if (heroStoreCount) heroStoreCount.textContent = stores.length;

  const emptyState = document.getElementById("emptyState");
  if (emptyState) emptyState.hidden = filtered.length !== 0;
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
          haptic();
          currentCategory = cat;
          pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
          renderCategoryNav();
          renderUI();
      });
      navScroll.appendChild(pill);
  });
}

// ---------- Brand Filter Logic ----------
const brandSearchInput = document.getElementById("brandSearchInput");

if (brandSearchInput) {
  brandSearchInput.addEventListener("input", debounce((e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderUI();
  }));
}

// ---------- Initialization ----------
injectStylesAndNav();
renderCategoryNav();
renderUI();

// =========================================================
// CUELINKS LOADER
// =========================================================
(function loadCuelinks() {
  if (window.__cheapsterCuelinksLoaded || window.__cheapsterCuelinksLoading) return;
  window.cId = "322092";
  window.__cheapsterCuelinksLoading = true;

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = false;
  script.src = document.location.protocol === "https:" ? "https://cdn0.cuelinks.com/js/cuelinksv2.js" : "http://cdn0.cuelinks.com/js/cuelinksv2.js";

  script.onload = () => {
      window.__cheapsterCuelinksLoaded = true;
      window.__cheapsterCuelinksLoading = false;
  };
  script.onerror = () => { window.__cheapsterCuelinksLoading = false; };
  document.body.appendChild(script);
})();

if (document.getElementById("currentYear")) {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

// =========================================================
// UTILS: Modals, Auth, Forms, PWA
// =========================================================
function openModal(id) {
  haptic();
  const modal = document.getElementById(id);
  if (modal) {
    modal.hidden = false;
    document.body.classList.add("modal-open");
  }
}

function closeModal(id) {
  haptic();
  const modal = document.getElementById(id);
  if (modal) {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

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

document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
});

const headerOfferBtn = document.getElementById("headerOfferBtn");
if (headerOfferBtn) headerOfferBtn.addEventListener("click", () => openModal("formModal"));

document.querySelectorAll("[data-info-modal]").forEach((btn) => {
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
      if (isOpen) { closeHeaderDropdown(); } 
      else { headerDropdown.hidden = false; hamburgerBtn.setAttribute("aria-expanded", "true"); }
  });

  headerDropdown.querySelectorAll("button").forEach((btn) => {
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
            if (err.code === "auth/popup-blocked" || err.code === "auth/operation-not-supported-in-this-environment" || err.code === "auth/popup-closed-by-user" || err.code === "auth/cancelled-popup-request") {
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
  window.auth.getRedirectResult().catch(() => {});

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
            authAvatarImg.onerror = () => { authAvatarImg.hidden = true; authAvatarFallback.hidden = false; };
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

// ---------- GOOGLE APPS SCRIPT MASTER URL ----------
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbziQvJq8kqk-CAHRekAHjkSVEJkQmbBp84girc4vjfTPbY20VJl2hz_I-OC-bWBcjQf/exec"; 

// ---------- Reward Form ----------
const GIVEAWAY_WHATSAPP_NUMBER = "919762527926";
const rewardForm = document.getElementById("rewardForm");

if (rewardForm) {
  rewardForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!rewardForm.checkValidity()) { rewardForm.reportValidity(); return; }
    if (!currentUser) { showToast("Please login with Google first.", "🔒"); return; }

    const submitBtn = document.getElementById("submitRewardBtn");
    const fullName = document.getElementById("fullName").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const brand = document.getElementById("brandSelect").value;

    submitBtn.disabled = true;
    submitBtn.textContent = "Opening WhatsApp...";
    haptic();

    const text = encodeURIComponent(
      `🏆 Cheapster Giveaway Entry\n\nName: ${fullName}\nWhatsApp: ${whatsapp}\nBrand: ${brand}\nEmail: ${currentUser.email || ""}`
    );

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", 
      keepalive: true, 
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        fullName: fullName,
        whatsapp: whatsapp,
        brand: brand,
        email: currentUser.email || "",
        uid: currentUser.uid || "",
        submittedAt: new Date().toISOString()
      })
    }).catch(err => console.log("Background Sheet Save Error:", err));

    openStoreLink({ link: `https://wa.me/${GIVEAWAY_WHATSAPP_NUMBER}?text=${text}` });

    document.getElementById("rewardForm").hidden = true;
    document.getElementById("successView").hidden = false;
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Entry";
    haptic();
  });
}

// ---------- Contact Form (Web3Forms) ----------
const WEB3FORMS_ACCESS_KEY = "5f013235-2314-452d-8f2e-2064a1f2d2e0";
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!contactForm.checkValidity()) { contactForm.reportValidity(); return; }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const name = document.getElementById("contactName").value;
      const issue = document.getElementById("contactIssueText").value;
      const message = document.getElementById("contactMessage").value;

      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Sending..."; }
      haptic();

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: { "Content-Type": "application/json", Accept: "application/json" },
              body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, subject: `Cheapster Support: ${issue}`, from_name: "Cheapster.in Contact Form", name: name, issue: issue, message: message })
        });
        const data = await res.json();
        if (data.success) {
          showToast("Message sent! We'll get back to you soon.", "✅");
          contactForm.reset();
          closeModal("contactModal");
        } else { showToast("Something went wrong. Please try again.", "❌"); }
      } catch (err) { showToast("Network error. Please try again.", "❌"); } 
      finally { if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = "Send Message"; } }
  });
}

// ---------- Header Shadow Scroll ----------
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

// ---------- Welcome popup ----------
window.addEventListener("load", () => {
    if (localStorage.getItem("cheapster_welcome_seen") !== "1") {
      setTimeout(() => openModal("welcomeModal"), 800);
    }
});

const continueBtn = document.getElementById("continueBtn");
if (continueBtn) {
  continueBtn.addEventListener("click", () => {
      localStorage.setItem("cheapster_welcome_seen", "1");
      closeModal("welcomeModal");
  });
}

// ---------- PWA Install Logic ----------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(()=>{}));
}

let deferredPrompt;
const installBtn = document.getElementById("installAppBtn");
const isAndroid = /Android/i.test(navigator.userAgent);

if (installBtn && isAndroid) {
  window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      installBtn.style.display = "inline-flex";
  });
  installBtn.addEventListener("click", async () => {
      haptic();
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt = null;
        installBtn.style.display = "none";
      }
  });
}

// ---------- Promo Banners Carousel ----------
const promoCarousel = document.getElementById('promoCarousel');
const scrollLeftBtn = document.getElementById('scrollLeftBtn');
const scrollRightBtn = document.getElementById('scrollRightBtn');

if (promoCarousel) {
  const originalSlides = Array.from(promoCarousel.children);
  for(let i = 0; i < 3; i++) {
    originalSlides.forEach(slide => { let clone = slide.cloneNode(true); promoCarousel.appendChild(clone); });
  }

  const getScrollAmount = () => promoCarousel.querySelector('.promo-slide').clientWidth + 16; 

  if (scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.addEventListener('click', () => { promoCarousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' }); });
    scrollRightBtn.addEventListener('click', () => { promoCarousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' }); });
  }

  promoCarousel.addEventListener('scroll', () => {
    const maxScroll = promoCarousel.scrollWidth - promoCarousel.clientWidth;
    if (promoCarousel.scrollLeft <= 0) {
      promoCarousel.style.scrollBehavior = 'auto'; 
      promoCarousel.scrollLeft = maxScroll / 2;    
      promoCarousel.style.scrollBehavior = 'smooth'; 
    } else if (promoCarousel.scrollLeft >= maxScroll - 5) {
      promoCarousel.style.scrollBehavior = 'auto'; 
      promoCarousel.scrollLeft = maxScroll / 2;
      promoCarousel.style.scrollBehavior = 'smooth';
    }
  });

  setTimeout(() => { promoCarousel.scrollLeft = (promoCarousel.scrollWidth - promoCarousel.clientWidth) / 2; }, 150);
}


// =========================================================
// GEMINI AI COUPON HUNTER (Upgraded with Live Search & Smart Errors)
// =========================================================

const SYSTEM_PROMPT = `You are my LIVE INDIAN COUPON CODE HUNTER. Whenever I send a product photo, product name or product link, identify its category and perform a live web search to find active coupon codes and discounts that I can try — only from the brands/sites listed below. 

ALLOWED BRANDS / SITES (STRICT FILTER) Only use these:
Marketplace & Fashion: Amazon, Flipkart, Myntra, Nykaa, AJIO, Tata CLiQ, Croma, Tira, Shopsy, JioMart, Meesho, Snitch, Urbanic, Beyoung, Savana, Bewakoof, The Souled Store, XYXX, Cahoot, Bonkers Corner, Levi's, Shoppers Stop, Crocs
Beauty & Grooming: Minimalist, Plum, Dot & Key, Mamaearth, MCaffeine, Foxtale, Pilgrim, WOW Skin Science, Purplle, Sugar Cosmetics, MyGlamm, Bella Vita, Skinn by Titan, Swiss Beauty, MAC Cosmetics, Bare Anatomy, BBlunt, Beardo, Bombay Shaving Co, The Man Company, Ghar Soaps, Lakme, Maybelline, L'Oréal
Tech: Dell, Lenovo, Realme, boAt, Noise, JBL, Reliance Digital, HP, Vijay Sales, Cashify, Spinny
Wellness & Health: Tata 1mg, Apollo 24|7, Netmeds, MuscleBlaze, Myprotein, Plix, Kapiva, HealthKart, Traya, Man Matters, Perfora, Optimum Nutrition
Jewellery & Gifting: Lenskart, Titan, Tanishq, Giva, Palmonas, Melorra, BlueStone, FNP
Travel: MakeMyTrip, Agoda, Booking.com, Goibibo, Ixigo, Oyo Rooms, Skyscanner
Home: Pepperfry, WoodenStreet, Urban Ladder, Wakefit, SleepyCat, Rentomojo, Moglix, Bosch Tools
Pets: Supertails, Heads Up For Tails, Drools, Pedigree, Royal Canin
Digital: Hostinger, GoDaddy, Microsoft, upGrad, Physics Wallah
Kids: FirstCry, Hopscotch, Hamleys, Smartivity, LEGO

RULES
1. Search only on the brands/sites listed above using your live search tool.
2. If a brand is not in the list → completely ignore it.
3. If you absolutely cannot find specific codes, provide at least 3 general sitewide deals (like Flat 10% off, Free Shipping, Bank Offers) for top allowed brands (Amazon, Myntra, etc) relevant to the product.
4. Prioritize: % off, Instant discount, Cashback, Flat ₹XX off.
5. Do NOT use any Markdown formatting like bold (**), italics (*), or code blocks (\`\`\`). Keep plain text.

EXACT OUTPUT FORMAT Only list in this style (one per line):
Brand - CODE Description

Examples:
Supertails - SAVE100 Flat ₹100 off above ₹1200
Myntra - MYNTRA300 Flat ₹300 off
Flipkart - FKEMPNIKE20 Extra 20% off

No extra text, no introduction, no explanation.`;

let selectedProductBase64 = null;
let loaderInterval;

const productImageInput = document.getElementById("productImageInput");
const imagePreviewBadge = document.getElementById("imagePreviewBadge");
const removeImgBtn = document.getElementById("removeImgBtn");
const searchCouponBtn = document.getElementById("searchCouponBtn");
const aiSearchInput = document.getElementById("searchInput");

const loadingNotes = [
  "Fetching promo codes might take a minute, please wait...",
  "Scanning 100+ top Indian brands for active codes...",
  "Applying Gemini AI magic to find the best discounts...",
  "Verifying coupons for your product category...",
  "Almost there! Sorting the best deals right now..."
];

// --- Image Upload Handler ---
if (productImageInput) {
  productImageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      selectedProductBase64 = reader.result;
      if (imagePreviewBadge) imagePreviewBadge.hidden = false;
      showToast("Product image attached! Ready to hunt.", "📸");
      aiSearchInput.focus();
    };
    reader.readAsDataURL(file);
  });
}

// --- Remove Image ---
if (removeImgBtn) {
  removeImgBtn.addEventListener("click", () => {
    selectedProductBase64 = null;
    productImageInput.value = "";
    imagePreviewBadge.hidden = true;
    showToast("Image removed.", "ℹ️");
  });
}

// --- Enter Key & Click Triggers ---
if (aiSearchInput) {
  aiSearchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); triggerSecureAIHunt(); }
  });
}

if (searchCouponBtn) {
  searchCouponBtn.addEventListener("click", triggerSecureAIHunt);
}

// Helper to format Base64 for Gemini
function formatGeminiImagePart(dataUrl) {
  const matches = dataUrl.match(/^data:(.+);base64,(.+)$/);
  if (!matches || matches.length !== 3) return null;
  return { inlineData: { mimeType: matches[1], data: matches[2] } };
}

// --- Trigger Secure Call to Google Apps Script ---
async function triggerSecureAIHunt() {
  const query = aiSearchInput ? aiSearchInput.value.trim() : "";

  if (!query && !selectedProductBase64) {
    showToast("Please enter a brand, product name, or upload an image.", "⚠️");
    return;
  }

  haptic();
  openModal("couponResultsModal");

  const loader = document.getElementById("couponLoader");
  const container = document.getElementById("couponCardsList");
  const title = document.getElementById("couponModalTitle");
  const animText = document.getElementById("loadingTextAnim");

  if (loader) loader.hidden = false;
  if (container) container.innerHTML = "";
  if (title) title.textContent = query ? `Coupons for "${query}"` : "Coupons for Uploaded Image";

  // Start Rotating Notes
  if (animText) {
    let noteIndex = 0;
    animText.textContent = loadingNotes[0];
    animText.style.opacity = 1;
    clearInterval(loaderInterval);
    loaderInterval = setInterval(() => {
      noteIndex = (noteIndex + 1) % loadingNotes.length;
      animText.style.opacity = 0;
      setTimeout(() => { animText.textContent = loadingNotes[noteIndex]; animText.style.opacity = 1; }, 300);
    }, 3500);
  }

  try {
    let parts = [];
    if (query) parts.push({ text: `Find working coupons for: ${query}` });
    
    if (selectedProductBase64) {
      const imgPart = formatGeminiImagePart(selectedProductBase64);
      if (imgPart) parts.push(imgPart);
    }

    // NAYA PAYLOAD WITH LIVE SEARCH TOOL ENABLED
    const geminiPayload = {
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: [{ parts: parts }],
      tools: [{ googleSearch: {} }], 
      generationConfig: { temperature: 0.2 }
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        action: "huntCoupons",
        payload: geminiPayload
      })
    });

    if (!response.ok) throw new Error(`Backend Error: ${response.status}`);

    const data = await response.json();
    
    // Exact Error Handling Display
    if (data.error) {
       console.error("Gemini API Error:", data.error);
       if (container) {
         container.innerHTML = `<div style="text-align:center; padding:20px; color:var(--champagne-bright); background:rgba(205,161,92,0.1); border-radius:12px; font-size:13px;"><p>⚠️ API Error: ${data.error.message || "Invalid Model/Key configuration."}</p></div>`;
       }
       return;
    }

    const rawOutput = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    renderAICards(rawOutput);

    // Free memory
    selectedProductBase64 = null;
    productImageInput.value = "";
    imagePreviewBadge.hidden = true;

  } catch (err) {
    console.error("AI Hunter Error:", err);
    if (container) {
      container.innerHTML = `<div style="text-align:center; padding:20px; color:var(--muted);"><p>⚠️ AI search request failed. Check network or API limits.</p></div>`;
    }
  } finally {
    if (loader) loader.hidden = true;
    clearInterval(loaderInterval);
  }
}

// --- Render AI Results ---
function renderAICards(rawText) {
  const container = document.getElementById("couponCardsList");
  if (!container) return;

  // Clean Markdown formatting aur extra spaces
  const cleanText = rawText.replace(/\*/g, '').replace(/`/g, '');
  const lines = cleanText.split("\n").map(l => l.trim()).filter(l => l.length > 0);

  if (lines.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:20px; color:var(--muted);"><p>No live promo codes found right now. Check back soon!</p></div>`;
    return;
  }

  container.innerHTML = "";

  lines.forEach((line) => {
    // Agar Gemini galti se bina format bhej de, toh strict filtering nikal di hai
    const match = line.match(/^([^-:]+)[-:]\s*(\S+)\s+(.+)$/);
    let brandName = "Promo Deal", code = "CLICK2APPLY", desc = line;

    if (match) {
      brandName = match[1].trim();
      code = match[2].trim();
      desc = match[3].trim();
    } else {
      // Agar dash (-) na mile toh fallback format
      desc = line;
    }

    const matchedStore = stores.find(s => s.name.toLowerCase().includes(brandName.toLowerCase()));
    const storeUrl = matchedStore ? matchedStore.link : `https://www.google.com/search?q=${encodeURIComponent(brandName+ ' store')}`;
    const logoSrc = matchedStore && matchedStore.logo ? matchedStore.logo : null;

    const logoHtml = logoSrc 
        ? `<div class="coupon-logo-box"><img src="${logoSrc}" alt="${brandName}" onerror="this.style.display='none'"></div>`
        : `<div class="coupon-logo-box" style="background:var(--sapphire); color:var(--champagne-bright); font-size:16px; font-weight:800;">${initials(brandName)}</div>`;

    const card = document.createElement("div");
    card.className = "coupon-card-item";
    card.innerHTML = `
      ${logoHtml}
      <div class="coupon-card-info">
        <span class="coupon-brand-tag">${brandName}</span>
        <div><span class="coupon-code-badge" title="Click to Copy code">${code}</span></div>
        <p class="coupon-desc">${desc}</p>
      </div>
      <a href="${storeUrl}" target="_blank" rel="noopener" class="coupon-action-btn">
        Shop Now ↗
      </a>
    `;

    const badge = card.querySelector(".coupon-code-badge");
    badge.addEventListener("click", () => {
      navigator.clipboard.writeText(code);
      haptic();
      badge.textContent = "COPIED! ✓";
      badge.style.background = "var(--success)";
      badge.style.color = "#fff";
      badge.style.borderColor = "var(--success)";
      setTimeout(() => { 
        badge.textContent = code; 
        badge.style.background = "";
        badge.style.color = "";
        badge.style.borderColor = "";
      }, 1800);
      showToast(`Code copied!`, "📋");
    });

    container.appendChild(card);
  });
}
