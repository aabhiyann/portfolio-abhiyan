# 📑 Requirements Document: The Abhiyan Sainju Portfolio Website

**Version:** 1.0  
**Date:** September 24, 2025  
**Owner:** Abhiyan Sainju

## Table of Contents

- [1. Purpose](#1-purpose)
- [2. Inspirations & References](#2-inspirations--references)
- [3. Site Structure (Pages & Routes)](#3-site-structure-pages--routes)
- [4. Global Design System](#4-global-design-system)
- [5. Components & Sections](#5-components--sections)
- [6. Animations & Interactions](#6-animations--interactions)
- [7. Dark/Light Mode](#7-darklight-mode)
- [8. Content & Voice Guidelines](#8-content--voice-guidelines)
- [9. Performance Requirements](#9-performance-requirements)
- [10. Accessibility](#10-accessibility)
- [11. Future Extensibility](#11-future-extensibility)
- [12. QA Checklist](#12-qa-checklist)

## 1. Purpose

This document provides a comprehensive specification for the design, structure, components, and interactions of the Abhiyan Sainju portfolio website. It merges all prior plans, inspirations, and technical details into one definitive reference for both designers and developers.

The goal is to ensure consistency, clarity, and scalability across the site.

## 2. Inspirations & References

The portfolio draws inspiration from:

- **Keita Yamada** (minimalist, motion-focused): Clean grid layouts, subtle scroll animations, smooth dark/light mode toggle.
- **Seán Halpin** (personal warmth, storytelling): Rounded accents, friendly typography, personal touches, narrative-driven sections.
- **Apple / Stripe websites**: Crisp transitions, focus on whitespace, high-res photography integration.

The end result should feel modern, approachable, and distinctly personal.

## 3. Site Structure (Pages & Routes)

### 3.1 Pages

**Home (/)**

- Hero
- Projects teaser (top 3 projects)
- Photography teaser (masonry preview)
- About teaser (short intro, CTA → About page)
- Footer

**Projects (/projects)**

- Grid of all projects (cards)
- Project detail pages (optional future expansion)

**Photography (/photography)**

- Masonry gallery
- Lightbox view with EXIF data overlay

**About (/about)**

- Portrait image + personal story
- Timeline or map: Kathmandu → D.C. journey
- Fun facts (soccer, photography, travel)

**Deep Dives (/deep-dives)**

- List of essays / visualizations (AI Copyright, Coupon Collector, etc.)
- Article page with typography-focused design

**404 Page (/404)**

- Friendly error message: "Lost the trail?"
- CTA button back to home

## 4. Global Design System

### 4.1 Colors

- **Light Background**: `#F8F7F4`
- **Dark Background**: `#1A1A1A`
- **Accent (primary)**: Warm Orange `#FF7A00`
- **Alt accents**: Emerald `#10B981`, Blue `#3B82F6`
- **Text (light mode)**: `#333333`
- **Text (dark mode)**: `#E0E0E0`

### 4.2 Typography

- **Headings**: Space Grotesk (bold, display scale)
- **Body**: Inter (regular, readable scale)
- **Max width**: 72ch
- **Line-height**: 1.6–1.75 body; 1.1–1.2 headings

### 4.3 Layout & Spacing

- **Max container width**: `max-w-7xl`
- **Section padding**: `py-20 md:py-28`
- **Consistent spacing scale**: multiples of 4 (Tailwind defaults)

## 5. Components & Sections

### 5.1 Header / Navbar

- **Sticky**: Always visible on scroll.
- **Style**: Semi-transparent with backdrop blur.
- **Links**: Projects, Photography, Deep Dives, About.
- **Hover**: Text changes to accent color.
- **Breakpoint**: Collapses to hamburger on < md.

### 5.2 Hero

- **Background**: Full-width image (Abhiyan's photo), with gradient overlay for text readability.
- **Content**:
  - h1: "Hi, I'm Abhiyan."
  - Tagline: "Software Engineer | Cloud + AI Enthusiast | Photographer"
  - Buttons: Primary (View Projects), Ghost (See Photography)
- **Animation**: Fade-up text on load, slight parallax on background image.

### 5.3 Projects Section

- **Card Layout**: 3-column grid desktop, 1-column mobile.
- **Card Elements**:
  - Project image (16:9 screenshot)
  - Title (h3)
  - Short description (1–2 lines)
  - Tech stack pills
  - Buttons: GitHub, Live
- **Hover Animation**:
  - Card lifts with shadow (`hover:shadow-xl`)
  - Title text color → accent
  - Image zooms slightly

### 5.4 Experience Timeline

- Vertical timeline with `border-l` + dots for events.
- Each entry includes: role, org, dates, description, tech pills.
- Animation: staggered fade-up as each item enters viewport.

### 5.5 Photography Grid

- **Layout**: Masonry (CSS columns).
- **Hover**: Slight zoom + EXIF overlay bottom-right.
- **Click**: Opens lightbox with full image + metadata.
- **Lightbox Animations**: Fade-in background, zoom-in image.

### 5.6 Deep Dives

- **List Page**: Minimal list of articles, each with title, short abstract.
- **Detail Page**:
  - Prose class (`prose lg:prose-xl`) for clean typography.
  - Code blocks styled with accent line highlights.
  - ToC in sidebar (sticky on desktop).

### 5.7 Footer

- **Row 1**: Links (LinkedIn, GitHub, Email, Resume).
- **Row 2**: "Currently listening: [track]" (manual update, future Spotify API).
- **Row 3**: Playful CTA → "Let's build, collaborate, or talk FC Barcelona ⚽."
- **Easter Egg**: Clicking ⚽ makes it bounce once across footer.

## 6. Animations & Interactions

### 6.1 Scroll Animations

- Implemented via Framer Motion + Intersection Observer.
- Sections: Fade-up with slight upward motion (`y:16 → 0`, `opacity:0 → 1`).
- Duration: 400ms.
- Stagger: 0.1s between child elements.
- Respect `prefers-reduced-motion`.

### 6.2 Hover Interactions

- **Cards**: shadow lift + slight scale.
- **Buttons**: primary darkens (`brightness-95`), ghost shows subtle bg.
- **Links**: color → accent.

### 6.3 Sticky Elements

- Navbar (always on top).
- Timeline ToC (in Deep Dives detail pages).
- Footer stays at page bottom, not sticky.

### 6.4 Page Transitions

- Smooth fade between pages (Framer Motion AnimatePresence).
- Duration: 300ms.

## 7. Dark/Light Mode

- Toggle with 🌞 / 🌙 icon in navbar.
- Stores preference in localStorage.
- Gradients + overlays adjust for readability.

## 8. Content & Voice Guidelines

- **Hero**: Confident but warm.
- **Projects**: Always impact-first ("what problem solved + impact") → then tech.
- **Photography**: No filters, minimal captions, focus on authenticity.
- **About**: Narrative-driven, personal but professional.
- **Deep Dives**: "Professor mode," clear explanations, diagrams where possible.

## 9. Performance Requirements

- Hero image: < 350KB.
- First load JS bundle: < 200KB gzipped.
- Images lazy-loaded.
- Fonts preloaded.
- Code-splitting for Deep Dives page.

## 10. Accessibility

- Contrast ratios: WCAG AA.
- Focus states visible on all interactive elements.
- Keyboard navigable (skip-link included).
- Reduced motion respected.
- Alt text for all images (location, subject, mood).

## 11. Future Extensibility

- **Spotify API**: Automate "Currently listening."
- **MDX Blog**: For deep dives.
- **Analytics**: Vercel or GA4.
- **CMS**: For projects/photography metadata.

## 12. QA Checklist

- [ ] All pages responsive (mobile, tablet, desktop).
- [ ] Animations run smoothly, no jank.
- [ ] Light/dark mode toggle works.
- [ ] Links functional.
- [ ] OG image renders on LinkedIn/Twitter.
- [ ] No layout shift on load.
- [ ] axe DevTools reports no critical a11y issues.

---

**Document Status**: ✅ Complete  
**Last Updated**: September 25, 2025  
**Next Review**: As needed for new features
