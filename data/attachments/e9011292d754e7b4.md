# Test info

- Name: Создание стандартных сущностей >> Создание проекта
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/authUser.spec.js:16:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at https://94.26.184.173:4200/
Call log:
  - navigating to "https://94.26.184.173:4200/", waiting until "load"

    at SignInPage.open (/Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/sources/pages/signInPage.js:11:25)
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/authUser.spec.js:11:26
```

# Test source

```ts
   1 | export class SignInPage{
   2 |     constructor(page){
   3 |         this.page = page;
   4 |         this.signInButton = page.getByRole('button', { name: 'Visit Site' })
   5 |         this.userNameField = page.getByRole('textbox', { name: 'Username or email' })
   6 |         this.passwordField = page.getByRole('textbox', { name: 'Password' })
   7 |         this.signInButton = page.getByRole('button', { name: 'Sign in' })
   8 |     }
   9 |
  10 |     async open(BASE_URL) {
> 11 |         await this.page.goto(BASE_URL);
     |                         ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at https://94.26.184.173:4200/
  12 |     }
  13 |
  14 |     async gotoLoginPage(){
  15 |         await this.signInButton.click();
  16 |     }
  17 |
  18 |     async signInAndEngagementsPage(username, password){
  19 |         await this.userNameField.click();
  20 |         await this.userNameField.fill(username);
  21 |         await this.passwordField.click();
  22 |         await this.passwordField.fill(password);
  23 |         await this.signInButton.click();
  24 |     }
  25 | }
  26 |
```