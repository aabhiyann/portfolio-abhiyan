import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: "https://www.abhiyansainju.com",
      routes: [
        "/",
        "/projects",
        "/photography",
        "/deep-dives",
        "/about",
        // Dynamic routes like /deep-dives/:slug would need to be generated dynamically
        // from your articles data. This often requires a custom script or pre-rendering.
      ],
      // robots.txt is provided in public/, so disable plugin generation
      // The plugin might still try to generate it, but our static file will take precedence
    }),
  ],
});
