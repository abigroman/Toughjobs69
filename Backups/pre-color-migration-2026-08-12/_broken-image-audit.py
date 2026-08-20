#!/usr/bin/env python3
"""One-off audit: which pages reference images that don't exist on disk.

Scans every .html file in the repo (excluding _ARCHIVE, _BACKUP*, _LOCKED,
scraps, .git). Extracts img src, srcset, and CSS url(...) references.
Skips data URIs, absolute URLs, mailto/tel/anchor links. Resolves relative
to the referring HTML file. Reports pages whose referenced local files
don't exist on disk.
"""
import os
import re
import sys
from pathlib import Path
from collections import defaultdict
from urllib.parse import unquote, urlparse

REPO = Path(__file__).parent.resolve()
EXCLUDE_DIRS = {'.git', '_ARCHIVE', '_BACKUP_2026-07-01-before-inline-removal',
                '_LOCKED', 'scraps'}
IMG_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif',
                  '.ico', '.bmp', '.mp4', '.webm', '.mov'}

IMG_SRC_RE = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']', re.IGNORECASE)
SRCSET_RE = re.compile(r'srcset=["\']([^"\']+)["\']', re.IGNORECASE)
SOURCE_SRC_RE = re.compile(r'<source[^>]+src=["\']([^"\']+)["\']', re.IGNORECASE)
CSS_URL_RE = re.compile(r'url\(\s*["\']?([^)"\']+)["\']?\s*\)', re.IGNORECASE)
POSTER_RE = re.compile(r'\bposter=["\']([^"\']+)["\']', re.IGNORECASE)
VIDEO_SRC_RE = re.compile(r'<video[^>]+src=["\']([^"\']+)["\']', re.IGNORECASE)


def is_external(ref: str) -> bool:
    if ref.startswith(('data:', 'mailto:', 'tel:', '#', 'javascript:')):
        return True
    if ref.startswith(('http://', 'https://', '//')):
        return True
    return False


def collect_refs(html: str):
    refs = set()
    for m in IMG_SRC_RE.finditer(html):
        refs.add(m.group(1).strip())
    for m in SOURCE_SRC_RE.finditer(html):
        refs.add(m.group(1).strip())
    for m in VIDEO_SRC_RE.finditer(html):
        refs.add(m.group(1).strip())
    for m in POSTER_RE.finditer(html):
        refs.add(m.group(1).strip())
    for m in CSS_URL_RE.finditer(html):
        v = m.group(1).strip()
        if not v.startswith('#'):
            refs.add(v)
    for m in SRCSET_RE.finditer(html):
        for part in m.group(1).split(','):
            url = part.strip().split()[0] if part.strip() else ''
            if url:
                refs.add(url)
    return refs


def build_disk_index(repo: Path):
    """Case-insensitive lookup of every file path relative to repo root."""
    index = {}
    for root, dirs, files in os.walk(repo):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for f in files:
            p = Path(root) / f
            rel = p.relative_to(repo).as_posix().lower()
            index[rel] = p.relative_to(repo).as_posix()
    return index


def resolve(ref: str, html_dir: Path, repo: Path) -> str:
    """Resolve a ref to a repo-relative posix path (lowercased for lookup)."""
    ref = unquote(ref)
    ref = ref.split('#', 1)[0].split('?', 1)[0]
    if not ref:
        return ''
    if ref.startswith('/'):
        target = (repo / ref.lstrip('/')).resolve()
    else:
        target = (html_dir / ref).resolve()
    try:
        rel = target.relative_to(repo).as_posix().lower()
    except ValueError:
        return f'OUTSIDE_REPO::{target}'
    return rel


def main():
    disk = build_disk_index(REPO)
    broken_by_page = defaultdict(list)
    total_refs = 0
    total_broken = 0

    for root, dirs, files in os.walk(REPO):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for f in files:
            if not f.lower().endswith(('.html', '.htm')):
                continue
            html_path = Path(root) / f
            page_rel = html_path.relative_to(REPO).as_posix()
            try:
                html = html_path.read_text(encoding='utf-8', errors='replace')
            except Exception as e:
                print(f'ERROR reading {page_rel}: {e}', file=sys.stderr)
                continue

            refs = collect_refs(html)
            for ref in refs:
                if is_external(ref):
                    continue
                ext = Path(ref.split('#')[0].split('?')[0]).suffix.lower()
                if ext and ext not in IMG_EXTENSIONS:
                    continue
                total_refs += 1
                resolved = resolve(ref, html_path.parent, REPO)
                if not resolved:
                    continue
                if resolved.startswith('OUTSIDE_REPO::'):
                    broken_by_page[page_rel].append((ref, 'points outside repo'))
                    total_broken += 1
                elif resolved not in disk:
                    broken_by_page[page_rel].append((ref, resolved))
                    total_broken += 1

    print(f'Scanned {sum(1 for _ in disk if _.endswith((".html", ".htm")))} pages, '
          f'{total_refs} local image refs, {total_broken} broken.\n')

    if not broken_by_page:
        print('No broken image references found.')
        return

    print(f'=== PAGES WITH BROKEN IMAGES ({len(broken_by_page)}) ===\n')
    for page in sorted(broken_by_page.keys()):
        broken = broken_by_page[page]
        print(f'{page}  ({len(broken)} broken)')
        # dedupe refs
        seen = set()
        for ref, resolved in broken:
            if ref in seen:
                continue
            seen.add(ref)
            print(f'  - {ref}')
        print()


if __name__ == '__main__':
    main()
