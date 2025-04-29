import { test, expect } from '@playwright/test';
import { BASE_URL, USERNAME, PASSWORD, CLIENT_CODE } from '../sources/consts/index.js';
import { SignInPage, EngagementsPage, CreateEngPage, EngagementPage, PromisePage } from '../sources/pages/index.js';
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
        const signInPage = new SignInPage(page);
        const engagementsPage = new EngagementsPage(page);

        await signInPage.open(BASE_URL);
        await signInPage.signInAndEngagementsPage(USER_DATA.username, USER_DATA.password);

        await expect(engagementsPage.createEngLink).toBeVisible();
    });

    test('Проверка валидации при попытке создать Engagement с незаполненными полями', async ({ page }) => {
        const engagementsPage = new EngagementsPage(page);
        const createEngPage = new CreateEngPage(page);

        await engagementsPage.gotoCreateEngPage();
        await createEngPage.validateEngEntities();

        expect(createEngPage.clientNameFieldError).toContainText('Обязательно для заполнения');
        expect(createEngPage.departmentFieldError).toContainText('Обязательно для заполнения');
        expect(createEngPage.customNameFieldError).toContainText('Обязательно для заполнения');
    });

    test('Создание Engagement', async ({ page }) => {
        const engagementsPage = new EngagementsPage(page);
        const createEngPage = new CreateEngPage(page);
        const promisePage = new PromisePage(page);

        await engagementsPage.gotoCreateEngPage();

        await createEngPage.createEngagement(
            engagementBuilder.name,
            CLIENT_CODE,
            engagementBuilder.departmentName,
            engagementBuilder.type,
            engagementBuilder.reportingStandard,
            engagementBuilder.verificationPeriods,
            engagementBuilder.verificationYear
        );

        expect(promisePage.promiseButton).toBeVisible();
        expect(promisePage.welcomeMessage).toBeVisible();    
    });

    test('Подписание независимости', async ({ page }) => {
        const engagementsPage = new EngagementsPage(page);
        const createEngPage = new CreateEngPage(page);
        const promisePage = new PromisePage(page);
        const engagementPage = new EngagementPage(
            page, 
            engagementBuilder.name,
            CLIENT_CODE,
            engagementBuilder.departmentName,
            engagementBuilder.type,
            engagementBuilder.reportingStandard,
            engagementBuilder.verificationPeriods,
            engagementBuilder.verificationYear
        );

        await engagementsPage.gotoCreateEngPage();
        await createEngPage.createEngagement(
            engagementBuilder.name,
            CLIENT_CODE,
            engagementBuilder.departmentName,
            engagementBuilder.type,
            engagementBuilder.reportingStandard,
            engagementBuilder.verificationPeriods,
            engagementBuilder.verificationYear
        );

        await promisePage.addPromise();
        await expect(promisePage.doneEngMessage).toBeVisible();

        await promisePage.gotoEngagementPage();
        await expect(engagementPage.headingInfo).toBeVisible();
        await expect(engagementPage.clientCodeInfo).toContainText(`Клиентский код: ${CLIENT_CODE}`);
    });

    test('Проверка пагинации на странице Engagements', async ({ page }) => {
        const engagementsPage = new EngagementsPage(page);

        await engagementsPage.usePagination();

        await expect(engagementsPage.firstPaginationIcon).toContainText('1–50 из');
    });

    test('Переход на страницу списка запросов (логов) Engagement', async ({ page }) => {
        const engagementsPage = new EngagementsPage(page);

        await engagementsPage.gotoEngagementLogsPage();

        await expect(engagementsPage.dropDownEngLogs).toBeVisible(); 
    });
});