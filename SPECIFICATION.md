# Project Specification

This document provides a comprehensive specification for the design, structure, components, and interactions of the Abhiyan Sainju portfolio website.

---

## Part 1: Project Overview

**Version:** 1.0  
**Date:** September 25, 2025  
**Owner:** Abhiyan Sainju

### 1.1. Project Goal & Vision

The goal is to design, develop, and deploy a unique, professional portfolio website that serves as a personal brand hub. The site will showcase Abhiyan Sainju's identity as a skilled **Software Engineer** (projects, experience), a creative **Photographer** (gallery with EXIF details), and a critical **Thinker** (deep dives, journey from Kathmandu → DC).

This project moves beyond a simple digital resume to combine professionalism, creativity, and personality into a memorable site that recruiters and professional connections will remember.

### 1.2. Technology & Tools

| Category         | Tool / Technology | Purpose                                                                 |
| ---------------- | ----------------- | ----------------------------------------------------------------------- |
| Framework        | React (with Vite) | For building a modern, fast, component-based user interface.            |
| Styling          | Tailwind CSS      | For a utility-first, fully custom, and responsive design system.      |
| Animations       | Framer Motion     | To add polished, professional, and fluid animations.                    |
| Deployment       | Vercel            | For seamless, continuous deployment connected to the Git repository.    |
| Domain           | abhiyansainju.com | For a professional and branded online presence.                         |
| Version Control  | Git & GitHub      | For disciplined code management and collaboration.                      |
| Project Tracking | GitHub Projects   | For task and progress tracking using a Kanban board.                    |

---

## Part 2: Requirements

### 2.1. Purpose

This document provides a comprehensive specification for the design, structure, components, and interactions of the Abhiyan Sainju portfolio website. It merges all prior plans, inspirations, and technical details into one definitive reference for both designers and developers.

The goal is to ensure consistency, clarity, and scalability across the site.

### 2.2. Inspirations & References

The portfolio draws inspiration from:

- **Keita Yamada** (minimalist, motion-focused): Clean grid layouts, subtle scroll animations, smooth dark/light mode toggle.
- **Seán Halpin** (personal warmth, storytelling): Rounded accents, friendly typography, personal touches, narrative-driven sections.
- **Apple / Stripe websites**: Crisp transitions, focus on whitespace, high-res photography integration.

The end result should feel modern, approachable, and distinctly personal.

### 2.3. Site Structure (Pages & Routes)

*   **Home (/)**: Hero, Projects teaser, Photography teaser, About teaser, Footer.
*   **Projects (/projects)**: Grid of all projects.
*   **Photography (/photography)**: Masonry gallery, Lightbox view with EXIF data.
*   **About (/about)**: Portrait, personal story, timeline, fun facts.
*   **Deep Dives (/deep-dives)**: List of essays/visualizations.
*   **404 Page (/404)**: Friendly error message and CTA.

---

## Part 3: Design Document

### 3.1. Core Design Philosophy: "Minimalist Canvas, Personal Story"

This portfolio will blend two distinct aesthetics:

*   **The Foundation (Minimalist Canvas):** Inspired by Keita Yamada, the core layout will be clean, spacious, and built on a strong grid.
*   **The Accents (Personal Story):** Inspired by Seán Halpin, we will layer personal, warm, and interactive elements on top.

### 3.2. Brand Identity & Design System

*   **Color Palette:** The project has multiple themes, including a default "Yellow + Blue" and the planned "Kathmandu Fog". The system is built on CSS custom properties for theme-awareness.
*   **Typography:** Headings use `Space Grotesk`, and body text uses `Inter`.
*   **Layout & Spacing:** A consistent spacing system based on a 4px unit is used throughout.

### 3.3. Component Design System

Reusable React components for `Navbar`, `Hero`, `Buttons`, `Project Cards`, `Timeline`, `Photography Grid`, and `Footer` have been designed and implemented.

### 3.4. Interaction & Animation Philosophy

Animations are subtle and purposeful, implemented with Framer Motion. This includes fade-in-up animations on scroll and micro-interactions on hover.

---

## Part 4: Design System Details

This section provides details on the implemented design system.

### 4.1. Architecture

The design system is structured in `src/design` and `src/components/ui`, with a `ThemeContext` for state management.

### 4.2. Color System

The system supports multiple themes (`default`, `kathmanduFog`, `creativeVoltage`) via CSS variables.

### 4.3. Typography, Spacing, and other Systems

The system defines scales for `fontSize`, `fontWeight`, `lineHeight`, `spacing`, `borderRadius`, and `shadows`.

---

## Part 5: Component Migration Guide

This section documents the migration from inconsistent styling to a standardized design system approach.

*   **Completed Components:** `Button`, `Card`, `Typography`, `Chip`, `Navbar`, `Footer`.
*   **Migration Patterns:** Components were converted to TypeScript, integrated with the design system, and made theme-aware.

---

## Part 6: Requirements Verification

This checklist confirms that all requirements from the planning phases have been met.

*   [x] **Phase 1: Foundation & Brand Identity (MVP)**
*   [x] **Phase 2: Core Content & Interactivity**
*   [x] **Phase 3: The "Uniquely Abhiyan" Layer**
*   [x] **Phase 4: Final Polish & Deployment**
*   [x] **All Design Document specifications met**
*   [x] **All README.md features included**
*   [x] **Performance and accessibility optimized**

**Summary:** The portfolio is feature-complete and ready for deployment, with the only deviation being the default color palette.
