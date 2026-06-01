# Driver: iOS via Xcode MCP

Use this driver for local iOS apps when Xcode MCP or equivalent simulator tooling is available.

## detect

Applies when:

- the repo contains `.xcodeproj`, `.xcworkspace`, or a Swift Package app target
- Xcode and an iOS Simulator are available
- Xcode MCP or equivalent build/run/screenshot tools are available

## setup

- Discover projects/workspaces and schemes.
- Show current build defaults if the tooling supports session defaults.
- Set project or workspace, scheme, simulator, and configuration explicitly when missing.
- Build, install, and launch the app on an iOS Simulator.
- Reuse a booted simulator when appropriate.
- Confirm the app points to local or disposable backend services.

Typical Xcode MCP capability names include:

```text
discover_projs
list_schemes
list_sims
session_show_defaults
session_set_defaults
build_run_sim
snapshot_ui
screenshot
stop_app_sim
```

Use the exact tool names available in the current agent environment.

## createUser

Use the app's discovered local test auth path:

- test scheme or launch arguments
- mock auth mode
- seed script
- local backend helper
- disposable test account

Never use a real personal account or production backend.

## navigate

Navigate through taps and visible controls when possible. Use deep links only when the product exposes them and the persona could realistically receive or open that link.

## observe

Use the simulator accessibility tree or view hierarchy to understand:

- visible labels
- buttons and controls
- field state
- modal dialogs
- disabled or hidden controls

Use screenshots for visual evidence, not as the only reasoning source.

## act

Tap, type, swipe, scroll, handle permissions, and dismiss system dialogs like a real user. Pause to observe loading states and transitions.

## screenshot

Save simulator screenshots to:

```text
docs/playtest/<date>/screenshots/NN-step-name.png
```

## teardown

Stop the app and clean up only processes or simulator state started for the playtest. If the simulator should remain open for the developer, say so instead of shutting down unrelated sessions.
