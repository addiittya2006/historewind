var cacheName = "histoCache";
var fileToCache = [
	"./index.html",
	"./src/styles/common.css",
	"./src/styles/gallery.css",
	"./src/styles/toolbar.css"
];

// serviceWorker install event
self.addEventListener("install",  function(event) {
	event.waitUntil(
		caches.open(cacheName).then(function(cache) {
			return cache.addAll(fileToCache);
		})
	)
});

// serviceWorker fetch event
self.addEventListener("fetch", function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			if (response) {
				return response;
			}
			return fetch(event.request);
		}).catch(function(err) {
		})
	);
});
