# Test info

- Name: Создание стандартных сущностей >> Проверка работы сортировки по столбцу Финансовый год
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/authUser.spec.js:43:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('cell', { name: 'FY22' }).filter({ has: locator('[data-field="financialYear"]') })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('cell', { name: 'FY22' }).filter({ has: locator('[data-field="financialYear"]') })

    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/authUser.spec.js:48:50
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
      - columnheader "Финансовый год":
        - text: Финансовый год
        - button "Сортировать"
      - columnheader "Статус"
      - columnheader
  - row "Reliance Industries Limited / Аудит, Уверенность / МСФО / 3 мес / 2023 fff CCC SA FY22 Создано":
    - cell "Reliance Industries Limited / Аудит, Уверенность / МСФО / 3 мес / 2023 fff":
      - link "Reliance Industries Limited / Аудит, Уверенность / МСФО / 3 мес / 2023 fff":
        - /url: /engagements/7e055082-2a00-47f3-b0e5-fe329c14a57c/info
        - text: RI
        - paragraph: Reliance Industries Limited / Аудит, Уверенность / МСФО / 3 мес / 2023 fff
    - cell "CCC SA"
    - cell "FY22"
    - cell "Создано"
    - cell
  - row "Longham Management Service Ltd / Обзорная, Аудит / РСБУ / 3 мес / 2023 Longham Management Service Ltd FY22 Создано":
    - cell "Longham Management Service Ltd / Обзорная, Аудит / РСБУ / 3 мес / 2023":
      - link "Longham Management Service Ltd / Обзорная, Аудит / РСБУ / 3 мес / 2023":
        - /url: /engagements/9061fec3-749c-4dd0-9859-f3f33964b687/info
        - text: LM
        - paragraph: Longham Management Service Ltd / Обзорная, Аудит / РСБУ / 3 мес / 2023
    - cell "Longham Management Service Ltd"
    - cell "FY22"
    - cell "Создано"
    - cell
  - row "Campina OOO ООО \"Макдональдс Глобал Маркетс\" FY22 Создано":
    - cell "Campina OOO":
      - link "Campina OOO":
        - /url: /engagements/0b8852c8-b850-4c32-93e0-681f883be12e/info
        - text: CO
        - paragraph: Campina OOO
    - cell "ООО \"Макдональдс Глобал Маркетс\""
    - cell "FY22"
    - cell "Создано"
    - cell
  - row "ООО «Ксантер Фарма» / Обзорная / РСБУ, МСФО / 12 мес / 2021 ООО «Ксантер Фарма» FY23 Создано":
    - cell "ООО «Ксантер Фарма» / Обзорная / РСБУ, МСФО / 12 мес / 2021":
      - link "ООО «Ксантер Фарма» / Обзорная / РСБУ, МСФО / 12 мес / 2021":
        - /url: /engagements/93e88306-244b-4cd5-b08c-08b53d034f80/info
        - text: ОК
        - paragraph: ООО «Ксантер Фарма» / Обзорная / РСБУ, МСФО / 12 мес / 2021
    - cell "ООО «Ксантер Фарма»"
    - cell "FY23"
    - cell "Создано"
    - cell
  - row "ООО «Виальто Партнерс Италия» / Аудит / РСБУ / 6 мес / 2023 ООО «Виальто Партнерс Италия» FY23 Создано":
    - cell "ООО «Виальто Партнерс Италия» / Аудит / РСБУ / 6 мес / 2023":
      - link "ООО «Виальто Партнерс Италия» / Аудит / РСБУ / 6 мес / 2023":
        - /url: /engagements/e8b83afa-caa6-4d36-b8eb-bac8058919f3/info
        - text: ОВ
        - paragraph: ООО «Виальто Партнерс Италия» / Аудит / РСБУ / 6 мес / 2023
    - cell "ООО «Виальто Партнерс Италия»"
    - cell "FY23"
    - cell "Создано"
    - cell
  - row "МК ООО \"ГАЗПРОМ ИНТЕРНЭШНЛ ЛИМИТЕД\" / Аудит / МСФО / 1 год / 2023 ГАЗПРОМ ИНТЕРНЭШНЛ ЛИМИТЕД, МКООО FY23 Создано":
    - cell "МК ООО \"ГАЗПРОМ ИНТЕРНЭШНЛ ЛИМИТЕД\" / Аудит / МСФО / 1 год / 2023":
      - link "МК ООО \"ГАЗПРОМ ИНТЕРНЭШНЛ ЛИМИТЕД\" / Аудит / МСФО / 1 год / 2023":
        - /url: /engagements/b27bac40-28c9-4275-a369-ee01224d3b17/info
        - text: МО
        - paragraph: МК ООО "ГАЗПРОМ ИНТЕРНЭШНЛ ЛИМИТЕД" / Аудит / МСФО / 1 год / 2023
    - cell "ГАЗПРОМ ИНТЕРНЭШНЛ ЛИМИТЕД, МКООО"
    - cell "FY23"
    - cell "Создано"
    - cell
  - row "ПрайсвотерхаусКуперс Такс энд Лигал С.Л. / ОПБУ США / 1 год / 2022 ПрайсвотерхаусКуперс Такс энд Лигал С.Л. FY23 Создано":
    - cell "ПрайсвотерхаусКуперс Такс энд Лигал С.Л. / ОПБУ США / 1 год / 2022":
      - link "ПрайсвотерхаусКуперс Такс энд Лигал С.Л. / ОПБУ США / 1 год / 2022":
        - /url: /engagements/31ed4e36-3ade-4406-8e04-f778a1e8cbcb/info
        - text: ПТ
        - paragraph: ПрайсвотерхаусКуперс Такс энд Лигал С.Л. / ОПБУ США / 1 год / 2022
    - cell "ПрайсвотерхаусКуперс Такс энд Лигал С.Л."
    - cell "FY23"
    - cell "Создано"
    - cell
  - row "Джонатан Ховард Хайнс / Аудит / МСФО, РСБУ / 1 год / 2023 Джонатан Ховард Хайнс FY23 Создано":
    - cell "Джонатан Ховард Хайнс / Аудит / МСФО, РСБУ / 1 год / 2023":
      - link "Джонатан Ховард Хайнс / Аудит / МСФО, РСБУ / 1 год / 2023":
        - /url: /engagements/83133041-e8f3-4554-8ee4-d686c6eb0f0d/info
        - text: ДХ
        - paragraph: Джонатан Ховард Хайнс / Аудит / МСФО, РСБУ / 1 год / 2023
    - cell "Джонатан Ховард Хайнс"
    - cell "FY23"
    - cell "Создано"
    - cell
  - row "Ко-Инвестмент Партнершип V, Л.П. / Аудит / МСФО / 1 год / 2023 Ко-Инвестмент Партнершип V, Л.П. FY23 Создано":
    - cell "Ко-Инвестмент Партнершип V, Л.П. / Аудит / МСФО / 1 год / 2023":
      - link "Ко-Инвестмент Партнершип V, Л.П. / Аудит / МСФО / 1 год / 2023":
        - /url: /engagements/5d898dd2-fc2a-4962-8adf-1c6e87dfde56/info
        - text: КИ
        - paragraph: Ко-Инвестмент Партнершип V, Л.П. / Аудит / МСФО / 1 год / 2023
    - cell "Ко-Инвестмент Партнершип V, Л.П."
    - cell "FY23"
    - cell "Создано"
    - cell
  - row "Для отладки создания задания ГАЗПРОМ ИНТЕРНЭШНЛ ЛИМИТЕД, МКООО FY23 Создано":
    - cell "Для отладки создания задания":
      - link "Для отладки создания задания":
        - /url: /engagements/8b3c2357-dd05-4885-8a3e-9eb1e9ec0f51/info
        - text: ДО
        - paragraph: Для отладки создания задания
    - cell "ГАЗПРОМ ИНТЕРНЭШНЛ ЛИМИТЕД, МКООО"
    - cell "FY23"
    - cell "Создано"
    - cell
  - row "Филиал частной компании с ограниченной ответственностью «Газпром ЭП Интернэшнл Сервисиз Б.В.», в г. Санкт-Петербург / Уверенность, Аудит, Согласованные, Заданные, Обзорная / МСФО, ОСБУ, УП Группы, МСФО и ОСБУ, ОПБУ США, РСБУ / 6 мес, 9 мес, 12 мес, 3 мес / 2022 Филиал частной компании с ограниченной ответственностью «Газпром ЭП Интернэшнл Сервисиз Б.В.», в г. Санкт-Петербург FY24 Создано":
    - cell "Филиал частной компании с ограниченной ответственностью «Газпром ЭП Интернэшнл Сервисиз Б.В.», в г. Санкт-Петербург / Уверенность, Аудит, Согласованные, Заданные, Обзорная / МСФО, ОСБУ, УП Группы, МСФО и ОСБУ, ОПБУ США, РСБУ / 6 мес, 9 мес, 12 мес, 3 мес / 2022":
      - link "Филиал частной компании с ограниченной ответственностью «Газпром ЭП Интернэшнл Сервисиз Б.В.», в г. Санкт-Петербург / Уверенность, Аудит, Согласованные, Заданные, Обзорная / МСФО, ОСБУ, УП Группы, МСФО и ОСБУ, ОПБУ США, РСБУ / 6 мес, 9 мес, 12 мес, 3 мес / 2022":
        - /url: /engagements/35fab7e4-7429-4649-964d-8a347ebe9671/info
        - text: ФЧ
        - paragraph: Филиал частной компании с ограниченной ответственностью «Газпром ЭП Интернэшнл Сервисиз Б.В.», в г. Санкт-Петербург / Уверенность, Аудит, Согласованные, Заданные, Обзорная / МСФО, ОСБУ, УП Группы, МСФО и ОСБУ, ОПБУ США, РСБУ / 6 мес, 9 мес, 12 мес, 3 мес / 2022
    - cell "Филиал частной компании с ограниченной ответственностью «Газпром ЭП Интернэшнл Сервисиз Б.В.», в г. Санкт-Петербург"
    - cell "FY24"
    - cell "Создано"
    - cell
  - row "Чжэцзян Валтек Пламинг Эквипмент Ко. Лдт / Аудит, Заданные / МСФО / 6 мес / 2023 iTech Capital FY24 Создано":
    - cell "Чжэцзян Валтек Пламинг Эквипмент Ко. Лдт / Аудит, Заданные / МСФО / 6 мес / 2023":
      - link "Чжэцзян Валтек Пламинг Эквипмент Ко. Лдт / Аудит, Заданные / МСФО / 6 мес / 2023":
        - /url: /engagements/29706d62-2cd9-428a-9d79-15fd7051cc63/info
        - text: ЧВ
        - paragraph: Чжэцзян Валтек Пламинг Эквипмент Ко. Лдт / Аудит, Заданные / МСФО / 6 мес / 2023
    - cell "iTech Capital"
    - cell "FY24"
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
  35 |     test('Проверка пагинации на странице Engagments', async ({ page }) => {
  36 |         const engagmentsPage = new EngagmentsPage(page);
  37 |
  38 |         await engagmentsPage.usePagination();
  39 |
  40 |         await expect(engagmentsPage.firstPaginationIcon).toContainText('1–50 из 411');
  41 |     });
  42 |
  43 |     test('Проверка работы сортировки по столбцу Финансовый год', async ({ page }) => {
  44 |         const engagmentsPage = new EngagmentsPage(page);
  45 |
  46 |         await engagmentsPage.useSorting();
  47 |
> 48 |         await expect(engagmentsPage.fy22Element).toBeVisible();
     |                                                  ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  49 | });
  50 | });
  51 |
```