# Test info

- Name: Переход на главную страницу веб-приложения
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/proxyNgrok.spec.js:6:1

# Error details

```
Error: expect(locator).toBeVisible()

Locator: getByText('Код Аудита')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByText('Код Аудита')

    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/proxyNgrok.spec.js:15:48
```

# Page snapshot

```yaml
- main:
  - heading "ERR_NGROK_3200" [level=1]
  - paragraph: The endpoint 8f7a-46-36-217-190.ngrok-free.app is offline.
  - link "Get help with this error":
    - /url: https://ngrok.com/docs/errors/err_ngrok_3200/?endpoint_url=https%3A%2F%2F8f7a-46-36-217-190.ngrok-free.app
  - heading "If you're the developer of this page" [level=2]
  - paragraph:
    - text: Check out the docs to get
    - link "help with this error":
      - /url: https://ngrok.com/docs/errors/err_ngrok_3200/?endpoint_url=https%3A%2F%2F8f7a-46-36-217-190.ngrok-free.app
    - text: .
  - heading "If you're a visitor of this page" [level=2]
  - paragraph:
    - text: Wait a few minutes and
    - button "refresh the page"
    - text: . If that still doesn't work, please contact the developer of this page for more information.
- contentinfo:
  - text: Powered by
  - link "ngrok":
    - /url: https://ngrok.com
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, trusanova001, kperchatki004 } from '../sources/consts/index.js';
   3 | //import { NoteBuilder,  NameEngBuilder,  DeliverableBuilder } from '../sources/builders/index.js';
   4 | import { SignInPage, StartNgrokPage } from '../sources/pages/index.js';
   5 |
   6 | test('Переход на главную страницу веб-приложения', async ({page}) => {
   7 |     const startNgrokPage = new StartNgrokPage(page);
   8 |     //const signInPage = new SignInPage(page);
   9 |
  10 |     await startNgrokPage.open(BASE_URL);
  11 |     //await startNgrokPage.gotoLoginPage();
  12 |     //await signInPage.open(BASE_URL);
  13 |     //await signInPage.gotoLoginPage();
  14 |     await expect(page.getByText('Visit')).toBeVisible();
> 15 |     await expect(page.getByText('Код Аудита')).toBeVisible();
     |                                                ^ Error: expect(locator).toBeVisible()
  16 | });
```