# Test info

- Name: Создание стандартных сущностей >> Просмотр информации о пользователе
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:58:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: locator('.MuiStack-root > p.MuiTypography-body1')
Expected string: "trusanova001"
Received string: "Tatiana Rusanova"
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('.MuiStack-root > p.MuiTypography-body1')
    9 × locator resolved to <p class="MuiTypography-root MuiTypography-body1 css-113rmp3">Tatiana Rusanova</p>
      - unexpected value "Tatiana Rusanova"

    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:63:56
```

# Page snapshot

```yaml
- menu:
  - paragraph: Tatiana Rusanova
  - paragraph: Хранитель-мастер
  - paragraph: Пользователь
  - separator
  - menuitem "Выход"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, USERNAME, PASSWORD } from '../sources/consts/index.js';
   3 | import { SignInPage, EngagementsPage, CreateEngPage, EngagmentPage } from '../sources/pages/index.js';
   4 |
   5 | // добавляем данные юзера для авторизации
   6 | const USER_DATA = {
   7 |   password: PASSWORD,
   8 |   username: USERNAME
   9 | };
  10 |
  11 | test.describe('Создание стандартных сущностей', () => {
  12 |     test.beforeEach('Переход на главную страницу веб-приложения', async ({ page }) => {
  13 |         const signInPage = new SignInPage(page);
  14 |         const engagementsPage = new EngagementsPage(page);
  15 |
  16 |         await signInPage.open(BASE_URL);
  17 |         await signInPage.gotoLoginPage();
  18 |         await signInPage.signInAndEngagementsPage(USER_DATA.username, USER_DATA.password);
  19 |
  20 |         await expect(engagementsPage.createEngButton).toBeVisible();
  21 |     });
  22 |
  23 |     /*test('Создание Engagement', async ({ page }) => {
  24 |         const engagementsPage = new EngagementsPage(page);
  25 |         const createEngPage = new CreateEngPage(page);
  26 |
  27 |         await engagementsPage.gotoCreateEngPage();
  28 |         await createEngPage.createEngagement();
  29 |         await expect(page.getByRole('button', { name: 'Создать' })).toBeVisible();
  30 |     });
  31 |
  32 |     test('Подписание независимости', async ({ page }) => {
  33 |         const createEngPage = new CreateEngPage(page);
  34 |
  35 |         await createEngPage.addPromise();
  36 |         await expect(page.getByText('Мы записали ваше подтверждение независимости. Приятной работы')).toBeVisible();
  37 |
  38 |         await createEngPage.gotoEngagementPage();
  39 |         await expect(page.getByRole('heading', { name: 'Happy friday / Аудит / МСФО (' })).toBeVisible();
  40 |     });*/
  41 |
  42 |     test('Проверка пагинации на странице Engagements', async ({ page }) => {
  43 |         const engagementsPage = new EngagementsPage(page);
  44 |
  45 |         await engagementsPage.usePagination();
  46 |
  47 |         await expect(engagementsPage.firstPaginationIcon).toContainText('1–50 из 411');
  48 |     });
  49 |
  50 |     test('Переход на страницу списка запросов (логов) Engagement', async ({ page }) => {
  51 |         const engagementsPage = new EngagementsPage(page);
  52 |
  53 |         await engagementsPage.gotoEngagementLogsPage();
  54 |
  55 |         await expect(engagementsPage.dropDownEngLogs).toHaveText('Список событий');
  56 |     });
  57 |
  58 |     test('Просмотр информации о пользователе', async ({ page }) => {
  59 |         const engagementsPage = new EngagementsPage(page);
  60 |
  61 |         await engagementsPage.userInfoBlock();
  62 |
> 63 |         await expect(engagementsPage.dropDownUserData).toContainText(USERNAME);
     |                                                        ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  64 | });
  65 | });
  66 |
  67 |
```