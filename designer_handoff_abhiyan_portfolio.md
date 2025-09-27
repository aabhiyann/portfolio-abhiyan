# Designer Handoff: Abhiyan Sainju Portfolio

**Version:** 1.0  
**Date:** September 27, 2025  
**Owner:** Abhiyan Sainju  
**Design Partner:** (Your name here)

---

## 0) Purpose
A single source of truth for visual/interaction design. This doc defines pages, components, tokens, motion, behaviors, and acceptance criteria so design and engineering stay perfectly in sync.

---

## 1) Brand & System Tokens ("Kathmandu Fog")

### 1.1 Color Tokens
**Light mode (Golden Hour × Coastal Fog)**  
- `--bg`: `#F8FAFC`  
- `--surface`: `#FFFFFF`  
- `--text`: `#0F172A`  
- `--muted`: `#64748B`  
- **Accents**:  
  - `--accent-1` (primary): **Yellow** `#F9A825`  
  - `--accent-2` (secondary): **Blue** `#3B82F6`

**Dark mode (Kyoto Twilight × Emerald)**  
- `--bg`: `#1A202C`  
- `--surface`: `#0F172A`  
- `--text`: `#F4F4F7`  
- `--muted`: `#A0AEC0`  
- **Accents**:  
  - `--accent-1` (primary): **Purple** `#8B5CF6`  
  - `--accent-2` (secondary): **Emerald** `#22C55E`

**State colors**  
- Info `#3B82F6`, Success `#10B981`, Warning `#F59E0B`, Error `#EF4444`  
- Focus ring: `#7C3AED` (2px outside, never inside glyphs)

### 1.2 Typography
- **Headings:** Space Grotesk (700/600)  
- **Body:** Inter (400/500)  
- **Scale:**  
  - H1 hero: clamp(40–64)  
  - H2 section: 32–48  
  - H3 card: 20–24  
  - Body: 16–18  
  - Caption/meta: 12–14
- Line-height: body 1.6–1.75, headings 1.1–1.2  
- Tracking: `tracking-tight` on display headlines only

### 1.3 Spacing & Grid
- Container: `max-width: 1200px` (Tailwind `max-w-7xl`), `px 24–32`  
- Section rhythm: `py 96 (desktop) / 64 (mobile)`  
- Grid: 12-col, 24px gutters  
- Card radius: `16px` (2xl)  
- Shadows: subtle, never harsh; elevate one level on hover

### 1.4 Iconography
- Lucide icons, 24px default; stroke aligns with text color (reduced opacity on muted)

---

## 2) Pages & Information Architecture

### 2.1 Global
- **Navbar (sticky)**: Logo (AS monogram), Links: Projects · Photography · Deep Dives · About · Contact  
- **Footer (global)**: Links (LinkedIn, GitHub, Email, Resume) · “Currently listening” (manual for v1) · **Interactive Day/Night Timeline** (signature)

### 2.2 Pages
1. **Home**  
   Sections: Hero (with Living Background) → Featured Projects (3) → Photography Teaser (3–6 imgs) → About Teaser (2–3 bullets + CTA) → Footer

2. **Projects (index)**  
   Responsive grid of cards with tilt; filters by tag (optional v2)

3. **Project Detail**  
   Hero image → Problem → Solution → Impact → Stack Pills → **Project Deconstructor** button (opens modal diagram)

4. **Photography**  
   Masonry grid → hover EXIF overlay → **Focus Mode** (pan + zoom modal)

5. **About**  
   Portrait + narrative → **Journey Map** (Kathmandu → DC timeline) → fun facts (soccer ⚽, travel, music)

6. **Deep Dives**  
   Article list (cards) → Article view (reading comfort, code blocks, diagrams)

7. **404**  
   Minimal. “Lost the trail?” CTA back home.

---

## 3) Signature Interactions (Specs)

### 3.1 Living Background (Hero)
- **Type:** Subtle, slow particle constellation or spotlight following cursor.  
- **Bounds:** Confined to hero section; never overlap text legibility (gradient overlay allowed).  
- **Motion:** 30–45fps target; ease-out when mouse stops; no jank on low-power devices.  
- **Accessibility:** Disable heavy motion for `prefers-reduced-motion` (freeze to a calm static frame).  
- **Visual intensity levels:**  
  - Level 0 (idle): particles drift slowly (opacity 0.15–0.25)  
  - Level 1 (hover): mild convergence/repel within 160–200px radius  
  - Level 2 (click): short shimmer ripple (150ms) then settle

**Acceptance Criteria**  
- Text contrast remains AA in both themes.  
- CPU < 15% on mid-tier laptop while idle.  
- No horizontal scroll introduced.

### 3.2 Day/Night Timeline (Footer)
- **Structure:** 24 ticks, draggable knob (sun/moon). Defaults to visitor local time.  
- **Theme mapping:** 0–6 = deep night → dark theme; 6–18 = day → light theme; 18–24 = twilight → dark theme.  
- **Color interpolation:** Optional: interpolate background/surface vars if performance allows.  
- **Fallback:** Sun/Moon toggle button (keyboard accessible).  
- **Persistence:** Store override in `localStorage`; reset on “Auto” switch.

**Acceptance Criteria**  
- Knob follows pointer with no vertical drift; snap on release to closest hour (±8px).  
- Keyboard control: left/right arrows adjust by 1 hour, page-up/down by 6 hours.  
- Works on touch (drag) and desktop (mouse).

### 3.3 Project Deconstructor (Modal Diagram)
- **Open from:** Project card/button “Explore Architecture”.  
- **Canvas:** Overlay modal, blurred backdrop, ESC/Click-out to close.  
- **Diagram:** 3–5 blocks (Frontend · API · DB · Auth · ML).  
- **Interaction:** Hover a block → highlight block + matching tech pills; animate connecting lines (stroke grows from 0→1).  
- **Content hook:** Include 1–2 bullet insights per block (e.g., “API caches responses (Redis)” ).

**Acceptance Criteria**  
- Modal opens <200ms after click; focus trapped inside; ESC closes.  
- Connector animation 400ms, ease-out.  
- Mobile: vertical layout with tappable blocks; lines simplified.

### 3.4 Photography Focus Mode
- **Open from:** Clicking any photo in Photography grid.  
- **Viewport:** Fullscreen dark surface; UI chrome fades to 0.  
- **Gestures:**  
  - Mouse drag = pan (cursor: grab/grabbing).  
  - Wheel/pinch = zoom (centered on cursor).  
  - Double-click = smart zoom (1.0 → 1.6 → 1.0).  
- **EXIF:** Show minimal EXIF in corner; fades on inactivity.  
- **Exit:** ESC or close button (fixed top-right), or click backdrop.

**Acceptance Criteria**  
- 60fps on pan at 1.0 zoom; 30–45fps acceptable at 2.0+.  
- Zoom bounded (0.9–3.0); inertia optional but subtle.  
- Keyboard arrows nudge pan by 40px; `-`/`=` zoom.

### 3.5 Journey Map (About)
- **Layout:** Horizontal scroller or vertical timeline (choose based on content length).  
- **Nodes:** Kathmandu → St. Xavier’s → GWU (with dates).  
- **Motion:** As each node enters viewport, glow in accent-1 and lift 4px; connecting path draws in 400ms.  
- **Mobile:** Vertical stack of cards with inline map thumbnails.

**Acceptance Criteria**  
- All nodes reachable with keyboard; tab order respects reading order.  
- Map images >= 2x for retina; lazy-load.

---

## 4) Components (UI Kit)

### 4.1 Buttons
- **Primary:** Filled with `--accent-1`; text always white in light; white or near-white in dark.  
- **Ghost:** Transparent with 1px border (text color). Hover: subtle bg tint `accent-2/10`.  
- **Icon buttons:** 40×40, circular; focus ring 2px violet.

### 4.2 Cards
- Radius 16px, 1px border (`black/5` light, `white/10` dark).  
- Hover: shadow elevate, translateY -2px, duration 200ms.  
- Content: Title (H3), description, tag chips.

### 4.3 Chips (Tech Pills)
- Lowercase labels; compact (12px text).  
- Light: bg `black/5`, dark: bg `white/10`; text follows base.  
- Hover: slight glow of accent-2 for index pages; in Deconstructor modal, chip color maps to hovered block.

### 4.4 Navbar
- Sticky, backdrop-blur `8px`, semi-transparent surface.  
- Active link: underline or 2px bottom border in `accent-1`.  
- Mobile: hamburger → overlay menu (focus-trap).

### 4.5 Footer
- 3 rows: Links · “Currently listening” · Signature Timeline.  
- Timeline sits centered with hour ticks (0,6,12,18,24 labels).  
- Easter egg: ⚽ click → one bounce across width; disables if `prefers-reduced-motion`.

---

## 5) Motion System (Tokens & Patterns)
- **Durations:**  
  - Tap 120–150ms  
  - Hover/Reveal 200–250ms  
  - Section enter 450–600ms  
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for entrances; ease-out for fades  
- **Stagger:** 80–120ms between siblings  
- **Reduced Motion:** Turn off transforms; keep opacity transitions <= 120ms

**Common variants**  
- fadeUp: `{opacity:0,y:16} → {opacity:1,y:0}`  
- growLine (SVG paths): `pathLength 0→1`  
- tiltHover: `rotateX(2deg) rotateY(-2deg) scale(1.02)`

---

## 6) Accessibility & SEO
- Color contrast AA across both themes (chips ≥ 3:1).  
- Keyboard: all modals trap focus; ESC closes; timeline slider operable by keyboard.  
- Landmarks: `header`, `nav`, `main`, `footer`.  
- Skip link: visible on focus, jumps to `#content`.  
- Alt text: meaningful (location/mood for photos).  
- Metadata: proper `<title>` per route; OG image (1200×630) with name overlay.

---

## 7) Breakpoints & Responsiveness
- Mobile-first; test at 360, 390, 414, 768, 1024, 1280, 1440.  
- **Hero:** centered content on mobile; split/side-by-side allowed ≥ 1024.  
- **Grids:** 1 col mobile → 2 col tablet → 3 col desktop.  
- **Modals:** full-screen on mobile, 960px max on desktop.

---

## 8) Asset Guidelines
- Hero: WebP ≤ 350KB, focal point left/center.  
- Gallery images: WebP/AVIF, srcset 400/800/1200/1600; lazy-load.  
- Icons: SVG only.  
- OG image: export dedicated banner.

---

## 9) Wireframes (Low-Fidelity)

### 9.1 Home (mobile → desktop)
```
[ NAV ]
[ HERO  ┌────────────── Living BG (canvas) ──────────────┐ ]
[       │  H1 + tagline + CTA                           │ ]
[       └───────────────────────────────────────────────┘ ]
[ Featured Projects ]
[ [Card][Card][Card]  (tilt on hover) ]
[ Photography Teaser  (3 imgs) ]
[ About Teaser (2 bullets + CTA) ]
[ FOOTER: links · now playing · timeline slider ]
```

### 9.2 Projects (index)
```
[ Filters (optional) ]
[ Card ][ Card ][ Card ]  (tilt)
[ Card ][ Card ][ Card ]
```

### 9.3 Project Detail
```
[ Hero image ]
[ Problem | Solution | Impact ]
[ Stack Pills ]   [ Explore Architecture ]  → Modal Diagram
```

### 9.4 Photography
```
[ Masonry Grid ]
  hover: EXIF overlay
  click: Focus Mode (pan+zoom)
```

### 9.5 About – Journey Map
```
[ Portrait + intro ]
[ ── Kathmandu ── St.Xavier’s ── GWU ── ]  (glow + draw)
```

---

## 10) Acceptance Criteria (Per Page)

**Home**  
- Hero text remains legible in all modes; canvas never obscures CTAs.  
- Featured cards animate on scroll; 60fps hover on desktop.

**Projects**  
- Card tilt does not cause layout shift; tab focus visible.  
- Deconstructor modal opens within 200ms; backdrop click closes; ESC closes.

**Photography**  
- Focus Mode honors `prefers-reduced-motion`; keyboard panning available.  
- Zoom is centered and bounded; image never leaves the frame entirely.

**About**  
- Timeline nodes announce with ARIA labels; order matches reading order.

**Footer**  
- Timeline knob draggable (mouse/touch), keyboard accessible, and respects local time by default.

---

## 11) Handoff Checklist (for Designer)
- [ ] Provide final color swatches (HEX + contrast ratios)  
- [ ] Export icons (SVG) for nav, chips, EXIF, modal close  
- [ ] Deliver hero canvas visual style reference (particle shapes, density)  
- [ ] Diagram styles for Deconstructor (block colors, connectors, hover glow)  
- [ ] Journey Map markers + path styling  
- [ ] Empty/error states for lists and gallery  
- [ ] Mobile overlays and breakpoints reviewed  
- [ ] Redlines for paddings, radii, shadows

---

## 12) Notes for Engineering
- Theme vars live in `:root` and `.dark`; timeline writes to CSS vars for smooth interpolation.  
- Respect `prefers-reduced-motion` in all feature components.  
- Use `IntersectionObserver` for scroll reveals; unobserve after first fire.  
- Use `will-change: transform` sparingly; avoid on many elements simultaneously.  
- Images: set explicit width/height to avoid CLS.

---

## 13) Out of Scope (for v1)
- AI Concierge (plan UI hook, implement later)  
- Filtering on Projects page (optional v2)  
- Search across site  
- Live Spotify API (placeholder text v1)

🔹 4) Live Spotify API (placeholder text v1)

Why not v1?
Pulling “Currently Listening” directly from Spotify requires:

OAuth integration with your account,

Token refresh logic,

And caching responses.
This is more backend-heavy. For now, it’s faster to display a hardcoded or manually updated text (e.g., “Currently Listening: IVE – Either Way”). That still gives personality without the engineering lift.

Planned: Add the Spotify API integration in v2 once the core site is stable.

---

## 14) Open Questions
- Particle style preference: dots vs. short lines vs. soft spotlight?  
- Journey Map: horizontal (scroll) or vertical (timeline) for best mobile UX?  
- Deconstructor diagram: use SVG (crisp at any scale) or div/CSS (faster to iterate)?

---

**Deliverables next:** If helpful, I can drop in **starter React/Tailwind component stubs** (Hero, ProjectCard, DeconstructorModal, FocusViewer, FooterTimeline) so engineering has a head start and your designer can preview interactions in the canvas. 

