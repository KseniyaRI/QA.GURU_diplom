export class EngagmentsPage{
    constructor(page){
        this.createEngButton = page.getByRole('link', { name: 'Создать проект' })
    }

    async gotoCreateEngPage(){
        await this.createEngButton.waitFor({ state: 'attached' });
        await this.createEngButton.waitFor({ state: 'visible' });
        await this.createEngButton.click();
    }
}

// фильтры
// пагинация
// сортировка