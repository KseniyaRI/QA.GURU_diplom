# Test info

- Name: Переход на главную страницу веб-приложения
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/proxyNgrok.spec.js:6:1

# Error details

```
TimeoutError: locator.click: Timeout 6000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: '« Back to Application' })

    at StartNgrokPage.gotoLoginPage (/Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/sources/pages/startNgrokPage.js:14:34)
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/proxyNgrok.spec.js:11:5
```

# Test source

```ts
   1 | export class StartNgrokPage{
   2 |     constructor(page){
   3 |         this.page = page;
   4 |         this.visitSiteButton = page.getByRole('button', { name: 'Visit Site' })
   5 |         this.backToAppLink = page.getByRole('link', { name: '« Back to Application' })
   6 |     }
   7 |
   8 |     async open(BASE_URL) {
   9 |         await this.page.goto(BASE_URL);
  10 |     }
  11 |
  12 |     async gotoLoginPage() {
  13 |         await this.visitSiteButton.click();
> 14 |         await this.backToAppLink.click();
     |                                  ^ TimeoutError: locator.click: Timeout 6000ms exceeded.
  15 |     }
  16 | }
```