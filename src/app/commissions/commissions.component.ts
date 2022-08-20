import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { CommissionsService } from '../services/commissions.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss']
})
export class CommissionsComponent implements OnInit {

  appUser: AppUser;
  commissionsByMonth: any[];
  isExpanded: boolean = false;
  prodCatDetails: boolean = false;
  subscription: Subscription;

  constructor(public ordersService: OrdersService, private auth: AuthService,
    private commissionsService: CommissionsService ) { }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.subscription = this.commissionsService.getCommissionsByMonth().subscribe(commissionsByMonth => {
        this.commissionsByMonth = commissionsByMonth;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
