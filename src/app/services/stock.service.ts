import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  appUser: AppUser;
  stock: any;
  buy: any;
  filteredProducts:any;
  products:any;
  category: string | null;
  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  constructor(private db: AngularFireDatabase, private productService: ProductService,
    private auth: AuthService, private route: ActivatedRoute, private router: Router) {

      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
      });

      this.filteredProducts = [];
      this.subscription = this.productService.getAll().subscribe(products => {
        this.filteredProducts = this.products = products;
        this.route.queryParamMap.subscribe(params => {
          this.category = params.get('category');
          if (this.products) {
            this.filteredProducts = (this.category) ?
            this.products.filter((p: { payload: { val: () => { (): any; new(): any; category: string | null; }; }; }) =>
              p.payload.val().category == this.category) :
            this.products;
          }
          this.subscription2 = this.getAll().subscribe(stock => {
            this.stock = stock;
            if (this.stock.length == 0) {
              this.create();
            }
          });


        });
      });
      this.subscription3 = this.getBuy().subscribe(buy => {
        this.buy = buy;
        if (this.buy.length == 0) {
          this.createBuy();
        }
      });
     }

  public create() {
    for (let i=0;i<this.products.length;i++) {
      this.db.list('/stock').push({
        product: this.products[i].payload.val(),
        "quantity": 0
      });
    }
    let result = this.db.list('/stock').snapshotChanges();
    return result;
  }

  public createBuy() {
    for (let i=0;i<this.products.length;i++) {
      this.db.list('/buy').push({
        product: this.products[i].payload.val(),
        "quantity": 0
      });
    }
    let result = this.db.list('/stock').snapshotChanges();
    return result;
  }

  public getAll() {
    let result = this.db.list('/stock').snapshotChanges();
    return result;
  }

  public getBuy() {
    let result = this.db.list('/buy').snapshotChanges();
    return result;
  }

  updateItemQuantity(p:any, quantity: number, stockKey: number){

    this.db.object('/stock/' + stockKey).update({
      product: p,
      "quantity": quantity
    })
  }

  updateBuyItemQuantity(p:any, change: number){
    p.payload.val().quantity += change;
    let quantity = p.payload.val().quantity + change;
    this.db.object('/buy/' + p.key).update({
      product: p.payload.val().product,
      "quantity": quantity
    })
  }

  sendBuy(buy: any) {
    for (let i=0;i<this.buy.length;i++) {
      let quantity = this.stock[i].payload.val().quantity + this.buy[i].payload.val().quantity;
      this.db.object('/stock/' + this.stock[i].key).update({
        product: this.stock[i].payload.val().product,
        "quantity": quantity
      });
    }
    this.db.object('/buy/').remove();
  }

  sendPedido(pedido: any) {
    for (let i=0;i<this.buy.length;i++) {
      let quantity = this.stock[i].payload.val().quantity + this.buy[i].payload.val().quantity;
      this.db.object('/stock/' + this.stock[i].key).update({
        product: this.stock[i].payload.val().product,
        "quantity": quantity
      });
    }
    this.db.object('/buy/').remove();
  }

  reset() {
    this.db.object('/buy/').remove();
  }

  getQuantityOfP(pBuy: any) {
    for (let i=0;i<this.stock.length;i++) {
      if (pBuy.payload.val().product.title == this.stock[i].payload.val().product.title) {
        return this.stock[i].payload.val().quantity;
      }
    }
    return 0;
  }

  aprove(pedido: any) {

    //console.log("quantity",this.stock[0].payload.val().quantity);
    for (let i=0;i<pedido.payload.val().items.length;i++) {
      for (let j=0;j<this.stock.length;j++) {
        if (this.stock[j].payload.val().product.title == pedido.payload.val().items[i].title) {
            let quantity = this.stock[j].payload.val().quantity - pedido.payload.val().items[i].quantity;
            this.updateItemQuantity(this.stock[j].payload.val().product, quantity, this.stock[j].key)
        }
      }
    }

  }

}
