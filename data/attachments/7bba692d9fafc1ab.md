# Test info

- Name: API проверки >> Изменение атрибутов Engagment
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:95:5

# Error details

```
Error: expect(received).toMatchObject(expected)

- Expected  - 8
+ Received  + 4

  Object {
-   "departmentId": "4ed1fcb3-96ad-4a2f-be79-2fda08f90544",
-   "financialYear": "2026",
-   "reportingStandardIds": "1c892dcb-3b2c-4cc0-9869-c8152eb8c76a",
-   "typeIds": Array [
-     "c39b29d4-7811-4f0e-b7cb-d3df92ca392c",
-     "3a83d552-6143-44cd-bc57-4f28f699e767",
+   "financialYear": 2026,
+   "verificationPeriods": Array [
+     "MONTH_3",
    ],
-   "verificationPeriods": "MONTH_3",
-   "verificationYear": "2025",
+   "verificationYear": 2026,
  }
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:110:36
```

# Test source

```ts
   10 |   username: USERNAME
   11 | };
   12 |
   13 | const engagment = new  EngagmentBuider()
   14 |     .addDepartmentId()
   15 |     .addTypeIds()
   16 |     .addReportingStandardIds()
   17 |     .addVerificationPeriods()
   18 |     .addVerificationYear()
   19 |     .addFinancialYear()
   20 |     .updateEngagment();
   21 |
   22 | test.describe.serial('API проверки', () => {
   23 |     let authToken;
   24 |     let engBody;
   25 |     let allEngIds;
   26 |     let firstEngId;
   27 |     test.beforeAll('Авторизация и получение токена', async ({ request }) => {
   28 |       const response = await request.post(KEYCLOAK_URL, {
   29 |         headers: {
   30 |           "Content-Type": "application/x-www-form-urlencoded"
   31 |         },
   32 |         form: AUTH_DATA
   33 |       });
   34 |           
   35 |       const body = await response.json();
   36 |       authToken = body.access_token;
   37 |
   38 |       expect(response.status()).toBe(200);
   39 |     });
   40 |
   41 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
   42 |     // шаг 1. делаем запрос к списку клиентов с фильтром по коду, чтобы получить id клиента
   43 |     // клиентский код такой же уникальный, как клиентский id
   44 |       const clientResponse = await request.get(`${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`,{ 
   45 |         headers: {
   46 |           "Authorization": `Bearer ${authToken}`,
   47 |           "Accept": "application/json"
   48 |         }
   49 |     });
   50 |         
   51 |       expect(clientResponse.status()).toBe(200);
   52 |
   53 |       const clientBody = await clientResponse.json();
   54 |       const selectedClientId = clientBody.data.items[0].id;
   55 |     
   56 |    // шаг 2. отфильтровываем Engagments по клиентскому коду (пользовательский кейс)
   57 |       const engResponse = await request.get(`${BASE_URL}/api/engagements?clientIds=${selectedClientId}`, {
   58 |         headers: {
   59 |           "Authorization": `Bearer ${authToken}`,
   60 |           "Accept": "application/json"
   61 |         }
   62 |     });
   63 |
   64 |       expect(engResponse.status()).toBe(200);
   65 |
   66 |       // список никогда не должен быть пустым, потому что клиентский код присваивается при первом создании 
   67 |       // TODO – добавить вывод на случай ошибки с пустым списком
   68 |       engBody = await engResponse.json();
   69 |       expect(engBody.data.items.length).toBeGreaterThan(0);
   70 |     
   71 |       // шаг 3. проверяем, что отфильтрованные Engagments имеют одинаковый клиентский Id (selectedClientId)
   72 |       expect (engBody.data.items.every(engagment => 
   73 |         engagment.client.id) === selectedClientId);
   74 |     });
   75 |
   76 |   test('Пользователь без прав системного администратора не может удалить Engagment', async ({ request }) => {
   77 |       // сначала получаем uuid сущности, которую будем удалять
   78 |       // для простоты используем список, полученный в предыдущем тесте
   79 |       firstEngId = engBody.data.items[0].id;
   80 |       
   81 |       const deleteResponse = await request.delete(`${BASE_URL}/api/engagements/${firstEngId}`, {
   82 |         headers: {
   83 |           "Authorization": `Bearer ${authToken}`,
   84 |           "Accept": "application/json"
   85 |         }
   86 |       });
   87 |
   88 |       expect(deleteResponse.status()).toBe(403);
   89 |
   90 |       // дополнительная проверка, что uuid удаляемой сущности есть в списке всех uuids
   91 |       allEngIds = engBody.data.items.map(item => item.id);
   92 |       expect(allEngIds).toContain(firstEngId);
   93 |     });
   94 |
   95 |     test('Изменение атрибутов Engagment', async ({ request }) => {
   96 |       // для удобства будем использовать firstEngId
   97 |       const updateEngResponse = await request.patch(`${BASE_URL}/api/engagements/${firstEngId}`, {
   98 |         headers: {
   99 |           "Authorization": `Bearer ${authToken}`,
  100 |           "Accept": "application/json"
  101 |         },
  102 |         body: engagment
  103 |       });
  104 |       
  105 |       expect(updateEngResponse.status()).toBe(200);
  106 |
  107 |       const updateEngagment = await updateEngResponse.json();
  108 |
  109 |       // gроверяем, что объект ответа содержит все поля из объекта запроса
> 110 |       expect(updateEngagment.data).toMatchObject({
      |                                    ^ Error: expect(received).toMatchObject(expected)
  111 |           departmentId: engagment.departmentId,
  112 |           typeIds: engagment.typeIds,
  113 |           reportingStandardIds: engagment.reportingStandardIds,
  114 |           verificationPeriods: engagment.verificationPeriods,
  115 |           verificationYear: engagment.verificationYear,
  116 |           financialYear: engagment.financialYear
  117 |       });
  118 |     });
  119 |
  120 |     //test('Получение истории действий c Engagment', async ({ request }) => {
  121 |
  122 | //});
  123 | });
  124 |
```