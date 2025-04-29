# Test info

- Name: Создание Engagement и работа с ним >> Проверка валидации при попытке создать Engagement с незаполненными полями
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:22:5

# Error details

```
Error: expect(locator).toContainText(expected)

Locator: locator('p.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.css-eg1xdz')
Expected string: "123"
Received string: "Обязательно для заполнения"
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('p.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.css-eg1xdz')
    4 × locator resolved to <p id=":r1i:-helper-text" class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium css-eg1xdz">Обязательно для заполнения</p>
      - unexpected value "Обязательно для заполнения"

    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:31:52
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
  27 |         await createEngPage.validateEngEntities();
  28 |
  29 |         expect(createEngPage.clientNameFieldError).toContainText('Обязательно для заполнения');
  30 |         expect(createEngPage.departmentFieldError).toContainText('Обязательно для заполнения');
> 31 |         expect(createEngPage.castomNameFieldError).toContainText('123');
     |                                                    ^ Error: expect(locator).toContainText(expected)
  32 |     });
  33 |
  34 |     /*test('Создание Engagement', async ({ page }) => {
  35 |         const engagementsPage = new EngagementsPage(page);
  36 |         const createEngPage = new CreateEngPage(page);
  37 |
  38 |         await engagementsPage.gotoCreateEngPage();
  39 |         await createEngPage.createEngagement();
  40 |         await expect(page.getByRole('button', { name: 'Создать' })).toBeVisible();
  41 |     });
  42 |
  43 |     test('Подписание независимости', async ({ page }) => {
  44 |         const createEngPage = new CreateEngPage(page);
  45 |
  46 |         await createEngPage.addPromise();
  47 |         await expect(page.getByText('Мы записали ваше подтверждение независимости. Приятной работы')).toBeVisible();
  48 |
  49 |         await createEngPage.gotoEngagementPage();
  50 |         await expect(page.getByRole('heading', { name: 'Happy friday / Аудит / МСФО (' })).toBeVisible();
  51 |     });
  52 |
  53 |     test('Проверка пагинации на странице Engagements', async ({ page }) => {
  54 |         const engagementsPage = new EngagementsPage(page);
  55 |
  56 |         await engagementsPage.usePagination();
  57 |
  58 |         await expect(engagementsPage.firstPaginationIcon).toContainText('1–50 из 411');
  59 |     });*/
  60 |
  61 |     /*test('Переход на страницу списка запросов (логов) Engagement', async ({ page }) => {
  62 |         const engagementsPage = new EngagementsPage(page);
  63 |
  64 |         await engagementsPage.gotoEngagementLogsPage();
  65 |
  66 |         await expect(engagementsPage.dropDownEngLogs).toBeVisible(); 
  67 |     });*/
  68 | });
```