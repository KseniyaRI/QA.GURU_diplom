import { test, expect } from '@playwright/test';
import { BASE_URL, trusanova001 } from '../sources/consts/index.js';
import { SignInPage, StartNgrokPage, EngagmentsPage } from '../sources/pages/index.js';

test.describe('Создание стандартных сущностей', () => {
    // переход со страницы прокси-сервиса на страницу логина и логирование пользователя
    test.beforeEach('Переход на главную страницу веб-приложения', async ({ page }) => {
        const startNgrokPage = new StartNgrokPage(page);
        const signInPage = new SignInPage(page);

        await startNgrokPage.open(BASE_URL);
        await startNgrokPage.gotoLoginPage();
        await signInPage.signInAndEngagementsPage(trusanova001.username, trusanova001.password);
});

    test('Создание проекта', async ({ page }) => {
        const engagmentsPage = new EngagmentsPage(page);

        await engagmentsPage.gotoCreateEngPage();
        await expect(page.getByRole('button', { name: 'Создать' })).toBeVisible();
    });
});