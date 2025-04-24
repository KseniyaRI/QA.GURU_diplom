export class StartNgrokPage{
    constructor(page){
        this.page = page;
        this.visitSiteButton = page.getByRole('button', { name: 'Visit Site' })
        this.backToAppLink = page.getByRole('link', { name: '« Back to Application' })
    }

    async open(BASE_URL) {
        await this.page.goto(BASE_URL);
    }

    async gotoLoginPage() {
        await this.visitSiteButton.waitFor({ state: 'attached' });
        await this.visitSiteButton.waitFor({ state: 'visible' });
        await this.visitSiteButton.click({ force: true });
        await this.backToAppLink.waitFor({ state: 'attached' });
        await this.backToAppLink.waitFor({ state: 'visible' });
        await this.backToAppLink.click({ force: true });
    }
}