import { test, expect } from '@playwright/test';
import { BASE_URL } from '../sources/consts/index.js';
import { StartNgrokPage } from '../sources/pages/index.js';

test('Переход на главную страницу веб-приложения', async ({page}) => {
    const startNgrokPage = new StartNgrokPage(page);

    await startNgrokPage.open(BASE_URL);
    await startNgrokPage.gotoLoginPage();

    await expect(page.getByRole('heading', { name: 'Sign in to your account' })).toBeVisible();
});