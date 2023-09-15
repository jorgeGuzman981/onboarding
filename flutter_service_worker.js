'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "77847996a2b1d4671fcd3c43e767158e",
"index.html": "c93748d9c409bce433b3a5b79d23a993",
"/": "c93748d9c409bce433b3a5b79d23a993",
"main.dart.js": "a36fd35f1fc0998ced4b2972cf4c6d5f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d94c4844b2824e7a204c30252c773473",
".git/config": "cf7d5aa6d2b1f35e46990835166e9c4c",
".git/objects/61/2be688de537149227ccbbe1f56951563b14d2f": "7002c6f3f00d1d7d51c64e8f47e4f701",
".git/objects/0d/199a751dcf548c3e4b1ba666dad210117173c9": "ea9a545ef1711329922aa606ab5d3f5d",
".git/objects/66/dab0bf0dbfc5520d4531450c9afc10f54e813f": "ddd614e7cd06d135266f5ba420a25484",
".git/objects/57/44d07b268ea07b691e3dfa240c703edb9da6cc": "7af04e9957b39c98afa4aff7211f6e27",
".git/objects/03/54046e2cdbb5b0610c2595225f2aed3994cf70": "51d34cf1c87c2f32b252e0e2b9d8e54f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/609f3a3c3c5e20546158556b19fec960d06305": "4ddbbe4dd7abe1af023044a25447c66c",
".git/objects/51/ff7b1484d8ca431ebf0f13ab6a2ec7f909a56d": "d3d0dcc6c236e66dd33e166bedbd4ee9",
".git/objects/3d/960636856e422855956c7af347a43d019833ed": "e92e5e7610f72a9d058d21cec75627d1",
".git/objects/3d/2a8a39f0b409fe71a24bc6cfcb2177836806b1": "2ac004f6e6a5e4bc24840d21acc4776c",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/5a/7a7c45dd486f13332d29ba768c643a6f3656ff": "70eaf2d70c49f57ae32557fb9947414a",
".git/objects/05/9c9984661e65866773bc2ebffa94943479229f": "3f2158caea1df2ce3e653258f111c286",
".git/objects/bb/1cd4f776c6e10f33f039edec5ff7e6c949ad92": "8be5df7c8320b11ef98fb8b1766ad20e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/8aa98c5c9e02a3cf74a119c1e94453a556f8f1": "38a0b8b0c9b008dec8ac1a1fca61bed5",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/48d1028e76ba0a9594acfb3798d97fd7f4a954": "91db3227a1916bbac81855fd24a05d87",
".git/objects/d6/9d691fa2220953f06ed278e1c646d93bc1268c": "45a6ad16734b18a482fefd1c85ec90b1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/b7872b00165035f561d08c3b0285e5c441dc39": "18510846a0eb9c82ddbd9c04b3376a84",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/710cafea16e2cdc18bb4a33d8286f347f53074": "f1cb223282b5185f3a53a63d0202cdca",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/c6/3b927b6aecacfafc4255659ad5d48079e2d0d7": "87d8dc501ef3d4dd45e7c13b0afdc6ff",
".git/objects/18/c0ea7be4cb32ddc2ce5b2efe306eb904cc8e45": "b362de16f8008b8abc0e40805ba28cc1",
".git/objects/27/657698d6585cbddba3a525c3e6650c4ff9b689": "8083e5b72cdd1035a5b0e73d5656ca25",
".git/objects/11/0c2e32693f5fc5fd047e23a2689eaa986f9567": "653a842fff157bb1c2c725a30f08705a",
".git/objects/89/ece05010195b69d3696476948c52bc85a94136": "1e5fd09c5ed72672817d0bbc07d21cba",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/dda113a17173ecd08a43b1231ad602d73609b0": "798dfb6841c1a2baeb3d4a944b0e1a94",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/4632e4a4c7585edebd7ce5c6973ccd6c87a64a": "c6bc997ce3a73d3c34abfc7925d82472",
".git/objects/21/1383f5887dabf8248a04de7d30bdcd20a23c44": "f696c7a8bb0550c9b0d371cfcb904d6e",
".git/objects/43/2511c2d480e97f6195b820a7d7eaa5ce43bc69": "5134f1af40f1ec21e197a2d1bb547c20",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/9fa63e566c5706d869a6e37e51c37308253e41": "cb8ced340fd3364a8cdc75fe7725b17c",
".git/objects/65/ffe448981ab7b2ac0eef670e0e8852e43d108d": "18a4a220dfa7b062ea3b5847e244b60f",
".git/objects/62/eddd1f7fc10d87b43cd0b2b96c83eed3843f08": "2eeb27cb66ea7feda5e67b69ebda2ef9",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/62/3480b7be9bb4582444762fcfd8041a635e1b39": "169ab47924da75b84d7aa4f56f141d55",
".git/objects/54/81f1495581dd8750bf25d20b5a300a7cf89354": "a5156cb102307d15cabdca55335f51e9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/6c3ef33f4937b68ebd05779296b3552061d9c5": "54f89cd54458ed763a74e3ba3312aa67",
".git/objects/52/0a17a3be4b8415bc115954f972c90d6d093c69": "63546a8c871e0b3a6a0db4ac7d27e549",
".git/objects/55/93df2841966f491ac9a8a7283ab1d5a4681ca0": "b935356098bb7f29029ebd5784c4f906",
".git/objects/97/2a16e57d17f3500a942833d1fab39773853820": "687c4246a587ebda439f5b3bf4c91e96",
".git/objects/0a/a91da046b99d6862b3b34d35c551ba088bf5b7": "9c8b6fec250505adf0657901ba295ef4",
".git/objects/d3/65e8acc46d22c1779e8beee8a4f6188dbd6e16": "53ed46cac565d170de9176c2c7a93d12",
".git/objects/d3/3f021ea0b1be3c44cb2db1af2a29a110290883": "bb94598d213d3a1f2c2592182f8094e4",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dd/40f71cf51eff679c37e27fbe55ee0512439af1": "56792ba9ade337f42be617b4f0d9bb28",
".git/objects/dd/f4b83710f60eadcbac4d3f020b13305a47ac70": "85d9dd6af330415d1ec66b84e74aaba0",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/2f1733a382f98c2f7a2860f2fcda945996d7ae": "4e0a49005e7564c5949a87c0a3c6ab5b",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a6/1ab00353b33549bac2465f80a8279fa7272e8b": "317be22c94933a01c18190adb563d298",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/93694e1addbbc82bccc01ac7114f09913385e3": "d81a11ce42fb74d184d9c43a9b5dbae9",
".git/objects/c4/a52791a48d51bd8b7f0ddbdbfb46a479ecfd4e": "663a15fa77de385bebb8b9cae8ce7f18",
".git/objects/cc/36c0684ec41de8d8e20523f8c1a9948be064fd": "db08fd3d1d77c2bef2d2c8bf49d5b77f",
".git/objects/cc/8c5bc1e1a3cb7acfd0477f4d8f3a034cb5797c": "3487f24948fbb7f1a31a6ec6f3f8e19b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/ee483da7525b19d31dc8b0c73238238b739a68": "253e1f6682cb00297072d3bf7fc5cd77",
".git/objects/ff/6e197579eff6432d0456e39f6e80c89f1dadae": "429888fbd867f2960b3566ef80f1f796",
".git/objects/c2/0beeaeed8f2ef153bb7171773d02d1cbcc1378": "0289d0e794a039edc724a04a4f729539",
".git/objects/cb/a2b4839d7cfe11b2c9d0bfc619be26085a24d2": "31d946d41d725023fa8ad2e15a5f1ec4",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/1b/6d393711db27d45a874ba0be7acfeedb82e87a": "c03a12f951bd61ecd4effae915baaf07",
".git/objects/4f/edb50503065bd29af7a5bf6533489f48515f8e": "012029c5e77379dc5f0087b38613dd2b",
".git/objects/85/938a0a69ac88e1f1152f332e4909d959aa7e42": "937eded555b865b874c94f4a9dd03f72",
".git/objects/1d/c36d30b37fdd1cb7f3d22c058d418ac2210fe4": "8c6d1a142d0fd87a8050fc90945a9120",
".git/objects/82/2b8644868290ac5c88b68f0dacc279f89f8d19": "261951330952efca5fb441f73ab857a9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f14f59e6b75669b4f6b727bdeadb8d4d",
".git/logs/refs/heads/main": "f14f59e6b75669b4f6b727bdeadb8d4d",
".git/logs/refs/remotes/origin/main": "2f04598ffc57eed13704736e976be2cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "afd8ff39162e436295a1debf22cec59c",
".git/refs/remotes/origin/main": "afd8ff39162e436295a1debf22cec59c",
".git/index": "d1ab0592c7390f1cda9cc02ccbdcdbe5",
".git/COMMIT_EDITMSG": "8eec1e97ac602d3228bad33b61efeaae",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "2521186dbc0fc7e10598a53ceab2b770",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "b0590ec923f24288c1138f50925490af",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
