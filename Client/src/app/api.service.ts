import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:15100';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  validateLogin(userEmail: string, userPassword: string) {
    const url = `${this.url}/login`;
    const postBody = {
      email: userEmail,
      password: userPassword,
    };

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(postBody), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then((response) => {
        console.log(`Login Success: ${response.success}`);
        if (response.success === true) {
          this.authService.login(response.email);
        }
      });

  }
}
