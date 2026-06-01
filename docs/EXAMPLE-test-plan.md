# Playtest Plan - Example SaaS App

Date: 2026-06-01  
Driver: Web via Playwright MCP  
Status: Waiting for human scope selection

## Product Purpose

Example SaaS App helps small teams create projects, invite teammates, and track work from a shared dashboard.

## Target Users

- Founder or operator setting up the workspace for the first time.
- Daily teammate checking assigned work.
- Admin managing members and billing.

## Feature Inventory

### Public and onboarding

- Landing page
- Sign up
- Sign in
- Password reset
- Workspace creation

### Core app

- Dashboard
- Project list
- Project detail
- Task create/edit
- Task status updates

### Admin

- Member invitation
- Role management
- Billing settings

## Feature Status

No explicit feature-status document found. Treat missing or incomplete behavior as "needs verification" rather than automatically broken.

## Test-User Mechanism

Discovered local seed script:

```text
npm run seed:test-user
```

The app uses local email capture for verification links.

## Prerequisites

- Start dev server with `npm run dev`
- Confirm app is available at `http://localhost:3000`
- Confirm test database is disposable

## Proposed Personas

### Maya - first-time founder

- Mindset and behavior: fast, skims, wants to get set up quickly
- Domain expertise: some SaaS familiarity
- Motivation and emotional state: impatient but curious
- Device and context: laptop, first visit
- Goals this run: sign up, create workspace, create first project

### Ren - daily teammate

- Mindset and behavior: task-focused, search-first
- Domain expertise: normal business user
- Motivation and emotional state: wants to find assigned work quickly
- Device and context: laptop, returning user
- Goals this run: sign in, find assigned task, update status

### Sam - workspace admin

- Mindset and behavior: cautious, reads confirmation text
- Domain expertise: experienced admin
- Motivation and emotional state: wants to invite the right people safely
- Device and context: laptop, settings area
- Goals this run: invite member, change role, inspect billing

## Scope Options

1. Full sweep: all public, core, and admin features.
2. Core golden path: sign up, create workspace, create project, create task.
3. Team workflow: invite member, sign in as teammate, update task.
4. Admin only: members, roles, and billing.

Please choose one scope before simulation starts.
