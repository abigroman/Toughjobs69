# Handoff: Toughjobs Marketing Site

## Overview
Full multi-page marketing site for Toughjobs (B2B trade marketing agency): homepage, services, 20 trade landing pages, print/branding pages, SEO/PPC pages, quiz funnel, and shared header/CTA components.

## About the Design Files
These are **working HTML/CSS/JS files**, not throwaway mockups — plain HTML/CSS with a few vanilla-JS behavior scripts (shared header injection, sticky CTA badge, quiz-peek widget) and one React+Babel page (`index.html` + `app.jsx`/`components.jsx`). Treat them as a reference implementation: recreate in your target framework/environment using its conventions, don't just serve this HTML as-is in production unless a static site is genuinely the plan.

## Fidelity
High-fidelity — final copy, colors, typography, spacing, and interactions are all in place.

## Structure
- `index.html` — homepage (React/Babel via `app.jsx`, `components.jsx`)
- `services.html`, `about.html`, `partnerships.html`, `contact.html` — core marketing pages
- `trade-*.html` (20 files) — per-trade landing pages, all built from `trade-page-template.jsx` + `trade-data.js` + `trade-base.css`
- `print-*.html`, `branding.html` — print/branding funnel pages
- `seo.html` — PPC/SEO services page
- `quiz-hub.html` + related — lead-gen quiz funnel
- `shared-header.html/.css` + `inject-header.js` — universal nav, injected on every page
- `sticky-cta.js` — "Start Assessment" corner badge
- `back-cta.js` — "Go Back" corner badge (trade detail pages)
- `quiz-peek.js` — bottom-corner quiz teaser widget
- `assets/` — images/logos referenced site-wide

## Design Tokens
- Primary Red `#C8262A`, Dark Red `#A90100`, Navy `#002768`, Ink `#0A0F1C`, White `#FFFFFF`, Gray bg `#282828`
- Display font: "Archivo Black" (uppercase, tight tracking)
- Body/UI font: "Archivo" (400–800)
- Rule: adjacent sections must alternate light/dark background; never stack two of the same

## Assets
All images live in `assets/`; the canonical logo is `toughjobs-monogram-logo.png` (dark bg) and `toughjobs-logo-light-transparent.png` (light bg) — no other logo files should be used.

## Notes
- Nav is canonical across every page — see the nav spec below before changing it.
- `_LOCKED/2026-06-30/` holds frozen known-good copies of shared/core files as a restore point.
