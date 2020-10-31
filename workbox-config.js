module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    'index.html',
    'static/css/**.css',
    'static/js/**.js',
    'static/media/**.*',
  ],
  dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
  swSrc: 'src/sw.js',
  swDest: 'build/service-worker.js',
}
