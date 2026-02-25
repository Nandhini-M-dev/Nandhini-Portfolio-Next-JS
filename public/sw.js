/* ============================================
   Service Worker — Next.js Portfolio
   Network-first for navigation, cache assets
   ============================================ */

var CACHE_NAME = 'nandhini-portfolio-v5';
var ASSETS = [
  '/',
  '/og-image.png'
];

// Install — pre-cache core assets
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; })
            .map(function (k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

// Fetch — network-first for navigation, stale-while-revalidate for assets
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || e.request.url.startsWith('chrome-extension')) return;

  // Network-first for navigation (HTML pages)
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then(function (res) {
        var clone = res.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put(e.request, clone); });
        return res;
      }).catch(function () {
        return caches.match(e.request).then(function (r) { return r || caches.match('/'); });
      })
    );
    return;
  }

  // Stale-while-revalidate for assets
  e.respondWith(
    caches.match(e.request).then(function (cached) {
      var fetchPromise = fetch(e.request).then(function (res) {
        if (res && res.status === 200) {
          var clone = res.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(e.request, clone); });
        }
        return res;
      }).catch(function () { return cached; });

      return cached || fetchPromise;
    })
  );
});
