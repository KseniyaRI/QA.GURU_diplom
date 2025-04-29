# Test info

- Name: Создание Engagement и работа с ним >> Проверка валидации при попытке создать Engagement с незаполненными полями
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:22:5

# Error details

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('div:has(div[id="r1-label"]:has-text("Головной клиент")) p.MuiFormHelperText-root.Mui-error:has-text("Обязательно для заполнения")') to be visible

    at CreateEngPage.validateEntities (/Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/sources/pages/createEngPage.js:56:43)
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:27:9
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
- heading "Создание проекта" [level=5]
- button "close"
- paragraph: Заполните данные о проекте. Введенные данные сформируют структурированное название. Оно отразится справа, где его можно редактировать.
- heading "Головной клиент (клиентский код)*" [level=6]
- combobox "Название клиента"
- button "Открыть"
- paragraph: Обязательно для заполнения
- heading "Отдел*" [level=6]
- combobox "Отдел общего аудита"
- button "Открыть"
- paragraph: Обязательно для заполнения
- heading "Вид работ" [level=6]
- combobox "Аудит"
- button "Открыть"
- paragraph
- heading "Стандарты отчетности" [level=6]
- combobox "МСФО"
- button "Открыть"
- paragraph
- heading "Период проверки" [level=6]
- combobox "год"
- button "Открыть"
- paragraph
- heading "Год проверки" [level=6]
- button "2025"
- paragraph
- heading "Название проекта*" [level=6]
- textbox "Название клиента / Audit / IFRS / 3 мес / 2023"
- paragraph: Обязательно для заполнения
- paragraph: Редактируйте название, чтобы оно соответствовало структуре и наполнению проекта
- paragraph: Формулируйте название по предложенному шаблону — это поможет легко ориентироваться в списке проектов
- paragraph: Изменяйте название после создания в любой момент в Информации о проекте
- button "Создать"
```

# Test source

```ts
   1 | // страница создания Engagement
   2 |
   3 | export class CreateEngPage {
   4 |     constructor(page) {
   5 |         this.page = page;
   6 |         this.clientNameField = page.getByRole('combobox', { name: 'Название клиента' })
   7 |         this.otdelField = page.getByRole('combobox', { name: 'Отдел общего аудита' })
   8 |         this.castomNameField = page.getByRole('heading', { name: 'Название проекта*' })
   9 |         this.createEngButton = page.getByRole('button', { name: 'Создать' })
  10 |         this.checkBox = page.getByRole('checkbox')
  11 |         this.promiseButton = page.getByRole('button', { name: 'Подтвердить независимость и подключиться к проекту' })
  12 |         this.continueButton = page.getByRole('button', { name: 'Продолжить' })
  13 |         this.castomEngNameField = page.getByRole('textbox', { name: 'Название клиента / Audit /' })
  14 |         this.headClientRequiredText = page.locator('div:has(div[id="r1-label"]:has-text("Головной клиент")) p.MuiFormHelperText-root.Mui-error:has-text("Обязательно для заполнения")');
  15 |         //this.requiredFieldText = page.locator('p.MuiFormHelperText-root:has-text("Обязательно для заполнения")');
  16 |         this.requiredFieldText2 = page.locator('p.MuiFormHelperText-root:has-text("Обязательно для заполнения")');
  17 |         //<p class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-142jntl">Обязательно для заполнения</p>
  18 |
  19 |     }
  20 |
  21 |     async createEngagement(){
  22 |         await this.clientNameField.click();
  23 |         await this.clientNameField.fill('Happy ');
  24 |         await this.page.getByText('Happy friday').first().click();
  25 |         await this.otdelField.click();
  26 |         await this.page.getByRole('option', { name: 'Отдел аудита финансового сектора' }).click({ force: true });
  27 |         // await this.page.getByRole('button', { name: 'Закрыть' }).click();
  28 |         // await this.page.getByRole('combobox', { name: 'Аудит' }).click();
  29 |         // await this.page.getByRole('option', { name: 'Аудит', exact: true }).click({ force: true });
  30 |         // await this.page.getByRole('button', { name: 'Закрыть' }).click();
  31 |         // await this.page.getByRole('combobox', { name: 'МСФО' }).click();
  32 |         // await this.page.getByRole('option', { name: 'МСФО (IFRS Accounting' }).click({ force: true });
  33 |         // await this.page.getByRole('button', { name: 'Закрыть' }).click();
  34 |         // await this.page.getByRole('combobox', { name: 'год' }).click({ force: true });
  35 |         // await this.page.getByRole('option', { name: '3 мес' }).click({ force: true });
  36 |         // await this.page.getByRole('button', { name: 'Закрыть' }).click();
  37 |         await this.castomEngNameField.click();
  38 |         // await page.getByRole('textbox', { name: 'Название клиента / Audit /' }).press('ArrowDown');
  39 |         await this.castomEngNameField.fill('Тестовый проект');
  40 |         await this.createButton.click();
  41 |     }
  42 |
  43 |     async addPromise(){
  44 |         await this.checkBox.waitFor({ state: 'visible' });
  45 |         await this.checkBox.click();
  46 |         await this.promiseButton.click();
  47 |     }
  48 |
  49 |     async gotoEngagementPage(){
  50 |         await this.checkBox.waitFor({ state: 'visible' });
  51 |         await this.continueButton.click();
  52 |     }
  53 |
  54 |     async validateEntities(){
  55 |         await this.createEngButton.click();
> 56 |         await this.headClientRequiredText.waitFor({ state: 'visible' });
     |                                           ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  57 |     }
  58 | }
```