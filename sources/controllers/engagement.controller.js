/*import { BASE_URL } from '../../playwright.config.js';

export class EngagementController {
  constructor(request, authToken) {
    this.request = request;
    this.authToken = authToken;
    this.headers = {
      "Authorization": `Bearer ${authToken}`,
      "Accept": "application/json"
    };
  }

  /**
   * Получение списка Engagements с фильтрацией по клиенту
   * @param {string} clientId - ID клиента для фильтрации
   * @returns {Promise<Object>} - список Engagements

  async getEngagementsByClientId(clientId) {
    const response = await this.request.get(`${BASE_URL}/api/engagements?clientIds=${clientId}`, {
      headers: this.headers
    });

    if (response.status() !== 200) {
      throw new Error(`Ошибка получения Engagements: ${response.status()}`);
    }

    return await response.json();
  }

  /**
   * Получение данных одного Engagement по ID
   * @param {string} engagementId - ID Engagement
   * @returns {Promise<Object>} - данные Engagement
   
  async getEngagementById(engagementId) {
    const response = await this.request.get(`${BASE_URL}/api/engagements/${engagementId}`, {
      headers: this.headers
    });

    if (response.status() !== 200) {
      throw new Error(`Ошибка получения Engagement: ${response.status()}`);
    }

    return await response.json();
  }

  /**
   * Обновление данных Engagement
   * @param {string} engagementId - ID Engagement
   * @param {Object} updateData - данные для обновления
   * @returns {Promise<Object>} - обновленные данные

  async updateEngagement(engagementId, updateData) {
    const response = await this.request.patch(`${BASE_URL}/api/engagements/${engagementId}`, {
      headers: this.headers,
      data: updateData
    });

    if (response.status() !== 200) {
      throw new Error(`Ошибка обновления Engagement: ${response.status()}`);
    }

    return await response.json();
  }

  /**
   * Получение истории действий с Engagement
   * @param {string} engagementId - ID Engagement
   * @returns {Promise<Object>} - история логов
   
  async getEngagementLogs(engagementId) {
    const params = new URLSearchParams({
      'logGroups[]': 'ENGAGEMENT',
      offset: '0',
      sortOrder: 'DESC'
    });

    const response = await this.request.get(
      `${BASE_URL}/api/engagements/${engagementId}/logs?${params.toString()}`, {
        headers: this.headers
      }
    );

    if (response.status() !== 200) {
      throw new Error(`Ошибка получения логов: ${response.status()}`);
    }

    return await response.json();
  }

  /**
   * Получение списка участников команды Engagement
   * @param {string} engagementId - ID Engagement
   * @returns {Promise<Object>} - список участников

  async getTeamMembers(engagementId) {
    const response = await this.request.get(`${BASE_URL}/api/engagements/${engagementId}/team-members`, {
      headers: this.headers
    });

    if (response.status() !== 200) {
      throw new Error(`Ошибка получения участников команды: ${response.status()}`);
    }

    return await response.json();
  }
} */