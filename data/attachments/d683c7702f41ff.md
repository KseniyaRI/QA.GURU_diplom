# Test info

- Name: Создание стандартных сущностей >> Переход на страницу списка запросов (логов) Engagement
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:50:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('gridcell')

    at EngagementsPage.gotoEngagementLogsPage (/Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/sources/pages/engagementsPage.js:35:34)
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:53:31
```

# Test source

```ts
   1 | // список Engagements
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
  13 |         this.usernameButton = page.locator('button:has(.MuiAvatar-circular)');
  14 |         this.dropDownUserData = page.locator('.MuiStack-root > p.MuiTypography-body1')
  15 |         this.dropDownEng = page.getByRole('menuitem', { name: 'Список событий' })
  16 |         this.dropDownEngLogs = page.getByRole('heading', { name: 'Список событий' })
  17 |         this.hoverGridCell = page.getByRole('gridcell');
  18 |     }
  19 |
  20 |     // переход на страницу создания сущности Engagment
  21 |     async gotoCreateEngPage() {
  22 |         await this.createEngButton.waitFor({ state: 'attached' });
  23 |         await this.createEngButton.waitFor({ state: 'visible' });
  24 |         await this.createEngButton.click();
  25 |     }
  26 |
  27 |     // проверка работы стрелок пагинации
  28 |     async usePagination() {
  29 |         await this.arrowPaginationRight.click();
  30 |         await this.arrowPaginationLeft.click();
  31 |     }
  32 |
  33 |     // переход на страницу Engagement logs
  34 |     async gotoEngagementLogsPage() {
> 35 |         await this.hoverGridCell.click({ focusable: true });
     |                                  ^ Error: locator.click: Target page, context or browser has been closed
  36 |         await this.dropDownEng.click();
  37 |         await this.dropDownEngLogs.click();
  38 |     }
  39 |
  40 |     // просмотр информации о пользователе
  41 |     async userInfoBlock() {
  42 |         await this.usernameButton.click();
  43 |         await this.dropDownUserData.click();
  44 |     }
  45 | }
```