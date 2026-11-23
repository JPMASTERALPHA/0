const CACHE_NAME = 'carteirinha-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/brasao.png',
  './assets/logo-ie.png',
  './assets/foto.jpg',
  './assets/icon-512.png'
];

// Instala e guarda os arquivos no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Responde usando o cache quando estiver offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});