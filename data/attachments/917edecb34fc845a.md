# Test info

- Name: API проверки >> Изменение атрибутов Engagment
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:91:5

# Error details

```
Error: expect(received).toMatchObject(expected)

Matcher error: received value must be a non-null object

Received has type:  string
Received has value: "3b891e10-ec8a-4eb0-9e1f-f3a398ec1dca"
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:108:50
```

# Test source

```ts
   8 |   client_id: "fe-client",
   9 |   grant_type: "password",
   10 |   username: USERNAME
   11 | };
   12 |
   13 | const engagment = new EngagmentBuider()
   14 |       .addCustomName()
   15 |       .addDepartmentId()
   16 |       .updateEngagment();
   17 |
   18 | test.describe.serial('API проверки', () => {
   19 |     let authToken;
   20 |     let engBody;
   21 |     let allEngIds;
   22 |     let firstEngId;
   23 |     test.beforeAll('Авторизация и получение токена', async ({ request }) => {
   24 |       const response = await request.post(KEYCLOAK_URL, {
   25 |         headers: {
   26 |           "Content-Type": "application/x-www-form-urlencoded"
   27 |         },
   28 |         form: AUTH_DATA
   29 |       });
   30 |           
   31 |       const body = await response.json();
   32 |       authToken = body.access_token;
   33 |
   34 |       expect(response.status()).toBe(200);
   35 |     });
   36 |
   37 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
   38 |     // шаг 1. делаем запрос к списку клиентов с фильтром по коду, чтобы получить id клиента
   39 |     // клиентский код такой же уникальный, как клиентский id
   40 |       const clientResponse = await request.get(`${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`,{ 
   41 |         headers: {
   42 |           "Authorization": `Bearer ${authToken}`,
   43 |           "Accept": "application/json"
   44 |         }
   45 |     });
   46 |         
   47 |       expect(clientResponse.status()).toBe(200);
   48 |
   49 |       const clientBody = await clientResponse.json();
   50 |       const selectedClientId = clientBody.data.items[0].id;
   51 |     
   52 |    // шаг 2. отфильтровываем Engagments по клиентскому коду (пользовательский кейс)
   53 |       const engResponse = await request.get(`${BASE_URL}/api/engagements?clientIds=${selectedClientId}`, {
   54 |         headers: {
   55 |           "Authorization": `Bearer ${authToken}`,
   56 |           "Accept": "application/json"
   57 |         }
   58 |     });
   59 |
   60 |       expect(engResponse.status()).toBe(200);
   61 |
   62 |       // список никогда не должен быть пустым, потому что клиентский код присваивается при первом создании 
   63 |       // TODO – добавить вывод на случай ошибки с пустым списком
   64 |       engBody = await engResponse.json();
   65 |       expect(engBody.data.items.length).toBeGreaterThan(0);
   66 |     
   67 |       // шаг 3. проверяем, что отфильтрованные Engagments имеют одинаковый клиентский Id (selectedClientId)
   68 |       expect (engBody.data.items.every(engagment => 
   69 |         engagment.client.id) === selectedClientId);
   70 |     });
   71 |
   72 |   test('Пользователь без прав системного администратора не может удалить Engagment', async ({ request }) => {
   73 |       // сначала получаем uuid сущности, которую будем удалять
   74 |       // для простоты используем список, полученный в предыдущем тесте
   75 |       firstEngId = engBody.data.items[0].id;
   76 |       
   77 |       const deleteResponse = await request.delete(`${BASE_URL}/api/engagements/${firstEngId}`, {
   78 |         headers: {
   79 |           "Authorization": `Bearer ${authToken}`,
   80 |           "Accept": "application/json"
   81 |         }
   82 |       });
   83 |
   84 |       expect(deleteResponse.status()).toBe(403);
   85 |
   86 |       // дополнительная проверка, что uuid удаляемой сущности есть в списке всех uuids
   87 |       allEngIds = engBody.data.items.map(item => item.id);
   88 |       expect(allEngIds).toContain(firstEngId);
   89 |     });
   90 |
   91 |     test('Изменение атрибутов Engagment', async ({ request }) => {
   92 |       // для удобства будем использовать firstEngId
   93 |       const updateEngResponse = await request.patch(`${BASE_URL}/api/engagements/${firstEngId}`, {
   94 |         headers: {
   95 |           "Authorization": `Bearer ${authToken}`,
   96 |           "Accept": "application/json"
   97 |         },
   98 |         body: engagment
   99 |       });
  100 |       
  101 |       expect(updateEngResponse.status()).toBe(200);
  102 |
  103 |       const updateEngagment = await updateEngResponse.json();
  104 |       //console.log(updateEngagment.data.department.id);
  105 |       console.log(engagment);
  106 |
  107 |       // проверяем, что объект ответа содержит все поля из объекта запроса
> 108 |       expect(updateEngagment.data.department.id).toMatchObject({
      |                                                  ^ Error: expect(received).toMatchObject(expected)
  109 |           departmentId: engagment.departmentId
  110 |       });
  111 |     });
  112 |
  113 |     //test('Получение истории действий c Engagment', async ({ request }) => {
  114 |
  115 | });
  116 |
  117 |
```