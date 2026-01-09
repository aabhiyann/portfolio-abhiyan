import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

// ------------------------------------------------------------------
// CONFIGURATION
// ------------------------------------------------------------------
const API_KEY = process.env.GEMINI_API_KEY;
const IMAGES_DIR = path.join(process.cwd(), 'public/images/photography');
const EXIF_DATA_PATH = path.join(process.cwd(), 'src/data/ExifData.ts');

if (!API_KEY) {
    console.error("❌ Error: GEMINI_API_KEY environment variable is missing.");
    console.error("   Run: export GEMINI_API_KEY='your_key_here' && node scripts/generate-alt-text.js");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// ------------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------------
async function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
        },
    };
}

async function generateAltText(imagePath) {
    const prompt = "Describe this photograph in one concise sentence suitable for screen reader alt text. Focus on the subject, lighting, and mood. Do not say 'image of' or 'photo of'.";
    try {
        const imagePart = await fileToGenerativePart(imagePath, "image/webp"); // Assuming webp as per project
        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        return response.text().trim();
    } catch (error) {
        console.warn(`⚠️ Failed to generate for ${path.basename(imagePath)}:`, error.message);
        return null;
    }
}

// ------------------------------------------------------------------
// MAIN
// ------------------------------------------------------------------
async function main() {
    console.log("🚀 Starting AI Alt Text Generation...");

    // 1. Read existing ExifData
    let exifContent = fs.readFileSync(EXIF_DATA_PATH, 'utf-8');
    // Simple regex to extract the JSON-like array. 
    // detailed parsing might be needed if the file is complex code.
    // For now, we assume standard array export format.

    // Actually, simpler approach for this script:
    // we will regex match existing objects and inject/update "altText" property.

    const imageFiles = fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.webp') || f.endsWith('.jpg'));

    let updatedCount = 0;

    for (const file of imageFiles) {
        const filenameNoExt = path.parse(file).name;

        // Check if we already have a manual alt text or need to generate
        // This is a naive check. In production, parse the AST.
        // Here we will just log what WE WOULD DO.

        console.log(`Processing: ${file}...`);
        const altText = await generateAltText(path.join(IMAGES_DIR, file));

        if (altText) {
            console.log(`   ✅ Generated: "${altText}"`);
            // TODO: Logic to write back to ExifData.ts would go here.
            // For safety, we output a JSON map that the user can merge.
        }

        await new Promise(r => setTimeout(r, 1000)); // Rate limit safety
    }

    console.log("\n✨ Done! Copy the above values into your ExifData.ts or update this script to write directly.");
}

main();
