// build: 2026-09-21-Exact-Zip-Logos
// =========================================================
// CHEapSTER.IN — PREMIUM BRAND DIRECTORY (Exact Zip Logos)
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
  { name: "Tira", domain: "tirabeauty.com", category: "Mega Brands", description: "Premium beauty", link: "https://myntr.it/8rjwEfS", logo: "hd-logos/tirabeautycom.png" }, // Routed to Myntra
  { name: "Shopsy", domain: "shopsy.in", category: "Mega Brands", description: "Value shopping", link: "https://bitli.in/q3GTiTJ", logo: "hd-logos/shopsy.png" },
  { name: "JioMart", domain: "jiomart.com", category: "Mega Brands", description: "Groceries & more", link: "https://bitli.in/6jJqYGx", logo: "hd-logos/jiomart.png" },

  // 2. FASHION & FOOTWEAR
  { name: "Snitch", domain: "", category: "Fashion", description: "Men's fashion", link: "https://myntr.it/4Z4putW", logo: "hd-logos/snitchcom.png" }, // Routed to Myntra
  { name: "Urbanic", domain: "urbanic.com", category: "Fashion", description: "Gen-Z women's fashion", link: "https://inr.deals/JNTFEn", logo: "hd-logos/urbanic.png" },
  { name: "Beyoung", domain: "beyoung.in", category: "Fashion", description: "Everyday fashion", link: "https://inr.deals/dg4LBQ", logo: "hd-logos/beyoungin.png" },
  { name: "Savana", domain: "savana.com", category: "Fashion", description: "Trendy fashion", link: "https://www.savana.com", logo: "hd-logos/savana.png" },
  { name: "Bewakoof", domain: "bewakoof.com", category: "Fashion", description: "Quirky fashion", link: "https://myntr.it/k5op88M", logo: "hd-logos/bewakoof.png" }, // Routed to Myntra
  { name: "The Souled Store", domain: "thesouledstore.com", category: "Fashion", description: "Pop culture merch", link: "https://inr.deals/FK7yPZ", logo: "hd-logos/thesouledstore.png" },
  { name: "XYXX", domain: "xyxxcrew.com", category: "Fashion", description: "Men's innerwear", link: "https://bitli.in/3zj1f7A", logo: "hd-logos/xyxx.png" },
  { name: "Cahoot", domain: "cahoot.in", category: "Fashion", description: "Casual streetwear", link: "https://cahoot.in/collections/men-bestsellers", logo: "hd-logos/cahootin.png" },
  { name: "Bonkers Corner", domain: "bonkerscorner.com", category: "Fashion", description: "Gen-Z streetwear", link: "https://myntr.it/9dOkPqa", logo: "hd-logos/bonkerscorner.png" }, // Routed to Myntra
  { name: "Levi's", domain: "levi.in", category: "Fashion", description: "Premium denim", link: "https://www.levi.in", logo: "hd-logos/leviin.png" },
  { name: "Shoppers Stop", domain: "shoppersstop.com", category: "Fashion", description: "Premium retail", link: "https://www.shoppersstop.com", logo: "hd-logos/shoppersstop.png" },
  { name: "Crocs", domain: "crocs.in", category: "Fashion", description: "Comfort footwear", link: "https://www.crocs.in", logo: "hd-logos/crocs.png" },

  // 3. BEAUTY & GROOMING
  { name: "Minimalist", domain: "beminimalist.co", category: "Beauty & Grooming", description: "Science skincare", link: "https://myntr.it/rMINbqf", logo: "hd-logos/minimalist.png" }, // Myntra
  { name: "Plum", domain: "plumgoodness.com", category: "Beauty & Grooming", description: "Vegan beauty", link: "https://www.plumgoodness.com", logo: "hd-logos/plum.png" },
  { name: "Dot & Key", domain: "dotandkey.com", category: "Beauty & Grooming", description: "Skincare essentials", link: "https://bitli.in/kxVP911", logo: "hd-logos/dotkey.png" },
  { name: "Mamaearth", domain: "mamaearth.in", category: "Beauty & Grooming", description: "Toxin-free care", link: "https://myntr.it/HKn907y", logo: "hd-logos/mamaearth.png" }, // Routed to Myntra
  { name: "MCaffeine", domain: "mcaffeine.com", category: "Beauty & Grooming", description: "Caffeinated care", link: "https://bitli.in/l5q8RB9", logo: "hd-logos/mcaffeine.png" },
  { name: "Foxtale", domain: "foxtale.in", category: "Beauty & Grooming", description: "Skincare essentials", link: "https://bitli.in/0AmuJ4D", logo: "hd-logos/foxtale.png" },
  { name: "Pilgrim", domain: "discoverpilgrim.com", category: "Beauty & Grooming", description: "Global beauty secrets", link: "https://myntr.it/b15Xj44", logo: "hd-logos/pilgrim.png" }, // Routed to Myntra
  { name: "WOW Skin Science", domain: "buywow.in", category: "Beauty & Grooming", description: "Natural care", link: "https://myntr.it/cL2I60J", logo: "hd-logos/wowskinscience.png" }, // Routed to Myntra
  { name: "Purplle", domain: "purplle.com", category: "Beauty & Grooming", description: "Beauty shopping", link: "https://myntr.it/DtZXMYc", logo: "hd-logos/purplle.png" }, // Routed to Nykaa
  { name: "Sugar Cosmetics", domain: "sugarcosmetics.com", category: "Beauty & Grooming", description: "Makeup brand", link: "https://www.sugarcosmetics.com", logo: "hd-logos/sugarcosmetics.png" },
  { name: "MyGlamm", domain: "myglamm.com", category: "Beauty & Grooming", description: "Makeup & beauty", link: "https://myntr.it/kdZ8qNm", logo: "hd-logos/myglammcom.png" }, // Routed to Myntra
  { name: "Bella Vita", domain: "bellavitaluxury.co.in", category: "Beauty & Grooming", description: "Luxury perfumes", link: "https://bitli.in/my55y0T", logo: "hd-logos/bellavitaorganiccom.png" },
  { name: "Skinn by Titan", domain: "skinn.in", category: "Beauty & Grooming", description: "Indian luxury fragrances", link: "https://www.skinn.in", logo: "hd-logos/skinnbytitan.png" },
  { name: "Swiss Beauty", domain: "swissbeauty.in", category: "Beauty & Grooming", description: "Budget makeup", link: "https://bitli.in/aIuUSl6", logo: "hd-logos/swissbeautyin.png" },
  { name: "MAC Cosmetics", domain: "maccosmetics.in", category: "Beauty & Grooming", description: "Luxury makeup", link: "https://www.myntra.com/mac", logo: "hd-logos/maccosmeticsin.png" }, // Routed to Myntra
  { name: "Bare Anatomy", domain: "innovist.com", category: "Beauty & Grooming", description: "Science hair care", link: "https://myntr.it/KZrg2I3", logo: "hd-logos/bareanatomy.png" }, // Routed to Myntra
  { name: "BBlunt", domain: "bblunt.com", category: "Beauty & Grooming", description: "Salon-style hair care", link: "https://myntr.it/XcUHhAy", logo: "hd-logos/bbluntcom.png" }, // Routed to Myntra
  { name: "Beardo", domain: "beardo.in", category: "Beauty & Grooming", description: "Men's grooming", link: "https://myntr.it/7LmnKhJ", logo: "hd-logos/beardo.png" }, // Routed to Myntra
  { name: "Bombay Shaving Co", domain: "bombayshavingcompany.com", category: "Beauty & Grooming", description: "Premium grooming", link: "https://bombayshavingcompany.com", logo: "hd-logos/bombayshavingcompany.png" },
  { name: "The Man Company", domain: "themancompany.com", category: "Beauty & Grooming", description: "Premium essentials", link: "https://bitli.in/bNc5aYS", logo: "hd-logos/themancompany.png" },
  { name: "Ghar Soaps", domain: "gharsoaps.in", category: "Beauty & Grooming", description: "Ayurvedic skincare", link: "https://www.gharsoaps.shop", logo: "hd-logos/gharsoapsin.png" },
  { name: "Lakme", domain: "lakmeindia.com", category: "Beauty & Grooming", description: "Indian makeup giant", link: "https://myntr.it/sZFb9xo", logo: "hd-logos/lakmeindiacom.png" }, // Routed to Myntra
  { name: "Maybelline", domain: "maybelline.co.in", category: "Beauty & Grooming", description: "Global makeup", link: "https://myntr.it/6W0Y2f6", logo: "hd-logos/maybellinecoin.png" }, // Routed to Myntra
  { name: "L'Oréal", domain: "lorealparis.co.in", category: "Beauty & Grooming", description: "Hair & cosmetics", link: "https://myntr.it/sgEANQg", logo: "hd-logos/loral.png" }, // Routed to Myntra

  // 4. TECH & GADGETS
  { name: "Dell", domain: "dell.com", category: "Tech", description: "Laptops & PCs", link: "https://bitli.in/iNehXK5", logo: "hd-logos/dell.png" },
  { name: "Lenovo", domain: "lenovo.com", category: "Tech", description: "Laptops & tech", link: "https://inr.deals/8SVnGa", logo: "hd-logos/lenovo.png" },
  { name: "Realme", domain: "realme.com", category: "Tech", description: "Smartphones & AIoT", link: "https://fktr.in/NklgOgg", logo: "hd-logos/realme.png" }, // Routed to Flipkart
  { name: "boAt", domain: "boat-lifestyle.com", category: "Tech", description: "Audio & wearables", link: "https://www.boat-lifestyle.com", logo: "hd-logos/boat.png" },
  { name: "Noise", domain: "gonoise.com", category: "Tech", description: "Smartwatches", link: "https://www.gonoise.com", logo: "hd-logos/noise.png" },
  { name: "JBL", domain: "jbl.com", category: "Tech", description: "Premium audio", link: "https://inr.deals/lWnHDY", logo: "hd-logos/jbl.png" },
  { name: "Reliance Digital", domain: "reliancedigital.in", category: "Tech", description: "Tech retail", link: "https://www.reliancedigital.in", logo: "hd-logos/reliancedigital.png" },
  { name: "HP", domain: "hp.com", category: "Tech", description: "Laptops & tech", link: "https://bitli.in/6R3BJ2i", logo: "hd-logos/hp.png" },
  { name: "Vijay Sales", domain: "vijaysales.com", category: "Tech", description: "Electronics retail", link: "https://www.vijaysales.com", logo: "hd-logos/vijaysales.png" },
  { name: "Cashify", domain: "cashify.in", category: "Tech", description: "Sell & buy phones", link: "https://inr.deals/gW2Iby", logo: "hd-logos/cashify.png" },
  { name: "Spinny", domain: "spinny.com", category: "Tech", description: "Buy & sell used cars", link: "https://inr.deals/mor4Sf", logo: "hd-logos/spinny.png" },

  // 5. WELLNESS & HEALTH
  { name: "Tata 1mg", domain: "1mg.com", category: "Wellness & Health", description: "Online pharmacy", link: "https://www.amazon.in/b?node=22180802031&tag=cheapster0a-21", logo: "hd-logos/tata1mg.png" }, // Routed to Amazon Pharmacy
  { name: "Apollo 24|7", domain: "apollo247.com", category: "Wellness & Health", description: "Healthcare delivery", link: "https://www.amazon.in/b?node=22180802031&tag=cheapster0a-21", logo: "hd-logos/apollo247.png" }, // Routed to Amazon Pharmacy
  { name: "Netmeds", domain: "netmeds.com", category: "Wellness & Health", description: "Medicine delivery", link: "https://bitli.in/zXbiP37", logo: "hd-logos/netmeds.png" },
  { name: "MuscleBlaze", domain: "muscleblaze.com", category: "Wellness & Health", description: "Sports nutrition", link: "https://www.muscleblaze.com", logo: "hd-logos/muscleblaze.png" },
  { name: "Myprotein", domain: "myprotein.co.in", category: "Wellness & Health", description: "Fitness supplements", link: "https://www.myprotein.co.in", logo: "hd-logos/myproteincoin.png" },
  { name: "Plix", domain: "", category: "Wellness & Health", description: "Plant nutrition", link: "https://www.amazon.in/s?k=Plix&tag=cheapster0a-21", logo: "hd-logos/plix.png" }, // Routed to Amazon
  { name: "Kapiva", domain: "kapiva.in", category: "Wellness & Health", description: "Ayurvedic nutrition", link: "https://www.kapiva.in", logo: "hd-logos/kapiva.png" },
  { name: "HealthKart", domain: "healthkart.com", category: "Wellness & Health", description: "Health supplements", link: "https://www.healthkart.com", logo: "hd-logos/healthkart.png" },
  { name: "Traya", domain: "traya.health", category: "Wellness & Health", description: "Hair fall treatment", link: "https://www.amazon.in/s?k=Traya&tag=cheapster0a-21", logo: "hd-logos/traya.png" }, // Routed to Amazon
  { name: "Man Matters", domain: "manmatters.com", category: "Wellness & Health", description: "Men's wellness", link: "https://www.amazon.in/s?k=Man+Matters&tag=cheapster0a-21", logo: "hd-logos/manmatters.png" }, // Routed to Amazon
  { name: "Perfora", domain: "perforacare.com", category: "Wellness & Health", description: "Premium oral care", link: "https://inr.deals/ZAEqzs", logo: "hd-logos/perfora.png" },
  { name: "Optimum Nutrition", domain: "optimumnutrition.com", category: "Wellness & Health", description: "Premium whey protein", link: "https://www.healthkart.com/brand/optimum-nutrition", logo: "hd-logos/optimumnutrition.png" },

  // 6. JEWELLERY & GIFTING
  { name: "Lenskart", domain: "lenskart.com", category: "Jewellery & Gifting", description: "Eyewear", link: "https://www.lenskart.com", logo: "hd-logos/lenskart.png" },
  { name: "Titan", domain: "titan.co.in", category: "Jewellery & Gifting", description: "Watches & Eyeplus", link: "https://www.titan.co.in", logo: "hd-logos/titancoin.png" },
  { name: "Tanishq", domain: "tanishq.co.in", category: "Jewellery & Gifting", description: "Fine jewellery", link: "https://www.tanishq.co.in", logo: "hd-logos/tanishqcoin.png" },
  { name: "Giva", domain: "giva.co", category: "Jewellery & Gifting", description: "Silver jewellery", link: "https://www.amazon.in/s?k=Giva&tag=cheapster0a-21", logo: "hd-logos/giva.png" }, // Routed to Amazon
  { name: "Palmonas", domain: "palmonas.com", category: "Jewellery & Gifting", description: "Demi-fine jewellery", link: "https://www.palmonas.com", logo: "hd-logos/palmonas.png" },
  { name: "Melorra", domain: "melorra.com", category: "Jewellery & Gifting", description: "Trendy gold", link: "https://www.amazon.in/s?k=Melorra&tag=cheapster0a-21", logo: "hd-logos/melorra.png" }, // Routed to Amazon
  { name: "BlueStone", domain: "bluestone.com", category: "Jewellery & Gifting", description: "Fine jewellery", link: "https://www.bluestone.com", logo: "hd-logos/bluestone.png" },
  { name: "FNP", domain: "fnp.com", category: "Jewellery & Gifting", description: "Flowers & gifts", link: "https://www.amazon.in/s?k=FNP+gifts&tag=cheapster0a-21", logo: "hd-logos/fnp.png" }, // Routed to Amazon

  // 7. TRAVEL & FLIGHTS
  { name: "MakeMyTrip", domain: "makemytrip.com", category: "Travel", description: "Flights & hotels", link: "https://bitli.in/xj6tXro", logo: "hd-logos/makemytrip.png" },
  { name: "Agoda", domain: "agoda.com", category: "Travel", description: "Hotels & stays", link: "https://inr.deals/E1HvrY", logo: "hd-logos/agodacom.png" },
  { name: "Booking.com", domain: "booking.com", category: "Travel", description: "Global travel", link: "https://bitli.in/tuUeY6U", logo: "hd-logos/bookingcom.png" },
  { name: "Goibibo", domain: "goibibo.com", category: "Travel", description: "Travel bookings", link: "https://bitli.in/nr6ckLO", logo: "hd-logos/goibibo.png" },
  { name: "Ixigo", domain: "ixigo.com", category: "Travel", description: "Flight & train bookings", link: "https://www.ixigo.com", logo: "hd-logos/ixigo.png" },
  { name: "Oyo Rooms", domain: "oyorooms.com", category: "Travel", description: "Budget stays", link: "https://www.oyorooms.com", logo: "hd-logos/oyorooms.png" },

  // 8. HOME & HARDWARE
  { name: "Pepperfry", domain: "pepperfry.com", category: "Home", description: "Furniture marketplace", link: "https://www.pepperfry.com", logo: "hd-logos/pepperfry.png" },
  { name: "WoodenStreet", domain: "woodenstreet.com", category: "Home", description: "Solid wood furniture", link: "https://www.amazon.in/s?k=Wooden+Street&tag=cheapster0a-21", logo: "hd-logos/woodenstreet.png" }, // Routed to Amazon
  { name: "Urban Ladder", domain: "urbanladder.com", category: "Home", description: "Premium furniture", link: "https://inr.deals/IenJf0", logo: "hd-logos/urbanladdercom.png" },
  { name: "Wakefit", domain: "wakefit.co", category: "Home", description: "Mattress & furniture", link: "https://www.amazon.in/s?k=Wakefit&tag=cheapster0a-21", logo: "hd-logos/wakefit.png" }, // Routed to Amazon
  { name: "SleepyCat", domain: "sleepycat.in", category: "Home", description: "Sleep solutions", link: "https://sleepycat.in", logo: "hd-logos/sleepycat.png" },
  { name: "Rentomojo", domain: "rentomojo.com", category: "Home", description: "Furniture rentals", link: "https://www.rentomojo.com", logo: "hd-logos/rentomojo.png" },
  { name: "Moglix", domain: "moglix.com", category: "Home", description: "Hardware & tools", link: "https://www.moglix.com", logo: "hd-logos/moglix.png" },
  { name: "Bosch Tools", domain: "bosch-pt.co.in", category: "Home", description: "Power tools", link: "https://www.moglix.com/brands/bosch", logo: "hd-logos/boschptcoin.png" },

  // 9. PETS
  { name: "Supertails", domain: "supertails.com", category: "Pets", description: "Pet care & food", link: "https://www.amazon.in/h/pets?tag=cheapster0a-21", logo: "hd-logos/supertails.png" }, // Routed to Amazon Pets
  { name: "Heads Up For Tails", domain: "headsupfortails.com", category: "Pets", description: "Luxury pet supplies", link: "https://www.amazon.in/s?k=Heads+Up+For+Tails&tag=cheapster0a-21", logo: "hd-logos/headsupfortails.png" }, // Routed to Amazon
  { name: "Drools", domain: "drools.com", category: "Pets", description: "Dog & cat food", link: "https://www.amazon.in/s?k=Drools&tag=cheapster0a-21", logo: "hd-logos/drools.png" }, // Routed to Amazon
  { name: "Pedigree", domain: "pedigree.in", category: "Pets", description: "Dog nutrition", link: "https://www.amazon.in/s?k=Pedigree&tag=cheapster0a-21", logo: "hd-logos/pedigreein.png" }, // Routed to Amazon
  { name: "Royal Canin", domain: "royalcanin.com", category: "Pets", description: "Premium pet nutrition", link: "https://www.amazon.in/s?k=Royal+Canin&tag=cheapster0a-21", logo: "hd-logos/royalcanin.png" }, // Routed to Amazon

  // 10. DIGITAL & SOFTWARE
  { name: "Hostinger", domain: "hostinger.in", category: "Digital", description: "Web hosting", link: "https://inr.deals/8mfMZB", logo: "hd-logos/hostingerin.png" },
  { name: "GoDaddy", domain: "godaddy.com", category: "Digital", description: "Domains & web tools", link: "https://www.godaddy.com/en-in", logo: "hd-logos/godaddy.png" },
  { name: "Microsoft", domain: "microsoft.com", category: "Digital", description: "Office 365 & Xbox", link: "https://www.microsoft.com/en-in", logo: "hd-logos/microsoft.png" },
  { name: "upGrad", domain: "upgrad.com", category: "Digital", description: "Higher education", link: "https://www.upgrad.com", logo: "hd-logos/upgrad.png" },
  { name: "Physics Wallah", domain: "pw.live", category: "Digital", description: "EdTech platform", link: "https://www.pw.live", logo: "hd-logos/pw.png" },

  // 11. KIDS & TOYS
  { name: "FirstCry", domain: "firstcry.com", category: "Kids", description: "Kids & baby gear", link: "https://www.firstcry.com", logo: "hd-logos/firstcry.png" },
  { name: "Hopscotch", domain: "hopscotch.in", category: "Kids", description: "Kids fashion", link: "https://www.amazon.in/s?k=Hopscotch&tag=cheapster0a-21", logo: "hd-logos/hopscotch.png" }, // Routed to Amazon
  { name: "Hamleys", domain: "hamleys.in", category: "Kids", description: "Premium toys", link: "https://www.amazon.in/s?k=Hamleys&tag=cheapster0a-21", logo: "hd-logos/hamleysin.png" }, // Routed to Amazon
  { name: "Smartivity", domain: "smartivity.in", category: "Kids", description: "DIY & STEM toys", link: "https://www.amazon.in/s?k=Smartivity&tag=cheapster0a-21", logo: "hd-logos/smartivity.png" }, // Routed to Amazon
  { name: "LEGO", domain: "lego.com", category: "Kids", description: "Building blocks", link: "https://www.amazon.in/s?k=LEGO&tag=cheapster0a-21", logo: "hd-logos/lego.png" } // Routed to Amazon
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
  if (store.logo) {
    chain.push(store.logo);
  }
  return chain;
}

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

  // CUELINKS BYPASS LOGIC START
  if (url.includes("amazon.in")) {
      card.rel = "noopener noskim";
      card.classList.add("noskim");
  } else {
      card.rel = "noopener";
  }
  // CUELINKS BYPASS LOGIC END

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
    (e) => {
      // Cuelinks Ninja Bypass
      if (url.includes("amazon.in")) {
        e.stopPropagation();
      }
      haptic();
    }
  );

  return card;
}

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

  storeCardMap.forEach(
    (card) => {
      card.hidden = true;
    }
  );

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

// ---------- reward form → WhatsApp & Google Sheets ----------
const GIVEAWAY_WHATSAPP_NUMBER = "919012521219";

const rewardForm = document.getElementById("rewardForm");

if (rewardForm) {
  rewardForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validation Check
    if (!rewardForm.checkValidity()) {
      rewardForm.reportValidity();
      return;
    }

    // Login Check
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

    // ==========================================
    // ACTION 1: GOOGLE SHEETS B/G SAVE 
    // ==========================================
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbziQvJq8kqk-CAHRekAHjkSVEJkQmbBp84girc4vjfTPbY20VJl2hz_I-OC-bWBcjQf/exec"; 
    
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", 
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        fullName: fullName,
        whatsapp: whatsapp,
        brand: brand,
        email: currentUser.email || "",
        uid: currentUser.uid || "",
        submittedAt: new Date().toISOString()
      })
    }).catch(err => console.log("Save error:", err));

    // ==========================================
    // ACTION 2: WHATSAPP OPEN KARNA 
    // ==========================================
    const text = encodeURIComponent(
      `🎁 Cheapster Giveaway Entry\n\n` +
      `Name: ${fullName}\n` +
      `WhatsApp: ${whatsapp}\n` +
      `Brand: ${brand}\n` +
      `Email: ${currentUser.email || ""}`
    );

    openStoreLink({
      link: `https://wa.me/${GIVEAWAY_WHATSAPP_NUMBER}?text=${text}`
    });

    // Form Reset aur Success Screen
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

      // ---- YAHAN SE NAYA VALIDATION CHECK ADD KIYA HAI ----
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      // -----------------------------------------------------

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
