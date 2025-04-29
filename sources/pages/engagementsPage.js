// страница списка Engagements

export class EngagementsPage{
    constructor(page) {
        this.page = page;
        this.createEngLink = page.getByRole('link', { name: 'Создать проект' })
        this.arrowPaginationRight = page.locator('[data-testid="KeyboardArrowRightIcon"]')
        this.arrowPaginationLeft = page.locator('[data-testid="KeyboardArrowLeftIcon"]')
        this.firstPaginationIcon = page.locator('p.MuiTablePagination-displayedRows')
        this.hoverMenuButton = page.locator('div[data-rowindex="0"] div[data-field="actions"]');
        this.dropDownEng = page.getByRole('menuitem', { name: 'Список событий' })
        this.dropDownEngLogs = page.getByRole('heading', { name: 'Список событий' })
    }

    // переход на страницу создания сущности Engagment
    async gotoCreateEngPage() {
        await this.createEngLink.click();
    }

    // проверка работы стрелок пагинации
    async usePagination() {
        await this.arrowPaginationRight.click();
        await this.arrowPaginationLeft.click();
    }

    // переход на страницу Engagement logs
    async gotoEngagementLogsPage() {
        await this.hoverMenuButton.click({ focusable: true });
        await this.dropDownEng.click();
    }
}