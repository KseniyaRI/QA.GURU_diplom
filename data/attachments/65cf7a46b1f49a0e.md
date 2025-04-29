# Test info

- Name: API проверки >> Проверка фильтрации проектов по клиентскому коду
- Location: /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:34:3

# Error details

```
Error: apiRequestContext.get: getaddrinfo ENOTFOUND aurora-dev.dev.tedo.ruapi
Call log:
  - → GET https://aurora-dev.dev.tedo.ruapi/engagements?clientIds=f63e8b41-0931-478e-b281-3276c3079a01
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.25 Safari/537.36
    - accept: application/json
    - accept-encoding: gzip,deflate,br
    - Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJNR2prZnZlbWVwRy02bFZHUzVPMVdhZ0RHeE1UTWZOWUg1aVNnLTQtMnc0In0.eyJleHAiOjE3NDU3NDc3MTIsImlhdCI6MTc0NTc0NTkxMiwianRpIjoiYzNkNDAxZjYtNWU1Ni00ODk2LTgxZGYtNGE3NmUyNTI1OTEwIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay12Mi5kZXYudGVkby5ydS9yZWFsbXMvYXVyb3JhLXJlYWxtIiwiYXVkIjpbImJlLWNsaWVudCIsImFjY291bnQiXSwic3ViIjoiMDQ2ZjJkMmEtNGU0Zi00ZDlkLTg2YzktYzlhYzNjNzkyMGYwIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZmUtY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6ImU0NTA3M2IyLTY3ZTctNGUzMC1iNDA5LTUwMWIxNDhlOTdjYiIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2F1cm9yYS1kZXYuZGV2LnRlZG8ucnU6NDQzIiwiaHR0cHM6Ly9hdXJvcmEtc3RhYmxlLmRldi50ZWRvLnJ1OjQ0MyIsImh0dHBzOi8vYXVyb3JhLXJlbGVhc2UuZGV2LnRlZG8ucnUiLCJodHRwOi8va2V5Y2xvYWsuc2hhcmVkOjgwODAiLCJodHRwczovL2F1cm9yYS1kZXYuZGV2LnRlZG8ucnUiLCJodHRwczovL2F1cm9yYS1yZWxlYXNlLmRldi50ZWRvLnJ1OjQ0MyIsImh0dHA6Ly9hdXJvcmEtbGItZGV2LmRldi50ZWRvLnJ1OjgwODAiLCJodHRwOi8vMTkyLjE2OC44OC4zNTo0MjAwIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cHM6Ly9rZXljbG9hay5kZXYudGVkby5ydTo0NDMiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlJFUE9TSVRPUllfT1dORVJfTUFTVEVSIiwiZGVmYXVsdC1yb2xlcy1hdXJ1bSIsIlJFUE9TSVRPUllfT1dORVIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiVVNFUiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImJlLWNsaWVudCI6eyJyb2xlcyI6WyJSRVBPU0lUT1JZX09XTkVSX01BU1RFUiIsIlJFUE9TSVRPUllfT1dORVIiLCJVU0VSIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX0sImZlLWNsaWVudCI6eyJyb2xlcyI6WyJVU0VSIl19fSwic2NvcGUiOiJlbWFpbCBvcGVuaWQgcHJvZmlsZSIsInNpZCI6ImU0NTA3M2IyLTY3ZTctNGUzMC1iNDA5LTUwMWIxNDhlOTdjYiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IlRhdGlhbmEgUnVzYW5vdmEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0cnVzYW5vdmEwMDEiLCJnaXZlbl9uYW1lIjoiVGF0aWFuYSIsImZhbWlseV9uYW1lIjoiUnVzYW5vdmEiLCJlbWFpbCI6ImF1cm9yYV9kZXZfMkB0ZWRvLnJ1In0.nlNv7_FObk4wQuD54pTM_y08nxoSfqfpDnjotMbWgFtcku-xQYfuLBF-r0l1gw5diJeylYPPMAdJnNjtzG7RcFvXzrLASSz5aTUW4C0bRwlrLgtAOKT7phAuV7sqpe2UACttiPCHAGBkQ3l1_DPHSXmF2z5w3qFJnclUdvxlSHM_zdqw2ZQVi3O9Yu3Lcqgt_I-ZgpOAxWNlKNSjC9MXSjXvYydYKY0Wzwq-CzcXxTVIRvRC9uHMeABQ-bo9AgINlK7zpsW-U5DHKX0_UuEAkwf0ZjuODRqSugJrd7pq555qmyxWsMTb5DbaOnAeYk3ID5B6IS1XVIyKhWGPI7strA
    - Connection: keep-alive

    at /Users/kryabukhin001/Documents/QA.GURU/QA.GURU_diplom/specs/api.spec.js:53:41
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
> 53 |       const engResponse = await request.get(`${BASE_URL}api/engagements?clientIds=f63e8b41-0931-478e-b281-3276c3079a01`, {
     |                                         ^ Error: apiRequestContext.get: getaddrinfo ENOTFOUND aurora-dev.dev.tedo.ruapi
  54 |         headers: {
  55 |           "Authorization": `Bearer ${authToken}`,
  56 |           "Accept": "application/json",
  57 |           "Connection": "keep-alive"
  58 |         }
  59 |     });
  60 |
  61 |       console.log(engResponse);
  62 |       const engBody = await engResponse.json();
  63 |       expect(engResponse.status()).toBe(200);
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