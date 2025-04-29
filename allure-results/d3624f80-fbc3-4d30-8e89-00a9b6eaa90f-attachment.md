# Test info

- Name: Создание стандартных сущностей >> Создание стандартных сущностей
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/authUser.spec.js:16:5

# Error details

```
Error: "context" and "page" fixtures are not supported in "beforeAll" since they are created on a per-test basis.
If you would like to reuse a single page between tests, create context manually with browser.newContext(). See https://aka.ms/playwright/reuse-page for details.
If you would like to configure your page before each test, do that in beforeEach hook instead.
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, trusanova001 } from '../sources/consts/index.js';
   3 | import { SignInPage, StartNgrokPage, EngagmentsPage } from '../sources/pages/index.js';
   4 |
   5 | test.describe('Создание стандартных сущностей', () => {
   6 |     // переход со страницы прокси-сервиса на страницу логина и логирование пользователя
   7 |     test.beforeAll('Переход на главную страницу веб-приложения', async ({ page }) => {
   8 |         const startNgrokPage = new StartNgrokPage(page);
   9 |         const signInPage = new SignInPage(page);
  10 |
  11 |         await startNgrokPage.open(BASE_URL);
  12 |         await startNgrokPage.gotoLoginPage();
  13 |         await signInPage.signInAndEngagementsPage(trusanova001.username, trusanova001.password);
  14 | });
  15 |
> 16 |     test('Создание стандартных сущностей', async ({ page }) => {
     |     ^ Error: "context" and "page" fixtures are not supported in "beforeAll" since they are created on a per-test basis.
  17 |         const engagmentsPage = new EngagmentsPage(page);
  18 |
  19 |         await engagmentsPage.gotoCreateEngPage();
  20 |         await expect(page.getByRole('button', { name: 'Создать' })).toBeVisible();
  21 |     });
  22 | });
```