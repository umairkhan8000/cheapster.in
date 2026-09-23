const fs = require('fs');
const https = require('https');

// Local inventory folder setup
const dir = './logos';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

// Complete Inventory Database (All Cheapster Brands)
const brands = [
  { file: "amazon.png", domain: "amazon.in" },
  { file: "flipkart.png", domain: "flipkart.com" },
  { file: "myntra.png", domain: "myntra.com" },
  { file: "nykaa.png", domain: "nykaa.com" },
  { file: "ajio.png", domain: "ajio.com" },
  { file: "tatacliq.png", domain: "tatacliq.com" },
  { file: "croma.png", domain: "croma.com" },
  { file: "tira.png", domain: "tirabeauty.com" },
  { file: "shopsy.png", domain: "shopsy.in" },
  { file: "jiomart.png", domain: "jiomart.com" },
  { file: "snitch.png", domain: "snitch.co.in" },
  { file: "urbanic.png", domain: "urbanic.com" },
  { file: "beyoung.png", domain: "beyoung.in" },
  { file: "savana.png", domain: "savana.com" },
  { file: "bewakoof.png", domain: "bewakoof.com" },
  { file: "thesouledstore.png", domain: "thesouledstore.com" },
  { file: "xyxx.png", domain: "xyxxcrew.com" },
  { file: "cahoot.png", domain: "cahoot.in" },
  { file: "bonkerscorner.png", domain: "bonkerscorner.com" },
  { file: "levis.png", domain: "levi.in" },
  { file: "shoppersstop.png", domain: "shoppersstop.com" },
  { file: "crocs.png", domain: "crocs.in" },
  { file: "minimalist.png", domain: "beminimalist.co" },
  { file: "plum.png", domain: "plumgoodness.com" },
  { file: "dotkey.png", domain: "dotandkey.com" },
  { file: "mamaearth.png", domain: "mamaearth.in" },
  { file: "mcaffeine.png", domain: "mcaffeine.com" },
  { file: "foxtale.png", domain: "foxtale.in" },
  { file: "pilgrim.png", domain: "discoverpilgrim.com" },
  { file: "wowskinscience.png", domain: "buywow.in" },
  { file: "purplle.png", domain: "purplle.com" },
  { file: "sugarcosmetics.png", domain: "sugarcosmetics.com" },
  { file: "myglamm.png", domain: "myglamm.com" },
  { file: "bellavita.png", domain: "bellavitaluxury.co.in" },
  { file: "skinnbytitan.png", domain: "skinn.in" },
  { file: "swissbeauty.png", domain: "swissbeauty.in" },
  { file: "maccosmetics.png", domain: "maccosmetics.in" },
  { file: "bareanatomy.png", domain: "innovist.com" },
  { file: "bblunt.png", domain: "bblunt.com" },
  { file: "beardo.png", domain: "beardo.in" },
  { file: "bombayshavingco.png", domain: "bombayshavingcompany.com" },
  { file: "themancompany.png", domain: "themancompany.com" },
  { file: "gharsoaps.png", domain: "gharsoaps.in" },
  { file: "lakme.png", domain: "lakmeindia.com" },
  { file: "maybelline.png", domain: "maybelline.co.in" },
  { file: "loral.png", domain: "lorealparis.co.in" },
  { file: "dell.png", domain: "dell.com" },
  { file: "lenovo.png", domain: "lenovo.com" },
  { file: "realme.png", domain: "realme.com" },
  { file: "boat.png", domain: "boat-lifestyle.com" },
  { file: "noise.png", domain: "gonoise.com" },
  { file: "jbl.png", domain: "jbl.com" },
  { file: "reliancedigital.png", domain: "reliancedigital.in" },
  { file: "hp.png", domain: "hp.com" },
  { file: "vijaysales.png", domain: "vijaysales.com" },
  { file: "cashify.png", domain: "cashify.in" },
  { file: "spinny.png", domain: "spinny.com" },
  { file: "tata1mg.png", domain: "1mg.com" },
  { file: "apollo247.png", domain: "apollo247.com" },
  { file: "netmeds.png", domain: "netmeds.com" },
  { file: "muscleblaze.png", domain: "muscleblaze.com" },
  { file: "myprotein.png", domain: "myprotein.co.in" },
  { file: "plix.png", domain: "plixlife.com" },
  { file: "kapiva.png", domain: "kapiva.in" },
  { file: "healthkart.png", domain: "healthkart.com" },
  { file: "traya.png", domain: "traya.health" },
  { file: "manmatters.png", domain: "manmatters.com" },
  { file: "perfora.png", domain: "perforacare.com" },
  { file: "optimumnutrition.png", domain: "optimumnutrition.com" },
  { file: "lenskart.png", domain: "lenskart.com" },
  { file: "titan.png", domain: "titan.co.in" },
  { file: "tanishq.png", domain: "tanishq.co.in" },
  { file: "giva.png", domain: "giva.co" },
  { file: "palmonas.png", domain: "palmonas.com" },
  { file: "melorra.png", domain: "melorra.com" },
  { file: "bluestone.png", domain: "bluestone.com" },
  { file: "fnp.png", domain: "fnp.com" },
  { file: "makemytrip.png", domain: "makemytrip.com" },
  { file: "agoda.png", domain: "agoda.com" },
  { file: "bookingcom.png", domain: "booking.com" },
  { file: "goibibo.png", domain: "goibibo.com" },
  { file: "ixigo.png", domain: "ixigo.com" },
  { file: "oyorooms.png", domain: "oyorooms.com" },
  { file: "pepperfry.png", domain: "pepperfry.com" },
  { file: "woodenstreet.png", domain: "woodenstreet.com" },
  { file: "urbanladder.png", domain: "urbanladder.com" },
  { file: "wakefit.png", domain: "wakefit.co" },
  { file: "sleepycat.png", domain: "sleepycat.in" },
  { file: "rentomojo.png", domain: "rentomojo.com" },
  { file: "moglix.png", domain: "moglix.com" },
  { file: "boschtools.png", domain: "bosch-pt.co.in" },
  { file: "supertails.png", domain: "supertails.com" },
  { file: "headsupfortails.png", domain: "headsupfortails.com" },
  { file: "drools.png", domain: "drools.com" },
  { file: "pedigree.png", domain: "pedigree.in" },
  { file: "royalcanin.png", domain: "royalcanin.com" },
  { file: "hostinger.png", domain: "hostinger.in" },
  { file: "godaddy.png", domain: "godaddy.com" },
  { file: "microsoft.png", domain: "microsoft.com" },
  { file: "norton.png", domain: "norton.com" },
  { file: "upgrad.png", domain: "upgrad.com" },
  { file: "physicswallah.png", domain: "pw.live" },
  { file: "firstcry.png", domain: "firstcry.com" },
  { file: "hopscotch.png", domain: "hopscotch.in" },
  { file: "hamleys.png", domain: "hamleys.in" },
  { file: "smartivity.png", domain: "smartivity.in" },
  { file: "lego.png", domain: "lego.com" }
];

console.log("Inventory check start ho raha hai...");

brands.forEach(brand => {
    const filePath = `${dir}/${brand.file}`;

    // 1. One-time Save Logic (Check if logo already exists in inventory)
    if (fs.existsSync(filePath)) {
        console.log(`⏩ Skipped: ${brand.file} (Pehle se inventory mai save hai)`);
        return; // Exits the loop for this brand, preventing re-download
    }

    // 2. High-Res Fetch Logic (size=512 for absolutely crisp logos)
    const url = `https://logo.clearbit.com/${brand.domain}?size=512`;

    https.get(url, (res) => {
        if (res.statusCode === 200) {
            const file = fs.createWriteStream(filePath);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`✅ Saved HD Logo: ${brand.file}`);
            });
        } else {
            console.log(`❌ Missing: ${brand.file} (Brand ne official HD logo API par nahi dala, isay Google Images se manually download karna padega)`);
        }
    }).on('error', (err) => {
        console.error(`Error downloading ${brand.file}:`, err.message);
    });
});
