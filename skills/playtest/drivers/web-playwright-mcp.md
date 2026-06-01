# Driver: Web via Playwright MCP

Use this driver for local web apps when Playwright MCP browser tools are available.

## detect

Applies when:

- the repo contains a web app (`package.json`, framework config, or web routes)
- Playwright MCP browser tools are available
- the app can run locally or against a disposable dev environment

## setup

- Read project docs and scripts to find the dev command and port.
- Check whether the port is already in use before starting a server.
- Reuse a running local server when appropriate.
- Confirm the target URL is local or disposable.
- Identify local auth gates such as email verification, OTP, roles, or team membership.

## createUser

Use project-discovered helpers only:

- seed scripts
- test account scripts
- local auth bypasses
- local email/OTP helpers
- role or membership scripts

Never invent credentials. If no safe local test-user path exists, stop and ask the human.

## navigate

- Use browser navigation for initial URLs.
- Prefer real in-app navigation for normal user flows.
- Avoid deep-linking past steps unless the persona would realistically do so.

## observe

Use structured browser snapshots for reasoning. Also inspect console messages and network failures when available, because silent errors often appear as UX friction.

## act

Click, type, select, hover, press keys, scroll, upload files, and wait like a human. Read the visible page before acting.

## screenshot

Capture screenshots to:

```text
docs/playtest/<date>/screenshots/NN-step-name.png
```

Use stable, descriptive names so the report can reference them.

## teardown

Always close the browser. If the driver started a dev server, stop only the process it started.
