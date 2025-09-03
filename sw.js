/* Autobahn Solutions PWA Service Worker */
const CACHE_NAME = 'autobahn-cache-v1-20250903';
const OFFLINE_URL = '/offline.html';

// Precache core assets (local only)
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/offline.html',
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  '/assets/icons/favicon-32x32.png',
  '/assets/icons/favicon-16x16.png',
  '/assets/icons/apple-touch-icon.png',
  '/favicon.ico',
  '/site.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const requests = PRECACHE_URLS.map(u => new Request(u, { cache: 'reload' }));
      for (const req of requests) {
        try {
          await cache.add(req);
        } catch (e) {
          // Ignore missing or cross-origin failures during install
          // console.warn('Precache skip:', req.url, e);
        }
      }
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Enable navigation preload if available
      if ('navigationPreload' in self.registration) {
        await self.registration.navigationPreload.enable();
      }
      // Clean old caches
      const keys = await caches.keys();
      await Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : undefined)));
      await self.clients.claim();
    })()
  );
});

// Strategy: Network first for navigations with offline fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const preload = await event.preloadResponse;
          if (preload) return preload;
          const network = await fetch(request);
          return network;
        } catch (err) {
          const cache = await caches.open(CACHE_NAME);
          const cached = await cache.match(OFFLINE_URL);
          return cached || Response.error();
        }
      })()
    );
    return;
  }

  // For same-origin GET requests: try cache first, then network
  if (request.method === 'GET' && new URL(request.url).origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request))
    );
  }
});
