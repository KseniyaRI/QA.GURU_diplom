import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD, CLIENT_CODE } from '../sources/consts/index.js';
import { App } from '../sources/pages/appPage.js';
import { EngagementBuilder } from '../sources/builders/engagement.builder.js';

// добавляем данные юзера для авторизации
const USER_DATA = {
  password: PASSWORD,
  username: USERNAME
};

// добавляем атрибуты нового Engagement
const engagementBuilder = new EngagementBuilder()
      .addCustomName()
      .addDepartmentName()
      .addType()
      .addReportingStandard()
      .addVerificationPeriods()
      .addVerificationYear()
      .createEngagement()

test.describe('Создание Engagement и работа с ним', () => {
    test.beforeEach('Переход на главную страницу веб-приложения', async ({ page }) => {
        const app = new App(page);

        await app.signInPage.open(BASE_URL);
        await app.signInPage.signInAndEngagementsPage(USER_DATA.username, USER_DATA.password);

        await expect(app.engagementsPage.createEngLink).toBeVisible();
    });

    test('Проверка валидации при попытке создать Engagement с незаполненными полями', async ({ page }) => {
        const app = new App(page);

        await app.engagementsPage.gotoCreateEngPage();
        await app.createEngPage.validateEngEntities();

        expect(app.createEngPage.clientNameFieldError).toContainText('Обязательно для заполнения');
        expect(app.createEngPage.departmentFieldError).toContainText('Обязательно для заполнения');
        expect(app.createEngPage.customNameFieldError).toContainText('Обязательно для заполнения');
    });

    test('Создание Engagement', async ({ page }) => {
        const app = new App(page);

        await app.engagementsPage.gotoCreateEngPage();

        await app.createEngPage.createEngagement(
            engagementBuilder.name,
            CLIENT_CODE,
            engagementBuilder.departmentName,
            engagementBuilder.type,
            engagementBuilder.reportingStandard,
            engagementBuilder.verificationPeriods,
            engagementBuilder.verificationYear
        );

        expect(app.promisePage.promiseButton).toBeVisible();
        expect(app.promisePage.welcomeMessage).toBeVisible();    
    });

    test('Подписание независимости', async ({ page }) => {
        const app = new App(page);
        const engagementPage = app.getEngagementPage();

        await app.engagementsPage.gotoCreateEngPage();
        await app.createEngPage.createEngagement(
            engagementBuilder.name,
            CLIENT_CODE,
            engagementBuilder.departmentName,
            engagementBuilder.type,
            engagementBuilder.reportingStandard,
            engagementBuilder.verificationPeriods,
            engagementBuilder.verificationYear
        );

        await app.promisePage.addPromise();
        await expect(app.promisePage.doneEngMessage).toBeVisible();

        await app.promisePage.gotoEngagementPage();
        await expect(engagementPage.headingInfo).toBeVisible();
        await expect(engagementPage.clientCodeInfo).toContainText(`Клиентский код: ${CLIENT_CODE}`);
    });

    test('Проверка пагинации на странице Engagements', async ({ page }) => {
        const app = new App(page);

        await app.engagementsPage.usePagination();

        await expect(app.engagementsPage.firstPaginationIcon).toContainText('1–50 из');
    });

    test('Переход на страницу списка запросов (логов) Engagement', async ({ page }) => {
        const app = new App(page);

        await app.engagementsPage.gotoEngagementLogsPage();

        await expect(app.engagementsPage.dropDownEngLogs).toBeVisible(); 
    });
});