export class EngagmentPage{
    constructor(page){
        this.createEngButton = page.getByRole('link', { name: 'Создать проект' }).click();
    }

    async gotoCreateEng(){
        await this.createEngButton.click();
    }
}

// фильтры
// пагинация
// сортировка