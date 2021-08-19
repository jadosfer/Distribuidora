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
  products$:any;
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
      this.subscription3 = this.getAllBuy().subscribe(buy => {
        this.buy = buy;
        if (this.buy.length == 0) {
          this.createBuy();
        }
      });
     }

  // ngOnInit() {
  // }

  // async getOrCreateStock() {
  //   let result = await this.getAll();
  //   console.log("result", result)
  //   if (result) return result;
  //   return this.create();
  // }

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

  public getAllBuy() {
    let result = this.db.list('/buy').snapshotChanges();
    return result;
  }

  updateItemQuantity(p:any, change: number){
    p.payload.val().quantity += change;
    let quantity = p.payload.val().quantity + change;
    this.db.object('/stock/' + p.key).update({
      product: p.payload.val().product,
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

  reset() {
    this.db.object('/buy/').remove();
  }


}
