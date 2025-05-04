import { KEYCLOAK_URL } from '../../playwright.config.js';

export class AuthController {
  constructor(request) {
    this.request = request;
  }

  async getAuthToken(username, password) {
    const AUTH_DATA = {
      password: password,
      client_id: "fe-client",
      grant_type: "password",
      username: username
    };
    
    const response = await this.request.post(KEYCLOAK_URL, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      form: AUTH_DATA
    });

    if (response.status() !== 200) {
      throw new Error(`Ошибка авторизации: ${response.status()}`);
    }

    const body = await response.json();
    return body.access_token;
  }
}