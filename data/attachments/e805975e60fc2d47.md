# Test info

- Name: Создание стандартных сущностей >> Создание проекта
- Location: /home/runner/work/QA.GURU_diplom/QA.GURU_diplom/specs/authUser.spec.js:16:5

# Error details

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Visit Site' })

    at StartNgrokPage.gotoLoginPage (/home/runner/work/QA.GURU_diplom/QA.GURU_diplom/sources/pages/startNgrokPage.js:13:36)
    at /home/runner/work/QA.GURU_diplom/QA.GURU_diplom/specs/authUser.spec.js:12:30
```

# Page snapshot

```yaml
- main:
  - heading "ERR_NGROK_3200" [level=1]
  - paragraph: The endpoint 8f7a-46-36-217-190.ngrok-free.app is offline.
  - link "Get help with this error":
    - /url: https://ngrok.com/docs/errors/err_ngrok_3200/?endpoint_url=https%3A%2F%2F8f7a-46-36-217-190.ngrok-free.app
  - heading "If you're the developer of this page" [level=2]
  - paragraph:
    - text: Check out the docs to get
    - link "help with this error":
      - /url: https://ngrok.com/docs/errors/err_ngrok_3200/?endpoint_url=https%3A%2F%2F8f7a-46-36-217-190.ngrok-free.app
    - text: .
  - heading "If you're a visitor of this page" [level=2]
  - paragraph:
    - text: Wait a few minutes and
    - button "refresh the page"
    - text: . If that still doesn't work, please contact the developer of this page for more information.
- contentinfo:
  - text: Powered by
  - link "ngrok":
    - /url: https://ngrok.com
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
> 13 |         await this.visitSiteButton.waitFor({ state: 'attached' });
     |                                    ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  14 |         await this.visitSiteButton.waitFor({ state: 'visible' });
  15 |         await this.visitSiteButton.click({ force: true });
  16 |         await this.backToAppLink.waitFor({ state: 'attached' });
  17 |         await this.backToAppLink.waitFor({ state: 'visible' });
  18 |         await this.backToAppLink.click({ force: true });
  19 |     }
  20 | }
```