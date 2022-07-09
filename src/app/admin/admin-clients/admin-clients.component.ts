import { PrintService } from './../../services/print.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientsService } from 'src/app/services/clients.service';
import { OrdersService } from 'src/app/services/orders.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { AppUser } from 'src/app/models/app-user';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityService } from 'src/app/services/utility.service';


@Component({
  selector: 'admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.scss']
})
export class AdminClientsComponent implements OnInit {

  appUser: AppUser;
  displayedColumns: string[] = ['businessName', 'fantasyName', 'debt2', 'seller', 'IVACond', 'resume', 'edit', 'payments', 'orders'];
  dataSource: any;
  clients:any[];
  sortedData:any[];
  filteredClients:any[];
  orders: any[];
  payments: any[];
  orderOrPayment: boolean;
  pos: number;
  query: {client: string, seller: string} = {client: "", seller: ""}
  //ordersInDebt: any[];
  clientsInDebt: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clientsService: ClientsService, private paymentsService: PaymentsService,
    private ordersService: OrdersService, private auth: AuthService, public printService: PrintService,
    public utilityService: UtilityService) {
  }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.clientsService.getAll().subscribe(clients => {
        this.filteredClients = this.clients = clients;
        this.dataSource = new MatTableDataSource<any>(this.filteredClients);
        this.dataSource.paginator = this.paginator;
        if (this.clientsService.clientsPaginator.pageIndex > 0 || this.clientsService.clientsPaginator.pageSize != 10) {
        this.paginator.pageIndex = this.clientsService.clientsPaginator.pageIndex;
        this.paginator.pageSize = this.clientsService.clientsPaginator.pageSize;
        this.dataSource.paginator = this.paginator
        }
        this.paymentsService.getAll().subscribe(payments => {
          this.payments = payments;
          this.ordersService.getAll().subscribe(orders => {
            this.orders = orders;
            this.clientsInDebt = this.clientsService.getClientsInDebt(this.clients, this.orders);
            for (let i=0;i<this.clientsInDebt.length;i++) {
              this.clientsInDebt[i].paymentDate = this.getClientLastPayment(this.clientsInDebt[i].payload.val().fantasyName).payload.val().date;
            }
          });
        });
      });
    });
  }

  filter(query: string) {
    this.query.client = query;
    this.filteredClients = [];
    for (let i=0;i<this.clients.length;i++) {
      if (this.clients[i].payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())
      && this.clients[i].payload.val().designatedSeller.toLowerCase().includes(this.query.seller.toLowerCase())
      )
      this.filteredClients.push(this.clients[i]);
    }
    this.dataSource = new MatTableDataSource<any>(this.filteredClients);
    this.dataSource.paginator = this.paginator;
  }

  filterBySeller(query: string) {
    this.query.seller = query;
    this.filteredClients = [];
    for (let i=0;i<this.clients.length;i++) {
      if (this.clients[i].payload.val().fantasyName.toLowerCase().includes(this.query.client.toLowerCase())
      && this.clients[i].payload.val().designatedSeller.toLowerCase().includes(query.toLowerCase())
      )
      this.filteredClients.push(this.clients[i]);
    }

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

  getClientLastPayment(fantasyName: string) {
    let payment = this.clientsService.getClientLastPayment(fantasyName, this.payments);
    return payment;
  }
}

