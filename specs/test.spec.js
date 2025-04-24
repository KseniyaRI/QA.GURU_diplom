import { test, expect } from '@playwright/test';
import { URL } from '../sources/consts/index.js';

test('test', async ({ page }) => {
    await page.goto(URL);
    await expect(page).toHaveURL(URL);

    await expect(page.getByText('Код Аудита')).toBeVisible();
});
