import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalVariables } from '../app.global';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }
  data: any;

  constructor(
    private http: HttpClient,
    private config: globalVariables
  ) {
    localStorage.setItem('usersession', JSON.stringify(new Date()));
  }

  login(uemail?: string, pass?: string) {
    const reqheader = new HttpHeaders({ 'Content-Type': 'application/json' });
    const data = {
      process: this.config.USER_LOGIN,
      useremail: uemail,
      loginpassword: pass,
      plattype: this.config.PLATFORM_TYPE,
    };
    return this.http.post(this.config.apiUrl, data, { headers: reqheader });
  }
}
