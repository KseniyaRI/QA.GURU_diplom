# Test info

- Name: Создание Engagement и работа с ним >> Проверка валидации при попытке создать Engagement с незаполненными полями
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:22:5

# Error details

```
Error: expect(locator).toBeVisible()

Locator: locator('div:has(div[id="r1-label"]:has-text("Головной клиент")) p.MuiFormHelperText-root.Mui-error:has-text("Обязательно для заполнения")')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('div:has(div[id="r1-label"]:has-text("Головной клиент")) p.MuiFormHelperText-root.Mui-error:has-text("Обязательно для заполнения")')

    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:28:54
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, USERNAME, PASSWORD } from '../sources/consts/index.js';
   3 | import { SignInPage, EngagementsPage, CreateEngPage } from '../sources/pages/index.js';
   4 |
   5 | // добавляем данные юзера для авторизации
   6 | const USER_DATA = {
   7 |   password: PASSWORD,
   8 |   username: USERNAME
   9 | };
  10 |
  11 | test.describe('Создание Engagement и работа с ним', () => {
  12 |     test.beforeEach('Переход на главную страницу веб-приложения', async ({ page }) => {
  13 |         const signInPage = new SignInPage(page);
  14 |         const engagementsPage = new EngagementsPage(page);
  15 |
  16 |         await signInPage.open(BASE_URL);
  17 |         await signInPage.signInAndEngagementsPage(USER_DATA.username, USER_DATA.password);
  18 |
  19 |         await expect(engagementsPage.createEngLink).toBeVisible();
  20 |     });
  21 |
  22 |     test('Проверка валидации при попытке создать Engagement с незаполненными полями', async ({ page }) => {
  23 |         const engagementsPage = new EngagementsPage(page);
  24 |         const createEngPage = new CreateEngPage(page);
  25 |
  26 |         await engagementsPage.gotoCreateEngPage();
  27 |
> 28 |         expect(createEngPage.headClientRequiredText).toBeVisible();
     |                                                      ^ Error: expect(locator).toBeVisible()
  29 |
  30 |     });
  31 |
  32 |     /*test('Создание Engagement', async ({ page }) => {
  33 |         const engagementsPage = new EngagementsPage(page);
  34 |         const createEngPage = new CreateEngPage(page);
  35 |
  36 |         await engagementsPage.gotoCreateEngPage();
  37 |         await createEngPage.createEngagement();
  38 |         await expect(page.getByRole('button', { name: 'Создать' })).toBeVisible();
  39 |     });
  40 |
  41 |     test('Подписание независимости', async ({ page }) => {
  42 |         const createEngPage = new CreateEngPage(page);
  43 |
  44 |         await createEngPage.addPromise();
  45 |         await expect(page.getByText('Мы записали ваше подтверждение независимости. Приятной работы')).toBeVisible();
  46 |
  47 |         await createEngPage.gotoEngagementPage();
  48 |         await expect(page.getByRole('heading', { name: 'Happy friday / Аудит / МСФО (' })).toBeVisible();
  49 |     });
  50 |
  51 |     test('Проверка пагинации на странице Engagements', async ({ page }) => {
  52 |         const engagementsPage = new EngagementsPage(page);
  53 |
  54 |         await engagementsPage.usePagination();
  55 |
  56 |         await expect(engagementsPage.firstPaginationIcon).toContainText('1–50 из 411');
  57 |     });*/
  58 |
  59 |     /*test('Переход на страницу списка запросов (логов) Engagement', async ({ page }) => {
  60 |         const engagementsPage = new EngagementsPage(page);
  61 |
  62 |         await engagementsPage.gotoEngagementLogsPage();
  63 |
  64 |         await expect(engagementsPage.dropDownEngLogs).toBeVisible(); 
  65 |     });*/
  66 | });
```