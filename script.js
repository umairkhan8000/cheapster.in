// build: 2026-10-11-AI-Coupons-Final-Script-V6
// =========================================================
// CHEapSTER.IN — PREMIUM BRAND DIRECTORY 
// =========================================================

const CATEGORY_ORDER = [
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

// localStorage private mode / blocked cookies mein error de sakta hai
const safeStore = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};

// Mega Brands ka order: best-selling pehle, baaki uske baad
const MEGA_PRIORITY = ["Amazon", "Flipkart", "Myntra", "Nykaa", "AJIO", "Croma", "JioMart", "Tata CLiQ", "Meesho", "Shopsy", "Tira", "Cashify", "Reliance Digital", "Tanishq"];

// Kisi store ko ek se zyada category mein dikhana ho to usme alsoIn: ["Mega Brands"] lagao (apni asli category mein bhi rahega)
const inCategory = (store, cat) => store.category === cat || (Array.isArray(store.alsoIn) && store.alsoIn.includes(cat));
const megaRank = (store) => {
  const i = MEGA_PRIORITY.indexOf(store.name);
  return i === -1 ? 999 : i;
};

// --- BRAND MASTER LIST WITH EXACT ZIP LOGO FILENAMES ---
const stores = [
  // 1. MEGA BRANDS
  { name: "Amazon", domain: "amazon.in", category: "Mega Brands", description: "Everything marketplace", link: "https://www.amazon.in/?tag=cheapster0a-21", logo: "hd-logos/amazon.webp" },
  { name: "Flipkart", domain: "flipkart.com", category: "Mega Brands", description: "Shopping marketplace", link: "https://fktr.in/Ve7AKTM", logo: "hd-logos/flipkart.webp" },
  { name: "Myntra", domain: "myntra.com", category: "Mega Brands", description: "Fashion & lifestyle", link: "https://myntr.it/0IKBm9j", logo: "hd-logos/myntra.webp" },
  { name: "Nykaa", domain: "nykaa.com", category: "Mega Brands", description: "Beauty & cosmetics", link: "https://bitli.in/cYKpZba", logo: "hd-logos/nykaa.webp" },
  { name: "AJIO", domain: "ajio.com", category: "Mega Brands", description: "Fashion destination", link: "https://ajiio.in/hSTHlOO", logo: "hd-logos/ajio.webp" },
  { name: "Tata CLiQ", domain: "tatacliq.com", category: "Mega Brands", description: "Multi-category retail", link: "https://bitli.in/Ufnwuqh", logo: "hd-logos/tatacliq.webp" },
  { name: "Croma", domain: "croma.com", category: "Mega Brands", description: "Electronics", link: "https://bitli.in/3MjWfz5", logo: "hd-logos/croma.webp" },
  { name: "Tira", domain: "tirabeauty.com", category: "Mega Brands", description: "Premium beauty", link: "https://myntr.it/8rjwEfS", logo: "hd-logos/tirabeautycom.webp" }, 
  { name: "Shopsy", domain: "shopsy.in", category: "Mega Brands", description: "Value shopping", link: "https://bitli.in/q3GTiTJ", logo: "hd-logos/shopsy.webp" },
  { name: "JioMart", domain: "jiomart.com", category: "Mega Brands", description: "Groceries & more", link: "https://bitli.in/6jJqYGx", logo: "hd-logos/jiomart.webp" },
  { name: "Meesho", domain: "meesho.com", category: "Mega Brands", description: "Value shopping marketplace", link: "https://www.meesho.com", logo: "hd-logos/meesho.webp" },

  // 2. FASHION & FOOTWEAR
  { name: "Snitch", domain: "", category: "Fashion", description: "Men's fashion", link: "https://myntr.it/4Z4putW", logo: "hd-logos/snitchcom.webp" },
  { name: "Urbanic", domain: "urbanic.com", category: "Fashion", description: "Gen-Z women's fashion", link: "https://inr.deals/JNTFEn", logo: "hd-logos/urbanic.webp" },
  { name: "Beyoung", domain: "beyoung.in", category: "Fashion", description: "Everyday fashion", link: "https://inr.deals/dg4LBQ", logo: "hd-logos/beyoungin.webp" },
  { name: "Savana", domain: "savana.com", category: "Fashion", description: "Trendy fashion", link: "https://www.savana.com", logo: "hd-logos/savana.webp" },
  { name: "Bewakoof", domain: "bewakoof.com", category: "Fashion", description: "Quirky fashion", link: "https://myntr.it/k5op88M", logo: "hd-logos/bewakoof.webp" },
  { name: "The Souled Store", domain: "thesouledstore.com", category: "Fashion", description: "Pop culture merch", link: "https://myntr.it/DWA75BD", logo: "hd-logos/thesouledstore.webp" },
  { name: "XYXX", domain: "xyxxcrew.com", category: "Fashion", description: "Men's innerwear", link: "https://bitli.in/3zj1f7A", logo: "hd-logos/xyxx.webp" },
  { name: "Cahoot", domain: "cahoot.in", category: "Fashion", description: "Casual streetwear", link: "https://cahoot.in/collections/men-bestsellers", logo: "hd-logos/cahootin.webp" },
  { name: "Bonkers Corner", domain: "bonkerscorner.com", category: "Fashion", description: "Gen-Z streetwear", link: "https://myntr.it/9dOkPqa", logo: "hd-logos/bonkerscorner.webp" },
  { name: "Levi's", domain: "levi.in", category: "Fashion", description: "Premium denim", link: "https://www.levi.in", logo: "hd-logos/leviin.webp" },
  { name: "Shoppers Stop", domain: "shoppersstop.com", category: "Fashion", description: "Premium retail", link: "https://www.shoppersstop.com", logo: "hd-logos/shoppersstop.webp" },
  { name: "Crocs", domain: "crocs.in", category: "Fashion", description: "Comfort footwear", link: "https://www.crocs.in", logo: "hd-logos/crocs.webp" },

  // 3. BEAUTY & GROOMING
  { name: "Minimalist", domain: "beminimalist.co", category: "Beauty & Grooming", description: "Science skincare", link: "https://myntr.it/rMINbqf", logo: "hd-logos/minimalist.webp" }, 
  { name: "Plum", domain: "plumgoodness.com", category: "Beauty & Grooming", description: "Vegan beauty", link: "https://www.plumgoodness.com", logo: "hd-logos/plum.webp" },
  { name: "Dot & Key", domain: "dotandkey.com", category: "Beauty & Grooming", description: "Skincare essentials", link: "https://bitli.in/kxVP911", logo: "hd-logos/dotkey.webp" },
  { name: "Mamaearth", domain: "mamaearth.in", category: "Beauty & Grooming", description: "Toxin-free care", link: "https://myntr.it/HKn907y", logo: "hd-logos/mamaearth.webp" }, 
  { name: "MCaffeine", domain: "mcaffeine.com", category: "Beauty & Grooming", description: "Caffeinated care", link: "https://bitli.in/l5q8RB9", logo: "hd-logos/mcaffeine.webp" },
  { name: "Foxtale", domain: "foxtale.in", category: "Beauty & Grooming", description: "Skincare essentials", link: "https://bitli.in/0AmuJ4D", logo: "hd-logos/foxtale.webp" },
  { name: "Pilgrim", domain: "discoverpilgrim.com", category: "Beauty & Grooming", description: "Global beauty secrets", link: "https://myntr.it/b15Xj44", logo: "hd-logos/pilgrim.webp" }, 
  { name: "WOW Skin Science", domain: "buywow.in", category: "Beauty & Grooming", description: "Natural care", link: "https://myntr.it/cL2I60J", logo: "hd-logos/wowskinscience.webp" }, 
  { name: "Purplle", domain: "purplle.com", category: "Beauty & Grooming", description: "Beauty shopping", link: "https://myntr.it/DtZXMYc", logo: "hd-logos/purplle.webp" }, 
  { name: "Sugar Cosmetics", domain: "sugarcosmetics.com", category: "Beauty & Grooming", description: "Makeup brand", link: "https://www.sugarcosmetics.com", logo: "hd-logos/sugarcosmetics.webp" },
  { name: "MyGlamm", domain: "myglamm.com", category: "Beauty & Grooming", description: "Makeup & beauty", link: "https://myntr.it/kdZ8qNm", logo: "hd-logos/myglammcom.webp" }, 
  { name: "Bella Vita", domain: "bellavitaluxury.co.in", category: "Beauty & Grooming", description: "Luxury perfumes", link: "https://bitli.in/my55y0T", logo: "hd-logos/bellavitaorganiccom.webp" },
  { name: "Skinn by Titan", domain: "skinn.in", category: "Beauty & Grooming", description: "Indian luxury fragrances", link: "https://www.skinn.in", logo: "hd-logos/skinnbytitan.webp" },
  { name: "Swiss Beauty", domain: "swissbeauty.in", category: "Beauty & Grooming", description: "Budget makeup", link: "https://bitli.in/aIuUSl6", logo: "hd-logos/swissbeautyin.webp" },
  { name: "MAC Cosmetics", domain: "maccosmetics.in", category: "Beauty & Grooming", description: "Luxury makeup", link: "https://www.myntra.com/mac", logo: "hd-logos/maccosmeticsin.webp" }, 
  { name: "Bare Anatomy", domain: "innovist.com", category: "Beauty & Grooming", description: "Science hair care", link: "https://myntr.it/KZrg2I3", logo: "hd-logos/bareanatomy.webp" }, 
  { name: "BBlunt", domain: "bblunt.com", category: "Beauty & Grooming", description: "Salon-style hair care", link: "https://myntr.it/XcUHhAy", logo: "hd-logos/bbluntcom.webp" }, 
  { name: "Beardo", domain: "beardo.in", category: "Beauty & Grooming", description: "Men's grooming", link: "https://myntr.it/7LmnKhJ", logo: "hd-logos/beardo.webp" }, 
  { name: "Bombay Shaving Co", domain: "bombayshavingcompany.com", category: "Beauty & Grooming", description: "Premium grooming", link: "https://bombayshavingcompany.com", logo: "hd-logos/bombayshavingcompany.webp" },
  { name: "The Man Company", domain: "themancompany.com", category: "Beauty & Grooming", description: "Premium essentials", link: "https://bitli.in/bNc5aYS", logo: "hd-logos/themancompany.webp" },
  { name: "Ghar Soaps", domain: "gharsoaps.in", category: "Beauty & Grooming", description: "Ayurvedic skincare", link: "https://www.gharsoaps.shop", logo: "hd-logos/gharsoapsin.webp" },
  { name: "Lakme", domain: "lakmeindia.com", category: "Beauty & Grooming", description: "Indian makeup giant", link: "https://myntr.it/sZFb9xo", logo: "hd-logos/lakmeindiacom.webp" }, 
  { name: "Maybelline", domain: "maybelline.co.in", category: "Beauty & Grooming", description: "Global makeup", link: "https://myntr.it/6W0Y2f6", logo: "hd-logos/maybellinecoin.webp" }, 
  { name: "L'Oréal", domain: "lorealparis.co.in", category: "Beauty & Grooming", description: "Hair & cosmetics", link: "https://myntr.it/sgEANQg", logo: "hd-logos/loral.webp" }, 

  // 4. TECH & GADGETS
  { name: "Dell", domain: "dell.com", category: "Tech", description: "Laptops & PCs", link: "https://bitli.in/iNehXK5", logo: "hd-logos/dell.webp" },
  { name: "Lenovo", domain: "lenovo.com", category: "Tech", description: "Laptops & tech", link: "https://inr.deals/8SVnGa", logo: "hd-logos/lenovo.webp" },
  { name: "Realme", domain: "realme.com", category: "Tech", description: "Smartphones & AIoT", link: "https://fktr.in/NklgOgg", logo: "hd-logos/realme.webp" }, 
  { name: "boAt", domain: "boat-lifestyle.com", category: "Tech", description: "Audio & wearables", link: "https://www.boat-lifestyle.com", logo: "hd-logos/boat.webp" },
  { name: "Noise", domain: "gonoise.com", category: "Tech", description: "Smartwatches", link: "https://www.gonoise.com", logo: "hd-logos/noise.webp" },
  { name: "JBL", domain: "jbl.com", category: "Tech", description: "Premium audio", link: "https://inr.deals/lWnHDY", logo: "hd-logos/jbl.webp" },
  { name: "Reliance Digital", domain: "reliancedigital.in", category: "Tech", alsoIn: ["Mega Brands"], description: "Tech retail", link: "https://www.reliancedigital.in", logo: "hd-logos/reliancedigital.webp" },
  { name: "HP", domain: "hp.com", category: "Tech", description: "Laptops & tech", link: "https://bitli.in/6R3BJ2i", logo: "hd-logos/hp.webp" },
  { name: "Vijay Sales", domain: "vijaysales.com", category: "Tech", description: "Electronics retail", link: "https://www.vijaysales.com", logo: "hd-logos/vijaysales.webp" },
  { name: "Cashify", domain: "cashify.in", category: "Tech", alsoIn: ["Mega Brands"], description: "Sell & buy phones", link: "https://inr.deals/gW2Iby", logo: "hd-logos/cashify.webp" },
  { name: "Spinny", domain: "spinny.com", category: "Tech", description: "Buy & sell used cars", link: "https://inr.deals/mor4Sf", logo: "hd-logos/spinny.webp" },

  // 5. WELLNESS & HEALTH
  { name: "Tata 1mg", domain: "1mg.com", category: "Wellness & Health", description: "Online pharmacy", link: "https://www.amazon.in/b?node=22180802031&tag=cheapster0a-21", logo: "hd-logos/tata1mg.webp" }, 
  { name: "Apollo 24|7", domain: "apollo247.com", category: "Wellness & Health", description: "Healthcare delivery", link: "https://www.amazon.in/b?node=22180802031&tag=cheapster0a-21", logo: "hd-logos/apollo247.webp" }, 
  { name: "Netmeds", domain: "netmeds.com", category: "Wellness & Health", description: "Medicine delivery", link: "https://bitli.in/zXbiP37", logo: "hd-logos/netmeds.webp" },
  { name: "MuscleBlaze", domain: "muscleblaze.com", category: "Wellness & Health", description: "Sports nutrition", link: "https://www.muscleblaze.com", logo: "hd-logos/muscleblaze.webp" },
  { name: "Myprotein", domain: "myprotein.co.in", category: "Wellness & Health", description: "Fitness supplements", link: "https://www.myprotein.co.in", logo: "hd-logos/myproteincoin.webp" },
  { name: "Plix", domain: "", category: "Wellness & Health", description: "Plant nutrition", link: "https://www.amazon.in/s?k=Plix&tag=cheapster0a-21", logo: "hd-logos/plix.webp" }, 
  { name: "Kapiva", domain: "kapiva.in", category: "Wellness & Health", description: "Ayurvedic nutrition", link: "https://www.kapiva.in", logo: "hd-logos/kapiva.webp" },
  { name: "HealthKart", domain: "healthkart.com", category: "Wellness & Health", description: "Health supplements", link: "https://www.healthkart.com", logo: "hd-logos/healthkart.webp" },
  { name: "Traya", domain: "traya.health", category: "Wellness & Health", description: "Hair fall treatment", link: "https://www.amazon.in/s?k=Traya&tag=cheapster0a-21", logo: "hd-logos/traya.webp" }, 
  { name: "Man Matters", domain: "manmatters.com", category: "Wellness & Health", description: "Men's wellness", link: "https://www.amazon.in/s?k=Man+Matters&tag=cheapster0a-21", logo: "hd-logos/manmatters.webp" }, 
  { name: "Perfora", domain: "perforacare.com", category: "Wellness & Health", description: "Premium oral care", link: "https://inr.deals/ZAEqzs", logo: "hd-logos/perfora.webp" },
  { name: "Optimum Nutrition", domain: "optimumnutrition.com", category: "Wellness & Health", description: "Premium whey protein", link: "https://www.healthkart.com/brand/optimum-nutrition", logo: "hd-logos/optimumnutrition.webp" },

  // 6. JEWELLERY & GIFTING
  { name: "Lenskart", domain: "lenskart.com", category: "Jewellery & Gifting", description: "Eyewear", link: "https://www.lenskart.com", logo: "hd-logos/lenskart.webp" },
  { name: "Titan", domain: "titan.co.in", category: "Jewellery & Gifting", description: "Watches & Eyeplus", link: "https://www.titan.co.in", logo: "hd-logos/titancoin.webp" },
  { name: "Tanishq", domain: "tanishq.co.in", category: "Jewellery & Gifting", alsoIn: ["Mega Brands"], description: "Fine jewellery", link: "https://www.tanishq.co.in", logo: "hd-logos/tanishqcoin.webp" },
  { name: "Giva", domain: "giva.co", category: "Jewellery & Gifting", description: "Silver jewellery", link: "https://www.amazon.in/s?k=Giva&tag=cheapster0a-21", logo: "hd-logos/giva.webp" }, 
  { name: "Palmonas", domain: "palmonas.com", category: "Jewellery & Gifting", description: "Demi-fine jewellery", link: "https://www.palmonas.com", logo: "hd-logos/palmonas.webp" },
  { name: "Melorra", domain: "melorra.com", category: "Jewellery & Gifting", description: "Trendy gold", link: "https://www.amazon.in/s?k=Melorra&tag=cheapster0a-21", logo: "hd-logos/melorra.webp" }, 
  { name: "BlueStone", domain: "bluestone.com", category: "Jewellery & Gifting", description: "Fine jewellery", link: "https://www.bluestone.com", logo: "hd-logos/bluestone.webp" },
  { name: "FNP", domain: "fnp.com", category: "Jewellery & Gifting", description: "Flowers & gifts", link: "https://www.amazon.in/s?k=FNP+gifts&tag=cheapster0a-21", logo: "hd-logos/fnp.webp" }, 

  // 7. TRAVEL & FLIGHTS
  { name: "MakeMyTrip", domain: "makemytrip.com", category: "Travel", description: "Flights & hotels", link: "https://bitli.in/xj6tXro", logo: "hd-logos/makemytrip.webp" },
  { name: "Agoda", domain: "agoda.com", category: "Travel", description: "Hotels & stays", link: "https://inr.deals/E1HvrY", logo: "hd-logos/agodacom.webp" },
  { name: "Booking.com", domain: "booking.com", category: "Travel", description: "Global travel", link: "https://bitli.in/tuUeY6U", logo: "hd-logos/bookingcom.webp" },
  { name: "Goibibo", domain: "goibibo.com", category: "Travel", description: "Travel bookings", link: "https://bitli.in/nr6ckLO", logo: "hd-logos/goibibo.webp" },
  { name: "Ixigo", domain: "ixigo.com", category: "Travel", description: "Flight & train bookings", link: "https://www.ixigo.com", logo: "hd-logos/ixigo.webp" },
  { name: "Oyo Rooms", domain: "oyorooms.com", category: "Travel", description: "Budget stays", link: "https://www.oyorooms.com", logo: "hd-logos/oyorooms.webp" },

  // 8. HOME & HARDWARE
  { name: "Pepperfry", domain: "pepperfry.com", category: "Home", description: "Furniture marketplace", link: "https://www.pepperfry.com", logo: "hd-logos/pepperfry.webp" },
  { name: "WoodenStreet", domain: "woodenstreet.com", category: "Home", description: "Solid wood furniture", link: "https://www.amazon.in/s?k=Wooden+Street&tag=cheapster0a-21", logo: "hd-logos/woodenstreet.webp" }, 
  { name: "Urban Ladder", domain: "urbanladder.com", category: "Home", description: "Premium furniture", link: "https://inr.deals/IenJf0", logo: "hd-logos/urbanladdercom.webp" },
  { name: "Wakefit", domain: "wakefit.co", category: "Home", description: "Mattress & furniture", link: "https://www.amazon.in/s?k=Wakefit&tag=cheapster0a-21", logo: "hd-logos/wakefit.webp" }, 
  { name: "SleepyCat", domain: "sleepycat.in", category: "Home", description: "Sleep solutions", link: "https://sleepycat.in", logo: "hd-logos/sleepycat.webp" },
  { name: "Rentomojo", domain: "rentomojo.com", category: "Home", description: "Furniture rentals", link: "https://www.rentomojo.com", logo: "hd-logos/rentomojo.webp" },
  { name: "Moglix", domain: "moglix.com", category: "Home", description: "Hardware & tools", link: "https://www.moglix.com", logo: "hd-logos/moglix.webp" },
  { name: "Bosch Tools", domain: "bosch-pt.co.in", category: "Home", description: "Power tools", link: "https://www.moglix.com/brands/bosch", logo: "hd-logos/boschptcoin.webp" },

  // 9. PETS
  { name: "Supertails", domain: "supertails.com", category: "Pets", description: "Pet care & food", link: "https://www.amazon.in/h/pets?tag=cheapster0a-21", logo: "hd-logos/supertails.webp" }, 
  { name: "Heads Up For Tails", domain: "headsupfortails.com", category: "Pets", description: "Luxury pet supplies", link: "https://www.amazon.in/s?k=Heads+Up+For+Tails&tag=cheapster0a-21", logo: "hd-logos/headsupfortails.webp" }, 
  { name: "Drools", domain: "drools.com", category: "Pets", description: "Dog & cat food", link: "https://www.amazon.in/s?k=Drools&tag=cheapster0a-21", logo: "hd-logos/drools.webp" }, 
  { name: "Pedigree", domain: "pedigree.in", category: "Pets", description: "Dog nutrition", link: "https://www.amazon.in/s?k=Pedigree&tag=cheapster0a-21", logo: "hd-logos/pedigreein.webp" }, 
  { name: "Royal Canin", domain: "royalcanin.com", category: "Pets", description: "Premium pet nutrition", link: "https://www.amazon.in/s?k=Royal+Canin&tag=cheapster0a-21", logo: "hd-logos/royalcanin.webp" }, 

  // 10. DIGITAL & SOFTWARE
  { name: "Hostinger", domain: "hostinger.in", category: "Digital", description: "Web hosting", link: "https://inr.deals/8mfMZB", logo: "hd-logos/hostingerin.webp" },
  { name: "GoDaddy", domain: "godaddy.com", category: "Digital", description: "Domains & web tools", link: "https://www.godaddy.com/en-in", logo: "hd-logos/godaddy.webp" },
  { name: "Microsoft", domain: "microsoft.com", category: "Digital", description: "Office 365 & Xbox", link: "https://www.microsoft.com/en-in", logo: "hd-logos/microsoft.webp" },
  { name: "upGrad", domain: "upgrad.com", category: "Digital", description: "Higher education", link: "https://www.upgrad.com", logo: "hd-logos/upgrad.webp" },
  { name: "Physics Wallah", domain: "pw.live", category: "Digital", description: "EdTech platform", link: "https://www.pw.live", logo: "hd-logos/pw.webp" },

  // 11. KIDS & TOYS
  { name: "FirstCry", domain: "firstcry.com", category: "Kids", description: "Kids & baby gear", link: "https://www.firstcry.com", logo: "hd-logos/firstcry.webp" },
  { name: "Hopscotch", domain: "hopscotch.in", category: "Kids", description: "Kids fashion", link: "https://www.amazon.in/s?k=Hopscotch&tag=cheapster0a-21", logo: "hd-logos/hopscotch.webp" }, 
  { name: "Hamleys", domain: "hamleys.in", category: "Kids", description: "Premium toys", link: "https://www.amazon.in/s?k=Hamleys&tag=cheapster0a-21", logo: "hd-logos/hamleysin.webp" }, 
  { name: "Smartivity", domain: "smartivity.in", category: "Kids", description: "DIY & STEM toys", link: "https://www.amazon.in/s?k=Smartivity&tag=cheapster0a-21", logo: "hd-logos/smartivity.webp" }, 
  { name: "LEGO", domain: "lego.com", category: "Kids", description: "Building blocks", link: "https://www.amazon.in/s?k=LEGO&tag=cheapster0a-21", logo: "hd-logos/lego.webp" } 
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
    const anchor = document.querySelector(".brand-filter-row") || gridElement;
    anchor.parentNode.insertBefore(navWrapper, anchor);
  }
}

let currentCategory = "Mega Brands";
let searchQuery = "";

const haptic = () => { if (navigator.vibrate) navigator.vibrate(40); };

// Ek time par sirf EK toast: naya aate hi purana turant replace ho jaata hai (list nahi banti)
let activeToast = null;
let toastTimer = null;

function showToast(message, icon = "✨") {
  haptic();
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  // purana toast + uska timer hata do
  if (toastTimer) { clearTimeout(toastTimer); toastTimer = null; }
  if (activeToast) { activeToast.remove(); activeToast = null; }
  container.replaceChildren();

  const toast = document.createElement("div");
  toast.className = "toast-msg";
  const iconEl = document.createElement("span");
  iconEl.style.fontSize = "16px";
  iconEl.textContent = icon;
  toast.append(iconEl, document.createTextNode(message));
  container.appendChild(toast);
  activeToast = toast;

  toastTimer = setTimeout(() => {
    toast.classList.add("toast-exit");
    toast.addEventListener("animationend", () => {
      toast.remove();
      if (activeToast === toast) activeToast = null;
    }, { once: true });
    toastTimer = null;
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

// Saare logos .webp hain (store.logo mein hi .webp path hai)
function buildLogoChain(store) {
  return store.logo ? [store.logo] : [];
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

// Card spotlight: ek hi delegated listener, frame mein max 1 baar update, touch devices par off
(function cardSpotlight() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  let raf = 0, last = null;
  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest ? e.target.closest(".store-card") : null;
    if (!card) return;
    last = { card, x: e.clientX, y: e.clientY };
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const r = last.card.getBoundingClientRect();
      last.card.style.setProperty("--mouse-x", `${last.x - r.left}px`);
      last.card.style.setProperty("--mouse-y", `${last.y - r.top}px`);
    });
  }, { passive: true });
})();

// Slow / kharab network: logo fail ho to khud 3 baar dobara try (1.2s, 2.4s, 3.6s baad).
// Phir bhi na aaye to initials dikhte hain, aur net wapas aate hi ("online") dobara apne aap try hota hai.
const LOGO_MAX_RETRY = 3;
const failedLogos = new Set();
function loadWithRetry(img, url, onFail) {
  let tries = 0;
  const attempt = () => { img.src = tries ? url + (url.indexOf("?") > -1 ? "&" : "?") + "r=" + tries : url; };
  const fail = () => {
    tries++;
    if (tries <= LOGO_MAX_RETRY) { setTimeout(attempt, 1200 * tries); return; }
    img.onerror = null;
    failedLogos.add(restart);
    onFail();
  };
  const restart = () => { failedLogos.delete(restart); tries = 0; img.onerror = fail; attempt(); };
  img.onerror = fail;
  attempt();
}
window.addEventListener("online", () => { Array.from(failedLogos).forEach((fn) => fn()); });

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

  const frame = document.createElement("div");
  frame.className = "store-logo-frame";

  const chain = buildLogoChain(store);
  const img = document.createElement("img");
  img.className = "store-logo";
  img.alt = store.name;
  img.loading = "eager"; // lazy nahi: slow net par logo late/gayab na ho; hidden cards ke logo bhi background mein pehle se aa jaate hain
  if (index >= 12) img.fetchPriority = "low"; // pehli screen ke logos/banners ko priority
  img.decoding = "async";

  // Placeholder (halka grey frame) -> image load hote hi smooth fade-in (pop-in nahi)
  frame.classList.add("is-loading");
  img.addEventListener("load", () => { img.classList.add("is-loaded"); frame.classList.remove("is-loading"); });

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
    loadWithRetry(img, chain[0], () => { img.src = svgFallback; });
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

let storeCardMap = new Map();
let shownCards = [];

function prefersReducedMotion() {
  return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
}

// Card sirf zaroorat par banta hai (pehle load par saare 107 ek saath bante the = heavy task)
function cardFor(store) {
  let card = storeCardMap.get(store.name);
  if (!card) {
    card = buildCard(store, stores.indexOf(store));
    if (!card) return null;
    storeCardMap.set(store.name, card);
  }
  return card;
}

// Baaki cards idle time mein (chhote chunks) DOM mein add hote hain, hidden; DOM pehle jaisa hi rehta hai
const runIdle = (cb) => ("requestIdleCallback" in window) ? requestIdleCallback(cb, { timeout: 1500 }) : setTimeout(cb, 120);
function fillRemainingCards() {
  if (!grid) return;
  const pending = stores.filter((st) => !storeCardMap.has(st.name));
  let i = 0;
  const step = () => {
    const frag = document.createDocumentFragment();
    const end = Math.min(i + 10, pending.length);
    for (; i < end; i++) {
      if (storeCardMap.has(pending[i].name)) continue;
      const card = cardFor(pending[i]);
      if (card) { card.hidden = true; frag.appendChild(card); }
    }
    grid.appendChild(frag);
    if (i < pending.length) runIdle(step);
  };
  if (pending.length) runIdle(step);
}
window.addEventListener("load", () => setTimeout(fillRemainingCards, 400), { once: true });

// Category / search badalne par cards halke stagger ke saath aate hain (sirf pehle 18, baaki off-screen)
function playCardEnter(cards) {
  if (prefersReducedMotion() || !grid) return;
  const n = Math.min(cards.length, 18);
  for (let i = 0; i < n; i++) cards[i].classList.remove("card-enter");
  void grid.offsetWidth; // animation restart
  for (let i = 0; i < n; i++) {
    const c = cards[i];
    c.style.setProperty("--i", i);
    c.classList.add("card-enter");
    c.addEventListener("animationend", function done(e) {
      if (e.target !== c) return;
      c.classList.remove("card-enter");
      c.style.removeProperty("--i");
      c.removeEventListener("animationend", done);
    });
  }
}

function renderUI(animate = false) {
  if (!grid) return;

  let filtered = stores.filter((store) => {
        const matchesCat = searchQuery !== "" || inCategory(store, currentCategory);
        const matchesSearch = store.name.toLowerCase().includes(searchQuery) || store.description.toLowerCase().includes(searchQuery);
        return matchesCat && matchesSearch;
  });

  if (currentCategory === "Mega Brands" && searchQuery === "") {
    filtered.sort((a, b) => megaRank(a) - megaRank(b));
  } else {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  const wanted = [];
  filtered.forEach((store) => { const card = cardFor(store); if (card) wanted.push(card); });

  // Same list + same order => DOM ko chhua hi nahi
  const same = wanted.length === shownCards.length && wanted.every((c, i) => c === shownCards[i]);
  if (!same) {
    const keep = new Set(wanted);
    shownCards.forEach((c) => { if (!keep.has(c)) c.hidden = true; });
    const frag = document.createDocumentFragment();
    wanted.forEach((c) => { c.hidden = false; frag.appendChild(c); });
    grid.appendChild(frag); // ek hi batch => ek hi reflow
    shownCards = wanted;
    if (animate) playCardEnter(wanted);
  }

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
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = `cat-pill ${cat === currentCategory ? "active" : ""}`;
      pill.textContent = cat;
      pill.setAttribute("aria-pressed", cat === currentCategory ? "true" : "false");

      pill.addEventListener("click", () => {
          haptic();
          if (currentCategory === cat) return;
          currentCategory = cat;
          navScroll.querySelectorAll(".cat-pill").forEach((p) => { p.classList.toggle("active", p === pill); p.setAttribute("aria-pressed", p === pill ? "true" : "false"); });
          const nr = navScroll.getBoundingClientRect();
          const pr = pill.getBoundingClientRect();
          navScroll.scrollTo({
            left: navScroll.scrollLeft + (pr.left - nr.left) - (nr.width - pr.width) / 2,
            behavior: "smooth"
          });
          renderUI(true);
      });
      navScroll.appendChild(pill);
  });
}

// ---------- Brand Filter Logic ----------
const brandSearchInput = document.getElementById("brandSearchInput");

if (brandSearchInput) {
  brandSearchInput.addEventListener("input", debounce((e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderUI(true);
  }));
}

// ---------- Initialization ----------
injectStylesAndNav();
renderCategoryNav();
renderUI();

// ---------- Brand search placeholder (mobile pe chhota) ----------
(function brandSearchPlaceholder() {
  const input = document.getElementById("brandSearchInput");
  if (!input) return;
  const mq = window.matchMedia("(max-width: 768px)");
  const setPlaceholder = () => { input.placeholder = mq.matches ? "Search" : "Search shopping sites..."; };
  setPlaceholder();
  if (mq.addEventListener) mq.addEventListener("change", setPlaceholder);
  else if (mq.addListener) mq.addListener(setPlaceholder);
})();

// =========================================================
// CUELINKS LOADER
// =========================================================
(function loadCuelinks() {
  if (window.__cheapsterCuelinksLoaded || window.__cheapsterCuelinksLoading) return;
  window.cId = "322091";
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

// --- FIX 1: Welcome Modal Infinite Loop Logic ---
let lastFocusedEl = null;
const modalCloseTimers = new Map();
const MODAL_CLOSE_MS = 200;

function afterModalHidden(id) {
  if (id === "dealHunterModal") restoreDealCard();
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

function openModal(id) {
  haptic();
  const modal = document.getElementById(id);
  if (modal) {
    lastFocusedEl = document.activeElement;
    // agar abhi band hone ka animation chal raha ho to cancel karo
    clearTimeout(modalCloseTimers.get(id)); modalCloseTimers.delete(id);
    modal.classList.remove("is-closing");
    modal.hidden = false;
    document.body.classList.add("modal-open");
    const dlg = modal.querySelector(".modal");
    if (dlg) { dlg.setAttribute("tabindex", "-1"); try { dlg.focus({ preventScroll: true }); } catch (e) {} }
  }
  syncMobileNav();
}

function closeModal(id) {
  haptic();
  const modal = document.getElementById(id);
  if (modal) {
    if (modal.hidden) {
      afterModalHidden(id);
    } else if (!modal.classList.contains("is-closing")) {
      if (prefersReducedMotion()) {
        modal.hidden = true;
        afterModalHidden(id);
      } else {
        modal.classList.add("is-closing"); // fade-out; baad mein hide
        modalCloseTimers.set(id, setTimeout(() => {
          modal.hidden = true;
          modal.classList.remove("is-closing");
          modalCloseTimers.delete(id);
          afterModalHidden(id);
        }, MODAL_CLOSE_MS));
      }
    }
    if (!document.querySelector(".modal-overlay:not([hidden]):not(.is-closing)")) document.body.classList.remove("modal-open");
    if (lastFocusedEl && document.contains(lastFocusedEl)) { try { lastFocusedEl.focus({ preventScroll: true }); } catch (e) {} }
  }
  syncMobileNav();

  // Ensure Welcome Modal logic works even on 'X' click
  if (id === "welcomeModal") {
    safeStore.set("cheapster_welcome_seen", "1");
  }
}

document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
});

// --- FIX 2: Global Modal Trapping Logic ---
// Close on outside overlay click for ALL modals
document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal(overlay.id);
    }
  });
});

// Close on Escape key for ALL modals
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const openOverlays = document.querySelectorAll(".modal-overlay:not([hidden]):not(.is-closing)");
    const topOverlay = openOverlays[openOverlays.length - 1];
    if (topOverlay) closeModal(topOverlay.id);
  }
});


const headerOfferBtn = document.getElementById("headerOfferBtn");
if (headerOfferBtn) headerOfferBtn.addEventListener("click", () => openModal("formModal"));

const bannerClaimBtn = document.getElementById("bannerClaimBtn");
if (bannerClaimBtn) bannerClaimBtn.addEventListener("click", () => openModal("formModal"));

document.querySelectorAll("[data-info-modal]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.infoModal));
});

// ---------- All brands popup ----------
const allBrandsList = document.getElementById("allBrandsList");
const allBrandsEmpty = document.getElementById("allBrandsEmpty");
const allBrandsSearch = document.getElementById("allBrandsSearch");
const allBrandsModal = document.getElementById("allBrandsModal");
let allBrandsBuilt = false;

document.querySelectorAll("#allBrandsCount, .all-brands-count").forEach((el) => { el.textContent = stores.length; });
const tc = document.getElementById("allBrandsTitleCount"); if (tc) tc.textContent = stores.length;

function buildAllBrandsList() {
  if (allBrandsBuilt || !allBrandsList) return;

  // Pehle Mega Brands (best-selling order), phir baaki sab
  const mega = stores.filter((s) => inCategory(s, "Mega Brands")).sort((a, b) => megaRank(a) - megaRank(b));
  const rest = stores.filter((s) => !inCategory(s, "Mega Brands"));
  for (let i = rest.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[k]] = [rest[k], rest[i]];
  }

  const gridEl = document.createElement("div");
  gridEl.className = "store-grid";
  [...mega, ...rest].forEach((store, i) => {
    const card = buildCard(store, i);
    if (!card) return;
    card.dataset.search = (store.name + " " + store.description).toLowerCase();
    gridEl.appendChild(card);
  });
  allBrandsList.appendChild(gridEl);
  allBrandsBuilt = true;
}

document.querySelectorAll("[data-open-all-brands]").forEach((btn) => {
  btn.addEventListener("click", () => {
    buildAllBrandsList();
    openModal("allBrandsModal");
  });
});

// ---------- Mobile bottom nav (phones) ----------
function syncMobileNav() {
  const nav = document.getElementById("mobileNav");
  if (!nav) return;
  const isOpen = (id) => { const m = document.getElementById(id); return !!(m && !m.hidden && !m.classList.contains("is-closing")); };
  const active = isOpen("allBrandsModal") ? "mnavDirectory"
    : isOpen("contactModal") ? "mnavContact"
    : (isOpen("dealHunterModal") || isOpen("couponResultsModal")) ? "mnavDeals"
    : "mnavHome";
  nav.querySelectorAll(".mnav-item").forEach((b) => {
    const on = b.id === active;
    b.classList.toggle("active", on);
    if (on) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
  });
}

// ---- Deals popup: page ka .deal-card (search + photo upload + Find Deals) popup mein shift hota hai ----
// Same element move hota hai (clone nahi), isliye search, image preview aur saari JS logic waisi hi chalti hai.
const dealCardEl = document.querySelector(".deal-wrap .deal-card");
const dealCardHome = dealCardEl ? dealCardEl.parentNode : null;

function openDealPopup() {
  const slot = document.getElementById("dealPopupSlot");
  if (dealCardEl && dealCardHome && slot) {
    dealCardHome.style.minHeight = dealCardHome.offsetHeight + "px"; // peeche page jump na kare
    slot.appendChild(dealCardEl);
  }
  openModal("dealHunterModal");
}

function restoreDealCard() {
  if (dealCardEl && dealCardHome && dealCardEl.parentNode !== dealCardHome) {
    dealCardHome.appendChild(dealCardEl);
    dealCardHome.style.minHeight = "";
  }
}

(function mobileBottomNav() {
  const nav = document.getElementById("mobileNav");
  if (!nav) return;

  const homeBtn = document.getElementById("mnavHome");
  const dirBtn = document.getElementById("mnavDirectory");
  const contactBtn = document.getElementById("mnavContact");
  const dealsBtn = document.getElementById("mnavDeals");

  if (homeBtn) homeBtn.addEventListener("click", () => {
    haptic();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  if (dirBtn) dirBtn.addEventListener("click", () => {
    buildAllBrandsList();
    openModal("allBrandsModal");
  });
  if (contactBtn) contactBtn.addEventListener("click", () => openModal("contactModal"));
  if (dealsBtn) dealsBtn.addEventListener("click", openDealPopup);

  // Keyboard khulne par bar chhupa do
  const isField = (el) => !!el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
  document.addEventListener("focusin", (e) => { if (isField(e.target)) document.body.classList.add("kb-open"); });
  document.addEventListener("focusout", () => document.body.classList.remove("kb-open"));
})();

if (allBrandsSearch) {
  allBrandsSearch.addEventListener("input", debounce((e) => {
    const q = e.target.value.toLowerCase().trim();
    let shown = 0;
    allBrandsList.querySelectorAll(".store-card").forEach((card) => {
      const ok = !q || card.dataset.search.includes(q);
      card.hidden = !ok;
      if (ok) shown++;
    });
    if (allBrandsEmpty) allBrandsEmpty.hidden = shown > 0;
  }));
}


// ---------- Hamburger menu ----------
const hamburgerBtn = document.getElementById("hamburgerBtn");
const headerDropdown = document.getElementById("headerDropdown");

if (hamburgerBtn && headerDropdown) {
  let dropdownTimer = null;
  function closeHeaderDropdown() {
    if (headerDropdown.hidden || headerDropdown.classList.contains("is-closing")) return;
    hamburgerBtn.setAttribute("aria-expanded", "false");
    if (prefersReducedMotion()) { headerDropdown.hidden = true; return; }
    headerDropdown.classList.add("is-closing");
    dropdownTimer = setTimeout(() => { headerDropdown.hidden = true; headerDropdown.classList.remove("is-closing"); }, 160);
  }

  hamburgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      haptic();
      const isOpen = !headerDropdown.hidden && !headerDropdown.classList.contains("is-closing");
      if (isOpen) { closeHeaderDropdown(); } 
      else {
        clearTimeout(dropdownTimer);
        headerDropdown.classList.remove("is-closing");
        headerDropdown.hidden = false;
        hamburgerBtn.setAttribute("aria-expanded", "true");
      }
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
            if (err.code === "auth/popup-blocked" || err.code === "auth/operation-not-supported-in-this-environment") {
              window.auth.signInWithRedirect(window.googleProvider);
            } else if (err.code === "auth/popup-closed-by-user" || err.code === "auth/cancelled-popup-request") {
              /* user ne khud band kiya — kuch mat karo */
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
      updateContactAuthUI();
      if (user) {
        authBtnText.textContent = user.displayName ? user.displayName.split(" ")[0] : "Account";
        authBtn.title = user.displayName || "Signed in";
        const nameField = document.getElementById("fullName");
        if (nameField && !nameField.value) nameField.value = user.displayName || "";
        const contactNameField = document.getElementById("contactName");
        if (contactNameField && !contactNameField.value) contactNameField.value = user.displayName || "";
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
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxw-xN0K6gXdnpQs6uFRM9xOWBvccVIwRowc_nvJyr-Q5X3QXi8zfrrxtms7ka7HC2r/exec"; 

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
      `🏆 Cheapster Giveaway Entry\n\nName: ${fullName}\nWhatsApp:${whatsapp}\nBrand: ${brand}\nEmail:${currentUser.email || ""}`
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
// Login mandatory: email Google login se aata hai (alag input nahi), taaki hum reply/resolution de sakein.
const WEB3FORMS_ACCESS_KEY = "5f013235-2314-452d-8f2e-2064a1f2d2e0";
const contactForm = document.getElementById("contactForm");

function updateContactAuthUI() {
  const box = document.getElementById("contactAuth");
  const text = document.getElementById("contactAuthText");
  if (!box || !text) return;
  const loggedIn = !!(currentUser && currentUser.email);
  box.classList.toggle("is-in", loggedIn);
  text.textContent = "";
  if (loggedIn) {
    text.append("✉️ We'll reply to ");
    const em = document.createElement("strong");
    em.textContent = currentUser.email;   // textContent => safe
    text.append(em);
  }
  text.hidden = !loggedIn;   // logged-out: sirf "Login with Google" button dikhe
}

if (contactForm) {
  updateContactAuthUI();
  const contactLoginBtn = document.getElementById("contactLoginBtn");
  const triggerLogin = () => {
    const headerLogin = document.getElementById("authBtn");
    if (headerLogin) headerLogin.click();   // wahi Google login flow
  };
  if (contactLoginBtn) contactLoginBtn.addEventListener("click", triggerLogin);

  contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // 1) Login pehle: baaki features (reward form) jaisa hi toast; typed text safe rehta hai
      if (!currentUser) { showToast("Please login with Google first.", "🔒"); return; }
      if (!currentUser.email) { showToast("Your Google account has no email. Please try another account.", "⚠️"); return; }

      if (!contactForm.checkValidity()) { contactForm.reportValidity(); return; }

      const submitBtn = document.getElementById("contactSubmitBtn");
      const name = document.getElementById("contactName").value.trim();
      const issue = document.getElementById("contactIssueText").value;
      const message = document.getElementById("contactMessage").value;
      const email = currentUser.email;

      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Sending..."; }
      haptic();

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: { "Content-Type": "application/json", Accept: "application/json" },
              // `email` Web3Forms mein reply-to ban jata hai -> inbox se Reply dabate hi user ko jayega
              body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, subject: `Cheapster Support: ${issue}`, from_name: "Cheapster.in Contact Form", name: name, email: email, issue: issue, message: message })
        });
        const data = await res.json();
        if (data.success) {
          showToast("Message sent! We'll reply on " + email, "✅");
          contactForm.reset();
          // reset ke baad naam wapas prefill (login same hai)
          const cn = document.getElementById("contactName");
          if (cn && currentUser) cn.value = currentUser.displayName || "";
          closeModal("contactModal");
        } else { showToast("Something went wrong. Please try again.", "❌"); }
      } catch (err) { showToast("Network error. Please try again.", "❌"); } 
      finally { if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = "Send Message"; } updateContactAuthUI(); }
  });
}

// ---------- Header height -> CSS var (category nav sticky offset) ----------
// Sticky category bar ko header ke theek neeche rakhne ke liye header ki real height chahiye.
(function syncHeaderHeight() {
  const h = document.getElementById("siteHeader");
  if (!h) return;
  const set = () => document.documentElement.style.setProperty("--header-h", h.offsetHeight + "px");
  set();
  window.addEventListener("load", set);
  window.addEventListener("resize", set, { passive: true });
  if ("ResizeObserver" in window) new ResizeObserver(set).observe(h);
})();

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
    if (safeStore.get("cheapster_welcome_seen") !== "1") {
      setTimeout(() => openModal("welcomeModal"), 1500);
    }
});

const continueBtn = document.getElementById("continueBtn");
if (continueBtn) {
  continueBtn.addEventListener("click", () => {
      safeStore.set("cheapster_welcome_seen", "1");
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

// ---------- Promo Banners Carousel (seamless infinite loop) ----------
const promoCarousel = document.getElementById('promoCarousel');
const scrollLeftBtn = document.getElementById('scrollLeftBtn');
const scrollRightBtn = document.getElementById('scrollRightBtn');

if (promoCarousel) {
  const originalSlides = Array.from(promoCarousel.children);
  const count = originalSlides.length;
  const makeClone = (node) => {
    const c = node.cloneNode(true);
    c.setAttribute("aria-hidden", "true");
    c.tabIndex = -1;
    c.querySelectorAll("img").forEach((im) => { im.removeAttribute("fetchpriority"); });
    return c;
  };
  for (let k = 0; k < 2; k++) {
    originalSlides.forEach((slide) => promoCarousel.appendChild(makeClone(slide)));
    originalSlides.slice().reverse().forEach((slide) => promoCarousel.insertBefore(makeClone(slide), promoCarousel.firstChild));
  }

  // Saari banner images (clones bhi): eager load + load hote hi fade-in.
  // Pehle sirf originals par is-loaded lagta tha, clones (jo left/right mein dikhte hain) opacity:0 par atke rehte the.
  promoCarousel.querySelectorAll("img").forEach((im) => {
    im.loading = "eager";
    im.decoding = "async";
    const done = () => im.classList.add("is-loaded");
    if (im.complete) done();
    else { im.addEventListener("load", done, { once: true }); im.addEventListener("error", done, { once: true }); }
  });

  const slides = () => promoCarousel.children;
  const slideStep = () => slides()[1].offsetLeft - slides()[0].offsetLeft;
  const setWidth = () => slides()[count].offsetLeft - slides()[0].offsetLeft;

  const jumpTo = (left) => {
    promoCarousel.style.scrollSnapType = 'none';
    promoCarousel.style.scrollBehavior = 'auto';
    promoCarousel.scrollLeft = left;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      promoCarousel.style.scrollSnapType = '';
      promoCarousel.style.scrollBehavior = '';
    }));
  };

  // Middle set ke pehle slide ka *snap-aligned* scroll position (pehle 2*setWidth tha, jo snap point se ~30px off tha
  // aur browser ko slide khinch kar centre karna padta tha -> visible jhatka)
  const middleLeft = () => {
    const first = slides()[count * 2];
    const align = (getComputedStyle(first).scrollSnapAlign || "start");
    if (align.indexOf("center") === 0) return first.offsetLeft + first.offsetWidth / 2 - promoCarousel.clientWidth / 2;
    return setWidth() * 2;
  };
  const goToMiddle = () => jumpTo(middleLeft());

  let userMoved = false;
  ["touchstart", "pointerdown", "wheel"].forEach((ev) => promoCarousel.addEventListener(ev, () => { userMoved = true; }, { passive: true }));

  goToMiddle();
  // load par dobara sirf tab center karo jab user ne carousel chhua na ho (warna beech mein khinch jata tha)
  window.addEventListener("load", () => { if (!userMoved) goToMiddle(); }, { once: true });

  if (scrollLeftBtn) scrollLeftBtn.addEventListener('click', () => promoCarousel.scrollBy({ left: -slideStep(), behavior: 'smooth' }));
  if (scrollRightBtn) scrollRightBtn.addEventListener('click', () => promoCarousel.scrollBy({ left: slideStep(), behavior: 'smooth' }));

  let touching = false;
  let settleTimer = null;

  const recenter = () => {
    if (touching) return;
    const w = setWidth();
    if (!w) return;
    const k = Math.round(promoCarousel.scrollLeft / w);  
    if (k !== 2) jumpTo(promoCarousel.scrollLeft + (2 - k) * w);
  };

  const scheduleRecenter = () => {
    clearTimeout(settleTimer);
    settleTimer = setTimeout(recenter, 160);
  };

  promoCarousel.addEventListener('scroll', scheduleRecenter, { passive: true });
  if ('onscrollend' in window) promoCarousel.addEventListener('scrollend', recenter, { passive: true });

  promoCarousel.addEventListener('touchstart', () => { touching = true; }, { passive: true });
  const touchDone = () => { touching = false; scheduleRecenter(); };
  promoCarousel.addEventListener('touchend', touchDone, { passive: true });
  promoCarousel.addEventListener('touchcancel', touchDone, { passive: true });
  promoCarousel.addEventListener('pointerdown', () => { touching = true; }, { passive: true });
  window.addEventListener('pointerup', () => { if (touching) { touching = false; scheduleRecenter(); } }, { passive: true });

  const focusMQ = window.matchMedia("(max-width: 768px)");
  const reduceMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
  let centers = [], stepPx = 1, padLeft = 0, focusRaf = 0;

  const measureFocus = () => {
    const list = Array.from(slides());
    const first = list[0].offsetLeft;
    padLeft = parseFloat(getComputedStyle(promoCarousel).paddingLeft) || 0;
    centers = list.map((el) => (el.offsetLeft - first) + padLeft + el.offsetWidth / 2);
    stepPx = slideStep() || 1;
  };

  const applyFocus = () => {
    focusRaf = 0;
    const list = slides();
    if (!focusMQ.matches || reduceMQ.matches) {
      for (let i = 0; i < list.length; i++) { list[i].style.transform = ''; list[i].style.opacity = ''; }
      return;
    }
    const mid = promoCarousel.scrollLeft + promoCarousel.clientWidth / 2;
    for (let i = 0; i < list.length; i++) {
      const d = Math.abs(centers[i] - mid) / stepPx;       
      if (d > 1.6) { list[i].style.transform = 'scale(0.9)'; list[i].style.opacity = '0.6'; continue; }
      const t = Math.min(d, 1);
      const e = t * t * (3 - 2 * t);                       
      list[i].style.transform = `scale(${(1 - 0.1 * e).toFixed(4)})`;
      list[i].style.opacity = (1 - 0.4 * e).toFixed(3);
    }
  };
  const requestFocus = () => { if (!focusRaf) focusRaf = requestAnimationFrame(applyFocus); };

  const refreshFocus = () => { measureFocus(); applyFocus(); };
  promoCarousel.addEventListener('scroll', requestFocus, { passive: true });
  window.addEventListener('resize', () => setTimeout(refreshFocus, 200), { passive: true });
  window.addEventListener('load', refreshFocus, { once: true });
  if (focusMQ.addEventListener) focusMQ.addEventListener('change', refreshFocus);
  refreshFocus();

  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(goToMiddle, 150); }, { passive: true });

  // ---- Entry reveal: carousel tab dikhao jab position set ho chuki ho + pehla banner decode ho gaya ho ----
  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    goToMiddle();
    refreshFocus();
    requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.add('carousel-ready')));
  };
  const heroImg = originalSlides[0] && originalSlides[0].querySelector('img');
  const heroDecoded = heroImg && heroImg.decode ? heroImg.decode().catch(() => {}) : Promise.resolve();
  Promise.race([heroDecoded, new Promise((r) => setTimeout(r, 1200))]).then(reveal);
}

// =========================================================
// GEMINI AI COUPON HUNTER (Upgraded with Smart Links & Compression)
// =========================================================

let selectedProductBase64 = null;
let loaderInterval;
let huntInFlight = false;
let lastHuntAt = 0;

const productImageInput = document.getElementById("productImageInput");
const uploadLabel = document.querySelector(".upload-img-label");
const uploadThumb = document.getElementById("uploadThumb");
const uploadIcon = uploadLabel ? uploadLabel.querySelector("svg") : null;
let cutTimer;
let previewObjectUrl = null;
let uploadToken = 0;

function revokePreviewUrl() {
  if (previewObjectUrl) { try { URL.revokeObjectURL(previewObjectUrl); } catch (e) {} previewObjectUrl = null; }
}

if (uploadThumb) {
  // agar blob preview load na ho (jaise HEIC), to compressed copy se dikhayenge
  uploadThumb.addEventListener("error", () => {
    if (!uploadThumb.getAttribute("src")) return;
    uploadThumb.dataset.broken = "1";
    if (selectedProductBase64 && uploadThumb.src !== selectedProductBase64) setImagePreview(selectedProductBase64);
  });
}

// Preview ab upload icon ke andar hi dikhta hai
function setImagePreview(dataUrl) {
  if (!uploadLabel || !uploadThumb) return;
  uploadThumb.dataset.broken = "0";
  uploadThumb.src = dataUrl;
  uploadThumb.hidden = false;
  if (uploadIcon) uploadIcon.style.display = "none";
  uploadLabel.classList.add("has-image");
  uploadLabel.title = "Tap to remove image";
}

function clearImagePreview() {
  uploadToken++;
  revokePreviewUrl();
  selectedProductBase64 = null;
  if (productImageInput) productImageInput.value = "";
  clearTimeout(cutTimer);
  if (!uploadLabel || !uploadThumb) return;
  uploadThumb.hidden = true;
  uploadThumb.removeAttribute("src");
  if (uploadIcon) uploadIcon.style.display = "";
  uploadLabel.classList.remove("has-image", "confirm-remove");
  uploadLabel.title = "Upload Product Image";
}
const searchCouponBtn = document.getElementById("searchCouponBtn");
const aiSearchInput = document.getElementById("searchInput");

const loadingNotes = [
  "Identifying your product and brand…",
  "Searching the latest coupons across top shopping sites…",
  "Checking bank offers and flat discounts…",
  "Verifying codes against live sources…",
  "Almost there — sorting the best deals for you…"
];

// --- ADVANCED SMART DEEP LINKING (Category Redirect) ---
function getDeepLink(brandName, userQuery) {
  const matchedStore = findStoreByName(brandName);
  
  if (!userQuery) {
    return matchedStore ? matchedStore.link : null;
  }
  
  const query = encodeURIComponent(userQuery.trim());
  const brand = brandName.toLowerCase();
  
  const searchUrls = {
    myntra: `https://www.myntra.com/${query}`,
    flipkart: `https://www.flipkart.com/search?q=${query}`,
    amazon: `https://www.amazon.in/s?k=${query}`,
    ajio: `https://www.ajio.com/search/?text=${query}`,
    nykaa: `https://www.nykaa.com/search/result/?q=${query}`
  };
  
  return searchUrls[brand] || (matchedStore ? matchedStore.link : null);
}

// --- Image Upload Handler WITH 90% COMPRESSION ---
if (productImageInput) {
  productImageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) { showToast("Please choose an image file.", "⚠️"); e.target.value = ""; return; }

    // preview turant file se dikhao (compression ka wait nahi)
    const myToken = ++uploadToken;
    revokePreviewUrl();
    try { previewObjectUrl = URL.createObjectURL(file); setImagePreview(previewObjectUrl); } catch (err) {}

    const reader = new FileReader();
    reader.onload = () => {
      if (myToken !== uploadToken) return; // user ne beech me hata diya
      const img = new Image();
      img.onload = () => {
        if (myToken !== uploadToken) return;
        try {
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;
          let width = img.width;
          let height = img.height;
          
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round(height * (MAX_WIDTH / width));
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round(width * (MAX_HEIGHT / height));
              height = MAX_HEIGHT;
            }
          }
          
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx2d = canvas.getContext("2d");
          ctx2d.fillStyle = "#ffffff"; // transparent PNG/WebP JPEG me black na ban jaye
          ctx2d.fillRect(0, 0, width, height);
          ctx2d.drawImage(img, 0, 0, width, height);
          
          // Quality 0.6 = 60% JPEG Quality -> Greatly reduces 10MB images
          selectedProductBase64 = canvas.toDataURL("image/jpeg", 0.6);
        } catch (err) {
          selectedProductBase64 = reader.result;
        }
        if (!uploadThumb || uploadThumb.dataset.broken === "1" || !uploadThumb.getAttribute("src")) setImagePreview(selectedProductBase64);
        showToast("Product image attached! Ready to hunt.", "📸");
        aiSearchInput.focus();
      };
      img.onerror = () => { if (myToken !== uploadToken) return; selectedProductBase64 = reader.result; if (!uploadThumb || uploadThumb.dataset.broken === "1" || !uploadThumb.getAttribute("src")) setImagePreview(selectedProductBase64); };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

// --- Remove Image: 1st tap on thumbnail shows cut (x), 2nd tap removes ---
if (uploadLabel) {
  uploadLabel.addEventListener("click", (e) => {
    if (!uploadLabel.classList.contains("has-image")) return; // no image yet: normal file picker
    e.preventDefault();
    if (uploadLabel.classList.contains("confirm-remove")) {
      clearImagePreview();
      showToast("Image removed.", "ℹ️");
    } else {
      uploadLabel.classList.add("confirm-remove");
      clearTimeout(cutTimer);
      cutTimer = setTimeout(() => uploadLabel.classList.remove("confirm-remove"), 3500);
    }
  });
  document.addEventListener("click", (e) => {
    if (!uploadLabel.contains(e.target)) uploadLabel.classList.remove("confirm-remove");
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

  // Deal Hunter sirf logged-in users ke liye
  if (!currentUser) {
    showToast("Please login with Google first.", "🔒");
    return;
  }

  if (huntInFlight) return;
  if (Date.now() - lastHuntAt < 4000) { showToast("Please wait a few seconds before searching again.", "⏳"); return; }
  huntInFlight = true;
  lastHuntAt = Date.now();
  if (searchCouponBtn) searchCouponBtn.disabled = true;

  haptic();
  openModal("couponResultsModal");

  const loader = document.getElementById("couponLoader");
  const container = document.getElementById("couponCardsList");
  const title = document.getElementById("couponModalTitle");
  const animText = document.getElementById("loadingTextAnim");

  if (loader) loader.hidden = false;
  if (container) container.innerHTML = "";
  if (title) title.textContent = query ? `Coupons for "${query}"` : "Coupons for Uploaded Image";

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
    const idToken = await currentUser.getIdToken();  
    const requestBody = { action: "huntCoupons", query: query, idToken: idToken };

    // photo hamesha bhejo: backend pehle Gemini se product + brand + category pehchanta hai
    if (selectedProductBase64) {
      const imgPart = formatGeminiImagePart(selectedProductBase64);
      if (imgPart) requestBody.image = imgPart.inlineData;
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) throw new Error(`Backend Error: ${response.status}`);

    const data = await response.json();

    if (data.error) {
      console.error("AI Hunter Error:", data.error);
      if (container) {
        const msg = String(data.error.message || "Something went wrong.")
          .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        container.innerHTML = `<div style="text-align:center; padding:20px; color:var(--champagne-bright); background:rgba(205,161,92,0.1); border-radius:12px; font-size:13px;"><p>⚠️ ${msg}</p></div>`;
      }
      return;
    }

    if (!query && data.detectedQuery && title) title.textContent = `Coupons for "${data.detectedQuery}"`;
    renderAICards(data);

    // Free memory
    clearImagePreview();

  } catch (err) {
    console.error("AI Hunter Error:", err);
    if (container) {
      container.innerHTML = `<div style="text-align:center; padding:20px; color:var(--muted);"><p>⚠️ We couldn't fetch offers right now. Please try again in a moment.</p></div>`;
    }
  } finally {
    if (loader) loader.hidden = true;
    clearInterval(loaderInterval);
    huntInFlight = false;
    if (searchCouponBtn) searchCouponBtn.disabled = false;
  }
}

function safeHttpUrl(url) {
  try {
    const u = new URL(url, location.href);
    return (u.protocol === "https:" || u.protocol === "http:") ? u.href : null;
  } catch (e) { return null; }
}

function findStoreByName(name) {
  const n = name.toLowerCase().trim();
  if (!n) return null;
  return stores.find((s) => s.name.toLowerCase() === n) || stores.find((s) => s.name.toLowerCase().includes(n)) || null;
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; }
  } catch (e) {}
  try {
    const ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", "");
    ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch (e) { return false; }
}

// Backend naya "deals" array deta hai; purana text format bhi chalta rahega
function dealsFromResponse(data) {
  if (data && Array.isArray(data.deals) && data.deals.length) return data.deals;
  const text = String((data && data.text) || (typeof data === "string" ? data : "")).replace(/\*/g, "").replace(/`/g, "");
  return text.split("\n").map((l) => l.trim()).filter((l) => l.length > 0).map((line) => {
    const m = line.match(/^([^-:]+)[-:]\s*(\S+)\s+(.+)$/);
    if (!m) return { brand: "Promo Deal", code: "", desc: line };
    const code = m[2].trim();
    return { brand: m[1].trim(), code: code === "NOCODE" ? "" : code, desc: m[3].trim() };
  });
}

function renderAICards(data) {
  const container = document.getElementById("couponCardsList");
  if (!container) return;

  let deals = dealsFromResponse(data);
  // coupon code wale pehle, bina code wale offers sabse neeche
  deals = deals.filter((d) => d.code).concat(deals.filter((d) => !d.code));
  container.replaceChildren();

  if (deals.length === 0) {
    const empty = document.createElement("div");
    empty.style.cssText = "text-align:center; padding:20px; color:var(--muted);";
    empty.textContent = "No live promo codes found right now. Check back soon!";
    container.appendChild(empty);
    return;
  }

  const frag = document.createDocumentFragment();

  const userQuery = (data && data.detectedQuery) || (aiSearchInput ? aiSearchInput.value.trim() : "");

  let noCodeHeaderShown = false;
  deals.forEach((deal) => {
    const brandName = String(deal.brand || "Promo Deal");
    const code = String(deal.code || "").trim();
    const desc = String(deal.desc || "");
    const hasCode = !!code;

    if (!hasCode && !noCodeHeaderShown) {
      noCodeHeaderShown = true;
      const hdr = document.createElement("div");
      hdr.style.cssText = "font-size:12px; font-weight:700; letter-spacing:.04em; color:var(--muted); padding:14px 2px 6px; text-transform:uppercase;";
      hdr.textContent = "Offers that need no code";
      frag.appendChild(hdr);
    }

    const matchedStore = findStoreByName(brandName);

    // Link: backend ka final link (product/category page + Amazon tag / Cuelinks) -> warna brand card ka apna link. Google search kabhi nahi.
    let storeUrl = safeHttpUrl(deal.shopUrl);
    if (!storeUrl && matchedStore && matchedStore.link) storeUrl = safeHttpUrl(matchedStore.link);
    if (!storeUrl) storeUrl = safeHttpUrl(getDeepLink(brandName, userQuery));
    const logoSrc = matchedStore && matchedStore.logo ? matchedStore.logo : null;

    const card = document.createElement("div");
    card.className = "coupon-card-item";

    const logoBox = document.createElement("div");
    logoBox.className = "coupon-logo-box";
    if (logoSrc) {
      const im = document.createElement("img");
      im.alt = brandName; im.loading = "eager"; im.decoding = "async";
      im.addEventListener("load", () => { im.style.display = ""; });
      loadWithRetry(im, logoSrc, () => { im.style.display = "none"; });
      logoBox.appendChild(im);
    } else {
      logoBox.style.cssText = "background:var(--sapphire); color:var(--champagne-bright); font-size:16px; font-weight:800;";
      logoBox.textContent = initials(brandName);
    }

    const info = document.createElement("div");
    info.className = "coupon-card-info";

    const tag = document.createElement("span");
    tag.className = "coupon-brand-tag";
    tag.textContent = brandName;

    const badgeWrap = document.createElement("div");
    const badge = document.createElement("span");
    badge.className = "coupon-code-badge";
    badgeWrap.appendChild(badge);
    if (hasCode) {
      badge.title = "Click to Copy code";
      badge.setAttribute("role", "button");
      badge.tabIndex = 0;
      badge.textContent = code;
    } else {
      badge.textContent = "NO CODE REQUIRED";
      badge.style.cursor = "default";
    }

    const descEl = document.createElement("p");
    descEl.className = "coupon-desc";
    descEl.textContent = desc;

    info.append(tag, badgeWrap, descEl);

    // Sirf bina code wale bank offers par chhota label
    if (!hasCode && deal.type === "bank") {
      const meta = document.createElement("p");
      meta.style.cssText = "margin:2px 0 0; font-size:11px; color:var(--muted);";
      meta.textContent = "🏦 Bank / card offer";
      info.appendChild(meta);
    }

    card.append(logoBox, info);

    if (storeUrl) {
      const link = document.createElement("a");
      link.href = storeUrl;
      link.target = "_blank";
      link.rel = (storeUrl.includes("amazon.in") || storeUrl.includes("amzn.to")) ? "noopener noskim" : "noopener";
      link.className = "coupon-action-btn";
      link.textContent = hasCode ? "Copy & Shop ↗" : "Shop Now ↗";

      if (hasCode) {
        link.addEventListener("click", () => {
          copyText(code).then((ok) => showToast(ok ? `Code ${code} copied! Opening store…` : "Opening store — please copy the code manually.", ok ? "📋" : "⚠️"));
        });
      }
      card.appendChild(link);
    }

    if (hasCode) {
      const doCopy = async () => {
        const ok = await copyText(code);
        haptic();
        if (!ok) { showToast("Couldn't copy — please copy the code manually.", "⚠️"); return; }
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
        showToast("Code copied!", "📋");
      };
      badge.addEventListener("click", doCopy);
      badge.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); doCopy(); } });
    }

    frag.appendChild(card);
  });

  container.appendChild(frag);
}

// ---------- Offscreen animations pause ----------
(function pauseOffscreenAnimations() {
  if (!("IntersectionObserver" in window)) return;
  document.querySelectorAll(".reward-banner-wrap, .deal-wrap").forEach((wrap) => {
    wrap.classList.add("anim-paused");
    new IntersectionObserver((entries) => {
      entries.forEach((en) => wrap.classList.toggle("anim-paused", !en.isIntersecting));
    }, { rootMargin: "100px" }).observe(wrap);
  });
})();

// ---------- Scroll reveal: neeche ke sections screen par aate hi smooth fade-up ----------
(function scrollReveal() {
  if (!("IntersectionObserver" in window)) return;
  const targets = document.querySelectorAll(
    ".directory-section .section-top, #storeGrid, .directory-section .see-all-row, .reward-banner-wrap, .trust-wrap, .site-footer"
  );
  const vh = window.innerHeight || 800;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      // jo screen ke upar nikal chuka ho (reload ke baad mid-page) use bina animation seedha dikhao
      if (en.isIntersecting || en.boundingClientRect.top < 0) {
        en.target.classList.add("in-view");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
  targets.forEach((el) => {
    if (el.getBoundingClientRect().top < vh * 0.92) return; // pehle se dikh raha hai => hide/flash nahi
    el.classList.add("reveal");
    io.observe(el);
  });
})();

// ---------- "See all shopping sites" popup pehle se idle time mein ready (tap par heavy build nahi) ----------
window.addEventListener("load", () => {
  setTimeout(() => runIdle(() => { try { buildAllBrandsList(); } catch (e) {} }), 1800);
}, { once: true });
