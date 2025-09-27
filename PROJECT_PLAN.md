# Project Plan: Interactive Portfolio

This document provides a comprehensive overview and development plan for the interactive portfolio website for Abhiyan Sainju.

---

## Part 1: Core Strategy & Vision

*   **Project Mission:** To build a unique, interactive personal brand hub that establishes Abhiyan Sainju as a "Creative Software Engineer." The site will serve as a memorable tool for professional opportunities by demonstrating technical excellence, design sensibility, and a unique personal story.
*   **Target Audience:** Technical Recruiters, Hiring Managers, Fellow Developers.
*   **Core Narrative:** The fusion of a logical, detail-oriented engineer with the creative, perceptive eye of a photographer.

---

## Part 2: Final Brand Identity & Design System

This section outlines the design system, including the planned "Kathmandu Fog" palette and the currently implemented "Vibrant" palette.

### 2.1. Planned Palette: "Kathmandu Fog"

This palette is designed to be professional, minimalist, and personal.

*   **Base (Inspired by Coastal Fog):**
    *   Light Mode Background: Soft Off-White (`#F8FAFC`)
    *   Dark Mode Background: Deep Slate (`#1E2B3A`)
    *   Text (Light): Charcoal (`#334155`)
    *   Text (Dark): Light Gray (`#E2E8F0`)
*   **Accent (Inspired by Himalayan Sunrise):**
    *   Primary Accent: Warm Pink (`#F472B6`)

### 2.2. Implemented Palette: "Vibrant Default"

This is the palette currently implemented in the codebase. It is more energetic and high-contrast.

*   **Light Theme (Yellow + Blue):**
    *   Background: `#f1f5f9`
    *   Navbar: `#fffbeb`
    *   Text: `#0f172a`
    *   Primary Accent: `#f9a825` (Yellow)
    *   Secondary Accent: `#3b82f6` (Blue)
*   **Dark Theme (Purple + Green):**
    *   Background: `#1a202c`
    *   Text: `#f4f4f7`
    *   Primary Accent: `#8b5cf6` (Purple)
    *   Secondary Accent: `#22c55e` (Green)

### 2.3. Typography & Design Principles

*   **Typography:**
    *   Headings: `Space Grotesk`
    *   Body: `Inter`
*   **Design Principles:**
    *   **Consistency:** The same grid, padding, and font hierarchy across all views.
    *   **Accessibility:** Semantic HTML, visible focus states, AA-compliant color contrast, and respect for `prefers-reduced-motion`.
    *   **Performance:** Lazy-load images, use WebP/AVIF formats, and keep the initial JS bundle under 200KB.

---

## Part 3: Technical Architecture & Tools

*   **Site Architecture:** A Multi-View Single Page Application (SPA).
*   **Framework:** React + TypeScript + Vite
*   **Routing:** React Router
*   **Styling:** Tailwind CSS with custom design tokens.
*   **Animation:** Framer Motion
*   **Interactive Tilt:** vanilla-tilt.js
*   **AI Integration:** Gemini API
*   **Deployment:** Vercel

---

## Part 4: Phased Development Roadmap & Workflow

This is our week-by-week plan to build the entire application.

*   **Git Workflow:**
    *   Branches: `main` (production), `develop` (staging), `feature/*` (e.g., `feature/journey-map`).
    *   Commits: Conventional Commits (e.g., `feat(footer): add interactive timeline`).

### Week 1: Setup & The Static Foundation

*   **Goal:** Establish the project's technical foundation and create the static structure of the site.
*   **Tasks:**
    1.  Initialize React/Vite project with TypeScript.
    2.  Install all dependencies: Tailwind, Framer Motion, React Router, `vanilla-tilt`.
    3.  Configure `tailwind.config.js` with the "Kathmandu Fog" design tokens.
    4.  Build the static, responsive layouts for all pages/views with placeholder content.
    5.  Create the global `Navbar` and `Footer` components.

### Week 2: Core "WOW" Feature - The Timeline

*   **Goal:** Implement the interactive day/night timeline in the footer.
*   **Tasks:**
    1.  Create a `feature/interactive-timeline` branch.
    2.  Develop a `ThemeContext` for global theme state management.
    3.  Build the final, polished version of the interactive `ThemeSlider` component in the footer, ensuring it sets the theme automatically and allows for manual override.

### Week 3: Bringing the Pages to Life

*   **Goal:** Implement the core interactive features on the Projects, Photography, and About pages.
*   **Tasks:**
    1.  **Project Card 3D Tilt:** Add a 3D tilt effect to project cards using `vanilla-tilt.js`.
    2.  **Photography EXIF Reveal:** Show EXIF data on image hover using Tailwind CSS `group-hover` states.
    3.  **Scroll-Driven Journey Map:** Animate the journey map on the About page using Framer Motion and `whileInView`.

### Week 4: The Final Polish & Animation Layer

*   **Goal:** Add the final layer of polish and advanced animations.
*   **Tasks:**
    1.  **"Living" Background:** Create an interactive particle background for the hero section using HTML Canvas.
    2.  **Sticky Accent Highlights:** Create a reusable `SectionTitle` component that animates an accent-colored underline when it scrolls into view.
    3.  **Page Transitions:** Add animated transitions between pages using Framer Motion's `AnimatePresence`.

### Week 5: AI Integration, QA & Deployment

*   **Goal:** Integrate the AI chatbot, perform quality assurance, and deploy the application.
*   **Tasks:**
    1.  **AI Concierge:** Integrate a Gemini API-powered chatbot, accessible via a floating action button.
    2.  **Quality Assurance:** Conduct a full QA check (browser testing, mobile testing, accessibility audit).
    3.  **Performance Audit:** Run a final performance audit with Lighthouse.
    4.  **Deployment:** Merge `develop` into `main` and deploy to Vercel.
