import { test, expect } from '@playwright/test';
import { URL, trusanova001, kperchatki004 } from '../sources/consts/index.js';
// import { NoteBuilder,  NameEngBuilder,  DeliverableBuilder } from '../sources/builders/index.js';
// import { DeliverablePage, EngagmentPage, ProcedurePage, TeamPage } from '../sources/pages/index.js';

/* const commentBuilder = new CommentBuilder()
      .addCommentName()
      .addCommentEmail()
      .addCommentText()
      .generateComment();*/
      
/*test.describe('API проверки', () => {
    // let token;
    // 01. запрос на получение токена для всех тестов
    test.beforeAll('@Авторизация', async ({ request }) => {
        const response = await request.post(`${URL_API}challenger`);
        const headers = response.headers();
        token = headers["x-challenger"];
        console.log(token);
    });*/

    // 02. test
    test('test', async ({page}) => {
        await this.page.goto(URL);
        expect(page.url()).toBe(URL);
    });

    // токен авторизации
    // айдишники Русановой и Перчаткиной
    // айдишники созданных сущностей