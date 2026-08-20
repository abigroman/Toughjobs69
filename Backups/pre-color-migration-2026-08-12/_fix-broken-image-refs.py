#!/usr/bin/env python3
"""Rewrite HTML references for the three known extension/variant mismatches:

1. white-engineering-background.png     -> white-engineering-background.webp
2. primer-page-<trade>-2.png            -> primer-page-<trade>-1.webp
3. wrap-truck-erik.png                  -> wrap-truck-erik.webp

Only touches .html files outside _ARCHIVE/_BACKUP*/_LOCKED/scraps.
Verifies each destination file exists before rewriting.
"""
import os
import re
from pathlib import Path

REPO = Path(__file__).parent.resolve()
EXCLUDE_DIRS = {'.git', '_ARCHIVE', '_BACKUP_2026-07-01-before-inline-removal',
                '_LOCKED', 'scraps'}

REPLACEMENTS = [
    ('white-engineering-background.png', 'white-engineering-background.webp'),
    ('wrap-truck-erik.png', 'wrap-truck-erik.webp'),
    ('architectural-drawing-transparent.png', 'architectural-drawing-transparent.webp'),
    ('engineering-schematics.png', 'engineering-schematics.jpg'),
    ('background-forrest-green.webp', 'forest-background-green.webp'),
]

PRIMER_RE = re.compile(r'primer-page-([a-z-]+)-2\.png')


def build_disk_set(repo: Path):
    disk = set()
    for root, dirs, files in os.walk(repo):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for f in files:
            rel = (Path(root) / f).relative_to(repo).as_posix().lower()
            disk.add(rel)
    return disk


def main():
    disk = build_disk_set(REPO)

    # Verify simple replacements' targets exist
    for old, new in REPLACEMENTS:
        target = f'assets/{new}'
        if target not in disk:
            print(f'ABORT: target does not exist: {target}')
            return

    changed_files = []
    total_subs = 0

    for root, dirs, files in os.walk(REPO):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for f in files:
            if not f.lower().endswith(('.html', '.htm')):
                continue
            path = Path(root) / f
            try:
                original = path.read_text(encoding='utf-8')
            except UnicodeDecodeError:
                original = path.read_text(encoding='utf-8', errors='replace')

            new_text = original
            file_subs = 0

            for old, new in REPLACEMENTS:
                if old in new_text:
                    count = new_text.count(old)
                    new_text = new_text.replace(old, new)
                    file_subs += count

            def primer_repl(m):
                trade = m.group(1)
                webp_target = f'assets/primer-page-{trade}-1.webp'
                if webp_target in disk:
                    return f'primer-page-{trade}-1.webp'
                return m.group(0)

            new_text, primer_count = PRIMER_RE.subn(primer_repl, new_text)
            file_subs += primer_count

            if new_text != original:
                path.write_text(new_text, encoding='utf-8', newline='')
                rel = path.relative_to(REPO).as_posix()
                changed_files.append((rel, file_subs))
                total_subs += file_subs

    print(f'Edited {len(changed_files)} files, {total_subs} replacements total.\n')
    for rel, n in sorted(changed_files):
        print(f'  {rel}  ({n})')


if __name__ == '__main__':
    main()
