# Test info

- Name: Создание Engagement и работа с ним >> Создание Engagement
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:45:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('option', { name: 'Happy friday' })

    at CreateEngPage.createEngagement (/Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/sources/pages/createEngPage.js:28:71)
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:51:9
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
   8 |         this.typeField = page.getByRole('combobox', { name: 'Аудит' })
   9 |         this.reportingStandardField = page.getByRole('combobox', { name: 'МСФО' })
  10 |         this.verificationPeriodsField = page.getByRole('combobox', { name: 'год' })
  11 |         this.verificationYearField = page.getByRole('button', { name: '2025' })
  12 |         this.createEngButton = page.getByRole('button', { name: 'Создать' })
  13 |         this.doneEngMessage = page.getByText('Мы записали ваше подтверждение независимости. Приятной работы')
  14 |         this.checkBox = page.getByRole('checkbox')
  15 |         this.promiseButton = page.getByRole('button', { name: 'Подтвердить независимость и подключиться к проекту' })
  16 |         this.continueButton = page.getByRole('button', { name: 'Продолжить' })
  17 |         this.customEngNameField = page.getByRole('textbox', { name: 'Название клиента / Audit /' })
  18 |         this.clientNameFieldError = page.locator('.MuiGrid-grid-xs-2.css-15j76c0:nth-child(1) p.Mui-error');
  19 |         this.departmentFieldError = page.locator('.MuiGrid-grid-xs-2.css-15j76c0:nth-child(2) p.Mui-error');
  20 |         this.customNameFieldError = page.locator('p.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.css-eg1xdz');
  21 |     }
  22 |
  23 |     async createEngagement(name, clientCode, departmentName, type, reportingStandard, verificationPeriods, verificationYear){
  24 |         //await this.customEngNameField.click();
  25 |         //await this.customEngNameField.fill(name);
  26 |         await this.clientNameField.click();
  27 |         await this.clientNameField.fill(clientCode);
> 28 |         await this.page.getByRole('option', { name: 'Happy friday' }).click();
     |                                                                       ^ Error: locator.click: Test ended.
  29 |         await this.departmentField.click();
  30 |         await this.page.getByRole('option', { name: departmentName }).click();
  31 |         await this.typeField.click();
  32 |         await this.page.getByRole('option', { name: type }).click();
  33 |         await this.reportingStandardField.click();
  34 |         await this.page.getByRole('option', { name: reportingStandard }).click();
  35 |         await this.verificationPeriodsField.click({ force: true });
  36 |         await this.page.getByRole('option', { name: verificationPeriods }).click();
  37 |         await this.verificationYearField.click({ force: true });
  38 |         await this.page.getByRole('option', { name: verificationYear }).click();
  39 |         await this.createEngButton.click();
  40 |     }
  41 |
  42 |     async addPromise(){
  43 |         await this.checkBox.waitFor({ state: 'visible' });
  44 |         await this.checkBox.click();
  45 |         await this.promiseButton.click();
  46 |     }
  47 |
  48 |     async gotoEngagementPage(){
  49 |         await this.checkBox.waitFor({ state: 'visible' });
  50 |         await this.continueButton.click();
  51 |     }
  52 |
  53 |     async validateEngEntities(){
  54 |         await this.createEngButton.click();
  55 |         await this.clientNameFieldError.waitFor({ state: 'visible' });
  56 |         await this.departmentFieldError.waitFor({ state: 'visible' });
  57 |         await this.customNameFieldError.waitFor({ state: 'visible' });
  58 |     }
  59 | }
```