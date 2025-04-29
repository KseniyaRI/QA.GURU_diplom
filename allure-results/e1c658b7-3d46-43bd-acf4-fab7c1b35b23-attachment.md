# Test info

- Name: Переход на главную страницу веб-приложения
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/proxyNgrok.spec.js:5:1

# Error details

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'Back to Application' })

    at StartNgrokPage.gotoLoginPage (/Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/sources/pages/startNgrokPage.js:16:34)
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/proxyNgrok.spec.js:9:5
```

# Test source

```ts
   1 | export class StartNgrokPage{
   2 |     constructor(page){
   3 |         this.page = page;
   4 |         this.visitSiteButton = page.getByRole('button', { name: 'Visit Site' })
   5 |         this.backToAppLink = page.getByRole('link', { name: 'Back to Application' })
   6 |     }
   7 |
   8 |     async open(BASE_URL) {
   9 |         await this.page.goto(BASE_URL);
  10 |     }
  11 |
  12 |     async gotoLoginPage() {
  13 |         await this.visitSiteButton.waitFor({ state: 'attached' });
  14 |         await this.visitSiteButton.waitFor({ state: 'visible' });
  15 |         await this.visitSiteButton.click({ force: true });
> 16 |         await this.backToAppLink.waitFor({ state: 'attached' });
     |                                  ^ Error: locator.waitFor: Test ended.
  17 |         await this.backToAppLink.waitFor({ state: 'visible' });
  18 |         await this.backToAppLink.click({ force: true });
  19 |     }
  20 | }
```