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

### Prompt 04A: Local Context Only

```txt
Explain how we should make the chart and form interactions more accessible in this app. Use only local project files. Do not edit files.
```

### Prompt 04B: With External Context

```txt
Use the available external documentation context to check whether our chart and form patterns follow current accessibility guidance. Summarize only practical changes for this app.
```

## `05-automation-and-hooks`

### Prompt 05A: Non-Interactive Quality Check

```bash
agy -p "Inspect this repository and list the top 3 maintainability risks. Do not edit files."
```

### Prompt 05B: PR Summary

```bash
agy -p "Summarize the current diff as a concise pull request description. Do not edit files."
```

### Prompt 05C: Automation Candidate

```txt
Look at the work we did in this repository. Suggest one boring repeated task that would be a good candidate for automation. Explain why it is safe to automate and how to verify it.
```

## `06-command-showcase`

### Prompt 06A: Vague Request

```txt
I want to make TripLens more useful for frequent travelers.
```

Use `/grill-me` or equivalent if available.

### Prompt 06B: Goal

```txt
Goal: make the trip comparison feature easier to verify, keep the implementation small, and verify behavior before stopping.
```

### Prompt 06C: Context

```txt
Show or explain the current project context. What files and instructions are most important for your next answer?
```

### Prompt 06D: Fork

```txt
Try an alternative implementation direction for trip comparison that keeps the UI minimal. Do not overwrite the current direction unless I approve it.
```

### Prompt 06E: Resume

```txt
Resume the previous conversation about TripLens and summarize where we left off.
```
