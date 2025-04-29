# Test info

- Name: Создание Engagement и работа с ним >> Переход на страницу списка запросов (логов) Engagement
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:50:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('gridcell')

    at EngagementsPage.gotoEngagementLogsPage (/Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/sources/pages/engagementsPage.js:32:34)
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:53:31
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
  10 |
  11 |         page.locator('div[data-rowindex="0"] div[data-field="actions"]');
  12 |         this.dropDownEng = page.getByRole('menuitem', { name: 'Список событий' })
  13 |         this.dropDownEngLogs = page.getByRole('heading', { name: 'Список событий' })
  14 |         this.hoverGridCell = page.getByRole('gridcell');
  15 |     }
  16 |
  17 |     // переход на страницу создания сущности Engagment
  18 |     async gotoCreateEngPage() {
  19 |         await this.createEngButton.waitFor({ state: 'attached' });
  20 |         await this.createEngButton.waitFor({ state: 'visible' });
  21 |         await this.createEngButton.click();
  22 |     }
  23 |
  24 |     // проверка работы стрелок пагинации
  25 |     async usePagination() {
  26 |         await this.arrowPaginationRight.click();
  27 |         await this.arrowPaginationLeft.click();
  28 |     }
  29 |
  30 |     // переход на страницу Engagement logs
  31 |     async gotoEngagementLogsPage() {
> 32 |         await this.hoverGridCell.click({ focusable: true });
     |                                  ^ Error: locator.click: Test ended.
  33 |         await this.dropDownEng.click();
  34 |         await this.dropDownEngLogs.click();
  35 |     }
  36 |
  37 |     // просмотр информации о пользователе
  38 |     async userInfoBlock() {
  39 |         await this.usernameButton.click();
  40 |     }
  41 | }
```