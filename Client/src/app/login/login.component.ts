import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userEmail = new FormControl();
  userPassword = new FormControl();

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
  }

  submitLogin() {
    this.apiService.validateLogin(this.userEmail.value, this.userPassword.value);
  }

}
