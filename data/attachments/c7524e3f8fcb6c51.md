# Test info

- Name: API проверки >> Прверяем, что в команде Engagement единственный участник == current user
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:152:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "trusanova001"
Received: undefined
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:170:35
```

# Test source

```ts
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
  113 |       expect(updatedEngResponse.status()).toBe(200);
  114 |
  115 |       updatedEngBody = await updatedEngResponse.json();
  116 |
  117 |       // проверяем, что поля Engagement обновились
  118 |       expect(updatedEngBody.data.department.id).toBe(engagment.departmentId);
  119 |       expect(updatedEngBody.data.name).toBe(engagment.name);
  120 |     });
  121 |
  122 |   test('Получение истории действий (логи) c Engagment', async ({ request }) => {
  123 |     const params = new URLSearchParams({
  124 |       limit: '50',                   // Ограничение количества записей
  125 |       'logGroups[]': 'ENGAGEMENT',   // Фильтр по группе логов
  126 |       offset: '0',                   // Смещение для пагинации
  127 |       sortField: 'createdAt',        // Поле сортировки
  128 |       sortOrder: 'DESC'              // Порядок сортировки (по убыванию)
  129 |     });
  130 |
  131 |     const logResponse = await request.get(`${BASE_URL}/api/engagements/${firstEngId}/logs?${params.toString()}`, {
  132 |         headers: {
  133 |           "Authorization": `Bearer ${authToken}`,
  134 |           "Accept": "application/json"
  135 |         }
  136 |     });
  137 |     
  138 |     expect(logResponse.status()).toBe(200);
  139 |
  140 |     const logsEng = await logResponse.json();
  141 |
  142 |     // Проверка, что нужные логи есть среди первых 2-x записей (так как меняли всего два атрибута)
  143 |     const firstNLogs = logsEng.data.items.slice(0, 2);
  144 |     const hasNameChangeInFirstN = firstNLogs.some(log => 
  145 |       log.description && log.description.includes("Атрибут проекта Название проекта изменен.")
  146 |     );
  147 |     const hasDepartmentChangeInFirstN = firstNLogs.some(log => 
  148 |       log.description && log.description.includes("Атрибут проекта Отдел изменен.")
  149 |     );
  150 |   });
  151 |
  152 |   test('Прверяем, что в команде Engagement единственный участник == current user', async ({ request }) => {
  153 |     // шаг 1. запрашиваем полный список участников команды
  154 |     const teamMembersResponse = await request.get(`${BASE_URL}/api/engagements/${firstEngId}/team-members`, {
  155 |       headers: {
  156 |         "Authorization": `Bearer ${authToken}`,
  157 |         "Accept": "application/json"
  158 |       }
  159 |     });
  160 |
  161 |     expect(teamMembersResponse.status()).toBe(200);
  162 |
  163 |     const teamMembers = await teamMembersResponse.json();
  164 |     console.log(teamMembers);
  165 |     console.log(USERNAME);
  166 |
  167 |     // шаг 2. сравниваем данные current user и списка команды
  168 |     // current user берем из переменных, которые использовали при авторизации
  169 |
> 170 |     expect(teamMembers.data.user).toBe(USERNAME);
      |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  171 |   });
  172 | });
  173 |
  174 |
```