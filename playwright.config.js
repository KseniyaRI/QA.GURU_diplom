import { defineConfig, devices } from '@playwright/test';

export const BASE_URL = process.env.BASE_URL;
export const KEYCLOAK_URL = process.env.KEYCLOAK_URL;

export default defineConfig({
  testDir: './specs',
  timeout: 60000,
  retries: process.env.CI ? 1 : 0,

  // fullyParallel: true, // запускать тесты параллельно
  workers: 1,
  reporter: [['html', { open: 'never' }] , ['allure-playwright']],
  outputDir: 'test-results',
  
  use: {
    baseURL: BASE_URL,
    // trace: 'on-first-retry',  сохранять трассировку при падении
    trace: 'retain-on-failure', // записывать трассировку всегда, но сохранять только если тест не прошел
    
    actionTimeout: 60000, // Общий таймаут для всех тестов
    navigationTimeout: 60000, // Таймаут для навигации
    
    expect: {
      timeout: 60000,
    },

    screenshot: 'only-on-failure',   // сохранять скриншот при падении    
  },

  // todo – реализовать создание Engagement через API, чтобы не было зависимостей между тестами
  projects: [
    {
      name: 'pages-tests',
      testMatch: /pages\.spec\.js/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'api-tests',
      testMatch: /api\.spec\.js/,
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['pages-tests'], // тесты api только после завершения pages-tests
    },
  ],
});