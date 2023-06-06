import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';
import { UtilityService } from '../services/utility.service';
import { AppUser } from '../models/app-user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isMenuOpen = false;
  MOBILE_SIZE: number = 1000;
  appUser: AppUser;
  sellers: any;
  production = true;
  loading = true;

  subscription: Subscription;
  subscription2: Subscription;

  constructor(
    public auth: AuthService,
    private ordersService: OrdersService,
    private utilityService: UtilityService,
    private router: Router
    ) { }

  ngOnInit() {
    this.subscription = this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      if (appUser) {
        this.ordersService.appUser = this.appUser;
        this.subscription2 = this.ordersService.getAllSellers().subscribe(sellers => {
          this.sellers = sellers;
          let create = true;
          for (let i=0;i<this.sellers.length;i++) {
            if (this.sellers[i].payload.val().name == this.appUser?.name) create = false;
          }
          if (create) {
            this.ordersService.createSeller({
              "address": "",
              "cuil": "",
              "name": appUser.name,
              "phone": ""
            });
          }
          this.loading = false;
          this.utilityService.navBarLoading = false;
        });
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  logout() {
    this.auth.logout();
    this.appUser = {
      name: ""
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
