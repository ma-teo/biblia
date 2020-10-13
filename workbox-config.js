module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    'index.html',
    'static/css/**.css',
    'static/js/**.js',
    'static/media/**.*',
  ],
  dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
  swDest: 'build/service-worker.js',
  navigateFallback: 'index.html',
  navigateFallbackDenylist: [
    /\/[^/?]+\.[^/]+$/,
  ],
  skipWaiting: true,
}
