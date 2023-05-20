import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { AppUser } from '../models/app-user';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  appUser: AppUser;
  subscription: Subscription;

  constructor(
    public utilityService: UtilityService,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
    this.subscription = this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
