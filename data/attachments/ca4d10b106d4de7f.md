# Test info

- Name: API проверка фильтрации проектов >> Проверка фильтрации проектов по клиентскому коду
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:32:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:43:38
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, KEYCLOAK_URL, USERNAME, PASSWORD, CLIENT_CODE } from '../sources/consts/index.js';
   3 |
   4 | export const AUTH_FORM = {
   5 |   client_id: 'fe-client',
   6 |   username: USERNAME,
   7 |   password: PASSWORD,
   8 |   grant_type: 'password',
   9 |   scope: 'email openid profile'
  10 | }
  11 |
  12 | test.describe('API проверка фильтрации проектов', () => {
  13 |   let authToken;
  14 |   //let selectedClient;
  15 |
  16 |   // Получение токена для всех тестов
  17 |   test.beforeEach('Авторизация и получение токена', async ({ request }) => {
  18 |     const response = await request.post(KEYCLOAK_URL, {
  19 |       form: AUTH_FORM,
  20 |       headers: {
  21 |         'Content-Type': 'application/x-www-form-urlencoded'
  22 |       }
  23 |     });
  24 |
  25 |     const body = await response.json();
  26 |     expect(response.status()).toBe(200);
  27 |     
  28 |     authToken = body.access_token;
  29 |     expect(authToken).toBeTruthy();
  30 |   });
  31 |
  32 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
  33 |     // Шаг 1: Получаем список клиентов по коду
  34 |     const clientsResponse = await request.get(
  35 |       `${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`, {
  36 |         headers: {
  37 |           "Authorization": authToken
  38 |         }
  39 |       });
  40 |     
  41 |     const body = await clientsResponse.json();
  42 |     
> 43 |     expect(clientsResponse.status()).toBe(200);
     |                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  44 |     expect(body.data.items.length).toBeGreaterThan(0);
  45 |     console.log(clientsResponse);
  46 |   });
  47 | });
  48 |     
  49 |     // Находим клиента с нужным кодом
  50 |     /*const matchingClients = clientsData.data.items.filter(item => item.clientCode === CLIENT_CODE);
  51 |     expect(matchingClients.length).toBeGreaterThan(0);
  52 |     
  53 |     selectedClient = matchingClients[0];
  54 |     console.log(`Найден клиент: ${selectedClient.name} (ID: ${selectedClient.id})`);
  55 |     
  56 |     // Шаг 2: Получаем отфильтрованные проекты
  57 |     console.log('Шаг 2: Получение проектов с фильтрацией по ID клиента');
  58 |     const filteredResponse = await request.get(
  59 |       `${BASE_URL}/api/engagements?clientIds[]=${selectedClient.id}&limit=50&offset=0`, 
  60 |       {
  61 |         headers: {
  62 |           'Authorization': `Bearer ${authToken}`
  63 |         }
  64 |       }
  65 |     );
  66 |     
  67 |     const filteredData = await filteredResponse.json();
  68 |     expect(filteredResponse.status()).toBe(200);
  69 |     expect(filteredData.data.items.length).toBeGreaterThan(0);
  70 |     
  71 |     console.log(`Получено ${filteredData.data.items.length} проектов для клиента с ID ${selectedClient.id}`);
  72 |     
  73 |     // Шаг 3: Проверяем, что все проекты принадлежат выбранному клиенту (только по UUID)
  74 |     console.log('Шаг 3: Проверка соответствия проектов выбранному клиенту');
  75 |     for (const project of filteredData.data.items) {
  76 |       expect(project.client.id).toBe(selectedClient.id);
  77 |     }
  78 |     
  79 |     // Проверка успешна, если мы дошли до этой точки
  80 |     console.log('Проверка успешна: все проекты принадлежат клиенту с ID', selectedClient.id);
  81 |   });
  82 | });*/
```