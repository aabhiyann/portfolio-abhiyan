import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";
import { mkdirSync } from "fs";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Ensure dist directory exists before sitemap plugin runs
    {
      name: "ensure-dist-exists",
      buildStart() {
        const distDir = resolve(process.cwd(), "dist");
        try {
          mkdirSync(distDir, { recursive: true });
        } catch (error) {
          // Directory might already exist, that's fine
        }
      },
    },
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
    }),
  ],
});
