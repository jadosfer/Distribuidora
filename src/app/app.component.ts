import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  user: any
  mediaSub: Subscription;
  itemValue = '';
  items: Observable<any>;
  subscription: Subscription
  loading = true;
  isMobile = false;
  //MOBILE_SIZE: number = 1000;

  constructor(private auth: AuthService,
    private userService: UserService,
    private router: Router,
    private utilityService: UtilityService) {

    this.isMobile = this.utilityService.isMobile()
    this.subscription = auth.user$.subscribe(user => {
      if (!user) return;
      this.user = user;
      this.userService.save(user);
      let returnUrl = localStorage.getItem('returnUrl');
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
    this.loading = false;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
