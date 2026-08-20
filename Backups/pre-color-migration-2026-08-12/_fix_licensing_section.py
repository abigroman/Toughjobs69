"""
Extracts the 'Licensed & Filed Right' block from inside the Resource section grid
and re-inserts it as its own standalone dark-ink section before the SEO content block.
"""
import glob

LICENSING_START = '    <div style="grid-column:1/-1;margin-top:56px;padding-top:40px;border-top:1px solid rgba(255,255,255,.25);display:flex;flex-wrap:wrap;gap:24px;align-items:center;justify-content:space-between">'
SPLIT_AFTER    = '\n    <style>'  # what immediately follows the licensing block
INSERT_BEFORE  = '<!-- SEO-TRADE-CONTENT:START -->'

NEW_SECTION = (
    '<section data-screen-label="Licensing"'
    ' style="background:#0A0F1C;padding:60px 32px;position:relative;color:var(--white)">\n'
    '  <div style="max-width:1240px;margin:0 auto;display:flex;flex-wrap:wrap;gap:32px;'
    'align-items:center;justify-content:space-between">\n'
    '    <div style="max-width:640px">\n'
    '      <span style="font-family:\'Archivo\',sans-serif;font-weight:800;text-transform:uppercase;'
    'letter-spacing:.16em;font-size:12px;color:#C8262A;">Before You Market</span>\n'
    '      <h3 style="font-family:\'Archivo Black\',sans-serif;font-size:clamp(22px,2.6vw,30px);'
    'color:#FFFFFF;margin:10px 0 8px;text-transform:uppercase">Licensed &amp; Filed Right</h3>\n'
    '      <p style="font-size:16px;line-height:1.6;color:rgba(255,255,255,.9);margin:0">'
    'An LLC isn&rsquo;t a license. We help you sort both &mdash; proper trade licensing in '
    'Illinois &amp; Iowa, plus flat-rate LLC filing.</p>\n'
    '    </div>\n'
    '    <div style="display:flex;gap:14px;flex-wrap:wrap">\n'
    '      <a href="business-licensing-illinois-iowa.html" class="btn"'
    ' style="background:var(--white);color:var(--accent);font-weight:700;padding:14px 28px;'
    'text-decoration:none;display:inline-block;border-radius:4px;white-space:nowrap">Licensing Guide</a>\n'
    '      <a href="llc-filing.html" class="btn"'
    ' style="background:transparent;color:var(--white);border:2px solid var(--white);'
    'font-weight:700;padding:14px 28px;text-decoration:none;display:inline-block;'
    'border-radius:4px;white-space:nowrap">File an LLC</a>\n'
    '    </div>\n'
    '  </div>\n'
    '</section>\n'
)

files = sorted(glob.glob('trade-*.html'))
changed = 0

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()

    if LICENSING_START not in text:
        print(f'  SKIP (no licensing block): {path}')
        continue

    # --- Step 1: remove the licensing div from inside the Resource grid ---
    idx_start = text.index(LICENSING_START)
    idx_end   = text.index(SPLIT_AFTER, idx_start)
    text = text[:idx_start] + text[idx_end:]

    # --- Step 2: insert the standalone section before the SEO content ---
    if INSERT_BEFORE in text:
        text = text.replace(INSERT_BEFORE, NEW_SECTION + INSERT_BEFORE, 1)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)

    changed += 1
    print(f'  OK: {path}')

print(f'\nDone — {changed}/{len(files)} files updated.')
