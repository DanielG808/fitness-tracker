# Test info

- Name: Navigation Panel >> Content & Styling >> should have correct names
- Location: C:\Users\stjim\Documents\web-dev-projects\fitness-tracker\tests\navigation.spec.ts:10:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)

Locator: getByTestId('nav-home').locator('a')
Expected string: "Workout Calendar"
Received: <element(s) not found>
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for getByTestId('nav-home').locator('a')

    at C:\Users\stjim\Documents\web-dev-projects\fitness-tracker\tests\navigation.spec.ts:18:37
```

# Page snapshot

```yaml
- complementary:
  - button
  - heading "Fitness Tracker" [level=1]:
    - link "Fitness Tracker":
      - /url: /
  - navigation:
    - list:
      - listitem:
        - link "Workout Calendar":
          - /url: /
      - listitem:
        - link "Workouts":
          - /url: /workouts
      - listitem:
        - link "Profile":
          - /url: /profile
      - listitem:
        - link "Settings":
          - /url: /settings
  - paragraph: ©2025 FitnessTracker
  - paragraph: All rights reserved.
- main:
  - main: Fitness
- alert
- button "Open Next.js Dev Tools":
  - img
```

# Test source

```ts
   1 | import test, { expect } from "playwright/test";
   2 | import { navLinks } from "@/lib/constants/navLinks";
   3 |
   4 | test.describe("Navigation Panel", () => {
   5 |   test.beforeEach(async ({ page }) => {
   6 |     await page.goto("/");
   7 |   });
   8 |
   9 |   test.describe("Content & Styling", () => {
  10 |     test("should have correct names", async ({ page }) => {
  11 |       for (let i = 0; i <= navLinks.length; i++) {
  12 |         const { name, path } = navLinks[i];
  13 |         const testId = `nav-${path.replace(/\//g, "") || "home"}`;
  14 |
  15 |         const parentElement = page.getByTestId(testId);
  16 |         const anchorElement = parentElement.locator("a");
  17 |
> 18 |         await expect(anchorElement).toHaveText(name);
     |                                     ^ Error: Timed out 5000ms waiting for expect(locator).toHaveText(expected)
  19 |       }
  20 |     });
  21 |   });
  22 | });
  23 |
```