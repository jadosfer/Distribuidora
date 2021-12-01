import { OrdersService } from './orders.service';
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
export class PaymentsService {

  clients: any;
  payment: any;
  payments: any;
  paymentId: any;
  appUser: AppUser;
  products:any;
  prodsCategory: string | null;
  filteredProducts:any;
  paymentIndex: number;
  orders: any;
  clientFantasyName: string;

  constructor(private db: AngularFireDatabase, private productService: ProductService, public clientsService: ClientsService,
    private auth: AuthService, private route: ActivatedRoute, private router: Router, private ordersService: OrdersService) {


    this.auth.appUser$.subscribe(appUser => {
      this.ordersService.getAll().subscribe(orders => {this.orders = orders})
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

      });

      this.clientsService.getAll().subscribe(clients => {
        this.clients = clients;
      });
      this.getAll().subscribe(payments => {
        this.payments = payments;
      });

    });
    }

  ngOnDestroy() {
  }

  create(payment: any) {
    let time = new Date().getTime()
    payment.paymentDate = time;
    payment.aproved = false;
    this.clientsService.addPaymentAmount(payment.client, payment.amount)
    this.clearDebts(payment.client, payment.amount)
    return this.db.list('/payments').push(payment);
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

  clearDebts(clientFantasyName: string, amount: number) {
    let rest = amount
    for (let i=0;i<this.orders.length;i++) {
      if (this.orders[i].payload.val().clientFantasyName == clientFantasyName) {
        if (parseInt(this.orders[i].payload.val().debt) && parseInt(this.orders[i].payload.val().debt) <= rest) {
          this.ordersService.updateOrder(this.orders[i].key, {"debt": 0})
          rest = rest - parseInt(this.orders[i].payload.val().debt);
          if (rest < 10) break
        }
        else if (this.orders[i].payload.val().debt) {
          this.ordersService.updateOrder(this.orders[i].key, {"debt": parseInt(this.orders[i].payload.val().debt) - rest})
          break
        }
      }
    }
  }


  public getPayment() {
    let result = this.db.list('/payment').snapshotChanges();
    return result;
  }

  public getAll() {
    return this.db.list('/payments').snapshotChanges();
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

  // getTotalCost(p: any) {
  //   let totalCost = 0;
  //   if (p.payload.val().amount) {
  //     for (let i = 0;i < p.payload.val().payment.products.length;i++) {
  //       totalCost += p.payload.val().payment.products[i].discountPrice * p.payload.val().payment.products[i].quantity
  //     }
  //   }
  //   return totalCost;
  // }

  aprove(payment:any) {
    this.updatePayment(payment.key, {"aproved": true})
  }

  getPaid(payment:any) {
    this.updatePayment(payment.key, {"paid": "SI"})
  }

  isPaymentInDebt(payment: any) {
    let today = new Date();
    if((Date.parse(today.toString()) - payment.payload.val().creationDate > 30*24*60*60*1000) && payment.payload.val().paid == "NO" ) { //que pasen 30 dias
      return true;
    }
    return false;
  }

  isClientInDebt(clientFantasyName: string) {
    for (let i=0;i<this.payments.length;i++) {
      if (this.payments[i].payload.val().clientFantasyName == clientFantasyName &&
      this.isPaymentInDebt(this.payments[i])) return true;
    }
    return false;
  }


}

