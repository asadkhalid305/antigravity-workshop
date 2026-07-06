# CLI Command Reference

Use this file as a public reference for the Antigravity CLI command surface.

Branch `06-command-showcase` gives you time to try these commands after the
core workflow exercises. You do not need to run everything during the live
workshop. Start with the high-value workflow commands, then use the checklist
for take-home practice.

The CLI has three useful control surfaces:

- launch flags and shell subcommands before the TUI starts;
- interactive slash commands inside a running CLI session;
- keyboard shortcuts and persisted settings while the session is running.

## Recommended Path

Use this path if you want a practical tour instead of a long command list.

### 1. Quick Orientation

Run these in your terminal:

```bash
agy --version
agy --help
agy models
agy plugin help
```

Why this matters: these commands show the installed CLI version, available
models, and plugin management surface. Do not spend long here; the more useful
workflow commands are inside the running CLI session.

### 2. Clarify Before Planning With `/grill-me`

Inside the TUI:

```txt
/grill-me We are considering a small TripLens improvement: make the trip comparison panel easier for workshop attendees to verify. Interview me until the scope, non-goals, data constraints, UI expectations, and verification approach are clear. Do not edit files.
```

Why this matters: `/grill-me` turns vague intent into clearer requirements
before the agent spends tokens on a plan or implementation.

### 3. Store A Durable Correction With `/learn`

First give the agent a correction:

```txt
Correction for this project: TripLens is a post-trip insight app. When planning or reviewing changes, do not suggest budgeting, live expense tracking, bank integrations, OCR receipt capture, or financial advice.
```

Then run:

```txt
/learn
```

Why this matters: `/learn` is for reusable future guidance. Do not use it for
secrets, temporary facts, or one-off workshop noise.

### 4. Try A Bounded Goal With `/goal`

```txt
/goal Inspect this branch's workshop docs and produce a no-edit verification brief for the branch 06 command showcase. Confirm which commands are prioritized for live practice, which are take-home only, and what checks remain before using this branch. Do not edit files. Stop when the brief is complete.
```

Then inspect:

```txt
/tasks
```

Why this matters: `/goal` gives the agent a bounded end state and lets it keep
working through the loop until the result is complete. `/tasks` shows
background or longer-running work.

### 5. Try Branch And Recovery Controls

Inside the TUI, use `/help` first to confirm exact command names in your
installed version, then try or inspect:

```txt
/fork
/rewind
```

Why this matters: `/fork` lets you explore an alternate conversation direction
without overwriting the current path. `/rewind` helps recover when a
conversation took a bad turn.

### 6. Inspect Active Work

Inside the TUI:

```txt
/agents
/tasks
/diff
/add-dir
/usage
/credits
```

Why this matters: these are development controls. `/agents` shows active
subagents, not every possible custom agent. `/tasks` shows background work.
`/diff` makes changes inspectable. `/add-dir` extends the workspace when a task
needs another local repo or docs folder. `/usage` and `/credits` make cost and
quota visible.

### 7. Try One-Shot Prompting

Run these in your terminal:

```bash
agy -p "Inspect this repository and list the top 3 command-line surfaces a developer should know. Do not edit files."
agy --print-timeout 10m -p "Summarize the TripLens workshop branch sequence from docs/workshop/branch-flow.md. Do not edit files."
```

Why this matters: `-p`, `--print`, and `--prompt` are useful for scripts,
summary commands, and quick read-only checks without opening the full TUI.

### 8. Understand Safety Modes

Run these only in a trusted repo and with a bounded task:

```bash
agy --sandbox
agy --dangerously-skip-permissions
agy --sandbox --dangerously-skip-permissions
```

Why this matters: `--sandbox` restricts terminal execution.
`--dangerously-skip-permissions` removes approval prompts. Skipping permissions
is risky and should not be your default workflow.

## Take-Home Checklist

Use this section when you want to explore beyond the live exercises.

### Launch Flags

- `agy -p "..."` or `agy --print "..."`: run one prompt and print the answer.
- `agy --version`: show the installed CLI version.
- `agy --prompt "..."`: alias for print mode.
- `agy -i "..."` or `agy --prompt-interactive "..."`: seed an interactive
  session with an initial prompt.
- `agy -c` or `agy --continue`: continue the most recent conversation.
- `agy --conversation <id>`: resume a specific conversation.
- `agy --model <name>`: start with a specific model.
- `agy --project <id>`: start in a specific project.
- `agy --new-project`: create a new project for the session.
- `agy --add-dir <path>`: add another workspace directory. Repeatable.
- `agy --sandbox`: enable terminal sandbox restrictions.
- `agy --dangerously-skip-permissions`: auto-approve tool permission requests.
- `agy --print-timeout <duration>`: increase or reduce print-mode wait time.
- `agy --log-file <path>`: write CLI logs somewhere specific.

### Shell Subcommands

- `agy help`: show shell command help.
- `agy install`: configure environment paths and shell settings.
- `agy models`: list available models.
- `agy changelog`: inspect release notes and new CLI features.
- `agy update`: update the CLI.
- `agy plugin help`: show plugin management help.
- `agy plugin list`: list imported plugins.
- `agy plugin validate .agents/plugins/triplens-pr-review`: validate the local
  TripLens PR-review plugin on branches that include it.
- `agy plugin install <target>` / `agy plugin uninstall <name>`: manage plugins.
- `agy plugin enable <name>` / `agy plugin disable <name>`: toggle plugins.
- `agy plugin import gemini` or `agy plugin import claude`: import legacy
  plugin/customization sources when needed.

### Interactive Slash Commands

Use `/help` inside the TUI as the source of truth for your installed CLI
version. Useful commands to explore:

- `/help`: command and shortcut reference.
- `/context`: current context and token usage.
- `/settings` or `/config`: CLI preferences.
- `/permissions`: tool permission rules.
- `/keybindings`: keyboard shortcut customization.
- `/model`: switch model when supported by the session.
- `/usage`, `/quota`, or `/credits`: quota and credit status.
- `/resume`: conversation picker.
- `/tasks`: background task monitor.
- `/goal`: long-running goal mode.
- `/schedule`: one-off or recurring scheduled work.
- `/agents`: active subagent monitor.
- `/skills`: available skills.
- `/plugins`: plugin/customization surface, when available.
- `/mcp`: MCP server surface, when available.
- `/hooks`: hook configuration surface, when available.
- `/diff`: inspect VCS changes.
- `/open`: open files or paths.
- `/add-dir`: add another workspace directory.
- `/changelog`: release notes inside the TUI.
- `/grill-me`: guided clarification before planning.
- `/learn`: store a correction or reusable preference.
- `/fork` and `/rewind`: branch or repair a conversation when available.

### Keyboard Shortcuts

Open `/help` and switch to the shortcuts tab for the exact current list. Useful
shortcuts to try:

- `ctrl+c`: interrupt active work; press again to exit.
- `ctrl+d`: forward-delete while typing; exit when the prompt is empty.
- `ctrl+r`: open the artifact review panel when artifacts exist.
- `ctrl+g`: expand approval/artifact details or open the configured editor in
  supported views.
- `ctrl+k`: quick approval flow for tools/subagents where appropriate.
- `shift+n`: reverse navigation through diff blocks where available.

## How To Use This Reference

You do not need every command on day one. A good first set is:

- `/grill-me` before planning unclear work;
- `/goal` for a bounded agent loop;
- `/tasks` to inspect background work;
- `/diff` before trusting changes;
- `/learn` only for durable corrections;
- `agy -p` for quick read-only summaries.

When a command is missing or behaves differently, check `/help` and
`agy --help`. The installed CLI version is the source of truth.
