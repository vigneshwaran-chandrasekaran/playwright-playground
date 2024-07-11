import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://happyfolks.io/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Happyfolks - Unified HRMS & People Platform/);
});
