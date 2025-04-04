import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Spirit Island Helper",
        short_name: "SI Helper",
        start_url: "/SIHelper/",
        scope: "/SIHelper/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0f172a", // optional Tailwind-like dark background
        icons: [
          {
            src: "/SIHelper/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/SIHelper/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/SIHelper/",
});
