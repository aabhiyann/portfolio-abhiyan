# Contributing Guide

This document provides guidelines for contributing to the portfolio project, including branching, commits, and pull requests.

---

## Part 1: Branching Strategy

### 1.1. Overview

This project uses a hierarchical branching strategy to support feature development and maintain a clean code history.

### 1.2. Branch Naming Convention

*   **Format**: `{type}/{level}/{feature-description}`
*   **Type**: `feat`, `fix`, `refactor`, `docs`, `test`
*   **Level**: `l1`, `l2`, `l3` (representing hierarchy levels)
*   **Feature**: kebab-case description

**Examples**:

*   `feat/l1/theme-toggle-timeline` - Main feature branch
*   `feat/l2/footer-integration` - Sub-feature of theme toggle
*   `fix/l1/accessibility-improvements` - Bug fix at top level

### 1.3. Workflow

1.  Create a feature branch from the appropriate parent (`main` for L1, L1 for L2, etc.).
2.  Make changes and commit using the Conventional Commits standard.
3.  Open a Pull Request to merge your feature branch into its parent.

---

## Part 2: Conventional Commits

*   **Format**: `type(scope?): subject`
*   **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
*   **Examples**:
    *   `feat(projects): add ProjectCard and grid layout`
    *   `fix(navbar): correct mobile padding`

Commit messages are enforced with commitlint via a Husky `commit-msg` hook.

---

## Part 3: Pull Request (PR) Process

### 3.1. Opening a PR

*   Open PRs from your feature branch into its parent branch (e.g., `feat/l2/footer-integration` -> `feat/l1/theme-toggle-timeline`).
*   The title should follow the Conventional Commits format.

### 3.2. PR Template

Use the following template for your PR descriptions to provide context for reviewers.

```markdown
# 🚀 [Your Feature Title]

## 📋 Overview

A brief description of the feature or fix.

## ✨ Key Features Added

- Feature 1
- Feature 2

## 📊 Technical Improvements

- Improvement 1
- Improvement 2

## 🧪 Testing & Quality Assurance

- [ ] All features implemented and tested
- [ ] Documentation updated
- [ ] Build process optimized

## 🚀 Deployment Ready

Is this PR ready for production deployment?
```

### 3.3. PR Summary Example

An example of a well-written PR summary:

```markdown
# 🚀 Portfolio v2.0 - Complete Feature Set with Professional Photography

## ✨ What's New

### 📸 Professional Photography Gallery

- **Real EXIF Data**: Authentic camera settings displayed.
- **Lightbox Gallery**: Full-screen viewing with navigation.
- **Image Optimization**: 95%+ size reduction with WebP.

### 🎨 Complete Design System

- **Design Tokens**: Centralized colors, typography, and motion.
- **Dark/Light Mode**: Smooth theme switching.

### 🔧 Developer Experience

- **Automation Scripts**: For image optimization and EXIF extraction.
- **TypeScript Support**: Type-safe development.
```

---

## Part 4: Styling Standards

### 4.1. Core Principles

1.  **Single Source of Truth**: All styling must reference the design system (`src/design/`).
2.  **Component-First Approach**: All components must be TypeScript with proper interfaces.
3.  **Theme-Aware Styling**: All components must support theme switching.

### 4.2. Color & Spacing

*   **Colors:** Use `colorUtils` for theme-aware colors. Do not use hardcoded hex values.
*   **Spacing:** Use the `designSystem.spacing` scale for all `padding`, `margin`, and `gap` properties.

### 4.3. Typography

*   Use the standardized `Typography` component instead of styling `h1`, `p`, etc., directly.

### 4.4. Enforcement

*   **Linting:** ESLint rules are in place to prevent hardcoded styles.
*   **Code Review:** PRs will be checked for adherence to these standards.
```
