import { Component, HostListener, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'mat-navbar',
  templateUrl: './mat-navbar.component.html',
  styleUrls: ['./mat-navbar.component.scss']
})
export class MatNavbarComponent implements OnInit{

  VERSION = "V051533";
  MOBILE_SIZE: number = 1000;
  appUser: AppUser;
  sellers: any;
  production = true;
  loading = true;
  isMobile = false;
  subscription: Subscription;
  subscription2: Subscription;


  constructor(
    private auth: AuthService,
    private ordersService: OrdersService,
    private router: Router,
    private utilityService: UtilityService
    ) {
  }

  logout() {
    //this.router.navigateByUrl('/');
    //this.ordersService.clearOrder();
    this.auth.logout()
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
            if (this.sellers[i].payload.val().name == this.appUser?.name) create = false;
          }
          if (create) {
            this.ordersService.createSeller({
              "address": "",
              "cuil": "",
              "name": appUser?.name,
              "phone": ""
            });
          }
          this.loading = false;
          this.utilityService.navBarLoading = false;
        });
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // this.isMobile = window.innerWidth <= this.MOBILE_SIZE;
    this.isMobile = this.utilityService.isMobile()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
