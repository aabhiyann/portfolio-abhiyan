# The Abhiyan Sainju Portfolio

A high-performance, engineer-focused portfolio website built with **React 19**, **Vite 7**, and **Tailwind CSS 4**. Designed with a "Strict Professionalism" philosophy, featuring a live terminal interface, bento grid layout, and PDF resume embedding.

![Portfolio Banner](/Images/portfolio_banner.png)

## ✨ Key Features

### 🚀 Engineering First
- **Terminal Hero Interface**: A live, typing terminal component (`TerminalCard.tsx`) demonstrating CLI proficiency and system architecture skills.
- **Bento Grid Layout**: A static, high-performance grid layout (`HeroBento.tsx`) for immediate visual impact without cognitive overload.
- **"Deep Dives" Technical Content**: A dedicated section for upcoming engineering case studies (e.g., InfraSight, TalkifyDocs).

### 📄 Professional Resume Integration
- **Embedded PDF Viewer**: Dedicated `/resume` page allowing recruiters to view the resume directly in-browser.
- **Smart Actions**: One-click download and "Open in New Tab" functionality.

### 🎨 Modern Design System
- **Strict Professionalism**: "High-Signal / Low-Noise" content strategy.
- **Lucide Icons**: Consistent, lightweight iconography.
- **Glassmorphism & Gradients**: Subtle, premium UI elements using `backdrop-blur` and semantic tokens.
- **Dark/Light Mode**: Fully theme-aware with persistent preferences.

### 📸 Engineering & Art
- **Photography "Texture"**: Photography is integrated as a subtle texture rather than a dominant column, using authentic EXIF data display.
- **Optimization**: WebP primary images with automated optimization scripts.

## 🛠 Tech Stack

- **Core**: React 19, TypeScript, Vite 7
- **Styling**: Tailwind CSS 4, CSS Variables (Semantic Theming)
- **Animation**: Framer Motion 12 (Orchestrated entrance animations)
- **Icons**: Lucide React
- **Tooling**: ESLint, Prettier, Husky (Git Hooks)

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroBento.tsx         # Static grid layout for Hero section
│   ├── TerminalCard.tsx      # Live typing terminal component
│   └── ui/                   # Reusable UI components (Button, Card)
├── pages/
│   ├── Home.tsx              # Landing page with Bento Grid
│   ├── Resume.tsx            # PDF Viewer page
│   └── DeepDives.tsx         # Technical articles section
├── data/
│   ├── projects.ts           # Centralized project data
│   └── articles.ts           # Article metadata
└── utils/
    └── Motion.ts             # Centralized animation tokens
```

## 🏗 Development Workflow

This project follows a professional git workflow:
- **Feature Branches**: `feature/feature-name`
- **Atomic Commits**: Descriptive commit messages (Conventional Commits).
- **Linting**: Automated pre-commit checks via Husky.

## 📄 License

Proprietary to Abhiyan Sainju.
