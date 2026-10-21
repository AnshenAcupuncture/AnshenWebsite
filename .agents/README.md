# AI Agent UI & Engineering Skills Suite

This directory contains the modular skills suite powering AI development for **Ānshén Acupuncture**. All skills conform to the open `SKILL.md` specification and use progressive disclosure to avoid context window overhead.

---

## Skills Catalog

| Skill Name | Directory | Primary Focus | Best Used When |
| :--- | :--- | :--- | :--- |
| **`design-taste-frontend`** | [`skills/design-taste-frontend/`](skills/design-taste-frontend/SKILL.md) | Anti-slop frontend engineering & design judgment | Building new pages, sections, or components to prevent generic AI templates. |
| **`soft-ui`** | [`skills/soft-ui/`](skills/soft-ui/SKILL.md) | Calm, organic, tactile, and luxury editorial aesthetics | Default aesthetic guide for Ānshén Acupuncture clinic layouts, cards, and colors. |
| **`stitch-design-taste`** | [`skills/stitch-design-taste/`](skills/stitch-design-taste/SKILL.md) | Semantic Design System generator for Google Stitch | Creating `DESIGN.md` tokens or prompting Google Stitch screens for visual workflows. |
| **`minimalist-ui`** | [`skills/minimalist-ui/`](skills/minimalist-ui/SKILL.md) | Swiss typography, whitespace discipline, 65ch line lengths | Crafting blog posts, editorial articles, or high-density text reading experiences. |
| **`redesign-audit`** | [`skills/redesign-audit/`](skills/redesign-audit/SKILL.md) | Audit-first inspection & upgrade protocol | Refactoring existing pages while preserving working structure and preventing regressions. |
| **`brandkit`** | [`skills/brandkit/`](skills/brandkit/SKILL.md) | Asset organization, color palette extraction, and tokenization | Extracting design tokens and managing brand photography and icons. |
| **`image-to-code`** | [`skills/image-to-code/`](skills/image-to-code/SKILL.md) | Screenshot & mockup translation into semantic HTML/CSS | Converting Figma exports, wireframes, or reference screenshots into clean code. |
| **`web-performance-audit`**| [`skills/web-performance-audit/`](skills/web-performance-audit/SKILL.md) | Core Web Vitals (LCP, CLS, INP) & GPU compositing | Auditing page speed, image delivery, and critical rendering path efficiency. |
| **`a11y-wcag-audit`** | [`skills/a11y-wcag-audit/`](skills/a11y-wcag-audit/SKILL.md) | WCAG 2.2 AA / AAA accessibility validation | Verifying contrast ratios, 48px touch targets, focus rings, and ARIA semantics. |

---

## Operating Protocol for Ānshén Acupuncture
When generating or refactoring UI for this project:
1. **Default Aesthetic:** Always pair `soft-ui` with `minimalist-ui` (calm, organic, tactile, high-trust healthcare tone).
2. **Performance Standard:** Adhere strictly to `web-performance-audit` (native hardware-accelerated compositor scrolling, zero main-thread scroll hijacking, optimized WebP images).
3. **Design Tokens:** Consult [`DESIGN.md`](../DESIGN.md) at the repository root as the single source of truth for brand colors, font stacks, and layout grids.
