#!/usr/bin/env python3
"""One-off: substitute missing images with best-fit existing assets, or
remove the surrounding element when no substitute makes sense. Also
updates alt text so it matches the substitute.
"""
import re
from pathlib import Path

REPO = Path(__file__).parent.resolve()

# (file, old, new)
SUBSTITUTIONS = [
    # City skyline CSS backgrounds -> generic blueprint background
    (
        'davenport-ia.html',
        "url('assets/davenport-skyline-hero.webp')",
        "url('assets/blueprint-background.webp')",
    ),
    (
        'dubuque-ia.html',
        "url('assets/dubuque-skyline-hero.webp')",
        "url('assets/blueprint-background.webp')",
    ),
    (
        'peoria-il.html',
        "url('assets/peoria-skyline-hero.webp')",
        "url('assets/blueprint-background.webp')",
    ),
    # employment.html <img> tags — swap src + rewrite alt to match substitute
    (
        'employment.html',
        '<img src="assets/toughjobs-office.png" alt="Toughjobs team at work in the office"',
        '<img src="assets/erik-electrical-toughjobs.webp" alt="Toughjobs electrician on the job"',
    ),
    (
        'employment.html',
        '<img src="assets/toughjobs-office-meeting.png" alt="Toughjobs team collaborating around a meeting table in the office"',
        '<img src="assets/wrench-worker-hero.webp" alt="Toughjobs tradesperson at work"',
    ),
    (
        'employment.html',
        '<img src="assets/toughjobs-truck-tech.png" alt="Toughjobs branded truck with technician and website displayed on laptop"',
        '<img src="assets/wrap-truck-erik.webp" alt="Toughjobs branded work truck"',
    ),
]

# (file, pattern, replacement) — for multi-line removals
REMOVALS = [
    (
        'insight-conversion-killers.html',
        # Match the whole figure block containing phone-mockup.png
        re.compile(
            r'\s*<figure[^>]*>\s*<img[^>]*phone-mockup\.png[^>]*/>\s*<figcaption[^>]*>[^<]*</figcaption>\s*</figure>',
            re.DOTALL,
        ),
        '',
    ),
]


def main():
    changes = []
    for fname, old, new in SUBSTITUTIONS:
        path = REPO / fname
        text = path.read_text(encoding='utf-8')
        if old not in text:
            changes.append((fname, 'MISS: pattern not found', 0))
            continue
        count = text.count(old)
        text = text.replace(old, new)
        path.write_text(text, encoding='utf-8', newline='')
        changes.append((fname, f'{old[:60]}...', count))

    for fname, pattern, replacement in REMOVALS:
        path = REPO / fname
        text = path.read_text(encoding='utf-8')
        new_text, count = pattern.subn(replacement, text)
        if count == 0:
            changes.append((fname, 'MISS: removal regex did not match', 0))
            continue
        path.write_text(new_text, encoding='utf-8', newline='')
        changes.append((fname, 'removed <figure> with phone-mockup', count))

    for fname, desc, n in changes:
        status = 'OK' if n > 0 else 'FAIL'
        print(f'[{status}] {fname}: {desc} ({n})')


if __name__ == '__main__':
    main()
