const CACHE_NAME = 'pwa-sistema-facturacion-cache-v1';

// Listamos los archivos que queremos guardar para que PWA funcione sin conexión.
const archivosAplicativoWeb = [
    './',
    './index.html',
    './manifest.json',
    './public/css/estilos.css',
    './public/img/factura_logo.png',
    './public/js/clientes.js',
    './public/js/productos.js',
    './public/js/factura.js'
];

// Creamos un evento el cual se va a ejecutar cuando se instale el service-worker.
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(archivosAplicativoWeb))
    );
});

// Creamos un evento para que se ejecute cuando se vaya a activar el service-worker.
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    )
})