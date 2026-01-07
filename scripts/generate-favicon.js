import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputImage = join(__dirname, '../public/images/about/portrait.jpg');
const outputDir = join(__dirname, '../public');

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
];

console.log('Generating favicons from profile picture...');

try {
  // Generate PNG favicons in various sizes
  for (const { size, name } of sizes) {
    await sharp(inputImage)
      .resize(size, size, {
        fit: 'cover',
        position: 'center',
      })
      .png()
      .toFile(join(outputDir, name));
    console.log(`✓ Generated ${name} (${size}x${size})`);
  }

  // Generate ICO file (16x16 and 32x32 combined)
  const ico16 = await sharp(inputImage)
    .resize(16, 16, { fit: 'cover', position: 'center' })
    .png()
    .toBuffer();

  const ico32 = await sharp(inputImage)
    .resize(32, 32, { fit: 'cover', position: 'center' })
    .png()
    .toBuffer();

  // For now, save as favicon.ico (simplified - browsers will accept PNG with .ico extension)
  // For a true ICO file, we'd need a library, but PNG works fine for most browsers
  writeFileSync(join(outputDir, 'favicon.ico'), ico32);
  console.log('✓ Generated favicon.ico');

  // Generate SVG favicon (simple version)
  const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="circle">
      <circle cx="50" cy="50" r="50"/>
    </clipPath>
  </defs>
  <image href="/images/about/portrait.jpg" width="100" height="100" clip-path="url(#circle)"/>
</svg>`;
  writeFileSync(join(outputDir, 'favicon.svg'), svgFavicon);
  console.log('✓ Generated favicon.svg');

  // Generate web manifest
  const manifest = {
    name: 'Abhiyan Sainju | Portfolio',
    short_name: 'Abhiyan',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  };
  writeFileSync(
    join(outputDir, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('✓ Generated site.webmanifest');

  console.log('\n✅ All favicons generated successfully!');
} catch (error) {
  console.error('❌ Error generating favicons:', error);
  process.exit(1);
}

