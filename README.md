# QA.GURU_diplom для [Курс по автоматизации тестирования на JavaScript + Playwright](https://qa.guru/playwright_js)

## Содержание
- [Описание](##Описание)
- [Технологии](##Технологии)
- [Использование Docker в проекте](#Использование-Docker-в-проекте)
- [Пример Allure-отчета](#Пример-Allure-отчета)
- [Интеграция с TestOps](#Интеграция-с-TestOps)
- [Уведомление в Telegram](#Уведомление-в-Telegram)
- [Обшие пояснения по проекту](#Обшие-пояснения-по-проекту)

## Описание
Репозиторий содержит в себе набор UI и API тестов, напиcанных на JavaScript c использованием фреймворка автоматизации Playwright. Настроен GitHub Actions как CI-система: реализован запуск автотестов, генерация Allure-отчетов, интеграция с TestOps и отправка уведомлений в Telegram.

## Технологии
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" width="50" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" alt="PW" width="50" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GH" width="50" height="50"/>
  <img src="https://fakerjs.dev/logo.svg" alt="Faker" width="50" height="50"/>
  <img src="https://cdn.worldvectorlogo.com/logos/docker.svg" alt="Docker" width="50" height="50"/>
  <img src="https://squidex.jugru.team/api/assets/sites/7de013f4-fb66-49d9-b625-2e3f8c10a043/testops.svg" alt="TestOps" width="50" height="50"/>
  <img src="https://s3.eu-west-1.amazonaws.com/matrix.assets/cbnapp7fuq7flsqwoc9gn8hpo7ql" alt="Matrix" width="50" height="50"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg" alt="Telegram" width="50" height="50"/>
</div>

## Использование Docker в проекте
Dockerfile в данном репозитории используется для создания изолированной среды выполнения тестов и имеет несколько важных функций:

1) Изоляция и стандартизация окружения;
2) Доступ к тестовым стендам открывается по white-list IP, а Docker позволяет использовать фиксированный IP для доступа к стендам;
3) Используется как раннер для GitHub Actions (беспечивает стабильную среду для запуска автотестов)
---

## Пример Allure-отчета
[Ссылка на отчет](https://kseniyari.github.io/QA.GURU_diplom)
![alt text](<images_report/Снимок экрана 2025-04-29 в 21.47.37.png>)

## Интеграция с TestOps
[Ссылка на отчет](https://allure.autotests.cloud/launch/46181)
![alt text](<images_report/Снимок экрана 2025-04-29 в 21.46.34.png>)

## Уведомления в Telegram
![alt text](<images_report/Снимок экрана 2025-04-29 в 21.48.16.png>)

## Обшие пояснения по проекту
1) Доступ ко всем стендам проекта открывается по добавлению ip в white-list. Этим оправдано использование ранера в Docker, через который осуществляется запуск тестов в Github Actions.
2) Проверка на регистрацию пользователя не добавляется в тесты, поскольку есть определенный неизменяющийся список пользователей, у которых разные системные права. На проде у пользователя вообще не предусмотрен login/logout, поэтому эта проверка будет пропущена при реальном тестировании.
3) Для обеспечания безопасности ссылка стенда, данные пользователя и код клиента вынесены в Github Secrets.