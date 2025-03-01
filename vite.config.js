import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { copyFileSync } from "fs";

export default defineConfig({
  base: "/WYApp/", // Ajusta según el nombre de tu repo en GitHub Pages
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "WYA App",
        short_name: "WYA",
        start_url: "/WYApp/", // Coincide con `base`
        scope: "/WYApp/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "icon/icon512_maskable.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icon/icon512_maskable.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: "copy-sw",
          closeBundle() {
            copyFileSync("dist/registerSW.js", "public/registerSW.js");
          }
        }
      ]
    }
  },
  workbox: {
    swDest: 'WYApp/sw.js', // Esto asegurará que el Service Worker se genere en la raíz
  },
});
