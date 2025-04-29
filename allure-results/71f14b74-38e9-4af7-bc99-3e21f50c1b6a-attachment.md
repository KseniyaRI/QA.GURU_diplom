# Test info

- Name: API проверка фильтрации проектов >> Проверка фильтрации проектов по клиентскому коду
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:37:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:32:31
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, KEYCLOAK_URL, USERNAME, PASSWORD, CLIENT_CODE } from '../sources/consts/index.js';
   3 |
   4 | const AUTH_FORM = {
   5 |   client_id: 'fe-client',
   6 |   username: process.env.USERNAME,
   7 |   password: process.env.PASSWORD,
   8 |   grant_type: 'password',
   9 |   scope: 'email openid profile'
  10 | };
  11 |
  12 | test.describe('API проверка фильтрации проектов', () => {
  13 |   let authToken;
  14 |   //let selectedClient;
  15 |
  16 |   test.beforeEach('Авторизация и получение токена', async ({ request }) => {
  17 |     // Создаем формат данных application/x-www-form-urlencoded
  18 |     const formData = new URLSearchParams();
  19 |     formData.append('client_id', 'fe-client');
  20 |     formData.append('username', process.env.USERNAME);
  21 |     formData.append('password', process.env.PASSWORD);
  22 |     formData.append('grant_type', 'password');
  23 |     
  24 |     const response = await request.post(KEYCLOAK_URL, {
  25 |       headers: {
  26 |         'Content-Type': 'application/x-www-form-urlencoded',
  27 |       },
  28 |       body: formData.toString()
  29 |     });
  30 |     
  31 |     const body = await response.json();
> 32 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  33 |     const authToken = body.access_token;
  34 |     expect(authToken).toBeTruthy();
  35 |   });
  36 |
  37 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
  38 |     // Шаг 1: Получаем список клиентов по коду
  39 |     const clientsResponse = await request.get(
  40 |       `${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`, {
  41 |         headers: {
  42 |           "Authorization": `Bearer ${authToken}`       
  43 |         },
  44 |       });
  45 |     
  46 |     const body = await clientsResponse.json();
  47 |     
  48 |     //expect(clientsResponse.status()).toBe(200);
  49 |     //expect(body.data.items.length).toBeGreaterThan(0);
  50 |     console.log(clientsResponse);
  51 |   });
  52 |   });
  53 |     
  54 |     // Находим клиента с нужным кодом
  55 |     /*const matchingClients = clientsData.data.items.filter(item => item.clientCode === CLIENT_CODE);
  56 |     expect(matchingClients.length).toBeGreaterThan(0);
  57 |     
  58 |     selectedClient = matchingClients[0];
  59 |     console.log(`Найден клиент: ${selectedClient.name} (ID: ${selectedClient.id})`);
  60 |     
  61 |     // Шаг 2: Получаем отфильтрованные проекты
  62 |     console.log('Шаг 2: Получение проектов с фильтрацией по ID клиента');
  63 |     const filteredResponse = await request.get(
  64 |       `${BASE_URL}/api/engagements?clientIds[]=${selectedClient.id}&limit=50&offset=0`, 
  65 |       {
  66 |         headers: {
  67 |           'Authorization': `Bearer ${authToken}`
  68 |         }
  69 |       }
  70 |     );
  71 |     
  72 |     const filteredData = await filteredResponse.json();
  73 |     expect(filteredResponse.status()).toBe(200);
  74 |     expect(filteredData.data.items.length).toBeGreaterThan(0);
  75 |     
  76 |     console.log(`Получено ${filteredData.data.items.length} проектов для клиента с ID ${selectedClient.id}`);
  77 |     
  78 |     // Шаг 3: Проверяем, что все проекты принадлежат выбранному клиенту (только по UUID)
  79 |     console.log('Шаг 3: Проверка соответствия проектов выбранному клиенту');
  80 |     for (const project of filteredData.data.items) {
  81 |       expect(project.client.id).toBe(selectedClient.id);
  82 |     }
  83 |     
  84 |     // Проверка успешна, если мы дошли до этой точки
  85 |     console.log('Проверка успешна: все проекты принадлежат клиенту с ID', selectedClient.id);
  86 |   });
  87 | });*/
```