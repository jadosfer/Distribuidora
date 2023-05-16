import { Subscription } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { ProductService } from './product.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from '../models/product';
import { Order } from '../models/order';
import { AuthService } from './auth.service';
import { AppUser } from '../models/app-user';
import { OrdersService } from './orders.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnDestroy{

  appUser: AppUser;
  hasDiscount: boolean = false;
  order: any;
  orderId: string;
  orderIndex: number = -1;
  products: any[]
  orderNumber: any = [];
  subscription: Subscription;
  subscription2: Subscription;

  constructor(
    private auth: AuthService,
    private db: AngularFireDatabase,
    private ordersService: OrdersService,
    private productService: ProductService,
  )
  {
    this.subscription2 = this.productService.getAllProducts().subscribe((products) =>{
      this.products = products;
    })
    this.appUser = this.ordersService.appUser;
    const subscription = this.getOrder().subscribe((order: any) => {
      this.order = order;
      for (let i=0;i<this.order.length;i++) {
        if (this.order && this.appUser && this.order[i].payload.val().seller == this.appUser.name) {
          this.orderIndex = i
          this.orderId =  this.order[i].key;
          break
        }
      }
    })
    if (!this.order) this.createOrderEmpty(); // pruebo esto
  }

   // ................................................order methods................................................

  isProductStock(cartProduct: any) {
    for (let i=0;i<this.products.length;i++) {
      if (this.products[i].title == cartProduct.title && this.products[i].stock < cartProduct.quantity) return false
    }
    return true
  }

  isStock(cartOrder: any) {
    for (let i=0;i<cartOrder.payload.val().products.length;i++) {
      if (cartOrder.payload.val().products[i].quantity > 0 && !this.isProductStock(cartOrder.payload.val().products[i])) {
        return false
      }
    }
    return true
  }

  getStock(product: any) {
    if (this.products) {
      for (let i=0;i<this.products.length;i++) {
        if (this.products[i].payload.val().title == product.product.title) return this.products[i].payload.val().stock
      }
    }
    return 0;
  }

  createOrderEmpty() {
    if (!this.appUser) return;
    if (!this.products) return;
    let products = []
    for (let i=0;i<this.products.length;i++) {
      products.push({
        "price": this.products[i].payload.val().discPrice1,
        "discountPrice": this.products[i].payload.val().discPrice1,
        "product": this.products[i].payload.val(),
        "productId":this.products[i].key,
        "quantity": 0,
        "discount": 0
      })
    }
    let result = this.db.list('/order/').push({
      "orderItemsCount":0,
      "products": products,
      "sellerName": this.appUser.name,
    });
  }

  public createOrderNumber() {
    let result = this.db.list('/orderNumber/').push({
      "orderNumber": 0
    });
  }

  resetOrder(orderIndex: any){
    this.db.object('/order/'+ this.order[orderIndex].key).remove();
  }

  clearOrder() {
    //this.db.object('/order/').remove(); elimina todo "order" de la base
    if (!this.order) return;
    for (let i=0;i<this.order.length;i++) {
      if (this.order[i].payload.val().seller == this.appUser.name) this.db.object('/order/'+ this.order[i].key).remove();
    }
  }

  getOrder() {
    let result = this.db.list('/order').snapshotChanges();
    return result;
  }

  getOrderNumber() {
    let result = this.db.list('/orderNumber').snapshotChanges();
    return result;
  }

  updateOrderItemQuantity(order:any, product:any, change: number, orderIndex: number){
    for (let i=0;i<this.products.length;i++) {
      if (product.productId == order[orderIndex].payload.val().products[i].productId) {
        this.db.object('/order/' + order[orderIndex].key +'/products/' + i).update({
          "quantity": order[orderIndex].payload.val().products[i].quantity + change
        });
        break;
      }
    }
  }

  createOrder(seller: string, fantasyName: string, iva: number, cartOrder: any, quantity: number, date: any) {
    let prods: Product[] = [];
    let clientCategory = this.ordersService.getClientCategory(fantasyName);
    let amount = 0;
    for (let i=0;i<cartOrder.length;i++) {
      if (parseInt(cartOrder[i].quantity) != 0) { //solo guardo los prod con quant > 0
        prods.push({
          "title": cartOrder[i].product.title,
          "category": cartOrder[i].product.prodsCategory,
          "discountPrice": cartOrder[i].discountPrice,
          "discount" : cartOrder[i].discount,
          "quantity": cartOrder[i].quantity
        });
        amount += parseInt(cartOrder[i].quantity) * parseFloat(cartOrder[i].discountPrice) * (1 + iva/100);
        if (parseFloat(cartOrder[i].discount) != 0) this.hasDiscount = true;
      }
      // else if (cartOrder[i].quantity != 0) {
      //   prods.push({
      //     "title": cartOrder[i].product.title,
      //     "category": cartOrder[i].product.prodsCategory,
      //     "discountPrice": cartOrder[i].discountPrice,
      //     "discount" : cartOrder[i].discount,
      //     "quantity": cartOrder[i].quantity
      //   });
      // }
    }

    let result = this.db.list('/ordersDetail/').push({
      "products": prods
    })

    let time = new Date();
    time.getHours();
    //time.getMinutes();
    let inDebt = this.ordersService.isClientInDebt(fantasyName, this.ordersService.orders);
    let isAproved =  inDebt && time.getHours()<=20; //si los hacen despues de las 21 salen sin aprobacion

    if (iva != 21 && clientCategory!="Gimnasio" && clientCategory!="Kiosko") isAproved = false;
    if (date == null) {
      date = time.getTime();
    }
    else date = date.unix()*1000;
    if (amount) amount = Math.round(amount * 10) / 10;

    if (result.key) {
      let order: Order = {
        "amountWithIva": amount,
        "aproved": isAproved,
        "clientInDebt": inDebt,
        "date": date,
        "fantasyName": fantasyName,
        "hasDiscount": this.hasDiscount,
        "iva": iva,
        "orderDetailKey": result.key,
        "seller": seller,
        "orderNumber": this.orderNumber[0].payload.val().orderNumber
      }
      this.db.list('/orders/').push(order)
    }
    else console.log('la operacion de guardado de la orden falló');

    this.incrementOrderNumber();
    this.productService.updateStocks(prods, this.products, false);
  }

  incrementOrderNumber() {
    let orderNumb = parseInt(this.orderNumber[0].payload.val().orderNumber) + 1;
    return this.db.object('/orderNumber/' + this.orderNumber[0].key).update({"orderNumber": orderNumb});
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
