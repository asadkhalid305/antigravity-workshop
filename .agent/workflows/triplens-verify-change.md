# Workflow: Verify A TripLens Change

Use this workflow before handing off a TripLens branch.

1. Run the narrowest useful check first.
2. For calculation or data changes, run `npm run test`.
3. For shared TypeScript or UI changes, run `npm run typecheck`.
4. For final handoff, run `npm run verify`.
5. For UI changes, start the app and inspect mobile and desktop browser states.
6. Confirm the selected-trip and comparison-trip flows still work separately.
7. Confirm New trip, Edit trip, and Reset still work.

Do not claim a check passed unless it was actually run.
