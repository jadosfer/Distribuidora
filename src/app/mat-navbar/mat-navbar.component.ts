import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mat-navbar',
  templateUrl: './mat-navbar.component.html',
  styleUrls: ['./mat-navbar.component.scss']
})
export class MatNavbarComponent implements OnInit{

  VERSION = "V191104"
  appUser: AppUser;
  sellers: any;
  production = true;

  subscription: Subscription;
  subscription2: Subscription;


  constructor(private auth: AuthService, private ordersService: OrdersService, private router: Router) {
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
    this.subscription = this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      if (appUser) {
        this.ordersService.appUser = this.appUser;
        this.subscription2 = this.ordersService.getAllSellers().subscribe(sellers => {
          this.sellers = sellers;
          let create = true;
          for (let i=0;i<this.sellers.length;i++) {
            if (this.sellers[i].payload.val().name == this.appUser.name) create = false;
          }
          if (create) {
            this.ordersService.createSeller({
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
