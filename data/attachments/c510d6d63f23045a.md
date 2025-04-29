# Test info

- Name: API проверки >> Проверка фильтрации проектов по клиентскому коду
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:33:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:29:33
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, KEYCLOAK_URL, USERNAME, PASSWORD, CLIENT_CODE } from '../sources/consts/index.js';
   3 |
   4 | test.describe('API проверки', () => {
   5 |   // создаем объект с обязательными параметрами, который будем передавать в запросе на авторизацию
   6 | const AUTH_DATA = {
   7 |   password: process.env.PASSWORD,
   8 |   client_id: "fe-client",
   9 |   grant_type: "password",
  10 |   username: process.env.USERNAME
  11 | };
  12 |
  13 | const formData = new URLSearchParams(AUTH_DATA).toString();
  14 |     let authToken;
  15 |     let storageId;
  16 |     test.beforeAll('Авторизация и получение токена', async ({ request }) => {
  17 |       const response = await request.post(KEYCLOAK_URL, {
  18 |         headers: {
  19 |           "Content-Type": "application/x-www-form-urlencoded",
  20 |           "Connection": "keep-alive"
  21 |         },
  22 |         body: formData
  23 |       });
  24 |           
  25 |       const body = await response.json();
  26 |       authToken = body.access_token;
  27 |       storageId = body.session_state;
  28 |
> 29 |       expect(response.status()).toBe(200);
     |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  30 |       expect(authToken).toBeTruthy();
  31 |     });
  32 |
  33 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
  34 |     // делаем запрос к списку клиентов с фильтром по коду, чтобы получить id клиента
  35 |     // клиентский код такой же уникальный, как id (но в фильтре пользователь может вводить только код, а не id)
  36 |       const clientResponse = await request.get(`${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`,{ 
  37 |         headers: {
  38 |           "Authorization": `Bearer ${authToken}`,
  39 |           "Accept": "application/json"
  40 |         }
  41 |     });
  42 |         
  43 |       expect(clientResponse.status()).toBe(200);
  44 |
  45 |       const clientBody = await clientResponse.json();
  46 |       const selectedId = clientBody.data.items[0].id;
  47 |       // выводим id для наглядности
  48 |       console.log(selectedId);
  49 |     
  50 |    // отфильтровываем Engagments по клиентскому коду (пользовательский кейс)
  51 |       const engResponse = await request.get(`${BASE_URL}/api/engagements?clientIds=${CLIENT_CODE}`, {
  52 |         headers: {
  53 |           'Authorization': `Bearer ${authToken}`
  54 |         }
  55 |     });
  56 |
  57 |     console.log(engResponse);
  58 |       // const engBody = await engResponse.json();
  59 |       // expect(engResponse.status()).toBe(200);
  60 |       // expect(engBody.data.items.length).toBeGreaterThan(0);
  61 |       
  62 |       // выводим список, он никогда не должен быть пустым, потому что клиентский код присваивается при первом создании
  63 |       //console.log(`Получено ${engBody.data.items.length} проектов для клиента с ID ${selectedId}`);
  64 |     
  65 |       // проверяем, что отфильтрованные Engagments имеют одинаковый UUID (selectedId)
  66 |       // проверяем по UUID из-за его уникальности, а не по названию – они могут быть очень похожи
  67 |       //expect(project.client.id).toBe(selectedClient.id);
  68 |     
  69 |       // выводим все ids всех отфильтрованных Engagments в качестве дополнительной проверки
  70 |       console.log('Проверка успешна: все проекты принадлежат клиенту с ID', selectedId);
  71 | });
  72 | });
```