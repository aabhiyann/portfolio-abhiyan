# Detailed Plan: New Designer Handoff Features

This document provides a detailed, step-by-step implementation plan for the new features and changes introduced in `designer_handoff_abhiyan_portfolio.md`.

---

## 1. Feature: Update to New Color Palette

**Goal:** Replace the currently implemented "Vibrant Default" color palette with the new one specified in the handoff to align the project with the latest design vision.

### 1.1. File to Modify

*   `src/index.css`

### 1.2. Detailed Steps

1.  **Read `src/index.css`:** Open the global stylesheet to access the root CSS variables where themes are defined.

2.  **Map New Tokens to Existing Variables:** The handoff uses tokens like `--bg` and `--accent-1`. We need to map these to the existing CSS variables.

3.  **Update CSS Variables:** Replace the color codes for both the light and dark themes with the new values. 

    **Light Mode Mapping (`--bg: #F8FAFC`, `--accent-1: #F9A825`, etc.):**
    ```css
    /* Light Theme: From Handoff */
    --color-light-background: #F8FAFC;
    --color-light-navbar: #FFFFFF; /* Assuming surface color */
    --color-light-surface: #FFFFFF;
    --color-light-card: #FFFFFF;
    --color-light-text: #0F172A;
    --color-light-textSecondary: #64748B; /* Mapped from --muted */
    --color-light-textMuted: #64748B;
    --color-primary-light: #F9A825; /* --accent-1 */
    --color-secondary-light: #3B82F6; /* --accent-2 */
    ```

    **Dark Mode Mapping (`--bg: #1A202C`, `--accent-1: #8B5CF6`, etc.):**
    ```css
    /* Dark Theme: From Handoff */
    --color-dark-background: #1A202C;
    --color-dark-navbar: #0F172A; /* Assuming surface color */
    --color-dark-surface: #0F172A;
    --color-dark-card: #0F172A;
    --color-dark-text: #F4F4F7;
    --color-dark-textSecondary: #A0AEC0; /* Mapped from --muted */
    --color-dark-textMuted: #A0AEC0;
    --color-primary-dark: #8B5CF6; /* --accent-1 */
    --color-secondary-dark: #22C55E; /* --accent-2 */
    ```

4.  **Verify Changes:** After updating, we will need to run the app to visually confirm that all components correctly reflect the new theme across the entire site.

---

## 2. Feature: "Project Deconstructor" Modal

**Goal:** Create a new interactive modal that visualizes a project's architecture, triggered from the project card.

### 2.1. New Files to Create

*   `src/components/ProjectDeconstructor.tsx`
*   `src/components/ui/DiagramNode.tsx`

### 2.2. Files to Modify

*   `src/pages/Projects.tsx`
*   `src/data/projects.ts`

### 2.3. Detailed Steps

1.  **Update Data Structure (`src/data/projects.ts`):**
    *   Modify the `Project` type to include a new optional `architecture` field.
    *   This field will contain an array of `nodes` (e.g., { id: 'frontend', label: 'Frontend' }) and `connections` (e.g., { from: 'frontend', to: 'api' }).
    *   Populate this new field for at least one project to use for development.

2.  **Create Diagram Node Component (`src/components/ui/DiagramNode.tsx`):**
    *   This will be a presentational component for a single block in the diagram.
    *   It will accept props for the label, position, and an `onHover` callback.
    *   It will use `motion.div` for animations and styling.

3.  **Create Deconstructor Modal (`src/components/ProjectDeconstructor.tsx`):**
    *   This component will manage the modal state (open/closed).
    *   It will receive the `architecture` data for a specific project as a prop.
    *   It will use Framer Motion's `AnimatePresence` for the enter/exit animation.
    *   It will render the `DiagramNode` components and draw SVG lines between them for the connections.
    *   It will handle the hover logic: when a node is hovered, it will highlight the node and its connections.

4.  **Integrate into Projects Page (`src/pages/Projects.tsx`):**
    *   Add a new state variable, e.g., `const [deconstructorOpen, setDeconstructorOpen] = useState(false);`.
    *   Add a new button, "Explore Architecture", to the `Card` component for each project.
    *   When this button is clicked, set `deconstructorOpen` to `true` and pass the selected project's architecture data to the `ProjectDeconstructor` modal.
    *   Render the `ProjectDeconstructor` component conditionally based on the `deconstructorOpen` state.

---

## 3. Feature: "Photography Focus Mode"

**Goal:** Replace the simple lightbox in the photography gallery with a more immersive and interactive pan-and-zoom experience.

### 3.1. New Files to Create

*   `src/components/FocusMode.tsx`

### 3.2. Files to Modify

*   `src/components/PhotographyGallery.tsx`

### 3.3. Detailed Steps

1.  **Install a Pan-and-Zoom Library:**
    *   We will need a robust library for this. I will search for a suitable one, but a good candidate is `react-zoom-pan-pinch`.
    *   Run `npm install react-zoom-pan-pinch`.

2.  **Create Focus Mode Component (`src/components/FocusMode.tsx`):**
    *   This component will be a full-screen modal that receives the selected image data as a prop.
    *   It will use the chosen library (e.g., `<TransformWrapper>` and `<TransformComponent>` from `react-zoom-pan-pinch`) to make the image pannable and zoomable.
    *   It will implement UI controls for closing the modal and displaying EXIF data, with logic to fade them out on inactivity.
    *   It will add event listeners for keyboard controls (arrow keys for panning, +/- for zooming) and double-click to zoom.

3.  **Update the Gallery (`src/components/PhotographyGallery.tsx`):**
    *   Import the new `FocusMode` component.
    *   Remove the existing `AnimatePresence` and `motion.div` that constitute the current lightbox modal.
    *   The `selectedImage` state will now be used to control the visibility of the `FocusMode` component.
    *   When an image is clicked (`openLightbox` function), instead of showing the old modal, we will render `<FocusMode image={selectedImage} />`.
    *   The `closeLightbox` function will now simply set `selectedImage` to `null` to close the `FocusMode` modal.

---

## 4. Task: Handle AI Concierge Scope Change

**Goal:** Align the codebase with the designer handoff, which lists the AI Concierge as out of scope for v1.

### 4.1. Files to Modify

*   `src/components/Layout.tsx`

### 4.2. Detailed Steps

1.  **Conditionally Disable the Feature:**
    *   Instead of deleting the components (`AIChatbot.tsx`, `FloatingActionButton.tsx`), we can disable them via a feature flag or simply comment them out in `Layout.tsx`.
    *   This preserves the work for a future version while adhering to the v1 scope.
    *   I will comment out the rendering of `<FloatingActionButton />` and `<AIChatbot />` in `src/components/Layout.tsx`.
