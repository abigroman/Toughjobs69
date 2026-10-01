# Stone reveal — house wrap → finished stone (6 s, 16:9, locked camera)

Deterministic 2D composite. No diffusion is involved, so the final frame is the client's actual stone.

| File | What |
|---|---|
| `stone-reveal.mp4` | H.264, 1920×1080, 30 fps, 180 frames, ~1.1 MB |
| `stone-reveal.webm` | VP9, same timing, ~1.2 MB |
| `stone-reveal-poster.jpg` | Final frame (= Plate A), for the `poster` attribute / reduced-motion |
| `plates/before-hybrid.webp` | B′: Plate B inside the stone zone, Plate A everywhere else |
| `plates/after-aligned.webp` | Plate A warped onto Plate B's camera |
| `plates/stone-mask.png` | Stone-only zone (the only pixels that ever change) |
| `pipeline/` | Scripts that regenerate everything (`run.sh`) |

## Timing
- 0.0–0.5 s: hold on B′
- 0.5–4.8 s: reveal (eased in and out). Whole stones are set bottom course up, per facade section, with noise in the order and a few early stones. Each stone takes 7 frames: it drops about 3 px, scales from 110% to 100% and fades in, casting a contact shadow that fades as it settles.
- 4.8–6.0 s: hold on exact Plate A

## Verified
- Alignment: 2,104 RANSAC inliers, reprojection median 1.49 px, p95 2.77 px.
- Pixels outside the stone zone (78.9% of the frame) are identical to Plate A in all 180 PNG frames (max diff 0).
- Last frame is Plate A exactly (max diff 0 before encoding).
- 1,042 stones, segmented along the mortar joints.

## Known limits
- Built from the 1672×941 copies of the plates, so 1080p is a slight upscale. Re-run `pipeline/run.sh` on the full-res originals for a sharper master.
  Note: the hand-labelled training boxes in `clf.py` use 1672-wide pixel coordinates; scale them if the input size changes.
- The plates disagree a little at the stone foundation strip behind the shrubs. Those few stones stay as Plate A from frame 1.

## Embed
```html
<video autoplay muted playsinline preload="auto" poster="stone-reveal-poster.jpg">
  <source src="stone-reveal.webm" type="video/webm">
  <source src="stone-reveal.mp4" type="video/mp4">
</video>
```
With `prefers-reduced-motion: reduce`, show the poster image instead of autoplaying.
