---
name: Toughjobs
description: Site-wide visual direction for the current Toughjobs website
updated: 2026-10-03
colors:
  ink: "#0A0F1C"
  navy: "#002768"
  blueprint-dark: "#001a4a"
  red: "#C8262A"
  red-on-dark: "#E8484C"
  white: "#FFFFFF"
  surface-alt: "#F4F5F7"
  smoke: "#5B6471"
typography:
  display: "Archivo Black"
  body: "Archivo"
layout:
  container-max: "1240px"
  header-desktop: "120px"
  header-mobile: "84px"
---

# Toughjobs design direction

This is the visual contract for the current website as a whole. DESIGN-SYSTEM.md maps it to the files and components that implement it. When documentation and a rendered page differ, inspect the page's loaded styles before changing either document.

## Identity

Toughjobs serves trade and home-service businesses. The site should feel direct, practical, and built for work in the field: strong type, high contrast, recognizable vehicles and people, useful comparisons, and clear next steps. Blueprint grids, engineering textures, crosshairs, and numbered callouts support that character. They appear on the homepage, service pages, trade pages, and FAQ bands; they are not a homepage-only motif.

The shared palette is ink, blueprint/navy, white, and signal red. Orange and blue appear in the trade-page Marketing Mix component, but they are not general accents. A full red section, a black CTA, or a true-white gallery can be appropriate when the content calls for it.

## Color and surface roles

| Role | Current color | Typical use |
| --- | --- | --- |
| Ink | #0A0F1C | Dark sections, navigation, text on light surfaces |
| Navy | #002768 | Service bands, FAQ bands, footer gradient |
| Blueprint dark | #001a4a | Deep blue backgrounds and texture layers |
| Signal red | #C8262A | Primary actions, emphasis, borders, numbered details |
| Red on dark | #E8484C | Small red text on ink where extra contrast is needed |
| White | #FFFFFF | Text on dark, vehicle galleries, card faces |
| Light alternative | #F4F5F7 | Quiet light bands and panels |
| Smoke | #5B6471 | Secondary text on light surfaces |

The CSS is not a single token package. The current shared header, homepage, service pages, and css/trade-base.css use the navy value #002768. Older duplicate root styles remain elsewhere and may define different navy values; verify the stylesheet actually loaded by a page. Do not copy a stale token declaration into a new page.

Dark sections commonly use assets/blueprint-background.webp or assets/blueprint-bg-darker.webp. Light sections commonly use assets/white-engineering-background.webp. A product or vehicle gallery may use plain white so the image is easy to inspect. Keep text contrast tied to the final rendered surface, including its texture and overlay.

## Type

Archivo Black carries large display headings, section headings, and important card labels. Archivo carries body copy, navigation, buttons, and eyebrows. Technical numbers and small drawing-style labels can use a monospace stack. Large headings are usually uppercase with tight line height. Body copy is sentence case and readable at roughly 16–18px.

The site has several real scales, not one universal headline size: the homepage has its own display composition; service pages use .sp .display and .sp .hero h1; trade pages use .h1-hero and .h2-hero; FAQ bands use .tj-band-h2. Preserve the scale of the page family being edited. Red or white emphasis inside a heading is useful when it helps scanning; it is not required in every headline.

## Layout and section rhythm

Most content sits in a centered container near 1240px wide. Shared trade styles use 32px side padding; service pages commonly use 22px. Section padding also varies by family: trade pages commonly start at 120px, service pages use a responsive clamp, and FAQ bands use a tighter 80px desktop / 56px mobile treatment. Reuse the local component before inventing a new global spacing rule.

Use alternating dark and light bands as a rhythm, while choosing the background that serves the content. Avoid long runs of nearly identical white sections. Keep image inspection areas, especially vehicle galleries, on a clean white surface when their details need a neutral background. Do not merge a gallery into a dark hero merely to enforce alternation.

Shared-header.css cuts a shallow angled seam between many direct child sections of main. The seam is 14px on desktop and 10px on smaller screens. It is part of the existing site language, but page-specific clipped artwork and other shapes remain local decisions.

## Images and marks

The shared header uses assets/toughjobs-monogram-logo.webp. The shared footer uses assets/toughjobs-monogram-logo.png. Some service headings use uploads/toughjobs-fist-logo-small.webp as an accent. These are different current uses of the brand mark; keep their placement and proportions consistent with their component.

Service heroes often pair left-aligned copy with a right-side image. Trade heroes use their own blueprint background, watermark, and trade figure. Vehicle and product imagery should remain fully visible with object-fit: contain when the full object matters. Put related gallery images on matching backgrounds and preserve a consistent frame and scale within a set. Decorative texture must not obscure text or the subject.

## Reused components

- The shared header and footer come from shared-header.html and shared-footer.html, inserted by their scripts on most static pages.
- Primary buttons are red with white uppercase text. Service-page buttons use a small offset shadow on hover; trade-page buttons use a brightness change. Follow the local family.
- Cards vary by context: service benefit cards, pricing cards, trade tiles, and insight cards have different borders, backgrounds, and shadows. Hard edges dominate, while pills, badges, circular workflow nodes, and compact controls use rounded shapes.
- Service FAQ bands use a navy blueprint surface, a red eyebrow, numbered category links, and a full FAQ hub when available. FAQ hubs use native details/summary accordions. Some trade pages still show answers directly.
- CTAs can be navy, ink, or another approved dark surface. Keep the call to action legible and the message specific to the page.

## Responsive behavior and motion

The shared desktop navigation collapses to a mobile drawer at 1080px. The header is 120px tall on desktop and 84px at 640px and below. Grids, hero compositions, and galleries change columns at page-specific breakpoints; test the actual page rather than relying on a universal cutoff.

Scroll reveals, counters, hover movement, blueprint gauge pings, and occasional page-specific effects are part of the current system. Motion must not hide content when reduced motion is requested. Keep focus states visible and use semantic links, buttons, tables, and details elements for interactive content.

## Content and maintenance

Write for contractors and service teams in plain terms. Explain scope, deliverables, costs, and next steps without unsupported outcome claims. Pricing and service descriptions in a page, its linked FAQ, and structured data should agree. Treat contact details and guarantees as content sourced from the current site, not permanent design tokens.

The site is static HTML/CSS/JavaScript with extensive page-level styling and several legacy variants. There is no active React/Babel or in-page tweaks system to design against. Preserve working page families while moving genuinely reused patterns into shared styles. For implementation guidance and file ownership, use DESIGN-SYSTEM.md.
