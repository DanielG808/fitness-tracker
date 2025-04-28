import test, { expect } from "playwright/test";
import { formatRgb, parse } from "culori";
import { navLinks } from "@/lib/constants/navLinks";

test.describe("Navigation Panel", () => {
  test.describe("Content & Styling", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/");
      await page.evaluate(async () => {
        await document.fonts.ready;
      });
    });

    test("logo should have correct text", async ({ page }) => {
      const logo = page.getByTestId("nav-panel-logo");
      const anchorElement = logo.locator("a");

      const textContent = await anchorElement.textContent();

      expect(textContent).toBe("Fitness Tracker");
    });

    test("logo should have correct styling", async ({ page }) => {
      const logo = page.getByTestId("nav-panel-logo");

      const fontFamily = await logo.evaluate(
        (logo) => window.getComputedStyle(logo).fontFamily
      );
      const computedColor = await logo.evaluate(
        (logo) => window.getComputedStyle(logo).color
      );

      const color = parse(computedColor);
      const expectedRgb = formatRgb(color);

      expect(fontFamily.toLowerCase()).toContain("bebas neue");
      expect(expectedRgb).toBe("rgb(124, 207, 0)");
    });

    test("nav-links should have correct names", async ({ page }) => {
      for (let i = 0; i < navLinks.length; i++) {
        const { name, path } = navLinks[i];
        const testId = `nav-${path.replace(/\//g, "") || "home"}`;

        const parentElement = page.getByTestId(testId);
        const anchorElement = parentElement.locator("a");

        await expect(anchorElement).toHaveText(name);
      }
    });

    test("nav-links should have correct styling", async ({ page }) => {
      const element = page.getByTestId("nav-home");

      const fontFamily = await element.evaluate(
        (el) => window.getComputedStyle(el).fontFamily
      );
      const computedColor = await element.evaluate(
        (el) => window.getComputedStyle(el).color
      );

      const color = parse(computedColor);
      const expectedRgb = formatRgb(color);

      expect(fontFamily.toLowerCase()).toContain("inter");
      expect(expectedRgb).toBe("rgb(124, 207, 0)");
    });
  });

  test.describe("Navigation", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/");
    });

    test("logo should navigate to home page", async ({ page }) => {
      await page.goto("/workouts");

      const logo = page.getByTestId("nav-panel-logo");
      const anchorElement = logo.locator("a");

      await anchorElement.click();
      await page.waitForURL("/");

      const pathName = new URL(page.url()).pathname;

      expect(pathName).toBe("/");
    });

    test("nav-links should navigate to correct paths", async ({ page }) => {
      for (let i = 0; i < navLinks.length; i++) {
        const { path } = navLinks[i];
        const testId = `nav-${path.replace(/\//g, "") || "home"}`;

        const linkContainer = page.getByTestId(testId);
        const anchorElement = linkContainer.locator("a");

        await anchorElement.click();
        await page.waitForURL(`**${path}`);

        const pathName = new URL(page.url()).pathname;

        expect(pathName).toBe(path);
      }
    });
  });
});
