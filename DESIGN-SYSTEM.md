# Toughjobs website design system: implementation guide

Updated 2026-10-03. Read DESIGN.md for the visual direction. This file describes how the current site implements it across page families. The rendered HTML and the stylesheets loaded by that page are the source of truth for exact behavior.

## What the site is now

Toughjobs is a static HTML, CSS, and JavaScript website. The homepage, service pages, trade pages, FAQ hubs, articles, tools, and product/detail pages share a brand but do not all use one template. Much of the site still has page-local styles. There is no active React/Babel app, global tweaks panel, or single design-token build step. Do not base new work on the old React component examples or the former yellow/gold interior-page plan.

## File ownership

| Concern | Current source |
| --- | --- |
| Shared navigation markup and behavior | shared-header.html, shared-header.css, inject-header.js |
| Shared footer markup and behavior | shared-footer.html, inject-footer.js |
| Homepage composition | index.html, including its local styles |
| Service-page layout and interactions | service-page.css, service-page.js, plus each service page's local styles |
| Trade-page base | css/trade-base.css, css/trade-shared.css, css/trade-sections.css |
| Long-form service content | css/service-longform.css and page-local overrides |
| FAQ bands and accordions | css/faq-band.css; service-specific FAQ hubs in service-name/faqs/index.html |
| Give-back band | css/give-back.css where linked, with page-local variants |
| Print and kit detail pages | print-package-page.css, kit-item.css, and local page styles |
| Apparel detail pages | apparel-item.css, apparel-item.js, and local page styles |
| Shared accessibility and behavior | accessibility.js, cookie-consent.js, sticky-cta.js, deferred-media.js where loaded |

Some similarly named CSS files exist at the repository root and under css/. Check the link tags of the page being edited before changing a shared rule. Changes to one file do not necessarily affect every page with a similar name.

## Tokens and surfaces

The most common values in the current homepage, header, service pages, and css/trade-base.css are:

| Token or role | Value | Notes |
| --- | --- | --- |
| Ink | #0A0F1C | Navigation, dark sections, main text |
| Navy | #002768 | Service/FAQ blue and footer |
| Blueprint dark | #001a4a | Deep blue texture base |
| Red | #C8262A | Primary action and emphasis |
| Red on dark | #E8484C | Small red type on ink |
| White | #FFFFFF | Dark-surface text and clean gallery background |
| Light alternative | #F4F5F7 | Quiet light panels |
| Smoke | #5B6471 | Secondary text |
| Hairline | #E5E7EB | Light-surface borders |
| Container | 1240px | Common max width; padding differs by page family |

Shared-header.css defines --ink, --navy, --red, --red-on-dark, --white, --accent, and --container. css/trade-base.css also defines --navy-2 and additional trade-page variables. Individual pages may override them. The older root-level trade-base.css has different navy values, so a value in that file should not be described as universal without checking its consumers.

Surface classes are contextual:

- Service pages with body.sp use .bg-dark, .bg-navy, .bg-light, and .bg-accent2 from service-page.css. Dark bands commonly use blueprint image assets. Many pages locally replace the light texture with assets/white-engineering-background.webp.
- Trade pages use .bg-blueprint-dark and .bg-blueprint-light from their trade styles. The homepage has local versions of blueprint dark, red, light, and navy bands.
- FAQ bands use .td-faq-section / .tj-faq-band and a navy blueprint image from css/faq-band.css.
- The shared footer uses a navy gradient, a red top border, a ticker, and deferred background media.
- Galleries showing wraps, vehicles, products, or artwork can use plain white. This is intentional when the image needs a neutral inspection surface.

Plan the sequence of surfaces for a page. Alternate dark and light where it improves scanability, and avoid repeated pale sections with no visual distinction. A hero, gallery, FAQ band, and CTA each have different jobs; they need not be the same background just to satisfy a rigid alternation rule.

## Typography

Archivo Black is the display face. Archivo is the body and UI face. Most pages request them from Google Fonts; local font assets also exist for some uses. A small monospace stack appears in numbers, technical labels, and card codes.

| Page family | Typical heading classes and scale |
| --- | --- |
| Homepage | Local .display styles in index.html |
| Service pages | .sp .display, .sp .hero h1, .sp .head h2 |
| Trade pages | .display, .h1-hero, .h2-hero from css/trade-base.css |
| Long-form content | .td-analysis headings |
| FAQ bands | .tj-band-h2 and .faq-svc-category |

Use uppercase for major headings and short labels; keep paragraphs and answers in sentence case. Eyebrows are small classification labels, not a substitute for a descriptive heading. Service-page body text and table text can be denser than the homepage display composition.

## Header, footer, and section seam

shared-header.html contains the current logo, desktop navigation, phone link, quote CTA, mobile toggle, and drawer. The header image is assets/toughjobs-monogram-logo.webp. The shared footer uses assets/toughjobs-monogram-logo.png, a navy video/gradient field, resource links, and the current site phone number.

inject-header.js and inject-footer.js resolve links relative to their own script location so nested FAQ pages can use the same shared markup. On a nested page, load the scripts with the correct ../../ path. The shared header remains full height on scroll: 120px on desktop and 84px at 640px and below. Desktop navigation collapses at 1080px. Do not document a scroll-triggered shrinking header as current shared behavior.

shared-header.css adds an angled clip to many main > section boundaries. The depth is 14px and becomes 10px at 820px and below. Section content should stay inside its inner container so the clip does not cut it off. Page-level decorative clip paths can also exist, but are not a requirement for every page.

## Page family recipes

### Homepage

index.html is a composed landing page with substantial inline CSS. It uses large display type, dark and light blueprint surfaces, a services presentation, wrap imagery, service-area content, insights, and a CTA. Keep homepage changes grounded in its actual local components. Do not force its styles onto every service or trade page.

### Service pages

Examples: branding.html, coaching.html, websites.html, print-collateral.html, and print-truck-wraps.html. These pages usually load service-page.css, shared-header.css, and page-specific styles. A typical page has a dark hero, practical benefits or workflow content, options/pricing where relevant, a CTA, long-form content, and a FAQ band. The exact number and order of sections varies. Removing redundant sections is preferred to preserving a template slot with weak content.

The standard service hero puts copy on the left and imagery on the right. service-page.css hides its right image at 1024px and below; individual pages can deliberately override that when the image must stay visible. Headline accent spans, optional fist-logo heading accents, texture overlays, flow diagrams, benefit cards, pricing cards, and comparison tables are service-page components, not universal requirements.

### Trade pages

Examples: trade-electricians.html and trade-plumbing.html. These use css/trade-base.css, css/trade-shared.css, and css/trade-sections.css. The trade hero uses a blueprint background, trade wordmark/watermark, and a figure or image. The following content commonly includes service pills, a Marketing Mix section, trade-specific design or resources, licensing content, long-form answers, FAQ content, and give-back content.

The Marketing Mix component has its own red, orange, and blue lever colors. Keep those accents inside that component. Some older unprefixed trade pages use different styles; follow the files actually loaded by the page.

### FAQ hubs

Many service pages show numbered category links in the FAQ band and link to a dedicated service-name/faqs/index.html page. The hub has a dark hero, category jump index, and native details/summary questions. Every service-page category link should resolve to an id in its hub. Keep FAQPage structured data on the page that displays the corresponding answers; schema answers and visible answers should agree.

Some trade pages still display FAQ answers in the main page. Preserve that pattern until changing the specific page. css/faq-band.css supports both direct Q&A blocks and details accordions.

### Products, articles, tools, and utility pages

Print, kit, and apparel detail pages have their own styles and interaction scripts. Articles, free tools, city pages, contact flows, and internal utility pages also have local structures. They should share the brand palette, type, navigation, and readable responsive layout, but a service-page hero or FAQ band is not mandatory on them.

## Components and behavior

- Buttons: red/white is the common primary action. Service .sp .btn has a small offset shadow on hover; trade .btn uses brightness. Use the variant from the page family.
- Cards: service benefit cards, pricing cards, trade service cards, insight cards, and product cards use different fills and borders. Most are square-edged, but pills, workflow nodes, badges, and smaller controls can be rounded.
- Data: use a semantic table for actual comparisons or prices, and keep it horizontally usable on narrow screens. Do not put a pricing image behind the table text.
- FAQ: numbered category links provide a compact overview; native details/summary provide accessible expansion on hub pages.
- CTA: one clear primary action with specific copy. Ink or navy CTA backgrounds with white text are common; a red CTA can be used where that page's sequence calls for it.
- Image sets: match dimensions, framing, and background across a gallery. Use object-fit: contain for a complete vehicle or product cutout. Keep decorative images from covering copy.
- Reveal motion: service-page.css uses .reveal and .in with stagger classes d1 through d4; service-page.js observes elements. Reduced-motion CSS reveals the content without transition. FAQ gauge pings and page-specific effects should also respect reduced motion.

## Responsive and accessibility checks

Check desktop, tablet, and narrow mobile widths on the actual page. In particular, verify the shared drawer at 1080px, service-hero behavior near 1024px, clipped section edges near 820px, card grids, table overflow, and FAQ categories near 680px. Page-specific breakpoints can differ.

Use semantic headings in order, descriptive alt text for meaningful imagery, empty alt text only for purely decorative images, visible keyboard focus, and real buttons/links for actions. A background image must not be the only carrier of essential text. Avoid motion that makes content inaccessible when the visitor requests reduced motion.

## Asset and content rules

Current shared assets include assets/toughjobs-monogram-logo.webp for the header, assets/toughjobs-monogram-logo.png for the footer, uploads/toughjobs-fist-logo-small.webp for some service headings, assets/blueprint-background.webp, assets/blueprint-bg-darker.webp, and assets/white-engineering-background.webp. Use the asset path appropriate to the page depth.

Content claims belong to the page and its service data, not to the design system. Do not repeat fixed prices, warranties, response times, addresses, or performance promises here. When pricing or program details change, update the visible page and its linked FAQ/schema together. The current shared contact information is in shared-header.html and shared-footer.html.

## Editing order

1. Identify the page family and inspect its actual link and script tags.
2. Change the most local file that owns the requested behavior. Change a shared stylesheet only when the rule truly applies to all its consumers.
3. Keep the background sequence, image presentation, type scale, and CTA consistent with neighboring sections.
4. Check responsive layout, reduced motion, keyboard behavior, internal anchors, and local asset paths.
5. If a visible FAQ answer changes, reconcile its hub and structured data. Update DESIGN.md or this guide only when the change establishes a reusable site-wide rule.
