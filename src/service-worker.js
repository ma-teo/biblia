importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js')

self.skipWaiting()
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)
