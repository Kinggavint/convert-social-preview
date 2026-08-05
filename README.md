# Convert Social - Proof Site

Static proof site for **Convert Social**, a done-for-you social media management service founded by Abbie Green.

| Item | Detail |
| --- | --- |
| Client | Convert Social |
| Founder | Abbie Green |
| Service | Weekly social media posts, scheduled and published for you |
| Rate shown | $200 per month, no long-term contract |
| Service area | Nationwide, US based, fully remote |
| Reference site | myconvertsocial.com (currently on GoHighLevel) |
| Build date | 2026-08-05 |
| Live preview URL | https://kinggavint.github.io/convert-social-preview/ |

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home. Hero, value props, audience, testimonial highlights, founder blurb, FAQ, closing CTA |
| `how-it-works.html` | Five-step process, what we handle, what the client provides, full FAQ |
| `pricing.html` | Single plan card at $200 per month, in house comparison table, what is included |
| `testimonials.html` | Three verbatim client testimonials, additional client strip, case notes |
| `contact.html` | Contact form, alternate contact methods, closing CTA |

## Tech stack

- Vanilla HTML5, no framework and no build step required to serve
- Single external stylesheet at `assets/css/style.css` with CSS custom properties
- Single external script at `assets/js/main.js` for the mobile nav, sticky header state, scroll reveal, and form stub
- Inline SVG icons plus standalone SVG assets in `assets/img/` (no photography)
- Plus Jakarta Sans loaded from Google Fonts with `display=swap`
- Hosted on GitHub Pages from the `main` branch, root path, with `.nojekyll`

## Structure

```
proof/
  index.html
  how-it-works.html
  pricing.html
  testimonials.html
  contact.html
  assets/
    css/style.css
    js/main.js
    img/logo.svg
    img/favicon.svg
    img/og-image.svg
  robots.txt
  sitemap.xml
  .nojekyll
  README.md
  REVISIONS.md
```

## Design system

- Primary: deep indigo `#4F46E5`, deepening to `#1E1B4B` for footer and feature surfaces
- Accent: coral `#F97316` and `#DD5A12` for eyebrows, secondary CTAs, and highlights
- Surface: warm off-white `#FDFAF5` with `#F7F2EA` for alternating sections
- Type: Plus Jakarta Sans, weights 400, 500, 700, 800
- Radii from 8px to 22px, pill buttons, soft layered shadows
- Testimonial avatars are initials in colored circles. No photos of real people are used or implied

## Structured data

| Page | Schema types |
| --- | --- |
| `index.html` | Organization, Service, FAQPage, Review x3 |
| `how-it-works.html` | Organization, FAQPage, BreadcrumbList |
| `pricing.html` | Organization, Service, BreadcrumbList, Review |
| `testimonials.html` | Organization, BreadcrumbList, Review x3 |
| `contact.html` | Organization, BreadcrumbList |

## Accessibility and performance notes

- Skip-to-content link on every page
- One `h1` per page with an ordered `h2` and `h3` hierarchy below it
- Visible focus styles on every interactive element
- Decorative SVG marked `aria-hidden`, meaningful marks given `role="img"` and accessible labels
- `prefers-reduced-motion` disables the scroll reveal and hover transforms
- Colors selected for WCAG AA contrast on both light and dark surfaces

## Copy compliance

The build is verified with grep for zero em dashes, zero en dashes, zero exclamation points in copy, zero uses of the word f-r-e-e, zero vendor or tooling mentions, and zero emoji. See `REVISIONS.md` for open placeholders.

## Local preview

```bash
cd proof
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.
