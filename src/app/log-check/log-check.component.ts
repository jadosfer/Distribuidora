import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { AppUser } from '../models/app-user';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-check',
  templateUrl: './log-check.component.html',
  styleUrls: ['./log-check.component.scss']
})
export class LogCheckComponent implements OnInit, OnDestroy {

  isMobile: boolean;
  appUser: AppUser;
  subscription: Subscription;
  //MOBILE_SIZE: number = 1000;

  constructor(
    public utilityService: UtilityService,
    public auth: AuthService
    ) {
      //this.isMobile = window.innerWidth <= this.MOBILE_SIZE;
      this.isMobile = utilityService.isMobile();
  }

  ngOnInit(): void {
    this.subscription = this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
    });
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.isMobile = window.innerWidth <= this.MOBILE_SIZE;
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
