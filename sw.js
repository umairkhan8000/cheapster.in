const CACHE_NAME = 'cheapster-cache-v5';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/firebase-config.js',
  '/manifest.json',
  '/logo_192x192.png',
  '/logo_512x512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // NOTE: this used to check e.request.url.includes('firebase'), which
  // also matched our OWN local firebase-config.js file (its URL contains
  // that substring too) and silently excluded it from being cached —
  // meaning Google Login would fail to load at all when offline. Scoped
  // to the actual third-party hosts below so our own file gets cached
  // normally while live Firebase/Cuelinks/Analytics API calls still pass
  // straight through (we never want to cache those).
  const url = e.request.url;
  const isThirdPartyLiveService =
    url.includes('gstatic.com/firebasejs') ||
    url.includes('firebaseapp.com') ||
    url.includes('googleapis.com') ||
    url.includes('cuelinks.com') ||
    url.includes('google-analytics.com') ||
    url.includes('googletagmanager.com');
  if (isThirdPartyLiveService) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      const fetchPromise = fetch(e.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        return cachedResponse;
      });

      return cachedResponse || fetchPromise;
    })
  );
});
