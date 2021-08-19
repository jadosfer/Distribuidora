import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'rxjs/add/operator/take';




@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedido: any;
  pedidoId: any;
  appUser: any;

  constructor(private db: AngularFireDatabase) { }

  private create() {
    localStorage.clear();
    let time = new Date().getTime()
    let result = this.db.list('/pedidos').push({
      "creationDate": time
    });
    return result;
  }

  updatePedido(key: any, pedido:any) {
    return this.db.object('/pedidos/' + key).update(pedido);
  }

  removePedido(pedidoId: any) {
    this.db.object('/pedidos/' + pedidoId).remove();
  }


  public getPedido() {
    let pedidoId = localStorage.getItem('pedidoId');
    if (pedidoId) {
      let pedido = localStorage.getItem(pedidoId);
      if (pedido) {
        return JSON.parse(pedido);
      }
    }
    return null;
  }

  public getAll() {
    return this.db.list('/pedidos').snapshotChanges();
  }

  private async getOrCreatePedidoId() {

    let pedidoId = localStorage.getItem('pedidoId');
    if (pedidoId) return pedidoId;

    let result = await this.create();
    if (result.key) {
      this.pedidoId = result.key;
      localStorage.setItem('pedidoId', this.pedidoId);
      localStorage.setItem(this.pedidoId, JSON.stringify({items:[], pedidoItemCount: 0}));
      return this.pedidoId;
    }
    return pedidoId;
  }

  getPedidoFromLS(pedidoId: string) {
    return JSON.parse(localStorage.getItem(pedidoId) || "");
  }

  async updateItemQuantity(product:any, change: number){
    let pedidoId = await this.getOrCreatePedidoId();

    if(!pedidoId) return
    let pedidoObject = this.getPedidoFromLS(pedidoId);

    if (pedidoObject.items.length != 0) {

      for (let i=0;i<pedidoObject.items.length;i++) {
        if (pedidoObject.items[i].productId == product.key) {
          pedidoObject.items[i].quantity += change;
          if (pedidoObject.items[i].quantity == 0) pedidoObject.items.splice(i, 1) //borra item
          else {}
          pedidoObject.pedidoItemCount += change;
          break;
        }

        //"no estaba el producto => creo nuevo item"
        //else if (i == (pedidoObject.items.length - 1) && change == 1) {
        else if (i == (pedidoObject.items.length - 1)) {
          let item =
          {
            "productId":product.key,
            "quantity": change,
            "title": product.payload.val().title,
            "price": product.payload.val().price
          }
          pedidoObject.pedidoItemCount += 1;
          pedidoObject.items.push(item);
          break;
        }
      }
    }

    //"creo el primer item en session storage"
    else {//if (change == 1){ esto para que pueda ser negativo
      let item =
        {
          "productId":product.key,
          "quantity": change, //"quantity": 1  cambio esto para que pueda ser negativo
          "title": product.payload.val().title,
          "price": product.payload.val().price
        }
      pedidoObject.items[0] = item;
      pedidoObject.pedidoItemCount = change; //pedidoObject.pedidoItemCount = 1;  cambio esto para que pueda ser negativo
    }

    localStorage.setItem(pedidoId, JSON.stringify(pedidoObject));
  }

  sendPedido(pedido: any, clientFantasyName: string) {
    pedido.clientFantasyName = clientFantasyName;
    pedido.sellerName = this.appUser.name;
    console.log(pedido);
    this.updatePedido(this.pedidoId, pedido)
    localStorage.clear();
  }

  getTotalCost(pedido: any) {
    let totalCost = 0;
    if (pedido.payload.val().items) {
      for (let i = 0;i < pedido.payload.val().items.length;i++) {
        totalCost += pedido.payload.val().items[i].price * pedido.payload.val().items[i].quantity
      }
    }
    return totalCost;
  }
}
