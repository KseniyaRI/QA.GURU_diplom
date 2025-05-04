export class EngagementController {
  constructor(request, authToken) {
    this.request = request;
    this.authToken = authToken;
    this.headers = {
      "Authorization": `Bearer ${authToken}`,
      "Accept": "application/json"
    };
  }

  async getEngagementsByClientId(clientId) {
    const response = await this.request.get(`/api/engagements?clientIds=${clientId}`, {
      headers: this.headers
    });

    if (response.status() !== 200) {
      throw new Error(`Ошибка получения Engagements: ${response.status()}`);
    }

    return await response.json();
  }

  async getEngagementById(engagementId) {
    const response = await this.request.get(`/api/engagements/${engagementId}`, {
      headers: this.headers
    });

    if (response.status() !== 200) {
      throw new Error(`Ошибка получения Engagement: ${response.status()}`);
    }

    return await response.json();
  }

  async updateEngagement(engagementId, updateData) {
    const response = await this.request.patch(`/api/engagements/${engagementId}`, {
      headers: this.headers,
      data: updateData
    });

    if (response.status() !== 200) {
      throw new Error(`Ошибка обновления Engagement: ${response.status()}`);
    }

    return await response.json();
  }

  async getEngagementLogs(engagementId) {
    const params = new URLSearchParams({
      'logGroups[]': 'ENGAGEMENT',
      offset: '0',
      sortOrder: 'DESC'
    });

    const response = await this.request.get(
      `/api/engagements/${engagementId}/logs?${params.toString()}`, {
        headers: this.headers
      }
    );

    if (response.status() !== 200) {
      throw new Error(`Ошибка получения логов: ${response.status()}`);
    }

    return await response.json();
  }

  async getTeamMembers(engagementId) {
    const response = await this.request.get(`/api/engagements/${engagementId}/team-members`, {
      headers: this.headers
    });

    if (response.status() !== 200) {
      throw new Error(`Ошибка получения участников команды: ${response.status()}`);
    }

    return await response.json();
  }

  async deleteEngagement(engagementId) {
    const response = await this.request.delete(`/api/engagements/${engagementId}`, {
      headers: this.headers
    });

    return response;
  }
}