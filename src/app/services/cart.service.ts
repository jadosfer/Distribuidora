import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'rxjs/add/operator/take';

import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any;
  cartId: any;
  userName: string;

  constructor(private db: AngularFireDatabase) { }

  private create() {
    localStorage.clear();
    let time = new Date().getTime()
    let result = this.db.list('/carts').push({
      "creationDate": time
    });
    return result;
  }

  updateCart(key: any, cart:any) {
    return this.db.object('/carts/' + key).update(cart);
  }

  public getCart() {
    let cartId = localStorage.getItem('cartId');
    if (cartId) {
      let cart = localStorage.getItem(cartId);
      if (cart) {
        return JSON.parse(cart);
      }
    }
    return null;
  }

  public getAll() {
    return this.db.list('/carts').snapshotChanges();
  }

  private async getOrCreateCartId() {

    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    if (result.key) {
      this.cartId = result.key;
      localStorage.setItem('cartId', this.cartId);
      localStorage.setItem(this.cartId, JSON.stringify({items:[], cartItemCount: 0}));
      return this.cartId;
    }
    return cartId;
  }

  getCartFromLS(cartId: string) {
    return JSON.parse(localStorage.getItem(cartId) || "");
  }

  async updateItemQuantity(product:any, change: number){
    let cartId = await this.getOrCreateCartId();

    if(!cartId) return
    let cartObject = this.getCartFromLS(cartId);

    if (cartObject.items.length != 0) {

      for (let i=0;i<cartObject.items.length;i++) {
        if (cartObject.items[i].productId == product.key) {
          cartObject.items[i].quantity += change;
          if (cartObject.items[i].quantity == 0) cartObject.items.splice(i, 1) //borra item
          else {}
          cartObject.cartItemCount += change;
          break;
        }

        //"no estaba el producto => creo nuevo item"
        //else if (i == (cartObject.items.length - 1) && change == 1) {
        else if (i == (cartObject.items.length - 1)) {
          console.log("no estaria el prod");
          let item =
          {
            "productId":[product.key],
            "quantity": change,
            "title": product.payload.val().title,
            "price": product.payload.val().price
          }
          cartObject.cartItemCount += 1;
          cartObject.items.push(item);
          break;
        }
      }
    }

    //"creo el primer item en session storage"
    else {//if (change == 1){ esto para que pueda ser negativo
      let item =
        {
          ["productId"]:[product.key],
          "quantity": change, //"quantity": 1  cambio esto para que pueda ser negativo
          "title": product.payload.val().title,
          "price": product.payload.val().price
        }
      cartObject.items[0] = item;
      cartObject.cartItemCount = change; //cartObject.cartItemCount = 1;  cambio esto para que pueda ser negativo
    }

    localStorage.setItem(cartId, JSON.stringify(cartObject));
  }

  sendPedido(cart: any) {
    this.updateCart(this.cartId, cart)
    localStorage.clear();
  }

  getTotalCost(cart: any) {
    let totalCost = 0;
    if (cart.payload.val().items) {
      for (let i = 0;i < cart.payload.val().items.length;i++) {
        totalCost += cart.payload.val().items[i].price * cart.payload.val().items[i].quantity
      }
    }
    return totalCost;
  }
}
