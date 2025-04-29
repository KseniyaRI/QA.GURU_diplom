# Test info

- Name: Создание Engagement и работа с ним >> Просмотр информации о пользователе
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:58:5

# Error details

```
Error: locator.click: Unexpected token ":" while parsing css selector "button.MuiButton-textPrimary::text". Did you mean to CSS.escape it?
Call log:
  - waiting for button.MuiButton-textPrimary::text

    at EngagementsPage.userInfoBlock (/Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/sources/pages/engagementsPage.js:44:35)
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:61:31
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
  - row "urgently violently ripe why why Happy friday FY26 Создано":
    - cell "urgently violently ripe why why":
      - link "urgently violently ripe why why":
        - /url: /engagements/3abd6b2c-85d2-4885-bd4b-ec3be5d444d8/info
        - text: UV
        - paragraph: urgently violently ripe why why
    - cell "Happy friday"
    - cell "FY26"
    - cell "Создано"
    - cell
  - row "Проект Ксюши_2 ЛИТРЕС, ООО FY22 Создано":
    - cell "Проект Ксюши_2":
      - link "Проект Ксюши_2":
        - /url: /engagements/4ac54518-a1da-4a77-8256-adfb9e1dc3c7/info
        - text: ПК
        - paragraph: Проект Ксюши_2
    - cell "ЛИТРЕС, ООО"
    - cell "FY22"
    - cell "Создано"
    - cell
  - row "Аудит Задание 002 Ко-Инвестмент Партнершип V, Л.П. FY25 Создано":
    - cell "Аудит Задание 002":
      - link "Аудит Задание 002":
        - /url: /engagements/d1ed3cfb-34a1-4bde-8ec8-28b94019b61d/info
        - text: АЗ
        - paragraph: Аудит Задание 002
    - cell "Ко-Инвестмент Партнершип V, Л.П."
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
    - cell:
      - button:
        - paragraph
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
```

# Test source

```ts
   1 | // страница списка Engagements
   2 |
   3 | export class EngagementsPage{
   4 |     constructor(page) {
   5 |         this.page = page;
   6 |         this.createEngButton = page.getByRole('link', { name: 'Создать проект' })
   7 |         this.arrowPaginationRight = page.locator('[data-testid="KeyboardArrowRightIcon"]')
   8 |         this.arrowPaginationLeft = page.locator('[data-testid="KeyboardArrowLeftIcon"]')
   9 |         this.firstPaginationIcon = page.locator('p.MuiTablePagination-displayedRows')
  10 |         this.financialYearHeader = page.getByRole('columnheader', { name: 'Финансовый год' });
  11 |         this.fy22Element = page.locator('div[role="cell"][data-field="financialYear"]:has-text("FY24")').first()
  12 |         this.clientCodeFilter = page.getByRole('combobox', { name: 'Головной клиент (клиентский код)' })
  13 |         //this.usernameButton = page.locator('button.MuiButton-textPrimary');
  14 |         this.usernameButton = page.locator('button.MuiButton-textPrimary::text');
  15 |         this.dropDownUserData = page.locator('p.MuiTypography-root.MuiTypography-body1.css-113rmp3');
  16 |         page.locator('div[data-rowindex="0"] div[data-field="actions"]');
  17 |         this.dropDownEng = page.getByRole('menuitem', { name: 'Список событий' })
  18 |         this.dropDownEngLogs = page.getByRole('heading', { name: 'Список событий' })
  19 |         this.hoverGridCell = page.getByRole('gridcell');
  20 |     }
  21 |
  22 |     // переход на страницу создания сущности Engagment
  23 |     async gotoCreateEngPage() {
  24 |         await this.createEngButton.waitFor({ state: 'attached' });
  25 |         await this.createEngButton.waitFor({ state: 'visible' });
  26 |         await this.createEngButton.click();
  27 |     }
  28 |
  29 |     // проверка работы стрелок пагинации
  30 |     async usePagination() {
  31 |         await this.arrowPaginationRight.click();
  32 |         await this.arrowPaginationLeft.click();
  33 |     }
  34 |
  35 |     // переход на страницу Engagement logs
  36 |     async gotoEngagementLogsPage() {
  37 |         await this.hoverGridCell.click({ focusable: true });
  38 |         await this.dropDownEng.click();
  39 |         await this.dropDownEngLogs.click();
  40 |     }
  41 |
  42 |     // просмотр информации о пользователе
  43 |     async userInfoBlock() {
> 44 |         await this.usernameButton.click();
     |                                   ^ Error: locator.click: Unexpected token ":" while parsing css selector "button.MuiButton-textPrimary::text". Did you mean to CSS.escape it?
  45 |     }
  46 | }
```