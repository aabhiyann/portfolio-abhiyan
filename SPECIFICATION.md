# Project Specification

**Version:** 2.0 (Based on Designer Handoff)
**Date:** September 27, 2025

---

## 1. Brand & System Tokens

### 1.1 Color Tokens
*   **Light mode (Golden Hour × Coastal Fog):**
    *   `--bg`: `#F8FAFC`
    *   `--surface`: `#FFFFFF`
    *   `--text`: `#0F172A`
    *   `--muted`: `#64748B`
    *   `--accent-1` (primary): **Yellow** `#F9A825`
    *   `--accent-2` (secondary): **Blue** `#3B82F6`
*   **Dark mode (Kyoto Twilight × Emerald):**
    *   `--bg`: `#1A202C`
    *   `--surface`: `#0F172A`
    *   `--text`: `#F4F4F7`
    *   `--muted`: `#A0AEC0`
    *   `--accent-1` (primary): **Purple** `#8B5CF6`
    *   `--accent-2` (secondary): **Emerald** `#22C55E`

### 1.2 Typography
*   **Headings:** Space Grotesk (700/600)
*   **Body:** Inter (400/500)

### 1.3 Spacing & Grid
*   **Container:** `max-width: 1200px`
*   **Section rhythm:** `py-24` (desktop) / `py-16` (mobile)
*   **Card radius:** `16px`

---

## 2. Components (UI Kit)

### 2.1 Buttons
*   **Primary:** Filled with `--accent-1`.
*   **Ghost:** Transparent with 1px border.

### 2.2 Cards
*   Radius 16px, 1px border.
*   Hover: shadow elevate, `translateY(-2px)`.

### 2.3 Chips (Tech Pills)
*   Lowercase labels, compact.
*   Light: `bg-black/5`, Dark: `bg-white/10`.

### 2.4 Navbar
*   Sticky, backdrop-blur `8px`, semi-transparent.

---

## 3. Motion System

*   **Durations:** Tap (120-150ms), Hover/Reveal (200-250ms), Section enter (450-600ms).
*   **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for entrances.
*   **Reduced Motion:** Should be respected.

---

## 4. Accessibility & SEO

*   **Contrast:** WCAG AA required.
*   **Keyboard Nav:** All interactive elements must be keyboard accessible.
*   **Metadata:** Proper `<title>` and Open Graph tags required.

---

## 5. Asset Guidelines

*   **Images:** WebP or AVIF format, lazy-loaded.
*   **Icons:** SVG only.