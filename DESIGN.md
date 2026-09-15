---
name: ToughJobs
description: Full-stack trade marketing — brand, wraps, print, web, SEO, and AI in one shop
colors:
  red: "#C8262A"
  red-dark: "#981B1F"
  red-on-dark: "#E8484C"
  navy: "#081B33"
  ink: "#0A0F1C"
  blueprint-dark: "#001a4a"
  gray-bg: "#17212D"
  white: "#FFFFFF"
  smoke: "#5B6471"
  mute: "#C7CBD2"
  hairline: "#E5E7EB"
  surface: "#FCFCFD"
  surface-alt: "#F4F5F7"
  mix-lever-b-orange: "#F0A030"
  mix-lever-c-blue: "#7DA8FF"
typography:
  display:
    fontFamily: '"Archivo Black", sans-serif'
    fontSize: "clamp(59px, 8.4vw, 126px)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontFeature: "text-transform: uppercase"
  headline:
    fontFamily: '"Archivo Black", sans-serif'
    fontSize: "clamp(40px, 5vw, 72px)"
    fontWeight: 900
    lineHeight: 1.0
    letterSpacing: "-0.01em"
    fontFeature: "text-transform: uppercase"
  hero-h1:
    fontFamily: '"Archivo Black", sans-serif'
    fontSize: "clamp(40px, 4.6vw, 66px)"
    fontWeight: 900
    lineHeight: 0.95
    fontFeature: "text-transform: uppercase"
  hero-h2:
    fontFamily: '"Archivo Black", sans-serif'
    fontSize: "clamp(28px, 4vw, 48px)"
    fontWeight: 900
    lineHeight: 1.0
    letterSpacing: "-0.01em"
    fontFeature: "text-transform: uppercase"
  cta-headline:
    fontFamily: '"Archivo Black", sans-serif'
    fontSize: "clamp(48px, 7vw, 96px)"
    fontWeight: 900
    lineHeight: 0.95
  body:
    fontFamily: '"Archivo", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '"Archivo", sans-serif'
    fontSize: "13px"
    fontWeight: 800
    letterSpacing: "0.06em"
    fontFeature: "text-transform: uppercase"
  eyebrow:
    fontFamily: '"Archivo", sans-serif'
    fontSize: "12px"
    fontWeight: 800
    letterSpacing: "0.08em"
    fontFeature: "text-transform: uppercase"
rounded:
  none: "0px"
  badge: "4px"
  pill: "100px"
spacing:
  section: "120px"
  section-mobile: "64px"
  section-tight: "80px"
  container-pad: "32px"
  md: "24px"
  sm: "16px"
  xs: "8px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "18px 34px"
  button-primary-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "18px 34px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
---

# Design System: ToughJobs

## Overview

**Creative North Star: "The Blueprint Workshop"**

ToughJobs reads like a contractor's blueprint rolled out on a steel workbench — precise, unambiguous, and built to be read at arm's length with grease on your hands. The visual language borrows directly from engineering drawings: dimension arrows, revision clouds, drawing stamps, registration marks. Every annotation has a functional origin; nothing decorates for its own sake. This is a system built by people who understand that the truck wrap comes before the website, and who design both to the same standard.

The palette is strictly industrial: Ink black and Blueprint navy for authority, Signal Red for action and emphasis, white for breathing room. Density is generous by default (120px vertical rhythm on desktop, stepping down to 64px on mobile), communicating that the brand has room to spare and doesn't need to crowd to make an argument.

Sections alternate light and dark without exception. Voice is direct and trade-specific — evidence first, no agency jargon.

**Key Characteristics:**
- Hard-edged throughout: zero border-radius on buttons and cards, with a documented small-badge exception (4px)
- Two-font system (Archivo Black for display, Archivo for everything else) from the same family
- Split two-tone headlines: one clause in white or ink, the next in Signal Red
- Blueprint decoration (drawing stamps, registration crosshairs, stroke-reveal annotations) on homepage only
- Alternating light ↔ dark sections at every page boundary; the shared header applies a shallow angled clip-path seam between stacked `<main> > section` elements site-wide, while other clip-path shapes are one-off page decoration, not a base-CSS rule
- Red is reserved for CTAs, emphasis spans, and active states — never background texture; two secondary accents (orange, blue) exist but are bounded to a single named component, not general-purpose

---

## Brand Mark

**Logo:** `assets/toughjobs-monogram-logo.png` — the only logo file in the system. A `.webp` copy of the same mark exists at `assets/toughjobs-monogram-logo.webp` for pages that prefer it, but no other logo variant (no alternate mark, no wordmark-only or icon-only cut) is sanctioned.

- **Placement:** Nav (top-left, links to `index.html`) and footer only.
- **Size:** 150px wide × 100px tall, fixed — do not scale, crop, or re-proportion.
- **Clear space / background:** The mark is designed to sit on the Ink (`#0A0F1C`) nav and footer background; don't place it on Red or Navy fields.
- **Don't:** create, generate, or reference any other logo file (e.g. `toughjobs-logo-static.png`, `toughjobs-monogram.png`) — this single asset must stay consistent across every page.

---

## Colors

Ink and Red carry the system; Navy is a secondary authority color; all warm whites and light surfaces are near-neutral.

### Primary
- **Signal Red** (`#C8262A`): The action color. Used on primary CTA buttons, headline emphasis spans, active nav states, hover inversions, and accent eyebrows. One voice; its rarity gives it authority.
- **Dark Red / Logo Red** (`#981B1F`): The identity red used in the logo mark and as `--red-2`/`--dark-red` in the shared token set. Applied when a deeper, more grounded red is needed — logo contexts and dark-red gradient bands, not general UI.
- **Red on Dark** (`#E8484C`): An accessible lift of Signal Red, used ONLY for small/body-sized red text set directly on Ink (`#0A0F1C`) — nav labels, hover/active states, footer headers, ticker text. Signal Red itself is 3.4:1 on Ink (fails the 4.5:1 body-text floor); this variant clears WCAG AA. Large display/headline text (≥18.66px bold or ≥24px regular) stays on Signal Red, since large text only needs 3:1.

### Secondary
- **Brand Navy** (`#081B33`): Authority color for alternate palette lead. Used as section background when a third surface color is needed between ink and light, and in focus ring shadow. This is the site's real navy token (`--navy` in `trade-base.css`); a different, unused `#002768` value exists only as a dead `:root` declaration in `shared-header.css` and in stale non-visual docs — it has no rendered effect and is not part of this system.
- **Blueprint Dark** (`#001a4a`): Blueprint page background — darker and cooler than navy, used with the grid-texture overlay on services, about, and contact pages.

### Tertiary
- **Marketing Mix Orange** (`#F0A030`) and **Marketing Mix Blue** (`#7DA8FF`): The only sanctioned secondary accents in the system, and they are scoped entirely to the Marketing Mix lever/card component (see Components) across 6+ trade pages — lever-b and lever-c borders, letterforms, card codes, bullets, and prices. They never appear as general UI accents, buttons, or headline color outside that one component family. Do not treat them as available site-wide colors; see the One Voice Rule.

### Neutral
- **Ink** (`#0A0F1C`): Near-black. Default text on light, primary dark-section background, navigation background.
- **Gray BG** (`#17212D`): Medium dark surface for mid-depth sections.
- **Smoke** (`#5B6471`): Body text on light backgrounds. Lower contrast than ink; used for secondary prose.
- **Mute** (`#C7CBD2`): Muted headline spans. Used in split headlines for the "quiet" clause when three tones are needed.
- **Hairline** (`#E5E7EB`): Borders and dividers on light surfaces.
- **Surface** (`#FCFCFD`): Default light section background. Near-white but not pure white.
- **Surface Alt** (`#F4F5F7`): Alternate light section background for mild contrast between adjacent light sections.
- **White** (`#FFFFFF`): Text on dark, negative space, card faces.

### Named Rules
**The One Voice Rule.** Signal Red (`#C8262A`) is the only general-purpose accent color in the UI. It appears on CTAs, emphasis spans, hover states, and active nav markers. The Marketing Mix orange (`#F0A030`) and blue (`#7DA8FF`) are a bounded exception scoped to that one component family only — they do not license new site-wide accents. When Red is everywhere, it means nothing.

**The Dark Text on Dark Rule.** Navy (`#081B33`) text is never used on ink or navy backgrounds — it disappears. On dark sections, emphasis text is always Red or White. Navy text is reserved for white and light-surface contexts only.

---

## Typography

**Display Font:** Archivo Black (900 weight, self-hosted WOFF2), sans-serif
**Body/UI Font:** Archivo (400–800 weights, self-hosted WOFF2), same family
**Label/Mono:** `ui-monospace, Menlo, Consolas` — used sparingly for drawing stamps and technical callouts only

**Character:** The single-family system (Archivo / Archivo Black) reads as a unified voice that shifts register by weight rather than by personality. The Black cut is the job-site foreman speaking; the regular cuts are the spec sheet underneath. No decorative faces, no serif counterpoints.

### Hierarchy
- **Display** (`.display`, 900 weight, `clamp(59px, 8.4vw, 126px)`, line-height 0.95): The largest homepage-scale headline role. Always all-caps with tight letter-spacing (-0.01em). Often split into two-tone spans.
- **Headline** (900 weight, `clamp(40px, 5vw, 72px)`, line-height 1.0): Section headers at homepage/interior-page scale. Same treatment as display at a smaller step. All-caps.
- **Hero H1** (`.h1-hero`, 900 weight, `clamp(40px, 4.6vw, 66px)`, line-height 0.95, white): The trade-page hero's primary line — a distinct, smaller scale step used specifically on the 27 trade pages, not interchangeable with `.display`.
- **Hero H2** (`.h2-hero`, 900 weight, `clamp(28px, 4vw, 48px)`, line-height 1.0): The trade-page hero's second line, set in Signal Red (`var(--accent)`) with a tight drop shadow — not ink/white like other headline roles, by design, since it always sits over the dark hero photo/gradient.
- **CTA Headline** (`.cta-headline`, 900 weight, `clamp(48px, 7vw, 96px)`, line-height 0.95): Statement/closing-CTA sections where the headline is the primary action driver.
- **Body** (400 weight, 17–18px, line-height 1.6): Prose content. Smoke (`#5B6471`) on light, White on dark. Comfortable reading measure.
- **Label** (800 weight, 13px, 0.06em tracking, all-caps): Button copy, card labels, UI text. The working register.
- **Eyebrow** (800 weight, 12px, 0.08em tracking, all-caps): Section openers. Always in Signal Red or muted ink. Appears above headlines to classify the section type — used selectively, not on every section (see Do's and Don'ts).

### Named Rules
**The Split Headline Rule.** Two-tone headlines use the `.display.split` pattern: one clause in white or ink (the setup), the next in Signal Red (the punch). A third clause in Mute (`#C7CBD2`) is available when the copy needs a quieter third beat. Never more than three tones in one headline.

**The Two-Scale Rule.** `.display`/`.headline` (homepage and interior-page scale) and `.h1-hero`/`.h2-hero`/`.cta-headline` (trade-page hero and CTA scale) are distinct, coexisting hierarchies, not duplicates of each other. Trade pages use the hero/CTA scale; homepage and other pages use the display/headline scale. Don't average them into one number.

---

## Layout

Container max-width is 1240px, centered, with 32px horizontal padding (16px on mobile ≤760px). Sections build their own internal layout using CSS Grid or Flexbox as needed.

Section vertical rhythm is 120px padding-block by default (`section{ padding-block: 120px }`), stepping down to 64px at the ≤760px mobile breakpoint — a responsive rhythm change, not a design choice to invoke manually. Separately, a `--pad-section-tight: 80px` custom property exists as an opt-in compact-density variable for sections that want a tighter rhythm than 120px without going to the mobile step; these are two different mechanisms and should not be conflated. Sections use `min-height: clamp(680px, 80vh, 900px)` with flex centering when equal visual weight is needed (`.section-equal`).

**Angled section seam.** The shared header stylesheet (`shared-header.css`) applies a real, site-wide seam between stacked `main > section` elements (all but the last, and any `.tj-clipped-edge` opt-in):
```
clip-path: polygon(0 0, 100% 0, 100% calc(100% - 14px), 64% calc(100% - 14px), 60% 100%, 0 100%)
```
at 14px depth on desktop, reducing to 10px (and a slightly different polygon) at ≤820px. This is the one confirmed structural, base-CSS clip-path rule. Beyond it, a handful of individual pages (`about.html`, `websites.html`, `roofing.html`, `hvac.html`, and a few others) use their own one-off `clip-path` shapes for specific decorative banners/badges — those are page-level decoration, not a shared-base convention, and should not be assumed to exist on a page that doesn't already use them.

**Alternation is mandatory.** Adjacent sections must be visually distinct: light ↔ dark, never light ↔ light or dark ↔ dark. The footer is dark navy and counts as a neighbor; the final `<section>` before `</footer>` must be light or red.

**Navigation.** Sticky header, 120px tall (full) → 84px at the ≤640px breakpoint. Ink background always. Nav links and desktop CTA/phone collapse to a hamburger drawer at ≤1080px.

---

## Elevation & Depth

The system is flat by default. Shadows appear in exactly one context: a white or near-white container on a white or light-textured background, where edge separation must be explicit.

**The Flat-By-Default Rule.** Depth is created through color contrast (alternating sections), structural edges (the header's clip-path seam), and image layering — not shadow stacking. `box-shadow: 0 0 2px 0 rgba(10,15,28,.35)` is a boundary marker for white-on-light surfaces, not an elevation metaphor.

### Shadow Vocabulary
- **Surface separation** (`box-shadow: 0 0 2px 0 rgba(10,15,28,.35)`): Applied to white containers on white/light backgrounds. The only ambient shadow in the system.
- **Button hover lift** (`transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.28);` alongside `filter: brightness(0.92)`): All `.btn` variants lift and gain a diffuse shadow on hover, on top of the brightness dim; `:active` drops the shadow and darkens further (`brightness(0.88)`).
- **Card hover lift** (`transform: translateY(-4px)`): Insight cards rise on hover. Motion depth, not shadow depth.
- **Mobile drawer** (`box-shadow: -20px 0 60px rgba(0,0,0,.5)`): Heavy left-edge shadow separating the nav drawer from page content.

---

## Shapes

The form language is angular and structural, with two documented exceptions to an otherwise hard edge.

**The No-Radius Rule (revised).** Zero border-radius is the default for buttons, primary cards, and containers — cut edges, welded joints, nothing eased. Two confirmed exceptions exist in the shared codebase itself, not just as page-level one-offs:
1. **Pills (~100px radius):** badges, card index numbers, "View build →" overlays — a deliberate circular contrast signal.
2. **Small UI badges (~4px radius):** `trade-base.css` itself defines `.service-pill{ border-radius:4px; }` for the below-hero service-link row used across trade pages, alongside a handful of other small 2–8px radii used for compact tags elsewhere in the codebase. This is a secondary, intentional exception class for small interactive tags — not a violation to sand down, and not license to add further mid-size radii elsewhere.

**Section transitions** use the header's angled clip-path seam described in Layout — geometry doing structural work.

---

## Components

### Buttons
Hard-edged and deliberate. Zero radius, weight and tracking do the work.

- **Shape:** Zero radius (0px)
- **Primary:** Red (`#C8262A`) background, white text. Padding `18px 34px`. 15px, 800 weight, 0.06em tracking, all-caps.
- **Hover:** `filter: brightness(0.92)` combined with a tactile lift — `transform: translateY(-2px)` and `box-shadow: 0 8px 28px rgba(0,0,0,0.28)`.
- **Active:** `transform: translateY(1px)`, shadow removed, `brightness(0.88)`.
- **Dark variant (`.btn-dark`):** Ink (`#0A0F1C`) background, white text. Same sizing.
- **Ghost variant (`.btn-ghost`):** Transparent background, 2px solid ink border, ink text, padding `16px 32px`. Inverts to solid ink on hover.
- **Accent/Black variants (`.btn-accent`, `.btn-black`):** hero-scoped background swaps (red, pure black) on the same base `.btn` shape — minor variants, not separate systems.
- **Focus:** White 3px outline, 3px offset, 6px navy shadow ring.

### Cards / Containers
- **Corner Style:** Zero radius
- **Background:** Service cards red at rest → ink on hover; insight cards always red; wrap tiles full-bleed photo
- **Shadow Strategy:** White cards on light backgrounds only: `box-shadow: 0 0 2px 0 rgba(10,15,28,.35)`
- **Border:** None on most cards; nav dropdown has `border-top: 3px solid var(--red)`
- **Internal Padding:** 32px standard; section padding 120px vertical (64px mobile)

### Navigation
- **Style:** Full-width sticky bar, ink background, 120px tall, white Archivo 11.5px 700 weight, 0.04em tracking, all-caps links.
- **Hover/Active:** Red-on-dark (`#E8484C`) text, 2px solid red bottom border — 0.15s ease.
- **Dropdown:** Ink-background mega-menu with a 3px red top border; the Trades menu is a 920px, 5-column grid, Services is a 560px 3-column grid, and a `.compact` 220px single-column variant exists for smaller menus.
- **Mobile:** Hamburger toggle appears at ≤1080px (desktop links, phone, and CTA hide); opens a right-side drawer (`min(86vw, 360px)`, ink background, `box-shadow: -20px 0 60px rgba(0,0,0,.5)`) that slides in over a dark backdrop, 0.3s ease, with accordion sub-lists for Trades/Services.
- **Scroll behavior:** Nav container itself does not shrink on scroll in the shared header; height only steps down at the ≤640px breakpoint (120px → 84px). (Earlier documentation described a scroll-triggered 50%-shrink animation; that is not present in the current `shared-header.css` and has been removed from this record rather than repaired, per the audit.)

### Inputs / Fields
- **Style:** No radius; ink or hairline border; background white or surface
- **Focus:** 3px white outline, 6px navy shadow ring

### Service Cards
Red at rest, ink on hover — an inversion that rewards attention.
- 380px tall in the 4-up grid; metallic geometric SVG icon; red pill badge top-left inverts on hover
- Engineering schematic grid overlay at 50% opacity; all transitions 0.25s ease

### Insights Cards
3-up equal-height grid (420px minimum). Red background always, white text, 16:10 cover image above.
- Eyebrow tag, display headline (22px), read-time bottom-right
- Hover: `translateY(-4px)` lift only — no shadow added

### Blueprint Drawing Stamps
Corner callout tags, top-right of homepage sections. Monospace, `rgba(140,170,220,.45)` on navy, `rgba(0,0,0,.35)` on red. Format: number (TJ-02), title, scale.

### City / Service-Area Tiles
**Stamp (default):** Ink card, zone code + distance in monospace eyebrow, city in display font. Hover flips to Signal Red, injects "Active service zone →".

### Sticky Assessment / Back Badges
A symmetric pair of spinning circular badges injected into `<header>` via script (`sticky-cta.js`, `back-cta.js`), not markup — a real, distinctive, site-wide component.
- **Shape/position:** absolute, `top:100%` (hangs just below the header), 134×134px outer container (92px at ≤768px) holding a spinning 112×112px (92px mobile) circular disc.
- **Start Assessment** badge: top-right (`right:0`), red (`#C8262A`) ring detail on an ink (`#0A0F1C`) disc, circular text reads "START ASSESSMENT", links to `free-tools.html`.
- **Go Back** badge: top-left (`left:0`), same disc treatment with a red back-arrow glyph, circular text reads "GO BACK", calls `window.history.back()` with a `services.html` fallback.
- **Placement rule:** both may appear together only on service-detail pages, in opposite corners, so they never overlap.

### Marketing Mix Lever/Card System
A three-lever comparison component (`trade-base.css`, 6+ trade pages) — the one place secondary accent colors are sanctioned, bounded by the One Voice Rule above.
- **Levers:** lever-a = Signal Red (`var(--accent)`), lever-b = orange (`#F0A030`), lever-c = blue (`#7DA8FF`), each driving a matching 2px header border, 56px `.mix-lever-letter`, and card accents.
- **Lever header:** `.mix-lever-title` (28px, Archivo Black, uppercase, white) + `.mix-lever-subtitle` (14px, italic, 70% white).
- **Cards (`.mix-card`):** ink background, 360px min-height, 4px top border in the lever color, white text, flex column layout; `.mix-card-title` (19px, Archivo Black, uppercase) + `.mix-card-desc` (14px) + bulleted list + price block at the bottom.
- **Responsive:** wraps to 2-up at ≤960px (5-wide grid only), stacks to a single column at ≤760px/≤560px via CSS Grid.

---

## Do's and Don'ts

### Do:
- **Do** alternate section backgrounds (light ↔ dark) on every page. The rule is absolute — treat the footer as a dark section when checking the final boundary.
- **Do** use Signal Red for emphasis spans in split headlines on both dark and light backgrounds.
- **Do** apply `box-shadow: 0 0 2px 0 rgba(10,15,28,.35)` to any white or near-white container placed on a light background.
- **Do** keep buttons, primary cards, and containers at zero border-radius. Pills (~100px) and small UI badges/tags (~4px, e.g. `.service-pill`) are the only permitted exceptions.
- **Do** limit Signal Red to CTAs, emphasis spans, active states, and eyebrows. Its power comes from scarcity.
- **Do** keep the Marketing Mix orange/blue accents scoped to that one component; don't reuse them as general UI color.

### Don't:
- **Don't** use Navy (`#081B33`) as text color on ink or navy backgrounds — it disappears. Use White or Red on all dark sections.
- **Don't** add `!important` to any rule without explicit user approval — it masks specificity problems.
- **Don't** place two same-color sections adjacent: no light-next-to-light, no dark-next-to-dark, ever.
- **Don't** introduce a second typeface — all type is Archivo (regular cuts) or Archivo Black (display cut). No serifs, no geometric sans alternatives.
- **Don't** add border-radius to buttons or primary cards. The hard edge is the identity; the pill and small-badge exceptions are already accounted for above — don't add a third.
- **Don't** treat page-level one-off `clip-path` decoration (seen on a handful of individual pages) as a systemic rule to replicate on new pages; the only confirmed shared-base clip-path is the header's section-seam.
- **Don't** use fabricated testimonials, stock statistics, or invented client proof — the copy policy applies site-wide.
- **Don't** invent new accent colors beyond what the palette defines. The Marketing Mix orange/blue are the only sanctioned secondary accents, and only inside that component.
