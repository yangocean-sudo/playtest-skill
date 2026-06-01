# Design

Playtest is a project-agnostic skill that turns an AI agent into simulated target users who manually exercise a product and report whether the experience is intuitive.

## Motivation

Most agents are good at code review and regression testing. Product teams also need a different question answered:

> Would a real user understand what to do here?

Playtest handles the UX layer that automated tests usually miss:

- confusing labels
- missing calls to action
- unclear next steps
- expert-only jargon
- hidden setup requirements
- flows that technically work but feel unreasonable

## Key Design Choices

### Understand before testing

The agent first reads the product docs and source structure to derive purpose, users, and a full feature inventory. It does not start with a user-supplied mission only.

### Human scope checkpoint

The agent writes `test-plan.md` and stops. A human chooses scope before simulation starts. This prevents the agent from spending time on the wrong area and makes the run auditable.

### Personas from the product

Personas are derived from the product and selected scope, not hardcoded.

### First-person cognition

The user's internal monologue is the signal. Findings are valuable because they are grounded in what the simulated user expected and what confused them.

### Driver contract

The workflow is independent of browser or simulator tooling. Drivers implement detect, setup, createUser, navigate, observe, act, screenshot, and teardown.

## Non-Goals

- Not a replacement for functional tests.
- Not a code review skill.
- Not a production monitoring tool.
- Not safe to run against production or customer data.

## Output

Each run creates:

```text
docs/playtest/<date>/
├── test-plan.md
├── report.html
└── screenshots/
```
