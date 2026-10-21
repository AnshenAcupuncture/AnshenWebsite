# Ānshén Acupuncture — Website

Eight-page static site built from the Ānshén Acupuncture Brand Kit v1.0 and the supplied business details.

## Business name

**Use `Ānshén Acupuncture` — with both macrons — everywhere.** It is already set consistently across every header, footer, `<title>`, meta description, Open Graph tag, and JSON-LD schema block in this build. Do not shorten to "Anshen", "Ānshén", or "Anshen Acu" anywhere, including in future pages, ads, or directory listings.

## Files

```
index.html                        Home
chinese-medicine.html             About Us
acupuncture-treatments.html       Our Services (hub)
initial-acupuncture.html          └─ Initial Acupuncture
follow-up-acupuncture.html        └─ Follow-Up Acupuncture
fire-cupping-therapy.html         └─ Fire Cupping Therapy
blog.html                         Blog (empty state + post card template)
contact.html                      Contact Us
css/style.css                     All tokens, layout, components, GPU layer promotion
js/main.js                        Mobile nav, scroll reveals (IntersectionObserver), form handler
assets/                           Logo and photography from the brand kit
```

## Performance & Scrolling Architecture

The site uses **native hardware-accelerated compositor scrolling** combined with CSS `scroll-behavior: smooth` for anchor navigation:
- **Zero scroll hijacking:** JavaScript does not intercept mousewheel, trackpad, or touch inputs. Precision trackpads (MacBook / Magic Trackpad) and mobile touchscreens retain native 60fps/120Hz OS momentum physics without input lag or rubber-banding.
- **Scroll reveal entrance effects:** Section headings, cards, and images animate smoothly via a lightweight `IntersectionObserver` in `js/main.js` and GPU-accelerated CSS transitions with `will-change` layer promotion.
- **Accessibility & reduced motion:** Fully respects `prefers-reduced-motion: reduce` by setting `scroll-behavior: auto` and disabling transitions.
- **Sticky header optimization:** The fixed header with `backdrop-filter: blur(10px)` is promoted to its own GPU compositor layer (`transform: translateZ(0)`) to prevent repaint invalidations during scrolling.

Filenames were updated for SEO (keyword-based URLs — see the "SEO" section below); page labels above are unchanged.

## Brand values applied

| Token | Value | Source |
|---|---|---|
| Primary (Rice Paper) | `#f5f0e8` | Your brief |
| Secondary (Pine Teal) | `#2f5c56` | Your brief |
| Deep Forest | `#21453f` | Brand kit |
| Warm Clay | `#c08457` | Brand kit — used only for the booking CTA |
| Sage | `#93a88f` | Brand kit — eyebrows, rules |
| Ink | `#1e2b28` | Brand kit — body text |
| Display face | Cormorant Garamond | Brand kit |
| Body face | Mulish | Brand kit |

Note: your brief specified `#f5f0e8` / `#2f5c56`; the brand kit PDF lists `#F5EFE6` / `#305F57`. Your brief was treated as authoritative. If you want the kit values instead, change the two variables at the top of `css/style.css`.

## Business details baked in

- **Phone** 0408 290 001 (`tel:` links use `+61408290001`)
- **Email** info@anshenacupuncture.com
- **Address** 4/2546 Gold Coast Hwy, Mermaid Beach QLD 4218
- **Hours** Tuesday 12:00pm – 5:00pm (all other days marked Closed)
- **Service area** Gold Coast
- **Established** 2026
- **Instagram** @anshen_acupuncture

## Compliance note

Copy was written to stay on the right side of AHPRA advertising rules and the brand kit's own voice guide. All service descriptions use assistive framing — "can help", "commonly used to support" — and avoid outcome claims, cure/fix/detox language, testimonials, and before-and-after style statements.

**Testimonials are not used anywhere in this build.** AHPRA prohibits testimonials in advertising for regulated health services. The brand kit's mockups contained a sample testimonial ("Maya R.") — it has been deliberately removed. Do not add client reviews to the site, and be aware this also applies to reviews you solicit or publish yourself.

Have a practitioner review all copy before launch.

---

# Before this goes live

## 1. Booking link — required

Every "Book now" button points to the placeholder `#booking-link`. Find and replace across all eight HTML files with your real booking URL (Cliniko, Halaxy, Square, etc.):

```bash
grep -rl '#booking-link' . | xargs sed -i 's|#booking-link|https://your-booking-url|g'
```

## 2. Contact form — required

`contact.html` has a working front-end form, but `js/main.js` only shows a fallback message directing people to phone or email. Connect it to a backend (Formspree, Netlify Forms, or your booking platform) before launch. Given it collects health-adjacent enquiries, choose a provider with an appropriate privacy posture and add a privacy policy page.

## 3. Missing details — please supply

These were not provided and are **not** invented anywhere in the build. Add them when you have them:

- **Practitioner name, qualifications, AHPRA registration number** — the About page currently describes the practice, not a person. Add a practitioner bio section and put the AHPRA number in the footer.
- **Licence number** — was marked "X" in your brief.
- **Facebook URL** — no Facebook link is present in the footer; add it beside Instagram.
- **Google Business Profile URL** — add to footer and to `sameAs` in the JSON-LD schema on every page.
- **Existing website URL** — if you have one, set up 301 redirects to the matching new pages.
- **Pricing** — no prices are shown. Add to `acupuncture-treatments.html` and each service page if you want them public.
- **Health fund rebates** — if you offer on-the-spot claiming, say so on the services page.

## 4. Domain

The canonical tags, Open Graph URLs, and schema currently assume `https://anshenacupuncture.com/`. If the real domain differs, find and replace it:

```bash
grep -rl 'anshenacupuncture.com' . | xargs sed -i 's|anshenacupuncture.com|yourdomain.com.au|g'
```

## 5. Photography

The site uses three images from the brand kit (`needle-head.jpg`, `moxa.jpg`, `moxa-needle.jpg`). Replace with photos of your actual clinic space when you have them — local, real-place photography helps significantly with Gold Coast local search. Compress before upload; the logo file is currently 1.2MB and should be optimised.

## 6. Blog

Six posts are live. `blog.html` lists them as `.post-card` articles (newest first); each post is its own page with `BlogPosting` schema, and all six are in `sitemap.xml`. To add another: create a page (copy an existing post as the template), add a `.post-card` to the top of the grid in `blog.html`, and add a `<url>` entry to `sitemap.xml`.

Current posts:

```
what-does-acupuncture-feel-like.html         → links to Initial Acupuncture
fire-cupping-marks-explained.html            → links to Fire Cupping Therapy
psychology-informed-chinese-medicine.html    → links to About
chinese-medicine-in-winter.html              → links to Our Services (seasonal)
acupuncture-for-stress-and-sleep.html        → links to Initial Acupuncture
which-acupuncture-appointment.html           → links to both service pages
```

Post dates are editorial (staggered June–July 2026); change them in each page's visible text, its `datePublished`/`dateModified` schema, and `sitemap.xml` if you want different dates. All copy uses AHPRA-safe assistive framing and carries a general-information disclaimer — keep that framing in any new posts.

## 7. Also worth doing

- ~~Add `favicon.ico` and apple touch icons.~~ Done — `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`/`512x512.png`, and `site.webmanifest` are all in the site root and linked from every page's `<head>`. All six were regenerated from `assets/logo.png` with a proper square crop of the circular mark (the original favicon.io export squashed the non-square canvas into an oval). The apple touch icon has an opaque Rice Paper background rather than transparency, since iOS fills transparent corners with black.
- Add a privacy policy page and link it in the footer.
- ~~Create `robots.txt` and `sitemap.xml`.~~ Done — both are in the site root. If the domain changes from `anshenacupuncture.com`, they're covered by the find-replace command in section 4 above; if you add or remove pages, update `sitemap.xml`'s `<url>` entries to match.
- Claim and complete the Google Business Profile — for a single-day-a-week local clinic this will likely drive more enquiries than the site itself.
- Set the correct hours in Google Business Profile to match the site (Tuesday only).

## Preview locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Hosting

Static site, no build step. Deploy the folder as-is to Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any standard web host.
