import { EngagementsPage, CreateEngPage, PromisePage, SignInPage, EngagementPage } from './index.js';

export class App {
  constructor(page) {
    this.page = page;
    this.engagementsPage = new EngagementsPage(page);
    this.createEngPage = new CreateEngPage(page);
    this.promisePage = new PromisePage(page);
    this.signInPage = new SignInPage(page);
  }
  
  getEngagementPage() {
    return new EngagementPage(this.page);
  }
} 