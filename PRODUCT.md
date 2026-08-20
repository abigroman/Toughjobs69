# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vanilla HTML/CSS/JS for all service and marketing pages. React (no build step — loaded via CDN) for the homepage (`index.html`, `components.jsx`, `tweaks-panel.jsx`). No framework, no bundler. Static files served directly. Dev: open HTML files in browser or use a local server; no `npm run dev` for most pages.

## Users

**Primary:** Trade business owners — electricians, HVAC technicians, plumbers, roofers, general contractors — operating in Central Illinois and the Quad Cities area. Typically 1–10 person operations. Owners are on the job site, not behind a desk; marketing is a secondary concern they want solved, not studied. They decide by reputation, recognizability, and price — roughly in that order.

**Secondary:** Inbound referrals and fleet/print vendors needing brand files from ToughJobs clients.

## Product Purpose

ToughJobs sells full-stack marketing to contractors: brand identity, vehicle wraps, crew apparel, print collateral, websites, local SEO, paid ads, and AI automations — all in one shop. The promise is that a trade owner never has to manage multiple vendors or rebuild their identity for each application. ToughJobs designs, prints, and fulfills; the client approves.

Success means a contractor's brand reads as professional and consistent at road speed, at the door, on a phone screen, and on an invoice — without the owner ever touching a design tool.

## Positioning

ToughJobs builds for trade-specific physical applications first (truck vinyl, embroidery, yard signs, job-site conditions) rather than adapting a generic brand system after the fact. Fulfillment is in-house — one invoice covers logo, wraps, apparel, and print. A typical agency would quote each separately and leave vendor coordination to the client.

## Operating Context

- Contractors evaluate vendors the same way their customers evaluate them: does the work look professional, organized, and specific to their trade?
- The fleet is the primary advertising medium; branding on vehicles generates ~40,000+ impressions/week in the service area.
- Homeowners decide to answer the door or open a quote within seconds — brand legibility and consistency at a glance is the product's functional requirement, not an aesthetic preference.
- Clients typically bring a weak existing logo, inconsistent colors, and no production files. ToughJobs starts with what exists before recommending replacement.

## Capabilities and Constraints

- Pages: 40+ HTML service/trade pages plus a React homepage. Each page includes the canonical nav (`shared-header.html` injected via `inject-header.js`).
- Sections on every page must alternate light ↔ dark backgrounds (never two same-color sections adjacent).
- White containers on white/light backgrounds require `box-shadow: 0 0 2px 0 rgba(10,15,28,.35)`.
- Navy (`#002768`) text is banned on dark (ink/navy) backgrounds — use white or red only.
- `!important` is forbidden without explicit user approval.
- All editable files are plain HTML/CSS/JS; no transpile step required.
- Locked backup copies of critical files live in `_LOCKED/2026-06-30/` — do not edit.

## Brand Commitments

- **Logo:** `assets/toughjobs-monogram-logo.png` — the only logo file. Used in nav (150px wide, 100px tall) and footer.
- **Colors:**
  - Primary Red: `#C8262A`
  - Dark Red: `#A90100`
  - Navy: `#002768`
  - Ink (black): `#0A0F1C`
  - White: `#FFFFFF`
  - Gray background: `#282828`
- **Typography:**
  - Display/headlines: `"Archivo Black"`, sans-serif — all-caps, tight tracking; title text in red or white.
  - Body/UI: `"Archivo"`, sans-serif — weights 400–800.
  - Monospace: system monospace for technical details.
- **Voice:** Direct, trade-specific, evidence-first. No marketing fluff. Speaks to owners who are skeptical of agencies and value practicality over presentation.
- **Phone:** (309) 233-9004

## Evidence on Hand

- Real client wraps: Erik Electrical (truck), Guac N Roll (trailer), Herbert (sedan fleet).
- Real client apparel photography.
- Assets in `assets/` — mockups, hero images, client photos (webp).
- No fabricated testimonials, benchmarks, or stock quotes in copy — policy is stated in the branding page copy itself.

## Product Principles

1. **Trade-first, then digital.** Every design decision is tested against physical applications (truck, embroidery, yard sign) before web or print.
2. **Consistency over creativity.** A recognizable, repeatable system across all touchpoints beats a clever logo that varies by vendor.
3. **Fulfillment is part of the product.** Design without execution is advice; ToughJobs ships the finished thing.
4. **Evidence over anecdote.** The brand documents real outcomes (baseline, work log, verified result) — never substitutes stock proof.
5. **Legibility at distance and speed.** If it can't be read from a moving car, it fails the first test.
