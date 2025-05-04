import { test, expect } from '@playwright/test';
import { USERNAME, PASSWORD, CLIENT_CODE } from '../sources/consts/index.js';
import { EngagementBuilder } from '../sources/builders/engagement.builder.js';
import { AuthController, ClientController, EngagementController } from '../sources/controllers/index.js';

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
      const authController = new AuthController(request);
      authToken = await authController.getAuthToken(USERNAME, PASSWORD);
    });

    test('Проверка фильтрации проектов по клиентскому коду', async ({ request }) => {
      const clientController = new ClientController(request, authToken);
      const engagementController = new EngagementController(request, authToken);
      
      // шаг 1. Получаем клиента по коду
      const client = await clientController.getClientByCode(CLIENT_CODE);
      const selectedClientId = client.id;
      
      // шаг 2. Получаем Engagements по клиентскому id
      engBody = await engagementController.getEngagementsByClientId(selectedClientId);
      expect(engBody.data.items.length).toBeGreaterThan(0);
      
      // шаг 3. Проверяем, что отфильтрованные Engagements имеют одинаковый клиентский Id
      expect(engBody.data.items.every(item => item.client.id === selectedClientId)).toBeTruthy();
    });
  
    test('Пользователь без прав системного администратора не может удалить Engagement', async ({ request }) => {
      // Используем данные из предыдущего теста
      firstEngId = engBody.data.items[0].id;
        
      // Пытаемся удалить проект через контроллер
      const engagementController = new EngagementController(request, authToken);
      const deleteResponse = await engagementController.deleteEngagement(firstEngId);
      expect(deleteResponse.status()).toBe(403);
  
      // Проверяем, что UUID удаляемой сущности есть в списке всех UUIDs
      allEngIds = engBody.data.items.map(item => item.id);
      expect(allEngIds).toContain(firstEngId);
    });
  
    test('Изменение атрибутов Engagement', async ({ request }) => {
      const engagementController = new EngagementController(request, authToken);
      
      // Обновляем проект через контроллер
      await engagementController.updateEngagement(firstEngId, engagement);
  
      // Запрашиваем обновленный Engagement
      updatedEngBody = await engagementController.getEngagementById(firstEngId);
  
      // Проверяем, что поля Engagement обновились
      expect(updatedEngBody.data.department.id).toBe(engagement.departmentId);
      expect(updatedEngBody.data.name).toBe(engagement.name);
    });
  
    test('Получение истории действий (логи) c Engagement', async ({ request }) => {
      const engagementController = new EngagementController(request, authToken);
      
      // Получаем логи через контроллер
      const logsEng = await engagementController.getEngagementLogs(firstEngId);
  
      // Проверка, что нужные логи есть среди первых 2-x записей (так как меняли всего два атрибута)
      const firstNLogs = logsEng.data.items.slice(0, 2);
      const hasNameChangeInFirstN = firstNLogs.some(log => 
        log.description && log.description.includes("Атрибут проекта Название проекта изменен."));
      const hasDepartmentChangeInFirstN = firstNLogs.some(log => 
        log.description && log.description.includes("Атрибут проекта Отдел изменен."));

      expect(hasNameChangeInFirstN || hasDepartmentChangeInFirstN).toBeTruthy();
    });
  
    test('Проверяем, что в команде Engagement единственный участник == current user', async ({ request }) => {
      const engagementController = new EngagementController(request, authToken);
      
      // Получаем участников команды через контроллер
      const teamMembers = await engagementController.getTeamMembers(firstEngId);
      
      // Проверяем, что в списке только один участник
      expect(teamMembers.data.length).toBe(1);
      
      // Проверяем, что username участника совпадает с текущим пользователем
      expect(teamMembers.data[0].user.username).toBe(USERNAME);
    });
});
