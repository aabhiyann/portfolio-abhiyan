# Portfolio backlog

Single ordered list: **P0** (do first), **P1** (high value next), **P2** (later / optional).  
Completed audit work is summarized under **Done** for traceability.

---

## Done (audit / recent shipped work)

- Global **CustomCursor** and **ScrollProgressBar** removed from layout; article deep dives keep local reading progress where applicable.
- **Hero**: H1 kept (SWE + AI/ML); **TypeWriter** trimmed (no teaching line); **GPA** removed from homepage-prominent cards; **CTAs** use `Button as={Link}`; **`/now`** teaser from Currently card.
- **Projects**: TalkifyDocs redundant stat removed; **ProjectCard** primary/secondary actions and link hierarchy polished.
- **Copy / section**: “What I Bring”, **Shipped Work**, **Academic Foundation**, updated subtitle.
- **Design system**: DM Sans body, **HeroPhotoCard** / **Mermaid** / `colors.ts` aligned with warm tokens; **DottedBackground** kept as-is.
- **Sitemap**: **`/now`** and **`/uses`** in `vite.config.js` routes and `scripts/generate-sitemap.js` static routes.
- **HeroStats**: GitHub count labeled **approx.** (component exists; **not mounted** on a page until you add it).
- **Routing UX**: **`RouteLoadingFallback`** for lazy-route Suspense (accessible loading state).
- **Git**: Audit branches merged to **`main`** and pushed.

---

## P0 — Do first

| # | Item | Notes |
|---|------|--------|
| 1 | **Restore green `npm run lint`** | Fix parsing error in `scripts/generate-favicon.js` and unused `attempt` in `src/hooks/useAPI.ts` (or adjust ESLint scope). Unblocks CI and future refactors. |
| 2 | **Decide on `HeroStats`** | Either mount **`HeroStats`** on a page (e.g. home) so the approximate GitHub stat is visible, or remove unused component to avoid dead code. |

---

## P1 — High value next

| # | Item | Notes |
|---|------|--------|
| 1 | **Accessibility pass** | Target Lighthouse a11y, keyboard paths, focus order, contrast; add missing ARIA where components need it. |
| 2 | **404 page** | Replace generic not-found with a small branded / terminal-style experience (see `TODO.md`). |
| 3 | **Contact UX** | Replace footer-only **`mailto:`** with a hosted form (e.g. Formspree, EmailJS) + success state. |
| 4 | **Social / SEO verification** | After deploy: confirm Open Graph / Twitter cards (e.g. metatags.io, LinkedIn debugger). |
| 5 | **Analytics** | Enable Vercel Web Analytics / Speed Insights (or equivalent) post-deploy. |

---

## P2 — Later / optional

| # | Item | Notes |
|---|------|--------|
| 1 | **Architecture diagrams** | Ensure InfraSight / TalkifyDocs (and others as needed) have clear embedded diagrams (Mermaid already in use elsewhere). |
| 2 | **Rich project media** | Short muted demos, GIFs, or Loom embeds on select projects. |
| 3 | **Testimonials** | Quotes from LinkedIn / reviews in a dedicated block. |
| 4 | **“Chat with resume”** | RAG-style Q&A over resume data; larger product effort. |
| 5 | **Handoff extras** | Revisit `PROJECT_PLAN.md` (palette, “Project Deconstructor”, photography focus mode) against **current** site; implement only what still fits the product. |

---

## Reference

- Phase-2 ideas: `TODO.md`
- Older handoff / roadmap: `PROJECT_PLAN.md`
