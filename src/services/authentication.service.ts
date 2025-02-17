import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
BaseURL = 'http://localhost:8080/saira';
registerURL = '/auth/signup'
loginURL = '/auth/login'
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(`${this.BaseURL}${this.registerURL}`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.BaseURL}${this.loginURL}`, user);
  }

  saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

}
