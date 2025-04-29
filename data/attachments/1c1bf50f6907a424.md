# Test info

- Name: test
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/test.spec.js:4:1

# Error details

```
Error: expect.toBeVisible: Unsupported token "@id" while parsing css selector "[@id="kc-header-wrapper"]". Did you mean to CSS.escape it?
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for [@id="kc-header-wrapper"]

    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/test.spec.js:8:61
```

# Page snapshot

```yaml
- text: Код Аудита
- banner:
  - heading "Sign in to your account" [level=1]
- text: Username or email
- textbox "Username or email"
- text: Password
- textbox "Password"
- button "Show password"
- button "Sign In"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { URL } from '../sources/consts/index.js';
   3 |
   4 | test('test', async ({ page }) => {
   5 |     await page.goto(URL);
   6 |     await expect(page).toHaveURL(URL);
   7 |
>  8 |     await expect(page.locator('[@id="kc-header-wrapper"]')).toBeVisible();
     |                                                             ^ Error: expect.toBeVisible: Unsupported token "@id" while parsing css selector "[@id="kc-header-wrapper"]". Did you mean to CSS.escape it?
   9 | });
  10 |
```