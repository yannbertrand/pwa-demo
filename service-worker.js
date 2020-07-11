self.addEventListener('install', event => {
  console.log('⤵️ Installation du Service Worker...');
});

self.addEventListener('activate', event => {
  console.log('🤖 Activation du Service worker...');
});

self.addEventListener('fetch', event => {
  console.log('🕸 Interception d\'un fetch vers :', event.request.url);
});
