# Project Plan: Interactive Portfolio

This document provides a comprehensive overview and development plan for the interactive portfolio website for Abhiyan Sainju, based on the latest designer handoff.

---

## Part 1: Core Strategy & Vision

*   **Project Mission:** To build a unique, interactive personal brand hub that establishes Abhiyan Sainju as a "Creative Software Engineer."
*   **Target Audience:** Technical Recruiters, Hiring Managers, Fellow Developers.
*   **Core Narrative:** The fusion of a logical, detail-oriented engineer with the creative, perceptive eye of a photographer.

---

## Part 2: Brand & System Tokens

*   **Official Color Palette:**
    *   **Light Mode ("Kathmandu Fog"):**
        *   Background: `#F8FAFC` (Soft Off-White)
        *   Text: `#334155` (Charcoal)
        *   Accent: `#F472B6` (Warm Pink)
    *   **Dark Mode ("Kyoto Twilight"):**
        *   Background: `#1A202C` (Deep Slate)
        *   Text: `#F4F4F7` (Light Gray)
        *   Primary Accent: `#8B5CF6` (Purple)
        *   Secondary Accent: `#22C55E` (Emerald)
*   **Typography:**
    *   Headings: `Space Grotesk`
    *   Body: `Inter`

---

## Part 3: Technical Architecture & Tools

*   **Framework:** React + TypeScript + Vite
*   **Styling:** Tailwind CSS
*   **Animation:** Framer Motion
*   **Deployment:** Vercel

---

## Part 4: Development Roadmap

This roadmap is based on the signature interactions defined in the designer handoff.

### 1. Foundational Features (Already Implemented)

*   **Living Background (Hero):** A subtle, interactive particle background.
*   **Day/Night Timeline (Footer):** A draggable slider to control the site's theme.
*   **Project Card 3D Tilt:** An interactive tilt effect on project cards.
*   **Photography EXIF Reveal:** An overlay showing camera data on image hover.
*   **Scroll-Driven Animations:** Journey map and other elements animate on scroll.

### 2. New Handoff Features (To Be Implemented)

*   **Task 1: Update Color Palette**
    *   **Goal:** Align the site's theme with the new color tokens from the handoff.
    *   **Action:** Modify `src/index.css` to replace the old color variables.

*   **Task 2: Implement "Project Deconstructor"**
    *   **Goal:** Create a modal that visualizes a project's architecture.
    *   **Actions:**
        1.  Update `src/data/projects.ts` with architecture data.
        2.  Create a `ProjectDeconstructor.tsx` modal component.
        3.  Integrate the modal into the `Projects.tsx` page.

*   **Task 3: Implement "Photography Focus Mode"**
    *   **Goal:** Replace the current lightbox with a pan-and-zoom interface.
    *   **Actions:**
        1.  Install a suitable pan-and-zoom library (e.g., `react-zoom-pan-pinch`).
        2.  Create a `FocusMode.tsx` component.
        3.  Integrate `FocusMode` into `PhotographyGallery.tsx`, replacing the old lightbox.

### 3. Out of Scope (for v1)

*   **AI Concierge:** Enabled as a UI placeholder. The full API integration is deferred to v2.
*   **Live Spotify API:** A placeholder will be used in the footer.
