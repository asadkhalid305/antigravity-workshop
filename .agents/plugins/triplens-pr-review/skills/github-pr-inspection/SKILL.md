---
name: github-pr-inspection
description: Inspect GitHub pull request metadata, diffs, mergeability, and checks before reviewing code.
---

# GitHub PR Inspection

Use this skill when a PR review needs current GitHub state before commenting on
the code.

## Inspection Flow

1. Identify the repository, PR number, base branch, and head branch.
2. Inspect PR metadata before the diff:
   `gh pr view <number> --repo <owner>/<repo> --json number,title,url,baseRefName,headRefName,mergeable,statusCheckRollup`.
3. Inspect changed files and the patch with `gh pr diff`.
4. Inspect checks with `gh pr checks` when available.
5. If `gh` authentication blocks read-only access, use the public PR URL or
   GitHub diff URL when the repository is public.
6. Note whether checks pass, fail, or are missing.
7. Report PR status, changed files, risk areas, and the smallest useful local
   checks before suggesting edits.

Do not edit files during the inspection pass.
