if ('workbox' in self) {
  //workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
}
