// страница логина

export class SignInPage{
    constructor(page){
        this.page = page;
        this.signInButton = page.getByRole('button', { name: 'Visit Site' })
        this.userNameField = page.getByRole('textbox', { name: 'Username or email' })
        this.passwordField = page.getByRole('textbox', { name: 'Password' })
        this.signInButton = page.getByRole('button', { name: 'Sign in' })
    }

    async open(BASE_URL) {
        await this.page.goto(BASE_URL);
    }

    async signInAndEngagementsPage(username, password){
        await this.userNameField.click();
        await this.userNameField.fill(username);
        await this.passwordField.click();
        await this.passwordField.fill(password);
        await this.signInButton.click();
    }
}
