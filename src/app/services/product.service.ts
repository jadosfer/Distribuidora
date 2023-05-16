import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
  recharges: any;
  rechargeKey: string;
  products: any;
  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;

  constructor(private db: AngularFireDatabase) {
    this.subscription = this.getAllProducts().subscribe(products => {
      this.products = products;
    });
    this.subscription2 = this.getAllRecharges().subscribe(recharges => {
      this.recharges = recharges;
    });
  }

  ngOnInit() {
  }

  create(product: any) {
    this.subscription4 = this.getAllRecharges().subscribe(recharges => {
      this.recharges = recharges;

      product.disc1=0;
      product.disc2=0;
      product.disc3=0;
      product.disc4=0;
      product.price1=product.buyPrice*(1 + (this.recharges[0].payload.val().distRecharge/100));
      product.price2=product.buyPrice*(1 + (this.recharges[0].payload.val().comRecharge/100));
      product.price3=product.buyPrice*(1 + (this.recharges[0].payload.val().kiosRecharge/100));
      product.price4=product.buyPrice*(1 + (this.recharges[0].payload.val().gymRecharge/100));
      product.discPrice1=product.price1;
      product.discPrice2=product.price2;
      product.discPrice3=product.price3;
      product.discPrice4=product.price4;
      product.stock = 0;
      return this.db.list('/products').push(product);
    });

  }

  createRecharge() {
    this.recharges = {
      distRecharge: 15,
      comRecharge: 30,
      kiosRecharge: 60,
      gymRecharge: 44
    }
    let result = this.db.list('/recharges').push(this.recharges);
    if (result.key) this.rechargeKey = result.key;
    return result;
  }

  getAllProducts() {
    return this.db.list('/products').snapshotChanges();
  }

  get(productId:any) {
    return this.db.object('/products/' + productId).snapshotChanges();
  }

  getAllRecharges() {
    let result = this.db.list('/recharges').snapshotChanges();
    if (!result)
    {
      let result = this.createRecharge();
    }
    return result;
  }

  update(productId: any, product:any) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId:any) {
    return this.db.object('/products/' + productId).remove();
  }

  recharge(products:any, recharges: any) {
    let result = new Promise(() => {});
    for (let i=0;i<products.length;i++) {
      let prod = {
        "disc1": products[i].payload.val().disc1,
        "disc2": products[i].payload.val().disc2,
        "disc3": products[i].payload.val().disc3,
        "disc4": products[i].payload.val().disc4,
        "buyPrice": products[i].payload.val().buyPrice,
        "price1": products[i].payload.val().buyPrice * (1 + recharges.distRecharge/100),
        "price2": products[i].payload.val().buyPrice * (1 + recharges.comRecharge/100),
        "price3": products[i].payload.val().buyPrice * (1 + recharges.kiosRecharge/100),
        "price4": products[i].payload.val().buyPrice * (1 + recharges.gymRecharge/100),
        "discPrice1": 0,
        "discPrice2": 0,
        "discPrice3": 0,
        "discPrice4": 0,
        "prodsCategory": products[i].payload.val().prodsCategory,
        "title": products[i].payload.val().title
      }
      prod.discPrice1 = prod.price1*(1-prod.disc1/100);
      prod.discPrice2 = prod.price2*(1-prod.disc2/100);
      prod.discPrice3 = prod.price3*(1-prod.disc3/100);
      prod.discPrice4 = prod.price4*(1-prod.disc4/100);
      result = this.db.object('/products/' + products[i].key).update(prod);
    }
    return result;

    // this.recharges = {
    //   "distRecharge": distRecharge,
    //   "comRecharge": comRecharge,
    //   "kiosRecharge": kiosRecharge,
    //   "gymRecharge": gymRecharge
    // }
    // let result = this.getAllRecharges().subscribe(result => {
    //   this.db.object('/recharges/' + result[0].key).update(this.recharges);
    // });
  }

  saveRecharges(recharges: any) {
    this.getAllRecharges().subscribe(result => {
      this.db.object('/recharges/' + result[0].key).update(recharges);
    });
  }

  applyDiscount(p:any, priceNumber:string, disc:any) {
    let product = {
      "disc1": p.payload.val().disc1,
      "disc2": p.payload.val().disc2,
      "disc3": p.payload.val().disc3,
      "disc4": p.payload.val().disc4,
      "buyPrice": p.payload.val().buyPrice,
      "prodsCategory": p.payload.val().prodsCategory,
      "title": p.payload.val().title,
      "price1": p.payload.val().price1,
      "price2": p.payload.val().price2,
      "price3": p.payload.val().price3,
      "price4": p.payload.val().price4,
      "discPrice1": p.payload.val().discPrice1,
      "discPrice2": p.payload.val().discPrice2,
      "discPrice3": p.payload.val().discPrice3,
      "discPrice4": p.payload.val().discPrice4
      }
      if (priceNumber == "price1") {
        product.discPrice1 = p.payload.val().price1 * (1 - disc/100);
        product.disc1 = disc;
      }
      else if (priceNumber == "price2") {
        product.discPrice2 = p.payload.val().price2 * (1 - disc/100);
        product.disc2 = disc;
      }
      else if (priceNumber == "price3") {
        product.discPrice3 = p.payload.val().price3 * (1 - disc/100);
        product.disc3 = disc;
      }
      else if (priceNumber == "price4") {
        product.discPrice4 = p.payload.val().price4 * (1 - disc/100);
        product.disc4 = disc;
      }
    this.db.object('/products/' + p.key).update(product);
  }

  applyDiscountToAll() {
    this.subscription3 = this.getAllProducts().subscribe(products=> {
      this.products = products;
      for (let i=0;i<this.products.length;i++) {
        let product = this.products[i].payload.val();
          product.discPrice1 = product.price1*(1-product.disc1/100);
          product.discPrice2 = product.price1*(1-product.disc2/100);
          product.discPrice3 = product.price1*(1-product.disc3/100);
          product.discPrice4 = product.price1*(1-product.disc4/100);
          this.db.object('/products/' + this.products[i].key).update(product);
        }
    });
  }

  updateStocks(prods: any, thisProds: any, add: boolean) {
    for (let i=0;i<prods.length;i++) {
      for (let j=0;j<thisProds.length;j++) {
        if (prods[i].title == thisProds[j].payload.val().title) {
          let quantity;
          if (add) quantity = parseInt(thisProds[j].payload.val().stock) + parseInt(prods[i].quantity);
          else quantity = parseInt(thisProds[j].payload.val().stock) - parseInt(prods[i].quantity);
          this.db.object('/products/' + thisProds[j].key).update({
            "stock": quantity
          });
        }
      }
    }
  }

  async restoreStock(order: any, products: any, orderProducts: Product[]) {
    console.log('orderProducts ', orderProducts);
    let prods = [];
    for (let i=0;i<orderProducts.length;i++) {
      for (let j=0;j<products.length;j++) {
        if (orderProducts[i].title == products[j].payload.val().title)
        await this.db.object('/products/' + products[j].key).update({
          "stock": parseInt(products[j].payload.val().stock) + orderProducts[i].quantity
        });
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
  }
}

