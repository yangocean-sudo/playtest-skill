import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function read(path) {
  return readFile(new URL(`../${path}`, import.meta.url), "utf8");
}

test("TeamPilot demo exposes the intended playtest surfaces", async () => {
  const html = await read("demo/teampilot/index.html");

  assert.match(html, /TeamPilot/);
  assert.match(html, /data-playtest="onboarding"/);
  assert.match(html, /data-playtest="workspace"/);
  assert.match(html, /data-playtest="project"/);
  assert.match(html, /data-playtest="invite"/);
  assert.match(html, /data-playtest="role-management"/);
  assert.match(html, /data-ux-issue="hidden-primary-action"/);
  assert.match(html, /data-ux-issue="jargon-role-label"/);
  assert.match(html, /data-ux-issue="weak-empty-state"/);
});

test("repo includes playtest output generated from the demo", async () => {
  const plan = await read("docs/playtest/demo-teampilot/test-plan.md");
  const report = await read("docs/playtest/demo-teampilot/report.html");

  assert.match(plan, /TeamPilot/);
  assert.match(plan, /Scope Options/);
  assert.match(plan, /Human checkpoint/);
  assert.match(report, /Playtest report - TeamPilot/);
  assert.match(report, /Maya/);
  assert.match(report, /Ren/);
  assert.match(report, /Sam/);
  assert.match(report, /screenshots\//);
});
