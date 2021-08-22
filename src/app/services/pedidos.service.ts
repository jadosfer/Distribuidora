import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/take';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';




@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedido: any;
  pedidos: any;
  pedidoId: any;
  appUser: any;
  products:any;
  category: string | null;
  filteredProducts:any;
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
        this.subscription2 = this.getAll().subscribe(pedidos => {
          this.pedidos = pedidos;
          if (this.pedidos.length == 0) {
            this.create();
          }
        });

      });
    });
    this.subscription3 = this.getPedido().subscribe(pedido => {
      this.pedido = pedido;
      if (this.pedido.length == 0) {
        this.createPedido();
      }
    });
   }

  private create() {
    let time = new Date().getTime()
    let result = this.db.list('/pedidos').push({
      "creationDate": time,
      "state": "pendiente"
    });
    return result;
  }

  public createPedido() {
    for (let i=0;i<this.products.length;i++) {
      // this.db.list('/pedido').push({
      //   product: this.products[i].payload.val(),
      //   "quantity": 0
      // });
      this.db.object('/pedido/' + this.products[i].key).update({
          product: this.products[i].payload.val(),
          "quantity": 0
        });
    }
    // let result = this.db.list('/stock').snapshotChanges();
    // return result;
  }

  updatePedido(key: any, pedido:any) {
    return this.db.object('/pedidos/' + key).update(pedido);
  }

  removePedido(pedidoId: any) {
    this.db.object('/pedidos/' + pedidoId).remove();
  }

  resetPedido(){
    this.db.object('/pedido/').remove();
  }


  public getPedido() {
    let result = this.db.list('/pedido').snapshotChanges();
    return result;
  }

  public getAll() {
    return this.db.list('/pedidos').snapshotChanges();
  }


  // updateItemQuantity(pedido:any, product:any, change: number){
  //   let myItems = [];
  //   for (let i = 0;i < pedido.payload.val().items.length;i++) {
  //     if (pedido.payload.val().items[i].productId == product.key)
  //     {
  //       let item = pedido.payload.val().items[i];
  //       item.quantity += change;
  //       myItems.push(item);
  //     }
  //     else myItems.push(pedido.payload.val().items[i]);
  //   }

  //   let myPedido = {
  //     "clientFantasyName": pedido.payload.val().clientFantasyName,
  //     "creationDate": pedido.payload.val().creationDate,
  //     "items": myItems,
  //     "pedidoItemCount": pedido.payload.val().pedidoItemCount,
  //     "sellerName": pedido.payload.val().sellerName,
  //     "state": pedido.payload.val().state
  //   }
  //   this.updatePedido(pedido.key, myPedido)
  // }

  updatePedidoItemQuantity(pedido:any, product:any, change: number){
    //product.payload.val().quantity += change;
    let quantity = product.payload.val().quantity + change;
    this.db.object('/pedido/' + product.key).update({
      "product":product.payload.val().product,
      "quantity": quantity
    })
  }



  sendPedido(pedido: any, clientFantasyName: string) {
    pedido.clientFantasyName = clientFantasyName;
    pedido.sellerName = this.appUser.name;
    this.updatePedido(this.pedidoId, pedido);
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

  aprove(pedido:any) {
    let myPedido = {
      "clientFantasyName": pedido.payload.val().clientFantasyName,
      "creationDate": pedido.payload.val().creationDate,
      "items": pedido.payload.val().items,
      "pedidoItemCount": pedido.payload.val().pedidoItemCount,
      "sellerName": pedido.payload.val().sellerName,
      "state": "aprobado"
    }
    this.updatePedido(pedido.key, myPedido)
  }
}
