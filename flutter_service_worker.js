'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dd1da6289677805494a02ef28c50f749",
"assets/assets/apasotera.jpg": "b780b6e88485dae77f49d7bef6c4a791",
"assets/assets/apasotera.jpg.png": "34b500f9d7cbf35354c014c59755c8bd",
"assets/assets/aurata.png": "a170c34ea5893a60098e844043c8bae0",
"assets/assets/beerbottle.wav": "e249dcc9de20977b4e65b78b6be17d43",
"assets/assets/carnavalia.png": "886cf9f02d7e9e58a7bc578a1ef3d279",
"assets/assets/devassalata.png": "5681ab3c469fc5651fffaa589daf816a",
"assets/assets/devassapack.png": "879b696ae80e80732802c870c8dfc40d",
"assets/assets/geladeira.png": "6297ca756af9f39332de435ee0da3865",
"assets/assets/heineken.png": "4db51bc88cc794c5fc78f52b96e769f1",
"assets/assets/heinekenpack.png": "b57a9db8df44c4573b01ff311cc278c9",
"assets/assets/heinekenzero.png": "dd2ca1f2c61df418bb7e38ef91c7af9a",
"assets/assets/logolowres.png": "7c34ab830ef365a062057b42afb194ce",
"assets/assets/maquinadelouco.png": "858c596ef27cc470867a669ae2e3493b",
"assets/assets/minus.png": "ce984e5d5a15cc8a25f8e0b86b9f1366",
"assets/assets/packheineken.png": "6d1b2b00070eff0dfe845b462e35b6cd",
"assets/assets/pensandomelhor.png": "3bd235afa22720794974ec0561c2da3c",
"assets/assets/pilsenartesanal.png": "fb1f41fd1397601e9db603771a782c21",
"assets/assets/plus.png": "b977a087929a023f17093e579ee6de80",
"assets/assets/scooter.png": "34c009f20bdd52f4b8d91d38c881fe14",
"assets/FontManifest.json": "48bbd66ada0889a2c07d114e5eecbc14",
"assets/fonts/CoinyCyrillic.ttf": "e41a1e424c0b3088b2ace1ab641bef2f",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "5a3136582fb2d8657f08cc2904ee1625",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"icons/android-icon-144x144.png": "929337b34a50f1b2c071ca2bfa10d28b",
"icons/android-icon-192x192.png": "8a3aff0c4e80d2b46b2d11162097cd10",
"icons/android-icon-36x36.png": "14928f48b80eb9344c4a4c212c28e98d",
"icons/android-icon-48x48.png": "6b04c1c2387ae671aa540271e30fd13a",
"icons/android-icon-72x72.png": "a3ffa8e140f2bba9f872587071009091",
"icons/android-icon-96x96.png": "5340079cff530c9c21498c39b8731312",
"icons/apple-icon-114x114.png": "79a32ec997c2a509ac0054945ad0ab9a",
"icons/apple-icon-120x120.png": "71160af80311bcec2daa0d7fc0c10554",
"icons/apple-icon-144x144.png": "929337b34a50f1b2c071ca2bfa10d28b",
"icons/apple-icon-152x152.png": "4aea6782800327d7c29c570a546e446d",
"icons/apple-icon-180x180.png": "6520c693c999a643221d01bcee3f1abc",
"icons/apple-icon-57x57.png": "dcbab18f12011c8bb017a1973d89a4c6",
"icons/apple-icon-60x60.png": "90c0c27650aaf69d3122936d804c1794",
"icons/apple-icon-72x72.png": "a3ffa8e140f2bba9f872587071009091",
"icons/apple-icon-76x76.png": "b73ff8f6e71971206bce87905624cff0",
"icons/apple-icon-precomposed.png": "2b28d607e2099553b02f411618db64d7",
"icons/apple-icon.png": "2b28d607e2099553b02f411618db64d7",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "6c3097aca23488bf25cf294c63ea5502",
"icons/favicon-32x32.png": "46a4cf6f282ca9c7ab244a35f81c1109",
"icons/favicon-96x96.png": "5340079cff530c9c21498c39b8731312",
"icons/favicon.ico": "0aec5c643a9014d8c701ac24ffac1c34",
"icons/ms-icon-144x144.png": "929337b34a50f1b2c071ca2bfa10d28b",
"icons/ms-icon-150x150.png": "5eac7f75171406253fdb18995861a55c",
"icons/ms-icon-310x310.png": "3bffb7894385cc2ace9dabc7ff69b34c",
"icons/ms-icon-70x70.png": "cb75f4264a89e28abd6b0a34a487303f",
"index.html": "10ff9bb603544a39a885f8f6e4d2cc93",
"/": "10ff9bb603544a39a885f8f6e4d2cc93",
"main.dart.js": "4d057169da0021e13f04f9985a8c6ce5",
"manifest.json": "a3f2745ce8560db079a7eb7b43f9cdb6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
