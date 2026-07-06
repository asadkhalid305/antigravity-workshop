# AGENTS.md

This is a Next.js app.

## Commands

```bash
npm run dev
npm run lint
npm run build
```

Keep changes small and make sure the app still builds.

## Context Surfaces

This branch intentionally includes multiple agent-context surfaces for the
workshop:

- `.agents/rules/`: always-on product, data, UI, and verification constraints.
- `.agents/workflows/`: repeatable routines for planning, reviewing, and
  verifying changes.
- `.agents/skills/`: deeper reusable guidance for feature work, UI/forms, and
  review.

`AGENTS.md` is only the orientation layer. Detailed rules and workflows live in
their dedicated files so the same instruction is not maintained in two places.

## Workshop Workflow

The app on `main` is the polished complete version. Workshop branches may
remove, add, or alter code to create exercise scenarios.
