# Test info

- Name: Создание Engagement и работа с ним >> Проверка валидации при попытке создать Engagement с незаполненными полями
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:22:5

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('div.MuiAutocomplete-root.MuiAutocomplete-hasPopupIcon.css-1sinynf p.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.css-142jntl') resolved to 2 elements:
    1) <p class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-142jntl">Обязательно для заполнения</p> aka getByText('Обязательно для заполнения').first()
    2) <p class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-142jntl">Обязательно для заполнения</p> aka getByText('Обязательно для заполнения').nth(1)

Call log:
  - waiting for locator('div.MuiAutocomplete-root.MuiAutocomplete-hasPopupIcon.css-1sinynf p.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.css-142jntl') to be visible

    at CreateEngPage.validateEngEntities (/Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/sources/pages/createEngPage.js:55:41)
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
   7 |         this.departmentField = page.getByRole('combobox', { name: 'Отдел общего аудита' })
   8 |         this.castomNameField = page.getByRole('heading', { name: 'Название проекта*' })
   9 |         this.createEngButton = page.getByRole('button', { name: 'Создать' })
  10 |         this.checkBox = page.getByRole('checkbox')
  11 |         this.promiseButton = page.getByRole('button', { name: 'Подтвердить независимость и подключиться к проекту' })
  12 |         this.continueButton = page.getByRole('button', { name: 'Продолжить' })
  13 |         this.castomEngNameField = page.getByRole('textbox', { name: 'Название клиента / Audit /' })
  14 |         this.clientNameFieldError = page.locator('div.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-feqhe6 p.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.css-eg1xdz');
  15 |         this.departmentFieldError = page.locator('div.MuiAutocomplete-root.MuiAutocomplete-hasPopupIcon.css-1sinynf p.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.css-142jntl');
  16 |         this.castomNameFieldError = page.locator('div.MuiFormControl-root.css-15wf43b p.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.css-eg1xdz');
  17 |     }
  18 |
  19 |     async createEngagement(){
  20 |         await this.clientNameField.click();
  21 |         await this.clientNameField.fill('Happy ');
  22 |         await this.page.getByText('Happy friday').first().click();
  23 |         await this.otdelField.click();
  24 |         await this.page.getByRole('option', { name: 'Отдел аудита финансового сектора' }).click({ force: true });
  25 |         // await this.page.getByRole('button', { name: 'Закрыть' }).click();
  26 |         // await this.page.getByRole('combobox', { name: 'Аудит' }).click();
  27 |         // await this.page.getByRole('option', { name: 'Аудит', exact: true }).click({ force: true });
  28 |         // await this.page.getByRole('button', { name: 'Закрыть' }).click();
  29 |         // await this.page.getByRole('combobox', { name: 'МСФО' }).click();
  30 |         // await this.page.getByRole('option', { name: 'МСФО (IFRS Accounting' }).click({ force: true });
  31 |         // await this.page.getByRole('button', { name: 'Закрыть' }).click();
  32 |         // await this.page.getByRole('combobox', { name: 'год' }).click({ force: true });
  33 |         // await this.page.getByRole('option', { name: '3 мес' }).click({ force: true });
  34 |         // await this.page.getByRole('button', { name: 'Закрыть' }).click();
  35 |         await this.castomEngNameField.click();
  36 |         // await page.getByRole('textbox', { name: 'Название клиента / Audit /' }).press('ArrowDown');
  37 |         await this.castomEngNameField.fill('Тестовый проект');
  38 |         await this.createButton.click();
  39 |     }
  40 |
  41 |     async addPromise(){
  42 |         await this.checkBox.waitFor({ state: 'visible' });
  43 |         await this.checkBox.click();
  44 |         await this.promiseButton.click();
  45 |     }
  46 |
  47 |     async gotoEngagementPage(){
  48 |         await this.checkBox.waitFor({ state: 'visible' });
  49 |         await this.continueButton.click();
  50 |     }
  51 |
  52 |     async validateEngEntities(){
  53 |         await this.createEngButton.click();
  54 |         await this.clientNameFieldError.waitFor({ state: 'visible' });
> 55 |         await this.departmentFieldError.waitFor({ state: 'visible' });
     |                                         ^ Error: locator.waitFor: Error: strict mode violation: locator('div.MuiAutocomplete-root.MuiAutocomplete-hasPopupIcon.css-1sinynf p.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.css-142jntl') resolved to 2 elements:
  56 |         await this.castomNameFieldError.waitFor({ state: 'visible' });
  57 |     }
  58 | }
```