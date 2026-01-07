# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2025-01-XX

### Design System Consistency Refactor

This release focuses on establishing consistent design patterns, removing duplicate code, and standardizing styling across the entire portfolio.

### Content Improvements & Professional Polish

- Removed duplicate stats: dropped homepage StatsBar and the \"By The Numbers\" section from About
- Made Contact page professional: replaced emojis with styled bullet points in \"What I Bring\"
- Fixed homepage projects subtitle to accurately reflect project types
- Enhanced Experience timeline by mapping to detailed resume data (achievements, technologies)
- Corrected project data: \"Flush\" → \"Flask\"; improved Multi‑Source Retrieval and Disease Prediction descriptions with concrete metrics
- Clarified \"Why I Teach\" result copy (adds \"versus previous cohorts\")

### Added

- **Reusable Gradient Utility Classes:** Created consolidated gradient overlay classes (`gradient-overlay-image`, `gradient-overlay-card`, `gradient-overlay-image-light`, `gradient-accent-subtle`) in `index.css` to replace duplicate inline gradient patterns.
- **Centralized Content Data:** Added `src/data/Content.ts` for managing shared content like "Current Focus" text, enabling single source of truth.

### Changed

- **Hero Section:** Removed duplicate project cards (InfraSight and TalkifyDocs) from HeroBento component, keeping only the TerminalCard for cleaner hero section.
- **Project Categories:** Standardized category naming to "Full Stack" (with space) across `Projects.ts` and `Projects.tsx` for consistency.
- **Gradient Patterns:** Replaced all inline gradient patterns with reusable utility classes across 7+ files (Home, About, ProjectCard, CaseStudyLayout, and case study pages).
- **Typography:** Standardized heading typography classes in Home and About pages to use consistent patterns (`text-text-primary` instead of `theme-text-primary`, consistent responsive sizing).
- **Spacing:** Standardized section padding from `py-20` to `py-24` in hero section and `py-10` to `py-12` in SkillsSlider for consistency.

### Removed

- **Unused Route Alias:** Removed `/brief` route alias from `App.tsx` as it was not needed.
- **Commented Code:** Removed commented-out `motion` import from `WhyHireMe.tsx`.

### Internal

- **Code Organization:** All design patterns now follow consistent standards for spacing, typography, and visual effects.
- **Maintainability:** Gradient patterns and shared content are now centralized, making future updates easier.

## [Unreleased] - 2025-11-19

This release focuses on a major overhaul of the portfolio's content strategy, performance, and SEO, using project feedback.

### Added

-   **Enhanced AI Chatbot Context:** Upgraded the chatbot's knowledge base with a "supercharged" context, including personality traits, contact info, and explicit system instructions to guide its behavior and tone.
-   **"Chat with my Resume" AI Feature:** Implemented a live, interactive chatbot powered by the Gemini API. The chatbot can answer questions about Abhiyan's skills and experience, providing a direct demonstration of AI integration capabilities.
-   **Critical SEO Functionality:** Implemented `react-helmet-async` to provide unique, descriptive titles and meta tags for every page, significantly improving SEO.
-   **New `<SEO>` Component:** Created a dedicated, type-safe component (`src/components/SEO.tsx`) for managing all page metadata.
-   **Scroll Progress Bar:** Added a new `ScrollProgressBar` component to the main layout for a polished UX on long pages.
-   **Code Splitting:** Implemented `React.lazy()` for all page routes to improve initial load performance.

### Changed

-   **Content Strategy:** Overhauled all project, experience, and article descriptions to focus on a professional, "Engineering Impact" narrative.
-   **Page Transitions:** Enhanced the global page transition animation with a smoother, more dynamic slide-and-fade effect.
-   **Resume Link:** Updated the resume download button to open the PDF in a new tab for better usability.
-   **Article Cards:** The article cards on the homepage now display a summary to be more informative.
-   **Photography Page:** Upgraded the gallery to use a "blur-up" lazy loading effect for better perceived performance.
-   **Photography Page:** Enhanced the image hover overlay with a backdrop-blur effect and added a "Tech Stack" note to the page.

### Fixed

-   **Mobile Menu UX:** The mobile navigation menu now correctly closes after a link is clicked.
-   **Production Build:** Resolved a critical build error caused by an invalid import in the `DeepDives.tsx` page. The project now builds successfully.

### Removed

-   **Old SEO Implementation:** Removed the previous manual `useSeo` hook and `useStructuredData` hook in favor of the new, more robust `react-helmet-async` implementation.
-   **Broken Article Logic:** Removed broken logic for rendering individual article pages, as the new strategy links to external platforms.

### Internal

-   **Development Workflow:** Fixed the pre-commit hook by implementing `lint-staged`. This resolves previous blocking errors and ensures only staged files are linted, improving the local development experience.

### Internal

-   **Development Workflow:** Fixed the pre-commit hook by implementing `lint-staged`. This resolves previous blocking errors and ensures only staged files are linted, improving the local development experience.
