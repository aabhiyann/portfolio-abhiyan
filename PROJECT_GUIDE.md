# Complete Project Guide - Portfolio Abhiyan

## 🎯 Project Overview

This is a **frontend-only** portfolio website - there is **NO backend server**. It's a static React application that can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

The portfolio showcases:
- **Projects**: Your software engineering work
- **Photography**: Professional photo gallery with EXIF data
- **About**: Your background and experience
- **Deep Dives**: Technical articles/blog posts

---

## 🛠️ Technology Stack

### **Core Framework & Language**
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite 7.1.7** - Modern build tool (replaces Create React App)

### **Styling & Design**
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Framer Motion 12.23.22** - Production-ready animation library
- **Custom Design System** - Centralized color tokens, typography, and motion tokens

### **Routing & Navigation**
- **React Router DOM 7.9.2** - Client-side routing

### **UI Libraries & Components**
- **Lucide React 0.544.0** - Icon library
- **React Helmet Async 2.0.5** - SEO metadata management
- **React Zoom Pan Pinch 3.7.0** - Image zoom/pan functionality
- **Vanilla Tilt 1.8.1** - 3D tilt effects on cards

### **Image Processing** (Development Tools)
- **Sharp 0.34.4** - High-performance image optimization
- **exifr 7.1.3** - EXIF metadata extraction from photos

### **Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks for code quality
- **Commitlint** - Conventional commit message validation
- **TypeScript ESLint** - TypeScript-specific linting

---

## 🚀 How to Start the Project

### **Prerequisites**
1. **Node.js** installed (v18 or higher recommended)
2. **npm** (comes with Node.js)

### **First Time Setup**

```bash
# 1. Navigate to project directory
cd /Users/abhiyansainju/Developer/portfolio-abhiyan

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev
```

The development server will start and you'll see output like:
```
  VITE v7.1.7  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Open your browser to `http://localhost:5173/`** to see your portfolio!

---

## 📜 Available Scripts

### **Development**
```bash
npm run dev          # Start development server (hot reload enabled)
```

### **Production**
```bash
npm run build        # Build for production (outputs to /dist folder)
npm run preview      # Preview the production build locally
```

### **Code Quality**
```bash
npm run lint         # Run ESLint to check for code issues
```

### **Image Processing** (Optional - when adding new photos)
```bash
npm run optimize-images   # Optimize images in Images/ folder (creates WebP + JPEG)
npm run extract-exif      # Extract EXIF data from images (camera settings)
```

---

## 📁 Project Structure

```
portfolio-abhiyan/
├── src/                          # Source code
│   ├── components/              # React components
│   │   ├── ui/                  # Reusable UI components (Button, Card, etc.)
│   │   ├── Layout.tsx           # Main layout wrapper
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── Footer.tsx           # Footer component
│   │   ├── PhotographyGallery.tsx # Photo gallery with EXIF
│   │   └── ...                  # Other components
│   ├── pages/                   # Page components (routes)
│   │   ├── Home.tsx             # Landing page
│   │   ├── Projects.tsx         # Projects showcase
│   │   ├── Photography.tsx      # Photography gallery
│   │   ├── About.tsx            # About page
│   │   └── DeepDives.tsx        # Articles/blog
│   ├── contexts/                # React Context providers
│   │   └── ThemeProvider.tsx    # Theme (light/dark mode) management
│   ├── data/                    # Static data files
│   │   ├── Projects.ts          # Project data
│   │   ├── Articles.ts          # Blog post data
│   │   ├── ExifData.ts          # Photo EXIF metadata
│   │   └── ...                  # Other data files
│   ├── design/                  # Design system tokens
│   │   ├── colors.ts            # Color palette
│   │   └── system.ts            # Design tokens
│   ├── utils/                   # Utility functions
│   ├── types/                   # TypeScript type definitions
│   ├── App.tsx                  # Main app component (routing)
│   └── main.tsx                 # Entry point
│
├── public/                      # Static assets (served as-is)
│   └── images/                  # Optimized images (WebP + JPEG)
│
├── Images/                      # Original high-res images (gitignored)
│
├── scripts/                     # Node.js utility scripts
│   ├── optimize-images.js       # Image optimization script
│   └── extract-exif.js          # EXIF extraction script
│
├── dist/                        # Production build output (generated)
│
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── eslint.config.js            # ESLint configuration
```

---

## 🎨 Key Features

### **1. Theme System**
- **Light/Dark Mode** with smooth transitions
- Theme persists in browser localStorage
- Custom color tokens for each theme
- Accessible via `ThemeProvider` context

### **2. Photography Gallery**
- **Masonry Layout** - Pinterest-style grid
- **EXIF Data Display** - Shows camera settings (iPhone 15 Pro Max)
- **Lightbox/Modal** - Full-screen image viewing
- **Optimized Images** - WebP format with JPEG fallbacks
- **Lazy Loading** - Images load as you scroll

### **3. Project Showcase**
- **3D Tilt Effects** - Interactive card animations
- **Project Details** - Architecture visualization
- **Tech Stack Tags** - Technology chips/badges

### **4. Animations**
- **Framer Motion** - Page transitions, scroll animations
- **Smooth Scrolling** - Enhanced scroll experience
- **Micro-interactions** - Hover effects, button animations

### **5. SEO & Accessibility**
- **React Helmet** - Dynamic meta tags per page
- **Structured Data** - JSON-LD for search engines
- **Keyboard Navigation** - Full keyboard support
- **ARIA Labels** - Screen reader friendly

---

## 🔧 Configuration Files

### **vite.config.js**
- Configures Vite build tool
- Sets up React plugin
- Configures Tailwind CSS
- Generates sitemap automatically

### **tailwind.config.js**
- Defines custom color tokens
- Sets up typography (Space Grotesk, Inter)
- Configures animations
- Theme-aware CSS variables

### **tsconfig.json**
- TypeScript compiler settings
- Strict mode enabled
- React JSX support

---

## 📝 Development Workflow

### **Adding New Photos**
1. Place original `.JPG` files in `Images/Photography/` folder
2. Run `npm run optimize-images` to create optimized versions
3. Run `npm run extract-exif` to extract camera metadata
4. Update `src/data/images.ts` to include new photos

### **Adding New Projects**
1. Edit `src/data/Projects.ts`
2. Add project object with title, description, tech stack, etc.
3. Add project image to `public/images/projects/`
4. Project will appear on `/projects` page

### **Adding Blog Posts/Deep Dives**
1. Edit `src/data/Articles.ts`
2. Add article object with content, slug, etc.
3. Article will be available at `/deep-dives/:slug`

---

## 🌐 Deployment

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

### **GitHub Pages**
1. Build the project: `npm run build`
2. Push `dist/` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

---

## 🐛 Troubleshooting

### **Port Already in Use**
If port 5173 is taken, Vite will automatically use the next available port. Check the terminal output for the actual URL.

### **Module Not Found Errors**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### **TypeScript Errors**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### **Build Errors**
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run build
```

---

## 📚 Key Concepts

### **Why No Backend?**
This is a **static site** - all data is stored in TypeScript files (`src/data/`). This means:
- ✅ Fast loading times
- ✅ Free hosting options
- ✅ No server maintenance
- ✅ Easy to deploy
- ❌ No dynamic content (no user accounts, comments, etc.)

### **How Data Works**
- Projects, articles, and image metadata are stored in TypeScript files
- These files are imported directly into React components
- Vite bundles everything into static HTML/CSS/JS files during build

### **Image Optimization**
- Original images are in `Images/` folder (not committed to git)
- Optimized versions (WebP + JPEG) are in `public/images/`
- Scripts automatically create multiple formats and sizes

---

## 🎓 Learning Resources

- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/
- **TypeScript**: https://www.typescriptlang.org/

---

## 💡 Quick Reference

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Preview production build | `npm run preview` |
| Lint code | `npm run lint` |
| Optimize images | `npm run optimize-images` |
| Extract EXIF data | `npm run extract-exif` |

---

**Remember**: This is a **frontend-only** project. There's no backend server to start - just run `npm run dev` and you're good to go! 🚀


