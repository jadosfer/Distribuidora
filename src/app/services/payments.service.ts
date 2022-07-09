import { SellersService } from 'src/app/services/sellers.service';
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

  DEBT_TOLERATED = 100;
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

  constructor(private db: AngularFireDatabase, private productService: ProductService,
    public clientsService: ClientsService, private auth: AuthService, private route: ActivatedRoute,
    private router: Router, private ordersService: OrdersService, private sellersService: SellersService) {


    this.auth.appUser$.subscribe(appUser => {
      this.ordersService.getAll().subscribe(orders => {this.ordersService.orders = orders})
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
    payment.aproved = false;
    this.clientsService.addPaymentAmount(payment.client, payment.amount)
    //antes le ponia la fecha del dia, ahora puede elegirla, por eso comento lo de abajo

    payment.date = payment.date.unix()*1000;

    //el cobro no es para una factura en particular
    if (!payment.orderNumber) {
      payment.orderNumber = 0;
      this.clearDebts(payment.client, payment.amount)
    }
    //el cobro es para una factura en particular
    else if (payment.orderNumber >= 0) {
      this.clearOrderDebt(payment)
    }
    return this.db.list('/payments').push(payment);
  }

  clearDebts(clientFantasyName: string, amount: number) {
    let rest = amount
    for (let i=0;i<this.ordersService.orders.length;i++) {
      if (this.ordersService.orders[i].payload.val().clientFantasyName == clientFantasyName) {
        if (parseFloat(this.ordersService.orders[i].payload.val().debt)
        && parseFloat(this.ordersService.orders[i].payload.val().debt) <= rest) {
          this.sellersService.addSaleToSeller(this.ordersService.orders[i],
          this.ordersService.orders[i].payload.val().amount, this.ordersService.orders[i].payload.val().clientFantasyName);
          rest = rest - parseFloat(this.ordersService.orders[i].payload.val().debt);//cambie orden de este
          this.ordersService.updateOrder(this.ordersService.orders[i].key, {"debt": 0}) //con este
          if (rest < this.DEBT_TOLERATED) break
        }
        else if (this.ordersService.orders[i].payload.val().debt) {
          let debt = Math.round((parseFloat(this.ordersService.orders[i].payload.val().debt) - rest) * 10) / 10
          this.ordersService.updateOrder(this.ordersService.orders[i].key, {"debt": debt})
          break
        }
      }
    }
  }

  clearOrderDebt(payment: any) {
    let rest = payment.amount
    for (let i=0;i<this.ordersService.orders.length;i++) {
      if (this.ordersService.orders[i].payload.val().orderNumber == payment.orderNumber) {
        if (parseFloat(this.ordersService.orders[i].payload.val().debt)
        && parseFloat(this.ordersService.orders[i].payload.val().debt) <= payment.amount) {
          rest = rest - parseFloat(this.ordersService.orders[i].payload.val().debt);
          this.sellersService.addSaleToSeller(this.ordersService.orders[i].payload.val().order.sellerName, this.ordersService.orders[i].payload.val().amount,
          this.ordersService.orders[i].payload.val().clientFantasyName);
          this.ordersService.updateOrder(this.ordersService.orders[i].key, {"debt": 0})
          this.clearDebts(payment.client, rest);
          break
        }
        else if (this.ordersService.orders[i].payload.val().debt) {
          let debt = Math.round((parseFloat(this.ordersService.orders[i].payload.val().debt) - rest) * 10) / 10
          this.ordersService.updateOrder(this.ordersService.orders[i].key, {"debt": debt})
          break
        }
      }
    }
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

  getClientPaymentsAmount(fantasyName: string) {
    let amount = 0;
    if (this.payments) {
      for (let i = 0;i < this.payments.length;i++) {
        if (this.payments[i].payload.val().client == fantasyName) {
          amount += parseFloat(this.payments[i].payload.val().amount)
        }
      }
    }
    return amount
  }
}

