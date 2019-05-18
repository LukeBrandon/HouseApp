import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    if (localStorage.getItem('userEmail') === null) {
      return false;
    } else {
      return true;
    }
  }

  login(userEmail) {
    localStorage.setItem('userEmail', userEmail);
  }

  logout() {
    localStorage.removeItem('userEmail');
  }
}
