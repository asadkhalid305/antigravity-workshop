# AGENTS.md

Guidance for agentic work in this repository.

## Product

TripLens is a post-trip travel spending insight app. It is not a finance app,
budgeting app, live expense tracker, bank integration, or financial advice
product.

The core user job:

> After a trip, I want to enter category totals and understand my travel
> patterns so future trips are easier to plan.

## Commands

```bash
npm run dev        # Start local Next.js dev server
npm run lint       # ESLint
npm run typecheck  # TypeScript without emitting
npm run test       # Vitest unit tests
npm run build      # Production build
npm run verify     # lint + typecheck + tests + build
```

## Context Surfaces

This branch intentionally includes multiple agent-context surfaces for the
workshop:

- `.agents/rules/`: always-on product, data, UI, and verification constraints.
- `.agents/workflows/`: repeatable routines for planning, reviewing, and
  verifying changes.
- `.agents/skills/`: deeper reusable guidance for feature work, UI/forms, and
  review.
- `.agents/hooks.json`: deterministic lifecycle guardrails for scheduled
  automation demos.
- `.agents/plugins/` and `.agents/mcp_config.json`: exercise-specific extension
  surfaces used by later workshop branches.
- `.agents/settings.json`: project-level Antigravity permission settings.

`AGENTS.md` is only the orientation layer. Detailed rules and workflows live in
their dedicated files so the same instruction is not maintained in two places.
Workshop branch purposes live in `docs/workshop/branch-flow.md`.

## Workshop Workflow

The app on `main` is the polished complete version. Workshop branches may
remove, add, or alter code to create exercise scenarios.
