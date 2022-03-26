import { SellersService } from './../services/sellers.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mat-navbar',
  templateUrl: './mat-navbar.component.html',
  styleUrls: ['./mat-navbar.component.scss']
})
export class MatNavbarComponent implements OnInit{

  appUser: AppUser;
  sellers: any;
  production = true;

  constructor(private auth: AuthService, private ordersService: OrdersService, private router: Router,
    private sellersService: SellersService) {
  }

  logout() {
    //this.router.navigateByUrl('/checkout');
    this.ordersService.clearOrder();
    this.auth.logout()
    this.router.navigate(['/checkout/']);
  }

  getTotalItems() {
    // let order = this.ordersService.getOrder();
    // return 0;
  }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      if (appUser) {
        this.ordersService.appUser = this.appUser;
        this.sellersService.getAll().subscribe(sellers => {
          this.sellers = sellers;
          let create = true;
          for (let i=0;i<this.sellers.length;i++) {
            if (this.sellers[i].payload.val().name == this.appUser.name) create = false;
          }
          if (create) {
            this.sellersService.create({
              "address": "",
              "cuil": "",
              "name": appUser.name,
              "phone": ""
            });
          }

        });
      }
    });

  }
}
