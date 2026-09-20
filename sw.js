const CACHE_NAME = 'cheapster-cache-v11';

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

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }

          return undefined;
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (event) => {

  /*
   * Only handle requests belonging to Cheapster itself.
   *
   * Cuelinks, merchant websites, Google, Firebase,
   * Analytics, external logos and all other third-party
   * resources pass through normally.
   */
  if (
    new URL(event.request.url).origin !==
    self.location.origin
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {

      const networkPromise =
        fetch(event.request)
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

              caches.open(CACHE_NAME).then((cache) => {
                cache.put(
                  event.request,
                  responseToCache
                );
              });
            }

            return networkResponse;
          })
          .catch(() => {
            return cachedResponse;
          });

      return cachedResponse || networkPromise;
    })
  );
});
