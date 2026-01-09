import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://www.abhiyansainju.com';

// Define static routes
const staticRoutes = [
    '/',
    '/about',
    '/projects',
    '/resume',
    '/deep-dives',
];

// Regex patterns to extract data from TS files
const projectPattern = /caseStudyUrl:\s*"([^"]+)"/g;
const articlePattern = /id:\s*"([^"]+)"/g;

function extractRoutes(filePath, pattern, prefix = '') {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const matches = [];
        let match;
        while ((match = pattern.exec(content)) !== null) {
            matches.push(prefix + match[1]);
        }
        return matches;
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return [];
    }
}

function generateSitemap() {
    const projectsPath = path.join(__dirname, '../src/data/Projects.ts');
    const articlesPath = path.join(__dirname, '../src/data/Articles.ts');

    // Extract dynamic routes
    // Project case studies are absolute paths in data (e.g. "/case-studies/infrasight")
    const projectRoutes = extractRoutes(projectsPath, projectPattern, '');

    // Articles are IDs, need prefix "/deep-dives/"
    const articleRoutes = extractRoutes(articlesPath, articlePattern, '/deep-dives/');

    const allRoutes = [
        ...staticRoutes,
        ...projectRoutes,
        ...articleRoutes
    ];

    // Remove duplicates and filter empty
    const uniqueRoutes = [...new Set(allRoutes)].filter(Boolean);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
            .map((route) => {
                return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
            })
            .join('\n')}
</urlset>`;

    const outputPath = path.join(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log(`✅ Sitemap generated at ${outputPath} with ${uniqueRoutes.length} URLs`);
}

generateSitemap();
