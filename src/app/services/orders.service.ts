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
import { StockService } from './stock.service';


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
  clientFantasyName: string;
  hasDiscount: boolean = false;
  orderNumber: any = [];

  constructor(private db: AngularFireDatabase, private productService: ProductService, public clientsService: ClientsService,
    private auth: AuthService, private route: ActivatedRoute, private router: Router,  private stockService: StockService) {

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
          if (!order) this.createOrderEmpty(); // pruebo esto
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
      "date": time,
      "aproved": "NO"
    });
    //this.orderId = result.key;
    return result;
  }

  isStock(order: any, products: any) {
    for (let i=0;i<order.payload.val().products.length;i++) {
      if (products[i].quantity > 0 && !this.isProductStock(products[i])) {
        return false
      }
    }
    return true
  }

  isProductStock(product: any) {
    for (let i=0;i<this.products.length;i++) {
      if (this.products[i].payload.val().title == product.product.title && this.products[i].payload.val().stock < product.quantity) return false
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

  public createOrderEmpty() {
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

  public createOrderNumber() {
    let result = this.db.list('/orderNumber/').push({
      "orderNumber": 0
    });
  }

  updateOrder(key: any, order:any) {
    return this.db.object('/orders/' + key).update(order);
  }

  removeOrder(order: any) {
    this.db.object('/orders/' + order.key).remove();
    this.productService.restoreStock(order, this.products);
    this.clientsService.addPaymentAmount(order.payload.val().clientFantasyName, order.payload.val().debt);
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

  public getOrderNumber() {
    let result = this.db.list('/orderNumber').snapshotChanges();
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

  createOrder(sellerName: string, clientFantasyName: string, iva: number, products: any, quantity: number, date: any) {
    let prods = [];
    let clientCategory = this.getClientCategory(clientFantasyName);
    let amount = 0;
    for (let i=0;i<products.length;i++) {
      if (products[i].discount != 0) this.hasDiscount = true;
      if (products[i].quantity != 0) { //solo guardo los prod con quant > 0
        prods.push({"discountPrice": products[i].discountPrice, "quantity": products[i].quantity,
        "product": {"title": products[i].product.title, "prodsCategory": products[i].product.prodsCategory}});
        amount += products[i].quantity * products[i].discountPrice * (1 + iva/100)
      }
    }
    let time = new Date();
    time.getHours();
    //time.getMinutes();
    let debt = false;
    if (this.isClientInDebt(clientFantasyName, this.orders)) {
      debt = true;
    }
    let isAproved = !debt && time.getHours()<=20; //si los hacen despues de las 21 salen sin aprobacion
    let updatedDebt = amount
    if (this.getClientDebt(clientFantasyName) < 0) {
      if (amount + this.getClientDebt(clientFantasyName) <=0) {
        updatedDebt = 0
      }
      else updatedDebt = amount + this.getClientDebt(clientFantasyName);
    }

    if (iva != 21) isAproved = false;
    if (date == null) {
      date = time.getTime();
    }
    else date = date.unix()*1000;

    let result = this.db.list('/orders/').push({
      "order": {
        "orderItemsCount": quantity,
        "products":prods,
        "sellerName": sellerName,
      },
      "date": date,
      "iva": iva,
      "clientFantasyName": clientFantasyName,
      "aproved": isAproved,
      "amount": amount,
      "debt": updatedDebt,
      "hasDiscount": this.hasDiscount,
      "clientInDebt": debt,
      "orderNumber": this.orderNumber[0].payload.val().orderNumber,
      "sended": false
    })
    this.incrementOrderNumber();
    this.clientsService.addPaymentAmount(clientFantasyName, -amount)
    this.productService.updateStocks(prods, this.products, false);
  }

  restoreOrderAmount(payment: any) {
    let rest = 0;
    if (payment.payload) rest = payment.payload.val().amount;
    else rest = payment.amount;
    for (let i=0;i<this.orders.length;i++) {
      if (payment.payload && payment.payload.val().orderNumber > 0 && this.orders[i].payload.val().orderNumber == payment.payload.val().orderNumber) {
        if (parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt) <= payment.payload.val().amount) {
          rest = rest - (parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt));
          this.updateOrder(this.orders[i].key, {"debt": this.orders[i].payload.val().amount})
          if (rest > 10) this.restoreOrderAmount({"orderNumber": 0, "amount": rest, "client": payment.payload.val().client})
          break
        }
        else if (parseFloat(this.orders[i].payload.val().debt)) {
          let debt = parseFloat(this.orders[i].payload.val().debt) + rest;
          this.updateOrder(this.orders[i].key, {"debt": debt});
          break
        }
      }
    }
    for (let i=0;i<this.orders.length;i++) {
      if (this.orders[i].payload.val().clientFantasyName == payment.client) {
        if (parseFloat(this.orders[i].payload.val().amount) && parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt) <= payment.amount) {
          rest = rest - (parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt));
          this.updateOrder(this.orders[i].key, {"debt": this.orders[i].payload.val().amount})
          if (rest > 10) this.restoreOrderAmount({"orderNumber": 0, "amount": rest, "client": payment.client})
          break
        }
        else if (parseFloat(this.orders[i].payload.val().debt)) {
          let debt = parseFloat(this.orders[i].payload.val().debt) + rest;
          this.updateOrder(this.orders[i].key, {"debt": debt});
          break
        }
      }
    }
  }

  getClientDebt(clientFantasyName: string) {
    let client = this.clients.filter((cli: any) => {
      return cli.payload.val().fantasyName == clientFantasyName
    });
    if (client) return parseFloat(client[0].payload.val().debt);
    return 0;
  }

  sendNote (amount: any, clientFantasyName: string) {
    let result = this.db.list('/creditNotes/').push({
      "amount": amount,
      "clienteFantasyName": clientFantasyName,
      "date": new Date().getTime()
    });
    this.clientsService.addPaymentAmount(clientFantasyName, -amount)
  }

  cleanDebt(order: any) {
    this.updateOrder(order.key, {"debt": 0})
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

  isOrderInDebt(order: any) {
    let today = new Date();
    if((Date.parse(today.toString()) - order.payload.val().date > 30*24*60*60*1000) && order.payload.val().debt != 0 ) { //que pasen 30 dias
      return true;
    }
    return false;
  }

  isClientInDebt(fantasyName: string, orders: any[]) {
    for (let i=0;i<orders.length;i++) {
      if (orders[i].payload.val().clientFantasyName == fantasyName &&
      this.isOrderInDebt(orders[i])) return true;
    }
    return false;
  }

  getClientOrdersAmount(fantasyName: string) {
    let amount = 0;
    if (this.orders) {
      for (let i=0;i<this.orders.length;i++) {
        if (this.orders[i].payload.val().clientFantasyName == fantasyName) {
          amount += parseFloat(this.orders[i].payload.val().amount)
        }
      }
    }
    return amount
  }

  incrementOrderNumber() {
    let orderNumb = parseInt(this.orderNumber[0].payload.val().orderNumber) + 1;
    return this.db.object('/orderNumber/' + this.orderNumber[0].key).update({"orderNumber": orderNumb});
  }

  updateSendedStatus(order: any) {
    this.db.object('/orders/' + order.key).update({"sended": !order.payload.val().sended});
  }
}
