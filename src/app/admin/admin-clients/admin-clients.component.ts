import { PrintService } from './../../services/print.service';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { OrdersService } from 'src/app/services/orders.service';
import { AppUser } from 'src/app/models/app-user';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityService } from 'src/app/services/utility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.scss']
})
export class AdminClientsComponent implements OnInit, AfterViewInit {

  //paginator
  actualPage: number = 0;
  totalPages: number = 1;
  itemsPerPage: number = 10;

  //paginator bootstrap

  appUser: AppUser;
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

  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;

  showClientsInDebt: boolean;
  loading: boolean = false;
  fromEditing: boolean = false;

  //nuevos
  clientValue: string;
  sellerValue: string;
  currentItemsToShow: any[] = [];
  includedClients: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public ordersService: OrdersService,
    private auth: AuthService, public printService: PrintService, public utilityService: UtilityService) {
  }

  ngOnInit() {
    this.subscription = this.auth.appUser$.subscribe(appUser => {

      this.appUser = appUser;
      this.subscription2 = this.ordersService.getAllClients().subscribe(clients => {
        this.clients = clients;

        this.includedClients = [];
        this.filteredClients = [];

        this.clients.forEach((client)=>{
          if (this.appUser && (this.appUser.isAdmin || this.appUser.isSalesManager)) {
            this.includedClients.push(client);
          }
        });

        this.filteredClients = this.includedClients;
        // this.ordersService.setFilteredClients(this.filteredClients)

        if (this.ordersService.getFromEditing()) {
          this.actualPage = this.ordersService.getClientsActualPage();
          this.totalPages = this.ordersService.getClientsTotalPages();
          this.itemsPerPage = this.ordersService.getClientItemsPerPage();
          this.query = this.ordersService.getQuery();
          this.filter(this.query.client);
          this.filterBySeller(this.query.seller)
          this.clientValue = this.query.client;
          this.sellerValue = this.query.seller;
        }

        //this.filteredClients.forEach((client)=>{console.log('subscription2', client.payload.val().fantasyName);})


        this.refreshPages();

        this.subscription3 = this.ordersService.getAllPayments().subscribe(payments => {
          this.payments = payments;
          this.subscription4 = this.ordersService.getAllOrders().subscribe(orders => {
            this.orders = orders;
            this.clientsInDebt = this.ordersService.getClientsInDebt(this.clients, this.orders);
            this.clientsInDebt.forEach((client)=>{
              client.paymentDate = this.getClientLastPayment(client.payload.val().fantasyName).payload.val().date;
              client.debt = this.ordersService.calcDebtGreatherThan30(client.payload.val().fantasyName);
            });
            this.loading = false;
          });
        });
      });
    });
  }

  ngAfterViewInit(): void {

  }

  filter(query: string) {
    if (query == "") {
      this.filteredClients = this.includedClients;
    }
    else {
      this.query.client = query;
      this.filteredClients = [];
      this.includedClients.forEach((client)=>{
        if (client.payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())
        && client.payload.val().designatedSeller.toLowerCase().includes(this.query.seller.toLowerCase()))
        this.filteredClients.push(client);
      });
    }
    this.actualPage = 0;
    this.refreshPages();
  }

  filterBySeller(query: string) {
    this.query.seller = query;
    this.filteredClients = [];
    this.includedClients.forEach((client)=>{
      if (client.payload.val().fantasyName.toLowerCase().includes(this.query.client.toLowerCase())
      && client.payload.val().designatedSeller.toLowerCase().includes(query.toLowerCase())) {
        this.filteredClients.push(client)
      }
    });
    this.actualPage = 0;
    this.refreshPages();
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

  getClientLastPayment(fantasyName: string) {
    let payment = this.ordersService.getClientLastPayment(fantasyName, this.payments);
    return payment;
  }

  hideTable() {
    this.showClientsInDebt = !this.showClientsInDebt;
  }

  savePagination() {
    this.ordersService.setClientsActualPage(this.actualPage);
    this.ordersService.setClientsTotalPages(this.totalPages);
    this.ordersService.setClientItemsPerPage(this.itemsPerPage);
    this.ordersService.setFromEditing(false);
    this.ordersService.setQuery(this.query)
  }

  //funciones paginator bootstrap
  prevPage() {
    if (this.actualPage == 0) return
    this.actualPage -= 1;
    this.refreshPages()
  }

  nextPage() {
    if (this.actualPage == this.totalPages) return
    this.actualPage += 1;
    this.refreshPages();
  }

  refreshPages() {
    this.totalPages = Math.ceil(this.filteredClients.length/this.itemsPerPage);
    this.currentItemsToShow = [];

    for (let i = this.actualPage*this.itemsPerPage; i<this.actualPage*this.itemsPerPage + this.itemsPerPage; i++) {
      if (i == this.filteredClients.length) return
      this.currentItemsToShow.push(this.filteredClients[i])
    }
  }
  //funciones paginator bootstrap


  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
  }
}

