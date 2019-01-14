import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  loadDashboard$() {
    return this.httpClient.get('https://reqres.in/api/users');
  }
}
