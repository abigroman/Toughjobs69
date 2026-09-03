# -*- coding: utf-8 -*-
"""
Generates the per-service FAQ architecture from faq-data.json (single source
of truth for every Q&A pair, each tagged with a standardized category).

Per service page (e.g. websites.html):
  - Replaces the on-page FAQ content between <!-- FAQ:START --> / <!-- FAQ:END -->
    with a compact "Explore <Service> FAQs" section listing only CATEGORY NAMES
    that have at least one question, each anchor-linking to the service's own
    FAQ subpage: <slug>/faqs/#<category-id>. No question text appears on the
    service page itself.
  - Removes the FAQPage JSON-LD from the service page's <head> (schema must
    match visible content, and no Q&A is visible there anymore).

Per service, generates <slug>/faqs/index.html:
  - A category index at the top linking to every category section on the page.
  - Every category with >=1 question rendered as a real, directly-linkable
    <h2 id="category-id"> heading (never inside a collapsed <details>), holding
    an accordion list of that category's questions.
  - scroll-margin-top on headings so a jumped-to section lands below the sticky
    header, both on click and on direct-link page load.
  - A "Back to <Service>" link and a "Back to top" link.
  - One FAQPage JSON-LD block covering everything on the page.

Also regenerates faq/index.html as a lightweight, link-only directory to each
service's FAQ page (no Q&A duplicated there) and deletes the old 4-bucket
category hub (faq/marketing-seo/, faq/creative-branding/, faq/tech-automations/,
faq/business-licensing/) which the per-service architecture replaces.

Idempotent + backs up any file it's about to change into
Backups/pre-faq-hub-<DATE>/ first, same convention as before.

Usage: python build-faq.py
"""
import json
import os
import re
import shutil
import html
from datetime import date
from collections import OrderedDict

ROOT = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(ROOT, "faq-data.json")
BACKUP_DIR = os.path.join(ROOT, "Backups", "pre-faq-hub-" + date.today().isoformat())
SITE_URL = "https://toughjobs.org"
HEADER_OFFSET_PX = 140  # header .nav-container is 120px; +20px breathing room

CATEGORY_ORDER = [
    ("pricing-costs", "Pricing & Costs"),
    ("service-areas", "Service Areas"),
    ("timeline-completion", "Timeline & Completion"),
    ("getting-started", "Getting Started"),
    ("whats-included", "What's Included"),
    ("who-its-for", "Who It's For"),
    ("our-process", "Our Process"),
    ("requirements-preparation", "Requirements & Preparation"),
    ("customization-options", "Customization & Options"),
    ("revisions-changes", "Revisions & Changes"),
    ("results-expectations", "Results & Expectations"),
    ("ownership-access", "Ownership & Access"),
    ("platforms-integrations", "Platforms & Integrations"),
    ("security-data-privacy", "Security & Data Privacy"),
    ("support-maintenance", "Support & Maintenance"),
    ("policies-guarantees", "Policies & Guarantees"),
    ("contact-next-steps", "Contact & Next Steps"),
    ("advertising-budget-billing", "Advertising Budget & Billing"),
    ("performance-reporting", "Performance & Reporting"),
    ("materials-sizes-production", "Materials, Sizes & Production"),
    ("file-formats-usage-rights", "File Formats & Usage Rights"),
    ("licensing-compliance", "Licensing & Compliance"),
    ("sessions-accountability", "Sessions & Accountability"),
    ("renewals-filing-status", "Renewals & Filing Status"),
]
CATEGORY_LABELS = dict(CATEGORY_ORDER)
CATEGORY_INDEX = {slug: i for i, (slug, _) in enumerate(CATEGORY_ORDER)}

OLD_HUB_CATEGORY_DIRS = ["marketing-seo", "creative-branding", "tech-automations", "business-licensing"]

MARKER_FAQ = re.compile(r'(<!-- FAQ:START -->\n)(.*?)(\n\s*<!-- FAQ:END -->)', re.DOTALL)
MARKER_SCHEMA = re.compile(
    r'\s*<!-- SEO-FAQ-SCHEMA:START -->\n<script type="application/ld\+json">\n.*?\n</script>\n<!-- SEO-FAQ-SCHEMA:END -->\n?',
    re.DOTALL
)


def load_data():
    with open(DATA_PATH, encoding="utf-8") as f:
        entries = json.load(f)
    by_page = OrderedDict()
    for e in entries:
        by_page.setdefault(e["page"], []).append(e)
    for page in by_page:
        by_page[page].sort(key=lambda e: e["order"])
    return entries, by_page


def page_categories(items):
    """Categories present on this page, in canonical CATEGORY_ORDER, each with its items."""
    grouped = OrderedDict()
    for e in items:
        grouped.setdefault(e["category"], []).append(e)
    ordered = sorted(grouped.items(), key=lambda kv: CATEGORY_INDEX.get(kv[0], 999))
    return ordered


def render_schema_json(items, page_url):
    main_entity = [
        {
            "@type": "Question",
            "name": html.unescape(e["question"]),
            "acceptedAnswer": {"@type": "Answer", "text": html.unescape(e["answer"])},
        }
        for e in items
    ]
    obj = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntityOfPage": page_url, "mainEntity": main_entity}
    return json.dumps(obj, indent=2, ensure_ascii=False)


def backup_file(path):
    rel = os.path.relpath(path, ROOT)
    dest = os.path.join(BACKUP_DIR, rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    if not os.path.exists(dest):
        shutil.copy2(path, dest)


def write_if_changed(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            old = f.read()
        if old == content:
            return False
        backup_file(path)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    return True


# ── Service page: "Explore <Service> FAQs" category-link block ──────────────

def render_explore_block(page_slug, items):
    cats = page_categories(items)
    links = "\n".join(
        f'        <a class="td-faq-cat-link" href="{page_slug}/faqs/#{cslug}">{html.escape(label)} &rarr;</a>'
        for cslug, label in [(s, CATEGORY_LABELS[s]) for s, _ in cats]
    )
    return f'''      <div class="td-faq-categories">
{links}
      </div>'''


def update_service_page(slug, items, page_label):
    path = os.path.join(ROOT, slug + ".html")
    if not os.path.exists(path):
        print(f"  SKIP {slug}.html — file not found")
        return False
    with open(path, encoding="utf-8") as f:
        src = f.read()

    # Replace heading text "FREQUENTLY ASKED QUESTIONS — X" with "EXPLORE X FAQS"
    new_heading = f"EXPLORE {page_label.upper()} FAQS"
    src2 = re.sub(
        r'(<h2 class="tj-band-h2">)FREQUENTLY ASKED QUESTIONS[^<]*(</h2>)',
        lambda m: f"{m.group(1)}{html.escape(new_heading)}{m.group(2)}",
        src, count=1
    )

    # Drop any leftover hub-link paragraph from the old architecture first,
    # so it doesn't linger between the markers and the new block.
    src2 = re.sub(r'\s*<p class="tj-faq-hub-link">.*?</p>\n?', '\n', src2, flags=re.DOTALL)

    new_block = (
        render_explore_block(slug, items)
        + f'\n      <p class="tj-faq-hub-link"><a href="{slug}/faqs/">See all {html.escape(page_label)} FAQs &rarr;</a></p>'
    )
    m = MARKER_FAQ.search(src2)
    if not m:
        print(f"  WARN {slug}.html — no FAQ:START/END markers, skipping")
        new_html = src2
    else:
        new_html = src2[:m.start()] + m.group(1) + new_block + m.group(3) + src2[m.end():]

    # Schema no longer belongs here — no Q&A is visible on the service page itself.
    new_html = MARKER_SCHEMA.sub("\n", new_html)

    if new_html == src:
        return False
    backup_file(path)
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_html)
    return True


# ── Service FAQ subpage ──────────────────────────────────────────────────────

PAGE_SHELL_HEAD = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{title}</title>
<meta name="robots" content="index, follow" />
<meta name="author" content="Toughjobs" />
<meta name="publisher" content="ToughJobs Digital Marketing" />
<link rel="canonical" href="{canonical}" />
<meta name="description" content="{description}" />
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="{prefix}service-page.css?v=20260804b" />
<link rel="stylesheet" href="{prefix}shared-header.css" />
<link rel="stylesheet" href="{prefix}css/faq-band.css" />
<style>
  *,*::before,*::after{{box-sizing:border-box}}
  html,body{{margin:0;padding:0;background:#0A0F1C}}
  body{{font-family:"Archivo","Helvetica Neue",Helvetica,Arial,sans-serif;color:#0A0F1C;-webkit-font-smoothing:antialiased}}
  .faq-svc-hero{{background:#0A0F1C;padding:80px 22px 40px}}
  .faq-svc-hero-inner{{max-width:820px;margin:0 auto}}
  .faq-svc-crumbs{{font-family:"Archivo",sans-serif;font-size:12.5px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin:0 0 18px}}
  .faq-svc-crumbs a{{color:rgba(255,255,255,.55);text-decoration:none}}
  .faq-svc-crumbs a:hover{{color:#C8262A}}
  .faq-svc-hero .eyebrow{{font-family:"Archivo",sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.18em;font-size:12px;color:#C8262A;display:block;margin-bottom:14px}}
  .faq-svc-hero h1{{font-family:"Archivo Black",sans-serif;text-transform:uppercase;font-size:clamp(28px,4vw,46px);line-height:1.05;color:#FFFFFF;margin:0}}
  .faq-svc-index{{background:#0A0F1C;padding:0 22px 56px}}
  .faq-svc-index-inner{{max-width:820px;margin:0 auto;border-top:1px solid rgba(255,255,255,.14);padding-top:28px}}
  .faq-svc-index h2{{font-family:"Archivo",sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:13px;color:rgba(255,255,255,.55);margin:0 0 16px}}
  .faq-svc-index-list{{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:10px 24px}}
  .faq-svc-index-list a{{display:block;font-family:"Archivo",sans-serif;font-weight:700;font-size:15px;color:#FFFFFF;text-decoration:none;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.1)}}
  .faq-svc-index-list a:hover{{color:#C8262A}}
  @media(max-width:680px){{.faq-svc-index-list{{grid-template-columns:1fr}}}}
  .faq-svc-category{{scroll-margin-top:{header_offset}px;font-family:"Archivo Black",sans-serif;text-transform:uppercase;font-size:clamp(20px,2.6vw,28px);color:#FFFFFF;margin:0 0 20px;letter-spacing:-.01em}}
  .faq-svc-back-row{{display:flex;flex-wrap:wrap;gap:20px;margin-top:40px;padding-top:24px;border-top:1px solid rgba(255,255,255,.18)}}
  .faq-svc-back-row a{{font-family:"Archivo",sans-serif;font-weight:800;text-transform:uppercase;font-size:13px;letter-spacing:.04em;color:#C8262A;text-decoration:none}}
  .faq-svc-back-row a:hover{{color:#FFFFFF}}
  .faq-svc-estimate-note{{margin:14px 0 0;font-family:"Archivo",sans-serif;font-size:13px;font-style:italic;color:rgba(255,255,255,.55)}}
</style>
</head>
<body class="sp">
<main>
"""

PAGE_SHELL_FOOT = """
</main>
<script src="{prefix}inject-footer.js"></script>
<script src="{prefix}service-page.js?v=20260729"></script>
<script src="{prefix}inject-header.js?v=20260802b"></script>
<script src="{prefix}sticky-cta.js"></script>
<script src="{prefix}cookie-consent.js"></script>
</body>
</html>
"""


def build_service_faq_page(slug, page_label, items):
    asset_prefix = "../../"  # <slug>/faqs/index.html is 2 levels below repo root
    svc_href = "../../" + slug + ".html"
    title = f"{page_label} FAQs | Toughjobs"
    cat_labels = [CATEGORY_LABELS[cslug] for cslug, _ in page_categories(items)]
    description = f"Every question we get about {page_label} at Toughjobs, organized by category — {', '.join(cat_labels)}."
    canonical = f"{SITE_URL}/{slug}/faqs/"

    cats = page_categories(items)

    index_links = "\n".join(
        f'          <li><a href="#{cslug}">{html.escape(clabel)}</a></li>'
        for cslug, cat_items in cats
        for clabel in [CATEGORY_LABELS[cslug]]
    )

    sections = []
    for cslug, cat_items in cats:
        clabel = CATEGORY_LABELS[cslug]
        items_html = "\n".join(
            f'        <details class="td-faq-item"><summary>{e["question"]}</summary><p>{e["answer"]}</p></details>'
            for e in cat_items
        )
        has_estimate = any(e["answer"].rstrip().endswith("*") for e in cat_items)
        estimate_note = (
            '\n        <p class="faq-svc-estimate-note">* Estimated. Current workload and holiday scheduling can shift these dates &mdash; we\'ll confirm exact timing on your call.</p>'
            if has_estimate else ""
        )
        sections.append(f'''    <section class="td-analysis td-faq-section tj-faq-band" data-screen-label="{html.escape(clabel)}">
      <div class="td-analysis-inner">
        <h2 class="faq-svc-category" id="{cslug}">{html.escape(clabel)}</h2>
        <div class="td-faq-list">
{items_html}
        </div>{estimate_note}
      </div>
    </section>''')

    schema_json = render_schema_json(items, canonical)
    breadcrumb_json = json.dumps({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE_URL}/index.html"},
            {"@type": "ListItem", "position": 2, "name": page_label, "item": f"{SITE_URL}/{slug}.html"},
            {"@type": "ListItem", "position": 3, "name": f"{page_label} FAQs", "item": canonical},
        ],
    }, indent=2, ensure_ascii=False)

    body = (
        PAGE_SHELL_HEAD.format(title=title, canonical=canonical, description=description, prefix=asset_prefix, header_offset=HEADER_OFFSET_PX)
        + f'''<!-- SEO-BREADCRUMB-SCHEMA:START -->
<script type="application/ld+json">
{breadcrumb_json}
</script>
<!-- SEO-BREADCRUMB-SCHEMA:END -->
<!-- SEO-FAQ-SCHEMA:START -->
<script type="application/ld+json">
{schema_json}
</script>
<!-- SEO-FAQ-SCHEMA:END -->
  <section class="faq-svc-hero" data-screen-label="FAQ Hero">
    <div class="faq-svc-hero-inner">
      <p class="faq-svc-crumbs"><a href="{asset_prefix}index.html">Home</a>&nbsp;/&nbsp;<a href="{svc_href}">{html.escape(page_label)}</a>&nbsp;/&nbsp;FAQs</p>
      <span class="eyebrow">Straight answers</span>
      <h1>{html.escape(page_label)} FAQs</h1>
    </div>
  </section>
  <section class="faq-svc-index" data-screen-label="Category Index">
    <div class="faq-svc-index-inner">
      <h2>Jump to a category</h2>
      <ul class="faq-svc-index-list">
{index_links}
      </ul>
    </div>
  </section>
{chr(10).join(sections)}
  <section class="faq-svc-index" data-screen-label="Back Links">
    <div class="faq-svc-index-inner" style="border-top:none;padding-top:0">
      <div class="faq-svc-back-row">
        <a href="{svc_href}">&larr; Back to {html.escape(page_label)}</a>
        <a href="#top">&uarr; Back to category index</a>
        <a href="{asset_prefix}faq/">All services' FAQs</a>
      </div>
    </div>
  </section>
'''
        + PAGE_SHELL_FOOT.format(prefix=asset_prefix)
    )
    return body


# ── faq/index.html: lightweight links-only directory ────────────────────────

def build_hub_index(by_page):
    asset_prefix = "../"
    title = "FAQ Index | Toughjobs"
    description = "Every Toughjobs service, with a direct link to its full FAQ page."
    canonical = f"{SITE_URL}/faq/"

    rows = "\n".join(
        f'''      <a class="faq-cat-card" href="../{slug}/faqs/">
        <span class="n">{len(items)} QUESTIONS</span>
        <h2>{html.escape(items[0]["page_label"])}</h2>
        <span class="go">View FAQs &rarr;</span>
      </a>'''
        for slug, items in by_page.items()
    )

    body = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{title}</title>
<meta name="robots" content="index, follow" />
<meta name="author" content="Toughjobs" />
<meta name="publisher" content="ToughJobs Digital Marketing" />
<link rel="canonical" href="{canonical}" />
<meta name="description" content="{description}" />
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="{asset_prefix}service-page.css?v=20260804b" />
<link rel="stylesheet" href="{asset_prefix}shared-header.css" />
<style>
  *,*::before,*::after{{box-sizing:border-box}}
  html,body{{margin:0;padding:0;background:#0A0F1C}}
  body{{font-family:"Archivo","Helvetica Neue",Helvetica,Arial,sans-serif;color:#0A0F1C;-webkit-font-smoothing:antialiased}}
  .faq-hub-hero{{background:#0A0F1C;padding:96px 22px 64px;text-align:center}}
  .faq-hub-hero .eyebrow{{font-family:"Archivo",sans-serif;font-weight:800;text-transform:uppercase;letter-spacing:.18em;font-size:12px;color:#C8262A;display:block;margin-bottom:14px}}
  .faq-hub-hero h1{{font-family:"Archivo Black",sans-serif;text-transform:uppercase;font-size:clamp(30px,4.4vw,52px);line-height:1.05;color:#FFFFFF;margin:0 auto;max-width:820px}}
  .faq-cat-grid{{background:#FFFFFF;background-image:url('{asset_prefix}assets/white-engineering-background.webp');background-size:cover;padding:64px 22px 96px}}
  .faq-cat-grid-inner{{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:20px}}
  .faq-cat-card{{display:block;background:#FFFFFF;box-shadow:0 0 2px 0 rgba(10,15,28,.35);border-top:3px solid #C8262A;padding:26px 24px;text-decoration:none;transition:transform .2s ease,box-shadow .2s ease}}
  .faq-cat-card:hover{{transform:translateY(-4px);box-shadow:0 8px 20px rgba(10,15,28,.18)}}
  .faq-cat-card .n{{font-family:ui-monospace,Menlo,monospace;font-size:11px;font-weight:700;letter-spacing:.1em;color:#C8262A}}
  .faq-cat-card h2{{font-family:"Archivo Black",sans-serif;text-transform:uppercase;font-size:19px;color:#0A0F1C;margin:8px 0 10px;letter-spacing:-.01em}}
  .faq-cat-card .go{{font-family:"Archivo",sans-serif;font-weight:800;text-transform:uppercase;font-size:12px;letter-spacing:.05em;color:#C8262A}}
  @media(max-width:900px){{.faq-cat-grid-inner{{grid-template-columns:1fr 1fr}}}}
  @media(max-width:600px){{.faq-cat-grid-inner{{grid-template-columns:1fr}}}}
</style>
</head>
<body class="sp">
<main>
  <section class="faq-hub-hero" data-screen-label="FAQ Index Hero">
    <span class="eyebrow">Straight answers</span>
    <h1>Every service.<br>Every FAQ.</h1>
  </section>
  <section class="faq-cat-grid" data-screen-label="Service FAQ Directory">
    <div class="faq-cat-grid-inner">
{rows}
    </div>
  </section>
</main>
<script src="{asset_prefix}inject-footer.js"></script>
<script src="{asset_prefix}service-page.js?v=20260729"></script>
<script src="{asset_prefix}inject-header.js?v=20260802b"></script>
<script src="{asset_prefix}sticky-cta.js"></script>
<script src="{asset_prefix}cookie-consent.js"></script>
</body>
</html>
"""
    return body


def remove_old_hub_categories():
    removed = []
    for slug in OLD_HUB_CATEGORY_DIRS:
        d = os.path.join(ROOT, "faq", slug)
        if os.path.isdir(d):
            backup_file(os.path.join(d, "index.html"))
            shutil.rmtree(d)
            removed.append(slug)
    return removed


def main():
    entries, by_page = load_data()
    print(f"Loaded {len(entries)} entries across {len(by_page)} services\n")

    print("Updating service pages (Explore FAQs category links, schema removed)...")
    changed = 0
    for slug, items in by_page.items():
        page_label = items[0]["page_label"]
        if update_service_page(slug, items, page_label):
            changed += 1
            print(f"  updated {slug}.html")
    print(f"  {changed} of {len(by_page)} service pages changed\n")

    print("Generating per-service FAQ pages...")
    for slug, items in by_page.items():
        page_label = items[0]["page_label"]
        html_out = build_service_faq_page(slug, page_label, items)
        out_path = os.path.join(ROOT, slug, "faqs", "index.html")
        changed = write_if_changed(out_path, html_out)
        n_cats = len(page_categories(items))
        print(f"  {slug}/faqs/index.html {'updated' if changed else 'unchanged'} ({len(items)} questions, {n_cats} categories)")

    print("\nRemoving old 4-bucket FAQ hub category pages...")
    removed = remove_old_hub_categories()
    print(f"  removed: {', '.join(removed) if removed else '(already removed)'}")

    print("\nRegenerating faq/index.html as a lightweight service directory...")
    hub_html = build_hub_index(by_page)
    hub_changed = write_if_changed(os.path.join(ROOT, "faq", "index.html"), hub_html)
    print(f"  faq/index.html {'updated' if hub_changed else 'unchanged'}")

    print(f"\nBackups (if any files changed) written to {os.path.relpath(BACKUP_DIR, ROOT)}")


if __name__ == "__main__":
    main()
