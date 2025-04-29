# Test info

- Name: API проверки >> Проверка фильтрации проектов по клиентскому коду
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:34:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:63:36
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
  23 |         form: AUTH_DATA
  24 |       });
  25 |           
  26 |       const body = await response.json();
  27 |       authToken = body.access_token;
  28 |       storageId = body.session_state;
  29 |
  30 |       expect(response.status()).toBe(200);
  31 |       expect(authToken).toBeTruthy();
  32 |     });
  33 |
  34 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
  35 |     // делаем запрос к списку клиентов с фильтром по коду, чтобы получить id клиента
  36 |     // клиентский код такой же уникальный, как id (но в фильтре пользователь может вводить только код, а не id)
  37 |       const clientResponse = await request.get(`${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`,{ 
  38 |         headers: {
  39 |           "Authorization": `Bearer ${authToken}`,
  40 |           "Accept": "application/json",
  41 |           "Connection": "keep-alive"
  42 |         }
  43 |     });
  44 |         
  45 |       expect(clientResponse.status()).toBe(200);
  46 |
  47 |       const clientBody = await clientResponse.json();
  48 |       const selectedId = clientBody.data.items[0].id;
  49 |       // выводим id для наглядности
  50 |       console.log(selectedId);
  51 |     
  52 |    // отфильтровываем Engagments по клиентскому коду (пользовательский кейс)
  53 |       const engResponse = await request.get(`${BASE_URL}/api/engagements?clientId=${CLIENT_CODE}`, {
  54 |         headers: {
  55 |           "Authorization": `Bearer ${authToken}`,
  56 |           "Accept": "application/json",
  57 |           "Connection": "keep-alive"
  58 |         }
  59 |     });
  60 |
  61 |       console.log(engResponse);
  62 |       const engBody = await engResponse.json();
> 63 |       expect(engResponse.status()).toBe(200);
     |                                    ^ Error: expect(received).toBe(expected) // Object.is equality
  64 |       expect(engBody.data.items.length).toBeGreaterThan(0);
  65 |       
  66 |       // выводим список, он никогда не должен быть пустым, потому что клиентский код присваивается при первом создании
  67 |       //console.log(`Получено ${engBody.data.items.length} проектов для клиента с ID ${selectedId}`);
  68 |     
  69 |       // проверяем, что отфильтрованные Engagments имеют одинаковый UUID (selectedId)
  70 |       // проверяем по UUID из-за его уникальности, а не по названию – они могут быть очень похожи
  71 |       //expect(project.client.id).toBe(selectedClient.id);
  72 |     
  73 |       // выводим все ids всех отфильтрованных Engagments в качестве дополнительной проверки
  74 |       console.log('Проверка успешна: все проекты принадлежат клиенту с ID', selectedId);
  75 | });
  76 | });
```