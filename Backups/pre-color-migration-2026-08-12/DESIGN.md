---
name: ToughJobs
description: Full-stack trade marketing — brand, wraps, print, web, SEO, and AI in one shop
colors:
  red: "#C8262A"
  red-dark: "#A90100"
  navy: "#002768"
  ink: "#0A0F1C"
  blueprint-dark: "#001a4a"
  gray-bg: "#282828"
  white: "#FFFFFF"
  smoke: "#5B6471"
  mute: "#C7CBD2"
  hairline: "#E5E7EB"
  surface: "#FCFCFD"
  surface-alt: "#F4F5F7"
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
spacing:
  section: "120px"
  section-compact: "80px"
  container-pad: "32px"
  md: "24px"
  sm: "16px"
  xs: "8px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "16px 26px"
  button-primary-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "16px 26px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 26px"
---

# Design System: ToughJobs

## Overview

**Creative North Star: "The Blueprint Workshop"**

ToughJobs reads like a contractor's blueprint rolled out on a steel workbench — precise, unambiguous, and built to be read at arm's length with grease on your hands. The visual language borrows directly from engineering drawings: dimension arrows, revision clouds, drawing stamps, registration marks. Every annotation has a functional origin; nothing decorates for its own sake. This is a system built by people who understand that the truck wrap comes before the website, and who design both to the same standard.

The palette is strictly industrial: Ink black and Blueprint navy for authority, Signal Red for action and emphasis, white for breathing room. Section edges slice at a shallow angle (the `clip-path` chevron at 60–64%) rather than rounding or dissolving — transitions are structural, not decorative. Density is generous by default (120px vertical rhythm), communicating that the brand has room to spare and doesn't need to crowd to make an argument.

Sections alternate light and dark without exception. Voice is direct and trade-specific — evidence first, no agency jargon.

**Key Characteristics:**
- Hard-edged throughout: zero border-radius on buttons, cards, and containers
- Two-font system (Archivo Black for display, Archivo for everything else) from the same family
- Split two-tone headlines: one clause in white or ink, the next in Signal Red
- Blueprint decoration (drawing stamps, registration crosshairs, stroke-reveal annotations) on homepage only
- Alternating light ↔ dark sections at every page boundary, with angled clip-path dividers
- Red is reserved for CTAs, emphasis spans, and active states — never background texture

---

## Colors

Ink and Red carry the system; Navy is a secondary authority color; all warm whites and light surfaces are near-neutral.

### Primary
- **Signal Red** (`#C8262A`): The action color. Used on primary CTA buttons, headline emphasis spans, active nav states, hover inversions, and accent eyebrows. One voice; its rarity gives it authority.
- **Dark Red / Logo Red** (`#A90100`): The identity red used in the logo mark. Applied when a deeper, more grounded red is needed — logo contexts only, not general UI.

### Secondary
- **Brand Navy** (`#002768`): Authority color for alternate palette lead. Used as section background when a third surface color is needed between ink and light, and in focus ring shadow.
- **Blueprint Dark** (`#001a4a`): Blueprint page background — darker and cooler than navy, used with the grid-texture overlay on services, about, and contact pages.

### Neutral
- **Ink** (`#0A0F1C`): Near-black. Default text on light, primary dark-section background, navigation background.
- **Gray BG** (`#282828`): Medium dark surface for mid-depth sections.
- **Smoke** (`#5B6471`): Body text on light backgrounds. Lower contrast than ink; used for secondary prose.
- **Mute** (`#C7CBD2`): Muted headline spans. Used in split headlines for the "quiet" clause when three tones are needed.
- **Hairline** (`#E5E7EB`): Borders and dividers on light surfaces.
- **Surface** (`#FCFCFD`): Default light section background. Near-white but not pure white.
- **Surface Alt** (`#F4F5F7`): Alternate light section background for mild contrast between adjacent light sections.
- **White** (`#FFFFFF`): Text on dark, negative space, card faces.

### Named Rules
**The One Voice Rule.** Signal Red (`#C8262A`) is the only accent color in the UI. It appears on CTAs, emphasis spans, hover states, and active nav markers. Any second accent color belongs to a specific interior-page accent band only, never system-wide. When Red is everywhere, it means nothing.

**The Dark Text on Dark Rule.** Navy (`#002768`) text is never used on ink or navy backgrounds — it disappears. On dark sections, emphasis text is always Red or White. Navy text is reserved for white and light-surface contexts only.

---

## Typography

**Display Font:** Archivo Black (900 weight, self-hosted WOFF2), sans-serif
**Body/UI Font:** Archivo (400–800 weights, self-hosted WOFF2), same family
**Label/Mono:** `ui-monospace, Menlo, Consolas` — used sparingly for drawing stamps and technical callouts only

**Character:** The single-family system (Archivo / Archivo Black) reads as a unified voice that shifts register by weight rather than by personality. The Black cut is the job-site foreman speaking; the regular cuts are the spec sheet underneath. No decorative faces, no serif counterpoints.

### Hierarchy
- **Display** (900 weight, `clamp(59px, 8.4vw, 126px)`, line-height 0.95): Hero headlines only. Always all-caps with tight letter-spacing (-0.01em). Often split into two-tone spans.
- **Headline** (900 weight, `clamp(40px, 5vw, 72px)`, line-height 1.0): Section headers. Same treatment as display at smaller scale. All-caps.
- **CTA Headline** (900 weight, `clamp(48px, 6.5vw, 104px)`, line-height 0.95): Statement sections where the headline is the primary action driver.
- **Body** (400 weight, 17–18px, line-height 1.6): Prose content. Smoke (`#5B6471`) on light, White on dark. Comfortable reading measure.
- **Label** (800 weight, 13px, 0.06em tracking, all-caps): Button copy, card labels, UI text. The working register.
- **Eyebrow** (800 weight, 12px, 0.08em tracking, all-caps): Section openers. Always in Signal Red or muted ink. Appears above headlines to classify the section type.

### Named Rules
**The Split Headline Rule.** Two-tone headlines use the `.display.split` pattern: one clause in white or ink (the setup), the next in Signal Red (the punch). A third clause in Mute (`#C7CBD2`) is available when the copy needs a quieter third beat. Never more than three tones in one headline.

**The Eyebrow Rule.** Every major section opens with an eyebrow (12px, 800 weight, uppercase, red) before the headline. It classifies; the headline punches.

---

## Layout

Container max-width is 1240px, centered, with 32px (clamp to 18px on mobile) horizontal padding. Sections build their own internal layout using CSS Grid or Flexbox as needed.

Section vertical rhythm is 120px padding by default, compressing to 80px in compact mode. Sections use `min-height: clamp(680px, 80vh, 900px)` with flex centering when equal visual weight is needed (`.section-equal`).

**Angled dividers.** Every section edge except the last carries a 14px clip-path chevron:
```
clip-path: polygon(0 0, 100% 0, 100% calc(100% - 14px), 64% calc(100% - 14px), 60% 100%, 0 100%)
```
This creates an angular step at the bottom-right of each section — a structural seam, not a decorative wave. Mobile collapses to 10px depth.

**Alternation is mandatory.** Adjacent sections must be visually distinct: light ↔ dark, never light ↔ light or dark ↔ dark. The footer is dark navy and counts as a neighbor; the final `<section>` before `</footer>` must be light or red.

**Navigation.** Sticky header, 120px tall (full) → 60px (scrolled at 50px threshold). Ink background always. Collapses to hamburger drawer below 1080px.

---

## Elevation & Depth

The system is flat by default. Shadows appear in exactly one context: a white or near-white container on a white or light-textured background, where edge separation must be explicit.

**The Flat-By-Default Rule.** Depth is created through color contrast (alternating sections), structural edges (the clip-path divider), and image layering — not shadow stacking. `box-shadow: 0 0 2px 0 rgba(10,15,28,.35)` is a boundary marker for white-on-light surfaces, not an elevation metaphor.

### Shadow Vocabulary
- **Surface separation** (`box-shadow: 0 0 2px 0 rgba(10,15,28,.35)`): Applied to white containers on white/light backgrounds. The only shadow in the system.
- **Hover lift** (`transform: translateY(-4px)`): Insight cards rise on hover. Motion depth, not shadow depth.
- **Mobile drawer** (`box-shadow: -20px 0 60px rgba(0,0,0,.5)`): Heavy left-edge shadow separating the nav drawer from page content.

---

## Shapes

The form language is angular and structural. Zero border-radius on all interactive elements — buttons, cards, input fields, dropdowns. Cut edges, welded joints, nothing eased.

**Section transitions** use the angled clip-path chevron described in Layout — geometry doing structural work.

**The No-Radius Rule.** All interactive components have `border-radius: 0`. The only exception is pill-shaped badges (card index numbers, "View build →" overlays), which use ~100px radius as a deliberate contrast signal against the otherwise hard-edged system.

---

## Components

### Buttons
Hard-edged and deliberate. Zero radius, weight and tracking do the work.

- **Shape:** Zero radius (0px)
- **Primary:** Red (`#C8262A`) background, white text. Padding 16px 26px. 13px, 800 weight, 0.06em tracking, all-caps.
- **Hover:** `filter: brightness(0.92)` — darkens without color shift
- **Active:** `transform: translateY(1px)` — tactile press
- **Dark variant:** Ink (`#0A0F1C`) background, white text. Same sizing.
- **Ghost variant:** Transparent background, 2px solid ink border, ink text. Inverts to solid ink on hover.
- **Focus:** White 3px outline, 3px offset, 6px navy shadow ring.

### Cards / Containers
- **Corner Style:** Zero radius
- **Background:** Service cards red at rest → ink on hover; insight cards always red; wrap tiles full-bleed photo
- **Shadow Strategy:** White cards on light backgrounds only: `box-shadow: 0 0 2px 0 rgba(10,15,28,.35)`
- **Border:** None on most cards; nav dropdown has `border-top: 3px solid var(--red)`
- **Internal Padding:** 32px standard; section padding 120px vertical

### Navigation
- **Style:** Full-width sticky bar, ink background, white Archivo 11.5px 700 weight, 0.04em tracking, all-caps
- **Hover/Active:** Signal Red text, 2px solid red bottom border — 0.15s ease
- **Dropdown:** Mega-menu (920px) or compact (220px), ink background, 3px red top border
- **Mobile:** Hamburger → right-side drawer `min(86vw, 360px)`, 0.3s slide-in
- **Scroll behavior:** Height shrinks 50% at 50px scroll threshold, 0.3s ease

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

---

## Do's and Don'ts

### Do:
- **Do** alternate section backgrounds (light ↔ dark) on every page. The rule is absolute — treat the footer as a dark section when checking the final boundary.
- **Do** use Signal Red for emphasis spans in split headlines on both dark and light backgrounds.
- **Do** apply `box-shadow: 0 0 2px 0 rgba(10,15,28,.35)` to any white or near-white container placed on a light background.
- **Do** keep all interactive components at zero border-radius. Pill shapes (badges, index numbers) are the only permitted circular treatment.
- **Do** open every major section with an eyebrow (12px, 800 weight, uppercase, red) before the headline.
- **Do** limit Signal Red to CTAs, emphasis spans, active states, and eyebrows. Its power comes from scarcity.

### Don't:
- **Don't** use Navy (`#002768`) as text color on ink or navy backgrounds — it disappears. Use White or Red on all dark sections.
- **Don't** add `!important` to any rule without explicit user approval — it masks specificity problems.
- **Don't** place two same-color sections adjacent: no light-next-to-light, no dark-next-to-dark, ever.
- **Don't** introduce a second typeface — all type is Archivo (regular cuts) or Archivo Black (display cut). No serifs, no geometric sans alternatives.
- **Don't** add border-radius to buttons, cards, or containers. The hard edge is the identity.
- **Don't** use fabricated testimonials, stock statistics, or invented client proof — the copy policy applies site-wide.
- **Don't** invent new accent colors beyond what the palette defines. Yellow-gold and warm amber are used on interior page accent bands only and are not system-wide tokens.
