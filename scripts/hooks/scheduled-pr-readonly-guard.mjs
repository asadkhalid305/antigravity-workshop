#!/usr/bin/env node

let input = "";

process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  let payload = {};

  try {
    payload = input.trim() ? JSON.parse(input) : {};
  } catch {
    respond({
      decision: "force_ask",
      reason:
        "Could not parse hook input, so command execution requires explicit confirmation.",
    });
    return;
  }

  const commandLine = String(
    payload.toolCall?.args?.CommandLine ??
      payload.toolCall?.args?.commandLine ??
      payload.toolCall?.args?.command ??
      "",
  );

  const normalized = commandLine.replace(/\s+/g, " ").trim();

  if (!normalized) {
    respond({ decision: "allow" });
    return;
  }

  const blocked = [
    {
      pattern:
        /\bgh\s+pr\s+(create|comment|review|merge|close|reopen|ready|edit|lock|unlock)\b/i,
      reason:
        "The scheduled PR brief is read-only. Do not create, post, review, merge, close, or edit pull requests from automation.",
    },
    {
      pattern: /\bgh\s+issue\s+(create|comment|close|reopen|edit|lock|unlock)\b/i,
      reason:
        "The scheduled PR brief may inspect GitHub issues, but it must not mutate them from automation.",
    },
    {
      pattern: /\bgh\s+release\s+(create|delete|edit|upload)\b/i,
      reason:
        "Release changes are outside the scheduled PR brief and require explicit human action.",
    },
    {
      pattern: /\bgh\s+api\b.*\s-X\s*(POST|PUT|PATCH|DELETE)\b/i,
      reason:
        "The scheduled PR brief may inspect GitHub API data, but mutating GitHub API calls are blocked.",
    },
    {
      pattern:
        /\bgit\s+(push|commit|tag|merge|rebase|cherry-pick|revert)\b|\bgit\s+(switch\s+-c|checkout\s+-b|branch\s+(-d|-D|-m|--delete|--move)|reset\s+--hard|clean\s+-[^\s]*f)\b/i,
      reason:
        "Scheduled automation should not mutate git history, branches, tags, or the working tree without a person taking over.",
    },
  ].find(({ pattern }) => pattern.test(normalized));

  if (blocked) {
    respond({
      decision: "deny",
      reason: blocked.reason,
    });
    return;
  }

  respond({ decision: "allow" });
});

function respond(result) {
  process.stdout.write(`${JSON.stringify(result)}\n`);
}
