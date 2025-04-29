# Test info

- Name: Создание стандартных сущностей >> Просмотр информации о пользователе
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:58:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://aurora-dev.dev.tedo.ru/", waiting until "load"

    at SignInPage.open (/Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/sources/pages/signInPage.js:13:25)
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/pages.spec.js:16:26
```

# Test source

```ts
   1 | // страница логина
   2 |
   3 | export class SignInPage{
   4 |     constructor(page){
   5 |         this.page = page;
   6 |         this.signInButton = page.getByRole('button', { name: 'Visit Site' })
   7 |         this.userNameField = page.getByRole('textbox', { name: 'Username or email' })
   8 |         this.passwordField = page.getByRole('textbox', { name: 'Password' })
   9 |         this.signInButton = page.getByRole('button', { name: 'Sign in' })
  10 |     }
  11 |
  12 |     async open(BASE_URL) {
> 13 |         await this.page.goto(BASE_URL);
     |                         ^ Error: page.goto: Target page, context or browser has been closed
  14 |     }
  15 |
  16 |     async gotoLoginPage(){
  17 |         await this.signInButton.click();
  18 |     }
  19 |
  20 |     async signInAndEngagementsPage(username, password){
  21 |         await this.userNameField.click();
  22 |         await this.userNameField.fill(username);
  23 |         await this.passwordField.click();
  24 |         await this.passwordField.fill(password);
  25 |         await this.signInButton.click();
  26 |     }
  27 | }
  28 |
```