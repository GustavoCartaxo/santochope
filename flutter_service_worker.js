'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7f8d86c12e71dd07de1506f58d16e78c",
".git/config": "84e0426a8c6b352cd82f8e5a4e21f0d7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "1a0a15d606fe5109021ae8f37a605cb6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7c013ccb2af825e2742a43f24f48b545",
".git/logs/refs/heads/master": "7c013ccb2af825e2742a43f24f48b545",
".git/logs/refs/remotes/origin/master": "bd3fe77074e84646b101ece2ecc95e05",
".git/objects/04/ce79157df09d46000ae4319e5004788ee6c3ed": "872543b9ae8d719bf4377e746e32080b",
".git/objects/12/e9d4cca962b1ce2293ce2751925b3df33534f5": "96bd82450b7597ab849ab38d00b4c344",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/27/c17d4f067a5ef3ec9078c6d44e30a430b73e53": "aae4c29f8affb565d74397fbe4bacecb",
".git/objects/33/43899188efbe9757bc3901deb70d36b77235bd": "b7dc6fe63a57c16d145d51fef30ad297",
".git/objects/35/5465ec09de4a10fba37d1b0a044a9bd0a09ab2": "1229ce33630fe672ed7510cc76624740",
".git/objects/44/d246ce01e331c3ea295672fb0a02fe83977cd1": "26469276f83867f1ffb3956320bcd823",
".git/objects/47/41c722d855c5792908eaa1e84cb5a023ccb8cb": "8536b04deed714113ef59f4e0b63e647",
".git/objects/4b/84b05dd57f11032a22943a56545f3d43d7985d": "6579d7b9362d643a1512c504ed5c24db",
".git/objects/51/ae08afea9abc69a7b60a3d08fa003d3e076fa5": "d55bb6b348e218d1dee03b6ba094d17d",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/53/8b9790ee9396fd0542db1b4bbaa33353a89355": "18f976cb65a42defb7fa58036a6ab3c0",
".git/objects/58/26c82fd7e755eb174cca2872f950e6b552cd19": "d39fbf5234b5e322b78adb6e7c29e494",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/61/148f8c343d06d0eacb1357b971f82553d20bec": "6f9fb4af3c8ac7d0f8b6bd11798ea3ee",
".git/objects/6e/5d97e870519f955ba43142112accd0b70b75d3": "5f4ef8e42f89ef9c0966d18bed559daa",
".git/objects/6e/ddd7c4df452d59f48947dc7af307ee783a1a8f": "779ea51d9e289ee44a0a04e7af801678",
".git/objects/72/c7579c39d6f4fdd8f3ed30d873fce4756cbcdb": "5b74a384a91517e6f8ba2ee54fae324f",
".git/objects/75/82bc8960de3b60ad8c13437d2f07b384adf376": "d03f8f7b9af692f4ddb3b80ac948397c",
".git/objects/79/0f99feb7b487f8f40d2b3c3f8d464d7f02b9ec": "dfaa948a6e6995d3a634bfd4d5084000",
".git/objects/7b/6a42e104ece4e24f2465841f857864d17fc44d": "87649fea61769935e2324f6fd723e570",
".git/objects/7f/c6eba75a4805ab526d94bcd3ba71915a599577": "6da0c2a14c8d858422c7312f6057ef88",
".git/objects/83/8553d68b925919dfea796172a5223560351fc2": "08bfab41afd591848c77d5f68ad5cefd",
".git/objects/86/40f675f569ab45179f84880c6c94166c6c7741": "7ee6418d33f4578b5804091d5526c210",
".git/objects/86/4c750cf0d1f0018fd63a773b2c6fb2e561a75a": "990278291c2f998bccddab320dc7b6c9",
".git/objects/8b/ec59792ccf7c34db62bbb509a258bd6434206e": "2e343315554ab4d58d7f273cbda21615",
".git/objects/93/5de3d079fc2fcf2a882e4679353700bbc00ca8": "e95d67454270f1a8c955d0ccd38c8cbe",
".git/objects/9b/d5cacf1194eb1a99aa4ed0f0a6ab95fd9b03e5": "cf002a0c9ff6b12b658dcf9cd7b2dc0c",
".git/objects/9c/353a5ee18c92099c4a23561b4b4b1f2098b819": "ac36d273099cf08d71d5e4d4bbaf4772",
".git/objects/9c/7d386a7883acd7d4e50d103e46fcacb9b08f81": "e04e5f43b0bafa6ff1b4137a043433a5",
".git/objects/9e/f83c3f335b50cc5e5e84b4baf3cae9b7124b98": "9264e7d80b3af0f476e184ebce5a2ed6",
".git/objects/9f/1d7bb59c0cc78fb8c391c97e22c7dd61eb6c4f": "fd6431c228b1c7b4c3b6732cdf87ffbb",
".git/objects/a7/4a4c4b6e697f34c5d8335e9cc3e2458bb9a9b3": "5f036e1e30e166cd65c9530ca32fc5a2",
".git/objects/a8/1e82ed2a492758711b3a7f56f3fc8e996fe260": "5c863c300178d16adc39fc0c0102d36a",
".git/objects/ac/ad3ac221ab6808dfac2256c52c21e4298e4338": "17683c67d61d5361571cfed7cfc5d111",
".git/objects/af/e557c903cc38b3feb287fe66909427aa6e2dc0": "1d23d02d7573b9b4a9866fe105b44c5d",
".git/objects/b1/6d05c39e5219a05ac9a77f9678edb1214ef65b": "437f76d718677c39c51d2c49161dfa7b",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/bb/e4009b918e665891b1b3830e720681770d2248": "05063ef8fbb465b22397de391fdf6b35",
".git/objects/bd/6283d6495551e21fcc049a3acc8efc38e4aa9f": "05a2a023f43229f6d1789ab3046e7271",
".git/objects/c3/3498d730d790e77d3419249303960eceabb04b": "f06baa57b39f02f79bd9b05d0c5ea1ad",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/d0d5bf56dcbbf121551dd3a592265db42e18b5": "b8cb6ee761414ba583398497d2b6b01e",
".git/objects/cc/9b797ad69c6737d47ed737d398ad2ab8f26571": "7d72de6fd914665d851f77a71c8df2e0",
".git/objects/d0/c39fd0b0ea73c71388417d0fa9e430247686b8": "692babe44d579266faac8a4f13290c6f",
".git/objects/d2/3b323815d3a753a6c7f9d7ac4efc0dcfe2c777": "e89b197a27578c4ad916c7c52d90a752",
".git/objects/d7/5f89b45045a86ebff926767e5ece0b55409c3e": "f9351fb81b9a39bc19e4696e7e40326e",
".git/objects/d7/7bf08c2d590846b9766dfbba4dd59fea4bc794": "f73530167b730fea981a5485d6d85de7",
".git/objects/d8/d1afb69da57474d3d2935fd3220b5386b97408": "0fceb6f7171b97109910c95121c63b88",
".git/objects/dd/4f97748b0210918f1c38f23e31dbcf7201bc02": "6d3269a1129dd358afd0f2e148b10afc",
".git/objects/e5/81c9adc2652530c39b93178afb47c473708f7a": "2ec9a2b566c860571b8845ada4e88cb4",
".git/objects/ea/d827a03c720c172d459b966f0473cc3d5e527e": "3abd1bf9d84e56895f4969cbd4801b8f",
".git/objects/ec/4d71fc0b552526bd7e8048f204b33ec2110ba3": "15a0b6b41c2f76e3eba6ea5f2a8a16c4",
".git/objects/ee/c0269d8535291b6daceab4a7d1c366cea4f0d3": "a0f7fe4870688df1522dd72bcfba4e1e",
".git/objects/f2/b905c232a00bba35c6b74665d1b64d8d8352fd": "d3d15c248ab3e3a0954bda6c07fd5a0e",
".git/objects/f4/093399c0eb9c703e6749b614ecf7e1ec8286a7": "a0ef9cc52e84b6c70dcab675c83805db",
".git/objects/f9/afc9ec61ad8c2c58e24a2f12de212ece3966ae": "e1f18b0a707aeca8623e72dc8550a0fa",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/fe/ac304c1a8239eb266b846f00be204e8c2f8b54": "67eef8eda1d473b8e530a1bcbe4679f9",
".git/refs/heads/master": "fb8b3f94fb17efec7c918c9477185efd",
".git/refs/remotes/origin/master": "fb8b3f94fb17efec7c918c9477185efd",
"assets/AssetManifest.json": "9d42ad7213431cc8f94ad41a879be0be",
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
"assets/assets/logolowres.png": "7c34ab830ef365a062057b42afb194ce",
"assets/assets/maquinadelouco.png": "858c596ef27cc470867a669ae2e3493b",
"assets/assets/minus.png": "ce984e5d5a15cc8a25f8e0b86b9f1366",
"assets/assets/packheineken.png": "6d1b2b00070eff0dfe845b462e35b6cd",
"assets/assets/pensandomelhor.png": "3bd235afa22720794974ec0561c2da3c",
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
"main.dart.js": "a2b8b37c13ca3a8132cf0a9dee9517b4",
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
