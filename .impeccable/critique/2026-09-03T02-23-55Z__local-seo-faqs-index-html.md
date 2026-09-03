---
target: local-seo/faqs/index.html
total_score: 20
max_score: 32
na_heuristics: 5,9
p0_count: 0
p1_count: 3
timestamp: 2026-09-03T02-23-55Z
slug: local-seo-faqs-index-html
---
## Design Health Score
Total 20/32 (Acceptable, 62.5%). Heuristics 5 and 9 n/a (static content, no forms/errors).

## Design Specificity Verdict
Generic shared shell (14-near-identical hub pages) wrapping genuinely specific, credible copy. Detector found 3 off-ramp font sizes and 50 em-dashes (AI-cadence flag) that the LLM review's holistic pass did not zoom into. LLM review computed contrast math the degraded detector could not run, finding red-on-dark text failing WCAG AA despite being brand-sanctioned.

## Priority Issues
[P1] 14 consecutive identical-navy sections violate the site's own background-alternation rule; template-wide across all 15 FAQ hub pages, fixable once in faq-band.css/build-faq.py. Suggested: /impeccable layout
[P1] Findability breaks down at scale - 14-category flat index, only one exit at the bottom of a 60-item page, no sticky sub-nav or item counts. Suggested: /impeccable clarify
[P1] Red text on dark backgrounds fails WCAG AA contrast (2.52-3.48:1 vs 4.5:1 required) despite being brand-sanctioned by CLAUDE.md. Suggested: /impeccable harden
[P2] Content redundancy - same map-pack/geo-grid answer repeated near-verbatim across 3 categories; single-question categories given equal visual weight to 6-question ones. Suggested: /impeccable distill
[P3] No search or expand-all for a 60-item reference page. Suggested: /impeccable optimize

## Persona Red Flags
Jordan: no indication of page scale (60 questions), no cross-links between straddling categories.
Casey: huge single-column mobile scroll, no scroll-position memory, sticky CTA badge competes with reading task.
Alex: no search/expand-all, will default to Ctrl+F, redundant answers undermine category structure's value.

## Minor Observations
href="#top" has no matching id in DOM. Meta description exceeds Google's snippet window (330+ chars, 14 category names crammed in). No og:title/og:image. inject-header.js active-nav never highlights on this page or its 14 siblings due to trailing-slash path resolution.
