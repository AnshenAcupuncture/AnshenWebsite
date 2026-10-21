# Agent Instructions & Workflow Rules

## Core Operating Principles (MANDATORY)

> [!IMPORTANT]
> ### 1. Deliberate Planning & Thoughtful Analysis
> - **Slow down:** Do not jump straight into file modifications or ad-hoc code changes.
> - **Understand the system:** Take time to analyze the underlying architecture, edge cases, and root causes before proposing or executing fixes.
> - **Plan first:** Formulate a structured step-by-step plan. Think through how each change impacts the rest of the application.

> [!IMPORTANT]
> ### 2. Proactive Research & Modern Best Practices
> - **Search online when possible:** Before actioning non-trivial tasks, search web documentation, specs, and modern guidelines to identify current industry best practices and better solutions.
> - **Avoid assumptions:** Do not rely on outdated habits or quick workarounds when standard, performant platform features exist.

> [!IMPORTANT]
> ### 3. Terminology & Communication Constraints
> - **Strictly avoid "below the fold" or "above the fold":** Always use precise web performance and layout terminology:
>   - *Initial viewport*
>   - *Outside initial viewport / deferred offscreen resources*
>   - *Critical rendering path*
>   - *Largest Contentful Paint (LCP)*
>   - *Hardware compositor thread / layer promotion*

---

## Project Context & Standards (Ānshén Acupuncture)

- **AHPRA / CMBA Compliance:** Maintain compliant healthcare language. Never include curative guarantees or raw bracketed placeholders in public copy.
- **Performance & Smoothness:** Rely on native hardware-accelerated compositor scrolling and GPU layer promotion. Avoid main-thread scroll hijacking.
- **Git & Deployment:** Ensure clean commits and verify live builds on Vercel after making verified updates.
