import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UtilityService } from '../services/utility.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private auth: AuthService, public utilityService: UtilityService) {}


  login() {
    this.auth.login();
  }
}
