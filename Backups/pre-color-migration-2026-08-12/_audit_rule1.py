import re, os, sys
sys.stdout.reconfigure(encoding='utf-8')

BASE = r"C:\Users\abigr\ToughJobs"

def classify_section(tag_attrs, class_str, style_str, id_str, data_label):
    # Accent
    if re.search(r'\bctaband\b', class_str) or re.search(r'\bbg-accent2\b', class_str):
        return 'accent'
    if re.search(r'\bss-cta-band\b', class_str):
        return 'accent'
    if re.search(r'\bcta-section\b', class_str) and re.search(r'\bbg-blueprint-red\b', class_str):
        return 'accent'

    # Dark classes
    if re.search(r'\bbg-dark\b|\bbg-navy\b', class_str):
        return 'dark'
    if re.search(r'\bbg-blueprint-dark\b', class_str):
        return 'dark'
    if re.search(r'\bbg-blueprint-navy\b', class_str):
        return 'dark'
    if re.search(r'\bservice-pill-row\b', class_str):
        return 'dark'
    if 'ss-section dark' in class_str:
        return 'dark'
    if re.search(r'\bss-hero\b', class_str):
        return 'dark'

    # Light classes
    if re.search(r'\bbg-light\b|\bbg-white\b', class_str):
        return 'light'
    if re.search(r'\bbg-blueprint-light\b', class_str):
        return 'light'
    if 'ss-section light' in class_str:
        return 'light'
    if re.search(r'\btd-analysis\b', class_str):
        if style_str:
            s = style_str.lower().replace(' ', '')
            if '#0b1326' in s or '#0a0f1c' in s or 'bg-dark' in class_str or 'bg-navy' in class_str:
                return 'dark'
        if 'bg-dark' in class_str or 'bg-navy' in class_str:
            return 'dark'
        return 'light'

    # social-bridge -> light (#E0E6ED)
    if re.search(r'\bsocial-bridge\b', class_str):
        if style_str:
            s = style_str.lower().replace(' ', '')
            if 'var(--ink)' in s or '#0b1326' in s or '#0a0f1c' in s:
                return 'dark'
        # Check parent class or inline background in style tags
        return 'dark' # Since we redesigned social-bridge class in style tag as dark!

    # gb-section -> check inline style
    if re.search(r'\bgb-section\b', class_str):
        if style_str:
            s = style_str.lower().replace(' ', '')
            if 'rgba(10,15,28' in s or '#0a0f1c' in s:
                return 'dark'
            if '#eceff4' in s:
                return 'light'
        return 'dark'

    # philosophy-section -> accent
    if id_str == 'philosophy-section':
        return 'accent'
    if data_label and 'philosophy' in data_label.lower():
        return 'accent'

    # cta-section (alone, no bg-blueprint-red) -> accent
    if re.search(r'\bcta-section\b', class_str):
        return 'accent'

    # Inline style checks
    if style_str:
        s = style_str.lower().replace(' ', '')

        # Dark inline
        if re.search(r'background(-color)?:#0a0f1c', s):
            return 'dark'
        if re.search(r'background(-color)?:rgba\(10,15,28', s):
            return 'dark'
        if re.search(r'background(-color)?:#002768', s):
            return 'dark'
        if re.search(r'background(-color)?:rgba\(168,1,0', s):
            return 'dark'
        if re.search(r'background(-color)?:rgba\(8,12,22', s):
            return 'dark'
        if re.search(r'background(-color)?:var\(--ink\)', s):
            return 'dark'
        if re.search(r'background(-color)?:#001a4a', s):
            return 'dark'
        if 'background:url' in s and 'blueprint-background' in s and 'color:var(--white)' in style_str.lower().replace(' ', ''):
            return 'dark'
        if re.search(r'background(-color)?:linear-gradient\(90deg,rgba\(8,12,22', s):
            return 'dark'
        if re.search(r'background(-color)?:var\(--bg-dark\)', s):
            return 'dark'

        # Accent inline
        if re.search(r'background(-color)?:var\(--accent\)', s):
            return 'accent'
        if 'linear-gradient(135deg,var(--dark-red)' in s:
            return 'accent'

        # Light inline
        if re.search(r'background(-color)?:#eceff4', s):
            return 'light'
        if re.search(r'background(-color)?:#f5f6f8', s):
            return 'light'
        if re.search(r'background(-color)?:#f5f5f5', s):
            return 'light'
        if re.search(r'background(-color)?:#ffffff', s):
            return 'light'
        if re.search(r'background(-color)?:white\b', s):
            return 'light'
        if re.search(r'background(-color)?:#f[0-9a-f]', s):
            return 'light'
        if re.search(r'background(-color)?:var\(--white\)', s):
            return 'light'
        if re.search(r'background(-color)?:#fcfcfd', s):
            return 'light'
        if re.search(r'background(-color)?:#f8f9fb', s):
            return 'light'
        if re.search(r'background(-color)?:#f6f1e9', s):
            return 'light'

    # partnerships-specific data labels
    if data_label:
        dl = data_label.lower()
        if dl in ['what we provide', 'donations & bootstrapping', 'our commitment']:
            return 'light'
        if dl in ["toughjobs needs your help", "your part"]:
            return 'dark'
        if dl == 'hero' and class_str == 'hero':
            return 'dark'

    return 'unknown'


def get_sections_full(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()

    main_match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL | re.IGNORECASE)
    footer_match = re.search(r'<footer', content, re.IGNORECASE)

    sections = []

    if main_match:
        main_content = main_match.group(1)
    else:
        header_end = re.search(r'</header>', content, re.IGNORECASE)
        if header_end and footer_match:
            main_content = content[header_end.end():footer_match.start()]
        else:
            main_content = content

    def parse_sections(text, location):
        results = []
        for m in re.finditer(r'<section([^>]*)>', text, re.IGNORECASE):
            tag_attrs = m.group(1)
            id_m = re.search(r'\bid=["\']([^"\']+)["\']', tag_attrs)
            cls_m = re.search(r'\bclass=["\']([^"\']+)["\']', tag_attrs)
            style_m = re.search(r'\bstyle=["\']([^"\']*)["\']', tag_attrs)
            dl_m = re.search(r'\bdata-screen-label=["\']([^"\']+)["\']', tag_attrs)

            class_str = cls_m.group(1) if cls_m else ''
            style_str = style_m.group(1) if style_m else ''
            id_str = id_m.group(1) if id_m else ''
            data_label = dl_m.group(1) if dl_m else ''

            bg = classify_section(tag_attrs, class_str, style_str, id_str, data_label)
            label = id_str or data_label or class_str[:40] or 'section'
            results.append((label, bg, location))
        return results

    sections.extend(parse_sections(main_content, 'main'))

    # Also check between </main> and <footer>
    if main_match and footer_match:
        between = content[main_match.end():footer_match.start()]
        sections.extend(parse_sections(between, 'post-main'))

    return sections


def check_violations(sections):
    violations = []
    seq = list(sections)
    seq_with_footer = seq + [('footer', 'dark', 'footer')]

    for i in range(len(seq_with_footer) - 1):
        a_label, a_bg, a_loc = seq_with_footer[i]
        b_label, b_bg, b_loc = seq_with_footer[i+1]

        if a_bg == 'dark' and b_bg == 'dark':
            violations.append(f"  VIOLATION: [{a_label}=dark({a_loc})] -> [{b_label}=dark({b_loc})] (dark+dark)")
        elif a_bg == 'light' and b_bg == 'light':
            violations.append(f"  VIOLATION: [{a_label}=light({a_loc})] -> [{b_label}=light({b_loc})] (light+light)")
        elif a_bg == 'accent' and b_bg == 'accent':
            violations.append(f"  VIOLATION: [{a_label}=accent({a_loc})] -> [{b_label}=accent({b_loc})] (accent+accent)")

    return violations


pages = [
    "local-seo.html", "seo.html", "paid-ads.html", "websites.html", "branding.html",
    "social-media.html", "reviews.html", "print-collateral.html", "clothing-apparel.html",
    "software.html", "ai-automations.html", "database-reactivation.html", "coaching.html",
    "llc-filing.html",
    "index.html", "about.html", "services.html", "contact.html", "partnerships.html",
    "helping-hands.html", "free-tools.html",
    "trade-appliance-repair.html", "trade-auto-detailing.html", "trade-auto-repair.html",
    "trade-carpet-cleaning.html", "trade-concrete-paving.html", "trade-electricians.html",
    "trade-framing-drywall.html", "trade-general-contractors.html", "trade-gutter-cleaning.html",
    "trade-handyman.html", "trade-hvac.html", "trade-janitorial.html", "trade-junk-removal.html",
    "trade-landscaping.html", "trade-locksmiths.html", "trade-masonry.html", "trade-painters.html",
    "trade-pest-control.html", "trade-plumbing.html", "trade-pools.html",
    "trade-pressure-washing.html", "trade-restoration.html", "trade-roofing.html",
    "trade-solar.html", "trade-towing.html", "trade-tree-service.html",
    "trade-excavation.html", "trade-fence-installation.html", "trade-fencing.html"
]

clean = []
violated = []

for page in pages:
    fp = os.path.join(BASE, page)
    if not os.path.exists(fp):
        print(f"MISSING: {page}")
        continue

    try:
        sections = get_sections_full(fp)
        violations = check_violations(sections)
        seq_str = " | ".join(f"{l}({b})" for l, b, _ in sections)
        unk_sections = [(l, loc) for l, b, loc in sections if b == 'unknown']

        if violations:
            violated.append((page, seq_str, violations, unk_sections))
        else:
            clean.append((page, seq_str, unk_sections))
    except Exception as e:
        print(f"ERROR {page}: {e}")
        import traceback; traceback.print_exc()

print("=== VIOLATIONS ===")
for page, seq, viols, unks in violated:
    print(f"\n{page}")
    print(f"  Sequence: {seq}")
    for v in viols:
        print(v)
    if unks:
        print(f"  [unknowns remaining: {unks}]")

print(f"\n=== CLEAN ({len(clean)}) ===")
for p, seq, unks in clean:
    warn = " [HAS UNKNOWNS]" if unks else ""
    print(f"  {p}{warn}")
    print(f"    {seq}")
    if unks:
        print(f"    unknowns: {unks}")
