---
description: Review an existing TripLens diff for product-boundary drift, data or calculation risk, UI/form/chart issues, and missing verification.
---

# Workflow: Review A TripLens Change

Use this workflow after a TripLens diff exists.

1. Inspect `git status --short` and the current diff.
2. Check product-boundary drift.
3. Check calculation/data contract risk.
4. Check mobile and desktop UI implications.
5. Check form accessibility and readable labels.
6. Check chart accessibility and non-color summaries.
7. Check whether verification matches the risk.

Lead with findings. If no findings are found, say that directly and name any
remaining verification gaps.
