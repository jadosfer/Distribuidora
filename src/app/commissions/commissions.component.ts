import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { CommissionsService } from '../services/commissions.service';
import { OrdersService } from '../services/orders.service';
import { SellersService } from '../services/sellers.service';

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

  constructor(public ordersService: OrdersService, private auth: AuthService,
    private sellersService: SellersService, private commissionsService: CommissionsService ) { }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.commissionsService.getCommissionsByMonth().subscribe(commissionsByMonth => {
        this.commissionsByMonth = commissionsByMonth;
      });
    });
  }
}
