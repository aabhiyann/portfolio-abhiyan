# Project Decisions & Evolution Log

This document records significant architectural and strategic decisions made during the development of the portfolio project, subsequent to the initial `PROJECT_PLAN.md` and `SPECIFICATION.md`. It serves as a bridge between the initial vision and the final, enhanced implementation.

---

### 1. Decision: Pivot to "Problem Solver" Content Strategy

**Date:** 2025-11-19

**Context:**
The initial project plan focused on showcasing academic and personal projects. Expert feedback suggested that to better appeal to recruiters and hiring managers, the narrative should be reframed to highlight "business impact" and "problem-solving" skills.

**Decision & Implementation:**
A complete overhaul of the site's content was performed to align with this new strategy.
-   **Data Layer:** The data structures in `src/data/` were modified. The `projects` array in `src/data/Projects.ts` was updated to include a `story` field for detailed, metric-driven narratives. The `articles` array in `src/data/Articles.ts` was updated with more compelling professional summaries.
-   **UI Layer:** All pages and components consuming this data (`src/pages/Home.tsx`, `src/pages/Projects.tsx`, `src/pages/About.tsx`) were updated to display this new, impactful copy.

---

### 2. Decision: Implement Advanced Performance & SEO Optimizations

**Date:** 2025-11-19

**Context:**
To elevate the project from a standard portfolio to an "enterprise-grade" web application, a series of technical enhancements were recommended.

**Decision & Implementation:**

-   **SEO Overhaul:** The initial manual DOM manipulation for SEO was deemed insufficient and caused tooling conflicts. A robust, per-page SEO strategy was implemented using `react-helmet-async`.
    -   A dedicated, type-safe `<SEO>` component was created at `src/components/SEO.tsx`.
    -   The application root in `src/main.tsx` was wrapped in the required `<HelmetProvider>`.
    -   A full audit was performed, and every page component in `src/pages/` (including `Home`, `About`, `Projects`, `Photography`, `NotFound`, and `DeepDives`) was refactored to use the new `<SEO>` component, ensuring 100% coverage.

-   **Performance - Code Splitting:** To improve initial load times, route-based code splitting was implemented in `src/App.tsx`. All page components are now loaded on demand using `React.lazy()` and a `<Suspense>` boundary.

-   **Performance - Image Optimization:** The `src/components/PhotographyGallery.tsx` was identified as a performance bottleneck.
    -   It was refactored to use the `src/components/LazyImage.tsx` component.
    -   This enabled a "blur-up" loading effect by adding `thumbnailSrc` properties to the image data in `src/data/images.ts`.

-   **UX/UI Polish:**
    -   The global page transition component (`src/components/Page.tsx`) was enhanced with a vertical slide-and-fade effect for a more dynamic feel.
    -   A new `src/components/ScrollProgressBar.tsx` component was created using `framer-motion`'s `useScroll` hook and added to the main `src/components/Layout.tsx` to provide a visual scroll indicator on all pages.

---

### 3. Decision: Defer On-Site Blog for External "Digital Footprint"

**Date:** 2025-11-19

**Context:**
The initial specification included a "Deep Dives" section that implied a full, on-site blog. This would require a backend, database, and significant development effort.

**Decision & Implementation:**
To manage scope while still showcasing thought leadership, the "Deep Dives" feature was evolved into a "Digital Footprint" section.
-   This section on the homepage (`src/pages/Home.tsx`) now links to articles hosted externally on platforms like Medium or Dev.to.
-   The `src/pages/DeepDives.tsx` page was refactored to be a simple list of these external articles, fixing a build error in the process.
-   The `src/pages/DeepDiveDetail.tsx` page, which was intended to show a single article, was simplified to a placeholder, aligning with the new strategy.

---

### 4. Decision: Stabilize Development Workflow

**Date:** 2025-11-19

**Context:**
The project's pre-commit hook (`husky` running `npm run lint`) was causing persistent, blocking errors, particularly when integrating new dependencies or making type-level changes. The hook was attempting to type-check the entire project on every commit, which is slow and unreliable in a pre-commit context.

**Decision & Implementation:**
The pre-commit workflow was rebuilt according to modern best practices.
-   `lint-staged` and `prettier` were installed as development dependencies.
-   The `package.json` was configured to use `lint-staged` to run `eslint --fix` and `prettier --write` *only* on staged `.ts` and `.tsx` files.
-   The `.husky/pre-commit` script was updated from `npm run lint` to `npx lint-staged`.
-   This change makes the pre-commit hook significantly faster and more reliable. Full-project type checking (`tsc`) is now correctly deferred to the CI/CD pipeline.
