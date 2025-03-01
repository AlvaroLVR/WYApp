if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        const basePath = window.location.pathname.startsWith('WYApp/') ? 'WYApp/' : '/';
        navigator.serviceWorker.register(`${basePath}sw.js`, { scope: basePath });
    });
}
