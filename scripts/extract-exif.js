#!/usr/bin/env node

import fs from "fs";
import path from "path";
import exifr from "exifr";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const inputDir = "./Images";

// Get all image files
const imageFiles = fs
  .readdirSync(inputDir)
  .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

console.log(`Found ${imageFiles.length} images to analyze...`);

// Process each image
async function extractEXIF() {
  const exifData = [];
  
  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const baseName = path.parse(file).name;
    
    console.log(`\nAnalyzing ${file}...`);
    
    try {
      // Extract EXIF data
      const exif = await exifr.parse(inputPath);
      
      if (exif) {
        console.log("  📸 Camera Info:");
        console.log(`    Make: ${exif.Make || 'Unknown'}`);
        console.log(`    Model: ${exif.Model || 'Unknown'}`);
        console.log(`    Lens: ${exif.LensModel || exif.LensInfo || 'Unknown'}`);
        
        console.log("  ⚙️  Settings:");
        console.log(`    Focal Length: ${exif.FocalLength ? `${exif.FocalLength}mm` : 'Unknown'}`);
        console.log(`    Aperture: ${exif.FNumber ? `f/${exif.FNumber}` : 'Unknown'}`);
        console.log(`    Shutter Speed: ${exif.ExposureTime ? `1/${Math.round(1/exif.ExposureTime)}s` : 'Unknown'}`);
        console.log(`    ISO: ${exif.ISO || 'Unknown'}`);
        
        console.log("  📅 Metadata:");
        console.log(`    Date Taken: ${exif.DateTimeOriginal || exif.DateTime || 'Unknown'}`);
        console.log(`    Dimensions: ${exif.ExifImageWidth}x${exif.ExifImageHeight}`);
        
        // Store for later use
        exifData.push({
          filename: baseName,
          camera: exif.Model || 'Unknown',
          lens: exif.LensModel || exif.LensInfo || 'Unknown',
          focalLength: exif.FocalLength ? `${exif.FocalLength}mm` : 'Unknown',
          aperture: exif.FNumber ? `f/${exif.FNumber}` : 'Unknown',
          shutterSpeed: exif.ExposureTime ? `1/${Math.round(1/exif.ExposureTime)}s` : 'Unknown',
          iso: exif.ISO || 'Unknown',
          dateTaken: exif.DateTimeOriginal || exif.DateTime || 'Unknown',
          dimensions: `${exif.ExifImageWidth}x${exif.ExifImageHeight}`
        });
        
      } else {
        console.log("  ❌ No EXIF data found");
        exifData.push({
          filename: baseName,
          camera: 'Unknown',
          lens: 'Unknown',
          focalLength: 'Unknown',
          aperture: 'Unknown',
          shutterSpeed: 'Unknown',
          iso: 'Unknown',
          dateTaken: 'Unknown',
          dimensions: 'Unknown'
        });
      }
      
    } catch (error) {
      console.error(`  ❌ Error reading ${file}:`, error.message);
      exifData.push({
        filename: baseName,
        camera: 'Error',
        lens: 'Error',
        focalLength: 'Error',
        aperture: 'Error',
        shutterSpeed: 'Error',
        iso: 'Error',
        dateTaken: 'Error',
        dimensions: 'Error'
      });
    }
  }
  
  // Generate TypeScript data file
  const tsContent = `// Auto-generated EXIF data from images
export const imageEXIFData = ${JSON.stringify(exifData, null, 2)};
`;
  
  fs.writeFileSync('./src/data/exif-data.ts', tsContent);
  console.log('\n🎉 EXIF extraction complete!');
  console.log('📄 Data saved to: src/data/exif-data.ts');
  console.log('\nYou can now use this data in your photography gallery!');
}

extractEXIF().catch(console.error);
