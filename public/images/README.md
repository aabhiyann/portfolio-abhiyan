# Image Assets Organization

This directory follows the design document naming convention and organization structure, with professional photography featuring authentic EXIF data display.

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
├── photography/              # 🆕 Professional photography gallery
│   ├── IMG_0216.webp        # Optimized iPhone 15 Pro Max photos
│   ├── IMG_0216.jpg         # JPEG fallback
│   ├── IMG_0217.webp        # With authentic EXIF data
│   ├── IMG_0217.jpg         # Displayed in lightbox gallery
│   └── ... (12 total images)
└── about/
    ├── about-portrait.webp
    └── about-timeline-map.webp
```

## 📸 Photography Gallery Features

### Real EXIF Data Display
- **Camera**: iPhone 15 Pro Max with triple camera system
- **Technical Settings**: Aperture, shutter speed, ISO, focal length
- **Metadata**: Date taken, lens model, camera make
- **Professional Presentation**: Lightbox with detailed technical panels

### Image Optimization Results
- **Original Size**: ~13MB total (12 images)
- **Optimized Size**: ~300KB total (95%+ reduction)
- **Formats**: WebP primary (80% quality), JPEG fallback (85% quality)
- **Max Width**: 1200px for optimal web performance

### EXIF Data Examples
```
Camera: iPhone 15 Pro Max
Lens: iPhone 15 Pro Max back triple camera 6.765mm f/1.78
Settings: f/1.8 · 1/5300s · ISO 100
Date: March 24, 2024
```

## 🛠️ Image Processing Workflow

### 1. Add Original Images
```bash
# Place high-resolution images in Images/ folder
Images/
├── IMG_0216.JPG    # Original iPhone photos
├── IMG_0217.JPG
└── ...
```

### 2. Optimize Images
```bash
npm run optimize-images
# Creates optimized WebP and JPEG versions
# Saves to public/images/photography/
```

### 3. Extract EXIF Data
```bash
npm run extract-exif
# Extracts camera settings and metadata
# Updates src/data/exif-data.ts
```

### 4. Display in Gallery
The PhotographyGallery component automatically displays:
- Masonry grid layout
- Hover effects with EXIF preview
- Full-screen lightbox with technical details
- Navigation arrows between images

## Image Guidelines

- **Formats:** WebP primary, fallback JPG for compatibility
- **Sizes:** Max width 1200px for web optimization
- **Compression:** WebP 80%, JPEG 85% quality
- **Alt Text:** Meaningful descriptions including location/mood/subject
- **EXIF Data:** Authentic camera settings displayed professionally

## Usage

Images are referenced through the `src/data/images.ts` file which provides:
- Typed metadata using `ImageMetadata` interface
- Real EXIF data from `src/data/exif-data.ts`
- Proper organization and optimization
- Professional photography gallery integration

## Automation Scripts

- **`npm run optimize-images`**: Batch processes Images/ folder with Sharp
- **`npm run extract-exif`**: Extracts camera metadata using exifr
- **Git Integration**: Original large images are gitignored, only optimized versions tracked
