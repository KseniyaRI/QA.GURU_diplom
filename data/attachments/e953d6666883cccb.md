# Test info

- Name: Переход на главную страницу веб-приложения
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/authUser.spec.js:6:1

# Error details

```
Error: expect(locator).toBeVisible()

Locator: getByText('Код Аудита')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByText('Код Аудита')

    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/authUser.spec.js:16:48
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
- paragraph: 1–50 из 405
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
    - cell:
      - button:
        - paragraph
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
  - row "[RD - Showroom] Happy friday / Аудит / МСФО (IFRS Accounting Standards) / 12 мес / 2024 Happy friday FY25 Создано":
    - cell "[RD - Showroom] Happy friday / Аудит / МСФО (IFRS Accounting Standards) / 12 мес / 2024":
      - link "[RD - Showroom] Happy friday / Аудит / МСФО (IFRS Accounting Standards) / 12 мес / 2024":
        - /url: /engagements/d4e7b3b3-a8f1-4410-ba08-2e70203ca474/info
        - text: RS
        - paragraph: "[RD - Showroom] Happy friday / Аудит / МСФО (IFRS Accounting Standards) / 12 мес / 2024"
    - cell "Happy friday"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "Тест ЦПЭБ \"ДЖЕЙНЕТИКС СОФТВЕР\" ООО FY25 Создано":
    - cell "Тест ЦПЭБ":
      - link "Тест ЦПЭБ":
        - /url: /engagements/b72db0a6-da98-4270-981d-67ac5562cb15/info
        - text: ТЦ
        - paragraph: Тест ЦПЭБ
    - cell "\"ДЖЕЙНЕТИКС СОФТВЕР\" ООО"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "3i Infotech Limited 3i Infotech Limited FY25 Создано":
    - cell "3i Infotech Limited":
      - link "3i Infotech Limited":
        - /url: /engagements/dad23a1a-6171-4cf9-bb48-2704c753a72d/info
        - text: 3I
        - paragraph: 3i Infotech Limited
    - cell "3i Infotech Limited"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "The Swatch Group AG / Аудит / МСФО, РСБУ / 6 мес / 2020 ййй THE SWATCH GROUP, AG FY25 Создано":
    - cell "The Swatch Group AG / Аудит / МСФО, РСБУ / 6 мес / 2020 ййй":
      - link "The Swatch Group AG / Аудит / МСФО, РСБУ / 6 мес / 2020 ййй":
        - /url: /engagements/48d31a5c-1e90-4850-ac5c-4b803eb8b0e0/info
        - text: TS
        - paragraph: The Swatch Group AG / Аудит / МСФО, РСБУ / 6 мес / 2020 ййй
    - cell "THE SWATCH GROUP, AG"
    - cell "FY25"
    - cell "Создано"
    - cell
  - row "Тестовый проект -Лёша КАМЧАТСКЭНЕРГО, ПАО FY25 Создано":
    - cell "Тестовый проект -Лёша":
      - link "Тестовый проект -Лёша":
        - /url: /engagements/15f75954-199d-43c2-b4de-25cc989cfc24/info
        - text: ТП
        - paragraph: Тестовый проект -Лёша
    - cell "КАМЧАТСКЭНЕРГО, ПАО"
    - cell "FY25"
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
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, trusanova001, kperchatki004 } from '../sources/consts/index.js';
   3 | //import { NoteBuilder,  NameEngBuilder,  DeliverableBuilder } from '../sources/builders/index.js';
   4 | import { SignInPage, StartNgrokPage } from '../sources/pages/index.js';
   5 |
   6 | test('Переход на главную страницу веб-приложения', async ({page}) => {
   7 |     //const startNgrokPage = new StartNgrokPage;
   8 |     const signInPage = new SignInPage(page);
   9 |
  10 |     //await startNgrokPage.open(BASE_URL);
  11 |     //await startNgrokPage.gotoLoginPage();
  12 |     //await page.goto(BASE_URL);
  13 |     await signInPage.open(BASE_URL);
  14 |     //await signInPage.gotoLoginPage();
  15 |     await signInPage.signInAndEngagementsPage(trusanova001.username, trusanova001.password); 
> 16 |     await expect(page.getByText('Код Аудита')).toBeVisible();
     |                                                ^ Error: expect(locator).toBeVisible()
  17 | });
  18 |   
```