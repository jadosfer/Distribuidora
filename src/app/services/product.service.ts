import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable, OnInit } from '@angular/core';
import { PedidosService } from './pedidos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
  recharges: any;
  rechargeKey: string;
  products: any;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.getAll().subscribe(products => {
      this.products = products;
    });
  }

  create(product: any) {
    if (!product.imageUrl) product.imageUrl = "";
    return this.db.list('/products').push(product);
  }

  createRecharge() {
    this.recharges = {
      distRecharge: 10,
      comRecharge: 20,
      gymRecharge: 30
    }
    let result = this.db.list('/recharges').push(this.recharges);
    if (result.key) this.rechargeKey = result.key;
    return result;
  }

  getAll() {
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
    if (!product.imageUrl) product.imageUrl = "";
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId:any) {
    return this.db.object('/products/' + productId).remove();
  }

  recharge(products:any, distRecharge: number, comRecharge: number, gymRecharge: number) {
    for (let i=0;i<products.length;i++) {
      this.db.object('/products/' + products[i].key).update({
        "buyPrice": products[i].payload.val().buyPrice,
        "imageUrl": products[i].payload.val().imageUrl,
        "price1": products[i].payload.val().buyPrice * (1 + distRecharge/100),
        "price2": products[i].payload.val().buyPrice * (1 + comRecharge/100),
        "price3": products[i].payload.val().buyPrice * (1 + gymRecharge/100),
        "prodCategory": products[i].payload.val().prodCategory,
        "title": products[i].payload.val().title
      });
    }
    this.recharges = {
      "distRecharge": distRecharge,
      "comRecharge": comRecharge,
      "gymRecharge": gymRecharge
    }
    let result = this.getAllRecharges().subscribe(result => {
      this.db.object('/recharges/' + result[0].key).update(this.recharges);
    });






  }

  // updateRechargePrices() {
  //   if (!this.products) return
  //   for (let i=0;i<this.products.length;i++) {
  //     this.db.object('/products/' + this.products[0].key).update({
  //       "buyPrice": this.products[0].payload.val().buyPrice,
  //       "imageUrl": this.products[0].payload.val().imageUrl,
  //       "price1": this.products[0].payload.val().buyPrice * (1 + this.recharges[0].payload.val().distRecharge/100),
  //       "price2": this.products[0].payload.val().buyPrice * (1 + this.recharges[0].payload.val().comRecharge/100),
  //       "price3": this.products[0].payload.val().buyPrice * (1 + this.recharges[0].payload.val().gymRecharge/100),
  //       "prodCategory": this.products[0].payload.val().prodCategory,
  //       "title": this.products[0].payload.val().title
  //     });
  //   }
  // }

}
