import json, re, os

TASK_FILES = [
    r"C:\Users\abigr\.claude\projects\C--Users-abigr-ToughJobs\9015f018-0369-4035-b510-76eda28c0f55.jsonl",
]

TRADE_DIR = r"C:\Users\abigr\ToughJobs"

CSS_BLOCK = """<style>
  .td-analysis{background:#f5f6f8;padding:80px 22px;color:#0A0F1C}
  .td-analysis-inner{max-width:920px;margin:0 auto}
  .td-analysis h1,.td-analysis h2{font-family:'Archivo Black',sans-serif;text-transform:uppercase;font-size:clamp(22px,3vw,36px);line-height:1.08;margin:0 0 18px;color:#0A0F1C}
  .td-analysis h1:not(:first-child),.td-analysis h2:not(:first-child){margin-top:52px}
  .td-analysis h3{font-family:'Archivo Black',sans-serif;text-transform:uppercase;font-size:18px;line-height:1.15;margin:28px 0 8px;color:#0A0F1C}
  .td-analysis p,.td-analysis li{font-size:16px;line-height:1.68;color:#0A0F1C;margin:0 0 16px}
  .td-answer{font-size:18px!important;line-height:1.62!important;margin:0 0 26px!important;font-weight:500}
  .td-note-list{display:grid;grid-template-columns:1fr 1fr;gap:10px 28px;margin:0 0 20px;padding-left:22px}
  .td-note-list li{padding-left:4px;font-size:15px;line-height:1.5}
  .td-soft-cta{margin:28px 0;padding:20px 0;border-top:1px solid rgba(10,15,28,.15);border-bottom:1px solid rgba(10,15,28,.15)}
  .td-soft-cta p{margin:0}
  .td-analysis a{color:#4a5568;font-weight:inherit;text-decoration:none;text-shadow:none}
  .td-analysis a:hover{color:#0A0F1C;text-decoration:none}
  .td-analysis li,.td-analysis span,.td-analysis td,.td-analysis th{text-shadow:none}
  .td-faq-list{margin-top:12px}
  .td-faq-item{padding:22px 0;border-top:1px solid rgba(10,15,28,.16)}
  .td-faq-item:last-child{border-bottom:1px solid rgba(10,15,28,.16)}
  .td-faq-item h3{margin:0 0 8px}
  .td-faq-item p{margin:0}
  .td-cost-table{width:100%;border-collapse:collapse;margin:20px 0 24px;font-size:15px}
  .td-cost-table th{font-family:'Archivo Black',sans-serif;text-transform:uppercase;font-size:11px;letter-spacing:.08em;background:#0A0F1C;color:#fff;padding:12px 16px;text-align:left}
  .td-cost-table td{padding:12px 16px;border-bottom:1px solid rgba(10,15,28,.12)}
  .td-cost-table tr:nth-child(even) td{background:#fff}
  @media(max-width:720px){.td-note-list{grid-template-columns:1fr}}
</style>"""


def extract_file_blocks(jsonl_path):
    """Extract ===FILE: ... ===END=== blocks from JSONL conversation transcript."""
    all_text_parts = []

    with open(jsonl_path, 'r', encoding='utf-8', errors='replace') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                data = json.loads(line)
            except json.JSONDecodeError:
                continue

            texts = []

            def collect_text(obj, depth=0):
                if depth > 10:
                    return
                if isinstance(obj, str):
                    texts.append(obj)
                elif isinstance(obj, list):
                    for item in obj:
                        collect_text(item, depth + 1)
                elif isinstance(obj, dict):
                    t = obj.get('type', '')
                    if t in ('text', 'text_delta') and 'text' in obj:
                        texts.append(obj['text'])
                    elif t == 'content_block_delta':
                        collect_text(obj.get('delta', {}), depth + 1)
                    elif t in ('message', 'content_block_start', 'message_delta'):
                        collect_text(obj.get('delta', {}), depth + 1)
                        collect_text(obj.get('message', {}), depth + 1)
                        collect_text(obj.get('content', []), depth + 1)
                    else:
                        for key in ('text', 'content', 'value', 'result', 'message', 'delta'):
                            if key in obj:
                                collect_text(obj[key], depth + 1)

            collect_text(data)
            all_text_parts.extend(texts)

    combined = ''.join(all_text_parts)
    pattern = r'===FILE:\s*([^\n=]+?)\s*===\s*\n(.*?)\n===END==='
    matches = re.findall(pattern, combined, re.DOTALL)
    return {fn.strip(): content.strip() for fn, content in matches}


def inject(filepath, html_content):
    with open(filepath, 'r', encoding='utf-8') as f:
        src = f.read()

    if '<!-- SEO-TRADE-CONTENT:START -->' in src:
        print(f"  SKIP (already injected)")
        return False

    if '</main>' not in src:
        print(f"  ERROR: no </main> found")
        return False

    # Convert h1 to h2 inside SEO section to avoid multiple h1s per page
    html_content = html_content.replace('<h1>', '<h2>').replace('</h1>', '</h2>')

    injection = f"<!-- SEO-TRADE-CONTENT:START -->\n{CSS_BLOCK}\n{html_content}\n<!-- SEO-TRADE-CONTENT:END -->\n"
    new_src = src.replace('</main>', injection + '</main>', 1)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_src)
    return True


# Collect all file blocks from all task output files
all_blocks = {}
for tf in TASK_FILES:
    basename = os.path.basename(tf)
    print(f"Parsing {basename}...")
    if not os.path.exists(tf):
        print(f"  NOT FOUND: {tf}")
        continue
    try:
        blocks = extract_file_blocks(tf)
        all_blocks.update(blocks)
        print(f"  Found {len(blocks)} blocks: {list(blocks.keys())}")
    except Exception as e:
        print(f"  ERROR: {e}")

print(f"\nTotal trade files to inject: {len(all_blocks)}")
print()

success_count = 0
for filename in sorted(all_blocks.keys()):
    html = all_blocks[filename]
    filepath = os.path.join(TRADE_DIR, filename)
    print(f"Processing {filename}...", end=' ')
    if os.path.exists(filepath):
        ok = inject(filepath, html)
        if ok:
            print("OK")
            success_count += 1
    else:
        print(f"FILE NOT FOUND")

print(f"\nInjected {success_count}/{len(all_blocks)} files successfully.")
