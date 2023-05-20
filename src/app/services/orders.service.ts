import { EventEmitter, Injectable, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Subscription, forkJoin } from 'rxjs';
import 'rxjs/add/operator/take';
import { AppUser } from '../models/app-user';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';
import { TOLERATED_DAYS, TOLERATED_DEBT } from '../constants';
import { Product } from '../models/product';
import { OrderDetail } from '../models/order-detail';
import { Order } from '../models/order';


@Injectable({
  providedIn: 'root'
})
//...........concentra operaciones de pedidos, pagos, clientes y vendedors..............
export class OrdersService implements OnDestroy {

  appUser: AppUser;
  clientPageIndex: number;
  clientPageSize: number;
  clients: any[] = [];
  clientsCurrentItemsToShow: any[];
  clientsPaginator: {"pageIndex": number, "pageSize": number, "length": number} = {"pageIndex": 0, "pageSize": 10, "length": 0};
  fantasyName: string;
  filteredClients: any[];
  filteredProducts: any[];
  fromEditing: boolean;
  itemsPerPage: number;
  orders: any[];
  ordersDetail: any[];
  payment: any;
  paymentId: any;
  paymentIndex: number;
  payments: any[];
  products: any[];
  prodsCategory: any;
  query: any;
  sellers: any[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private db: AngularFireDatabase,
    private productService: ProductService,
    private auth: AuthService,
    private route: ActivatedRoute
    ) {

      console.log('orders service constructor');
      const sub = this.getAllSellers().subscribe(sellers => {
        this.sellers = sellers;
      });
      this.subscriptions.push(sub)
      const sub2 = this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
        //this.appUser = {name : "Natalia Guevara"}
        this.filteredProducts = [];
        const sub3 = this.productService.getAllProducts().subscribe(products => {
          this.filteredProducts = this.products = products;
          const sub4 = this.route.queryParamMap.subscribe(params => {
            this.prodsCategory = params.get('prodsCategory');
            if (this.products) {
              this.filteredProducts = (this.prodsCategory) ?
              this.products.filter((p: any) =>
                p.payload.val().prodsCategory == this.prodsCategory) :
              this.products;
            }
          });
          this.subscriptions.push(sub4)
        });
        this.subscriptions.push(sub3)
      });
      this.subscriptions.push(sub2)
      const sub6 = this.getAllClients().subscribe(clients => {
        this.clients = clients;
      });
      this.subscriptions.push(sub6)
      const sub7 = this.getAllOrders().subscribe(orders => {
        this.orders = orders;

        //NO BORRAR********************************************************
        //---------------------------------------------------------
        // if (this.orders[0].payload.val().order) { //borrar luego
        //this.createOrdersdetails(this.orders)
        // }
        //---------------------------------------------------------

      });
      this.subscriptions.push(sub7)
      const sub8 = this.getAllPayments().subscribe(payments => {
        this.payments = payments;
      });
      this.subscriptions.push(sub8)
      const sub9 = this.getAllOrdersDetail().subscribe(ordersDetail => {
        this.ordersDetail = ordersDetail;
      });
      this.subscriptions.push(sub9)
  }
    //---------------------------------------------------------

    //NO BORRAR********************************************************
  // createOrdersdetails(orders: any[]): void { //borrar luego metodo redisenio

  //   console.log('crea ordersDetail solo para migrar');
  //   orders.forEach((order)=>{
  //     if (!order.payload.val().fantasyName) {
  //       let products: Product[]= []
  //       order.payload.val().order.products.forEach((p: any) => {
  //         let product: Product = {
  //           title: p.product.title,
  //           category: p.product.prodsCategory,
  //           discountPrice: p.discountPrice,
  //           quantity: p.quantity
  //         }
  //         p.discount ? product.discount = p.discount: 0;
  //         products.push(product)
  //       });
  //         //console.log('orders[0].payload.val() ', order.payload.val());

  //       let orderDetail: OrderDetail = {
  //         products: products
  //       }
  //       let result = this.db.list('/ordersDetail/').push(orderDetail);

  //       if (result.key) {
  //         let ord: Order = {
  //           amountWithIva: order.payload.val().amount,
  //           aproved: order.payload.val().aproved,
  //           date: order.payload.val().date,
  //           fantasyName: order.payload.val().clientFantasyName,
  //           iva: order.payload.val().iva,
  //           orderDetailKey: result.key,
  //           seller: order.payload.val().order.sellerName
  //         }

  //         order.payload.val().fullPaymentDate ? ord.fullPaymentDate = order.payload.val().fullPaymentDate: undefined;
  //         order.payload.val().hasDiscount ? ord.hasDiscount = order.payload.val().hasDiscount: undefined;
  //         order.payload.val().clientInDebt ? ord.clientInDebt = order.payload.val().clientInDebt: undefined;

  //         this.db.object('/orders/' + order.key).remove();
  //         this.db.object('/orders/' + order.key).update(ord);
  //       }
  //       else console.log('la operacion fallo');
  //     }
  //     else console.log('');
  //   })
  // }
  // //NO BORRAR********************************************************


  // ................................................orders methods................................................


  getOrderDetail(key: string) {
    return this.ordersDetail.find(od => od.key === key);
  }

  async removeOrder(order: any) {
    let orderProducts = this.getOrderDetail(order.payload.val().orderDetailKey).payload.val().products;
    await this.productService.restoreStock(order, this.products, orderProducts);
    await this.db.object('/ordersDetail/' + order.payload.val().orderDetailKey).remove();
    await this.db.object('/orders/' + order.key).remove();


    //this.addPaymentAmount(order.payload.val().fantasyName, order.payload.val().debt, this.clients);
  }

  getAllOrders() {
    return this.db.list('/orders').snapshotChanges();
  }

  getAllOrdersDetail() {
    return this.db.list('/ordersDetail').snapshotChanges();
  }



  // discount(order:any, product:any, discount: number, orderIndex: number) {
  //   let products = []
  //     for (let i=0;i<order[this.orderIndex].payload.val().products.length;i++) {
  //       if (product.productId == order[this.orderIndex].payload.val().products[i].productId) {
  //         this.db.object('/order/' + order[orderIndex].key +'/products/' + i).update({
  //           "discountPrice": order[this.orderIndex].payload.val().products[i].price * (1 - discount/100),
  //           "discount": discount
  //         });
  //         break;
  //       }
  //     }
  // }

  getTotalAmount(products: any) {
    let totalAmount = 0;
    if (products) {
      for (let i = 0;i < products.length;i++) {
        totalAmount += products[i].discountPrice * products[i].quantity
      }
    }
    return totalAmount;
  }

  aproveOrder(order:any) {
    this.updateOrder(order.key, {"aproved": true})
  }

  updateOrder(key: any, order:any) {
    return this.db.object('/orders/' + key).update(order);
  }

  isClientInDebt(fantasyName: string, orders: any[]) {
    let ordersInDebt = false;
    for (let i=0;i<orders.length;i++) {
      if (orders[i].payload.val().fantasyName?.toLowerCase().includes(fantasyName?.toLowerCase()) &&
      this.isOrderInDebt(orders[i])) ordersInDebt = true;
    }
    if (ordersInDebt && this.getDebt(fantasyName) > TOLERATED_DEBT) return true
    return false;
  }

  //inDebt true es para que me calcule la deuda de los pedidos de fecha mayor a dias tolerados, sino trae el monto total de pedidos
  getClientOrdersAmount(fantasyName: string, inDebt: boolean) {
    let amount = 0;
    if (this.orders) {
      for (let i=0;i<this.orders.length;i++) {
        if (this.orders[i].payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase()) && (!inDebt || this.isOrderInDebt(this.orders[i]))) {
          amount += parseFloat(this.orders[i].payload.val().amountWithIva)
        }
      }
    }
    return amount
  }


  // ................................................clients methods................................................

  createClient(client: any) {
    client.debt = 0;
    return this.db.list('/clients').push(client);
  }

  getAllClients() {
    return this.db.list('/clients').snapshotChanges();
  }

  getUserClients(seller: string): any[] {
    let userClients: any[] = [];
    for (let i=0;i<this.clients.length;i++) {
      if (this.clients[i].payload.val().designatedSeller == seller) userClients.push(this.clients[i].payload.val().fantasyName)
    }
    return userClients
  }

  getClient(clientId:any) {
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

  // addPaymentAmount(fantasyName: string, amount: number, clients: any) {
  //   for (let i=0;i<clients.length;i++) {
  //     if (clients[i].payload.val().fantasyName == fantasyName) {
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
    let result = [];
    for (let i=0;i<clients.length;i++) {
      if (this.isClientInDebt(clients[i].payload.val().fantasyName, orders))
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

  getAddress(fantasyName: string) {
    for (let i=0;i<this.clients.length;i++) {
      if (this.clients[i].payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase())) {
        return this.clients[i].payload.val().address;
      }
    }
    return null;
  }

  getClientCategory(fantasyName: any) {
    let clientCategory = "";
    if (this.clients) {
      for (let i = 0;i < this.clients.length;i++) {
        if (this.clients[i].payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase())) {
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

  // calcDebtGreatherThanToleratedDays(fantasyName: any) {
  //   let ordersAmount = this.getClientOrdersAmount(fantasyName, true);
  //   return ordersAmount
  // }

  // ................................................payments methods................................................

  // createPayment(payment: any, clients: any) {
  //   payment.aproved = false;
  //   //this.addPaymentAmount(payment.client, payment.amount, clients)
  //   //antes le ponia la fecha del dia, ahora puede elegirla, por eso comento lo de abajo

  //   payment.date = payment.date.unix()*1000;

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
    payment.date = payment.date.unix()*1000;
    this.setOrdersPaymentDate(payment)
        //el cobro no es para una factura en particular
    if (!payment.orderNumber) {
      payment.orderNumber = 0;
    }
    return this.db.list('/payments').push(payment);
  }

  setOrdersPaymentDate(payment: any) { //arreglar
    let totalPayments = this.getTotalPayments(payment)
    let amounts = 0;
    this.orders.forEach((order) =>{
      if (order.payload.val().fantasyName.toLowerCase().includes(payment.client.toLowerCase())
      && order.payload.val().aproved) {
        amounts += parseFloat(order.payload.val().amount);
        if (!order.payload.val().fullPaymentDate && totalPayments > amounts - TOLERATED_DEBT) {
          this.updateOrder(order.key, {
            "fantasyName": order.payload.val().fantasyName,
            "seller": order.payload.val().seller,
            "date": order.payload.val().date,
            "aproved": order.payload.val().aproved,
            "amount": order.payload.val().amount,
            "clientInDebt": order.payload.val().clientInDebt,
            "hasDiscount": order.payload.val().hasDiscount,
            "iva": order.payload.val().iva,
            "order": order.payload.val().order,
            "orderNumber": order.payload.val().orderNumber,
            "fullPaymentDate": Date.now()
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
      if (this.payment[i].payload.val().sellerName == this.appUser.name) this.db.object('/payment/'+ this.payment[i].key).remove();
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

  addSaleToSeller(order: any, amount: any, fantasyName: string) {
    if (!this.isDateInThisMonth(parseInt(order.payload.val().date))) {
      let sellerN = order.payload.val().seller;
      amount = Math.round(parseFloat(amount) * 10) / 10;
      let seller = this.getSellerByName(sellerN);
      let category = this.getClientCategory(fantasyName);
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
  calculateFullPaymentDates(seller: String) {

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
              "fantasyName": orders[j].payload.val().fantasyName,
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
        if (this.orders[i].payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase())) {
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

  getSellerClients(seller: String) {
    let clientsSellerNames = [];
    for (let i=0;i<this.clients.length;i++) {
      if (this.clients[i].payload.val().designatedSeller == seller)
      clientsSellerNames.push(this.clients[i].payload.val().fantasyName)
    }
    return clientsSellerNames
  }

  getSellerOrders(seller: String, fantasyName: String) {
    let sellerOrders = [];
    if (this.orders) {
      for (let i=0;i<this.orders.length;i++) {
        if (this.orders[i].payload.val().seller == seller
        && this.orders[i].payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase()))
        sellerOrders.push(this.orders[i]);
      }
    }
    else console.log('falla en OrdersService, metodo getSellerOrders');
    return sellerOrders
  }
  getSellerPayments(seller: String, fantasyName: String) {
    let sellerPayments = [];
    if (this.payments[0]) {
      for (let i=0;i<this.payments.length;i++) {
        if (this.payments[i].payload.val().sellerName == seller
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
  getDebt(fantasyName: string) {
    let today = new Date().getTime();
    let totalPayments = this.getTotalPayments({"client": fantasyName })
    let amounts = 0;
    let result = 0;
    let keepAdding = false;
    this.orders.forEach((order) => {
      if (order.payload.val().fantasyName.toLowerCase().includes(fantasyName.toLowerCase())) {
        amounts += parseFloat(order.payload.val().amountWithIva);
        if (keepAdding && (today - order.payload.val().date > TOLERATED_DAYS*24*60*60*1000) && !order.payload.val().fullPaymentDate) result += parseFloat(order.payload.val().amountWithIva);
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
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
