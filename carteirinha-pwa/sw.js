const CACHE_NAME = 'carteirinha-oficial-v1';
const ASSETS = [
  './',
  './index.html',
  './carteirinha-digital.css',
  './manifest.json',
  './image/bg.png',
  './image/logo-prefeitura.png',
  './image/icon-menu.png',
  './image/logo-eu.png',
  './image/icon-camera.png',
  './image/foto.jpg',
  './image/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});