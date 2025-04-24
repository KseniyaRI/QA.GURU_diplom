import 'dotenv/config';      // <-- прочитает .env в process.env
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './specs',
  timeout: 60000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  // fullyParallel: true, // запускать тесты параллельно
  workers: 1,

  reporter: [['html', { open: 'never' }] , ['allure-playwright']],
  outputDir: 'test-results/output/', //??
  use: {
    baseURL: process.env.BASE_URL,
    headless: true, // ??
    trace: 'on-first-retry', //??
    
    actionTimeout: 60000, // Общий таймаут для всех тестов
    navigationTimeout: 60000, // Таймаут для навигации
    
    expect: {
      timeout: 60000,
    },

    screenshot: 'only-on-failure',   // сохранять скриншот при падении
    trace: 'retain-on-failure',      // сохранять трассировку при падении
    
  },

  projects: [
    {
      // для рабочего проекта Chrome – целевой браузер, другие не рассматриваются
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});