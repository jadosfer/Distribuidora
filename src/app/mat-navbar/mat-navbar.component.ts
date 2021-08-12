
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'mat-navbar',
  templateUrl: './mat-navbar.component.html'
})
export class MatNavbarComponent implements OnInit{

  appUser: AppUser;

  constructor(private auth: AuthService, private cartService: CartService) {
  }

  logout() {
    this.auth.logout()
  }

  getTotalItems() {
    let cart = this.cartService.getCart();
    if (cart) return cart.cartItemCount;
    return 0;
  }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.cartService.userName = this.appUser.name;
    });
  }
}
