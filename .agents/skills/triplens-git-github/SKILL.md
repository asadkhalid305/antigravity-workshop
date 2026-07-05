---
name: triplens-git-github
description: Inspect TripLens Git and GitHub pull request state before recommending fixes.
---

# TripLens Git And GitHub

Use this skill when reviewing a TripLens branch, GitHub pull request, or
workshop PR inspection task.

## Review Flow

1. Identify the current branch and compare target.
2. For PRs, inspect title, base branch, head branch, checks, and changed files.
3. Read the diff before proposing fixes.
4. For calculation changes, run `npm run test` before recommending edits.
5. Report findings first and wait for approval before changing files.

## TripLens Risk Areas

- Per-day cost and comparison delta calculations.
- Selected trip versus comparison trip state.
- Local `localStorage` persistence and reset behavior.
- Stateless mock route handlers.
- Mobile-first chart and form readability.

Keep the review concrete: name the file, behavior, and verification signal.
