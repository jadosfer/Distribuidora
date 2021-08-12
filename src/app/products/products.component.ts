import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Sort } from '@angular/material/sort';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products$:any;
  category: string | null;
  products:any[];
  filteredProducts:any[];
  subscription: Subscription;
  cart: any;
  //cartId: string | null;

  titles: string[]=[];

  filteredProduct:any[];

  title: string;
  quantity: number;
  sortedData: any[];
  sended: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    public cartService: CartService
  ) {
    this.cart = this.cartService.getCart();

    this.filteredProducts = [];
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        if (this.products) {
          this.filteredProducts = (this.category) ?
          this.products.filter(p =>
            p.payload.val().category == this.category) :
          this.products;
        }
      });
    });

    this.filteredProduct = [];

    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      this.sortedData = this.filteredProducts;
    });
  }

  sortData(sort: Sort) {
    const data = this.filteredProduct;
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

  getQuantity(item: any) {
    let cart = this.cartService.getCart();
    if (!cart) return 0;
    for (let i=0;i<cart.items.length;i++) {
      if (cart.items[i].title == item.payload.val().title) return cart.items[i].quantity;
    }
    return 0;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }


  async ngOnInit(){
  }

  updateItemQuantity(productId: string, change: number){
    this.sended = false;
    this.filteredProduct = (productId) ?
          this.products.filter(p =>
            p.key == productId) : this.products;
    this.cartService.updateItemQuantity(this.filteredProduct[0], change);
  }

  getTotalItems() {
    let cart = this.cartService.getCart();
    if (cart) return cart.cartItemCount;
    return 0;
  }

  getTotal() {
    let cart = this.cartService.getCart();
    if (!cart) return 0;
    let total = 0;
    for (let i=0;i<cart.items.length;i++) {
      total += cart.items[i].quantity * cart.items[i].price;
    }
    return total;
  }

  sendPedido() {
    let cart = this.cartService.getCart();
    this.cartService.sendPedido(cart);
    this.sended = true;
  }

  reset() {
    localStorage.clear();
  }

}
