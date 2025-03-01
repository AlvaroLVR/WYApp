import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TimeProvider } from './context/TimeProvider';

// Registrar el Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/WYApp/sw.js')
      .then(reg => console.log('Service Worker registrado:', reg))
      .catch(err => console.error('Error al registrar Service Worker:', err));
  });
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimeProvider>
      <BrowserRouter basename="/WYApp/">
        <App />
      </BrowserRouter>
    </TimeProvider>
  </React.StrictMode>
);
