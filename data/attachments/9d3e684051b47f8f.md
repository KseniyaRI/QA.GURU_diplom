# Test info

- Name: API проверки >> Проверка фильтрации проектов по клиентскому коду
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:29:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:54:36
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, KEYCLOAK_URL, USERNAME, PASSWORD, CLIENT_CODE } from '../sources/consts/index.js';
   3 |
   4 | // создаем объект с обязательными параметрами, который будем передавать в запросе на авторизацию
   5 | const AUTH_DATA = {
   6 |   password: process.env.PASSWORD,
   7 |   client_id: "fe-client",
   8 |   grant_type: "password",
   9 |   username: process.env.USERNAME
  10 | };
  11 |
  12 | test.describe('API проверки', () => {
  13 |     let authToken;
  14 |     test.beforeEach('Авторизация и получение токена', async ({ request }) => {
  15 |       const response = await request.post(KEYCLOAK_URL, {
  16 |         headers: {
  17 |           "Content-Type": "application/x-www-form-urlencoded"
  18 |         },
  19 |         form: AUTH_DATA
  20 |       });
  21 |           
  22 |       const body = await response.json();
  23 |       authToken = body.access_token;
  24 |
  25 |       expect(response.status()).toBe(200);
  26 |       expect(authToken).toBeTruthy();
  27 |     });
  28 |
  29 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
  30 |     // делаем запрос к списку клиентов с фильтром по коду, чтобы получить id клиента
  31 |     // клиентский код такой же уникальный, как id (но в фильтре пользователь может вводить только код, а не id)
  32 |       const clientResponse = await request.get(`${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`,{ 
  33 |         headers: {
  34 |           "Authorization": `Bearer ${authToken}`,
  35 |           "Accept": "application/json"
  36 |         }
  37 |     });
  38 |         
  39 |       expect(clientResponse.status()).toBe(200);
  40 |
  41 |       const clientBody = await clientResponse.json();
  42 |       const selectedId = clientBody.data.items[0].id;
  43 |       // выводим id для наглядности
  44 |       console.log(selectedId);
  45 |     
  46 |    // отфильтровываем Engagments по клиентскому коду (пользовательский кейс)
  47 |       const engResponse = await request.get(`${BASE_URL}/api/engagements?clientIds=${CLIENT_CODE}`, {
  48 |         headers: {
  49 |           'Authorization': `Bearer ${authToken}`
  50 |         }
  51 |     });
  52 |
  53 |       const engBody = await engResponse.json();
> 54 |       expect(engResponse.status()).toBe(200);
     |                                    ^ Error: expect(received).toBe(expected) // Object.is equality
  55 |       expect(engBody.data.items.length).toBeGreaterThan(0);
  56 |       
  57 |       // выводим список, он никогда не должен быть пустым, потому что клиентский код присваивается при первом создании
  58 |       console.log(`Получено ${engBody.data.items.length} проектов для клиента с ID ${selectedId}`);
  59 |     
  60 |       // проверяем, что отфильтрованные Engagments имеют одинаковый UUID (selectedId)
  61 |       // проверяем по UUID из-за его уникальности, а не по названию – они могут быть очень похожи
  62 |       expect(project.client.id).toBe(selectedClient.id);
  63 |     
  64 |       // выводим все ids всех отфильтрованных Engagments в качестве дополнительной проверки
  65 |       console.log('Проверка успешна: все проекты принадлежат клиенту с ID', selectedId);
  66 | });
  67 | });
```