import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
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
  buyId:any;
  filteredProducts:any;
  products:any;
  prodsCategory: string | null;

  constructor(private db: AngularFireDatabase, private productService: ProductService,
    private auth: AuthService, private route: ActivatedRoute, private router: Router) {

      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
      });

      this.filteredProducts = [];
      this.productService.getAll().subscribe(products => {
        this.filteredProducts = this.products = products;
        this.route.queryParamMap.subscribe(params => {
          this.prodsCategory = params.get('prodsCategory');
          if (this.products) {
            this.filteredProducts = (this.prodsCategory) ?
            this.products.filter((p: { payload: { val: () => { (): any; new(): any; prodsCategory: string | null; }; }; }) =>
              p.payload.val().prodsCategory == this.prodsCategory) :
            this.products;
          }
          // this.getStock().subscribe(stock => {
          //   this.stock = stock;
          //   if (this.stock.length == 0) {
          //     this.create();
          //   }
          // });
        });
      });
      this.getBuy().subscribe(buy => {
        this.buy = buy;
        if (this.buy.length == 0) {
          this.createBuy();
        }
      });
     }

  // public create() {
  //   for (let i=0;i<this.products.length;i++) {
  //     this.db.list('/stock').push({
  //       product: this.products[i].payload.val(),
  //       "quantity": 0
  //     });
  //   }
  //   let result = this.db.list('/stock').snapshotChanges();
  //   return result;
  // }

  public createBuy() {
    let products = []
    for (let i=0;i<this.products.length;i++) {
      products.push({
        "price": this.products[i].payload.val().buyPrice,
        "product": this.products[i].payload.val(),
        "productId":this.products[i].key,
        "quantity": 0
      });
    }
    let result = this.db.list('/buy/').push({
      "buyItemsCount": 0,
      "products": products
    });
    this.buyId = result.key;
  }

  // public getStock() {
  //   let result = this.db.list('/stock').snapshotChanges();
  //   return result;
  // }

  public getBuy() {
    let result = this.db.list('/buy').snapshotChanges();
    return result;
  }

  public getBuys() {
    return this.db.list('/buys').snapshotChanges();
  }

  // updateItemQuantity(p:any, quantity: number, stockKey: number){

  //   this.db.object('/stock/' + stockKey).update({
  //     product: p,
  //     "quantity": quantity
  //   })
  // }

  updateBuyItemQuantity(buy:any, product:any, change: number){

    let buyItemsCount = parseInt(buy[0].payload.val().buyItemsCount) + change;
    let products = []
    for (let i=0;i<buy[0].payload.val().products.length;i++) {
      let plus = 0;
      if (product.productId == buy[0].payload.val().products[i].productId) plus = change;
      products.push({
            "price": buy[0].payload.val().products[i].price,
            "product": buy[0].payload.val().products[i].product,
            "productId": buy[0].payload.val().products[i].productId,
            "quantity": parseInt(buy[0].payload.val().products[i].quantity) + plus,
          })
      plus = 0;
    }

    this.db.object('/buy/' + buy[0].key).update({
      "buyItemsCount": buyItemsCount,
      "products": products
    });
  }

  setBuyItemQuantity(buy: any, product: any, quantity: number) {
    let buyItemsCount = 0;
    let products = []
    for (let i=0;i<buy[0].payload.val().products.length;i++) {
      if (product.productId == buy[0].payload.val().products[i].productId){
        products.push({
          "price": buy[0].payload.val().products[i].price,
          "product": buy[0].payload.val().products[i].product,
          "productId": buy[0].payload.val().products[i].productId,
          "quantity": quantity
        })
        buyItemsCount += quantity;
      }
      else {
        products.push({
          "price": buy[0].payload.val().products[i].price,
          "product": buy[0].payload.val().products[i].product,
          "productId": buy[0].payload.val().products[i].productId,
          "quantity": buy[0].payload.val().products[i].quantity,
        })
        buyItemsCount += parseInt(buy[0].payload.val().products[i].quantity);
      }
    }

    this.db.object('/buy/' + buy[0].key).update({
      "buyItemsCount": buyItemsCount,
      "products": products
    });
  }

  sendBuy(buy: any) {

    // for (let i=0;i<this.buy[0].payload.val().products.length;i++) {
    //   if  (this.buy[0].payload.val().products[i].quantity != 0) {
    //     let quantity = this.products[i].payload.val().stock + this.buy[0].payload.val().products[i].quantity;
        // this.db.object('/stock/' + this.products[i].key).update({
        //   //product: this.stock[i].payload.val().product,
        //   "stock": quantity
        // });
    //   }
    // }

    let prods = [];

    for (let i=0;i<buy[0].payload.val().products.length;i++) {
      if  (this.buy[0].payload.val().products[i].quantity != 0) {
        prods.push({"title": buy[0].payload.val().products[i].product.title, "quantity": buy[0].payload.val().products[i].quantity, "price": buy[0].payload.val().products[i].product.discPrice1} )
      }
    }

    let time = new Date().getTime();
    let result = this.db.list('/buys/').push({
      "buyItemsCount": buy[0].payload.val().buyItemsCount,
      "buy": prods,
      "date": time
    });
    this.db.object('/buy/').remove();
  }

  gentechProductPrice(prod:any) {

  }

  // updateStocks(prods: any) {
  //   for (let i=0;i<prods.length;i++) {
  //     for (let j=0;j<this.stock.length;j++) {
  //       if (prods[i].product.title == this.stock[j].payload.val().product.title) {
  //         let quantity = this.stock[j].payload.val().quantity - prods[i].quantity;
  //         this.db.object('/stock/' + this.stock[j].key).update({
  //           product: this.stock[i].payload.val().product,
  //           "quantity": quantity
  //         });
  //       }
  //     }
  //   }
  // }

  reset() {
    this.db.object('/buy/').remove();
  }

  getQuantityOfP(pBuy: any) {
    if (this.products) {
      for (let i=0;i<this.products.length;i++) {
        if (pBuy.product.title == this.products[i].payload.val().title) {
          return this.products[i].payload.val().stock;
        }
      }
    }
    return 0;
  }

  aprove(order: any) {

    // for (let i=0;i<order.payload.val().order.products.length;i++) {
    //   for (let j=0;j<this.stock.length;j++) {
    //     if (this.stock[j].payload.val().product.title == order.payload.val().order.products[i].product.title) {
    //         let quantity = this.stock[j].payload.val().quantity - order.payload.val().order.products[i].quantity;
    //         this.updateItemQuantity(this.stock[j].payload.val().product, quantity, this.stock[j].key)
    //     }
    //   }
    // }

  }

  getTotalCost(buy: any) {
    let totalCost = 0
    for (let i=0;i<buy.payload.val().buy.length;i++) {
      totalCost += buy.payload.val().buy[i].quantity * buy.payload.val().buy[i].price;
    }
   return totalCost;
  }
}
