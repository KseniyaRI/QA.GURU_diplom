# Test info

- Name: API проверки >> Изменение атрибутов Engagment
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:95:5

# Error details

```
Error: expect(received).toMatchObject(expected)

- Expected  -   4
+ Received  + 196

  Object {
-   "departmentId": "4ed1fcb3-96ad-4a2f-be79-2fda08f90544",
-   "typeIds": Array [
-     "c39b29d4-7811-4f0e-b7cb-d3df92ca392c",
-     "3a83d552-6143-44cd-bc57-4f28f699e767",
+   "client": Object {
+     "clientCode": "26402080",
+     "countryName": "Russian Federation",
+     "createdAt": "2024-12-19T07:55:39.029Z",
+     "id": "f63e8b41-0931-478e-b281-3276c3079a01",
+     "inn": "0000000060",
+     "kpp": "000000000",
+     "name": "Happy friday",
+     "nameEn": "Happy Friday",
+     "sector": "Other",
+     "updatedAt": "2024-12-19T07:55:39.029Z",
+   },
+   "createdAt": "2025-04-26T12:15:53.817Z",
+   "createdBy": Object {
+     "city": "Moscow",
+     "email": "aurora_dev_2@tedo.ru",
+     "enabled": true,
+     "grade": "Manager",
+     "id": "637e9826-0ebb-461d-be35-495379b64c16",
+     "identity": "Tatiana Rusanova",
+     "keycloakId": "046f2d2a-4e4f-4d9d-86c9-c9ac3c7920f0",
+     "ldapId": "a42dfc3d-e40d-403f-83c9-c7a8616caf97",
+     "nameEn": "Tatiana Rusanova",
+     "orgStructure": "CN=Tatiana Rusanova,OU=Assurance,OU=MOW,OU=Users,OU=RU,DC=tedo-dev,DC=local",
+     "username": "trusanova001",
+   },
+   "currentUserMetaData": Object {},
+   "department": Object {
+     "createdAt": "2023-06-12T22:21:17.105Z",
+     "id": "4ed1fcb3-96ad-4a2f-be79-2fda08f90544",
+     "name": "Отдел аудита финансового сектора",
+     "nameEn": "Trust - FS Assurance",
+     "updatedAt": "2023-06-12T22:21:17.105Z",
+   },
+   "financialYear": 2026,
+   "id": "3abd6b2c-85d2-4885-bd4b-ec3be5d444d8",
+   "isQRPRequired": false,
+   "name": "Тестовый проект",
+   "reportingStandards": Array [
+     Object {
+       "createdAt": "2023-06-12T22:21:18.152Z",
+       "id": "f3cdf0e6-691b-44ec-8e05-783656cacf0e",
+       "isIfrsMandatoryAuditCriteria": true,
+       "isIncomeRequired": false,
+       "isRasArea": false,
+       "isRasMandatoryAuditCriteria": false,
+       "name": "МСФО (IFRS Accounting Standards)",
+       "nameEn": "IFRS Accounting Standards",
+       "nameShort": "МСФО (IFRS Accounting Standards)",
+       "updatedAt": "2023-06-12T22:21:18.152Z",
+     },
+   ],
+   "status": "CREATED",
+   "team": Array [
+     Object {
+       "access": "FULL",
+       "id": "6c8b5238-34b8-4327-a0b7-bacd9ed87746",
+       "permissions": Array [
+         "ENGAGEMENT_READ",
+         "ENGAGEMENT_UPDATE",
+         "ENGAGEMENT_TEAM_READ",
+         "ENGAGEMENT_TEAM_MANAGE",
+         "ENGAGEMENT_TEAM_REMOVE_MEMBER",
+         "ENGAGEMENT_TEAM_UPDATE_OWNER",
+         "ENGAGEMENT_DELIVERABLE_TEAM_MANAGE",
+         "ENGAGEMENT_DELIVERABLE_READ",
+         "ENGAGEMENT_DELIVERABLE_CREATE",
+         "ENGAGEMENT_DELIVERABLE_UPDATE",
+         "ENGAGEMENT_DELIVERABLE_REMOVE",
+         "ENGAGEMENT_STRUCTURE_READ",
+         "ENGAGEMENT_OPORA_READ",
+         "ENGAGEMENT_OPORA_CREATE_OR_LINK",
+         "ENGAGEMENT_OPORA_DELETE_OR_UNLINK",
+         "ENGAGEMENT_OPORA_MANAGE",
+         "ENGAGEMENT_OPORA_CLONE",
+         "ENGAGEMENT_COMPONENT_READ",
+         "ENGAGEMENT_COMPONENT_CREATE",
+         "ENGAGEMENT_COMPONENT_REMOVE",
+         "ENGAGEMENT_COMPONENT_UPDATE",
+         "ENGAGEMENT_PROCEDURE_LIST",
+         "ENGAGEMENT_PROCEDURE_READ",
+         "ENGAGEMENT_PROCEDURE_CREATE",
+         "ENGAGEMENT_PROCEDURE_UPDATE",
+         "ENGAGEMENT_PROCEDURE_REMOVE",
+         "ENGAGEMENT_PROCEDURE_FILE_UPLOAD",
+         "ENGAGEMENT_NOTE_READ",
+         "ENGAGEMENT_NOTE_CREATE",
+         "ENGAGEMENT_NOTE_UPDATE",
+         "ENGAGEMENT_NOTE_REOPEN_ITS",
+         "ENGAGEMENT_NOTE_CLOSE_ITS",
+         "ENGAGEMENT_NOTE_REMOVE",
+         "ENGAGEMENT_NOTE_REPLY_UPDATE",
+         "ENGAGEMENT_NOTE_REPLY_CREATE",
+         "ENGAGEMENT_NOTE_REPLY_REMOVE",
+         "EXPLANATION_READ",
+         "EXPLANATION_CREATE",
+         "EXPLANATION_ADD_PROC_BEFORE_APPROVAL",
+         "EXPLANATION_DELETE_PROC_BEFORE_APPROVAL",
+         "EXPLANATION_ADD_DOC_BEFORE_APPROVAL",
+         "EXPLANATION_DELETE_DOC_BEFORE_APPROVAL",
+         "EXPLANATION_CHANGE_TEXT_BEFORE_APPROVAL",
+         "EXPLANATION_CHANGE_APPROVER_BEFORE_APPROVAL",
+         "ENGAGEMENT_DOCUMENT_LIST",
+         "ENGAGEMENT_DOCUMENT_READ",
+         "ENGAGEMENT_DOCUMENT_FILE_DOWNLOAD",
+         "ENGAGEMENT_RECYCLE_BIN_READ",
+         "ENGAGEMENT_RECYCLE_BIN_RESTORE",
+         "ENGAGEMENT_RECYCLE_BIN_FILE_DOWNLOAD",
+         "ENGAGEMENT_MATERIALITY_READ",
+         "ENGAGEMENT_MATERIALITY_MANAGE",
+         "ENG_STATISTICS_READ",
+         "MISSTATEMENT_READ",
+         "CONTROL_DEFICIENCY_READ",
+         "ENGAGEMENT_REVIEW_CHAIN_READ",
+         "ENGAGEMENT_REVIEW_CHAIN_MANAGE",
+         "ENGAGEMENT_REVIEW_CHAIN_CAN_BE_FIRST_LEVEL_EXECUTIVE",
+         "ENGAGEMENT_REVIEW_CHAIN_CAN_BE_SECOND_LEVEL_EXECUTIVE",
+         "ENGAGEMENT_DELIVERABLE_TEAM_SET_MANAGER",
+         "ENGAGEMENT_DELIVERABLE_TEAM_MANAGE_READONLY_AFTER_ARCHIVE",
+         "ENGAGEMENT_DELIVERABLE_UPDATE_AFTER_SIGN_OFF",
+         "MISSTATEMENT_CREATE",
+         "MISSTATEMENT_UPDATE",
+         "MISSTATEMENT_REMOVE",
+         "CONTROL_DEFICIENCY_CREATE",
+         "CONTROL_DEFICIENCY_UPDATE",
+         "CONTROL_DEFICIENCY_REMOVE",
+         "ENGAGEMENT_REVIEW_CAN_APPROVE_COMPLETELY_DONE_AND_CHANGED",
+         "ENGAGEMENT_REVIEW_CAN_INTERCEPT_ABOVE_ASSIGNEE",
+         "ENGAGEMENT_NOTE_EDIT_TOPIC",
+         "ENGAGEMENT_NOTE_EDIT_EXECUTOR",
+         "ENGAGEMENT_NOTE_EDIT_NOTE_ITS",
+         "ENGAGEMENT_NOTE_REOPEN",
+         "ENGAGEMENT_NOTE_CLOSE_OTHER",
+         "EXPLANATION_APPROVAL",
+         "EXPLANATION_ADD_PROC_AFTER_APPROVAL",
+         "EXPLANATION_DELETE_PROC_AFTER_APPROVAL",
+         "EXPLANATION_CHANGE_TEXT_AFTER_APPROVAL",
+         "ENGAGEMENT_RECYCLE_BIN_CLEAR",
+         "ENGAGEMENT_DATA_PROCESSING_READ",
+         "ENGAGEMENT_DATA_PROCESSING_CREATE",
+         "ENGAGEMENT_DATA_PROCESSING_REMOVE",
+         "ENGAGEMENT_DATA_PROCESSING_UPDATE",
+         "ENGAGEMENT_TEST_OF_DETAILS_CREATE",
+         "ENGAGEMENT_TEST_OF_DETAILS_READ",
+         "ENGAGEMENT_TEST_OF_DETAILS_REMOVE",
+         "ENGAGEMENT_TEST_OF_DETAILS_UPDATE",
+       ],
+       "roles": Array [
+         "EHS",
+         "MANAGER",
+       ],
+       "user": Object {
+         "city": "Moscow",
+         "email": "aurora_dev_2@tedo.ru",
+         "enabled": true,
+         "grade": "Manager",
+         "id": "637e9826-0ebb-461d-be35-495379b64c16",
+         "identity": "Tatiana Rusanova",
+         "keycloakId": "046f2d2a-4e4f-4d9d-86c9-c9ac3c7920f0",
+         "ldapId": "a42dfc3d-e40d-403f-83c9-c7a8616caf97",
+         "nameEn": "Tatiana Rusanova",
+         "orgStructure": "CN=Tatiana Rusanova,OU=Assurance,OU=MOW,OU=Users,OU=RU,DC=tedo-dev,DC=local",
+         "username": "trusanova001",
+       },
+     },
+   ],
+   "updatedAt": "2025-04-27T20:13:49.426Z",
+   "updatedBy": Object {
+     "city": "Moscow",
+     "email": "aurora_dev_2@tedo.ru",
+     "enabled": true,
+     "grade": "Manager",
+     "id": "637e9826-0ebb-461d-be35-495379b64c16",
+     "identity": "Tatiana Rusanova",
+     "keycloakId": "046f2d2a-4e4f-4d9d-86c9-c9ac3c7920f0",
+     "ldapId": "a42dfc3d-e40d-403f-83c9-c7a8616caf97",
+     "nameEn": "Tatiana Rusanova",
+     "orgStructure": "CN=Tatiana Rusanova,OU=Assurance,OU=MOW,OU=Users,OU=RU,DC=tedo-dev,DC=local",
+     "username": "trusanova001",
+   },
+   "verificationYear": 2026,
+   "workTypes": Array [
+     Object {
+       "createdAt": "2023-06-12T22:21:17.163Z",
+       "id": "95c41e47-334c-426f-86c3-323e16b1917c",
+       "isAuditCriterionRequired": true,
+       "isFinancialResultsRequired": true,
+       "isOpinionRequired": true,
+       "isRapAvailable": true,
+       "isRegular": true,
+       "isReview": false,
+       "name": "Аудит",
+       "nameEn": "Audit",
+       "nameShort": "Аудит",
+       "updatedAt": "2023-10-06T09:05:50.255Z",
+     },
    ],
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
   16 |     //.addReportingStandardIds()
   17 |     //.addVerificationPeriods()
   18 |     //.addVerificationYear()
   19 |     //.addFinancialYear()
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
  113 |           // reportingStandardIds: engagment.reportingStandardIds,
  114 |           // verificationPeriods: engagment.verificationPeriods,
  115 |           // verificationYear: engagment.verificationYear,
  116 |           // financialYear: engagment.financialYear
  117 |       });
  118 |     });
  119 |
  120 |     //test('Получение истории действий c Engagment', async ({ request }) => {
  121 |
  122 | //});
  123 | });
  124 |
```