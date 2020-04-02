let cacheVersion = "2";
let expectedCacheName = "gbs_v" + cacheVersion;

self.addEventListener("install", event => {
  console.log("Installed");
  const setCache = async () => {
    let cacheContainer = await caches.open(expectedCacheName);
    await cacheContainer.addAll(["/xedni.html", "/js/xedni.js"]);
  };
  event.waitUntil(setCache());
});

self.addEventListener("activate", event => {
  console.log("Activated");
  const filterCache = async () => {
    let allBrowserCache = await caches.keys();
    console.log("All: ", allBrowserCache);
    allBrowserCache.map(cache => {
      if (cache !== expectedCacheName) return caches.delete(cache);
    });
    console.log("Filtered: ", await caches.keys());
  };
  event.waitUntil(filterCache());
});

self.addEventListener("fetch", event => {
  console.log("Fetching");
  if (
    event.request.method === "GET" &&
    event.request.headers.get("accept").indexOf("text/html") !== -1
  ) {
    event.respondWith(
      fetch(event.request).catch(async error => {
        console.log(error);
        let cacheContainer = await caches.open(expectedCacheName);
        return await cacheContainer.match("/xedni.html");
      })
    );
  } else {
    const getLatestCache = async () => {
      const response = await caches.match(event.request);
      if (response) {
        console.log("Found response in cache: ", response);
        return response;
      }
      console.log("Fetching request from the network, and caching it");
      const networkResponse = await fetch(event.request);
      let cacheContainer = await caches.open(expectedCacheName);
      await cacheContainer.put(event.request, networkResponse.clone());
      return networkResponse;
    };
    event.respondWith(getLatestCache());
  }
});
