import 'dotenv/config';      // <-- прочитает .env в process.env
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './specs',
  timeout: 60000,
  // forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  //workers: process.env.CI ? 1 : undefined,

  // fullyParallel: true, // запускать тесты параллельно
  workers: 1,

  reporter: [['html', { open: 'never' }] , ['allure-playwright']],
  outputDir: 'test-results/trace/',
  use: {
    // trace: 'on-first-retry',  сохранять трассировку при падении
    trace: 'retain-on-failure', // записывать трассировку всегда, но сохранять только если тест не прошел
    
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