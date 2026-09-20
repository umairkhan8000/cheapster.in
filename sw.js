const CACHE_NAME = 'cheapster-cache-v10';

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
  // Third-party requests are intentionally left untouched.
  // This includes merchant websites, Cuelinks, Google,
  // Firebase, Analytics, logos, etc.
  if (
    new URL(e.request.url).origin !==
    self.location.origin
  ) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {

      const fetchPromise =
        fetch(e.request)
          .then((networkResponse) => {

            if (
              networkResponse &&
              networkResponse.status === 200 &&
              (
                networkResponse.type === 'basic' ||
                networkResponse.type === 'cors'
              )
            ) {

              const responseToCache =
                networkResponse.clone();

              caches
                .open(CACHE_NAME)
                .then((cache) => {
                  cache.put(
                    e.request,
                    responseToCache
                  );
                });
            }

            return networkResponse;
          })
          .catch(() => {
            return cachedResponse;
          });

      return cachedResponse || fetchPromise;
    })
  );
});
