import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'House App';
  loggedIn: boolean;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
  }
}
