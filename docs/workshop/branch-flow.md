# Checkpoint Branch Flow

## `main`

The complete polished TripLens app that can be deployed and shown before the
workshop. It includes dashboard metrics, charts, add/edit/reset flows,
comparison, mock APIs, local persistence, tests, and project context.

## `00-unprepared-agent`

Purpose: show that a broad request can produce different valid outputs when the
project lacks enough operating context.

Expected shape: remove most local context files and keep a simpler app surface.
Use a broad prompt such as "make this post-trip insights app more useful".

## `01-agent-context`

Purpose: show that rules, workflows, and skills reduce guessing.

Expected shape: same useful app surface as `00`, but restore context files and
ask the agent to inspect them before making a similarly broad improvement.

## `02-plan-before-editing`

Purpose: practice plan-only work before edits.

Expected shape: remove or simplify trip comparison, then ask for a plan to add a
bounded comparison feature.

## `03-inspect-and-verify`

Purpose: introduce a pull-request review plugin with one custom reviewer agent
and supporting review skills.

Expected shape: include the `.agents/plugins/triplens-pr-review/` plugin
folder, PR inspection/checklist skills, one custom reviewer agent, and a small
intentional calculation bug around per-day trip cost. Review the branch like a
PR, draft review comments, and post only after approval.

## `04-external-context-mcp`

Purpose: show that MCP lets an agent connect to external context beyond the
repository.

Expected shape: add `.agents/mcp_config.json` with Context7 and Chrome
DevTools MCP servers for Google Antigravity. Use Chrome DevTools as the primary
live demo for inspecting the local TripLens app in a browser. The comparison
panel includes a prepared `Refresh API comparison` action that produces a
diagnosable failed network request. Context7 is a shorter optional docs demo for
current package guidance.

## `05-automation-and-hooks`

Purpose: show that CLI scheduling can turn a repeated, bounded agent task into
an automation, and that hooks can add deterministic guardrails around that
automation.

Expected shape: same as `04`, with the GitHub/PR review context still available.
Use a short recurring schedule during the live demo to generate a PR triage
brief: list open PRs, summarize review comments, check status, identify actions,
and suggest replies. Include a helper script for creating unique demo PR
activity as a facilitator-run terminal command, plus manual fallback commands.
Add a workspace-level hook that blocks mutating GitHub/git commands from agent
tool calls. Explain that a real team would usually schedule this daily, not
every few minutes.

## `06-command-showcase`

Purpose: optional wrap-up branch for showcasing the Antigravity CLI command
surface after the scheduling and hooks demo.

Expected shape: same as `05`, with no extra app exercise required. Use
`docs/workshop/cli-command-showcase.md` and the prompt pack to demonstrate
developer workflow commands first: `/grill-me`, `/learn`, and `/goal`, followed
by `/fork`, `/rewind`, `/agents`, `/tasks`, `/diff`, `/add-dir`, `/usage`, and
`/credits`. Keep launch flags such as `-p`, `--sandbox`,
`--dangerously-skip-permissions`, and `--prompt-interactive`; shell subcommands
such as `models`, `changelog`, and `plugin validate`; and settings/shortcuts as
quick-show or take-home material.

Treat this as a time-filler branch. If time is short, demo only the prioritized
commands and leave the full checklist for take-home practice.
