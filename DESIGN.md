# Design System: Ānshén Acupuncture
**Standard:** Google Stitch Semantic Design Specification & Taste Suite
**Atmosphere:** Classical, Calming, Restrained, Psychology-Informed Healthcare

---

## Configuration & Style Dials

| Dial | Level | Setting & Rationale |
| :--- | :---: | :--- |
| **Creativity** | `6` | Refined editorial warmth. Distinct character without chaotic distraction. |
| **Density** | `4` | Gallery-airy. Generous vertical breathing room (`clamp(4.5rem, 9vw, 8rem)`) to induce a calming somatic response. |
| **Variance** | `5` | Balanced layout rhythm. Clear typographic hierarchy with alternating card grids and full-width imagery. |
| **Motion Intent** | `4` | Subtle and purposeful. GPU-accelerated CSS reveals and native 120Hz/60Hz compositor scrolling. No scroll hijacking. |

---

## 1. Visual Atmosphere & Ethos
Ānshén (安神) translates to *"to calm the spirit, to settle the mind."* The interface must visually embody this clinical ethos:
- **Calm & Grounded:** Clean, warm, tactile surfaces resembling textured handmade washi paper, natural stone, and botanical herbs.
- **High-Trust Healthcare:** Professional, respectful medical presentation compliant with AHPRA/CMBA advertising guidelines. Zero aggressive marketing popups, countdown timers, or curative guarantees.
- **Reading Comfort:** Generous line heights (`1.85`), strict reading measure (`66ch`), and high WCAG AA contrast.

---

## 2. Color Palette & Roles

### Surfaces & Neutrals
- **Rice Paper (`--rice-paper`)** — `#f5f0e8`: Primary background surface. Warm, natural, and soft on the eyes. Never sterile pure white (`#ffffff`).
- **Deep Cream (`--cream-deep`)** — `#ece5d9`: Card backgrounds, alternating section fills, and elevated panels.
- **Cream Edge (`--cream-edge`)** — `#ded4c4`: Subtle 1px structural dividers, card borders, and table lines.

### Typographic Inks
- **Pine Ink (`--ink`)** — `#1e2b28`: Primary headline and body text. Deep botanical slate-green depth. Never harsh pure black (`#000000`).
- **Forest Slate (`--deep-forest`)** — `#21453f`: Dark container surfaces (footer, header overlay, dark callouts).

### Brand Accents
- **Pine Teal (`--pine-teal`)** — `#2f5c56`: Secondary structural accent, eyebrow tags, icon accents, and active navigation states.
- **Warm Clay (`--warm-clay`)** — `#c08457`: Primary interactive CTA buttons, hover states, and key booking affordances.
- **Sage Herbal (`--sage`)** — `#93a88f`: Subtle tag badges, health fund callouts, and botanical accents.

### Banned Colors & Anti-Patterns
- ❌ Synthetic purple / violet / magenta gradients (the generic "AI SaaS" default).
- ❌ High-saturation electric neons.
- ❌ Stark `#000000` text on `#FFFFFF` backgrounds (causes optical glare).

---

## 3. Typographic Architecture

### Typefaces
- **Display & Headlines:** `Cormorant Garamond`, Georgia, serif.
  - Used for `h1`, `h2`, `h3`, pullquotes, and the brand wordmark.
  - Line-height: `1.15` to `1.25`. Tracking: `-0.01em` to normal.
- **Body & Functional UI:** `Mulish`, -apple-system, sans-serif.
  - Used for paragraphs, navigation links, buttons, form inputs, and metadata.
  - Line-height: `1.85`. Weight: `400` (regular), `600` (semi-bold), `700` (bold).

### Reading Scale
- **H1 (Hero):** `clamp(2.4rem, 5.2vw, 4.2rem)`
- **H2 (Section):** `clamp(1.9rem, 3.6vw, 2.75rem)`
- **H3 (Card Title):** `1.35rem` to `1.5rem`
- **Body Regular:** `1.0625rem` (17px)
- **Eyebrow / Small:** `0.8125rem` (13px), uppercase, tracked `0.14em`

---

## 4. Layout & Spacing Rules

- **Spatial Grid:** Strict 8px base grid (`8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px`).
- **Max Content Shell:** `1180px` (`--shell`).
- **Gutter Padding:** `clamp(1.25rem, 4vw, 2.5rem)` (`--gutter`).
- **Card Radii:**
  - Standard cards: `20px` (`--radius-card`)
  - Badges / tags: `100px` (`--radius-pill`)
  - Small elements: `10px` (`--radius`)
- **Reading Measure:** Text paragraphs are strictly capped at `66ch` (`--measure`) for optimal reading ergonomics.

---

## 5. Interaction & Motion Rules

- **Native Hardware Compositor Scrolling:** Scrolling must always remain native on the GPU compositor thread. Never use JavaScript scroll hijacking.
- **Anchor Jumps:** Native CSS `scroll-behavior: smooth` with `prefers-reduced-motion` fallback.
- **Scroll Entrance Reveals:** Subtle opacity fade (`0` to `1`) and upward lift (`translateY(18px)` to `0`) over `0.8s ease` via lightweight `IntersectionObserver` with `will-change` GPU layer promotion.
- **Sticky Elements:** Any sticky header with `backdrop-filter: blur(10px)` must have `transform: translateZ(0)` for dedicated GPU layer isolation.
