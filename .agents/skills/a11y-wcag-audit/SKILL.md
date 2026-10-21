---
name: a11y-wcag-audit
description: Audits web accessibility against WCAG 2.2 AA/AAA guidelines, including color contrast ratios, keyboard navigation, focus indicators, and ARIA semantics.
---

# Accessibility (WCAG 2.2) Audit Skill

## Core Standards

### 1. Color Contrast Ratios (WCAG AA & AAA)
- **Normal Text (< 18pt or < 14pt bold):** Minimum **4.5:1** contrast ratio (AAA: **7:1**).
- **Large Text ($\ge$ 18pt or $\ge$ 14pt bold):** Minimum **3:1** contrast ratio (AAA: **4.5:1**).
- **UI Components & Graphical Objects:** Minimum **3:1** against adjacent background colors.

### 2. Touch Targets & Spacing (WCAG 2.2 Success Criterion 2.5.8)
- Every interactive element (button, link, form input, icon button) must have an active target size of at least **48×48 CSS pixels** on mobile viewports.
- If visual size is smaller, expand the hit area using transparent padding or `:after` pseudo-elements.

### 3. Keyboard Navigation & Focus Indicators
- Every interactive control must be focusable via `Tab` / `Shift+Tab`.
- Never set `outline: none` without providing an explicit, high-contrast `:focus-visible` replacement ring.
- Skip links (`.skip-link`) must be provided at the very top of the DOM to allow screen-reader and keyboard users to bypass repetitive header navigation directly to `#main`.

### 4. Semantic Structure & ARIA
- Use native HTML elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<dialog>`, `<details>`, `<summary>`) instead of generic `<div>` soup.
- Every page must have exactly one `<h1>`.
- Meaningful images must have descriptive `alt` text; decorative images must have `alt=""` and `aria-hidden="true"`.
- Mobile navigation toggles must dynamically update `aria-expanded="true/false"` and `aria-label`.
