import { CartService } from './../services/cart.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: any;
  carts: any[];
  titles: string[]=[];
  subscription: Subscription;
  filteredProduct:any[];
  products:any[];
  date: any;

  title: string;
  quantity: number;
  sortedData: any[];

  constructor(public cartService: CartService,
  private productService: ProductService,
  private route: ActivatedRoute,
  private auth: AuthService) {

    this.subscription = this.cartService.getAll().subscribe(carts => {
      this.carts = carts;
      // this.date = new Date(this.carts[5].payload.val().dateSended);
      // console.log(this.date);
    });


  }

  sortData(sort: Sort) {
    const data = this.carts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return this.compare(a.title, b.title, isAsc);
        case 'quantity': return this.compare(a.quantity, b.quantity, isAsc);
        default: return 0;
      }
    });
  }

  getTitle(item: any) {
    return item.title;
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }


  async ngOnInit(){
  }


  getTotalItems() {
    let cart = this.cartService.getCart();
    if (cart) return cart.cartItemCount;
    return 0;
  }

  getTotal() {
    let total = 0;
    if (this.carts) {
      this.carts.forEach(cart => {
        total += this.cartService.getTotalCost(cart);
      });
    }

    return total;
  }
}
