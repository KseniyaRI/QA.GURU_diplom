# Test info

- Name: API проверка фильтрации проектов >> Проверка фильтрации проектов по клиентскому коду
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:24:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:18:31
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, KEYCLOAK_URL, AUTH_FORM, CLIENT_CODE } from '../sources/consts/index.js';
   3 |
   4 | test.describe('API проверка фильтрации проектов', () => {
   5 |   let authToken;
   6 |   //let selectedClient;
   7 |
   8 |   // Получение токена для всех тестов
   9 |   test.beforeAll('Авторизация и получение токена', async ({ request }) => {
  10 |     const response = await request.post(KEYCLOAK_URL, {
  11 |       data: AUTH_FORM,
  12 |       headers: {
  13 |         'Content-Type': 'application/x-www-form-urlencoded'
  14 |       }
  15 |     });
  16 |     
  17 |     const body = await response.json();
> 18 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  19 |     
  20 |     authToken = body.access_token;
  21 |     expect(authToken).toBeTruthy();
  22 |   });
  23 |
  24 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
  25 |     // Шаг 1: Получаем список клиентов по коду
  26 |     console.log('Шаг 1: Поиск клиента по коду');
  27 |     const clientsResponse = await request.get(
  28 |       `${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`, 
  29 |       {
  30 |         headers: {
  31 |           'Authorization': `Bearer ${authToken}`
  32 |         }
  33 |       }
  34 |     );
  35 |     
  36 |     const clientsData = await clientsResponse.json();
  37 |     
  38 |     expect(clientsResponse.status()).toBe(200);
  39 |     expect(clientsData.data.items.length).toBeGreaterThan(0);
  40 |
  41 |     console.log(clientsData);
  42 |
  43 | });
  44 |     
  45 |     // Находим клиента с нужным кодом
  46 |     /*const matchingClients = clientsData.data.items.filter(item => item.clientCode === CLIENT_CODE);
  47 |     expect(matchingClients.length).toBeGreaterThan(0);
  48 |     
  49 |     selectedClient = matchingClients[0];
  50 |     console.log(`Найден клиент: ${selectedClient.name} (ID: ${selectedClient.id})`);
  51 |     
  52 |     // Шаг 2: Получаем отфильтрованные проекты
  53 |     console.log('Шаг 2: Получение проектов с фильтрацией по ID клиента');
  54 |     const filteredResponse = await request.get(
  55 |       `${BASE_URL}/api/engagements?clientIds[]=${selectedClient.id}&limit=50&offset=0`, 
  56 |       {
  57 |         headers: {
  58 |           'Authorization': `Bearer ${authToken}`
  59 |         }
  60 |       }
  61 |     );
  62 |     
  63 |     const filteredData = await filteredResponse.json();
  64 |     expect(filteredResponse.status()).toBe(200);
  65 |     expect(filteredData.data.items.length).toBeGreaterThan(0);
  66 |     
  67 |     console.log(`Получено ${filteredData.data.items.length} проектов для клиента с ID ${selectedClient.id}`);
  68 |     
  69 |     // Шаг 3: Проверяем, что все проекты принадлежат выбранному клиенту (только по UUID)
  70 |     console.log('Шаг 3: Проверка соответствия проектов выбранному клиенту');
  71 |     for (const project of filteredData.data.items) {
  72 |       expect(project.client.id).toBe(selectedClient.id);
  73 |     }
  74 |     
  75 |     // Проверка успешна, если мы дошли до этой точки
  76 |     console.log('Проверка успешна: все проекты принадлежат клиенту с ID', selectedClient.id);
  77 |   });*/
  78 | });
```