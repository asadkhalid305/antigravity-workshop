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

Purpose: introduce specialist review agents and verify behavior with checks.

Expected shape: include custom review/test agents plus a small intentional
calculation bug around per-day trip cost. Review the branch like a PR before
editing.

## `04-external-context-mcp`

Purpose: show when external documentation changes answer quality.

Expected shape: keep chart/form accessibility questions visible. Use external
docs for accessible charts, forms, or currency formatting.

## `05-automation-and-surfaces`

Purpose: turn repeated, boring, bounded checks into automation candidates.

Expected shape: complete enough app and tests so non-interactive quality review,
diff summary, and calculation-risk prompts are useful.

## `06-command-showcase`

Purpose: optional branch for commands such as `/context`, `/goal`, `/fork`,
`/rewind`, and `/resume`.

Expected shape: same as `main` or a lightly staged branch with one safe change
ready to explore.
