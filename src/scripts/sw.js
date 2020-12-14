import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([
    ...assets,
    './',
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css',
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
  ]));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
