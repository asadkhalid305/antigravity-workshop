# Checkpoint Branch Flow

The branches are prepared workshop checkpoints. They are not a normal product release history.

Generated attendee changes are disposable. Use the next branch as the next clean teaching surface.

## `main`

Purpose: show the complete TripLens app and provide the public documentation entrypoint.

Expected shape: a polished small app with dashboard metrics, charts, add/edit/reset flows, comparison, mock API routes, local persistence, tests, and public workshop docs. It should not contain the heavier `.agents` teaching stack.

## `00-unprepared-agent`

Purpose: show that a broad request can produce different valid outputs when the project lacks enough operating context.

Expected shape: minimal AI-related project context. Use a broad prompt such as "make this post-trip insights app more useful" and compare results across people or groups.

## `01-agent-context`

Purpose: show that rules, workflows, and skills reduce guessing.

Expected shape: the app has project context under `.agents/rules/`, `.agents/workflows/`, and `.agents/skills/`. Ask the agent to inspect the context before repeating a broad improvement prompt.

## `02-plan-before-editing`

Purpose: practice plan-only work before edits.

Expected shape: the branch keeps the context stack from `01` and removes or simplifies the trip comparison UI. Ask for a small implementation plan before allowing edits.

## `03-inspect-and-verify`

Purpose: introduce a pull-request review plugin with one custom reviewer agent and supporting review skills.

Expected shape: the branch includes `.agents/plugins/triplens-pr-review/`, PR inspection/checklist skills, one custom reviewer agent, and a small intentional daily-cost calculation bug. Review the branch like a PR, draft review comments, and post only after approval.

## `04-external-context-mcp`

Purpose: show that MCP lets an agent connect to external context beyond the repository.

Expected shape: the branch adds `.agents/mcp_config.json` with Context7 and Chrome DevTools MCP servers for Google Antigravity. Chrome DevTools is the primary live demo: the comparison panel has a prepared `Refresh API comparison` action that creates a diagnosable failed network request. Context7 is an optional package-docs demo.

## `05-automation-and-hooks`

Purpose: show that CLI scheduling can turn a repeated, bounded agent task into automation, and that hooks can add deterministic guardrails around tool use.

Expected shape: the branch keeps the GitHub/PR review context, adds hook configuration, and supports a scheduled read-only PR brief. The demo should separate what the agent is allowed to inspect from what it is allowed to mutate.

## `06-command-showcase`

Purpose: optional wrap-up for useful Antigravity CLI commands after the core workflow.

Expected shape: same app surface as `05`, with no extra product exercise required. Prioritize `/grill-me`, `/learn`, `/goal`, `/tasks`, `/agents`, `/diff`, `/fork`, `/rewind`, usage, credits, settings, and selected launch flags as take-home exploration.

Use this branch only if there is time left. The command showcase should support the workshop; it should not become a second workshop.
