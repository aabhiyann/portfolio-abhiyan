# Detailed Development Plan

This document provides a comprehensive, step-by-step guide for building the interactive portfolio website, following the vision outlined in `INTERACTIVE_PLAN.md`.

## Principles to Uphold

- **Consistency:** Apply the "Kathmandu Fog" design system uniformly.
- **Accessibility:** Ensure every component is usable by everyone.
- **Performance:** Prioritize fast load times and a smooth user experience.
- **Git Workflow:** Adhere to the `main`, `develop`, `feature/*` branching strategy and Conventional Commits.

---

## Week 1: Setup & The Static Foundation

**Goal:** Establish the project's technical foundation and create the static structure of the site.

### 1. Initialize Project

- **Action:** Create the React project using Vite.
- **Tool:** `npm`
- **Command:**
  ```bash
  npm create vite@latest . -- --template react-ts
  ```
  _(Note: Using `.` to initialize in the current directory)_

### 2. Install Dependencies

- **Action:** Install all necessary libraries.
- **Tool:** `npm`
- **Commands:**

  ```bash
  # Tailwind CSS
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

  # Core application libraries
  npm install react-router-dom framer-motion vanilla-tilt

  # Development tools
  npm install -D @types/vanilla-tilt
  ```

### 3. Configure Tailwind CSS

- **Action:** Infuse the "Kathmandu Fog" design system into Tailwind.
- **File to Edit:** `tailwind.config.js`
- **Steps:**
  1.  Open `tailwind.config.js`.
  2.  Extend the `theme` object to include the final color palette and typography.
  ```javascript
  /** @type {import('tailwindcss').Config} */
  export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", // Enable class-based dark mode
    theme: {
      extend: {
        colors: {
          "light-bg": "#F8FAFC",
          "dark-bg": "#1E2B3A",
          "light-text": "#334155",
          "dark-text": "#E2E8F0",
          accent: "#F472B6",
        },
        fontFamily: {
          heading: ["Space Grotesk", "sans-serif"],
          body: ["Inter", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  ```
  3. Update `index.css` with base styles.

### 4. Build Static Pages & Components

- **Action:** Create the file structure and basic components for each page.
- **Files to Create:**
  - `src/pages/Home.tsx`
  - `src/pages/Projects.tsx`
  - `src/pages/About.tsx`
  - `src/pages/Photography.tsx`
  - `src/components/Navbar.tsx`
  - `src/components/Footer.tsx`
  - `src/components/Layout.tsx`
- **Steps:**
  1.  In `src/App.tsx`, set up the routes using `react-router-dom`.
  2.  Create a `Layout.tsx` component that includes the `Navbar` and `Footer`.
  3.  Each page component should return a simple `div` with its title for now.
  4.  Implement the `Navbar` with navigation links and the `Footer` with placeholder text.

---

## Week 2: Core "WOW" Feature - The Timeline

**Goal:** Implement the interactive day/night timeline in the footer.

### 1. Create Feature Branch

- **Action:** Isolate the development of this feature.
- **Tool:** `git`
- **Command:**
  ```bash
  git checkout -b feature/interactive-timeline
  ```

### 2. Develop Theme Context

- **Action:** Create a global state management for the theme.
- **Files to Create:**
  - `src/contexts/ThemeContext.tsx`
  - `src/contexts/ThemeProvider.tsx`
- **Steps:**
  1.  Create a `ThemeContext` that provides the current theme (`'light'` or `'dark'`) and a function to toggle it.
  2.  Create a `ThemeProvider` that wraps the application and manages the theme state. It should also apply the `dark` class to the `html` element when the theme is dark.

### 3. Build the Timeline Component

- **Action:** Create the interactive timeline.
- **File to Edit:** `src/components/Footer.tsx`
- **Steps:**
  1.  Use `new Date().getHours()` to determine the initial theme based on the user's time of day.
  2.  Build the UI for the timeline, including a draggable handle.
  3.  Use React state to manage the handle's position.
  4.  When the handle is dragged, call the `toggleTheme` function from the `ThemeContext`.
  5.  Include sun and moon icons as accessible fallbacks.

---

## Week 3: Bringing the Pages to Life

**Goal:** Implement the core interactive features on the Projects, Photography, and About pages.

### 1. Project Card 3D Tilt

- **Action:** Add the 3D tilt effect to project cards.
- **File to Create:** `src/components/ProjectCard.tsx`
- **Steps:**

  1.  Create a `ProjectCard.tsx` component that displays project information.
  2.  Use a `useRef` to get a reference to the card element.
  3.  In a `useEffect` hook, initialize `vanilla-tilt` on the element.

  ```tsx
  import VanillaTilt from "vanilla-tilt";
  import { useEffect, useRef } from "react";

  const ProjectCard = () => {
    const tiltRef = useRef(null);

    useEffect(() => {
      if (tiltRef.current) {
        VanillaTilt.init(tiltRef.current, {
          max: 10,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
        });
      }
    }, []);

    return <div ref={tiltRef}>...</div>;
  };
  ```

### 2. Photography EXIF Reveal

- **Action:** Show EXIF data on image hover.
- **File to Edit:** `src/pages/Photography.tsx`
- **Steps:**
  1.  For each image in the gallery, wrap it in a `div` with `position: relative`.
  2.  Create another `div` inside for the overlay. Position it absolutely at the bottom.
  3.  Use Tailwind's `group-hover` utility to fade in the overlay on hover.
  ```html
  <div class="group relative">
    <img src="..." alt="..." />
    <div
      class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100"
    >
      <p>EXIF Data Here</p>
    </div>
  </div>
  ```

### 3. Scroll-Driven Journey Map

- **Action:** Animate the journey map on the About page.
- **File to Edit:** `src/pages/About.tsx`
- **Tools:** `framer-motion`
- **Steps:**

  1.  Structure the journey map with HTML/CSS.
  2.  Use Framer Motion's `motion.div` for each node and connecting line.
  3.  Use the `useInView` hook from `framer-motion` to trigger animations as elements enter the viewport.

  ```tsx
  import { motion } from "framer-motion";
  import { useInView } from "framer-motion";
  import { useRef } from "react";

  const JourneyNode = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        ...
      </motion.div>
    );
  };
  ```

---

## Week 4: The Final Polish & Animation Layer

**Goal:** Add the final layer of polish and advanced animations.

### 1. "Living" Background

- **Action:** Create the interactive particle background for the hero section.
- **File to Create:** `src/components/LivingBackground.tsx`
- **Tools:** HTML `canvas`, `requestAnimationFrame`
- **Steps:**
  1.  Create a component that renders a `<canvas>` element.
  2.  Use a `useRef` to get a reference to the canvas.
  3.  In a `useEffect`, get the 2D context and write the animation loop using `requestAnimationFrame`.
  4.  Create a `Particle` class or object to manage the state of each particle (position, velocity).
  5.  Add a `mousemove` event listener to update a mouse position variable, and use it to influence particle behavior.

### 2. Sticky Accent Highlights

- **Action:** Animate section titles when they scroll into view.
- **File to Create:** `src/components/SectionTitle.tsx`
- **Tools:** `framer-motion`
- **Steps:**
  1.  Create a reusable `SectionTitle` component.
  2.  Similar to the Journey Map, use `useInView` to detect when the title is visible.
  3.  Animate a `motion.div` (styled as an underline or glow) when `isInView` is true.

### 3. Page Transitions

- **Action:** Add animated transitions between pages.
- **File to Edit:** `src/App.tsx`
- **Tools:** `framer-motion`
- **Steps:**
  1.  Wrap the `<Routes>` component with `AnimatePresence` from Framer Motion.
  2.  Add `motion` props to each page component (e.g., `initial`, `animate`, `exit`).

---

## Week 5: AI Integration, QA & Deployment

**Goal:** Integrate the AI chatbot, perform quality assurance, and deploy the application.

### 1. AI Concierge

- **Action:** Add a chatbot to answer questions about you.
- **Tool:** Gemini API
- **Steps:**
  1.  **Important:** You will need to obtain a Gemini API key. Store it securely as an environment variable (e.g., `VITE_GEMINI_API_KEY`).
  2.  Create a `Chatbot.tsx` component.
  3.  Build a simple UI with a message history and an input field.
  4.  When the user sends a message, make a `fetch` call to the Gemini API with a prompt that includes the user's question and some context about you.
  5.  Display the response in the chat history.

### 2. Quality Assurance

- **Action:** Perform a thorough check of the entire site.
- **Checklist:**
  - **Browser Testing:** Test on Chrome, Firefox, and Safari.
  - **Responsive Testing:** Test on mobile, tablet, and desktop screen sizes.
  - **Accessibility Audit:**
    - Check color contrast.
    - Ensure all interactive elements have focus states.
    - Verify semantic HTML.
    - Use a screen reader to navigate the site.
  - **Functionality:** Test every interactive element.

### 3. Performance Audit

- **Action:** Check the site's performance.
- **Tool:** Lighthouse (in Chrome DevTools)
- **Steps:**
  1.  Open Chrome DevTools.
  2.  Go to the "Lighthouse" tab.
  3.  Run a new report.
  4.  Address any issues identified, especially related to image optimization and JavaScript bundle size.

### 4. Deployment

- **Action:** Deploy the site to Vercel.
- **Tool:** `git`, Vercel
- **Steps:**
  1.  Merge the `develop` branch into `main`:
      ```bash
      git checkout main
      git merge develop
      git push
      ```
  2.  Go to the Vercel dashboard and create a new project.
  3.  Connect your GitHub account and select the portfolio repository.
  4.  Vercel will automatically detect the Vite configuration and deploy the site.
  5.  Once deployed, you can add your custom domain in the project settings.
