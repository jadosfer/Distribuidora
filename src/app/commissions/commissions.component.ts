import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
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
    private commissionsService: CommissionsService, private db: AngularFireDatabase ) { }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.subscription = this.commissionsService.getCommissionsByMonth().subscribe(commissionsByMonth => {
        this.commissionsByMonth = commissionsByMonth;
        this.clearCommissionsByMonth(this.commissionsByMonth);
        this.subscription = this.commissionsService.getCommissionsByMonth().subscribe(commissionsByMonth => {
          this.commissionsByMonth = commissionsByMonth;
        });
      });
    });
  }
  
  clearCommissionsByMonth(commissionsByMonth: any[]) {
    let lastMonth = commissionsByMonth[0].payload.val().month;
    let lastYear = commissionsByMonth[0].payload.val().year;
    commissionsByMonth.forEach((commision) => {
      if (commision.payload.val().month == lastMonth
        && commision.payload.val().year == lastYear) {
          console.log('cleaning 1 repited');
          this.db.object('/commissionsByMonth/' +  commision.key).remove();
        }
      else {
        lastMonth = commision.payload.val().month;
        lastYear = commision.payload.val().year;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
