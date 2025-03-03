import './structuredClonePolyfill'; // Asegúrate de que este sea el primer import
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { copyFileSync } from "fs";

export default defineConfig({
  base: "./", // Asegúrate de que esto coincida con el nombre de tu repo en GitHub Pages
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      inject: {
        injectManifest: true, // Asegúrate de que esto esté configurado correctamente
      },
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "WYA App",
        short_name: "WYA",
        start_url: "./", // Asegúrate de que esto coincida con `base`
        scope: "./",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/icon/icon512_maskable.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon/icon512_maskable.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        swDest: "dist/sw.js",
      },
    }),
  ],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: "copy-sw",
          closeBundle() {
            // Asegúrate de que el archivo sw.js se haya generado correctamente antes de copiarlo
            try {
              copyFileSync("dist/sw.js", "public/sw.js");
              copyFileSync("dist/registerSW.js", "public/registerSW.js");
            } catch (err) {
              console.error("Error copying SW files:", err);
            }
          },
        },
      ],
    },
  },
});