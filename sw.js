const CACHE_NAME = 'mesas-jl-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
  // Note: external CDNs (xlsx) are not cached here due to CORS;
  // the app will still work online and the planner state is stored locally.
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k === CACHE_NAME) ? null : caches.delete(k))))
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(resp => {
        // Optionally cache same-origin GET responses
        try {
          const url = new URL(request.url);
          if (url.origin === location.origin) {
            const respClone = resp.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, respClone));
          }
        } catch (e) {}
        return resp;
      }).catch(() => caches.match('./index.html'));
    })
  );
});