// Har deploy par sirf ye version number badhao (v61 -> v62 ...). Baaki sab apne aap sambhal jaata hai.
const CACHE_NAME = 'cheapster-cache-v61';
// Images ka alag cache: code version badalne par logos dobara download nahi hote.
// Logos/banners ki files badal kar same naam se upload karo to ye number badha do.
const IMG_CACHE = 'cheapster-img-v1';

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/privacy.html',
  '/style.css',
  '/script.js',
  '/firebase-config.js',
  '/manifest.json',
  '/logo_192x192.png',
  '/logo_512x512.png'
];

// Slow network par itne ms se zyada intezaar nahi: cache wali copy turant dikha do
const NETWORK_TIMEOUT_MS = 3500;

self.addEventListener('install', (event) => {
  // cache:'reload' => browser ke HTTP cache se purani file nahi, hamesha server se taza file
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(ASSETS_TO_CACHE.map((u) => new Request(u, { cache: 'reload' })))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keep = [CACHE_NAME, IMG_CACHE];
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => !keep.includes(k)).map((k) => caches.delete(k)));
      // Navigation preload: SW boot hone ke saath hi page ki request network par chali jaati hai (page jaldi aata hai)
      if (self.registration.navigationPreload) {
        try { await self.registration.navigationPreload.enable(); } catch (e) {}
      }
      await self.clients.claim();
    })()
  );
});

// HTML / JS / CSS: pehle network (hamesha taza, purane+naye ka mismatch nahi).
// Network 3.5s se zyada le ya fail ho to cache wali copy.
function networkFirst(event, key, netPromise) {
  const net = netPromise.then((res) => {
    if (res && res.ok) {
      const copy = res.clone();
      event.waitUntil(caches.open(CACHE_NAME).then((c) => c.put(key, copy)).catch(() => {}));
    }
    return res;
  });
  event.waitUntil(net.catch(() => {})); // timeout ke baad bhi cache background mein update hota rahe

  return caches.match(key).then((cached) => {
    if (!cached) return net; // pehli baar / cache khali: network hi ek raasta
    const timeout = new Promise((resolve) => setTimeout(() => resolve(null), NETWORK_TIMEOUT_MS));
    return Promise.race([net.catch(() => null), timeout]).then((res) => (res && res.ok ? res : cached));
  });
}

// Images: cache mein ho to turant; nahi to network se laakar cache mein rakh lo
function cacheFirstImage(event, key) {
  return caches.open(IMG_CACHE).then(async (cache) => {
    const cached = await cache.match(key);
    if (cached) return cached;
    const res = await fetch(event.request);
    if (res && res.ok) {
      const copy = res.clone();
      event.waitUntil(cache.put(key, copy).catch(() => {}));
    }
    return res;
  });
}

// Banners: offers badalte rehte hain => cache se turant dikhao, peeche se taza version la kar update karo
function staleWhileRevalidateImage(event, key) {
  return caches.open(IMG_CACHE).then(async (cache) => {
    const cached = await cache.match(key);
    const update = fetch(event.request)
      .then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          event.waitUntil(cache.put(key, copy).catch(() => {}));
        }
        return res;
      })
      .catch(() => cached || Response.error());
    if (cached) { event.waitUntil(update); return cached; }
    return update;
  });
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;

  // Logos + banners (hd-logos folder)
  if (url.pathname.startsWith('/hd-logos/')) {
    const isBanner = /\/banner[^/]*\.webp$/i.test(url.pathname);
    event.respondWith(
      isBanner ? staleWhileRevalidateImage(event, url.pathname) : cacheFirstImage(event, url.pathname)
    );
    return;
  }

  if (!ASSETS_TO_CACHE.includes(url.pathname)) return;

  // Page navigation: preload wali request use karo (alag se dobara fetch nahi)
  if (event.request.mode === 'navigate') {
    const net = event.preloadResponse
      ? event.preloadResponse.then((r) => r || fetch(event.request))
      : fetch(event.request);
    event.respondWith(networkFirst(event, url.pathname, net));
    return;
  }

  event.respondWith(networkFirst(event, url.pathname, fetch(event.request)));
});
