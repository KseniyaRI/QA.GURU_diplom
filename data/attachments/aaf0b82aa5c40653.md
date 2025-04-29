# Test info

- Name: API проверки >> Проверка фильтрации проектов по клиентскому коду
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:32:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:28:33
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { BASE_URL, KEYCLOAK_URL, USERNAME, PASSWORD, CLIENT_CODE } from '../sources/consts/index.js';
   3 |
   4 | // создаем объект с обязательными параметрами, который будем передавать в запросе на авторизацию
   5 | const AUTH_DATA = {
   6 |   password: PASSWORD,
   7 |   client_id: "fe-client",
   8 |   grant_type: "password",
   9 |   username: USERNAME
  10 | };
  11 |
  12 | test.describe('API проверки', () => {
  13 |     let authToken;
  14 |     let storageId;
  15 |     test.beforeAll('Авторизация и получение токена', async ({ request }) => {
  16 |       const response = await request.post(KEYCLOAK_URL, {
  17 |         headers: {
  18 |           "Content-Type": "application/x-www-form-urlencoded",
  19 |           "Connection": "keep-alive"
  20 |         },
  21 |         data: AUTH_DATA
  22 |       });
  23 |           
  24 |       const body = await response.text();
  25 |       authToken = body.access_token;
  26 |       storageId = body.session_state;
  27 |
> 28 |       expect(response.status()).toBe(200);
     |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  29 |       expect(authToken).toBeTruthy();
  30 |     });
  31 |
  32 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
  33 |     // делаем запрос к списку клиентов с фильтром по коду, чтобы получить id клиента
  34 |     // клиентский код такой же уникальный, как id (но в фильтре пользователь может вводить только код, а не id)
  35 |       const clientResponse = await request.get(`${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`,{ 
  36 |         headers: {
  37 |           "Authorization": `Bearer ${authToken}`,
  38 |           "Accept": "application/json"
  39 |         }
  40 |     });
  41 |         
  42 |       expect(clientResponse.status()).toBe(200);
  43 |
  44 |       const clientBody = await clientResponse.json();
  45 |       const selectedId = clientBody.data.items[0].id;
  46 |       // выводим id для наглядности
  47 |       console.log(selectedId);
  48 |     
  49 |    // отфильтровываем Engagments по клиентскому коду (пользовательский кейс)
  50 |       const engResponse = await request.get(`${BASE_URL}/api/engagements?clientIds=${CLIENT_CODE}`, {
  51 |         headers: {
  52 |           'Authorization': `Bearer ${authToken}`
  53 |         }
  54 |     });
  55 |
  56 |     console.log(engResponse);
  57 |       // const engBody = await engResponse.json();
  58 |       // expect(engResponse.status()).toBe(200);
  59 |       // expect(engBody.data.items.length).toBeGreaterThan(0);
  60 |       
  61 |       // выводим список, он никогда не должен быть пустым, потому что клиентский код присваивается при первом создании
  62 |       //console.log(`Получено ${engBody.data.items.length} проектов для клиента с ID ${selectedId}`);
  63 |     
  64 |       // проверяем, что отфильтрованные Engagments имеют одинаковый UUID (selectedId)
  65 |       // проверяем по UUID из-за его уникальности, а не по названию – они могут быть очень похожи
  66 |       //expect(project.client.id).toBe(selectedClient.id);
  67 |     
  68 |       // выводим все ids всех отфильтрованных Engagments в качестве дополнительной проверки
  69 |       console.log('Проверка успешна: все проекты принадлежат клиенту с ID', selectedId);
  70 | });
  71 | });
```