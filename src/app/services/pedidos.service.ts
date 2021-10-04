import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/take';
import { AppUser } from '../models/app-user';
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
  appUser: AppUser;
  products:any;
  prodCategory: string | null;
  filteredProducts:any;
  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  constructor(private db: AngularFireDatabase, private productService: ProductService, public clientsService: ClientsService,
    private auth: AuthService, private route: ActivatedRoute, private router: Router) {


    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.getPedido().subscribe(pedido => {
        this.pedido = pedido;
        if (this.pedido.length == 0) {
          this.createPedido();
        }
      });
    });

    this.filteredProducts = [];
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      this.route.queryParamMap.subscribe(params => {
        this.prodCategory = params.get('prodCategory');
        if (this.products) {
          this.filteredProducts = (this.prodCategory) ?
          this.products.filter((p: { payload: { val: () => { (): any; new(): any; prodCategory: string | null; }; }; }) =>
            p.payload.val().prodCategory == this.prodCategory) :
          this.products;
        }
      });
    });
    // this.subscription3 = this.getPedido().subscribe(pedido => {
    //   this.pedido = pedido;
    //   if (this.pedido.length == 0) {
    //     this.createPedido();
    //   }
    // });

    this.clientsService.getAll().subscribe(clients => {
      this.clients = clients;
    });
    this.getAll().subscribe(pedidos => {
      this.pedidos = pedidos;
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
        "price": this.products[i].payload.val().discPrice1,
        "discountPrice": this.products[i].payload.val().discPrice1,
        "product": this.products[i].payload.val(),
        "productId":this.products[i].key,
        "quantity": 0,
        "discount": 0
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
              "discountPrice": pedido[0].payload.val().products[i].discountPrice,
              "product": pedido[0].payload.val().products[i].product,
              "productId": pedido[0].payload.val().products[i].productId,
              "quantity": pedido[0].payload.val().products[i].quantity + plus,
              "discount": pedido[0].payload.val().products[i].discount
            })
        plus = 0;
      }

      this.db.object('/pedido/' + pedido[0].key).update({
        "pedidoItemsCount": pedidoItemsCount,
        "sellerName": this.appUser.name,
        "products": products
      });

  }

  discount(pedido:any, product:any, discount: number) {
    let products = []
      for (let i=0;i<pedido[0].payload.val().products.length;i++) {
        if (product.productId == pedido[0].payload.val().products[i].productId) {
          products.push({
            "price": pedido[0].payload.val().products[i].price,
            "discountPrice": pedido[0].payload.val().products[i].price * (1 - discount/100),
            "product": {
              "buyPrice": pedido[0].payload.val().products[i].product.buyPrice,
              "prodCategory": pedido[0].payload.val().products[i].product.prodCategory,
              "imageUrl": pedido[0].payload.val().products[i].product.imageUrl,
              "price1": pedido[0].payload.val().products[i].product.price1,
              "price2": pedido[0].payload.val().products[i].product.price2,
              "price3": pedido[0].payload.val().products[i].product.price3,
              "discPrice1": pedido[0].payload.val().products[i].product.discPrice1,
              "discPrice2": pedido[0].payload.val().products[i].product.discPrice2,
              "discPrice3": pedido[0].payload.val().products[i].product.discPrice3,
              "title": pedido[0].payload.val().products[i].product.title,
            },
            "productId": pedido[0].payload.val().products[i].productId,
            "quantity": pedido[0].payload.val().products[i].quantity,
            "discount": discount
          })
        }
        else {
          products.push({
            "price": pedido[0].payload.val().products[i].price,
            "discountPrice": pedido[0].payload.val().products[i].discountPrice,
            "product": pedido[0].payload.val().products[i].product,
            "productId": pedido[0].payload.val().products[i].productId,
            "quantity": pedido[0].payload.val().products[i].quantity,
            "discount": pedido[0].payload.val().products[i].discount
          })
        }
      }

      this.db.object('/pedido/' + pedido[0].key).update({
        "pedidoItemsCount": pedido[0].payload.val().pedidoItemsCount,
        "sellerName": this.appUser.name,
        "products": products
      });
  }

  sendPedido(pedido: any, clientFantasyName: string) {

    let prods = [];
    let clientCategory = this.getClientCategory(clientFantasyName);

    for (let i=0;i<pedido[0].payload.val().products.length;i++) {
      if (pedido[0].payload.val().products[i].quantity != 0) { //solo guardo los prod con quant>0
        let pedidoAux = pedido[0].payload.val().products[i];
        pedidoAux.price = pedido[0].payload.val().products[i].discountPrice;
        prods.push(pedido[0].payload.val().products[i]);
      }
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
    if (!this.isClientInDebt(clientFantasyName)) {
      this.updatePedido(result.key, {
        "aproved": "SI"
      });
    }

    this.resetPedido()
  }

  getClientCategory(clientFantasyName: any) {
    let clientCategory = "";
    if (this.clients) {
      for (let i = 0;i < this.clients.length;i++) {
        if (this.clients[i].payload.val().fantasyName == clientFantasyName) {
          clientCategory = this.clients[i].payload.val().clientCategory;
          return clientCategory
        }
      }
    }
    return clientCategory
  }

  updatePrices(pedido: any, clientFantasyName: any) {
    let clientCategory = this.getClientCategory(clientFantasyName);
    let price;
    let products = []
      if (!pedido[0]) return
      for (let i=0;i<pedido[0].payload.val().products.length;i++) {
        switch (clientCategory) {
          case "":
            price = pedido[0].payload.val().products[i].product.discPrice1;
             break;
          case "Distribuidor":
            price = pedido[0].payload.val().products[i].product.discPrice1;
            break;
          case "Comercio":
            price = pedido[0].payload.val().products[i].product.discPrice2;
            break;
          case "Gimnasio":
            price = pedido[0].payload.val().products[i].product.discPrice3;
            break;
          default:
            return pedido[0].payload.val().products[i].price;
        }
        let discountPrice = price;
        if (pedido[0].payload.val().products[i].discount) {
          discountPrice =  price * (1 - pedido[0].payload.val().products[i].discount/100)
        };
        products.push({
          "price": price,
          "discountPrice": discountPrice,
          "product": {
            "buyPrice": pedido[0].payload.val().products[i].product.buyPrice,
            "prodCategory": pedido[0].payload.val().products[i].product.prodCategory,
            "imageUrl": pedido[0].payload.val().products[i].product.imageUrl,
            "price1": pedido[0].payload.val().products[i].product.price1,
            "price2": pedido[0].payload.val().products[i].product.price2,
            "price3": pedido[0].payload.val().products[i].product.price3,
            "discPrice1": pedido[0].payload.val().products[i].product.discPrice1,
            "discPrice2": pedido[0].payload.val().products[i].product.discPrice2,
            "discPrice3": pedido[0].payload.val().products[i].product.discPrice3,
            "title": pedido[0].payload.val().products[i].product.title
          },
          "productId": pedido[0].payload.val().products[i].productId,
          "quantity": pedido[0].payload.val().products[i].quantity,
          "discount": pedido[0].payload.val().products[i].discount
        })
      }

      this.db.object('/pedido/' + pedido[0].key).update({
        "pedidoItemsCount": pedido[0].payload.val().pedidoItemsCount,
        "sellerName": this.appUser.name,
        "products": products
      });
  }


  getTotalCost(ped: any) {
    let totalCost = 0;
    if (ped.payload.val().pedido.products) {
      for (let i = 0;i < ped.payload.val().pedido.products.length;i++) {
        totalCost += ped.payload.val().pedido.products[i].discountPrice * ped.payload.val().pedido.products[i].quantity
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

  isPedidoInDebt(pedido: any) {
    let today = new Date();
    if((Date.parse(today.toString()) - pedido.payload.val().creationDate > 30*24*60*60*1000) && pedido.payload.val().paid == "NO" ) { //que pasen 30 dias
      return true;
    }
    return false;
  }

  isClientInDebt(clientFantasyName: string) {
    for (let i=0;i<this.pedidos.length;i++) {
      if (this.pedidos[i].payload.val().clientFantasyName == clientFantasyName &&
      this.isPedidoInDebt(this.pedidos[i])) return true;
    }
    return false;
  }


}
