import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(payload: {email: string; password: string;}) {
     return this.httpClient.post('https://reqres.in/api/login', payload);
  }

}
