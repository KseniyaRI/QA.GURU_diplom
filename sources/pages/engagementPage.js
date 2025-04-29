// страница Engagement

export class EngagementPage {
    constructor(page) {
        this.page = page;
        this.headingInfo = page.getByRole('heading', { name: 'Информация о проекте' })
        this.clientCodeInfo = page.locator('p.MuiFormHelperText-root.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.css-142jntl').filter({ hasText: 'Клиентский код:' });    
    }
}