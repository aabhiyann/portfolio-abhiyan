#!/usr/bin/env node

import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const inputDir = "./Images";
const outputDir = "./public/images/photography";
const maxWidth = 1200; // Max width for web images
const quality = 85; // WebP quality
const jpgQuality = 90; // JPEG fallback quality

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const imageFiles = fs
  .readdirSync(inputDir)
  .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

console.log(`Found ${imageFiles.length} images to optimize...`);

// Process each image
async function optimizeImages() {
  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const baseName = path.parse(file).name;

    console.log(`Processing ${file}...`);

    try {
      // Get image metadata
      const metadata = await sharp(inputPath).metadata();
      console.log(
        `  Original: ${Math.round(metadata.width)}x${
          metadata.height
        }, ${Math.round(fs.statSync(inputPath).size / 1024)}KB`
      );

      // Generate WebP version (primary)
      const webpPath = path.join(outputDir, `${baseName}.webp`);
      await sharp(inputPath)
        .resize(maxWidth, null, {
          withoutEnlargement: true,
          fit: "inside",
        })
        .webp({ quality })
        .toFile(webpPath);

      const webpStats = fs.statSync(webpPath);
      console.log(`  WebP: ${Math.round(webpStats.size / 1024)}KB`);

      // Generate JPEG fallback (smaller than original)
      const jpgPath = path.join(outputDir, `${baseName}.jpg`);
      await sharp(inputPath)
        .resize(maxWidth, null, {
          withoutEnlargement: true,
          fit: "inside",
        })
        .jpeg({ quality: jpgQuality })
        .toFile(jpgPath);

      const jpgStats = fs.statSync(jpgPath);
      console.log(`  JPEG: ${Math.round(jpgStats.size / 1024)}KB`);

      // Calculate savings
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = Math.min(webpStats.size, jpgStats.size);
      const savings = Math.round((1 - optimizedSize / originalSize) * 100);

      console.log(` Saved ${savings}% space\n`);
    } catch (error) {
      console.error(`  Error processing ${file}:`, error.message);
    }
  }

  console.log("🎉 Image optimization complete!");
  console.log(`\nOptimized images are in: ${outputDir}`);
  console.log("Use WebP as primary, JPEG as fallback in your HTML.");
}

optimizeImages().catch(console.error);
