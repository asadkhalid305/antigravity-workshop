---
description: Verify an implemented TripLens change by inspecting the diff, identifying affected flows, running focused checks, and summarizing evidence.
---

# Workflow: Verify A TripLens Change

Use this workflow before handing off a TripLens branch after a change has been
implemented.

1. Inspect `git status --short` and the current diff to understand exactly what
   changed.
2. Identify the affected TripLens flows: dashboard summary, trip comparison,
   New trip, Edit trip, Reset, charts, calculations, or local persistence.
3. Choose the narrowest checks that match the changed files and affected flows.
4. For calculation or data changes, run `npm run test`.
5. For shared TypeScript or UI changes, run `npm run typecheck`.
6. For final handoff, run `npm run verify`.
7. For UI changes, start the app and inspect mobile and desktop browser states.
8. Confirm the selected-trip and comparison-trip flows still work separately
   when those flows are affected.
9. Confirm New trip, Edit trip, and Reset still work when those flows are
   affected.
10. Summarize the changed files, checks run, results, and any remaining manual
    verification gaps.

Do not claim a check passed unless it was actually run.
