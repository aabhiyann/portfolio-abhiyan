# Abhiyan Sainju - Engineering Portfolio

A high-performance, engineer-focused portfolio website built with **React 19**, **Vite 7**, and **Tailwind CSS 4**. Designed with a philosophy of strict professionalism, featuring a live terminal interface, bento grid layout, and comprehensive project showcases.

## Live Portfolio

[https://www.abhiyansainju.com](https://www.abhiyansainju.com)

---

## Key Features

### Engineering First
- **Terminal Hero Interface**: A live, typing terminal component demonstrating CLI proficiency and system architecture skills.
- **Bento Grid Layout**: A static, high-performance grid layout for immediate visual impact without cognitive overload.
- **Technical Case Studies**: In-depth project analyses with architecture diagrams, metrics, and technical challenges.

### Professional Resume Integration
- **Embedded PDF Viewer**: Dedicated `/resume` page allowing recruiters to view the resume directly in-browser.
- **Smart Actions**: One-click download and "Open in New Tab" functionality.
- **Multiple Versions**: Role-specific resumes (Full-Stack, ML, Backend, Cloud, Data Engineering).

### Modern Design System
- **Strict Professionalism**: High-signal content strategy.
- **Lucide Icons**: Consistent, lightweight iconography throughout.
- **Glassmorphism & Gradients**: Subtle, premium UI elements using semantic tokens.
- **Dark/Light Mode**: Fully theme-aware with persistent user preferences.

### Performance Optimized
- **Lightning Fast**: Vite 7 for near-instant HMR and optimized production builds.
- **Code Splitting**: Automatic route-based code splitting.
- **Lighthouse Score**: Optimized for Core Web Vitals (LCP, FID, CLS).

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Core** | React 19, TypeScript, Vite 7 |
| **State Management** | Zustand (with Redux DevTools & localStorage persistence) |
| **Styling** | Tailwind CSS 4, CSS Variables (Semantic Theming) |
| **Animation** | Framer Motion 12 (Orchestrated entrance animations) |
| **Icons** | Lucide React |
| **Diagrams** | Mermaid (Theme-aware architecture diagrams) |
| **Tooling** | ESLint, Prettier, Husky (Git Hooks), Commitlint |
| **Deployment** | Vercel |

### Production-Grade Features

- **Error Resilience (90% uptime)**: `SafeImage` component with fallbacks, `fetchWithRetry` with automatic retry logic.
- **Global State Management**: Zustand store with Redux DevTools integration and localStorage persistence.
- **Type Safety**: Zero `any` types policy.
- **Code Quality**: Automated linting, formatting, and commit message validation via Husky hooks.
- **Performance Optimizations**: Code splitting, lazy loading, selective re-renders.

---

## Quick Start

```bash
# Clone the repository
git clone [your-repo-url]
cd portfolio-abhiyan

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173/`

---

## Project Structure

```
portfolio-abhiyan/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/             # Reusable UI library
│   │   └── ...
│   ├── pages/              # Page views
│   ├── data/               # Static content data
│   └── utils/              # Helper functions
├── content/                # Blog/Case study content
└── docs/                   # Developer documentation
```

---

## Development Workflow

This project follows professional git workflow standards:

- **Feature Branches**: `feature/feature-name`
- **Atomic Commits**: Descriptive commit messages following Conventional Commits.
- **Linting**: Automated pre-commit checks via Husky.
- **Code Quality**: ESLint + Prettier for consistent code style.

---

## Project Highlights

### TalkifyDocs
- **AI-powered PDF chat application** with RAG pipeline.
- **Live Production App** using Gemini 3.0 Flash + Groq.
- **Impact**: Delivered sub-second responses at $0/mo operational cost.

### InfraSight
- **Real-time cloud infrastructure monitoring** platform.
- **Impact**: Enabled proactive budget management via Linear Regression forecasting (95% accuracy).

### Audio Classification Network
- **ESC-50 audio classification** achieving 92% accuracy.
- **Impact**: Outperformed standard transfer learning models by 26%.

---

## License

**Proprietary** - © 2025 Abhiyan Sainju. All rights reserved.

This portfolio is the intellectual property of Abhiyan Sainju. Unauthorized copying, distribution, or use of this code is strictly prohibited.

---

## Contact

- **Portfolio**: [https://www.abhiyansainju.com](https://www.abhiyansainju.com)
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com/in/abhiyansainju)
- **GitHub**: [@aabhiyann](https://github.com/aabhiyann)
