/*import { BASE_URL } from '../../playwright.config.js';

export class ClientController {
  constructor(request, authToken) {
    this.request = request;
    this.authToken = authToken;
    this.headers = {
      "Authorization": `Bearer ${authToken}`,
      "Accept": "application/json"
    };
  }

   * Поиск клиента по коду
   * @param {string} clientCode - код клиента
   * @returns {Promise<Object>} - данные клиента

  async getClientByCode(clientCode) {
    const response = await this.request.get(`${BASE_URL}/api/dictionaries/clients?search=${clientCode}`, {
      headers: this.headers
    });

    if (response.status() !== 200) {
      throw new Error(`Ошибка поиска клиента: ${response.status()}`);
    }

    const body = await response.json();
    
    if (!body.data || !body.data.items || body.data.items.length === 0) {
      throw new Error(`Клиент с кодом ${clientCode} не найден`);
    }
    
    return body.data.items[0];
  }
} */