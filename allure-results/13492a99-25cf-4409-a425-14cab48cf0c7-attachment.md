# Test info

- Name: API проверки >> Изменение атрибутов Engagment
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:85:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:100:41
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
   12 | test.describe.serial('API проверки', () => {
   13 |     let authToken;
   14 |     let engBody;
   15 |     let allEngIds;
   16 |     let firstEngId;
   17 |     test.beforeAll('Авторизация и получение токена', async ({ request }) => {
   18 |       const response = await request.post(KEYCLOAK_URL, {
   19 |         headers: {
   20 |           "Content-Type": "application/x-www-form-urlencoded"
   21 |         },
   22 |         form: AUTH_DATA
   23 |       });
   24 |           
   25 |       const body = await response.json();
   26 |       authToken = body.access_token;
   27 |
   28 |       expect(response.status()).toBe(200);
   29 |     });
   30 |
   31 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
   32 |     // шаг 1. делаем запрос к списку клиентов с фильтром по коду, чтобы получить id клиента
   33 |     // клиентский код такой же уникальный, как клиентский id
   34 |       const clientResponse = await request.get(`${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`,{ 
   35 |         headers: {
   36 |           "Authorization": `Bearer ${authToken}`,
   37 |           "Accept": "application/json"
   38 |         }
   39 |     });
   40 |         
   41 |       expect(clientResponse.status()).toBe(200);
   42 |
   43 |       const clientBody = await clientResponse.json();
   44 |       const selectedClientId = clientBody.data.items[0].id;
   45 |     
   46 |    // шаг 2. отфильтровываем Engagments по клиентскому коду (пользовательский кейс)
   47 |       const engResponse = await request.get(`${BASE_URL}/api/engagements?clientIds=${selectedClientId}`, {
   48 |         headers: {
   49 |           "Authorization": `Bearer ${authToken}`,
   50 |           "Accept": "application/json"
   51 |         }
   52 |     });
   53 |
   54 |       expect(engResponse.status()).toBe(200);
   55 |
   56 |       // список никогда не должен быть пустым, потому что клиентский код присваивается при первом создании 
   57 |       // TODO – добавить вывод на случай ошибки с пустым списком
   58 |       engBody = await engResponse.json();
   59 |       expect(engBody.data.items.length).toBeGreaterThan(0);
   60 |     
   61 |       // шаг 3. проверяем, что отфильтрованные Engagments имеют одинаковый клиентский Id (selectedClientId)
   62 |       expect (engBody.data.items.every(engagment => 
   63 |         engagment.client.id) === selectedClientId);
   64 |     });
   65 |
   66 |   test('Пользователь без прав системного администратора не может удалить Engagment', async ({ request }) => {
   67 |       // сначала получаем uuid сущности, которую будем удалять
   68 |       // для простоты используем список, полученный в предыдущем тесте
   69 |       firstEngId = engBody.data.items[0].id;
   70 |       
   71 |       const deleteResponse = await request.delete(`${BASE_URL}/api/engagements/${firstEngId}`, {
   72 |         headers: {
   73 |           "Authorization": `Bearer ${authToken}`,
   74 |           "Accept": "application/json"
   75 |         }
   76 |       });
   77 |
   78 |       expect(deleteResponse.status()).toBe(403);
   79 |
   80 |       // дополнительная проверка, что uuid удаляемой сущности есть в списке всех uuids
   81 |       allEngIds = engBody.data.items.map(item => item.id);
   82 |       expect(allEngIds).toContain(firstEngId);
   83 |     });
   84 |
   85 |     test('Изменение атрибутов Engagment', async ({ request }) => {
   86 |       // для удобства будем использовать firstEngId
   87 |       const entitiesResponse = await request.patch(`${BASE_URL}/api/engagements/${firstEngId}`, {
   88 |         headers: {
   89 |           "Authorization": `Bearer ${authToken}`,
   90 |           "Accept": "application/json"
   91 |         },
   92 |         data: {
   93 |           "verificationPeriods": ["MONTH_3"],
   94 |
   95 |           "reportingStandardIds": ["1c892dcb-3b2c-4cc0-9869-c8152eb8c76a"],
   96 |           "departmentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
   97 |           "financialYear": 2026
   98 |         }
   99 |       });
> 100 |       expect(entitiesResponse.status()).toBe(200);
      |                                         ^ Error: expect(received).toBe(expected) // Object.is equality
  101 |
  102 |     });
  103 |
  104 |     //test('Получение пагинированной истории действий c Engagment', async ({ request }) => {
  105 |
  106 | //});
  107 | });
  108 |
```