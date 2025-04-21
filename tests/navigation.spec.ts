import test, { expect } from "playwright/test";
import { formatRgb, oklch } from "culori"
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

    
    test("should have correct styling", async ({ page }) => {
      await page.evaluate(async () => {
        await document.fonts.ready
      })

      const element = page.getByTestId("nav-home")
      
      const fontFamily = await element.evaluate((el) => window.getComputedStyle(el).fontFamily)
      const computedColor = await element.evaluate((el) => window.getComputedStyle(el).color)

      const expectedRgb = formatRgb(oklch(computedColor))
      
      expect(fontFamily.toLowerCase()).toContain("inter")
      expect(expectedRgb).toBe("rgb(124, 207, 0)")
    })
  });
});
