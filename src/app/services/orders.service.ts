import { EventEmitter, Injectable, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/take';
import { AppUser } from '../models/app-user';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';
import { TOLERATED_DAYS, TOLERATED_DEBT } from '../constants';


@Injectable({
  providedIn: 'root'
})
//...........concentra operaciones de pedidos, pagos, clientes y vendedores..............
export class OrdersService implements OnDestroy, OnInit, OnChanges {

  private filteredClients: any[];
  private clientsCurrentItemsToShow: any[];
  private fromEditing: boolean;
  private query: any;
  private clientPageIndex: number;
  private clientPageSize: number;
  private itemsPerPage: number;


  clients: any[];
  clients$: any;
  order: any;
  orders: any[];
  sellers: any[];
  orderId: any;
  appUser: AppUser;
  products:any[];
  prodsCategory: any;
  filteredProducts:any[];
  orderIndex: number;
  clientFantasyName: string;
  hasDiscount: boolean = false;
  orderNumber: any = [];

  clientsPaginator: {"pageIndex": number, "pageSize": number, "length": number} = {"pageIndex": 0, "pageSize": 10, "length": 0};

  payment: any;
  payments: any[];
  paymentId: any;
  paymentIndex: number;

  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;
  subscription5: Subscription;
  subscription6: Subscription;
  subscription7: Subscription;
  subscription8: Subscription;

  constructor(private db: AngularFireDatabase, private productService: ProductService,
    private auth: AuthService, private route: ActivatedRoute) {

      this.clients$ = this.getAllClients();
      this.subscription = this.getAllSellers().subscribe(sellers => {
        this.sellers = sellers;
      });
      this.subscription2 = this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
        this.filteredProducts = [];
        this.subscription3 = this.productService.getAll().subscribe(products => {
          this.filteredProducts = this.products = products;
          this.subscription4 = this.route.queryParamMap.subscribe(params => {
            this.prodsCategory = params.get('prodsCategory');
            if (this.products) {
              this.filteredProducts = (this.prodsCategory) ?
              this.products.filter((p: { payload: { val: () => { (): any; new(): any; prodsCategory: string | null; }; }; }) =>
                p.payload.val().prodsCategory == this.prodsCategory) :
              this.products;
            }
          });

          this.subscription5 = this.getOrder().subscribe(order => {
            if (!order) this.createOrderEmpty(); // pruebo esto
            this.order = order;
              this.orderIndex = -1
              for (let i=0;i<this.order.length;i++) {
                if (this.order && this.appUser && this.order[i].payload.val().sellerName == this.appUser?.name) {
                  this.orderIndex = i
                  this.orderId =  this.order[i].key;
                  break
                }
              }
          });
        });
      });
      this.subscription6 = this.getAllClients().subscribe(clients => {
        this.clients = clients;
      });
      this.subscription7 = this.getAllOrders().subscribe(orders => {
        this.orders = orders;
        // for (let i=0;i<this.orders.length;i++) {
        //   console.log('i = ', i);
        //   if (this.orders[i].payload.val().date > this.orders[i].payload.val().fullPaymentDate) {
        //     this.updateOrder(this.ordsaveers[i].key, {"fullPaymentDate": null})
        //   }
        // }
      });
      this.subscription8 = this.getAllPayments().subscribe(payments => {
        this.payments = payments;
      });
    }

   ngOnChanges() {
    console.log('onchanges');
   }

   ngOnInit() {
    console.log('onInit');
   }

  // ................................................orders methods................................................

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
      "orderItemsCount": 0,
      "sellerName": this.appUser?.name,
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

  async removeOrder(order: any) {
    await this.db.object('/orders/' + order.key).remove();
    await this.productService.restoreStock(order, this.products);
    //this.addPaymentAmount(order.payload.val().clientFantasyName, order.payload.val().debt, this.clients);
  }

  resetOrder(orderIndex: any){
    this.db.object('/order/'+ this.order[orderIndex].key).remove();
  }

  clearOrder() {
    //this.db.object('/order/').remove(); elimina todo "order" de la base
    if (!this.order) return;
    for (let i=0;i<this.order.length;i++) {
      if (this.order[i].payload.val().sellerName == this.appUser?.name) this.db.object('/order/'+ this.order[i].key).remove();
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

  getAllOrders() {
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

  createOrder(sellerName: string, clientFantasyName: string, iva: number, products: any, quantity: number, date: any, clientDebt: number) {
    let prods = [];
    let clientCategory = this.getClientCategory(clientFantasyName);
    let amount = 0;
    for (let i=0;i<products.length;i++) {
      if (parseInt(products[i].quantity) != 0) { //solo guardo los prod con quant > 0
        prods.push({"discount" : products[i].discount, "discountPrice": products[i].discountPrice, "quantity": products[i].quantity,
        "product": {"title": products[i].product.title, "prodsCategory": products[i].product.prodsCategory}});
        amount += parseInt(products[i].quantity) * parseFloat(products[i].discountPrice) * (1 + iva/100);
        if (parseFloat(products[i].discount) != 0) this.hasDiscount = true;
      }
    }
    let time = new Date();
    time.getHours();
    //time.getMinutes();
    let isAproved = clientDebt <= 0 && time.getHours()<=20; //si los hacen despues de las 21 salen sin aprobacion

    if (iva != 21 && clientCategory!="Gimnasio" && clientCategory!="Kiosko") isAproved = false;
    if (date == null) {
      date = time.getTime();
    }
    else date = date.getTime();
    if (amount) amount = Math.round(amount * 10) / 10;

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
      "hasDiscount": this.hasDiscount,
      "clientInDebt": clientDebt > 0,
      "orderNumber": this.orderNumber[0].payload.val().orderNumber,
    })
    this.incrementOrderNumber();
    //this.addPaymentAmount(clientFantasyName, -amount)
    this.productService.updateStocks(prods, this.products, false);
  }

  //volarlo si resuevo quitar debt en orders
  restoreOrderAmount(payment: any) {
    let rest = 0;
    if (payment.payload) rest = payment.payload.val().amount;
    else rest = payment.amount;
    for (let i=0;i<this.orders.length;i++) {
      if (payment.payload && payment.payload.val().orderNumber > 0 && this.orders[i].payload.val().orderNumber == payment.payload.val().orderNumber) {
        if (parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt) <= payment.payload.val().amount) {
          rest = rest - (parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt));
          let debt = Math.round((parseFloat(this.orders[i].payload.val().amount)) * 10) / 10
          this.updateOrder(this.orders[i].key, {"debt": debt})
          if (rest > 10) this.restoreOrderAmount({"orderNumber": 0, "amount": rest, "client": payment.payload.val().client})
          break
        }
        else if (parseFloat(this.orders[i].payload.val().debt)) {
          let debt = parseFloat(this.orders[i].payload.val().debt) + rest;
          debt = Math.round(debt * 10) / 10
          this.updateOrder(this.orders[i].key, {"debt": debt});
          break
        }
      }
    }
    for (let i=0;i<this.orders.length;i++) {
      if (this.orders[i].payload.val().clientFantasyName.toLowerCase().includes(payment.client.toLowerCase()) ) {
        if (parseFloat(this.orders[i].payload.val().amount) && parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt) <= payment.amount) {
          rest = rest - (parseFloat(this.orders[i].payload.val().amount) - parseFloat(this.orders[i].payload.val().debt));
          let amount = Math.round(this.orders[i].payload.val().amount * 10) / 10
          this.updateOrder(this.orders[i].key, {"debt": amount})
          if (rest > 10) this.restoreOrderAmount({"orderNumber": 0, "amount": rest, "client": payment.client})
          break
        }
        else if (parseFloat(this.orders[i].payload.val().debt)) {
          let debt = parseFloat(this.orders[i].payload.val().debt) + rest;
          debt = Math.round(debt * 10) / 10
          this.updateOrder(this.orders[i].key, {"debt": debt});
          break
        }
      }
    }
  }

  sendNote (amount: any, clientFantasyName: string) {
    amount = Math.round(amount * 10) / 10;
    let result = this.db.list('/creditNotes/').push({
      "amount": amount,
      "clienteFantasyName": clientFantasyName,
      "date": new Date().getTime()
    });
  }

  cleanDebt(order: any) {
    this.updateOrder(order.key, {"debt": 0})
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

  aproveOrder(order:any) {
    this.updateOrder(order.key, {"aproved": true})
  }

  isClientInDebt(fantasyName: string, orders: any[]) {
    for (let i=0;i<orders.length;i++) {
      if (orders[i].payload.val().clientFantasyName.toLowerCase().includes(fantasyName.toLowerCase()) &&
      this.isOrderInDebt(orders[i])) return true;
    }
    return false;
  }



  //inDebt true es para que me calcule la deuda de los pedidos de fecha mayor a dias tolerados, sino trae el monto total de pedidos
  getClientOrdersAmount(fantasyName: string, inDebt: boolean) {
    let amount = 0;
    if (this.orders) {
      for (let i=0;i<this.orders.length;i++) {
        if (this.orders[i].payload.val().clientFantasyName.toLowerCase().includes(fantasyName.toLowerCase()) && (!inDebt || this.isOrderInDebt(this.orders[i]))) {
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

  // ................................................clients methods................................................

  createClient(client: any) {
    client.debt = 0;
    return this.db.list('/clients').push(client);
  }

  getAllClients() {
    return this.db.list('/clients').snapshotChanges();
  }

  get(clientId:any) {
    return this.db.object('/clients/' + clientId).snapshotChanges();
  }

  update(clientId: any, client:any) {
    return this.db.object('/clients/' + clientId).update(client);
  }

  updateFilteredClients(clientId: any, client:any) {
    for (let i=0; i< this.filteredClients.length;i++) {
      if (this.filteredClients[i].key == clientId) {
      }
    }
  }

  delete(clientId:any) {
    return this.db.object('/clients/' + clientId).remove();
  }

  // addPaymentAmount(clientFantasyName: string, amount: number, clients: any) {
  //   for (let i=0;i<clients.length;i++) {
  //     if (clients[i].payload.val().fantasyName == clientFantasyName) {
  //       let debt = 0;
  //       if (clients[i].payload.val().debt) debt = parseFloat(clients[i].payload.val().debt) - amount;
  //       else debt = -amount
  //       let client = {"debt": debt}
  //       this.update(clients[i].key, client)
  //       break
  //     }
  //   }
  // }

  getClientsInDebt(clients: any[], orders: any[]) {
    // let result = [];
    // for (let i=0;i<clients.length;i++) {
    //   if (this.isClientInDebt(clients[i].payload.val().fantasyName, orders))
    //   result.push(clients[i])
    // }
    // return result;

    let result = [];
    for (let i=0;i<clients.length;i++) {
      if (this.getDebt(clients[i].payload.val().fantasyName) > 0)
      result.push(clients[i])
    }
    return result;
  }

  isOrderInDebt(order: any) {
    let today = new Date();
    if((Date.parse(today.toString()) - order.payload.val().date > TOLERATED_DAYS*24*60*60*1000) && !order.payload.val().fullPaymentDate) { //que pasen los dias tolerados
      return true;
    }
    return false;
  }

  getClientLastPayment(fantasyName: string, payments: any[]) {
    let payment = payments[0];
    payment.payload.val().date = 1
    for (let i=0;i<payments.length;i++) {
      if (payments[i].payload.val().client.toLowerCase().includes(fantasyName.toLowerCase()) && payments[i].payload.val().date > payment.payload.val().date)
      payment = payments[i];
    }
    return payment;
  }

  getAddress(fantasyName: string, clients: any[]) {
    for (let i=0;i<clients.length;i++) {
      if (this.clients[i].payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase())) {
        return this.clients[i].payload.val().address;
      }
    }
    return null;
  }

  getClientCategory(clientFantasyName: any) {
    let clientCategory = "";
    if (this.clients) {
      for (let i = 0;i < this.clients.length;i++) {
        if (this.clients[i].payload.val().fantasyName.toLowerCase().includes(clientFantasyName.toLowerCase())) {
          clientCategory = this.clients[i].payload.val().clientCategory;
          return clientCategory
        }
      }
    }
    return null;
  }

  calcDebt(fantasyName: any) {
    let result = 0;
    let ordersAmount = this.getClientOrdersAmount(fantasyName, false);
    let paymentsAmount = this.getClientPaymentsAmount(fantasyName);
    result = ordersAmount - paymentsAmount;
    return result
  }

  calcDebtGreatherThan30(fantasyName: any) {
    let ordersAmount = this.getClientOrdersAmount(fantasyName, true);
    return ordersAmount
  }

  // ................................................payments methods................................................

  // createPayment(payment: any, clients: any) {
  //   payment.aproved = false;
  //   //this.addPaymentAmount(payment.client, payment.amount, clients)
  //   //antes le ponia la fecha del dia, ahora puede elegirla, por eso comento lo de abajo

  //   payment.date = payment.date.unix()*1000; unix no va mas

  //   //el cobro no es para una factura en particular
  //   if (!payment.orderNumber) {
  //     payment.orderNumber = 0;
  //     this.clearDebts(payment.client, payment.amount, payment.date)
  //   }
  //   //el cobro es para una factura en particular
  //   else if (payment.orderNumber >= 0) {
  //     this.clearOrderDebt(payment)
  //   }
  //   return this.db.list('/payments').push(payment);
  // }

  createPayment(payment: any, clients: any) {
    payment.date = payment.date.getTime();
    this.setOrdersPaymentDate(payment)
        //el cobro no es para una factura en particular
    if (!payment.orderNumber) {
      payment.orderNumber = 0;
    }
    return this.db.list('/payments').push(payment);
  }

  setOrdersPaymentDate(payment: any) {
    debugger
    if (payment.client == "Bee Tel") debugger
    let totalPayments = this.getTotalPayments(payment)
    let lastPaymentDate = this.getLastPaymentDate(payment.client)
    let amounts = 0;
    this.orders.forEach((order) =>{
      if (order.payload.val().clientFantasyName.toLowerCase().includes(payment.client.toLowerCase())) {
        amounts += parseFloat(order.payload.val().amount);
        if (!order.payload.val().fullPaymentDate && totalPayments > amounts - TOLERATED_DEBT) {
          this.updateOrder(order.key, {
            "amount": order.payload.val().amount,
            "aproved": order.payload.val().aproved,
            "clientFantasyName": order.payload.val().clientFantasyName,
            "clientInDebt": this.isClientInDebt(order.payload.val().clientFantasyName, this.orders),
            "date": order.payload.val().date,
            "hasDiscount": order.payload.val().hasOwnProperty('hasDiscount') ? order.payload.val().hasDiscount : false,
            "iva": order.payload.val().iva,
            "order": order.payload.val().order,
            "orderNumber": order.payload.val().hasOwnProperty('orderNumber') ? order.payload.val().orderNumber : 0,
            "fullPaymentDate": lastPaymentDate
          })
        }
      }
    });
  }

  getTotalPayments(payment: any) {
    let totalPayments = 0;
    this.payments.forEach((pay) => {
      if (pay.payload.val().client.toLowerCase().includes(payment.client.toLowerCase())) {
        totalPayments += parseFloat(pay.payload.val().amount);
      }
    });
    if (payment.amount) {
      totalPayments += payment.amount;
    }
    return totalPayments
  }

  getLastPaymentDate(client: string) {
    let result = 0
    this.payments.forEach((pay) => {
      if (pay.payload.val().client.toLowerCase().includes(client.toLowerCase())) {
        result = pay.payload.val().date > result ? pay.payload.val().date : result;
      }
    });
    return result
  }

  setPaymentsToAll() {
    const today = new Date().getTime();
    this.clients.forEach((client)=> {
      let payment = {
        client: client.payload.val().fantasyName,
	      amount: 0,
        payWay: "Efectivo",
	      date: today
      }
      this.setOrdersPaymentDate(payment);
    });
  }


  updatePayment(key: any, payment:any) {
    return this.db.object('/payments/' + key).update(payment);
  }

  removePayment(paymentId: any) {
    this.db.object('/payments/' + paymentId).remove();
  }

  resetPayment(paymentIndex: any){
    this.db.object('/payment/'+ this.payment[paymentIndex].key).remove();
  }

  clearPayment() {
    if (!this.payment) return;
    for (let i=0;i<this.payment.length;i++) {
      if (this.payment[i].payload.val().sellerName == this.appUser?.name) this.db.object('/payment/'+ this.payment[i].key).remove();
    }
  }

  public getPayment() {
    let result = this.db.list('/payment').snapshotChanges();
    return result;
  }

  public getAllPayments() {
    return this.db.list('/payments').snapshotChanges();
  }

  aprovePayment(payment:any) {
    this.updatePayment(payment.key, {"aproved": true})
  }

  getClientPaymentsAmount(fantasyName: string) {
    let amount = 0;
    if (this.payments) {
      for (let i = 0;i < this.payments.length;i++) {
        if (this.payments[i].payload.val().client.toLowerCase().includes(fantasyName.toLowerCase())) {
          amount += parseFloat(this.payments[i].payload.val().amount)
        }
      }
    }
    return amount
  }
  // ................................................seller methods................................................

  createSeller(seller: any) {
    seller.retailSalesAdded = 0;
    seller.wholesalerSalesAdded = 0;
    return this.db.list('/sellers').push(seller);
  }

  getAllSellers() {
    return this.db.list('/sellers').snapshotChanges();
  }

  getSeller(sellerId:any) {
    return this.db.object('/sellers/' + sellerId).snapshotChanges();
  }

  updateSeller(sellerId: any, seller:any) {
    return this.db.object('/sellers/' + sellerId).update(seller);
  }

  deleteSeller(sellerId:any) {
    return this.db.object('/sellers/' + sellerId).remove();
  }

  getSellerByName(seller: string) {
    if (this.sellers) {
      for (let i=0;i<this.sellers.length;i++) {
        if (this.sellers[i].payload.val().name == seller)
        return this.sellers[i];
      }
    }
    return null;
  }

  addSaleToSeller(order: any, amount: any, clientFantasyName: string) {
    if (!this.isDateInThisMonth(parseInt(order.payload.val().date))) {
      let sellerName = order.payload.val().order.sellerName;
      amount = Math.round(parseFloat(amount) * 10) / 10;
      let seller = this.getSellerByName(sellerName);
      let category = this.getClientCategory(clientFantasyName);
      if (category == "Distribuidor") {
        let updatedWholesalerSalesAdded = parseFloat(seller.payload.val().wholesalerSalesAdded)
          + parseFloat(amount);
        this.updateSeller(seller.key, {"wholesalerSalesAdded": updatedWholesalerSalesAdded})
      }
      else {
        let updatedRetailSalesAdded = parseFloat(seller.payload.val().retailSalesAdded)
          + parseFloat(amount);
        this.updateSeller(seller.key, {"retailSalesAdded": updatedRetailSalesAdded})
      }
    }
  }
  isDateInThisMonth(date: number) {
    let daysFromOrderCreation = (Date.now() - date)/(1000*3600*24);
    let today = new Date(Date.now())
    return daysFromOrderCreation < today.getDate();
  }
  //mas vieja al principio
  sortArrayPayloadByDate(array: any) {
    if (!array) return [];
    array.sort((a: any, b: any) => {
      if (b.payload.val().date < a.payload.val().date) return 1;
      if (b.payload.val().date > a.payload.val().date) return -1;
      return 0;
    });
    return array;
  }

  //usado manualmente para corregir la falta de fecha de pago completado
  calculateFullPaymentDates(sellerName: String) {

    for (let k=0;k<this.clients.length;k++) {
      while (this.clients[k].payload.val().fantasyName != "Carlos Fox") k++;
      let payments = this.sortArrayPayloadByDate(this.getClientPayments(this.clients[k].payload.val().fantasyName))
      let orders = this.sortArrayPayloadByDate(this.getClientOrders(this.clients[k].payload.val().fantasyName))
      let i = 0;
      let j = 0;
      let ordersAmount = 0;
      let paymentsAmount = 0;
      while (i < payments.length && j < orders.length) {
        paymentsAmount += parseFloat(payments[i].payload.val().amount)
        while (j < orders.length) {
          ordersAmount += parseFloat(orders[j].payload.val().amount)
          if (paymentsAmount > ordersAmount - 200) {
            this.updateOrder(orders[j].key, {
              "amount": orders[j].payload.val().amount,
              "aproved": orders[j].payload.val().aproved,
              "clientFantasyName": orders[j].payload.val().clientFantasyName,
              "clientInDebt": orders[j].payload.val().clientInDebt,
              "date": orders[j].payload.val().date,
              "hasDiscount": orders[j].payload.val().hasDiscount,
              "iva": orders[j].payload.val().iva,
              "order": orders[j].payload.val().order,
              "orderNumber": orders[j].payload.val().orderNumber,
              "fullPaymentDate": payments[i].payload.val().date
            })
            j++
            if (j == orders.length) i = payments.length //esta linea corta el bucle de los payments cuando ya se pagaron todos los pedidos
          }
          else {
            i++
            ordersAmount -= parseFloat(orders[j].payload.val().amount);
            break;
          }
        }
      }
    }
  }
  getClientOrders(fantasyName: String) {
    let result = [];
    if (this.orders) {
      for (let i=0;i<this.orders.length;i++) {
        if (this.orders[i].payload.val().clientFantasyName.toLowerCase().includes(fantasyName.toLowerCase())) {
          result.push(this.orders[i])
        }
      }
    }
    else console.log('Problemas en orders Service metodo getClientOrders');
    return result
  }
  getClientPayments(fantasyName: String) {
    let result = [];
    if (this.payments) {
      for (let i=0;i<this.payments.length;i++) {
        if (this.payments[i].payload.val().client.toLowerCase().includes(fantasyName.toLowerCase())) {
          result.push(this.payments[i])
        }
      }
    }
    else console.log('Problemas en orders Service metodo getClientPayments');
    return result
  }

  getSellerClients(sellerName: String) {
    let clientsSellerNames = [];
    for (let i=0;i<this.clients.length;i++) {
      if (this.clients[i].payload.val().designatedSeller == sellerName)
      clientsSellerNames.push(this.clients[i].payload.val().fantasyName)
    }
    return clientsSellerNames
  }

  getSellerOrders(sellerName: String, fantasyName: String) {
    let sellerOrders = [];
    if (this.orders) {
      for (let i=0;i<this.orders.length;i++) {
        if (this.orders[i].payload.val().order.sellerName == sellerName
        && this.orders[i].payload.val().clientFantasyName.toLowerCase().includes(fantasyName.toLowerCase()))
        sellerOrders.push(this.orders[i]);
      }
    }
    else console.log('falla en OrdersService, metodo getSellerOrders');
    return sellerOrders
  }
  getSellerPayments(sellerName: String, fantasyName: String) {
    let sellerPayments = [];
    if (this.payments[0]) {
      for (let i=0;i<this.payments.length;i++) {
        if (this.payments[i].payload.val().sellerName == sellerName
        && this.payments[i].payload.val().client.toLowerCase().includes(fantasyName.toLowerCase()))
        sellerPayments.push(this.payments[i]);
      }

    }
    else console.log('falla en OrdersService, metodo getSellerPayments');
    return sellerPayments
  }

  setClientsCurrentItemsToShow(clientsCurrentItemsToShow: any[]) {
    this.clientsCurrentItemsToShow = clientsCurrentItemsToShow;
  }

  getClientsCurrentItemsToShow() {
    return this.clientsCurrentItemsToShow;
  }

  setFromEditing(fromEditing: boolean) {
    this.fromEditing = fromEditing;
  }

  getFromEditing() {
    return this.fromEditing;
  }

  setQuery(query: any) {
    this.query = query;
  }

  getQuery() {
    return this.query;
  }

  setClientsActualPage(clientPageIndex: number) {
    this.clientPageIndex = clientPageIndex;
  }

  getClientsActualPage() {
    return this.clientPageIndex;
  }

  setClientsTotalPages(clientPageSize: number) {
    this.clientPageSize = clientPageSize;
  }

  getClientsTotalPages() {
    return this.clientPageSize;
  }

  setClientItemsPerPage(itemsPerPage: number){
    this.itemsPerPage = itemsPerPage;
  }

  getClientItemsPerPage() {
    return this.itemsPerPage;
  }

  // ................................................common methods................................................
  // deuda mayor a los dias tolerados
  getDebt(clientFantasyName: string) {
    let today = new Date().getTime();
    let totalPayments = this.getTotalPayments({"client": clientFantasyName })
    let amounts = 0;
    let result = 0;
    let keepAdding = false;
    this.orders.forEach((order) => {
      if (order.payload.val().clientFantasyName.toLowerCase().includes(clientFantasyName.toLowerCase())) {
        amounts += parseFloat(order.payload.val().amount);
        if (keepAdding && (today - order.payload.val().date > TOLERATED_DAYS*24*60*60*1000) && !order.payload.val().fullPaymentDate) result += parseFloat(order.payload.val().amount);
        else;
        if (totalPayments < amounts - TOLERATED_DEBT && !order.payload.val().fullPaymentDate && result == 0
        && (today - order.payload.val().date > TOLERATED_DAYS*24*60*60*1000)) {
          result = amounts - totalPayments;
          keepAdding = true;
        }
        else;
      }
      else;
    });
    return result;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
    this.subscription5.unsubscribe();
    this.subscription6.unsubscribe();
    this.subscription7.unsubscribe();
    this.subscription8.unsubscribe();
  }
}
