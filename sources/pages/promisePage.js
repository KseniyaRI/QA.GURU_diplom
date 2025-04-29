// страница подтверждения независимости

export class PromisePage {
    constructor(page) {
        this.page = page;
        this.welcomeMessage = page.getByRole('heading', { name: 'Добро пожаловать в проект' })
        this.checkBox = page.getByRole('checkbox')
        this.promiseButton = page.getByRole('button', { name: 'Подтвердить независимость и подключиться к проекту' })
        this.doneEngMessage = page.getByText('Мы записали ваше подтверждение независимости. Приятной работы')
        this.continueButton = page.getByRole('button', { name: 'Продолжить' })
    }
        
    async addPromise(){
        await this.checkBox.waitFor({ state: 'visible' });
        await this.checkBox.click();
        await this.promiseButton.click();
    }

    async gotoEngagementPage(){
        await this.continueButton.click();
    }
}