import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/take';
import { AuthService } from './auth.service';
import { ClientsService } from './clients.service';
import { ProductService } from './product.service';




@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  clients: any;
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

  constructor(private db: AngularFireDatabase, private productService: ProductService, public clientsService: ClientsService,
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
      });
    });
    this.subscription3 = this.getPedido().subscribe(pedido => {
      this.pedido = pedido;
      if (this.pedido.length == 0) {
        this.createPedido();
      }
    });

    this.clientsService.getAll().subscribe(clients => {
      this.clients = clients;
    });
   }

  private create() {
    let time = new Date().getTime()
    let result = this.db.list('/pedidos').push({
      "creationDate": time,
      "aproved": "NO",
      "paid": "NO"
    });
    this.pedidoId = result.key;
    return result;
  }

  public createPedido() {
    let products = []
    for (let i=0;i<this.products.length;i++) {
      products.push({
            "price": this.products[i].payload.val().price1,
            "product": this.products[i].payload.val(),
            "productId":this.products[i].key,
            "quantity": 0
          })
    }
    let result = this.db.list('/pedido/').push({
      "pedidoItemsCount": 0,
      "sellerName": this.appUser.name,
      "products": products
    });
    this.pedidoId = result.key;

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


  updatePedidoItemQuantity(pedido:any, product:any, change: number){

      let pedidoItemsCount = pedido[0].payload.val().pedidoItemsCount + change;
      let products = []
      for (let i=0;i<this.products.length;i++) {
        let plus = 0;
        if (product.productId == pedido[0].payload.val().products[i].productId) plus = change;
        products.push({
              "price": pedido[0].payload.val().products[i].price,
              "product": pedido[0].payload.val().products[i].product,
              "productId": pedido[0].payload.val().products[i].productId,
              "quantity": pedido[0].payload.val().products[i].quantity + plus,
            })
        plus = 0;
      }

      this.db.object('/pedido/' + pedido[0].key).update({
        "pedidoItemsCount": pedidoItemsCount,
        "sellerName": this.appUser.name,
        "products": products
      });

  }

  sendPedido(pedido: any, clientFantasyName: string) {

    let prods = [];
    let category = this.getCategory(clientFantasyName);

    for (let i=0;i<pedido[0].payload.val().products.length;i++) {
      prods.push(pedido[0].payload.val().products[i])
      prods[i].price = this.getClientPrice(pedido[0].payload.val().products[0], clientFantasyName);
    }

    let time = new Date().getTime();
    let result = this.db.list('/pedidos/').push({
      "pedido": {
        pedidoItemsCount: pedido[0].payload.val().pedidoItemsCount,
        "products":prods,
        "sellerName": pedido[0].payload.val().sellerName
      },
      "creationDate": time,
      "aproved": "NO",
      "paid": "NO"
    })

    this.updatePedido(result.key, {
      "clientFantasyName": clientFantasyName,
    })
    this.resetPedido()
  }

  getCategory(clientFantasyName: any) {
    let category = "";
    if (this.clients) {
      for (let i = 0;i < this.clients.length;i++) {
        if (this.clients[i].payload.val().fantasyName == clientFantasyName) {
          category = this.clients[i].payload.val().category;
          return category
        }
      }
    }
    return category
  }

  getClientPrice(product: any, clientFantasyName: any) {
    let category = this.getCategory(clientFantasyName);
    switch (category) {
      case "":
        return product.product.price1;
         break;
      case "Distribuidor":
        return product.product.price1;
        break;
      case "Comercio":
        return product.product.price2;
        break;
      case "Gimnasio":
        return product.product.price3;
        break;
      // default:
      //   return product.product.price1;
    }
    return 0
  }

  getTotalCost(ped: any) {
    let totalCost = 0;
    if (ped.payload.val().pedido.products) {
      for (let i = 0;i < ped.payload.val().pedido.products.length;i++) {
        totalCost += ped.payload.val().pedido.products[i].price * ped.payload.val().pedido.products[i].quantity
      }
    }
    return totalCost;
  }

  aprove(pedido:any) {
    this.updatePedido(pedido.key, {"aproved": "SI"})
  }

  getPaid(pedido:any) {
    this.updatePedido(pedido.key, {"paid": "SI"})
  }
}
