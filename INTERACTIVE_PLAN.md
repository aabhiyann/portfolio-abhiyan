Part 1: Core Strategy & Vision
Project Mission: To build a unique, interactive personal brand hub that establishes Abhiyan Sainju as a "Creative Software Engineer." The site will serve as a memorable tool for professional opportunities by demonstrating technical excellence, design sensibility, and a unique personal story.

Target Audience: Technical Recruiters, Hiring Managers, Fellow Developers.

Core Narrative: The fusion of a logical, detail-oriented engineer with the creative, perceptive eye of a photographer.

Part 2: Final Brand Identity & Design System
Based on our entire conversation, we are locking in the "Kathmandu Fog" palette. It perfectly balances professionalism (the calm blue/gray base) with a memorable, personal story (the warm pink accent).

Final Color Palette: "Kathmandu Fog"

Base (Inspired by Coastal Fog):

Light Mode Background: Soft Off-White (#F8FAFC)

Dark Mode Background: Deep Slate (#1E2B3A)

Text (Light): Charcoal (#334155)

Text (Dark): Light Gray (#E2E8F0)

Accent (Inspired by Himalayan Sunrise):

Primary Accent: Warm Pink (#F472B6)

Usage: For key interactive elements, links on hover, and highlights.

Typography:

Headings: Space Grotesk

Body: Inter

Design Principles:

Consistency: The same grid, padding, and font hierarchy across all views.

Accessibility: Semantic HTML, visible focus states, AA-compliant color contrast, and respect for prefers-reduced-motion.

Performance: Lazy-load images, use WebP/AVIF formats, and keep the initial JS bundle under 200KB.

Part 3: Technical Architecture & Tools
Site Architecture: A Multi-View Single Page Application (SPA) to provide a seamless user experience with distinct sections that feel like separate pages.

Framework: React + TypeScript + Vite

Routing: React Router

Styling: Tailwind CSS with our custom design tokens.

Animation: Framer Motion

Interactive Tilt: vanilla-tilt.js

AI Integration: Gemini API

Deployment: Vercel

Part 4: The "WOW" Feature Implementation Plan
This is the detailed breakdown for each signature interactive element.

FeatureLocationWhy It Works for YouToolsImplementation Notes
1. Interactive Day/Night TimelineGlobal FooterSignature "Wow" Factor. Links to photography (light/dark) and shows advanced UI skills.React State, JS DateAuto-sets to user's time on load. Draggable handle overrides the theme. Include a fallback sun/moon icon for accessibility.
2. Scroll-Driven Journey MapAbout PageUnique Storytelling. Transforms your bio from text into an engaging story, making your journey from Kathmandu to DC memorable.Framer Motion, Intersection ObserverAnimate nodes and connecting lines as they scroll into the viewport.
3. Project Card 3D TiltProjects PageModern & Playful. Adds a satisfying, modern micro-interaction that makes the project grid feel alive and premium.vanilla-tilt.js or CSS TransformsApply a subtle 3D tilt effect and a soft accent glow on hover.
4. Photography EXIF RevealPhotography PageFuses Passions. Subtly connects your technical side (data) with your artistic side (photography). Shows professionalism.Tailwind CSS (hover states)A semi-transparent overlay with EXIF data fades in on the bottom of the image on hover.
5. Sticky Accent HighlightsSection TitlesPolished & Professional. A subtle animation that guides the user's eye and makes the page feel dynamic and responsive.Intersection ObserverAs a section's <h2> title enters the viewport, animate a brief accent-colored glow or underline.
6. The "Living" BackgroundHero SectionAtmospheric & Impressive. Creates an immediate high-end feel and demonstrates mastery of the HTML Canvas API.HTML Canvas, requestAnimationFrameA subtle particle field that gently reacts to the user's cursor movements.

Export to Sheets
Part 5: Phased Development Roadmap & Workflow
This is our week-by-week plan to build the entire application.

Git Workflow:

Branches: main (production), develop (staging), feature/* (e.g., feature/journey-map).

Commits: Conventional Commits (feat(footer): add interactive timeline).

Week 1: Setup & The Static Foundation
Tasks:

Initialize React/Vite project with TypeScript.

Install all dependencies: Tailwind, Framer Motion, React Router.

Configure tailwind.config.js with our final "Kathmandu Fog" design tokens.

Build the static, responsive layouts for all pages/views (Home, Projects, About, Photography) with placeholder content.

Create the global Navbar and Footer components.

Week 2: Core "WOW" Feature - The Timeline
Tasks:

Create a new feature/interactive-timeline branch.

Build the final, polished version of the interactive Day/Night Timeline component in the footer.

Ensure it correctly sets the theme automatically and allows for manual override.

Week 3: Bringing the Pages to Life
Tasks:

Projects Page: Implement the 3D tilt effect on the project cards.

Photography Page: Implement the EXIF data reveal on hover for all photos.

About Page: Build the scroll-driven Journey Map, animating each step of your story.

Week 4: The Final Polish & Animation Layer
Tasks:

Integrate the "Living" Background into the Hero section.

Implement the "Sticky Accent Highlights" for all section titles.

Add all remaining Framer Motion page transitions and micro-interactions.

Week 5: AI Integration, QA & Deployment
Tasks:

Integrate the "AI Concierge" chatbot.

Conduct a full QA check using the checklist (browser testing, mobile testing, accessibility audit).

Run a final performance audit with Lighthouse.

Merge develop into main and deploy to Vercel. Connect your custom domain.
