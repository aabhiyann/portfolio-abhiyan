# The Abhiyan Sainju Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, featuring professional photography with authentic EXIF data display.

## Features

### Professional Photography Gallery

- **Real EXIF Data**: Authentic iPhone 15 Pro Max camera settings displayed like professional photographers
- **Lightbox Gallery**: Full-screen viewing with navigation arrows and detailed technical panels
- **Masonry Layout**: Pinterest-style responsive grid with smooth hover effects
- **Technical Details**: Shows camera, lens, focal length, aperture, shutter speed, ISO, and date

### Image Optimization

- **95%+ Size Reduction**: Original 13MB images optimized to ~300KB
- **WebP Primary**: Modern format with JPEG fallbacks for compatibility
- **Automated Processing**: Scripts for batch optimization and EXIF extraction
- **Responsive Images**: Multiple sizes for different screen densities

### Modern Design System

- **Design Tokens**: Centralized color palette, typography, and motion tokens
- **Dark/Light Mode**: Smooth theme switching with persistent storage
- **Framer Motion**: Sophisticated animations and micro-interactions
- **Tailwind CSS**: Utility-first styling with custom design system

### Developer Experience

- **Automation Scripts**: Image optimization and EXIF data extraction
- **TypeScript Support**: Type-safe image metadata and component props
- **ESLint + Husky**: Code quality and commit message standards
- **Vite**: Lightning-fast development and optimized production builds

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Optimize images (processes Images/ folder)
npm run optimize-images

# Extract EXIF data from images
npm run extract-exif
```

## 📁 Project Structure

```
src/
├── components/
│   ├── PhotographyGallery.jsx    # Professional photo gallery with EXIF display
│   └── ui/
│       └── buttons.css           # Reusable button components
├── data/
│   ├── images.ts                 # Image metadata and organization
│   └── exif-data.ts             # Extracted camera settings
├── types/
│   └── image.ts                  # TypeScript interfaces for images
├── utils/
│   └── motion.ts                 # Centralized animation tokens
└── App.jsx                       # Main application component

scripts/
├── optimize-images.js            # Batch image optimization with Sharp
└── extract-exif.js               # EXIF data extraction from photos

Images/                           # Original high-res images (gitignored)
public/images/photography/        # Optimized WebP/JPEG versions
```

## Photography Features

### EXIF Data Display

The photography gallery displays authentic camera metadata:

- **Camera**: iPhone 15 Pro Max
- **Lens**: Triple camera system (6.765mm f/1.78, 15.66mm f/2.8)
- **Settings**: Aperture, shutter speed, ISO, focal length
- **Metadata**: Date taken, dimensions, location

### Image Processing Workflow

1. **Add Images**: Place original `.JPG` files in `Images/` folder
2. **Optimize**: Run `npm run optimize-images` to create WebP/JPEG versions
3. **Extract EXIF**: Run `npm run extract-exif` to get camera metadata
4. **Display**: Gallery automatically shows technical details

### Example EXIF Display

```
Camera: iPhone 15 Pro Max
Lens: iPhone 15 Pro Max back triple camera 6.765mm f/1.78
Settings: f/1.8 · 1/5300s · ISO 100
Date: March 24, 2024
```

## Design System

### Color Palette

- **Light Background**: `#F8F7F4` (warm off-white)
- **Dark Background**: `#1A1A1A` (deep charcoal)
- **Accent**: `#FF7A00` (vibrant orange)
- **Surface**: White/`#151821` for cards and components

### Typography

- **Headings**: Space Grotesk (modern, geometric)
- **Body**: Inter (highly readable, web-optimized)

### Motion Tokens

- **Fast**: 150ms (tap interactions)
- **Normal**: 250ms (hover/fade transitions)
- **Slow**: 400ms (page/section entrances)

## Development

### Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run optimize-images  # Optimize images in Images/ folder
npm run extract-exif     # Extract EXIF data from images
```

### Git Workflow

This project follows conventional commits and feature branch workflow:

- **Feature branches**: `feat/feature-name`
- **Bug fixes**: `fix/bug-description`
- **Chores**: `chore/task-description`
- **Commits**: Use conventional commit format (`feat:`, `fix:`, `chore:`)

### Image Guidelines

- **Formats**: WebP primary, JPEG fallback
- **Sizes**: Max width 1200px for web optimization
- **Quality**: WebP 80%, JPEG 85% for optimal balance
- **Storage**: Originals in `Images/`, optimized in `public/images/`

## Dependencies

### Core

- **React 19**: Latest React with concurrent features
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework

### UI & Animation

- **Framer Motion**: Production-ready motion library
- **React DOM**: React rendering

### Image Processing

- **Sharp**: High-performance image processing
- **exifr**: EXIF data extraction

### Development

- **ESLint**: Code linting and formatting
- **Husky**: Git hooks for code quality

## Deployment

The project is optimized for modern hosting platforms:

- **Vercel**: Recommended for automatic deployments
- **Netlify**: Great for static sites with form handling
- **GitHub Pages**: Free hosting for public repositories

### Build Output

- **CSS**: ~20KB gzipped (Tailwind + custom styles)
- **JS**: ~107KB gzipped (React + Framer Motion)
- **Images**: Optimized WebP/JPEG with 95%+ size reduction

## 📄 License

This project is private and proprietary to Abhiyan Sainju.

---

**Built with ❤️ by Abhiyan Sainju**  
_Professional portfolio showcasing photography, development, and design skills_
