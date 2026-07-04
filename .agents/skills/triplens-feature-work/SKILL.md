---
name: triplens-feature-work
description: Implement TripLens product changes while preserving the post-trip insight boundary, local data model, calculation safety, and workshop-friendly scope.
---

# TripLens Feature Work

Use this skill when implementing a TripLens feature, changing dashboard
behavior, changing trip comparison, editing persistence, or touching the domain
model.

## Product Shape

TripLens helps a traveler understand completed trip spending after the trip is
over. It is not a live finance product.

Good changes usually improve one of these:

- Entering post-trip category totals.
- Understanding the currently selected trip.
- Comparing one completed trip with another completed trip.
- Reading category, yearly, and per-day travel patterns.
- Resetting or editing fictional local data safely.

## Implementation Notes

- Keep persistence in `localStorage`.
- Keep route handlers stateless.
- Keep money as integer cents in domain logic.
- Keep formatting at the UI edge.
- Keep selected trip and comparison trip as separate concepts.
- Prevent self-comparison.
- Prefer changing existing components and helpers before adding new abstractions.
- Keep dependencies stable unless the user explicitly asks for a new capability.

## Verification

For feature changes, run the smallest meaningful check first. Before handoff,
prefer `npm run verify` and browser inspection for the changed flow.
