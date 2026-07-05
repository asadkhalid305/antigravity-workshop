# TripLens Workshop Notes

This folder contains attendee and facilitator material for turning TripLens into
the Antigravity workshop exercise repository.

The deployed `main` branch is the full app. Checkpoint branches are created from
that app by removing, adding, or altering specific pieces so each exercise has a
clear teaching surface.

## Files

- `branch-flow.md`: checkpoint branch purpose and expected app shape.
- `prompt-pack.md`: copy-ready prompts for the workshop exercises.

## Context Stack In `01-agent-context`

The `01-agent-context` branch demonstrates the local context layer that is
missing from `00-unprepared-agent`:

- Rules in `.agents/rules/` define always-on boundaries.
- Workflows in `.agents/workflows/` define repeatable routines.
- Skills in `.agents/skills/` provide deeper reusable task knowledge.

For the `00` versus `01` comparison, run the same plain prompt on both branches.
Do not invoke workflows yet. The goal is to see whether ambient project context
changes the output.

The `.agents/plugins/triplens-pr-review/` plugin is introduced later in
`03-inspect-and-verify`, where its reviewer agent and supporting skills act as
a PR-style inspection surface.

The `.agents/mcp_config.json` MCP configuration is introduced in
`04-external-context-mcp` as the Google Antigravity-facing workshop artifact.
It intentionally includes two different MCP styles: Context7 for external
documentation and Chrome DevTools for live browser inspection.

In Antigravity, the active raw MCP config is managed from the MCP Servers UI
and stored globally under the user's Gemini/Antigravity config directory. This
repo file exists so attendees can inspect the exact servers for this branch and
copy the `mcpServers` block into Antigravity when needed.

## Teaching Spine

```txt
Context -> Plan -> Execute -> Inspect -> Verify -> Automate
```

The product domain should stay light and understandable. The point is not to
teach travel finance. The point is to give agents a real app surface where
context, planning, review, verification, MCP, and automation become visible.
