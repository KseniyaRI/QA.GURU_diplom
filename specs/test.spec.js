import { test, expect } from '@playwright/test';
import { BASE_URL, trusanova001, kperchatki004 } from '../sources/consts/index.js';
//import { NoteBuilder,  NameEngBuilder,  DeliverableBuilder } from '../sources/builders/index.js';
import { SignInPage, StartNgrokPage } from '../sources/pages/index.js';

test.describe('Создание стандартных сущностей', () => {
    // переход со страницы прокси-сервиса на страницу логина и логирование пользователя
    test.beforeAll('Переход на главную страницу веб-приложения', async ({ page }) => {
        const startNgrokPage = new StartNgrokPage;
        const signInPage = new SignInPage;

        await startNgrokPage.open(BASE_URL);
        await startNgrokPage.gotoLoginPage();
        await signInPage.gotoLoginPage();
        await signInPage.signInAndEngagementsPage(dataUser.username, dataUser.password);
    });
});
