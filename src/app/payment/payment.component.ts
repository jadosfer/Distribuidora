import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/take';
import { CategoryService } from '../services/category.service';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { OrdersService } from '../services/orders.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  clients: any;
  payWays: any
  payment:any = {};
  id:any;
  appUser: AppUser;
  filteredClients:any[] = [];
  filteredOptions:  Observable<any[]>;
  orders:any[] = [];
  filteredOrders:any[] = [];
  myControl = new FormControl();
  clientFantasyName:string="";


  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private categoryService: CategoryService,
    private ordersService: OrdersService)
    {
      this.subscription = this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser
        this.subscription2 = ordersService.getAllOrders().subscribe(orders => {
          this.ordersService.orders = this.filteredOrders = orders;
        })
        this.subscription3 = ordersService.getAllClients().subscribe(clients =>{
          this.clients = clients;
          this.filteredClients = [];
          for (let i=0;i<this.clients.length;i++) {
            if (appUser.isAdmin || this.clients[i].payload.val().designatedSeller == this.appUser?.name) {
              this.filteredClients.push(this.clients[i]);
            }
          }
        });
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),
        map(value =>  value? this._filter(value) : this._filter(""))
        )
        this.subscription4 = categoryService.getAllPaysCategories().subscribe(payWays =>{
          this.payWays = payWays;
        });
      });
    }

  save(payment: any) {
    if (confirm('Está segur@ que quiere guardar este cobro?')) {
      payment.sellerName = this.appUser.name;
      payment.client = this.clientFantasyName;
      this.ordersService.createPayment(payment, this.clients);
      // IMPORTANTE LO DE ABAJO REORDENA TODOS LOS PEDIDOS!!!!!!!!!!!!!!!!!!!!!!!!!
      //this.ordersService.setPaymentsToAll(); // aca aseguro que los pedidos pagos queden con fecha de pago.
      this.router.navigate(['/payments/payments']);
    }
  }

  private _filter(value: any): any {
    const filterValue = value.toLowerCase();
    if (!this.filteredClients) return;
    let listFiltrada = this.filteredClients.filter(client => client.payload.val().fantasyName.toLowerCase().includes(filterValue));
    return listFiltrada
  }

  cancel() {
    this.router.navigate(['/payments/payments']);
  }

  ngOnInit(): void {
  }

  onChooseClient() {
    this.filteredOrders = [];
      for (let i=0;i<this.ordersService.orders.length;i++) {
        if (this.ordersService.orders[i].payload.val().clientFantasyName.toLowerCase().includes(this.payment.client.toLowerCase())) this.filteredOrders.push(this.ordersService.orders[i])
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
  }
}
