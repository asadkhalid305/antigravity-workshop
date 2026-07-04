# TripLens Data Contract

TripLens stores client edits in `localStorage`. Route handlers are stateless
mock APIs used for workshop realism and Vercel deployment compatibility.

Follow these data rules:

- Store money as integer cents in domain logic.
- Format money at the UI edge with `Intl.NumberFormat`.
- Keep seed trips fictional and realistic.
- Preserve the category-total model: each trip has category totals and optional
  notes.
- Treat the selected trip as the current analysis target.
- Treat the compared trip as a separate choice from the selected trip.
- Do not let the selected trip compare against itself.
- Keep reset behavior deterministic by restoring the seed trips.

Calculation-sensitive files live under `src/lib/triplens/`. UI state and
interaction behavior currently live in `src/components/trip-dashboard.tsx`.
