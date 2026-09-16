# Toughjobs Project Instructions

## Engineering principles

- **Never add `!important` without asking first.** Ask the user before inserting any `!important` rule. It is a bandaid that masks specificity/ordering problems.
- **Fix root causes, not symptoms.** Prefer solving the underlying problem (remove the offending script, fix the source rule, correct the asset) over layering overrides on top of it.

## 🔓 UNLOCKED (temporary) — user directive, until they say otherwise

The user has instructed that ALL previously-locked files below are unlocked and may
be edited freely without asking per-change permission. This overrides the lock list
until the user says to re-lock them.

- `sticky-cta.js` — the top-right "Start Assessment" badge
- `shared-header.html` — the Universal Header markup
- `shared-header.css` — Universal Header styles
- `inject-header.js` — header injection script
- `trade-base.css` — shared trade-page styles
- `trade-page-template.jsx` — source of truth for all 27 trade pages
- `trade-data.js` — trade content data

A frozen known-good copy of every previously-locked file lives in `_LOCKED/2026-06-30/`.
If a live file gets damaged, restore it from there.
Do NOT edit anything inside `_LOCKED/` — it is the backup of last resort.

## Brand Identity

**Logo**: `assets/toughjobs-monogram-logo.webp` — this is the file the live nav and footer actually reference (via `shared-header.html`); `assets/toughjobs-monogram-logo.png` also exists as a fallback/export but is not what's wired into markup. Do not create, use, or reference any other logo files (no `toughjobs-logo-static.png`, no `toughjobs-monogram.png`). This logo must remain consistent across all pages.

**Colors**:
- Primary Red: `#C8262A`
- Dark Red: `#A90100`
- Navy: `#002768`
- Ink (black): `#0A0F1C`
- White: `#FFFFFF`
- Gray background: `#282828`

**Typography**:
- Display/Headlines: "Archivo Black", sans-serif (all-caps, tight tracking), title-text: red or white
- Body/UI: "Archivo", sans-serif (weights 400-800)
- Monospace: system monospace for technical details

**Never use a bright red (`bg-red` / `#C8262A`-family) full-section or full-band background — anywhere on the site.** The user strongly dislikes large red fields (e.g. a red CTA band). Eliminated site-wide 2026-09-02 (all `bg-red ctaband` sections converted to `bg-dark`). Red stays an accent only: buttons, underlines, small UI details, eyebrow text. **The standard closing-CTA-band background is `bg-dark`** (`#0B1326`, near-black with the navy blueprint texture — reads as a dark blue/purple) — use this class for CTA bands going forward, never `bg-red`.

## Layout Rules (apply to every page)

**Never let two same-background sections touch.** Adjacent sections must contrast each other — alternate light (white) ⇄ dark (ink/navy). A white section must never sit directly above or below another white section; the same goes for two dark sections. If two same-color sections would end up adjacent, merge them into one or change one's background. Going down a page the backgrounds should visibly alternate.

**Text color contrast — critical for readability:**
- Navy backgrounds (`#002768`) → use white (`#FFFFFF`) or red (`#C8262A`) text ONLY. Never use navy or near-navy text on navy backgrounds.
- Ink backgrounds (`#0A0F1C`) → use white or red text ONLY.
- White backgrounds → use navy, ink, or red text.
- Always test: text must have strong, visible contrast with its background. Blue-on-blue or any color-on-similar-color is unreadable and must be fixed immediately.
- **Never use the navy accent (`.accent2c` / `#002768`) for text on ink or navy backgrounds** — it disappears. On dark heroes and dark sections, accent/highlight words must be RED (`#C8262A`) or WHITE. Reserve navy-colored text for white/light backgrounds only.

**White containers on white/light backgrounds must have a drop shadow.** Any white (or near-white) card, box, or container sitting on a white or light-textured background needs `box-shadow:0 0 2px 0 rgba(10,15,28,.35)` (a subtle 2px-blur shadow) so its edges separate from the background. Never place a white container on a white background with no shadow — it visually disappears.

## Project Structure

See `CLAUDE.archive.md` for the last-known directory tree (re-check the filesystem — it goes stale).

## Navigation — Canonical Spec (apply to EVERY page)

This is the single source of truth. Every page must match this exactly.

**The nav is a shared, injected header — never hand-copy nav HTML into a page.**
Every page links `shared-header.css` and loads `inject-header.js`, which fetches and
injects the markup from `shared-header.html` at runtime (plus the mobile drawer markup
at the bottom of that same file). To change the nav anywhere on the site, edit
`shared-header.html` once — every page picks it up automatically. There is no
`components.jsx` and no per-page nav HTML to keep in sync.

### Structure (left → right)
1. **Logo** — `assets/toughjobs-monogram-logo.webp`, links to `index.html`
2. **Nav Links** (main menu, left-to-right order):
   - `TRADES ▾` → mega-menu dropdown (fallback link `trades.html`), grouped into 5
     categories (Building & Construction, Mechanical & Essential, Finishing &
     Maintenance, General Services & Maintenance, Outdoor & Landscaping), each linking
     to an individual `trade-*.html` page
   - `ABOUT` → `about.html`
   - `SERVICES ▾` → mega-menu dropdown, grouped into 4 categories (Grow & Get Found,
     Brand & Reputation, Systems & Growth, State Licensures), each linking to an
     individual service page (`websites.html`, `seo.html`, `local-seo.html`,
     `paid-ads.html`, `video-creation-editing.html`, `email-marketing.html`,
     `conversion-rate-optimization.html`, `branding.html`, `social-media.html`,
     `reviews.html`, `print-collateral.html`, `clothing-apparel.html`, `software.html`,
     `ai-automations.html`, `database-reactivation.html`, `coaching.html`,
     `llc-filing.html`)
   - `AREAS` → `service-areas.html`
   - `FREE TOOLS` → `free-tools.html`
   - `CONTACT` → `contact.html`
   - `TRADE QUIZ` → `quiz-hub.html`
3. **Right side** (in order):
   - Phone: `(309) 929-9080` as plain text link to `tel:3099299080`
   - CTA button: "Request a Quote" → `contact.html` (red accent, white text)
   - Mobile only: hamburger toggle opening `#mobileDrawer` (Trades and Services
     collapse into expandable sub-lists there)

**There is no standalone `services.html` page**, and Partnerships is no longer a
top-level nav link — it lives in the footer only (`partnerships.html`). If prose on a
page needs to link generically to "the services," point it at `index.html#services`
(the services grid section on the homepage) rather than inventing a services.html link;
if one specific service clearly applies, link that page directly instead (e.g. a
mention of website teardown → `websites.html`).

### Behavior
- Height: 160px, shrinks 50% on scroll
- Background: ink (`#0A0F1C`)
- Link style: Archivo 700, uppercase, white; hover → red underline + red text
- Active page link gets red underline (permanent)

### Page-Specific Sub-Buttons (BELOW main nav, in the header corners)
These appear only on specific pages — do NOT show on all pages.

**Placement rule (memorize — never place them any other way):**
- **Start Assessment** badge → **top-RIGHT** corner, under the header (`sticky-cta.js`)
- **Go Back** badge → **top-LEFT** corner, under the header (`back-cta.js`)
- On **service detail pages, show BOTH**: Go Back (top-left) + Start Assessment (top-right). They live in opposite corners so they never overlap.

| Button | Page(s) | Style |
|---|---|---|
| **Start Assessment** | Homepage, main marketing pages, service detail pages | Red circular spinning badge, top-right (`sticky-cta.js`) |
| **← Go Back** | Service detail pages (websites.html, local-seo.html, paid-ads.html, etc.) | Red circular spinning badge, top-left (`back-cta.js`) |


## Key Design Elements

### Services Section
- Girl with saw image positioned on LEFT side (`assets/girl-saw.png`)
- Headline: "Four levers / Every one / pulled hard WITH PURPOSE" (right-aligned)
  - "Four levers" — white
  - "Every one" — white
  - "pulled hard" — red
  - "WITH PURPOSE" — red
- 4 service cards in grid with engineering schematic background at 50% opacity
- Cards: Websites, SEO, Paid, Branding
  - Card titles (blurbs): white by default, turn red on hover
- Every page with have Nav Bar.

### Wraps Section

- Headline: "Your fleet is the / biggest billboard / you'll / never pay rent on."
  - "Your fleet is the" — white
  - "biggest billboard" — white
  - "you'll" — red
  - "never pay rent on." — red
- Buttons: "See the wrap gallery" and "Get a wrap quote" — white text, larger font (15px, bold)
- 3 wrap tiles: Trailer (featured left), Service Truck (top-right), Fleet Sedan (bottom-right)
- Stats strip at bottom with 4 metrics
  - Metric numbers: red
  - Metric descriptions: white (changed from gray)

### Statement Section

- Principle statement: "If your site doesn't rank," - white
. It's an expense." - red
  - Main text: white

### Service Area
- Stamp-style city tiles (default)
- 12 cities in 3-column grid
- Each tile: zone code, distance, city name
- Hover: flip to red accent, fade in "Active service zone →"
- Headline: "Central / Illinois. / Boots on the ground."
  - "Central" — white
  - "Illinois." — white
  - "Boots on the ground." — red
- Description paragraph: white text (changed from gray)

## Tweaks System

Users can adjust:
- Palette (navy-led, red-led, mono-accent)
- Accent hue (6 preset colors)
- Headline style (split, solid, outlined)
- Density (spacious, compact)
- Hero variant (photo vs. geometric-typographic)
- City tile style (sweep, stamp, pin, slash)

Tweak defaults stored in `window.__TWEAK_DEFAULTS__` in `index.html`.

## Rules for Editing

1. **ALWAYS read the ENTIRE file** before editing — never use partial reads or assume you know the current state
2. **When the user mentions manual edits**, re-read the full file first to see what they changed
4. **The nav is in `shared-header.html`**, injected site-wide by `inject-header.js` — do not create separate nav files or hand-copy nav HTML into a page
5. **Preserve comment anchors** (`data-comment-anchor` attributes) when editing
6. **Use canonical HTML** — close all non-void elements explicitly, double-quote all attributes


## Assets Currently in Use

See `CLAUDE.archive.md` for the last-known asset list (re-check `assets/` — it goes stale).

## Contact Information

- Phone: (309) 929-9080


## Notes

- Client has manually edited files via Mark Up / Edit tools — always check current file state before changing
- Halftone textures use radial-gradient patterns for visual depth
- All sections use CSS custom properties for colors (set in `app.jsx` based on Tweaks)
