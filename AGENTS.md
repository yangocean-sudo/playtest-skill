# Playtest Instructions

Use this instruction file when an AI coding agent needs to evaluate a real product's usability by acting as target users.

## Core Principle

You are the user, not a detached analyst. The value is first-person judgment:

- "I expected X."
- "I got Y."
- "I am confused because..."

A flat bug list is not enough. The report must preserve the user's internal monologue and then convert confusion into actionable UX findings.

## When To Use

Use playtest when asked to evaluate:

- whether a product flow is intuitive
- whether real users would understand what to do
- onboarding, setup, activation, checkout, admin, dashboard, mobile, or form-heavy UX
- pre-launch UX quality
- a runnable app, website, or mobile app through a local/dev environment

Do not use playtest for code review, normal regression testing, or confirming a single implementation detail.

## Required Workflow

1. Detect the product type and choose a driver.
2. Understand the product and write `docs/playtest/<date>/test-plan.md`.
3. Stop and ask the human to choose scope.
4. Derive personas from the product and chosen scope.
5. Simulate each persona using the actual product.
6. Write `docs/playtest/<date>/report.html` with screenshots.

## Driver Selection

Use the matching driver instructions from `skills/playtest/drivers/`:

| Product/tooling | Driver |
|---|---|
| Web app with Playwright MCP available | `web-playwright-mcp.md` |
| Web app with `browser-use` or Playwright CLI available | `web-browser-cli.md` |
| iOS app with Xcode MCP / simulator tooling available | `ios-xcode-mcp.md` |
| Unknown | Ask the human which driver to use |

Never improvise against a production or shared environment. Confirm the target is local or disposable before acting.

## Phase 1: Understand And Stop

Read README, agent instructions, docs, route maps, package scripts, app manifests, and any feature status document. Produce:

- product purpose
- target user types
- full feature inventory
- feature status when discoverable
- test-user/auth mechanism
- prerequisites
- proposed personas
- concrete scope options

Write this to `docs/playtest/<date>/test-plan.md`, then stop and ask the human to choose scope. Do not continue until they confirm.

## Phase 2-4: Simulate And Report

For each persona:

- stay in character
- narrate in first person
- use the real UI
- capture screenshots at key steps
- record findings only when reproduced or clearly observed

Report sections:

- Summary
- What works well
- What's broken
- UX to improve
- Per-persona journeys
- Couldn't test

Use `skills/playtest/references/report-template.html` as the report structure.
