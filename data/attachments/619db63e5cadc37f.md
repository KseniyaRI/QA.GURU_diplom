# Test info

- Name: API проверка фильтрации проектов >> Проверка фильтрации проектов по клиентскому коду
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:25:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:19:31
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
  10 |     const params = new URLSearchParams(AUTH_FORM);
  11 |     const response = await request.post(KEYCLOAK_URL, {
  12 |       form: params,
  13 |       headers: {
  14 |         'Content-Type': 'application/x-www-form-urlencoded'
  15 |       }
  16 |     });
  17 |     
  18 |     const body = await response.json();
> 19 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  20 |     
  21 |     authToken = body.access_token;
  22 |     expect(authToken).toBeTruthy();
  23 |   });
  24 |
  25 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
  26 |     // Шаг 1: Получаем список клиентов по коду
  27 |     console.log('Шаг 1: Поиск клиента по коду');
  28 |     const clientsResponse = await request.get(
  29 |       `${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`, 
  30 |       {
  31 |         headers: {
  32 |           'Authorization': `Bearer ${authToken}`
  33 |         }
  34 |       }
  35 |     );
  36 |     
  37 |     const clientsData = await clientsResponse.json();
  38 |     
  39 |     expect(clientsResponse.status()).toBe(200);
  40 |     expect(clientsData.data.items.length).toBeGreaterThan(0);
  41 |
  42 |     console.log(clientsData);
  43 |
  44 | });
  45 |     
  46 |     // Находим клиента с нужным кодом
  47 |     /*const matchingClients = clientsData.data.items.filter(item => item.clientCode === CLIENT_CODE);
  48 |     expect(matchingClients.length).toBeGreaterThan(0);
  49 |     
  50 |     selectedClient = matchingClients[0];
  51 |     console.log(`Найден клиент: ${selectedClient.name} (ID: ${selectedClient.id})`);
  52 |     
  53 |     // Шаг 2: Получаем отфильтрованные проекты
  54 |     console.log('Шаг 2: Получение проектов с фильтрацией по ID клиента');
  55 |     const filteredResponse = await request.get(
  56 |       `${BASE_URL}/api/engagements?clientIds[]=${selectedClient.id}&limit=50&offset=0`, 
  57 |       {
  58 |         headers: {
  59 |           'Authorization': `Bearer ${authToken}`
  60 |         }
  61 |       }
  62 |     );
  63 |     
  64 |     const filteredData = await filteredResponse.json();
  65 |     expect(filteredResponse.status()).toBe(200);
  66 |     expect(filteredData.data.items.length).toBeGreaterThan(0);
  67 |     
  68 |     console.log(`Получено ${filteredData.data.items.length} проектов для клиента с ID ${selectedClient.id}`);
  69 |     
  70 |     // Шаг 3: Проверяем, что все проекты принадлежат выбранному клиенту (только по UUID)
  71 |     console.log('Шаг 3: Проверка соответствия проектов выбранному клиенту');
  72 |     for (const project of filteredData.data.items) {
  73 |       expect(project.client.id).toBe(selectedClient.id);
  74 |     }
  75 |     
  76 |     // Проверка успешна, если мы дошли до этой точки
  77 |     console.log('Проверка успешна: все проекты принадлежат клиенту с ID', selectedClient.id);
  78 |   });*/
  79 | });
```