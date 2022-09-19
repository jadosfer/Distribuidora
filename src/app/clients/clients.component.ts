import { PrintService } from './../services/print.service';
import { PaymentsComponent } from './../payments/payments.component';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Observable, Subscription } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { MatPaginator } from '@angular/material/paginator';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  appUser: AppUser;
  clients$: Observable<any>;
  clients: any;
  filteredClients: any;
  subscription: Subscription;
  subscription2: Subscription;
  sortedData: any[];
  includedClients: any[] = [];

  clientValue: string;
  sellerValue: string;
  currentItemsToShow: any[];
  query: {client: string, seller: string} = {client: "", seller: ""}

  constructor(private auth: AuthService, public printService: PrintService,
    public ordersService: OrdersService, public utilityService: UtilityService) {
  }

  ngOnInit() {
    this.filter("");
    this.subscription = this.auth.appUser$.subscribe(appUser => {

      this.appUser = appUser;
      this.subscription2 = this.ordersService.getAllClients().subscribe(clients => {
        this.clients = clients;
        this.includedClients = [];
        this.currentItemsToShow = [];

        for (let i=0;i<this.clients.length;i++) {
          let isUserClient = this.clients[i].payload.val().designatedSeller == this.appUser.name;
          if (this.appUser && (this.appUser.isAdmin || this.appUser.isSalesManager || isUserClient)) {
            this.includedClients.push(this.clients[i]);
          }
        }

        this.filteredClients = this.includedClients;
        this.currentItemsToShow = this.filteredClients;

        this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredClients.length});
        if (this.paginator) this.paginator.pageIndex = 0;

      });
    });
  }

  filter(query: string) {
    this.query.client = query;
    this.filteredClients = [];
    for (let i=0;i<this.includedClients.length;i++) {
      if (this.includedClients[i].payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())
      && this.includedClients[i].payload.val().designatedSeller.toLowerCase().includes(this.query.seller.toLowerCase()))
      this.filteredClients.push(this.includedClients[i]);
    }
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredClients.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  filterBySeller(query: string) {
    this.query.seller = query;
    this.filteredClients = [];
    for (let i=0;i<this.includedClients.length;i++) {
      if (this.includedClients[i].payload.val().fantasyName.toLowerCase().includes(this.query.client.toLowerCase())
      && this.includedClients[i].payload.val().designatedSeller.toLowerCase().includes(query.toLowerCase())) {
        this.filteredClients.push(this.includedClients[i])
      }
    }

    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredClients.length});
    if (this.paginator) this.paginator.pageIndex = 0;
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
    this.ordersService.clientFantasyName = clientFantasyName;
  }

  searchOrders(clientFantasyName: string) {
    this.ordersService.clientFantasyName = clientFantasyName;
  }

  onPageChange($event: any) {
    this.currentItemsToShow = this.filteredClients.slice(
      $event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
