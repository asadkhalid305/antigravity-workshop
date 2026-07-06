#!/usr/bin/env bash
set -euo pipefail

fail() {
  printf "Error: %s\n" "$1" >&2
  exit 1
}

command -v git >/dev/null 2>&1 || fail "git is required."
command -v gh >/dev/null 2>&1 || fail "GitHub CLI is required."

git rev-parse --is-inside-work-tree >/dev/null 2>&1 ||
  fail "Run this from inside the TripLens repository."

if [ -n "$(git status --porcelain)" ]; then
  fail "Working tree is not clean. Commit or stash local changes before creating the demo PR."
fi

gh auth status >/dev/null 2>&1 ||
  fail "GitHub CLI is not authenticated. Run gh auth login first."

base_branch="$(git branch --show-current)"
[ -n "$base_branch" ] || fail "Could not determine the current branch."

user_login="$(gh api user --jq .login 2>/dev/null || true)"
if [ -z "$user_login" ]; then
  user_login="$(git config user.name || true)"
fi
[ -n "$user_login" ] || user_login="participant"

user_slug="$(printf "%s" "$user_login" | tr '[:upper:]' '[:lower:]' | tr -cs 'a-z0-9' '-' | sed 's/^-//; s/-$//')"
[ -n "$user_slug" ] || user_slug="participant"

timestamp="$(date +%Y%m%d-%H%M%S)"
random_id="$(uuidgen 2>/dev/null | tr '[:upper:]' '[:lower:]' | cut -c 1-8 || true)"
[ -n "$random_id" ] || random_id="$(git rev-parse --short HEAD)"

demo_id="${user_slug}-${timestamp}-${random_id}"
branch_name="demo/scheduled-pr-brief-${demo_id}"
demo_file="docs/workshop/schedule-demo-${demo_id}.md"
title="docs: add scheduled automation demo note (${demo_id})"
body="Demo PR for the scheduled automation workshop exercise.

This PR exists so the scheduled CLI automation has fresh GitHub activity to inspect."
comment="Please confirm this demo stays focused on CLI scheduling and hooks."

git switch -c "$branch_name"

cat >"$demo_file" <<EOF
# Schedule Demo

Temporary PR activity for the scheduled automation exercise.

- Demo id: ${demo_id}
- Created from: ${base_branch}
EOF

git add "$demo_file"
git commit -m "$title"
git push -u origin "$branch_name"

pr_url="$(gh pr create --base "$base_branch" --head "$branch_name" --title "$title" --body "$body")"
gh pr comment "$pr_url" --body "$comment"

printf "\nCreated demo PR: %s\n" "$pr_url"
printf "Added review-style comment for the scheduled automation to summarize.\n"
