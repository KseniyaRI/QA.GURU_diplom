# Test info

- Name: API проверки >> Получение истории действий (логи) c Engagment
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:120:3

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Атрибут проекта Название проекта изменен."
Received string:    "Атрибут проекта Отдел изменен."
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:139:48
```

# Test source

```ts
   39 |   test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
   40 |     // шаг 1. делаем запрос к списку клиентов с фильтром по коду, чтобы получить id клиента
   41 |     // клиентский код такой же уникальный, как клиентский id
   42 |       const clientResponse = await request.get(`${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`,{ 
   43 |         headers: {
   44 |           "Authorization": `Bearer ${authToken}`,
   45 |           "Accept": "application/json"
   46 |         }
   47 |     });
   48 |         
   49 |       expect(clientResponse.status()).toBe(200);
   50 |
   51 |       const clientBody = await clientResponse.json();
   52 |       const selectedClientId = clientBody.data.items[0].id;
   53 |     
   54 |    // шаг 2. отфильтровываем Engagments по клиентскому коду (пользовательский кейс)
   55 |       const engResponse = await request.get(`${BASE_URL}/api/engagements?clientIds=${selectedClientId}`, {
   56 |         headers: {
   57 |           "Authorization": `Bearer ${authToken}`,
   58 |           "Accept": "application/json"
   59 |         }
   60 |     });
   61 |
   62 |       expect(engResponse.status()).toBe(200);
   63 |
   64 |       // список никогда не должен быть пустым, потому что клиентский код присваивается при первом создании 
   65 |       // TODO – добавить вывод на случай ошибки с пустым списком
   66 |       engBody = await engResponse.json();
   67 |       expect(engBody.data.items.length).toBeGreaterThan(0);
   68 |     
   69 |       // шаг 3. проверяем, что отфильтрованные Engagments имеют одинаковый клиентский Id (selectedClientId)
   70 |       expect (engBody.data.items.every(engagment => 
   71 |         engagment.client.id) === selectedClientId);
   72 |     });
   73 |
   74 |   test('Пользователь без прав системного администратора не может удалить Engagment', async ({ request }) => {
   75 |       // сначала получаем uuid сущности, которую будем удалять
   76 |       // для простоты используем список, полученный в предыдущем тесте
   77 |       firstEngId = engBody.data.items[0].id;
   78 |       
   79 |       const deleteResponse = await request.delete(`${BASE_URL}/api/engagements/${firstEngId}`, {
   80 |         headers: {
   81 |           "Authorization": `Bearer ${authToken}`,
   82 |           "Accept": "application/json"
   83 |         }
   84 |       });
   85 |
   86 |       expect(deleteResponse.status()).toBe(403);
   87 |
   88 |       // дополнительная проверка, что uuid удаляемой сущности есть в списке всех uuids
   89 |       allEngIds = engBody.data.items.map(item => item.id);
   90 |       expect(allEngIds).toContain(firstEngId);
   91 |     });
   92 |
   93 |   test('Изменение атрибутов Engagment', async ({ request }) => {
   94 |       // для удобства будем использовать firstEngId
   95 |       const updateEngResponse = await request.patch(`${BASE_URL}/api/engagements/${firstEngId}`, {
   96 |         headers: {
   97 |           "Authorization": `Bearer ${authToken}`,
   98 |           "Accept": "application/json"
   99 |         },
  100 |         data: engagment
  101 |       });
  102 |       
  103 |       expect(updateEngResponse.status()).toBe(200);
  104 |
  105 |       // запрашиваем обновленный Engagement
  106 |       const updatedEngResponse = await request.get(`${BASE_URL}/api/engagements/${firstEngId}`, {
  107 |         headers: {
  108 |           "Authorization": `Bearer ${authToken}`,
  109 |           "Accept": "application/json"
  110 |         },
  111 |       });
  112 |
  113 |       updatedEngBody = await updatedEngResponse.json();
  114 |
  115 |       // проверяем, что поля Engagement обновились
  116 |       expect(updatedEngBody.data.department.id).toBe(engagment.departmentId);
  117 |       expect(updatedEngBody.data.name).toBe(engagment.name);
  118 |     });
  119 |
  120 |   test('Получение истории действий (логи) c Engagment', async ({ request }) => {
  121 |     const params = new URLSearchParams({
  122 |       limit: '50',                   // Ограничение количества записей
  123 |       'logGroups[]': 'ENGAGEMENT',   // Фильтр по группе логов
  124 |       offset: '0',                   // Смещение для пагинации
  125 |       sortField: 'createdAt',        // Поле сортировки
  126 |       sortOrder: 'DESC'              // Порядок сортировки (по убыванию)
  127 |     });
  128 |
  129 |     const logResponse = await request.get(
  130 |       `${BASE_URL}/api/engagements/${firstEngId}/logs?${params.toString()}`, {
  131 |         headers: {
  132 |           "Authorization": `Bearer ${authToken}`,
  133 |           "Accept": "application/json"
  134 |         }
  135 |     });
  136 |     
  137 |     const logsEng = await logResponse.json();
  138 |
> 139 |     expect (logsEng.data.items[0].description).toContain("Атрибут проекта Название проекта изменен.");
      |                                                ^ Error: expect(received).toContain(expected) // indexOf
  140 |     expect (logsEng.data.items[1].description).toContain("Атрибут проекта Отдел изменен.");
  141 |
  142 |     //console.log(logsEng.data.items[0].description);
  143 |     //console.log(logsEng.data.items[1].description);
  144 |   });
  145 | });
  146 |
  147 |
```