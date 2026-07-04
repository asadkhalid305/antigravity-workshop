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

- Rules in `.agent/rules/` define always-on boundaries.
- Workflows in `.agent/workflows/` define repeatable routines.
- Skills in `.agents/skills/` provide deeper reusable task knowledge.

For the `00` versus `01` comparison, run the same plain prompt on both branches.
Do not invoke workflows yet. The goal is to see whether ambient project context
changes the output.

## Teaching Spine

```txt
Context -> Plan -> Execute -> Inspect -> Verify -> Automate
```

The product domain should stay light and understandable. The point is not to
teach travel finance. The point is to give agents a real app surface where
context, planning, review, verification, MCP, and automation become visible.
