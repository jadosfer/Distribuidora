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
    this.getAllRecharges().subscribe(recharges => {
      this.recharges = recharges;
    });
  }

  create(product: any) {
    if (!product.imageUrl) product.imageUrl = "";
    product.disc1=0;
    product.disc2=0;
    product.disc3=0;
    product.price1=product.buyPrice*1.1;  //harcoded recharges
    product.price2=product.buyPrice*1.2;  //harcoded recharges
    product.price3=product.buyPrice*1.3;  //harcoded recharges
    product.discPrice1=product.price1;
    product.discPrice2=product.price2;
    product.discPrice3=product.price3;
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
      let prod = {
        "disc1": products[i].payload.val().disc1,
        "disc2": products[i].payload.val().disc2,
        "disc3": products[i].payload.val().disc3,
        "buyPrice": products[i].payload.val().buyPrice,
        "imageUrl": products[i].payload.val().imageUrl,
        "price1": products[i].payload.val().buyPrice * (1 + distRecharge/100),
        "price2": products[i].payload.val().buyPrice * (1 + comRecharge/100),
        "price3": products[i].payload.val().buyPrice * (1 + gymRecharge/100),
        "discPrice1": products[i].payload.val().discPrice1,
        "discPrice2": products[i].payload.val().discPrice2,
        "discPrice3": products[i].payload.val().discPrice3,
        "prodCategory": products[i].payload.val().prodCategory,
        "title": products[i].payload.val().title
      }
      this.db.object('/products/' + products[i].key).update(prod);
      let product = prod;
      product.discPrice1 = prod.price1*(1-product.disc1/100);
      product.discPrice2 = prod.price2*(1-product.disc2/100);
      product.discPrice3 = prod.price3*(1-product.disc3/100);
      this.db.object('/products/' + products[i].key).update(product);
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

  applyDiscount(p:any, priceNumber:string, disc:any) {
    let product = {
      "disc1": p.payload.val().disc1,
      "disc2": p.payload.val().disc2,
      "disc3": p.payload.val().disc3,
      "buyPrice": p.payload.val().buyPrice,
      "imageUrl": p.payload.val().imageUrl,
      "prodCategory": p.payload.val().prodCategory,
      "title": p.payload.val().title,
      "price1": p.payload.val().price1,
      "price2": p.payload.val().price2,
      "price3": p.payload.val().price3,
      "discPrice1": p.payload.val().discPrice1,
      "discPrice2": p.payload.val().discPrice2,
      "discPrice3": p.payload.val().discPrice3
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
    this.db.object('/products/' + p.key).update(product);
  }

  applyDiscountToAll() {
    this.getAll().subscribe(products=> {
      this.products = products;
      for (let i=0;i<this.products.length;i++) {
        let product = this.products[i].payload.val();
          product.discPrice1 = product.price1*(1-product.disc1/100);
          product.discPrice2 = product.price1*(1-product.disc2/100);
          product.discPrice3 = product.price1*(1-product.disc3/100);
          this.db.object('/products/' + this.products[i].key).update(product);
        }
    });
  }

}
