#!/usr/bin/env node

import fs from "fs";
import path from "path";
import exifr from "exifr";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = "./Images";
const outputPath = path.join(__dirname, "../src/data/ExifData.ts");
const publicPhotographyDir = path.join(__dirname, "../public/images/photography");

/**
 * Try EXIF from the source in Images/, then from optimized JPEG in public/ (e.g. WebP inputs).
 */
async function readExifFromFile(inputPath, baseName) {
  try {
    const direct = await exifr.parse(inputPath);
    if (direct) return direct;
  } catch {
    // exifr may not read some WebP; fall through
  }
  const fallbackJpg = path.join(publicPhotographyDir, `${baseName}.jpg`);
  if (fs.existsSync(fallbackJpg)) {
    try {
      return await exifr.parse(fallbackJpg);
    } catch {
      return null;
    }
  }
  return null;
}

function loadExistingExifData() {
  if (!fs.existsSync(outputPath)) return [];
  const raw = fs.readFileSync(outputPath, "utf8");
  const m = raw.match(/export const imageEXIFData = (\[[\s\S]*\]);/);
  if (!m) return [];
  try {
    return JSON.parse(m[1]);
  } catch {
    return [];
  }
}

function normalizeIso(iso) {
  if (typeof iso === "number" && Number.isFinite(iso)) return iso;
  return "Unknown";
}

function buildRow(baseName, exif) {
  if (!exif) {
    return {
      filename: baseName,
      camera: "Unknown",
      lens: "Unknown",
      focalLength: "Unknown",
      aperture: "Unknown",
      shutterSpeed: "Unknown",
      iso: "Unknown",
      dateTaken: "Unknown",
      dimensions: "Unknown",
    };
  }
  return {
    filename: baseName,
    camera: exif.Model || "Unknown",
    lens: exif.LensModel || exif.LensInfo || "Unknown",
    focalLength: exif.FocalLength ? `${exif.FocalLength}mm` : "Unknown",
    aperture: exif.FNumber ? `f/${exif.FNumber}` : "Unknown",
    shutterSpeed: exif.ExposureTime
      ? `1/${Math.round(1 / exif.ExposureTime)}s`
      : "Unknown",
    iso: normalizeIso(exif.ISO),
    dateTaken: exif.DateTimeOriginal || exif.DateTime || "Unknown",
    dimensions:
      exif.ExifImageWidth && exif.ExifImageHeight
        ? `${exif.ExifImageWidth}x${exif.ExifImageHeight}`
        : "Unknown",
  };
}

if (!fs.existsSync(inputDir)) {
  console.log(
    `[extract-exif] Skipping: input directory not found: ${inputDir}\n` +
      `If you want to (re)generate EXIF data from original JPG/PNG/WebP assets, place them in ${inputDir}/ and rerun.`,
  );
  process.exit(0);
}

const imageFiles = fs
  .readdirSync(inputDir)
  .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

console.log(`Found ${imageFiles.length} images to analyze...`);

async function extractEXIF() {
  const extracted = [];

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const baseName = path.parse(file).name;

    console.log(`\nAnalyzing ${file}...`);

    try {
      const exif = await readExifFromFile(inputPath, baseName);

      if (exif) {
        console.log("  📸 Camera Info:");
        console.log(`    Make: ${exif.Make || "Unknown"}`);
        console.log(`    Model: ${exif.Model || "Unknown"}`);
        console.log(
          `    Lens: ${exif.LensModel || exif.LensInfo || "Unknown"}`,
        );

        console.log("  ⚙️  Settings:");
        console.log(
          `    Focal Length: ${exif.FocalLength ? `${exif.FocalLength}mm` : "Unknown"}`,
        );
        console.log(
          `    Aperture: ${exif.FNumber ? `f/${exif.FNumber}` : "Unknown"}`,
        );
        console.log(
          `    Shutter Speed: ${exif.ExposureTime ? `1/${Math.round(1 / exif.ExposureTime)}s` : "Unknown"}`,
        );
        console.log(`    ISO: ${exif.ISO || "Unknown"}`);

        console.log("  📅 Metadata:");
        console.log(
          `    Date Taken: ${exif.DateTimeOriginal || exif.DateTime || "Unknown"}`,
        );
        console.log(
          `    Dimensions: ${exif.ExifImageWidth}x${exif.ExifImageHeight}`,
        );

        extracted.push(buildRow(baseName, exif));
      } else {
        console.log("  ❌ No EXIF data found");
        extracted.push(buildRow(baseName, null));
      }
    } catch (error) {
      console.error(`  ❌ Error reading ${file}:`, error.message);
      extracted.push(buildRow(baseName, null));
    }
  }

  const byFilename = new Map(extracted.map((row) => [row.filename, row]));
  const existing = loadExistingExifData();

  const merged = [];
  for (const row of existing) {
    merged.push(byFilename.has(row.filename) ? byFilename.get(row.filename) : row);
  }
  for (const row of extracted) {
    if (!existing.some((e) => e.filename === row.filename)) {
      merged.push(row);
    }
  }

  const tsContent = `// Auto-generated EXIF data from images (merge: npm run extract-exif)
export const imageEXIFData = ${JSON.stringify(merged, null, 2)};
`;

  fs.writeFileSync(outputPath, tsContent);
  console.log("\n🎉 EXIF extraction complete!");
  console.log(`📄 Data saved to: ${path.relative(process.cwd(), outputPath)}`);
  console.log(
    `\nMerged ${extracted.length} file(s) from ${inputDir}/ with existing gallery metadata.`,
  );
}

extractEXIF().catch(console.error);
