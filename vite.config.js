import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";
import { mkdirSync } from "fs";
import { resolve } from "path";

// All routes for sitemap - includes static pages, blog posts, and case studies
const allRoutes = [
  // Static pages
  "/",
  "/projects",
  "/photography",
  "/deep-dives",
  "/about",
  "/experience",
  "/skills",
  "/contact",
  "/resume",
  "/now",
  "/uses",

  // Blog posts (Deep Dives)
  "/deep-dives/infrasight-production-ml",
  "/deep-dives/audio-classification-research",
  "/deep-dives/talkifydocs-rag-pipeline",
  "/deep-dives/melodyhub-realtime-architecture",
  
  // Case studies
  "/case-studies/infrasight",
  "/case-studies/talkifydocs",
  "/case-studies/melodyhub",
  "/case-studies/audio-classification",
];

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
      routes: allRoutes,
    }),
  ],
});
