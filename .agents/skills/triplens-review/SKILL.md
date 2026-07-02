---
name: triplens-review
description: Review TripLens changes for product boundary, calculation correctness, chart/form accessibility, visual consistency, and verification gaps.
---

# TripLens Review

Use this skill when asked to review TripLens changes or when preparing a
workshop inspection pass.

## Review Checklist

1. Product boundary: confirm the change stays post-trip and does not introduce
   live budgeting, bank sync, OCR, auth, database storage, or financial advice.
2. Calculation safety: check integer cents, trip duration, yearly totals,
   category totals, comparison deltas, and formatting at the UI edge.
3. Visual consistency: preserve the light floating layout, spacious mobile-first
   rhythm, 8px-ish radii, and restrained sky/mint/coral/blue palette.
4. Accessibility: charts must have text summaries; forms need labels; buttons
   need clear names; status should not rely on color alone.
5. Verification: name the smallest useful check first, then `npm run verify`
   before commit, release, or branch handoff.

## Output

Lead with findings. If there are no findings, say that clearly and list the
checks still worth running.
