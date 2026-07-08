---
name: triplens-branch-ladder-sync
description: Audit or synchronize the TripLens workshop branch ladder, especially shared documentation propagation, adjacent branch ancestry, protected demo bugs, and local/remote parity across main, 00, 01, 02, 03, 04, 05, and 06.
---

# TripLens Branch Ladder Sync

Use this skill when the user asks whether the TripLens workshop branches are
synced, whether main-branch docs reached all branches, or whether the branch
sequence still matches the workshop contract.

## Canonical Ladder

The branch order is:

```txt
main
00-unprepared-agent
01-agent-context
02-plan-before-editing
03-inspect-and-verify
04-external-context-mcp
05-automation-and-hooks
06-command-showcase
```

Each branch must include the previous branch's changes. A previous branch must
not include later branch material.

## Teaching Contract

- `main` and `00`: keep the app baseline clean. The only allowed `.agents`
  content is this branch-ladder sync skill, so agents can discover the sync
  workflow when work starts from `main`.
- `01`: introduces product rules, workflows, and feature/review skills.
- `02`: inherits `01` and adds the plan-before-editing exercise.
- `03`: adds the PR-review plugin and keeps the deliberate daily-cost bug.
- `04`: inherits `03`, fixes the daily-cost bug, and keeps the MCP compare API
  payload mismatch.
- `05`: inherits `04` and adds hooks/scheduling material.
- `06`: inherits `05` and adds command-showcase material.

Shared public docs such as `README.md` and `docs/workshop/*` should be kept in
sync across the ladder unless a file is intentionally branch-specific.

## Procedure

1. Fetch first: `git fetch --prune origin`.
2. Check the working tree and do not overwrite unrelated local changes.
3. Verify adjacent ancestry with:

   ```bash
   git merge-base --is-ancestor <previous> <next>
   ```

4. Inspect branch contents without checkout churn:

   ```bash
   git ls-tree -r --name-only <branch>
   git show <branch>:<file>
   ```

5. Search docs for known stale wording:

   ```bash
   git grep -n -E "05-automation-and-surfaces|agy plugins|CLAUDE|\\.agent/" <branch> -- '*.md'
   ```

6. If shared docs changed on `main`, merge or cherry-pick the validated docs
   forward from `main` to `00`, then cascade `00 -> 01 -> 02 -> 03 -> 04 -> 05
   -> 06`.
7. Preserve branch-specific layers when resolving conflicts. Keep this skill
   available on every branch, but do not add other context/rule/workflow/plugin
   surfaces to `main` or `00`.
8. Before deleting any branch, check open PR heads:

   ```bash
   gh pr list --state open --json number,title,headRefName,baseRefName,url
   ```

9. Push changed branches and verify each local branch hash matches
   `origin/<branch>`.

## Verification

Run focused checks after branch changes:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
agy plugin validate .agents/plugins/triplens-pr-review
```

Also confirm the deliberate bug placement:

- `03` daily cost divides by `Math.max(1, getTripDurationDays(trip) - 1)`.
- `04+` daily cost divides by `getTripDurationDays(trip)`.
