/*export class CreateEngPage {
    constructor(page) {
        this.page = page;
        this.clientNameField = page.getByRole('combobox', { name: 'Название клиента' })
        this.otdelField = page.getByRole('combobox', { name: 'Отдел общего аудита' })
        this.castomNameField = page.getByRole('heading', { name: 'Название проекта*' })
        this.createButton = page.getByRole('button', { name: 'Создать' })
        this.linkPromise1 = page.getByRole('link', { name: 'Правил независимости аудиторов и аудиторских организаций' })
        this.linkPromise2 = page.getByRole('link', { name: 'Кодекса профессиональной этики аудиторов России' })
        this.linkPromise3 = page.getByRole('link', { name: 'Положения об аудиторской независимости ТеДо' })
        this.linkPromise4 = page.getByRole('link', { name: 'Положение о системе управления качеством' })
        this.checkBox = page.getByRole('checkbox')
        this.promiseButton = page.getByRole('button', { name: 'Подтвердить независимость и подключиться к проекту' })
        this.dalsheButton = page.getByRole('button', { name: 'Продолжить' })
    }

    async createEngagement(){











await page.getByRole('combobox', { name: 'Название клиента' }).click();
await page.getByRole('button', { name: 'Закрыть' }).click();
await page.getByRole('combobox', { name: 'Название клиента' }).click();
await page.getByRole('combobox', { name: 'Название клиента' }).fill('Happy ');
await page.getByText('Happy friday').first().click();
await page.getByRole('combobox', { name: 'Отдел общего аудита' }).click();
await page.getByRole('option', { name: 'Отдел аудита финансового сектора' }).click();
await page.getByRole('combobox', { name: 'Аудит' }).click();
await page.getByRole('option', { name: 'Аудит', exact: true }).click();
await page.getByRole('button', { name: 'Закрыть' }).click();
await page.getByRole('combobox', { name: 'МСФО' }).click();
await page.getByRole('option', { name: 'МСФО (IFRS Accounting' }).click();
await page.getByRole('button', { name: 'Закрыть' }).click();
await page.getByRole('combobox', { name: 'год' }).click();
await page.getByRole('option', { name: '3 мес' }).click();
await page.getByRole('button', { name: 'Закрыть' }).click();
await page.getByRole('button', { name: '2025' }).click();
await page.getByRole('option', { name: '2026' }).click();
await page.getByText('Редактируйте название, чтобы оно соответствовало структуре и наполнению проекта').click();
await page.getByRole('heading', { name: 'Название проекта*' }).click();
await page.getByRole('textbox', { name: 'Название клиента / Audit /' }).click();
await page.getByRole('textbox', { name: 'Название клиента / Audit /' }).press('ArrowDown');
await page.getByRole('textbox', { name: 'Название клиента / Audit /' }).fill('Тестовый проект');
await page.getByRole('button', { name: 'Сгенерировать название' }).click();
await page.getByRole('button', { name: 'Создать' }).click();
const page1Promise = page.waitForEvent('popup');
await page.locator('.MuiBox-root > div > div > div:nth-child(2) > div').first().click();
const page1 = await page1Promise;
const page2Promise = page.waitForEvent('popup');
await page.getByRole('link', { name: 'Правил независимости аудиторов и аудиторских организаций' }).click();
const page2 = await page2Promise;
const page3Promise = page.waitForEvent('popup');
await page.getByRole('link', { name: 'Кодекса профессиональной этики аудиторов России' }).click();
const page3 = await page3Promise;
const page4Promise = page.waitForEvent('popup');
await page.getByRole('link', { name: 'Положения об аудиторской независимости ТеДо' }).click();
const page4 = await page4Promise;
const page5Promise = page.waitForEvent('popup');
await page.getByRole('link', { name: 'Правил внутреннего контроля по противодействию легализации (отмыванию) доходов' }).click();
const page5 = await page5Promise;
const page6Promise = page.waitForEvent('popup');
await page.getByRole('link', { name: 'Положение о системе управления качеством' }).click();
const page6 = await page6Promise;
await page.getByRole('checkbox').check();
await page.getByRole('button', { name: 'Подтвердить независимость и подключиться к проекту' }).click();
await page.getByText('Мы записали ваше подтверждение независимости. Приятной работы').click();
await page.getByRole('heading', { name: 'Happy friday / Аудит / МСФО (' }).click();
await page.locator('svg').nth(4).click();
await page.getByRole('button', { name: 'Продолжить' }).click();
*/