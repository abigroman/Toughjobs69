#!/usr/bin/env bash
# Stone-reveal pipeline. Put the two plates in this folder as B.webp (house wrap) and A.webp (finished stone).
# Requires: python3, opencv-python-headless, scikit-image, scikit-learn, scipy, ffmpeg.
set -euo pipefail
python3 align.py     # A -> B homography (ORB + RANSAC) -> Aw.png
python3 mask.py      # LAB-difference / texture feature maps
python3 clf.py       # random-forest stone classifier (hand-labelled boxes, 1672x941 coords) -> P.npy
python3 clean.py     # coarse stone region -> mask_stone.png
python3 mask4.py     # change-driven mask minus plants/dark fixtures -> mask_final.png
python3 win.py       # window/door/lantern exclusions -> exclude.png, core.png
python3 patch.py     # add shaded stone returns -> mask_final3.png
python3 patch2.py    # smooth-in-B / textured-in-A cue -> mask_stoneonly.png, Bprime.png
python3 seg2.py      # mortar-ridge watershed -> stones.npy (one label per stone)
python3 render.py    # per-stone schedule + pop/drop/shadow -> frames/
ffmpeg -y -framerate 30 -i frames/f%04d.png -vf "scale=1920:1080:flags=lanczos,format=yuv420p" \
  -c:v libx264 -preset slow -crf 17 -movflags +faststart -an stone-reveal.mp4
ffmpeg -y -framerate 30 -i frames/f%04d.png -vf "scale=1920:1080:flags=lanczos,format=yuv420p" \
  -c:v libvpx-vp9 -b:v 0 -crf 30 -row-mt 1 -an stone-reveal.webm
