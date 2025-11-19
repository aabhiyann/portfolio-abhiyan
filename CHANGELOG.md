# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2025-11-19

This release focuses on a major overhaul of the portfolio's content strategy, performance, and SEO, based on expert feedback.

### Added

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
