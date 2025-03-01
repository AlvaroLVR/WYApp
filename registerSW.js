if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Asegúrate de que el basePath esté bien calculado, según el `base` configurado en Vite
        const basePath = window.location.pathname.startsWith('/WYApp') ? '/WYApp/' : '/'; // Ajuste a tu `base`
        
        // Intenta registrar el service worker con el `basePath` y asegura la ruta correcta del archivo sw.js
        navigator.serviceWorker.register(`${basePath}sw.js`, { scope: basePath }).then((registration) => {
            console.log("Service Worker registrado con éxito:", registration);
        }).catch((error) => {
            console.error("Error al registrar el Service Worker:", error);
        });
    });
}
