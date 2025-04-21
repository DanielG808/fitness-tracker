import test, { expect } from "playwright/test";
import { navLinks } from "@/lib/constants/navLinks";

test.describe("Navigation Panel", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.describe("Content & Styling", () => {
    test("should have correct names", async ({ page }) => {
      for (let i = 0; i < navLinks.length; i++) {
        const { name, path } = navLinks[i];
        const testId = `nav-${path.replace(/\//g, "") || "home"}`;

        const parentElement = page.getByTestId(testId);
        const anchorElement = parentElement.locator("a");

        await expect(anchorElement).toHaveText(name);
      }
    });
  });
});
