'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2a57113665dba0a820a27a2b8f2bea8a",
"version.json": "009c9e65172e010890f7f65fde438006",
"splash/img/light-2x.png": "49035f06aeab94c2b8fbbd35ad83b12b",
"splash/img/dark-1x.gif": "804bdbfbcf9bdb66a5ed6c71d93fddf1",
"splash/img/dark-4x.png": "c9b9129fd5caaa2e7fd730489efef469",
"splash/img/light-3x.png": "6af5eaae48c7e6cacd1414a43c5f3f7e",
"splash/img/dark-3x.png": "6af5eaae48c7e6cacd1414a43c5f3f7e",
"splash/img/light-4x.png": "c9b9129fd5caaa2e7fd730489efef469",
"splash/img/light-1x.gif": "804bdbfbcf9bdb66a5ed6c71d93fddf1",
"splash/img/dark-2x.png": "49035f06aeab94c2b8fbbd35ad83b12b",
"splash/img/light-2x.gif": "db34e11626db6a12a5f4380a842f48bb",
"splash/img/dark-1x.png": "ebd11a37d29e04b1ac0fb0646f11ae18",
"splash/img/dark-4x.gif": "aa8a8cc6a59ee490b9d0379bcfb0a0ba",
"splash/img/light-3x.gif": "e8185aa87d64239c74ebe03f6a8d38f9",
"splash/img/dark-3x.gif": "e8185aa87d64239c74ebe03f6a8d38f9",
"splash/img/light-4x.gif": "aa8a8cc6a59ee490b9d0379bcfb0a0ba",
"splash/img/light-1x.png": "ebd11a37d29e04b1ac0fb0646f11ae18",
"splash/img/dark-2x.gif": "db34e11626db6a12a5f4380a842f48bb",
"index.html": "aa3942d7af5b42d220ae72f7922ed3af",
"/": "aa3942d7af5b42d220ae72f7922ed3af",
"main.dart.js": "99ace67422f7dd914b239b9b73ed73e1",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/logo.png": "fa66f803e9d35196e57151a16fb1b7cb",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "78cc887797740e81cb502c54d9470bd1",
"assets/NOTICES": "7a8fc25b7b32f0d509cbef86560d6e4f",
"assets/FontManifest.json": "12268019b7cf516f188d324b0e3ff159",
"assets/AssetManifest.bin.json": "11521499084d3a3864a03873721b5ee0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ba7d79175c32f434e6a061824f20fbc2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "63be71b3ac04c9f39367ec1f4b53965a",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1767edee11155aac8376acebba8c85d3",
"assets/fonts/MaterialIcons-Regular.otf": "6b2ff6fdc0e265c5c5bf1f613b81e251",
"assets/assets/images/appstore.svg": "e76408dffea03f0c58f41c767f0772f5",
"assets/assets/images/splash.gif": "b07e9d900e7b1d41e938fa92dc8a54d8",
"assets/assets/images/khutbah-translation.png": "8a5a2f42f311ffcde0f169bb73e8a55f",
"assets/assets/images/arabyati.png": "0684a13f125c53ac61ba9aa2e91cf3a3",
"assets/assets/images/gaming.svg": "ec556507c35be2f02ace756e31c15b5b",
"assets/assets/images/model.png": "b09a34f79774ecee5a429984a896ade7",
"assets/assets/images/delivoc.png": "597d355f7bea810218818b25ad1dbbdd",
"assets/assets/images/balagh.png": "479bdf25ed0d5b11f5e4cdff52059965",
"assets/assets/images/logo.png": "fa66f803e9d35196e57151a16fb1b7cb",
"assets/assets/images/couzinty.png": "03ea00c587c311946cc9f2571d63c67f",
"assets/assets/images/playstore.svg": "d898994d7d495984168827eeb0e5595b",
"assets/assets/images/Souma.png": "94ee6c81fe2f7dddb903d228a4627e5b",
"assets/assets/images/Euroluxe.png": "61db61540205430934ba37105cc618bd",
"assets/assets/images/idea.svg": "e9d805e89e58bf7ff5c89f0d78eed712",
"assets/assets/images/mobile.svg": "5407d5b74df455db14ed998079a6b429",
"assets/assets/images/web.svg": "393582716af96f76dd9d960b6be612ee",
"assets/assets/images/Safir.png": "50b1c6081c9ce697e0d8a2d82b0281ff",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
