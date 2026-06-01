---
name: playtest
description: Use when evaluating a real, runnable product's usability by simulating target users, checking whether flows are intuitive, and producing a UX report with first-person journey notes and screenshots.
---

# Playtest

Playtest turns an agent into target users who manually use a product and judge whether each step is intuitive, sensible, and reasonably interactive.

Core principle: be the user, not an analyst. Preserve first-person reactions, then convert confusion into structured findings.

## Workflow

Run these phases in order:

1. Detect product type and choose a driver.
2. Understand the product and write `docs/playtest/<date>/test-plan.md`.
3. Stop for human scope selection.
4. Cast personas from the chosen scope.
5. Simulate each persona in character.
6. Render `docs/playtest/<date>/report.html` with screenshots.

## Phase 0: Detect Driver

Sniff the repo and choose the matching driver. Do not assume.

| Signal | Driver |
|---|---|
| Web framework plus Playwright MCP available | `drivers/web-playwright-mcp.md` |
| Web framework plus `browser-use` or Playwright CLI available | `drivers/web-browser-cli.md` |
| Xcode project/workspace or Swift Package app plus Xcode MCP available | `drivers/ios-xcode-mcp.md` |
| Unknown | Ask the human which driver to use |

Every driver must satisfy `references/driver-contract.md`. If no available driver matches, stop and say what driver is missing.

## Phase 1: Understand Product, Then Stop

Read README, agent instructions, docs, route maps, package scripts, manifests, and any feature-status index. Produce a full picture:

- product purpose
- target user types
- full feature inventory, grouped by area
- feature status when discoverable
- local run prerequisites
- test-user/auth mechanism
- proposed personas
- concrete scope options

Write this to `docs/playtest/<date>/test-plan.md`. If the dated directory already exists, use `<date>-2`, `<date>-3`, and so on.

Then stop and ask the human to pick scope. Present concrete choices such as full sweep, core golden path, onboarding only, admin only, or mobile-only. Do not simulate until the human confirms.

## Phase 2: Cast Personas

Use `references/persona-guide.md`. Derive 2-4 distinct personas from the product and chosen scope. Cover the primary daily user and any less-expert, external, first-time, or high-stakes user who touches the scoped flows.

## Phase 3: Simulate In Character

For each persona and assigned feature:

- create or authenticate test users through the project's discovered local helpers
- use the actual UI rather than jumping around with hidden APIs
- narrate in first person
- capture screenshots at key steps
- check console/network/runtime errors when the driver supports it
- record only reproduced or directly observed findings

Finding format:

```text
- Feature / step:
- Persona:
- Expectation:
- What happened:
- Why it is a problem:
- Severity: blocker | high | medium | low
- Suggested fix:
- Evidence:
```

Functional bugs use the same format, but do not report intentionally unbuilt features as broken if the project status docs mark them planned or partial.

## Phase 4: Write HTML Report

Render `docs/playtest/<date>/report.html` using `references/report-template.html`. Screenshots belong in `docs/playtest/<date>/screenshots/`.

Required sections:

- Summary
- What works well
- What's broken
- UX to improve
- Per-persona journeys
- Couldn't test

## Red Flags

Stop if any of these happen:

- You start clicking before writing `test-plan.md`.
- You skip the full feature inventory.
- You continue past Phase 1 without human scope selection.
- You write only expected/actual defects without first-person user narration.
- You return the final report only in chat instead of writing HTML with screenshots.
- You test production or shared customer data.
- You leave browsers, simulators, or spawned servers running.

## Supporting Files

- `references/driver-contract.md`
- `references/persona-guide.md`
- `references/report-template.html`
- `drivers/web-playwright-mcp.md`
- `drivers/web-browser-cli.md`
- `drivers/ios-xcode-mcp.md`
