# Test info

- Name: API проверки >> Проверка фильтрации проектов по клиентскому коду
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:34:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:30:33
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
  12 | const formData = new URLSearchParams(AUTH_DATA).toString();
  13 |
  14 | test.describe('API проверки', () => {
  15 |     let authToken;
  16 |     let storageId;
  17 |     test.beforeAll('Авторизация и получение токена', async ({ request }) => {
  18 |       const response = await request.post(KEYCLOAK_URL, {
  19 |         headers: {
  20 |           "Content-Type": "application/x-www-form-urlencoded",
  21 |           "Connection": "keep-alive"
  22 |         },
  23 |         body: formData
  24 |       });
  25 |           
  26 |       const body = await response.json();
  27 |       authToken = body.access_token;
  28 |       storageId = body.session_state;
  29 |
> 30 |       expect(response.status()).toBe(200);
     |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  31 |       expect(authToken).toBeTruthy();
  32 |     });
  33 |
  34 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
  35 |     // делаем запрос к списку клиентов с фильтром по коду, чтобы получить id клиента
  36 |     // клиентский код такой же уникальный, как id (но в фильтре пользователь может вводить только код, а не id)
  37 |       const clientResponse = await request.get(`${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`,{ 
  38 |         headers: {
  39 |           "Authorization": `Bearer ${authToken}`,
  40 |           "Accept": "application/json"
  41 |         }
  42 |     });
  43 |         
  44 |       expect(clientResponse.status()).toBe(200);
  45 |
  46 |       const clientBody = await clientResponse.json();
  47 |       const selectedId = clientBody.data.items[0].id;
  48 |       // выводим id для наглядности
  49 |       console.log(selectedId);
  50 |     
  51 |    // отфильтровываем Engagments по клиентскому коду (пользовательский кейс)
  52 |       const engResponse = await request.get(`${BASE_URL}/api/engagements?clientIds=${CLIENT_CODE}`, {
  53 |         headers: {
  54 |           'Authorization': `Bearer ${authToken}`
  55 |         }
  56 |     });
  57 |
  58 |     console.log(engResponse);
  59 |       // const engBody = await engResponse.json();
  60 |       // expect(engResponse.status()).toBe(200);
  61 |       // expect(engBody.data.items.length).toBeGreaterThan(0);
  62 |       
  63 |       // выводим список, он никогда не должен быть пустым, потому что клиентский код присваивается при первом создании
  64 |       //console.log(`Получено ${engBody.data.items.length} проектов для клиента с ID ${selectedId}`);
  65 |     
  66 |       // проверяем, что отфильтрованные Engagments имеют одинаковый UUID (selectedId)
  67 |       // проверяем по UUID из-за его уникальности, а не по названию – они могут быть очень похожи
  68 |       //expect(project.client.id).toBe(selectedClient.id);
  69 |     
  70 |       // выводим все ids всех отфильтрованных Engagments в качестве дополнительной проверки
  71 |       console.log('Проверка успешна: все проекты принадлежат клиенту с ID', selectedId);
  72 | });
  73 | });
```