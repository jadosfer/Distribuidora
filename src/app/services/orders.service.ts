import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ignoreElements } from 'rxjs-compat/operator/ignoreElements';
import 'rxjs/add/operator/take';
import { AppUser } from '../models/app-user';
import { AuthService } from './auth.service';
import { ClientsService } from './clients.service';
import { ProductService } from './product.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersService implements OnDestroy {

  clients: any;
  order: any;
  orders: any;
  orderId: any;
  appUser: AppUser;
  products:any;
  prodsCategory: string | null;
  filteredProducts:any;
  orderIndex: number;

  constructor(private db: AngularFireDatabase, private productService: ProductService, public clientsService: ClientsService,
    private auth: AuthService, private route: ActivatedRoute, private router: Router) {


    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
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
        });

        this.getOrder().subscribe(order => {
          if (!order) this.createOrder(); // pruebo esto
          this.order = order;
            this.orderIndex = -1
            for (let i=0;i<this.order.length;i++) {
              if (this.order && this.appUser && this.order[i].payload.val().sellerName == this.appUser.name) {
                this.orderIndex = i
                this.orderId =  this.order[i].key;
                break
              }
            }
        });
      });

      this.clientsService.getAll().subscribe(clients => {
        this.clients = clients;
      });
      this.getAll().subscribe(orders => {
        this.orders = orders;
      });

    });
   }

  ngOnDestroy() {
    //this.resetOrder()
  }

  private create() {
    let time = new Date().getTime()
    let result = this.db.list('/orders').push({
      "creationDate": time,
      "aproved": "NO",
      "paid": "NO"
    });
    //this.orderId = result.key;
    return result;
  }

  public createOrder() {
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
      "orderItemsCount": 0,
      "sellerName": this.appUser.name,
      "products": products
    });
  }

  updateOrder(key: any, order:any) {
    return this.db.object('/orders/' + key).update(order);
  }

  removeOrder(orderId: any) {
    this.db.object('/orders/' + orderId).remove();
  }

  resetOrder(orderIndex: any){
    this.db.object('/order/'+ this.order[orderIndex].key).remove();
  }

  clearOrder() {
    //this.db.object('/order/').remove(); elimina todo "order" de la base
    if (!this.order) return;
    for (let i=0;i<this.order.length;i++) {
      if (this.order[i].payload.val().sellerName == this.appUser.name) this.db.object('/order/'+ this.order[i].key).remove();
    }
  }


  public getOrder() {
    let result = this.db.list('/order').snapshotChanges();
    return result;
  }

  public getAll() {
    return this.db.list('/orders').snapshotChanges();
  }


  updateOrderItemQuantity(order:any, product:any, change: number, orderIndex: number){
    if (order[orderIndex]) {
      this.db.object('/order/' + order[orderIndex].key).update({
        "orderItemsCount": order[orderIndex].payload.val().orderItemsCount + change
      });
    }
    for (let i=0;i<this.products.length;i++) {
      if (product.productId == order[orderIndex].payload.val().products[i].productId) {
        this.db.object('/order/' + order[orderIndex].key +'/products/' + i).update({
          "quantity": order[orderIndex].payload.val().products[i].quantity + change
        });
        break;
      }
    }
  }

  discount(order:any, product:any, discount: number, orderIndex: number) {
    let products = []
      for (let i=0;i<order[this.orderIndex].payload.val().products.length;i++) {
        if (product.productId == order[this.orderIndex].payload.val().products[i].productId) {
          this.db.object('/order/' + order[orderIndex].key +'/products/' + i).update({
            "discountPrice": order[this.orderIndex].payload.val().products[i].price * (1 - discount/100),
            "discount": discount
          });
          break;
        }
      }
  }

  sendOrder(order: any, clientFantasyName: string, iva: number, aproved: boolean, products: any, quantity: number) {

    let prods = [];
    let clientCategory = this.getClientCategory(clientFantasyName);
    let amount = 0;
    for (let i=0;i<products.length;i++) {
      if (products[i].quantity != 0) { //solo guardo los prod con quant>0
        prods.push(products[i]);
        amount += products[i].quantity * products[i].discountPrice * (1 + iva/100)
        console.log(amount)
      }
    }

    let time = new Date();
    time.getHours();
    //time.getMinutes();
    let debt = false;
    if (this.isClientInDebt(clientFantasyName)) {
      debt = true;
    }
    let isAproved = aproved && !debt && time.getHours()<=20; //si los hacen despues de las 21 salen sin aprobacion

    let result = this.db.list('/orders/').push({
      "order": {
        "orderItemsCount": quantity,
        "products":prods,
        "sellerName": order[this.orderIndex].payload.val().sellerName,
      },
      "creationDate": time.getTime(),
      "paid": "NO",
      "iva": iva,
      "clientFantasyName": clientFantasyName,
      "aproved": isAproved,
      "amount": amount,
      "debt": amount
    })
    this.clientsService.addPaymentAmount(clientFantasyName, -amount)
  }

  sendNote (amount: any, clientFantasyName: string) {

    let result = this.db.list('/creditNotes/').push({
      "amount": amount,
      "clienteFantasyName": clientFantasyName,
      "creationDate": new Date().getTime()
    });

    this.clientsService.addPaymentAmount(clientFantasyName, -amount)
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

  getTotalAmount(products: any) {
    let totalAmount = 0;
    if (products) {
      for (let i = 0;i < products.length;i++) {
        totalAmount += products[i].discountPrice * products[i].quantity
      }
    }
    return totalAmount;
  }

  getTotalCost(order: any) {
    let totalCost = 0;
    if (order.payload.val().order.products) {
      for (let i = 0;i < order.payload.val().order.products.length;i++) {
        totalCost += order.payload.val().order.products[i].discountPrice * order.payload.val().order.products[i].quantity
      }
    }
    return totalCost;
  }

  aprove(order:any) {
    this.updateOrder(order.key, {"aproved": true})
  }

  getPaid(order:any) {
    this.updateOrder(order.key, {"paid": "SI"})
  }

  isOrderInDebt(order: any) {
    let today = new Date();
    if((Date.parse(today.toString()) - order.payload.val().creationDate > 30*24*60*60*1000) && order.payload.val().paid == "NO" ) { //que pasen 30 dias
      return true;
    }
    return false;
  }

  isClientInDebt(clientFantasyName: string) {
    for (let i=0;i<this.orders.length;i++) {
      if (this.orders[i].payload.val().clientFantasyName == clientFantasyName &&
      this.isOrderInDebt(this.orders[i])) return true;
    }
    return false;
  }


}
