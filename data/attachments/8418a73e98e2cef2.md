# Test info

- Name: Создание Engagement и работа с ним >> Подписание независимости
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:65:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByRole('textbox', { name: 'Название клиента / Audit /' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByRole('textbox', { name: 'Название клиента / Audit /' })

    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:96:54
```

# Page snapshot

```yaml
- banner:
  - button:
    - paragraph
  - link:
    - /url: /
    - img
  - button "0"
  - button
  - button "TR Tatiana Rusanova"
- text: SC
- button:
  - paragraph
- menu:
  - menuitem
  - menuitem
  - menuitem
  - menuitem
  - menuitem
  - menuitem
  - menuitem
  - menuitem
  - menuitem
  - menuitem
  - menuitem
- separator
- button "Развернуть меню"
- paragraph
- paragraph: Укажите руководителя проекта на странице «Группа по проекту» для того, чтобы начать работать с проектом
- button "Группа по проекту"
- navigation "breadcrumb":
  - list:
    - listitem:
      - link "Проекты":
        - /url: /engagements
    - listitem:
      - link "shudder crushing remark rapidly ew":
        - /url: /engagements/0ca69d39-f65b-469c-8c09-90e53b195199/info
    - listitem: Информация о проекте
- heading "Информация о проекте" [level=5]
- heading "Головной клиент (клиентский код)*" [level=6]
- combobox: Happy friday
- button "Открыть"
- paragraph: "Клиентский код: 26402080"
- heading "Отдел*" [level=6]
- combobox: Отдел аудита финансового сектора
- button "Открыть"
- paragraph
- heading "Вид работ" [level=6]
- button "Согласованные"
- combobox
- button "Открыть"
- paragraph
- heading "Стандарты отчетности" [level=6]
- button "УП Группы"
- combobox
- button "Открыть"
- paragraph
- heading "Период проверки" [level=6]
- button "3 мес"
- combobox
- button "Открыть"
- heading "Год проверки" [level=6]
- button "2025"
- heading "Финансовый год" [level=6]
- button "FY25"
- text: SC
- heading "Название проекта*" [level=6]
- button "Сгенерировать название"
- textbox: shudder crushing remark rapidly ew
- paragraph
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, USERNAME, PASSWORD, CLIENT_CODE } from '../sources/consts/index.js';
   3 | import { SignInPage, EngagementsPage, CreateEngPage, EngagementPage, PromisePage } from '../sources/pages/index.js';
   4 | import { EngagementBuilder } from '../sources/builders/engagement.builder.js';
   5 |
   6 | // добавляем данные юзера для авторизации
   7 | const USER_DATA = {
   8 |   password: PASSWORD,
   9 |   username: USERNAME
   10 | };
   11 |
   12 | // добавляем атрибуты нового Engagement
   13 | const engagementBuilder = new EngagementBuilder()
   14 |       .addCustomName()
   15 |       .addDepartmentName()
   16 |       .addType()
   17 |       .addReportingStandard()
   18 |       .addVerificationPeriods()
   19 |       .addVerificationYear()
   20 |       .createEngagement()
   21 |
   22 | test.describe('Создание Engagement и работа с ним', () => {
   23 |     test.beforeEach('Переход на главную страницу веб-приложения', async ({ page }) => {
   24 |         const signInPage = new SignInPage(page);
   25 |         const engagementsPage = new EngagementsPage(page);
   26 |
   27 |         await signInPage.open(BASE_URL);
   28 |         await signInPage.signInAndEngagementsPage(USER_DATA.username, USER_DATA.password);
   29 |
   30 |         await expect(engagementsPage.createEngLink).toBeVisible();
   31 |     });
   32 |
   33 |     test('Проверка валидации при попытке создать Engagement с незаполненными полями', async ({ page }) => {
   34 |         const engagementsPage = new EngagementsPage(page);
   35 |         const createEngPage = new CreateEngPage(page);
   36 |
   37 |         await engagementsPage.gotoCreateEngPage();
   38 |         await createEngPage.validateEngEntities();
   39 |
   40 |         expect(createEngPage.clientNameFieldError).toContainText('Обязательно для заполнения');
   41 |         expect(createEngPage.departmentFieldError).toContainText('Обязательно для заполнения');
   42 |         expect(createEngPage.customNameFieldError).toContainText('Обязательно для заполнения');
   43 |     });
   44 |
   45 |     test('Создание Engagement', async ({ page }) => {
   46 |         const engagementsPage = new EngagementsPage(page);
   47 |         const createEngPage = new CreateEngPage(page);
   48 |         const promisePage = new PromisePage(page);
   49 |
   50 |         await engagementsPage.gotoCreateEngPage();
   51 |         await createEngPage.createEngagement(
   52 |             engagementBuilder.name,
   53 |             CLIENT_CODE,
   54 |             engagementBuilder.departmentName,
   55 |             engagementBuilder.type,
   56 |             engagementBuilder.reportingStandard,
   57 |             engagementBuilder.verificationPeriods,
   58 |             engagementBuilder.verificationYear
   59 |         );
   60 |
   61 |         expect(promisePage.promiseButton).toBeVisible();
   62 |         expect(promisePage.welcomeMessage).toBeVisible();    
   63 |     });
   64 |
   65 |     test('Подписание независимости', async ({ page }) => {
   66 |         const engagementsPage = new EngagementsPage(page);
   67 |         const createEngPage = new CreateEngPage(page);
   68 |         const promisePage = new PromisePage(page);
   69 |         const engagementPage = new EngagementPage(
   70 |             page, 
   71 |             engagementBuilder.name,
   72 |             CLIENT_CODE,
   73 |             engagementBuilder.departmentName,
   74 |             engagementBuilder.type,
   75 |             engagementBuilder.reportingStandard,
   76 |             engagementBuilder.verificationPeriods,
   77 |             engagementBuilder.verificationYear
   78 |         );
   79 |
   80 |         await engagementsPage.gotoCreateEngPage();
   81 |         await createEngPage.createEngagement(
   82 |             engagementBuilder.name,
   83 |             CLIENT_CODE,
   84 |             engagementBuilder.departmentName,
   85 |             engagementBuilder.type,
   86 |             engagementBuilder.reportingStandard,
   87 |             engagementBuilder.verificationPeriods,
   88 |             engagementBuilder.verificationYear
   89 |         );
   90 |
   91 |         await promisePage.addPromise();
   92 |         await expect(promisePage.doneEngMessage).toBeVisible();
   93 |
   94 |         await promisePage.gotoEngagementPage();
   95 |         await expect(engagementPage.clientCodeInfo).toBeVisible();
>  96 |         await expect(engagementPage.customNameField).toBeVisible();
      |                                                      ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
   97 |         //await expect(engagementPage.clientCodeInfo).toContainText(`Клиентский код: ${CLIENT_CODE}`);
   98 |         //await expect(engagementPage.customNameField).toContainText(engagementBuilder.customNameEng);
   99 |     });
  100 |
  101 |     test('Проверка пагинации на странице Engagements', async ({ page }) => {
  102 |         const engagementsPage = new EngagementsPage(page);
  103 |
  104 |         await engagementsPage.usePagination();
  105 |
  106 |         await expect(engagementsPage.firstPaginationIcon).toContainText('1–50 из 411');
  107 |     });
  108 |
  109 |     test('Переход на страницу списка запросов (логов) Engagement', async ({ page }) => {
  110 |         const engagementsPage = new EngagementsPage(page);
  111 |
  112 |         await engagementsPage.gotoEngagementLogsPage();
  113 |
  114 |         await expect(engagementsPage.dropDownEngLogs).toBeVisible(); 
  115 |     });
  116 | });
```