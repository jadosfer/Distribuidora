import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  mediaSub: Subscription;
  itemValue = '';
  items: Observable<any>;
  subscription: Subscription

  constructor(private auth: AuthService, private userService: UserService,
     private router: Router) {

    this.subscription = auth.user$.subscribe(user => {
      if (!user) return;

      this.userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
