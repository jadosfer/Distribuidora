import { Router } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AppUser } from './models/app-user';

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
  MOBILE_SIZE: number = 1000;

  constructor(private auth: AuthService, private userService: UserService,
     private router: Router) {
      this.isMobile = window.innerWidth <= this.MOBILE_SIZE;
      this.subscription = auth.user$.subscribe(user => {
        if (!user) return;
        this.user = user;
        this.userService.save(user);

        let returnUrl = localStorage.getItem('returnUrl');
        if (!returnUrl) return;

        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);
      });
      this.loading = false
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth <= this.MOBILE_SIZE;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
