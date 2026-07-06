# CLI Command Showcase

Branch `06-command-showcase` is an optional wrap-up branch. Use it only if the
workshop has time after scheduling and hooks. The goal is to show that the
Antigravity CLI has three separate control surfaces:

- launch flags and shell subcommands before the TUI starts;
- interactive slash commands inside a running CLI session;
- keyboard shortcuts and persisted settings while the session is running.

Keep this branch demonstrative. Run commands, show what opens, explain when a
developer would use it, then move on.

## Recommended Live Demo

Prioritize commands that change how a developer works while coding. Keep shell
help, version, and model commands as quick orientation only.

1. Quick orientation.

```bash
agy --version
agy --help
agy models
agy plugin help
```

Teaching point: this is how to discover the installed surface. Do not spend
long here; the more valuable demo is the in-session workflow commands.

2. Use `/grill-me` before planning a feature.

Inside the TUI:

```txt
/grill-me We are considering a small TripLens improvement: make the trip comparison panel easier for workshop attendees to verify. Interview me until the scope, non-goals, data constraints, UI expectations, and verification approach are clear. Do not edit files.
```

Teaching point: `/grill-me` turns vague intent into better requirements before
the agent spends tokens on a plan or implementation.

3. Use `/learn` after a correction.

First give the agent a correction:

```txt
Correction for this project: TripLens is a post-trip insight app. When planning or reviewing changes, do not suggest budgeting, live expense tracking, bank integrations, OCR receipt capture, or financial advice.
```

Then run:

```txt
/learn
```

Teaching point: `/learn` is not for doing the current task. It turns a useful
correction, success, or repeated preference from the conversation into reusable
future guidance. Treat it as durable memory: do not store secrets, temporary
facts, or one-off workshop noise.

4. Use `/goal` to show the agent loop.

```txt
/goal Inspect this branch's workshop docs and produce a no-edit verification brief for the branch 06 command showcase. Confirm which commands are prioritized for live demo, which are take-home only, and what checks remain before presenting. Do not edit files. Stop when the brief is complete.
```

Then inspect:

```txt
/tasks
```

Teaching point: `/goal` is for a bounded end state where the agent can keep
working through the loop until the result is complete. `/tasks` shows the
background or longer-running work created by that loop.

5. Show branch and recovery controls.

Inside the TUI, use `/help` first to confirm exact names in the installed
version, then demo or mention:

```txt
/fork
/rewind
```

Teaching point: `/fork` lets you explore an alternate conversation direction
without overwriting the current path. `/rewind` is for recovering from a bad
turn or overly broad response.

6. Show active work and inspection surfaces.

Inside the TUI:

```txt
/agents
/tasks
/diff
/add-dir
/usage
/credits
```

Teaching point: these are development controls. `/agents` shows active
subagents, not every possible custom agent. `/tasks` shows background work.
`/diff` makes changes inspectable. `/add-dir` extends the workspace when a task
needs another local repo or docs folder. `/usage` and `/credits` make cost and
quota visible.

7. Show one-shot non-interactive prompting if time remains.

```bash
agy -p "Inspect this repository and list the top 3 command-line surfaces a developer should know. Do not edit files."
agy --print-timeout 10m -p "Summarize the TripLens workshop branch sequence from docs/workshop/branch-flow.md. Do not edit files."
```

Teaching point: `-p`, `--print`, and `--prompt` are useful for scripts, CI-like
summaries, and quick read-only checks without opening the full TUI.

8. Show launch-time safety modes as a warning.

```bash
agy --sandbox
agy --dangerously-skip-permissions
agy --sandbox --dangerously-skip-permissions
```

Teaching point: `--sandbox` restricts terminal execution;
`--dangerously-skip-permissions` removes approval prompts. Demo the risk
clearly: skip permissions only belongs in a trusted repo and a bounded task.

## Take-Home Command Checklist

Use this section as the public command reference so attendees can try commands
after the workshop.

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
- `agy plugin validate .agents/plugins/triplens-pr-review`: validate this
  branch's local plugin.
- `agy plugin install <target>` / `agy plugin uninstall <name>`: manage plugins.
- `agy plugin enable <name>` / `agy plugin disable <name>`: toggle plugins.
- `agy plugin import gemini` or `agy plugin import claude`: import legacy
  plugin/customization sources when needed.

### Interactive Slash Commands

Use `/help` inside the TUI as the source of truth for the installed CLI version.
The most useful commands to explore are:

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

Open `/help` and switch to the shortcuts tab for the exact current list. Good
live-demo candidates:

- `ctrl+c`: interrupt active work; press again to exit.
- `ctrl+d`: forward-delete while typing; exit when the prompt is empty.
- `ctrl+r`: open the artifact review panel when artifacts exist.
- `ctrl+g`: expand approval/artifact details or open the configured editor in
  supported views.
- `ctrl+k`: quick approval flow for tools/subagents where appropriate.
- `shift+n`: reverse navigation through diff blocks where available.

## Trainer Notes

Do not try to run every item live. The live goal is to teach the map:

- shell flags change how a session starts;
- `/grill-me`, `/learn`, and `/goal` change the development workflow;
- `/fork`, `/rewind`, `/agents`, and `/tasks` help control longer work;
- other slash commands operate inside the session;
- settings and keybindings persist preferences;
- permissions and sandboxing are separate safety layers.

If time runs out, show `/grill-me`, `/learn`, `/goal`, `/tasks`, and one quick
look at `/fork` or `/rewind`, then tell attendees the rest is in the prompt
reference.
