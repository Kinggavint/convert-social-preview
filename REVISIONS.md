# Convert Social Proof Site - Open Items and Placeholders

## Change log

### v2, 2026-08-05 - rebuilt on client brand imagery
- The palette was rebuilt from the twelve images the client uploaded at onboarding. Navy `#0F1E3C`, orange `#F27021`, and warm cream `#FAF6F0` replace the indigo and coral used in v1. Charcoal `#1A1F2E` carries body copy and muted grey `#5A6478` carries secondary lines.
- All twelve client images are now in use across the five pages. See the Assets table in `README.md` for the placement of each one.
- The header and footer logo mark was recoloured from indigo and coral to navy and orange, in the inline SVG on all five pages and in `assets/img/logo.svg` and `assets/img/favicon.svg`.
- `assets/img/og-image.svg` was replaced by a real 1200x630 `assets/img/og-image.png`, rendered from client image 12 with the headline composited in Plus Jakarta Sans. All five pages now point at the PNG.
- Copy did not change. Every headline, service description, FAQ answer, pricing line, and testimonial quote is identical to v1, including the three verbatim quotes.
- The position based scroll reveal and its four second failsafe are unchanged.

Everything below needs client input or a decision before this proof becomes a production site. Items are grouped by urgency.

## 1. Blocking before launch

### 1.1 Phone number
- **Placeholder used:** `[PHONE_TBD]`
- **Where:** `contact.html` contact list, and the footer on all five pages
- **Why:** No verified phone number was supplied. No number was invented.
- **Needed:** The real business number, or confirmation that Convert Social is email and booking only. If email only, the phone row should be removed from `contact.html` and the footer rather than left blank.

### 1.2 Contact form endpoint
- **Placeholder used:** `<form action="#" method="post">` on `contact.html`
- **Current behavior:** `assets/js/main.js` intercepts submit, prevents the post, and shows a status message directing the visitor to email instead. No data is captured or sent anywhere.
- **Needed:** A real endpoint. Options: the existing GoHighLevel form handler, a Formspree or Basin endpoint, or a serverless function. Once supplied, update `action`, remove the JS interception in `initForm`, and add a success page or inline confirmation.
- **Also needed:** Decide whether the form should create a contact record in the current CRM, and whether the industry dropdown values must match CRM field values exactly.

### 1.3 Canonical domain
- **Placeholder used:** `https://www.myconvertsocial.com` as the base for canonical tags, Open Graph URLs, `robots.txt` sitemap reference, `sitemap.xml` locations, and all schema `@id` values
- **Why:** The proof is currently served from GitHub Pages at `https://kinggavint.github.io/convert-social-preview/`, which is not the intended production domain.
- **Needed:** Confirm the final production hostname, including whether it uses the `www` prefix. Every canonical, Open Graph URL, sitemap entry, and schema `@id` must be regenerated against it. Do not leave the placeholder domain live, since canonicals pointing at a different host will suppress indexing of the served pages.

### 1.4 Email address verification
- **Value used:** `hello@myconvertsocial.com` in the footer, `contact.html`, the JS form fallback message, and Organization schema
- **Needed:** Confirm this mailbox exists and is monitored. If the real inbox is different, for example `abbie@`, update all five occurrences.

## 2. Assets to replace

### 2.1 Open Graph and Twitter share image
- **Current state:** `assets/img/og-image.png`, a real 1200x630 PNG. The base layer is client image 12, the orange to navy gradient mesh, with a navy scrim and the headline "Consistency Is Key, At a Price You Can Afford" composited in white Plus Jakarta Sans. All five pages reference it in `og:image` and `twitter:image`.
- **Why it may still be revised:** The artwork is assembled from a client background plus generated type, not a share card designed as a share card. Facebook, LinkedIn, and X now render it correctly, so this is no longer blocking.
- **Needed if desired:** Confirm the current card is acceptable, or supply a purpose-designed 1200x630 PNG with final brand typography and any tagline the client prefers.

### 2.2 Favicon
- **Placeholder used:** `assets/img/favicon.svg`, the same geometric mark as `logo.svg`
- **Needed:** Confirm the mark is acceptable, or supply the official Convert Social logo. For broad browser support also add a 32x32 `favicon.ico` and a 180x180 `apple-touch-icon.png`, then add the matching `link` tags.

### 2.3 Logo
- **Current state:** A geometric mark, a rounded speech bubble containing an upward trend arrow, recoloured in v2 to the client palette: navy `#0F1E3C` bubble with an orange `#F27021` arrow head, and a white bubble with the same orange arrow in the footer where it sits on navy. Used inline in the header and footer of all five pages and as `assets/img/logo.svg` and `assets/img/favicon.svg`.
- **Why it may still be revised:** The colours now come from the client imagery, but the mark itself is still a build-time design rather than a supplied brand asset.
- **Needed:** The official Convert Social logo files if one exists. If not, confirm whether this mark should be developed into the real identity.

### 2.4 Photography and illustration
- **Current state:** All imagery on the site comes from the twelve PNGs the client uploaded at onboarding. That includes the photographic desk flat lay in the home hero, the three client-type photographs in the testimonials banner, the illustrated team in the founder section, and the icon sets, growth chart, badge, and background textures. Nothing is stock and nothing is generated art. Testimonial and client identities still use initials in coloured circles, and no photograph of Abbie Green appears anywhere.
- **Needed if desired:** A real headshot of Abbie Green could replace the illustrated team image in the founder section on `index.html`. Optional client headshots for the testimonial cards would need written permission from each person, so until permission exists the initial avatars stay.
- **Needed for the client photo triptych:** Confirm the three people shown in `06-client-type-triptych.png` are cleared for use on the production site, since the section sits directly above named testimonials and a visitor may read the two as connected.

## 3. Content decisions

### 3.1 Will Taylor testimonial
- **Decision taken:** No quote was available from the source site, so none was written. Will Taylor of Scaling with Media appears only in the "Also working with" name strip on `testimonials.html`, alongside a note that written testimonials from these clients are being collected. His initials also appear in the hero avatar stack on `index.html`.
- **Needed:** Either a real quote from Will Taylor, in which case a fourth testimonial card can be added to `testimonials.html` and to the Review schema, or confirmation to keep him in the name strip only, or instruction to remove him entirely.

### 3.2 Testimonial verification
- **Current state:** Three testimonials are reproduced verbatim from the brief: Scott McDonald (Consultant), Faheem Qazi (Dental), TJ McLelland (Real Estate). Wording, punctuation, and the `1k$` and `$300` figures in the Scott McDonald quote are unchanged from the source.
- **Needed:** Confirmation that each person consents to being quoted by name on the production site. Review schema publishes their names, so consent should be on record.
- **Note:** Review schema includes a 5 out of 5 `reviewRating` for each testimonial. The source did not include star ratings. Either confirm each client would rate the service 5 out of 5, or the `reviewRating` blocks should be removed to keep the markup strictly accurate.

### 3.3 Platform list
- **Assumption made:** The FAQ answer about platforms names Facebook, Instagram, LinkedIn, and X.
- **Needed:** Confirm the actual platforms Convert Social posts to. Add TikTok, YouTube, Pinterest, or Google Business Profile if they are in scope, and remove any that are not.

### 3.4 Response time and turnaround claims
- **Assumptions made:** "Same business day, Monday through Friday" response time on `contact.html` and in the footer of the contact form, "Same day turnaround on urgent posts" on `how-it-works.html`, and "Fifteen minutes is usually enough" for the intro call.
- **Needed:** Confirm each claim is accurate, or supply the real figures. These are service promises and should not go live unverified.

### 3.5 Intro rate framing
- **Current state:** The pricing card is labeled "Intro rate" because the brief describes $200 per month as an intro rate.
- **Needed:** Clarify whether $200 is time limited or introductory in any way, and if so, what the rate becomes afterward and how long the intro period lasts. If it is simply the standard price, the "Intro rate" badge should be changed to something like "One plan".

### 3.6 Cancellation language
- **Assumption made:** "No long-term contract" from the brief, plus "Cancel any time. Billed monthly" on the pricing card.
- **Needed:** Confirm the actual cancellation terms, including whether notice is required before the next billing date.

### 3.7 Pricing comparison table
- **Current state:** The `pricing.html` comparison table contrasts handling social media in house with using Convert Social. Rows are qualitative, for example "Several subscriptions" versus "None, included". No competitor is named and no dollar savings figure is claimed beyond the Scott McDonald quote.
- **Needed:** Confirm the framing is acceptable, or supply real figures if a quantified comparison is preferred.

### 3.8 Business address
- **Current state:** No street address is published. Schema uses `areaServed: US` and `foundingLocation: United States` only, with no `PostalAddress`.
- **Needed:** If Convert Social wants local search visibility in a specific city, a real address and a Google Business Profile are required, and `PostalAddress` plus `LocalBusiness` schema should be added. If the service is purely national and remote, the current setup is correct as is.

## 4. Tracking and integrations not yet installed

### 4.1 Analytics
- **Current state:** No analytics, tag manager, pixel, or heatmap script is present on any page.
- **Needed:** The client decision on Google Analytics 4, Google Tag Manager, or an alternative, plus the measurement ID. Also confirm whether a Meta or LinkedIn pixel is wanted, and whether a cookie consent notice is required for the intended audience.

### 4.2 Search Console and site verification
- **Needed:** A Google Search Console property for the production domain, sitemap submission at `sitemap.xml`, and any verification meta tag the client wants embedded.

### 4.3 Booking link
- **Current state:** Every "Book a call with Abbie" button points to `contact.html`. On the contact page itself, the button in the "Prefer to talk it through" card points back to the same page, which is a dead end.
- **Needed:** A real scheduling link, for example Calendly or the GoHighLevel calendar. Once supplied, point the primary CTA at it site wide and fix the self-referencing button on `contact.html`.

## 5. Verified compliance state at handoff

Confirmed by grep across every text file in `proof/` after the v2 rebuild. Binary image assets are excluded from the grep because byte patterns produce false positives.

| Rule | Count |
| --- | --- |
| Em dashes | 0 |
| En dashes | 0 |
| Exclamation points in copy or UI | 0 |
| Uses of the word f-r-e-e | 0 |
| Mentions of the AI vendor or any build agency | 0 |
| Emoji characters | 0 |

Notes on the exclamation point check: the only exclamation characters in the repository sit inside the required HTML5 doctype declaration, one per HTML page, which the standard mandates. There are none in body copy, headings, button labels, form labels, alt or label text, meta descriptions, schema strings, CSS, or JavaScript. The source testimonials were reproduced without adding any.

Notes on the vendor mention check: no build agency, AI tool, or vendor branding appears anywhere in markup, meta tags, comments, or schema. The `author` meta on every page is `Convert Social`, and the footer credits Convert Social and Abbie Green only.

## 6. Known non-blocking items

- `assets/img/` holds the twelve client PNGs, the 1200x630 `og-image.png`, and two SVG marks. Client images were resized for web delivery and the three cutouts were given transparent backgrounds. No other processing was applied.
- The growth chart in `08-growth-chart-infographic.png` carries fabricated figures. It is captioned directly below the image, in muted grey, as an illustrative growth pattern with results varying per client and platform. Do not present it as client data.
- The scroll reveal is position based rather than observer based. Sections are visible by default in CSS and are only hidden once the script confirms it is running, they are revealed on any scroll or resize including instant anchor jumps, reduced motion shows everything immediately, and a four second failsafe reveals anything still hidden. A script failure can never blank out a section.
- Orange is never used as small text on cream. Orange text on light surfaces uses `#A63F08`, and the brand orange `#F27021` appears as a fill behind navy text or as large or decorative elements only.
- `sitemap.xml` has `lastmod` set to the build date, 2026-08-05. Regenerate it on the next content change.
- The site is served from a GitHub Pages subpath during review. All internal links are relative, so they resolve correctly on both the subpath and a future root domain. The absolute URLs in canonicals, Open Graph tags, sitemap, and schema are the only values tied to the domain, and all are listed in item 1.3.
