---
name: triplens-review-checklist
description: Check TripLens pull requests against product, data, UI, and verification expectations.
---

# TripLens Review Checklist

Use this skill when reviewing a TripLens pull request or branch diff.

## Review Priorities

1. Calculation correctness for totals, per-day costs, and comparison deltas.
2. Selected trip and comparison trip state staying separate.
3. Local `localStorage` persistence and reset behavior.
4. Stateless mock route handlers.
5. Mobile-first dashboard, chart, and form readability.
6. Product boundary: post-trip insights only, no live finance or bank features.

## Review Behavior

Lead with findings, ordered by severity. For each finding, name the file,
behavior, and verification signal. If there are no findings, say that clearly
and note any remaining test or browser-verification gap.

For calculation changes, start with `npm run test`.

After findings, draft the GitHub review comment text you would post. The
comment should explain the issue, why it matters, and the smallest expected
change. Ask the user whether the comment looks good before posting it.

Do not edit files during PR review. Do not ask to fix the PR unless the user
explicitly switches from review to implementation.

Do not recommend live finance features, bank integrations, auth, databases,
receipt scanning, exchange-rate APIs, or broad redesigns unless the PR already
touches that scope and the issue is directly relevant.
