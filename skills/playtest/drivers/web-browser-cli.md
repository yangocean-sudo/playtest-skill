# Driver: Web via Browser CLI

Use this driver for local web apps when the agent has a browser automation CLI such as `browser-use` or Playwright CLI instead of Playwright MCP.

## detect

Applies when:

- the repo contains a web app
- a browser automation CLI is available
- the app can run locally or against a disposable dev environment

Check for tools such as:

```bash
command -v browser-use
command -v npx
```

## setup

- Read project docs and scripts to find the dev command and port.
- Check whether the port is already in use before starting a server.
- Confirm the target URL is local or disposable.
- If using `browser-use`, configure it according to the local environment. Some environments require a persistent browser profile; do not hardcode a machine-specific path in public instructions.

## createUser

Use discovered project helpers for local test users and auth. If no helper exists, ask the human for a disposable test account or permission to create one through the local UI.

## navigate

Example shapes:

```bash
browser-use --browser real open http://localhost:3000
npx playwright open http://localhost:3000
```

Use whichever browser automation command exists in the environment.

## observe

Prefer structured state over screenshots when available:

```bash
browser-use state
browser-use get text <index>
```

With Playwright CLI or custom scripts, inspect the accessibility tree, visible text, console, and failed requests when possible.

## act

Example shapes:

```bash
browser-use click <index>
browser-use input <index> "text"
browser-use scroll down
```

Act slowly enough to observe loading, empty, and error states a real user would see.

## screenshot

Save screenshots to:

```text
docs/playtest/<date>/screenshots/NN-step-name.png
```

## teardown

Always close the browser session:

```bash
browser-use close
```

If using a different CLI, run its equivalent close command. Also stop only the dev server process this driver started.
