import { PrintService } from './../services/print.service';
import { PaymentsComponent } from './../payments/payments.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Observable, Subscription } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { ClientsService } from '../services/clients.service';
import { PaymentsService } from '../services/payments.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  appUser: AppUser;
  clients$: Observable<any>;
  clients: any;
  userClients: any = [];
  filteredClients: any;
  subscription: Subscription;
  sortedData: any[];

  constructor(private clientsService: ClientsService, private auth: AuthService, public printService: PrintService,
    private paymentsService: PaymentsService, private ordersService: OrdersService) {
   }

  ngOnInit() {
    this.filter("");
    this.subscription = this.clientsService.getAll().subscribe(clients => {
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
        this.clients = clients;

        for (let i=0;i<this.clients.length;i++) {
          if (this.clients[i].payload.val().designatedSeller == this.appUser.name) this.userClients.push(this.clients[i]);
          }
      });
    });
  }


  filter(query: string) {
    this.filteredClients = (query) ?
    this.userClients.filter((c: { payload: { val: () => { (): any; new(): any; fantasyName: string; }; }; }) => c.payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())) :
    this.userClients;
  }

  sortData(sort: Sort) {
    const data = this.filteredClients;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'cliente': return this.compare(a.payload.val().fantasyName, b.payload.val().fantasyName, isAsc);
        default: return 0;
      }
    });
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  searchPayments(clientFantasyName: string) {
    this.paymentsService.clientFantasyName = clientFantasyName;
  }

  searchOrders(clientFantasyName: string) {
    this.ordersService.clientFantasyName = clientFantasyName;
  }

  calcDebt(client: any) {
    let ordersAmount = this.ordersService.getClientOrdersAmount(client.payload.val().fantasyName);
    let paymentsAmount = this.paymentsService.getClientPaymentsAmount(client.payload.val().fantasyName);
    return ordersAmount - paymentsAmount
  }
}
