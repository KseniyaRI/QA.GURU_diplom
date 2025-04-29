// страница создания Engagement

export class CreateEngPage {
    constructor(page) {
        this.page = page;
        this.clientNameField = page.getByRole('combobox', { name: 'Название клиента' })
        this.departmentField = page.getByRole('combobox', { name: 'Отдел общего аудита' })
        this.typeField = page.getByRole('combobox', { name: 'Аудит' })
        this.reportingStandardField = page.getByRole('combobox', { name: 'МСФО' })
        this.verificationPeriodsField = page.getByRole('combobox', { name: 'год' })
        this.verificationYearField = page.getByRole('button', { name: '2025' })
        this.customEngNameField = page.getByRole('textbox', { name: 'Название клиента / Audit /' })
        this.createEngButton = page.getByRole('button', { name: 'Создать' })
        this.welcomeM = page.getByRole('heading', { name: 'Добро пожаловать в проект' })
        this.clientNameFieldError = page.locator('.MuiGrid-grid-xs-2.css-15j76c0:nth-child(1) p.Mui-error');
        this.departmentFieldError = page.locator('.MuiGrid-grid-xs-2.css-15j76c0:nth-child(2) p.Mui-error');
        this.customNameFieldError = page.locator('p.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.css-eg1xdz');
    }

    async createEngagement(name, clientCode, departmentName, type, reportingStandard, verificationPeriods, verificationYear){
        await this.customEngNameField.click();
        await this.customEngNameField.fill(name);
        await this.clientNameField.click();
        await this.clientNameField.fill(clientCode);
        await this.page.getByRole('option', { name: 'Happy friday' }).waitFor({ state: 'visible' });
        await this.page.getByRole('option', { name: 'Happy friday' }).click({ force: true });
        await this.departmentField.click();
        await this.page.getByRole('option', { name: departmentName }).click();
        await this.typeField.click();
        await this.page.getByRole('option', { name: type }).click();
        await this.reportingStandardField.click();
        await this.page.getByRole('option', { name: reportingStandard }).click();
        await this.verificationPeriodsField.click({ force: true });
        await this.page.getByRole('option', { name: verificationPeriods }).click();
        await this.verificationYearField.click({ force: true });
        await this.page.getByRole('option', { name: verificationYear }).click();
        await this.createEngButton.click();
        await this.welcomeM.waitFor({ state: 'visible' });
    }

    async validateEngEntities(){
        await this.createEngButton.click();
        await this.clientNameFieldError.waitFor({ state: 'visible' });
        await this.departmentFieldError.waitFor({ state: 'visible' });
        await this.customNameFieldError.waitFor({ state: 'visible' });
    }
}