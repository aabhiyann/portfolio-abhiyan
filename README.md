# Abhiyan Sainju — Portfolio

Personal portfolio built with **React 19**, **TypeScript**, **Vite 7**, and **Tailwind CSS 4**.

**Live:** [abhiyansainju.com](https://www.abhiyansainju.com)

---

## Features

- **Interactive Terminal** — live CLI interface on the hero; supports `help`, `about`, `projects`, `experience`, `clear`
- **Case Studies** — in-depth writeups with architecture diagrams (Mermaid), metrics, and tech decisions for each project
- **Resume Page** — embedded PDF viewer with one-click download and new-tab fallback
- **Deep Dives** — long-form technical articles with syntax-highlighted code blocks and auto-generated table of contents
- **AI Assistant** — RAG-style chatbot trained on resume and project data via a system prompt
- **Dark / Light Mode** — fully theme-aware with persistent user preference via localStorage
- **Photography** — street and urban photo gallery with masonry layout and lightbox

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Core** | React 19, TypeScript, Vite 7 |
| **Styling** | Tailwind CSS 4, CSS custom properties (semantic design tokens) |
| **Animation** | Framer Motion 12 |
| **State** | Zustand (localStorage persistence, Redux DevTools) |
| **Icons** | Lucide React |
| **Diagrams** | Mermaid (theme-aware) |
| **Tooling** | ESLint, Prettier, Husky, Commitlint (Conventional Commits) |
| **Deployment** | Vercel |

---

## Quick Start

```bash
git clone https://github.com/aabhiyann/portfolio-abhiyan.git
cd portfolio-abhiyan
npm install
npm run dev
```

Dev server runs at `http://localhost:5173`

```bash
npm run build    # production build
npm run preview  # preview production build locally
```

---

## Project Structure

```
src/
├── components/       # Shared UI components
│   ├── ui/           # Design system primitives (Button, Chip, Card...)
│   ├── markdown/     # Markdown renderer with syntax highlighting
│   └── Terminal/     # Interactive terminal command registry
├── pages/            # Route-level page components
├── data/             # Static content (projects, resume context, deep dives)
└── utils/            # Helpers (motion tokens, syntax highlight, cn)
content/              # Case study and deep dive markdown files
```

---

## Git Workflow

- Conventional Commits enforced via Commitlint + Husky pre-commit hooks
- lint-staged runs ESLint + Prettier on all staged `.ts`/`.tsx` files before every commit
- Branch naming: `feature/`, `fix/`, `style/`, `audit/`

---

## Projects Showcased

| Project | Stack | Highlight |
|---------|-------|-----------|
| **InfraSight** | React, FastAPI, PostgreSQL, Docker | Linear regression cost forecasting; 95% accuracy |
| **TalkifyDocs** | Next.js, Gemini, Groq, pgvector | RAG pipeline; sub-second responses at $0/mo |
| **Audio CNN** | PyTorch, ESC-50 | 92% classification accuracy; +26% over transfer learning baseline |
| **MelodyHub** | Node.js, Socket.IO, Spotify API | 100+ concurrent users, <100ms sync latency |

---

## License

© 2026 Abhiyan Sainju. All rights reserved.
