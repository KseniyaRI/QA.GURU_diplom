# Test info

- Name: Создание Engagement и работа с ним >> Создание Engagement
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:46:5

# Error details

```
Error: locator.selectOption: Error: Element is not a <select> element
Call log:
  - waiting for getByRole('combobox', { name: 'Название клиента' })
    - locator resolved to <input id=":r17:" type="text" name="client" role="combobox" value="26402080" autocomplete="off" spellcheck="false" aria-invalid="false" aria-expanded="false" autocapitalize="none" aria-autocomplete="list" placeholder="Название клиента" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-17oj1m0"/>
  - attempting select option action
    - waiting for element to be visible and enabled

    at CreateEngPage.createEngagement (/Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/sources/pages/createEngPage.js:26:36)
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:52:9
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
- combobox "Название клиента" [expanded]: "26402080"
- button "Закрыть"
- paragraph
- listbox "Головной клиент (клиентский код)*":
  - option "Happy friday 26402080":
    - paragraph: Happy friday
    - paragraph: "26402080"
- heading "Отдел*" [level=6]
- combobox "Отдел общего аудита"
- button "Открыть"
- paragraph
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
- paragraph
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
   8 |         this.typeField = page.getByRole('combobox', { name: 'Аудит' })
   9 |         this.reportingStandardField = page.getByRole('combobox', { name: 'МСФО' })
  10 |         this.verificationPeriodsField = page.getByRole('combobox', { name: 'год' })
  11 |         this.verificationYearField = page.getByRole('combobox', { name: '2025' })
  12 |         this.castomNameField = page.getByRole('heading', { name: 'Название проекта*' })
  13 |         this.createEngButton = page.getByRole('button', { name: 'Создать' })
  14 |         (page.getByText('Мы записали ваше подтверждение независимости. Приятной работы'))
  15 |         this.checkBox = page.getByRole('checkbox')
  16 |         this.promiseButton = page.getByRole('button', { name: 'Подтвердить независимость и подключиться к проекту' })
  17 |         this.continueButton = page.getByRole('button', { name: 'Продолжить' })
  18 |         this.castomEngNameField = page.getByRole('textbox', { name: 'Название клиента / Audit /' })
  19 |         this.clientNameFieldError = page.locator('.MuiGrid-grid-xs-2.css-15j76c0:nth-child(1) p.Mui-error');
  20 |         this.departmentFieldError = page.locator('.MuiGrid-grid-xs-2.css-15j76c0:nth-child(2) p.Mui-error');
  21 |         this.castomNameFieldError = page.locator('p.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.css-eg1xdz');
  22 |     }
  23 |
  24 |     async createEngagement(clientCode, departmentName, type, reportingStandard, verificationPeriods, verificationYear, name){
  25 |         await this.clientNameField.click();
> 26 |         await this.clientNameField.fill(clientCode);
     |                                    ^ Error: locator.selectOption: Error: Element is not a <select> element
  27 |         await this.clientNameField.selectOption('Happy friday');
  28 |         await this.departmentField.click();
  29 |         await this.departmentField.selectOption(departmentName);
  30 |         await this.typeField.click();
  31 |         await this.typeField.selectOption(type);
  32 |         await this.reportingStandardField.click();
  33 |         await this.reportingStandardField.selectOption(reportingStandard);
  34 |         await this.verificationPeriodsField.click({ force: true });
  35 |         await this.verificationPeriodsField.selectOption(verificationPeriods);
  36 |         await this.verificationYearField.click({ force: true });
  37 |         await this.verificationYearField.selectOption(verificationYear);
  38 |         await this.castomEngNameField.click();
  39 |         await this.castomEngNameField.fill(name);
  40 |         await this.createEngButton.click();
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
  54 |     async validateEngEntities(){
  55 |         await this.createEngButton.click();
  56 |         await this.clientNameFieldError.waitFor({ state: 'visible' });
  57 |         await this.departmentFieldError.waitFor({ state: 'visible' });
  58 |         await this.castomNameFieldError.waitFor({ state: 'visible' });
  59 |     }
  60 | }
```