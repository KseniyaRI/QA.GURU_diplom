# Test info

- Name: API проверки >> Проверяем, что в команде Engagement единственный участник == current user
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:140:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 500
    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:148:44
```

# Test source

```ts
   48 |       const clientBody = await clientResponse.json();
   49 |       const selectedClientId = clientBody.data.items[0].id;
   50 |       
   51 |       // шаг 2. отфильтровываем Engagements по клиентскому коду (пользовательский кейс)
   52 |       const engResponse = await request.get(`${BASE_URL}/api/engagements?clientIds=${selectedClientId}`, {
   53 |           headers: {
   54 |             "Authorization": `Bearer ${authToken}`,
   55 |             "Accept": "application/json"
   56 |           }
   57 |       });
   58 |       expect(engResponse.status()).toBe(200);
   59 |       // список никогда не должен быть пустым, потому что клиентский код присваивается при первом создании 
   60 |       // TODO – добавить вывод на случай ошибки с пустым списком
   61 |       engBody = await engResponse.json();
   62 |       expect(engBody.data.items.length).toBeGreaterThan(0);
   63 |       
   64 |       // шаг 3. проверяем, что отфильтрованные Engagements имеют одинаковый клиентский Id (selectedClientId)
   65 |       expect(engBody.data.items.every(item => item.client.id === selectedClientId)).toBeTruthy();
   66 |     });
   67 |   
   68 |     test('Пользователь без прав системного администратора не может удалить Engagement', async ({ request }) => {
   69 |       // сначала получаем uuid сущности, которую будем удалять
   70 |       // для простоты используем список, полученный в предыдущем тесте
   71 |       firstEngId = engBody.data.items[0].id;
   72 |         
   73 |       const deleteResponse = await request.delete(`${BASE_URL}/api/engagements/${firstEngId}`, {
   74 |         headers: {
   75 |           "Authorization": `Bearer ${authToken}`,
   76 |           "Accept": "application/json"
   77 |         }
   78 |       });
   79 |       expect(deleteResponse.status()).toBe(403);
   80 |   
   81 |       // дополнительная проверка, что uuid удаляемой сущности есть в списке всех uuids
   82 |       allEngIds = engBody.data.items.map(item => item.id);
   83 |       expect(allEngIds).toContain(firstEngId);
   84 |     });
   85 |   
   86 |     test('Изменение атрибутов Engagement', async ({ request }) => {
   87 |       // для удобства используем firstEngId
   88 |       const updateEngResponse = await request.patch(`${BASE_URL}/api/engagements/${firstEngId}`, {
   89 |         headers: {
   90 |           "Authorization": `Bearer ${authToken}`,
   91 |           "Accept": "application/json"
   92 |         },
   93 |         data: engagement
   94 |       });
   95 |       expect(updateEngResponse.status()).toBe(200);
   96 |   
   97 |       // запрашиваем обновленный Engagement
   98 |       const updatedEngResponse = await request.get(`${BASE_URL}/api/engagements/${firstEngId}`, {
   99 |         headers: {
  100 |           "Authorization": `Bearer ${authToken}`,
  101 |           "Accept": "application/json"
  102 |         }
  103 |       });
  104 |       expect(updatedEngResponse.status()).toBe(200);
  105 |       updatedEngBody = await updatedEngResponse.json();
  106 |   
  107 |       // проверяем, что поля Engagement обновились
  108 |       expect(updatedEngBody.data.department.name).toBe(engagement.departmentName);
  109 |       expect(updatedEngBody.data.name).toBe(engagement.name);
  110 |     });
  111 |   
  112 |     test('Получение истории действий (логи) c Engagement', async ({ request }) => {
  113 |       const params = new URLSearchParams({
  114 |          // Фильтр по группе логов
  115 |         'logGroups[]': 'ENGAGEMENT', 
  116 |         // Смещение для пагинации
  117 |         offset: '0',    
  118 |         // Порядок сортировки (по убыванию)               
  119 |         sortOrder: 'DESC'              
  120 |       });
  121 |       const logResponse = await request.get(`${BASE_URL}/api/engagements/${firstEngId}/logs?${params.toString()}`, {
  122 |         headers: {
  123 |           "Authorization": `Bearer ${authToken}`,
  124 |           "Accept": "application/json"
  125 |         }
  126 |       });
  127 |       expect(logResponse.status()).toBe(200);
  128 |       const logsEng = await logResponse.json();
  129 |   
  130 |       // Проверка, что нужные логи есть среди первых 2-x записей (так как меняли всего два атрибута)
  131 |       const firstNLogs = logsEng.data.items.slice(0, 2);
  132 |       const hasNameChangeInFirstN = firstNLogs.some(log => 
  133 |         log.description && log.description.includes("Атрибут проекта Название проекта изменен."));
  134 |       const hasDepartmentChangeInFirstN = firstNLogs.some(log => 
  135 |         log.description && log.description.includes("Атрибут проекта Отдел изменен."));
  136 |
  137 |       expect(hasNameChangeInFirstN || hasDepartmentChangeInFirstN).toBeTruthy();
  138 |     });
  139 |   
  140 |     test('Проверяем, что в команде Engagement единственный участник == current user', async ({ request }) => {
  141 |       // шаг 1. запрашиваем полный список участников команды
  142 |       const teamMembersResponse = await request.get(`${BASE_URL}/api/engagements/${firstEngId}/team-members`, {
  143 |         headers: {
  144 |           "Authorization": `Bearer ${authToken}`,
  145 |           "Accept": "application/json"
  146 |         }
  147 |       });
> 148 |       expect(teamMembersResponse.status()).toBe(200);
      |                                            ^ Error: expect(received).toBe(expected) // Object.is equality
  149 |       const teamMembers = await teamMembersResponse.json();
  150 |       
  151 |       // шаг 2. сравниваем данные current user и списка команды
  152 |       // current user берем из переменных, которые использовали при авторизации
  153 |   
  154 |       // Проверяем, что в списке только один участник
  155 |       expect(teamMembers.data.length).toBe(1);
  156 |       
  157 |       // Проверяем, что username участника совпадает с текущим пользователем
  158 |       expect(teamMembers.data[0].user.username).toBe(AUTH_DATA.username);
  159 |     });
  160 | });
  161 |
```