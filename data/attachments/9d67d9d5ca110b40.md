# Test info

- Name: Переход на главную страницу веб-приложения
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/proxyNgrok.spec.js:6:1

# Error details

```
Error: expect.toBeVisible: Error: strict mode violation: getByText('Visit') resolved to 4 elements:
    1) <p class="m-0 text-base font-medium">You are about to visit:</p> aka getByText('You are about to visit:')
    2) <li>You should only visit this website if you trust w…</li> aka getByText('You should only visit this')
    3) <button class="ring-blue-600/20 inline-flex cursor-pointer items-center justify-center rounded px-3 py-1.5 text-sm font-medium transition-colors focus:ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-blue-600 hover:bg-blue-600/80 text-white no-underline hover:text-white hover:no-underline focus:no-underline">Visit Site</button> aka getByRole('button', { name: 'Visit Site' })
    4) <p class="text-body mb-4 break-words">We display this page to prevent abuse. Visitors t…</p> aka getByText('We display this page to')

Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByText('Visit')

    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/proxyNgrok.spec.js:14:43
```

# Page snapshot

```yaml
- main:
  - 'heading "You are about to visit: 5590-46-36-217-190.ngrok-free.app" [level=3]':
    - paragraph: "You are about to visit:"
    - paragraph: 5590-46-36-217-190.ngrok-free.app
  - paragraph: "Website IP: 46.36.217.190"
  - list:
    - listitem:
      - text: This website is served for free through
      - link "ngrok.com":
        - /url: https://ngrok.com
      - text: .
    - listitem: You should only visit this website if you trust whoever sent the link to you.
    - listitem: Be careful about disclosing personal or financial information like passwords, phone numbers, or credit cards.
  - button "Visit Site"
  - heading "Are you the developer?" [level=2]
  - paragraph: We display this page to prevent abuse. Visitors to your site will only see it once.
  - heading "To remove this page:" [level=2]
  - list:
    - listitem:
      - text: Set and send an
      - code: ngrok-skip-browser-warning
      - text: request header with any value.
    - listitem:
      - text: Or, set and send a custom/non-standard browser
      - code: User-Agent
      - text: request header.
    - listitem:
      - text: Or, please
      - link "upgrade":
        - /url: https://dashboard.ngrok.com/billing
      - text: to any paid ngrok account.
  - separator
  - paragraph:
    - img
    - text: Learn how ngrok
    - link "fights abuse":
      - /url: https://ngrok.com/abuse
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
> 14 |     await expect(page.getByText('Visit')).toBeVisible();
     |                                           ^ Error: expect.toBeVisible: Error: strict mode violation: getByText('Visit') resolved to 4 elements:
  15 |     await expect(page.getByText('Код Аудита')).toBeVisible();
  16 | });
```