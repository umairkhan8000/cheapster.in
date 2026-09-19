const CACHE_NAME = 'cheapster-cache-v7';
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
  // Only handle requests for our OWN site's files. Third-party requests
  // (Wikipedia logos, Google favicons, Firebase, Cuelinks, Analytics, etc.)
  // pass straight through, untouched by the service worker — exactly like
  // before it existed. Routing cross-origin image requests through the SW's
  // cache/fetch logic was the cause of logos intermittently failing to
  // load: cross-origin responses come back as "opaque" to a service worker,
  // which this cache-and-fallback pattern doesn't handle reliably.
  if (new URL(e.request.url).origin !== self.location.origin) {
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
