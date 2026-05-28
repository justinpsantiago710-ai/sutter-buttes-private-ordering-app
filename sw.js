const CACHE_NAME = "sutter-buttes-prototype-v52";
const ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/backend-config.js",
  "/backend.js",
  "/manifest.webmanifest",
  "/assets/icon.svg",
  "/assets/dog-food.svg",
  "/assets/rosin-syrups.svg",
  "/assets/sutter-hat.svg",
  "/assets/tractor-gas.svg",
  "/assets/zodashi.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
