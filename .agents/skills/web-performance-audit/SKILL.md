---
name: web-performance-audit
description: Audits and optimizes Core Web Vitals (LCP, CLS, INP), critical rendering paths, image delivery, and hardware-accelerated compositor pipelines.
---

# Web Performance & Core Web Vitals Audit Skill

## Core Principles & Terminology
1. **Terminology Mandate:**
   - **NEVER** use the colloquial phrase "below the fold" or "above the fold".
   - **ALWAYS** use precise technical terminology:
     - *Initial viewport*
     - *Outside initial viewport / deferred offscreen resources*
     - *Critical rendering path*
     - *Largest Contentful Paint (LCP)*
     - *Hardware compositor thread / layer promotion*

2. **Core Web Vitals Benchmarks:**
   - **LCP (Largest Contentful Paint):** $\le$ 2.5s (Target: < 1.2s on high-speed connections).
   - **CLS (Cumulative Layout Shift):** $\le$ 0.1 (Target: 0.00).
   - **INP (Interaction to Next Paint):** $\le$ 200ms (Target: < 50ms).

---

## Performance Audit Checklist

### 1. Initial Viewport & Critical Rendering Path
- [ ] Ensure the LCP element (hero image or primary heading) is marked with `fetchpriority="high"`.
- [ ] Preconnect to critical third-party origins (e.g. Google Fonts) with `<link rel="preconnect">`.
- [ ] Avoid render-blocking third-party scripts in `<head>`.
- [ ] Ensure web fonts use `display=swap` to avoid Flash of Invisible Text (FOIT).

### 2. Raster Image Optimization
- [ ] Format: Modern WebP or AVIF formats.
- [ ] Explicit dimensions: All `<img>` tags must include explicit `width` and `height` attributes to reserve layout space and prevent CLS.
- [ ] Responsive sizing: Serve appropriately sized assets for mobile vs desktop via `srcset` and `sizes`.
- [ ] Deferred loading: All images outside the initial viewport must have `loading="lazy"` and `decoding="async"`.

### 3. Scroll & Compositor Thread Optimization
- [ ] Avoid JavaScript main-thread scroll hijacking libraries. Rely on native browser compositor scrolling.
- [ ] Use `transform: translateZ(0)` or `will-change` on sticky or blurred elements (e.g. `backdrop-filter: blur()`) to isolate them on dedicated GPU compositor layers.
- [ ] Ensure scroll reveal animations animate only GPU-friendly composite properties (`opacity` and `transform`).
