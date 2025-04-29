import { test, expect } from '@playwright/test';
import { BASE_URL, KEYCLOAK_URL, USERNAME, PASSWORD, CLIENT_CODE } from '../sources/consts/index.js';
import { EngagementBuilder } from '../sources/builders/engagement.builder.js';

// создаем объект с обязательными параметрами, который будем передавать в запросе на авторизацию
const AUTH_DATA = {
  password: PASSWORD,
  client_id: "fe-client",
  grant_type: "password",
  username: USERNAME
};

// создаем нужные атрибуты тестируемой сущности
const engagement = new EngagementBuilder()
      .addCustomName()
      .addDepartmentId()
      .updateEngagement()

test.describe('API проверки', () => {
    let authToken;
    let engBody;
    let allEngIds;
    let firstEngId;
    let updatedEngBody;

    test.beforeAll('Авторизация и получение токена', async ({ request }) => {
      const response = await request.post(KEYCLOAK_URL, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        form: AUTH_DATA
      });
      expect(response.status()).toBe(200);
      const body = await response.json();
      authToken = body.access_token;
    });

    test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
      // шаг 1. делаем запрос к списку клиентов с фильтром по коду, чтобы получить id клиента
      // клиентский код такой же уникальный, как клиентский id
      const clientResponse = await request.get(`${BASE_URL}/api/dictionaries/clients?search=${CLIENT_CODE}`, { 
          headers: {
            "Authorization": `Bearer ${authToken}`,
            "Accept": "application/json"
          }
      });
      expect(clientResponse.status()).toBe(200);
      const clientBody = await clientResponse.json();
      const selectedClientId = clientBody.data.items[0].id;
      
      // шаг 2. отфильтровываем Engagements по клиентскому коду (пользовательский кейс)
      const engResponse = await request.get(`${BASE_URL}/api/engagements?clientIds=${selectedClientId}`, {
          headers: {
            "Authorization": `Bearer ${authToken}`,
            "Accept": "application/json"
          }
      });
      expect(engResponse.status()).toBe(200);
      // список никогда не должен быть пустым, потому что клиентский код присваивается при первом создании 
      // TODO – добавить вывод на случай ошибки с пустым списком
      engBody = await engResponse.json();
      expect(engBody.data.items.length).toBeGreaterThan(0);
      
      // шаг 3. проверяем, что отфильтрованные Engagements имеют одинаковый клиентский Id (selectedClientId)
      expect(engBody.data.items.every(item => item.client.id === selectedClientId)).toBeTruthy();
    });
  
    test('Пользователь без прав системного администратора не может удалить Engagement', async ({ request }) => {
      // сначала получаем uuid сущности, которую будем удалять
      // для простоты используем список, полученный в предыдущем тесте
      firstEngId = engBody.data.items[0].id;
        
      const deleteResponse = await request.delete(`${BASE_URL}/api/engagements/${firstEngId}`, {
        headers: {
          "Authorization": `Bearer ${authToken}`,
          "Accept": "application/json"
        }
      });
      expect(deleteResponse.status()).toBe(403);
  
      // дополнительная проверка, что uuid удаляемой сущности есть в списке всех uuids
      allEngIds = engBody.data.items.map(item => item.id);
      expect(allEngIds).toContain(firstEngId);
    });
  
    test('Изменение атрибутов Engagement', async ({ request }) => {
      // для удобства используем firstEngId
      const updateEngResponse = await request.patch(`${BASE_URL}/api/engagements/${firstEngId}`, {
        headers: {
          "Authorization": `Bearer ${authToken}`,
          "Accept": "application/json"
        },
        data: engagement
      });
      expect(updateEngResponse.status()).toBe(200);
  
      // запрашиваем обновленный Engagement
      const updatedEngResponse = await request.get(`${BASE_URL}/api/engagements/${firstEngId}`, {
        headers: {
          "Authorization": `Bearer ${authToken}`,
          "Accept": "application/json"
        }
      });
      expect(updatedEngResponse.status()).toBe(200);
      updatedEngBody = await updatedEngResponse.json();
  
      // проверяем, что поля Engagement обновились
      expect(updatedEngBody.data.department.id).toBe(engagement.departmentId);
      expect(updatedEngBody.data.name).toBe(engagement.name);
    });
  
    test('Получение истории действий (логи) c Engagement', async ({ request }) => {
      const params = new URLSearchParams({
         // Фильтр по группе логов
        'logGroups[]': 'ENGAGEMENT', 
        // Смещение для пагинации
        offset: '0',    
        // Порядок сортировки (по убыванию)               
        sortOrder: 'DESC'              
      });
      const logResponse = await request.get(`${BASE_URL}/api/engagements/${firstEngId}/logs?${params.toString()}`, {
        headers: {
          "Authorization": `Bearer ${authToken}`,
          "Accept": "application/json"
        }
      });
      expect(logResponse.status()).toBe(200);
      const logsEng = await logResponse.json();
  
      // Проверка, что нужные логи есть среди первых 2-x записей (так как меняли всего два атрибута)
      const firstNLogs = logsEng.data.items.slice(0, 2);
      const hasNameChangeInFirstN = firstNLogs.some(log => 
        log.description && log.description.includes("Атрибут проекта Название проекта изменен."));
      const hasDepartmentChangeInFirstN = firstNLogs.some(log => 
        log.description && log.description.includes("Атрибут проекта Отдел изменен."));

      expect(hasNameChangeInFirstN || hasDepartmentChangeInFirstN).toBeTruthy();
    });
  
    test('Проверяем, что в команде Engagement единственный участник == current user', async ({ request }) => {
      // шаг 1. запрашиваем полный список участников команды
      const teamMembersResponse = await request.get(`${BASE_URL}/api/engagements/${firstEngId}/team-members`, {
        headers: {
          "Authorization": `Bearer ${authToken}`,
          "Accept": "application/json"
        }
      });
      expect(teamMembersResponse.status()).toBe(200);
      const teamMembers = await teamMembersResponse.json();
      
      // шаг 2. сравниваем данные current user и списка команды
      // current user берем из переменных, которые использовали при авторизации
  
      // Проверяем, что в списке только один участник
      expect(teamMembers.data.length).toBe(1);
      
      // Проверяем, что username участника совпадает с текущим пользователем
      expect(teamMembers.data[0].user.username).toBe(AUTH_DATA.username);
    });
});
