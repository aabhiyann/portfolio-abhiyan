# Contributing

## Branching Strategy
- Create a feature branch from `main` for every change (no direct commits to `main`).
- Branch names:
  - Features: `feat/<short-kebab-summary>`
  - Fixes: `fix/<short-kebab-summary>`
  - Chores/Docs/Refactors: `chore/<summary>`, `docs/<summary>`, `refactor/<summary>`
  - Example: `feat/projects-grid`, `fix/navbar-overflow`

## Conventional Commits
- Format: `type(scope?): subject`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
- Examples:
  - `feat(projects): add ProjectCard and grid layout`
  - `fix(navbar): correct mobile padding`

Commit messages are enforced with commitlint (Husky `commit-msg` hook).

## Pull Requests
- Open PRs from your feature branch into `main`.
- Requirements:
  - Pass CI (lint + build).
  - Small, focused changes preferred.
  - Include a short description and screenshots for UI changes.
- Title may mirror the conventional commit for clarity.

## Workflow
1. `git checkout -b feat/<summary>`
2. Make changes; keep commits small and meaningful.
3. Run locally: `npm run lint` and `npm run build`.
4. Push branch and open PR.
5. Address review comments and squash-merge (or rebase) to `main`.
