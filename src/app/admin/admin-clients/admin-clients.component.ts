import { PrintService } from './../../services/print.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ClientsService } from 'src/app/services/clients.service';
import { OrdersService } from 'src/app/services/orders.service';
import { PaymentsService } from 'src/app/services/payments.service';


@Component({
  selector: 'admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.scss']
})
export class AdminClientsComponent implements OnInit {

  displayedColumns: string[] = ['businessName', 'fantasyName', 'debt2', 'seller', 'IVACond', 'resume', 'edit', 'payments', 'orders'];
  dataSource: any;
  clients:any[];
  sortedData:any[];
  filteredClients:any[];
  orders: any[];
  payments: any[];
  subscription: Subscription;
  orderOrPayment: boolean;
  pos: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clientsService: ClientsService, private paymentsService: PaymentsService,
    private ordersService: OrdersService, public printService: PrintService) {
  }

  ngOnInit() {
    this.subscription = this.clientsService.getAll().subscribe(clients => {
      this.filteredClients = this.clients = clients;
      this.dataSource = new MatTableDataSource<any>(this.filteredClients);
      this.dataSource.paginator = this.paginator;
      if (this.clientsService.clientsPaginator.pageIndex > 0 || this.clientsService.clientsPaginator.pageSize != 10) {
      this.paginator.pageIndex = this.clientsService.clientsPaginator.pageIndex;
      this.paginator.pageSize = this.clientsService.clientsPaginator.pageSize;
      this.dataSource.paginator = this.paginator
      }
    });
    // this.ordersService.getAll().subscribe(orders => {
    //   this.orders = orders;
    // });
    this.paymentsService.getAll().subscribe(payments => {
      this.payments = payments;
    });
  }

  filter(query: string) {
    this.filteredClients = (query) ?
      this.clients.filter(c => c.payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())) :
      this.clients;
    this.dataSource = new MatTableDataSource<any>(this.filteredClients);
    this.dataSource.paginator = this.paginator;

  }

  sortData(sort: Sort) {
    const data = this.filteredClients.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'fantasyName': return this.compare(a.payload.val().fantasyName, b.payload.val().fantasyName, isAsc);
        case 'businessName': return this.compare(a.payload.val().businessName, b.payload.val().businessName, isAsc);
        default: return 0;
      }
    });
    this.dataSource = new MatTableDataSource<any>(this.sortedData);
    this.dataSource.paginator = this.paginator;
  }

  getPagination() {
    this.clientsService.clientsPaginator.pageIndex = this.paginator.pageIndex;
    this.clientsService.clientsPaginator.pageSize = this.paginator.pageSize;
  }

  searchPayments(clientFantasyName: string) {
    this.paymentsService.clientFantasyName = clientFantasyName;
  }

  searchOrders(clientFantasyName: string) {
    this.ordersService.clientFantasyName = clientFantasyName;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  calcDebt(client: any) {
    let ordersAmount = this.ordersService.getClientOrdersAmount(client.payload.val().fantasyName);
    let paymentsAmount = this.paymentsService.getClientPaymentsAmount(client.payload.val().fantasyName);
    return ordersAmount - paymentsAmount
  }
}

