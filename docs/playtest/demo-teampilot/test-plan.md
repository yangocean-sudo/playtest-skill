# Playtest Plan - TeamPilot Demo

Date: 2026-06-01  
Driver: Web via browser-use CLI  
Target: `http://localhost:4173`  
Status: Human checkpoint - scope selected for demo output

## Product Purpose

TeamPilot is a small SaaS-style workspace for team operations. It lets a user create a workspace, create the first project, invite teammates, and manage member roles. The demo is intentionally realistic rather than polished: it technically works, but it includes common UX friction so the Playtest skill can show how first-person simulation finds confusion.

## Target User Types

- First-time founder or operator setting up a workspace.
- Returning teammate who needs to find work and understand what to do next.
- Workspace admin managing invitations and roles.

## Full Feature Inventory

### Onboarding

- Work email field
- Workspace name field
- Create workspace action
- Workspace setup progress indicator

### Workspace Dashboard

- Workspace summary card
- Empty project state
- Project setup card
- Project name field
- Create project action
- Generated task list

### Team Operations

- Members and roles section
- Hidden More menu
- Invite teammate action
- Member table
- Role dropdowns

### Responsive Surface

- Mobile preview
- Small-screen action hiding pattern

## Feature Status

No separate feature-status document exists for the demo. Treat the visible experience as intentionally implemented and evaluate whether it is intuitive.

## Test-User Mechanism

No backend account is required. The demo uses local form state and sample users:

- Maya Chen: workspace owner
- Ren Park: invited teammate after invite action

## Prerequisites

From the repository root:

```bash
npm run serve:demo
```

Open:

```text
http://localhost:4173
```

## Proposed Personas

### Maya - first-time founder

- Mindset and behavior: fast, skims, wants the workspace usable quickly
- Domain expertise: familiar with SaaS tools, not with TeamPilot
- Motivation and emotional state: optimistic but impatient
- Device and context: desktop browser, first visit
- Goals this run: create a workspace, understand what to do next, create first project

### Ren - invited teammate

- Mindset and behavior: task-focused, follows obvious labels
- Domain expertise: normal business user
- Motivation and emotional state: wants to find assigned work without setup complexity
- Device and context: desktop browser, returning/invited user
- Goals this run: inspect project work and understand team membership state

### Sam - cautious workspace admin

- Mindset and behavior: careful, reads labels before changing permissions
- Domain expertise: experienced admin, but not familiar with internal jargon
- Motivation and emotional state: wants to invite the right teammate with the right role
- Device and context: desktop browser, settings/team area
- Goals this run: invite a teammate and choose an appropriate role

## Scope Options

1. Full sweep: onboarding, workspace, project setup, member invitation, role management, responsive surface.
2. Core golden path: create workspace and project.
3. Team workflow: find invite action, invite teammate, inspect role controls.
4. Admin only: role management and permissions terminology.

## Selected Scope For Demo

Full sweep.

This file demonstrates the mandatory Phase 1 output. In a real run, the agent would stop here and wait for the human to choose scope before continuing.
