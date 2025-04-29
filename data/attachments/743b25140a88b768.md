# Test info

- Name: Создание стандартных сущностей >> Проверка пагинации на странице Engagments
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/authUser.spec.js:35:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: locator('p.MuiTablePagination-displayedRows')
Expected string: "1-50 из 411"
Received string: "1–50 из 411"
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('p.MuiTablePagination-displayedRows')
    9 × locator resolved to <p class="MuiTablePagination-displayedRows css-1chpzqh">1–50 из 411</p>
      - unexpected value "1–50 из 411"

    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/authUser.spec.js:40:58
```

# Page snapshot

```yaml
- banner:
  - button:
    - paragraph
  - link:
    - /url: /
    - img
  - button "TR Tatiana Rusanova"
- heading "Проекты" [level=5]
- link "Создать проект":
  - /url: /engagements/create
- combobox "Финансовый год"
- button "Открыть"
- paragraph
- combobox "Статус"
- button "Открыть"
- paragraph
- combobox "Головной клиент (клиентский код)"
- button "Открыть"
- paragraph
- combobox "Участник проекта"
- button "Открыть"
- paragraph
- button "Только мои"
- paragraph: 1–50 из 411
- button "Перейти на предыдущую страницу" [disabled]
- button "Перейти на следующую страницу"
- grid:
  - rowgroup:
    - row "Название Головной клиент Финансовый год Статус":
      - columnheader "Название"
      - columnheader "Головной клиент"
      - columnheader "Финансовый год"
      - columnheader "Статус"
      - columnheader
  - row "Аудит Задание 002 Ко-Инвестмент Партнершип V, Л.П. FY24 Создано":
    - cell "Аудит Задание 002":
      - link "Аудит Задание 002":
        - /url: /engagements/d1ed3cfb-34a1-4bde-8ec8-28b94019b61d/info
        - text: АЗ
        - paragraph: Аудит Задание 002
    - cell "Ко-Инвестмент Партнершип V, Л.П."
    - cell "FY24"
    - cell "Создано"
    - cell
  - row "Тестовый проект Happy friday FY25 Создано":
    - cell "Тестовый проект":
      - link "Тестовый проект":
        - /url: /engagements/3abd6b2c-85d2-4885-bd4b-ec3be5d444d8/info
        - text: ТП
        - paragraph: Тестовый проект
    - cell "Happy friday"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "Тестовый проект Happy friday FY25 Создано":
    - cell "Тестовый проект":
      - link "Тестовый проект":
        - /url: /engagements/f0a0e2e5-7251-43b1-bff2-c88153c546bb/info
        - text: ТП
        - paragraph: Тестовый проект
    - cell "Happy friday"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "Тестовый проект Happy friday FY25 Создано":
    - cell "Тестовый проект":
      - link "Тестовый проект":
        - /url: /engagements/63fa71e6-3e3d-4a96-91f0-a380644da794/info
        - text: ТП
        - paragraph: Тестовый проект
    - cell "Happy friday"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "Тестовый проект Happy friday FY25 Создано":
    - cell "Тестовый проект":
      - link "Тестовый проект":
        - /url: /engagements/7129b7b5-2ceb-4011-94f3-d1f3f5a1d0f6/info
        - text: ТП
        - paragraph: Тестовый проект
    - cell "Happy friday"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "Тестовый проект Happy friday FY25 Создано":
    - cell "Тестовый проект":
      - link "Тестовый проект":
        - /url: /engagements/7cfdc93c-c855-46a5-b606-5205d0c94ce6/info
        - text: ТП
        - paragraph: Тестовый проект
    - cell "Happy friday"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "\"МБМ СТАБ\" ООО \"МБМ СТАБ\" ООО FY25 Создано":
    - cell "\"МБМ СТАБ\" ООО":
      - link "\"МБМ СТАБ\" ООО":
        - /url: /engagements/bf9dc769-bac1-4c3f-a64c-20c16220a751/info
        - text: МС
        - paragraph: "\"МБМ СТАБ\" ООО"
    - cell "\"МБМ СТАБ\" ООО"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "ЛИТРЕС 1, ООО ЛИТРЕС, ООО FY25 Создано":
    - cell "ЛИТРЕС 1, ООО":
      - link "ЛИТРЕС 1, ООО":
        - /url: /engagements/f5441a94-5013-48de-9353-869bfe0f87d6/info
        - text: Л1
        - paragraph: ЛИТРЕС 1, ООО
    - cell "ЛИТРЕС, ООО"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "Аудит Задание 001 Ко-Инвестмент Партнершип V, Л.П. FY25 Создано":
    - cell "Аудит Задание 001":
      - link "Аудит Задание 001":
        - /url: /engagements/f9d96db8-0124-4dbd-9ef2-0da08f2042d2/info
        - text: АЗ
        - paragraph: Аудит Задание 001
    - cell "Ко-Инвестмент Партнершип V, Л.П."
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "Happy friday / Аудит / МСФО (IFRS Accounting Standards) / 3 мес / 2026 Happy friday FY25 Создано":
    - cell "Happy friday / Аудит / МСФО (IFRS Accounting Standards) / 3 мес / 2026":
      - link "Happy friday / Аудит / МСФО (IFRS Accounting Standards) / 3 мес / 2026":
        - /url: /engagements/fabf0c2d-c3fe-4c00-98bb-a34a1122f301/info
        - text: HF
        - paragraph: Happy friday / Аудит / МСФО (IFRS Accounting Standards) / 3 мес / 2026
    - cell "Happy friday"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "structure test!! .A.S.A.SERVICII ECOLOGICE SRL FY25 Создано":
    - cell "structure test!!":
      - link "structure test!!":
        - /url: /engagements/9d751eb0-0fee-4cbf-bb8b-000979378e73/info
        - text: ST
        - paragraph: structure test!!
    - cell ".A.S.A.SERVICII ECOLOGICE SRL"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "ААА УПРАВЛЕНИЕ КАПИТАЛОМ, АО / Аудит / 6 мес / 2025 ААА УПРАВЛЕНИЕ КАПИТАЛОМ, АО FY25 Создано":
    - cell "ААА УПРАВЛЕНИЕ КАПИТАЛОМ, АО / Аудит / 6 мес / 2025":
      - link "ААА УПРАВЛЕНИЕ КАПИТАЛОМ, АО / Аудит / 6 мес / 2025":
        - /url: /engagements/53382a4c-cc27-419b-947f-70e78b0d2d84/info
        - text: АУ
        - paragraph: ААА УПРАВЛЕНИЕ КАПИТАЛОМ, АО / Аудит / 6 мес / 2025
    - cell "ААА УПРАВЛЕНИЕ КАПИТАЛОМ, АО"
    - cell "FY25"
    - cell "Создано"
    - cell
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, trusanova001 } from '../sources/consts/index.js';
   3 | import { SignInPage, EngagmentsPage, CreateEngPage } from '../sources/pages/index.js';
   4 |
   5 | test.describe('Создание стандартных сущностей', () => {
   6 |     test.beforeEach('Переход на главную страницу веб-приложения', async ({ page }) => {
   7 |         const signInPage = new SignInPage(page);
   8 |
   9 |         await signInPage.open(BASE_URL);
  10 |         await signInPage.gotoLoginPage();
  11 |         await signInPage.signInAndEngagementsPage(trusanova001.username, trusanova001.password);
  12 |
  13 |         // await expect(engagmentsPage.createEngButton).toBeVisible();
  14 | });
  15 |
  16 |     /*test('Создание проекта', async ({ page }) => {
  17 |         const engagmentsPage = new EngagmentsPage(page);
  18 |         const createEngPage = new CreateEngPage(page);
  19 |
  20 |         await engagmentsPage.gotoCreateEngPage();
  21 |         await createEngPage.createEngagement();
  22 |         await expect(page.getByRole('button', { name: 'Создать' })).toBeVisible();
  23 |     });
  24 |
  25 |     test('Подписание независимости;', async ({ page }) => {
  26 |         const createEngPage = new CreateEngPage(page);
  27 |
  28 |         await createEngPage.addPromise();
  29 |         await expect(page.getByText('Мы записали ваше подтверждение независимости. Приятной работы')).toBeVisible();
  30 |
  31 |         await createEngPage.gotoEngagementsPage();
  32 |         await expect(page.getByRole('heading', { name: 'Happy friday / Аудит / МСФО (' })).toBeVisible();
  33 |     });*/
  34 |
  35 |     test('Проверка пагинации на странице Engagments', async ({page}) => {
  36 |         const engagmentsPage = new EngagmentsPage(page);
  37 |
  38 |         await engagmentsPage.usePagination();
  39 |
> 40 |         await expect(engagmentsPage.firstPaginationIcon).toContainText('1-50 из 411');
     |                                                          ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  41 |     });
  42 |
  43 | });
  44 |
```