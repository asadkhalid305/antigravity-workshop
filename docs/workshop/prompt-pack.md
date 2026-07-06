# Prompt Pack

Copy only the prompt for the active exercise. Keep differences between groups;
they are part of the workshop.

## `00-unprepared-agent`

### Prompt 00A: Broad Improvement

```txt
Improve this post-trip travel insights app so it is more useful for someone who travels a few times per year. Keep the app simple and make the change directly.
```

Observe:

- Did the agent improve visuals, data, copy, charts, forms, or structure?
- Did it add dependencies?
- Did it respect the post-trip product boundary?
- Did another group get a different result?

## `01-agent-context`

### Prompt 01A: Inspect Context

```txt
Inspect the local context files in this project. Summarize what the rules, workflows, and skills are meant to do for TripLens. Do not edit files.
```

### Prompt 01B: Repeat The Improvement

```txt
Using the project context, improve this post-trip travel insights app so it is more useful for someone who travels a few times per year. Keep the change small, follow the existing conventions, and explain what changed.
```

Observe:

- Is the change narrower than in branch 00?
- Did it avoid live finance, bank, OCR, auth, and database features?
- Did it preserve visual and calculation conventions?
- Did rules, skills, or workflows appear to influence the result?

## `02-plan-before-editing`

### Prompt 02A: Plan Only

```txt
We need a way to compare one completed trip against another completed trip. Inspect the current app and propose a small implementation plan. Do not edit files yet.
```

### Prompt 02B: Refine The Plan

```txt
Make the plan smaller. Avoid new dependencies. Keep the UI mobile-first and make the calculation verification explicit.
```

### Prompt 02C: Execute After Approval

```txt
Implement the approved trip comparison plan. Keep the change small, then summarize changed files and verification steps.
```

## `03-inspect-and-verify`

### Prompt 03A: Review The PR

```txt
Use the TripLens PR review plugin's reviewer agent to review PR #1.
```

### Prompt 03B: Review By URL

```txt
Review this PR: https://github.com/asadkhalid305/triplens/pull/1
```

### Prompt 03C: Post Approved Comments

```txt
The proposed review comments look good. Post them on the PR.
```

## `04-external-context-mcp`

### Prompt 04A: Inspect The Running App With Chrome DevTools

```txt
Start the TripLens dev server if needed. Use Chrome DevTools MCP to open the running app, inspect the page, console, and network activity, then summarize what you observed. Do not edit files.
```

### Prompt 04B: Debug The API Comparison Request

```txt
Use Chrome DevTools MCP to click "Refresh API comparison" in TripLens. Inspect the browser console and Network request for /api/insights/compare. Tell me the request method, URL, status code, request payload, response body, console message, and visible UI state. Do not edit files.
```

### Prompt 04C: Fetch Package Docs With Context7

```txt
Use Context7 MCP to fetch current documentation for Recharts. Summarize the practical guidance we should remember when using Recharts charts in TripLens. Do not edit files.
```

### Prompt 04D: Fix After Evidence

Use only if the facilitator wants to show the complete debug-to-fix loop.

```txt
Based on the Chrome DevTools evidence, explain the smallest code fix for the failed API comparison request. Wait for approval before editing files.
```

## `05-automation-and-hooks`

### Prompt 05A: Trigger The Guardrail

```txt
Try to use the GitHub CLI to add a pull request comment: `gh pr comment 999999 --body "Hook demo: this mutation should not be posted."` Do not edit files and do not work around any permission or guardrail response.
```

Observe:

- The prompt does not mention hooks; the hook should still run automatically.
- The command should be denied before GitHub is called.
- The useful teaching contrast is prompt guidance versus deterministic runtime
  guardrail.

### Prompt 05B: Start A Scheduled PR Brief

Run this inside the Antigravity CLI. Use a short interval for the live demo; in
real work, use a daily schedule.

```txt
/schedule every 2 minutes: Use the GitHub CLI to inspect this repository's open pull requests, newest first. For each PR, summarize the title, author, branch, merge/check status, review comments, requested changes, and the next action I should take. If a comment needs a reply, draft a concise suggested reply. Do not edit files, create commits, post comments, or change PR state.
```

Observe:

- Did the scheduled run happen without another manual prompt?
- Did it gather current GitHub state instead of relying only on local files?
- Did it stay read-only?
- Was the output actionable enough for a morning work brief?

After setting the schedule, run this yourself in a normal terminal before the
next scheduled trigger. Do not ask the agent to run it. The hook guards agent
tool calls; this facilitator command intentionally creates fresh GitHub activity
for the scheduled read-only brief to inspect.

```bash
npm run demo:scheduled-pr
```

Fallback if the script is blocked by local permissions or environment setup:

```bash
BASE_BRANCH="$(git branch --show-current)"
DEMO_ID="05-automation-hooks-test-$(gh api user --jq .login)-$(date +%Y%m%d-%H%M%S)"
git switch -c "demo/${DEMO_ID}"
printf "# Schedule Demo\n\nTemporary PR activity for the 05 automation/hooks exercise.\n" > "docs/workshop/${DEMO_ID}.md"
git add "docs/workshop/${DEMO_ID}.md"
git commit -m "05 automation hooks test: add scheduled PR demo note (${DEMO_ID})"
git push -u origin "demo/${DEMO_ID}"
PR_URL="$(gh pr create --base "$BASE_BRANCH" --head "demo/${DEMO_ID}" --title "05 automation hooks test: add scheduled PR demo note (${DEMO_ID})" --body "Demo PR for the 05 automation and hooks workshop exercise.")"
gh pr comment "$PR_URL" --body "Please confirm this 05 automation/hooks demo stays focused on CLI scheduling and read-only hook guardrails."
git switch "$BASE_BRANCH"
```

## `06-command-showcase`

Use this branch only if there is time left after the scheduled automation demo.
The live goal is to show the command surface, not to implement a new TripLens
feature. The full trainer checklist is in
`docs/workshop/cli-command-showcase.md`.

### Prompt 06A: Quick Discovery

```bash
agy --version
agy --help
agy models
agy changelog | sed -n '1,80p'
agy plugin help
```

Observe:

- Which options are launch flags?
- Which commands are shell subcommands?
- Do not spend long here. These are orientation commands.

### Prompt 06B: Grill Me Before Planning

```txt
/grill-me We are considering a small TripLens improvement: make the trip comparison panel easier for workshop attendees to verify. Interview me until the scope, non-goals, data constraints, UI expectations, and verification approach are clear. Do not edit files.
```

Observe:

- Does the command ask clarifying questions instead of jumping to a solution?
- Does it expose assumptions about TripLens, verification, and scope?
- This is useful before planning a feature, not after implementation has begun.

### Prompt 06C: Learn A Durable Correction

First give the correction:

```txt
Correction for this project: TripLens is a post-trip insight app. When planning or reviewing changes, do not suggest budgeting, live expense tracking, bank integrations, OCR receipt capture, or financial advice.
```

Then run:

```txt
/learn
```

Observe:

- `/learn` is for turning a useful correction, success, or repeated preference
  into reusable future guidance.
- It is not for completing the current task.
- Do not store secrets, temporary facts, or one-off workshop noise.

### Prompt 06D: Goal And Agent Loop

```txt
/goal Inspect this branch's workshop docs and produce a no-edit verification brief for the branch 06 command showcase. Confirm which commands are prioritized for live demo, which are take-home only, and what checks remain before presenting. Do not edit files. Stop when the brief is complete.
```

Then inspect:

```txt
/tasks
```

Observe:

- `/goal` gives the agent a bounded end state and lets it continue the loop
  until done.
- `/tasks` shows background or longer-running work.
- A no-edit goal is safer for a live workshop than a goal that changes files.

### Prompt 06E: Fork And Rewind

Confirm exact names in `/help` first; command availability can change by CLI
version.

```txt
/fork
/rewind
```

Observe:

- `/fork` is useful for trying an alternative direction without overwriting the
  current one.
- `/rewind` is useful when the conversation took a bad turn and you want to
  continue from an earlier point.

### Prompt 06F: Active Work And Inspection Commands

```txt
/agents
/tasks
/diff
/add-dir
/usage
/credits
```

Observe:

- `/agents` shows active subagents in the current conversation, not every
  discoverable custom agent.
- `/tasks` shows background work.
- `/diff` makes changed files inspectable.
- `/add-dir` lets the session include another local directory when needed.
- `/usage` and `/credits` make cost and quota visible.

### Prompt 06G: Context, Settings, And Permissions

```txt
/help
/context
/permissions
/settings
```

Observe:

- `/help` is the source of truth for slash commands and shortcuts in the
  installed CLI.
- `/context` shows what the agent is carrying.
- `/permissions` maps to tool approval behavior.
- `.agents/settings.json` demonstrates project-level settings in this repo.

### Prompt 06H: One-Shot Prompt Mode

```bash
agy -p "Inspect this repository and list the top 3 Antigravity CLI surfaces a developer should know. Do not edit files."
```

Optional longer timeout:

```bash
agy --print-timeout 10m -p "Summarize the TripLens workshop branch sequence from docs/workshop/branch-flow.md. Do not edit files."
```

Observe:

- The CLI runs without opening the full TUI.
- The output can be copied into a PR note, script, or morning summary.
- `--prompt` is an alias for `--print`; `-p` is the short form.

### Prompt 06I: Safety Modes

Run these as a facilitator demo, not as a required attendee exercise.

```bash
agy --sandbox
agy --dangerously-skip-permissions
agy --sandbox --dangerously-skip-permissions
```

Observe:

- `--sandbox` restricts terminal execution.
- `--dangerously-skip-permissions` auto-approves tool permission prompts.
- Combining them is still not a replacement for a trusted repo and a bounded
  task.

### Prompt 06J: Take-Home Checklist

Try these after the workshop:

```bash
agy --continue
agy -c
agy --conversation <conversation-id>
agy --model "<model name from agy models>"
agy --project <project-id>
agy --new-project
agy --add-dir ../some-related-repo
agy --log-file /tmp/agy-demo.log
agy --print "Summarize this repo. Do not edit files."
agy --prompt "Summarize this repo. Do not edit files."
agy --prompt-interactive "Inspect the workshop docs. Do not edit files."
agy install
agy plugin list
agy plugin validate .agents/plugins/triplens-pr-review
agy plugin install <target>
agy plugin uninstall <name>
agy plugin enable <name>
agy plugin disable <name>
agy plugin import gemini
agy plugin import claude
agy plugins list
agy update
```

Inside the TUI, explore:

```txt
/keybindings
/model
/usage
/quota
/credits
/agents
/skills
/plugins
/mcp
/hooks
/diff
/open
/add-dir
/changelog
/grill-me
/learn
```

Shortcut practice:

- Open `/help` and switch to the shortcuts tab.
- Try `ctrl+c` to interrupt and again to exit.
- Try `ctrl+r` on an artifact-producing task.
- Try `ctrl+g` on a tool approval or artifact detail view.
- Try `ctrl+k` only when quick approval is appropriate for the task.
