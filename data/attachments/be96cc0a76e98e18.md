# Test info

- Name: test
- Location: /home/runner/work/QA.GURU_diplom/QA.GURU_diplom/specs/test.spec.js:4:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4200/
Call log:
  - navigating to "http://localhost:4200/", waiting until "load"

    at /home/runner/work/QA.GURU_diplom/QA.GURU_diplom/specs/test.spec.js:5:16
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { URL } from '../sources/consts/index.js';
   3 |
   4 | test('test', async ({ page }) => {
>  5 |     await page.goto(URL);
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4200/
   6 |     await expect(page).toHaveURL(URL);
   7 |
   8 |     await expect(page.getByText('Код Аудита')).toBeVisible();
   9 | });
  10 |
```