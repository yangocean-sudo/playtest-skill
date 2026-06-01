# Playtest Skill

English | [简体中文](./README.zh.md)

Playtest is an agent skill for simulated target-user UX testing. It makes an AI agent use a real, runnable product as a human user would: understand the product, derive realistic personas, operate the app through a browser or simulator, capture first-person reactions, and produce a screenshot-backed UX report.

E2E tests check whether the product works. Playtest checks whether a human understands what to do.

## What It Does

Most AI product audits become code review or bug lists. Playtest is different:

1. It reads the product first and builds a full feature inventory.
2. It derives target-user personas from the product, not from a fixed list.
3. It stops after the test plan so a human can choose scope.
4. It drives the product for real through a local browser or simulator.
5. It writes first-person user monologues and turns confusion into structured UX findings.
6. It produces an HTML report with screenshots under `docs/playtest/<date>/`.

## Supported Agents

This repo is intentionally multi-agent:

| Agent/tool | Entry point |
|---|---|
| Claude Code skills | `skills/playtest/SKILL.md` |
| Claude Code plugin | `.claude-plugin/plugin.json` |
| Codex / OpenAI coding agents | `AGENTS.md` |
| Claude project instructions | `CLAUDE.md` |
| Gemini-style agents | `GEMINI.md` |
| Cursor | `.cursor/rules/playtest.mdc` |
| Any agent with instruction files | copy or merge `AGENTS.md` |

The core workflow is tool-agnostic. Drivers describe how to operate specific product surfaces:

- Web via Playwright MCP
- Web via `browser-use` or Playwright CLI
- iOS via Xcode MCP / simulator tooling

## Install

### Claude Code Skill

Copy the skill folder into your Claude skills directory:

```bash
mkdir -p ~/.claude/skills
cp -R skills/playtest ~/.claude/skills/playtest
```

Then ask Claude Code:

```text
Use the playtest skill to test this app like real users.
```

### Claude Code Plugin

If you publish this repo as a Claude plugin, users can install it through the Claude plugin marketplace flow. The plugin metadata lives in `.claude-plugin/`.

### Codex / OpenAI Agents

Copy or merge `AGENTS.md` into the target repo's agent instructions.

### Cursor

Copy `.cursor/rules/playtest.mdc` into the target repo's `.cursor/rules/` directory.

## Usage

In a product repo, ask:

```text
Playtest this app as real target users and tell me what is confusing.
```

The agent should first create:

```text
docs/playtest/<YYYY-MM-DD>/test-plan.md
```

Then it must stop and ask you to choose a scope before running the simulation. After the scope is confirmed, it creates:

```text
docs/playtest/<YYYY-MM-DD>/report.html
docs/playtest/<YYYY-MM-DD>/screenshots/
```

## Demo

This repository includes a deliberately imperfect demo SaaS app, TeamPilot:

```bash
npm run serve:demo
```

Open:

```text
http://localhost:4173
```

The committed playtest output is available at:

- [`docs/playtest/demo-teampilot/test-plan.md`](docs/playtest/demo-teampilot/test-plan.md)
- [`docs/playtest/demo-teampilot/report.html`](docs/playtest/demo-teampilot/report.html)

The demo technically works, but it includes realistic UX issues: weak empty-state guidance, a hidden invite action, unexplained role jargon, and a mobile next-action problem.

## Safety

Only run this against local or disposable development environments.

Do not point it at production, shared customer data, or a real payment/email workflow. The skill may create test users, click through flows, submit forms, upload files, and capture screenshots.

## Repository Layout

```text
.
├── AGENTS.md
├── CLAUDE.md
├── GEMINI.md
├── README.md
├── .claude-plugin/
├── .cursor/rules/
├── docs/
├── scripts/
└── skills/playtest/
    ├── SKILL.md
    ├── agents/openai.yaml
    ├── drivers/
    └── references/
```

## License

MIT
