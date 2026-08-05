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
| Build date | 2026-08-05 (v2 rebuild on client brand imagery, same date) |
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
- Inline SVG icons for small UI marks, plus the twelve client-uploaded PNG images in `assets/img/`
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
    img/og-image.png
    img/01-hero-flat-lay-desk.png
    img/02-hero-split-owner-before-after.png
    img/03-how-it-works-icon-set.png
    img/04-team-social-management.png
    img/05-industry-icon-set.png
    img/06-client-type-triptych.png
    img/07-testimonial-engagement-pattern.png
    img/08-growth-chart-infographic.png
    img/09-introductory-rate-badge.png
    img/10-scheduled-phone-checklist.png
    img/11-navy-network-background.png
    img/12-orange-navy-gradient-mesh.png
  robots.txt
  sitemap.xml
  .nojekyll
  README.md
  REVISIONS.md
```

## Design system

The palette is sampled directly from the client-uploaded imagery.

- Primary: brand navy `#0F1E3C`, deepening to `#0A1428` for footer and feature surfaces
- Accent: brand orange `#F27021`, with `#A63F08` for orange text on light surfaces so contrast stays above WCAG AA
- Surface: warm cream `#FAF6F0` with `#F4EDE3` for alternating sections
- Text: charcoal `#1A1F2E` for headings and body, muted grey `#5A6478` for secondary lines and captions
- Type: Plus Jakarta Sans, weights 400, 500, 700, 800
- Radii from 8px to 22px, pill buttons, soft layered shadows
- Testimonial avatars are initials in colored circles. The only people shown are in the client-supplied illustrations and the client-supplied photo triptych

## Assets

All twelve images in `assets/img/` were uploaded by the client at onboarding. Nothing is stock and nothing is generated art.

| Image | Placement |
| --- | --- |
| `01-hero-flat-lay-desk.png` | Home hero, right column visual |
| `02-hero-split-owner-before-after.png` | Home, full width problem and solution visual above the value props |
| `03-how-it-works-icon-set.png` | How It Works page head, content to schedule to growth flow |
| `04-team-social-management.png` | Home founder section visual |
| `05-industry-icon-set.png` | Home industries strip with the five industry labels below |
| `06-client-type-triptych.png` | Testimonials page banner below the page head |
| `07-testimonial-engagement-pattern.png` | Background of the home client results section and the testimonials quote section |
| `08-growth-chart-infographic.png` | Home client results panel, captioned as an illustrative pattern rather than client data |
| `09-introductory-rate-badge.png` | Pricing card floating badge, rotated 6 degrees, decorative only |
| `10-scheduled-phone-checklist.png` | How It Works process aside beside the five steps |
| `11-navy-network-background.png` | Footer background on all five pages |
| `12-orange-navy-gradient-mesh.png` | CTA band background on all five pages, and the base of `og-image.png` |

Backgrounds carry a translucent scrim so foreground text keeps AA contrast. The three cutout PNGs (03, 05, 09) have transparent backgrounds so they sit on the cream surface. `og-image.png` is a 1200x630 render of image 12 with the site headline composited in white Plus Jakarta Sans.

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
