import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route:any, state: RouterStateSnapshot) {
    return this.auth.user$.map(user => {
      if (user) return true;
      this.router.navigate(['/'], {queryParams: { returnUrl: state.url }})
      return false
    });
  }
}
