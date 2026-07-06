# TripLens

TripLens is a small post-trip travel insights app used as the practical repository for a Google Antigravity workshop.

The product is intentionally simple: trips, spending categories, charts, forms, comparisons, mock API routes, local persistence, and focused tests. The point is not to teach travel finance. The point is to give attendees a realistic app surface where agentic development habits are visible.

## Workshop Goal

The workshop teaches a practical AI-assisted development loop:

```txt
Context -> Plan -> Execute -> Inspect -> Verify -> Automate
```

You will see how the same app behaves when an agent has weak context, better project rules, planning discipline, review support, runtime evidence from MCP, and finally automation with guardrails.

## Who This Is For

- Live attendees who need a clear path through the workshop without reading every file.
- Self-paced learners who want to reproduce the workshop after the event.
- Facilitators who need a stable public repo entrypoint while keeping deeper trainer notes private.

## Setup

Install prerequisites:

- [Git](https://git-scm.com/downloads)
- [Node.js LTS](https://nodejs.org/) with `npm`
- Google Antigravity CLI
- A modern browser for `http://localhost:3000`

Install Antigravity CLI:

```bash
# macOS or Linux
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

```powershell
# Windows PowerShell
irm https://antigravity.google/cli/install.ps1 | iex
```

Open a new terminal after installation and confirm:

```bash
agy --version
```

Clone and run TripLens:

```bash
git clone https://github.com/asadkhalid305/triplens.git
cd triplens
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
npm run lint
npm run build
```

For broader local verification, this repo also has:

```bash
npm run typecheck
npm run test
npm run verify
```

Official Antigravity links:

- [Antigravity download page](https://antigravity.google/download)
- [Antigravity CLI getting started](https://antigravity.google/docs/cli-getting-started)

## Choose Your Path

- Following the workshop live or self-paced: open [docs/workshop/guide.md](docs/workshop/guide.md).
- Exploring Antigravity CLI commands: open [docs/workshop/cli-command-showcase.md](docs/workshop/cli-command-showcase.md).
- Checking what each branch is for: open [docs/workshop/branch-flow.md](docs/workshop/branch-flow.md).

The README gives the high-level map. The workshop guide gives the step-by-step commands, branch context, and prompts.

## Checkpoint Branches

The branches are prepared exercise states, not normal product release history. Generated changes during the workshop are disposable; switch to the next checkpoint branch when the next concept begins.

| Branch | Learning Goal |
| --- | --- |
| `main` | Complete app and public documentation entrypoint |
| `00-unprepared-agent` | See how broad tasks behave when the agent has minimal project context |
| `01-agent-context` | Add project rules, workflows, and skills so the agent has shared operating context |
| `02-plan-before-editing` | Practice planning before edits and reduce scope before implementation |
| `03-inspect-and-verify` | Use a PR-review plugin and focused verification to inspect agent output |
| `04-external-context-mcp` | Use MCP for external context, especially live browser/runtime evidence |
| `05-automation-and-hooks` | Turn bounded repeatable work into scheduled automation with hook guardrails |
| `06-command-showcase` | Explore useful Antigravity CLI commands after the core workflow |

Switch branches with:

```bash
git switch 01-agent-context
```

Replace the branch name with the active exercise.

## Safety Ground Rules

- Do not paste secrets, tokens, private company code, or private customer data into prompts.
- Inspect plans, diffs, tool requests, and verification output before approving important work.
- Treat checkpoint branches as recovery points. If an exercise goes off track, switch to the next prepared branch.
- Use dangerous auto-approval modes only as controlled demos, not as a normal development habit.
- If your output differs from another group, that is part of the workshop. The goal is to learn how context and verification change the workflow.

## Docs Map

- [Workshop docs index](docs/workshop/README.md)
- [Workshop guide](docs/workshop/guide.md)
- [CLI command showcase](docs/workshop/cli-command-showcase.md)
- [Checkpoint branch flow](docs/workshop/branch-flow.md)
