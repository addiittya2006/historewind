// serviceWorker install event

var cacheName = "histoCache";
var fileToCache = [
  "./index.html",
  "./src/styles/common.css",
  "./src/styles/gallery.css",
  "./src/styles/toolbar.css"
];

self.addEventListener("install",  function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(fileToCache);
    })
  )
});

// serviceWorker fetch event

self.addEventListener("fetch", function(event) {
  console.log('fetch event for', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          console.log('found', event.request.url, 'in cache');
          return response;
        }
        console.log('network request for', event.request.url);
        return fetch(event.request);
      }).catch(function(err) {
        console.log('error :', err);
      })
  );
});
