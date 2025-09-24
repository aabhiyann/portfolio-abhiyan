# Image Assets Organization

This directory follows the design document naming convention and organization structure.

## Directory Structure

```
/public/images/
├── hero/
│   ├── hero-cityscape.webp
│   ├── hero-cityscape.jpg (fallback)
│   └── hero-mountains.webp
├── projects/
│   ├── project-infrasight-hero.webp
│   ├── project-infrasight-dashboard.webp
│   └── project-infrasight-mobile.webp
├── photography/
│   ├── photo-kathmandu-street.webp
│   ├── photo-dc-monument.webp
│   └── photo-nature-landscape.webp
└── about/
    ├── about-portrait.webp
    └── about-timeline-map.webp
```

## Image Guidelines

- **Formats:** WebP primary, fallback JPG for compatibility
- **Sizes:** Generate multiple sizes (400w, 800w, 1200w, 1600w) for responsive images
- **Compression:** Target hero images <350KB with smart compression
- **Alt Text:** Meaningful descriptions including location/mood/subject
- **EXIF Data:** Include camera, lens, settings, location, and date for photography

## Usage

Images are referenced through the `src/data/images.ts` file which provides typed metadata and proper organization.
