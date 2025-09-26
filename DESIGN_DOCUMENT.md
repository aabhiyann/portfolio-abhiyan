# Design Document: The Abhiyan Sainju Portfolio

**Version:** 1.0  
**Last Updated**: September 25, 2025

## Table of Contents

- [1. Core Design Philosophy: "Minimalist Canvas, Personal Story"](#1-core-design-philosophy-minimalist-canvas-personal-story)
- [2. Brand Identity](#2-brand-identity)
- [3. Layout & Spacing](#3-layout--spacing)
- [4. Component Design System](#4-component-design-system)
- [5. Interaction & Animation Philosophy](#5-interaction--animation-philosophy)
- [6. Content, Voice & Imagery](#6-content-voice--imagery)
- [7. Dark Mode Strategy](#7-dark-mode-strategy)
- [8. Accessibility Checklist](#8-accessibility-checklist)
- [9. SEO & Social](#9-seo--social)
- [10. Performance & Assets](#10-performance--assets)
- [11. Data-Viz Style (Deep Dives)](#11-data-viz-style-deep-dives)
- [12. Micro-Patterns & Easter Eggs](#12-micro-patterns--easter-eggs)
- [13. Code & File Conventions](#13-code--file-conventions)
- [14. Page Layouts (Blueprints)](#14-page-layouts-blueprints)
- [15. Future Extensibility](#15-future-extensibility)
- [16. QA Checklist (per release)](#16-qa-checklist-per-release)

## 1. Core Design Philosophy: "Minimalist Canvas, Personal Story"

This portfolio will blend two distinct aesthetics:

**The Foundation (Minimalist Canvas):** Inspired by Keita Yamada, the core layout will be clean, spacious, and built on a strong grid. We will use negative space intentionally to let the content—especially the photography—breathe and command attention. The structure will feel professional, organized, and deliberate.

**The Accents (Personal Story):** Inspired by Seán Halpin, we will layer personal, warm, and interactive elements on top of the minimalist foundation. The typography, accent colors, and micro-interactions will convey approachability, creativity, and a clear narrative.

Every design decision should serve this dual purpose: to present Abhiyan as a serious, detail-oriented engineer and a memorable, creative individual.

## 2. Brand Identity

### 2.1. Color Palette

The palette is designed to be professional, warm, and timeless. It supports both light and dark modes seamlessly with a Yellow + Blue light theme and Purple + Green dark theme.

**Light Theme (Yellow + Blue):**

- Background: Light Blue-Gray - `#F1F5F9`
- Navbar: Warm Cream - `#FFFBEB`
- Surface: Pure White - `#FFFFFF`
- Text: Dark Slate - `#0F172A`
- Text Secondary: Slate Gray - `#64748B`
- Text Muted: Light Gray - `#A0AEC0`
- Border: Warm Border - `#A8A29E`
- Primary Accent: Warm Yellow - `#F9A825`
- Secondary Accent: Blue - `#3B82F6`

**Dark Theme (Purple + Green):**

- Background: Dark Slate - `#1A202C`
- Navbar: Dark Slate - `#1A202C`
- Surface: Darker Slate - `#2D3748`
- Text: Light Gray - `#F4F4F7`
- Text Secondary: Medium Gray - `#A0AEC0`
- Text Muted: Muted Gray - `#718096`
- Border: Dark Border - `#4A5568`
- Primary Accent: Purple - `#8B5CF6`
- Secondary Accent: Green - `#22C55E`

**State Colors:**

- Success: `#10B981`
- Warning: `#F59E0B`
- Error: `#EF4444`
- Info: `#3B82F6`
- Focus ring: `#7C3AED` (violet-600), 2px outline

### 2.2. Tailwind Config Reference

The color system is implemented using CSS custom properties and theme-aware utilities:

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Theme-aware colors using CSS custom properties
        "bg-primary": "var(--color-light-background)",
        "bg-surface": "var(--color-light-surface)",
        "bg-card": "var(--color-light-card)",
        "bg-navbar": "var(--color-light-navbar)",
        
        "text-primary": "var(--color-light-text)",
        "text-secondary": "var(--color-light-textSecondary)",
        "text-muted": "var(--color-light-textMuted)",
        
        "border-primary": "var(--color-light-border)",
        "border-secondary": "var(--color-light-borderMuted)",
        
        "accent-primary": "var(--color-primary-light)",
        "accent-secondary": "var(--color-secondary-light)",
        "accent-hover": "var(--color-hover-light)",
        "accent-focus": "var(--color-focus-light)",
        
        "success": "var(--color-success)",
        "warning": "var(--color-warning)",
        "error": "var(--color-error)",
        "info": "var(--color-info)",
      },
      fontFamily: {
        "heading": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.25s ease-out",
        "scale-hover": "scaleHover 0.15s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleHover: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};
```

### 2.3. Typography

Typography is our primary tool for expressing personality. We will use two distinct, modern fonts from Google Fonts.

**Headings Font: Space Grotesk**

- Usage: All `<h1>`, `<h2>`, `<h3>` tags, and major section titles
- Feel: Modern, slightly technical, but with a unique character. Bold and commands attention
- Perfect for headlines like "Hi, I'm Abhiyan."

**Body Font: Inter**

- Usage: All paragraphs, labels, and smaller text elements
- Feel: Extremely clean, readable, and professional. Provides a stable, legible foundation

**Type Scale (Tailwind CSS):**

- h1 (Hero): `text-5xl` to `text-8xl` (clamp(2.5rem, 6vw, 4rem))
- h2 (Section Titles): `text-4xl` (clamp(2rem, 4.5vw, 3rem))
- h3 (Card Titles): `text-xl` (clamp(1.5rem, 3vw, 2rem))
- p (Body): `text-base` or `text-lg` (1.125rem)
- Caption: `text-sm` (0.875rem)

**Rules:**

- Max content width: 72ch
- Line-height: headings 1.1–1.2; body 1.6–1.75
- Tight kerning for display headings only (`tracking-tight`)

## 3. Layout & Spacing

A consistent spacing system creates a calm, organized rhythm.

**Main Container:** All content will live within a centered container to ensure readability on large screens.

- Tailwind: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`

**Section Padding:** Sections will have significant vertical padding to create separation and focus.

- Tailwind: `py-20 md:py-28`

**Component Gaps:** Grids and flex containers will use consistent spacing.

- Tailwind: `gap-8` for project grids, `space-y-4` for vertical stacks

**Base spacing:** Tailwind default (4px unit); prefer `p-6/8/12`, `gap-6/8`
**Section vertical rhythm:** `py-16` (mobile), `py-24` (desktop)
**Grid:** 12-col responsive; content container `max-w-7xl mx-auto px-6 md:px-8`

## 4. Component Design System

This section defines the look and feel of our reusable React components.

### 4.1. Navbar

**Style:** Sticky to the top, with a semi-transparent backdrop-blur effect. This gives it a modern, layered feel.

**Border:** A subtle bottom border (`border-b border-gray-200 dark:border-gray-800`) to lift it off the page content.

**Links:** Will use the Inter font, with a transition-colors effect and a color change to the accent color on hover.

**Classes:**

```html
<header
  class="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-surface/80 backdrop-blur-md"
>
  <div
    class="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between"
  >
    <a class="font-semibold">AS</a>
    <nav class="hidden md:flex gap-6">
      <a
        class="hover:text-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-violet-600"
        >Projects</a
      >
    </nav>
  </div>
</header>
```

### 4.2. Hero Section

**Structure:** Split or centered; background image with gradient overlay.

**Content:** h1 + short tagline + CTA buttons.

**Overlay:**

```html
<div class="relative min-h-[60vh] md:min-h-[80vh]">
  <img
    src="HERO_WEBP"
    class="absolute inset-0 w-full h-full object-cover"
    alt="Landscape by Abhiyan"
  />
  <div
    class="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/30 to-bg/10"
  ></div>
  <div class="relative max-w-7xl mx-auto px-6 md:px-8 py-24">
    <h1 class="text-5xl md:text-6xl font-bold tracking-tight">
      Hi, I'm Abhiyan.
    </h1>
    <p class="mt-4 text-lg text-muted max-w-xl">
      Software Engineer | Cloud + AI Enthusiast | Photographer
    </p>
    <div class="mt-8 flex gap-4">
      <a class="btn-primary">View Projects</a>
      <a class="btn-ghost">See Photography</a>
    </div>
  </div>
</div>
```

### 4.3. Buttons

```css
.btn-primary {
  @apply inline-flex items-center rounded-xl bg-accent px-5 py-3 text-text font-medium hover:brightness-95 transition;
}
.btn-ghost {
  @apply inline-flex items-center rounded-xl border border-black/10 dark:border-white/10 px-5 py-3 hover:bg-black/5 dark:hover:bg-white/5;
}
```

### 4.4. Project Cards

**Inspiration:** The clean, tagged structure from the dark-mode example.

**Structure:** A clean card with a top image, followed by a padded content area.

**Hover Effect:** The card will lift on hover with an enhanced box shadow.

- Tailwind: `shadow-lg hover:shadow-2xl transition-shadow duration-300`

**Tech Stack Pills:** Tags will be styled as small, rounded "pills" with a light background color related to the accent color.

**Classes:**

```html
<article
  class="group rounded-2xl border border-black/5 dark:border-white/10 bg-surface overflow-hidden transition shadow-sm hover:shadow-xl"
>
  <img
    src="PROJECT_IMG_WEBP"
    alt="Project screenshot"
    class="w-full aspect-video object-cover"
  />
  <div class="p-6">
    <h3 class="text-xl font-semibold tracking-tight group-hover:text-accent">
      InfraSight
    </h3>
    <p class="mt-2 text-muted">
      Real-time AWS cost intelligence with interactive visualizations.
    </p>
    <ul class="mt-4 flex flex-wrap gap-2">
      <li class="chip">React</li>
      <li class="chip">FastAPI</li>
      <li class="chip">PostgreSQL</li>
    </ul>
    <div class="mt-6 flex gap-3">
      <a class="btn-primary">Live</a>
      <a class="btn-ghost">GitHub</a>
    </div>
  </div>
</article>
```

**Chip:**

```css
.chip {
  @apply inline-flex items-center rounded-full px-3 py-1 text-sm bg-black/5 dark:bg-white/10;
}
```

### 4.5. Experience Timeline

Vertical line border-l, nodes as dots, staggered entrance.

```html
<section>
  <h2 class="text-4xl font-bold">Experience</h2>
  <ol class="mt-8 relative border-l border-black/10 dark:border-white/10">
    <li class="ml-6 mb-10">
      <span
        class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-accent"
      ></span>
      <h3 class="font-semibold">Graduate Teaching Assistant — GWU</h3>
      <time class="text-sm text-muted">Aug 2024 – Present</time>
      <p class="mt-2 text-muted">
        Assessed weekly assignments, mentored students in algorithms…
      </p>
      <ul class="mt-3 flex flex-wrap gap-2">
        <li class="chip">Python</li>
        <li class="chip">Algorithms</li>
      </ul>
    </li>
  </ol>
</section>
```

### 4.6. Photography Grid + EXIF

Masonry (CSS columns) or responsive grid; hover overlay bottom-right.

```html
<div class="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
  <figure class="mb-4 break-inside-avoid rounded-2xl overflow-hidden group">
    <img
      src="PHOTO_WEBP"
      alt="Photo by Abhiyan"
      class="w-full h-auto group-hover:scale-[1.02] transition"
    />
    <figcaption
      class="absolute bottom-3 right-3 rounded-xl bg-black/60 text-white text-xs px-3 py-1 opacity-0 group-hover:opacity-100 transition"
    >
      Fujifilm X-T3 · 35mm · f/2 · 1/250 · ISO 200
    </figcaption>
  </figure>
</div>
```

### 4.7. Deep Dives (Article)

Narrow measure (60–68ch), larger line-height, code blocks themed.

```html
<article class="prose prose-neutral dark:prose-invert max-w-3xl">
  <h1>AI & Copyright: Where We Are, What's Next</h1>
  <p>…</p>
  <pre><code class="language-js">/* code sample */</code></pre>
</article>
```

### 4.8. Footer (Personal)

3 rows: links / "Currently listening" / playful CTA.

```html
<footer class="mt-24 border-t border-black/5 dark:border-white/10">
  <div class="max-w-7xl mx-auto px-6 md:px-8 py-12 grid gap-4">
    <div class="flex gap-6">
      <a href="LINKEDIN" class="hover:text-accent">LinkedIn</a>
      <a href="GITHUB" class="hover:text-accent">GitHub</a>
      <a href="mailto:EMAIL" class="hover:text-accent">Email</a>
      <a href="/resume.pdf" class="hover:text-accent">Resume</a>
    </div>
    <div class="text-sm text-muted">
      Currently listening:
      <span id="now-playing">Manually updated or Spotify API</span>
    </div>
    <div class="text-sm">Let's build, collaborate, or talk FC Barcelona ⚽</div>
  </div>
</footer>
```

### 4.9. Dark/Light Mode Toggle

**Inspiration:** The sun/moon icon toggle from Keita Yamada's and Seán Halpin's sites.

**Style:** A simple, circular button with a subtle background change on hover. The icon inside will smoothly transition between a sun and a moon.

## 5. Interaction & Animation Philosophy

Animations will be subtle, purposeful, and professional. The goal is to make the site feel responsive and alive without being distracting.

**Tool:** Framer Motion.

**Motion Tokens:**

- Durations: 150ms (tap), 250ms (hover/fade), 400–600ms (page/section)
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (easeOutBack-ish) for entrances; ease-out for simple fades

**Primary Animation:** A gentle fade-in and slide-up animation for sections as the user scrolls into view. This guides the user's focus down the page.

**Micro-interactions:** Simple scale or shadow changes on hover for interactive elements like cards and buttons. This provides satisfying visual feedback.

**Framer Motion Examples:**

- Fade-up on section enter: `initial {opacity:0,y:16} → animate {opacity:1,y:0}` (250ms)
- Cards hover: `scale: 1.02`, shadow to Level 2
- Respect `prefers-reduced-motion`: disable transforms, keep instantaneous fades

### 5.1. Motion Tokens (Constants)

Create a `src/utils/motion.ts` file for consistent motion values:

```typescript
// src/utils/motion.ts
export const motionTokens = {
  // Durations (in milliseconds)
  duration: {
    fast: 150, // tap interactions
    normal: 250, // hover/fade transitions
    slow: 400, // page/section entrances
    slower: 600, // complex animations
  },

  // Easing curves
  easing: {
    easeOut: "cubic-bezier(0.22, 1, 0.36, 1)", // easeOutBack-ish for entrances
    easeIn: "cubic-bezier(0.4, 0, 1, 1)", // easeIn for exits
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)", // easeInOut for toggles
    linear: "linear", // for progress bars
  },

  // Common animation variants
  variants: {
    fadeUp: {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -16 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    scaleHover: {
      initial: { scale: 1 },
      hover: { scale: 1.02 },
    },
    stagger: {
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
  },

  // Reduced motion support
  reducedMotion: {
    duration: 0,
    ease: "linear",
  },
} as const;

// Helper function to respect user's motion preferences
export const getMotionConfig = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return prefersReducedMotion ? motionTokens.reducedMotion : motionTokens;
};
```

## 6. Content, Voice & Imagery

### 6.1. Voice & Tone

- **Hero:** concise, confident, warm. E.g., "Hi, I'm Abhiyan—Software Engineer, Photographer, and systems thinker."
- **Projects:** impact-first, then tech. One line "what/why," one line "how/impact," tech pills under.
- **About:** Kathmandu → GWU journey; connect photography & football to discipline, teamwork, and aesthetics.
- **Deep Dives:** professor-mode clarity; diagrams where useful.

### 6.2. Photography Guidelines

- Use your photos in hero and dividers
- Formats: WebP primary, fallback jpg; target hero <350KB with smart compression
- Focal point safe area: center-left (for hero text on right)
- Gallery: Masonry 2–3 cols (mobile → desktop)
- Lightbox with caption + EXIF
- Color grading: keep natural; avoid heavy filters that fight the UI palette

### 6.3. Content Strategy for Images

**Naming Convention:**

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

**Storage Strategy:**

- **Local Development:** Store in `/public/images/` for fast iteration
- **Production:** Consider CDN (Cloudinary, AWS S3) for better performance
- **Optimization:** Use tools like `sharp` or `imagemin` for WebP conversion
- **Responsive Images:** Generate multiple sizes (400w, 800w, 1200w, 1600w)

**Image Metadata Structure:**

```typescript
// src/types/image.ts
export interface ImageMetadata {
  src: string;
  alt: string;
  width: number;
  height: number;
  format: "webp" | "jpg" | "png";
  exif?: {
    camera: string;
    lens: string;
    settings: string;
    location?: string;
    date: string;
  };
}
```

## 7. Dark Mode Strategy

Add `class="dark"` on `<html>` (controlled via toggle + localStorage).

Only semantic tokens change; component classes use `bg-surface`, `text-muted`, etc.

Images: prefer the same images; overlays increase in darkness for text contrast in dark mode.

## 8. Accessibility Checklist

- **Contrast AA:** text vs background ≥ 4.5:1 (chips ≥ 3:1)
- **Focus visible** on all interactive elements
- **Keyboard navigation:** skip-link at page top (`href="#content"`)
- **prefers-reduced-motion:** disable transforms, keep simple fades
- **Alt text:** meaningful for photos (location/mood/subject)
- **Link text:** descriptive (avoid "click here")

## 9. SEO & Social

**Title format:** Abhiyan Sainju – Software Engineer & Photographer

**Meta description:** "Software Engineer (Cloud + AI) and Photographer. Projects, deep dives, and photography by Abhiyan Sainju."

**Open Graph:**

- `og:image`: dedicated 1200×630 banner (use hero photo with name overlay)
- `og:type`: website

**Favicon:** simple "AS" monogram on accent circle

## 10. Performance & Assets

**Budgets:** First load JS < 200KB gzipped; hero image < 350KB

Use WebP/AVIF; lazy-load gallery (`loading="lazy"`)

Preload heading font (woff2), swap body font

Code-split deep dives route

## 11. Data-Viz Style (Deep Dives)

**Palette:** grayscale lines + accent highlights

**Gridlines** thin, labels small; annotate insights with callouts (accent)

**Animations:** draw-in line 250ms; hover tooltip with clear contrast

## 12. Micro-Patterns & Easter Eggs

- **Tech stack pills:** lowercase text, even spacing, wrap on small screens
- **Football Easter egg:** on click, CSS/JS bounce across footer area only (no layout shift)
- **Abhiyan Bot (future):** chat window bottom-right, minimal glass card, follows color tokens

## 13. Code & File Conventions

**File names:** PascalCase for components, kebab-case for assets

**Collocate** component styles (via Tailwind + small CSS layers if needed)

**Reusable utilities:** `components/ui` (Button, Chip, Card, Section)

**Content as data:** `src/data/projects.ts`, `src/data/experience.ts`

### Section Wrapper Component

```jsx
export const Section = ({
  title,
  children,
  kicker,
}: {
  title: string,
  kicker?: string,
  children: ReactNode,
}) => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      {kicker && (
        <p className="uppercase tracking-widest text-xs text-muted">{kicker}</p>
      )}
      <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);
```

## 14. Page Layouts (Blueprints)

### Home

Hero → Projects (top 3) → Photography teaser → About → Footer

### Projects

Grid → Project detail (hero img, problem, solution, impact, stack, links)

### Photography

Masonry grid → Lightbox → EXIF overlay

### About

Portrait + narrative → Kathmandu→DC timeline/map → fun facts (soccer, travel)

### Deep Dives

Article list → Detail with ToC, code highlighting, diagrams

### 404

Simple: "Lost the trail?" button back home (use a subtle photo)

## 15. Future Extensibility

### 15.1. Blog/MDX Integration

**Path:** `/blog` route with MDX support for technical deep dives

**Implementation Strategy:**

```typescript
// src/pages/blog/[slug].tsx
import { MDXRemote } from "next-mdx-remote";
import { motion } from "framer-motion";

// Components for MDX content
const components = {
  h1: (props) => <h1 className="text-4xl font-bold mb-6" {...props} />,
  p: (props) => <p className="text-lg leading-relaxed mb-4" {...props} />,
  // ... other components
};
```

**File Structure:**

```
/content/blog/
├── ai-copyright-deep-dive.mdx
├── cloud-architecture-patterns.mdx
└── photography-technique-guide.mdx
```

### 15.2. Spotify API Integration

**"Currently Listening" Feature:**

```typescript
// src/hooks/useSpotifyNowPlaying.ts
export const useSpotifyNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    // Spotify Web API integration
    // Refresh every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  return nowPlaying;
};
```

### 15.3. Analytics & Performance Monitoring

**Tools to integrate:**

- **Analytics:** Vercel Analytics or Google Analytics 4
- **Performance:** Web Vitals monitoring
- **Error Tracking:** Sentry for production error tracking

### 15.4. CMS Integration (Optional)

**For non-technical content updates:**

- **Sanity.io** for photography metadata
- **Contentful** for project descriptions
- **Strapi** for self-hosted content management

### 15.5. Advanced Features

**Future enhancements:**

- **Dark mode scheduling:** Auto-switch based on time of day
- **Reading progress:** For long-form content
- **Search functionality:** Algolia or local search
- **Newsletter signup:** ConvertKit or Mailchimp integration
- **Contact form:** Netlify Forms or Formspree

## 16. QA Checklist (per release)

- [ ] All pages pass axe DevTools (no critical issues)
- [ ] Tab order sensible; focus ring visible
- [ ] Light/dark contrasts AA
- [ ] Mobile nav works (iOS/Android)
- [ ] Images lazy-load; hero < 350KB
- [ ] OG image renders on Twitter/LinkedIn cards
- [ ] No CLS (layout shifts) on hero/buttons

---

This Design Document will be our reference throughout the build. It ensures that every element we create is consistent, beautiful, and aligned with our core vision.
