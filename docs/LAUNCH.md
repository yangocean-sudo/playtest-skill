# Launch Notes

## One-Line Description

Playtest is an agent skill that uses your app like real target users and writes a screenshot-backed UX report.

## Positioning

E2E tests check whether the product works. Playtest checks whether a human understands what to do.

## X / Twitter Post

```text
I made an agent skill that playtests your app like real users.

It reads the product, builds a feature inventory, derives target-user personas, uses the app through a browser/simulator, and writes a screenshot-backed UX report.

Not code review.
Not E2E.
User simulation.
```

## Thread Option

```text
1/ I made a multi-agent skill for product UX playtesting.

The idea: E2E tests answer "does it work?"
This answers "would a human understand what to do?"

2/ The workflow:
- read the product
- build a full feature inventory
- derive real target-user personas
- stop for human scope selection
- use the product through browser/simulator
- write an HTML report with screenshots

3/ The important part is first-person cognition.

The agent does not just say:
"Expected X, got Y."

It says:
"I am trying to invite a teammate. I expected the invite button near the members table, but I cannot find it."

4/ It is driver-based:
- web via Playwright MCP
- web via browser-use / Playwright CLI
- iOS via Xcode MCP

The skill itself is not tied to one agent runtime.

5/ I built it because product teams often have tests for correctness but no cheap way to catch "this works, but real users will be confused."
```

## Screenshot Ideas

- `docs/EXAMPLE-test-plan.md`
- a generated `report.html`
- one first-person persona journey
- one finding with screenshot evidence
