const CACHE_NAME = 'cheapster-cache-v23';

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

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (event.request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  if (!ASSETS_TO_CACHE.includes(url.pathname)) {
    return;
  }

  if (event.request.mode === 'navigate') {
    const responsePromise = fetch(event.request);
    event.waitUntil(
      responsePromise.then((response) => {
        if (response.ok) {
          return caches.open(CACHE_NAME).then((cache) => cache.put(url.pathname, response.clone()));
        }
      }).catch(() => {})
    );
    event.respondWith(
      responsePromise.catch(async () => {
        const cached = await caches.match(url.pathname);
        if (cached) return cached;
        throw new Error('Offline page unavailable');
      })
    );
    return;
  }

  event.respondWith(
    caches.match(url.pathname).then((cached) => {
      const update = fetch(event.request).then(async (response) => {
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(url.pathname, response.clone());
        }
        return response;
      }).catch((error) => {
        if (cached) return cached;
        throw error;
      });

      if (cached) {
        event.waitUntil(update);
        return cached;
      }

      return update;
    })
  );
});
