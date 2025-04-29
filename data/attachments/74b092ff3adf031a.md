# Test info

- Name: API проверки >> Проверка фильтрации проектов по клиентскому коду
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:30:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:26:33
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
  14 |     test.beforeEach('Авторизация и получение токена', async ({ request }) => {
  15 |       const response = await request.post(KEYCLOAK_URL, {
  16 |         headers: {
  17 |           "Content-Type": "application/x-www-form-urlencoded"
  18 |         },
  19 |         //body: new URLSearchParams(AUTH_DATA).toString()
  20 |         data: AUTH_DATA
  21 |       });
  22 |           
  23 |       const body = await response.json();
  24 |       authToken = body.access_token;
  25 |
> 26 |       expect(response.status()).toBe(200);
     |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  27 |       expect(authToken).toBeTruthy();
  28 |     });
  29 |
  30 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
  31 |     // делаем запрос к списку клиентов с фильтром по коду, чтобы получить id клиента
  32 |     // клиентский код такой же уникальный, как id (но в фильтре пользователь может вводить только код, а не id)
  33 |       const clientResponse = await request.get(`${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`,{ 
  34 |         headers: {
  35 |           "Authorization": `Bearer ${authToken}`,
  36 |           "Accept": "application/json"
  37 |         }
  38 |     });
  39 |         
  40 |       expect(clientResponse.status()).toBe(200);
  41 |
  42 |       const clientBody = await clientResponse.json();
  43 |       const selectedId = clientBody.data.items[0].id;
  44 |       // выводим id для наглядности
  45 |       console.log(selectedId);
  46 |     
  47 |    // отфильтровываем Engagments по клиентскому коду (пользовательский кейс)
  48 |       const engResponse = await request.get(`${BASE_URL}/api/engagements?clientIds=${CLIENT_CODE}`, {
  49 |         headers: {
  50 |           'Authorization': `Bearer ${authToken}`
  51 |         }
  52 |     });
  53 |
  54 |     console.log(engResponse);
  55 |       // const engBody = await engResponse.json();
  56 |       // expect(engResponse.status()).toBe(200);
  57 |       // expect(engBody.data.items.length).toBeGreaterThan(0);
  58 |       
  59 |       // выводим список, он никогда не должен быть пустым, потому что клиентский код присваивается при первом создании
  60 |       //console.log(`Получено ${engBody.data.items.length} проектов для клиента с ID ${selectedId}`);
  61 |     
  62 |       // проверяем, что отфильтрованные Engagments имеют одинаковый UUID (selectedId)
  63 |       // проверяем по UUID из-за его уникальности, а не по названию – они могут быть очень похожи
  64 |       //expect(project.client.id).toBe(selectedClient.id);
  65 |     
  66 |       // выводим все ids всех отфильтрованных Engagments в качестве дополнительной проверки
  67 |       console.log('Проверка успешна: все проекты принадлежат клиенту с ID', selectedId);
  68 | });
  69 | });
```