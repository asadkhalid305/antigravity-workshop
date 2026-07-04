# Workflow: Plan A TripLens Change

Use this workflow when a TripLens request is non-trivial or touches UI, forms,
charts, calculations, or persistence.

1. Inspect the current branch and relevant files.
2. Restate the user-visible problem in TripLens terms.
3. Identify the product boundary that applies.
4. List the smallest files likely to change.
5. Propose a short plan with verification steps.
6. Wait if the user asked for planning only; otherwise proceed.

Useful files:

- `AGENTS.md`
- `.agent/rules/product-boundary.md`
- `.agent/rules/data-contract.md`
- `.agent/rules/ui-quality.md`
- `.agent/rules/verification.md`
- `src/components/trip-dashboard.tsx`
- `src/lib/triplens/`
