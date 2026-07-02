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

## Project Rules

- Keep the app post-trip only. Do not add bank accounts, live transaction
  syncing, OCR, receipt upload, auth, database storage, exchange-rate APIs, or
  budget warnings unless a task explicitly asks for that future product work.
- Client edits persist in `localStorage`. Route handlers are stateless mock APIs
  for workshop realism and Vercel compatibility.
- Store money as integer cents in domain logic. Format display values at the UI
  edge with `Intl.NumberFormat`.
- Keep seed data fictional and realistic. Do not add real personal travel data.
- Preserve the light, spacious, mobile-first visual direction: pale sky/mint
  base, restrained coral/blue accents, floating panels, soft shadows, and
  8px-ish radii.
- Charts use Recharts. Each chart should have nearby text/list summaries so the
  insight is not color-only.
- Prefer small, inspectable changes. Name the files touched, the behavior
  changed, and the verification signal.

## Workshop Workflow

The app on `main` is the polished complete version. Workshop branches may
remove, add, or alter code to create exercise scenarios.

Before editing:

1. Inspect the current branch and relevant files.
2. Restate the product boundary and intended change.
3. Propose a small plan for non-trivial tasks.
4. Name verification steps before implementation.

After editing:

1. Explain the diff at behavior level.
2. Run the narrowest useful check first.
3. Run `npm run verify` before commit, release, or branch handoff.
4. Do not commit `.env*`, `.vercel/`, `.next/`, `node_modules/`, screenshots,
   or generated build output.
