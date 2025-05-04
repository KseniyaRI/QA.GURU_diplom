export class ClientController {
  constructor(request, authToken) {
    this.request = request;
    this.authToken = authToken;
    this.headers = {
      "Authorization": `Bearer ${authToken}`,
      "Accept": "application/json"
    };
  }

  async getClientByCode(clientCode) {
    const response = await this.request.get(`/api/dictionaries/clients?search=${clientCode}`, {
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
}