# Driver Contract

A driver explains how to operate one product surface while keeping the playtest workflow tool-agnostic.

Each driver must cover:

| Capability | Requirement |
|---|---|
| detect | Identify whether the driver applies to the current repo and available tools. |
| setup | Bring the app to a runnable local/dev state. Reuse existing servers/simulators when possible. |
| createUser | Use discovered project helpers for local test users and auth gates. Never hardcode credentials. |
| navigate | Move to a route, screen, view, or deep link. Prefer normal user navigation where useful. |
| observe | Return structured screen state: text, controls, accessibility tree, logs, or view hierarchy. |
| act | Click, tap, type, select, scroll, drag, upload, or interact like a human. |
| screenshot | Save PNG evidence under `docs/playtest/<date>/screenshots/`. |
| teardown | Close browsers, stop sessions, and clean spawned processes even after failure. |

## Rules

- Local/dev only. Do not drive production or shared customer environments.
- Discover project-specific commands and credentials from the repo or human. Do not invent them.
- Prefer structured observations over screenshots for reasoning.
- Still capture screenshots for report evidence.
- If a flow cannot be tested, document it under "Couldn't test" instead of pretending.
