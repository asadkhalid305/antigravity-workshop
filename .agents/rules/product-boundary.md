# TripLens Product Boundary

TripLens is a post-trip travel spending insight app.

The core user job is:

> After a trip, I want to enter category totals and understand my travel
> patterns so future trips are easier to plan.

Keep changes inside that product boundary unless the user explicitly asks for a
future product direction.

Avoid adding:

- Bank account connections.
- Live transaction syncing.
- OCR or receipt upload.
- Authentication or user accounts.
- Database-backed persistence.
- Exchange-rate APIs.
- Budget warnings or financial advice.

When improving the app, prefer better post-trip insight, clearer comparison,
cleaner forms, and more understandable travel patterns.
