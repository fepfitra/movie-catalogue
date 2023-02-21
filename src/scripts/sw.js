// import 'regenerator-runtime';
// import CacheHelper from "./utils/cache-helper";

// self.addEventListener('install', (event) => {
//   event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
// });

// self.addEventListener('activate', (event) => {
//   event.waitUntil(CacheHelper.deleteOldCache());
// });


// self.addEventListener('fetch', (event) => {
//   event.respondWith(fetch((event.request)));
// });

// const assetsToCache = [
//   './',
//   './icons/maskable_icon.png',
//   './icons/maskable_icon_x48.png',
//   './icons/maskable_icon_x72.png',
//   './icons/maskable_icon_x96.png',
//   './icons/maskable_icon_x128.png',
//   './icons/maskable_icon_x192.png',
//   './icons/maskable_icon_x384.png',
//   './icons/maskable_icon_x512.png',
//   './index.html',
//   './favicon.png',
//   './app.bundle.js',
//   './app.webmanifest',
//   './sw.bundle.js',
// ];

import { precacheAndRoute } from "workbox-precaching";

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Service Worker: Pushed');
});
