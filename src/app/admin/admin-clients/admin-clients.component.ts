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
      console.log('construrctor');
  }

  ngOnInit() {
    console.log('onInit');

    //this.filter("");
    this.subscription = this.auth.appUser$.subscribe(appUser => {

      this.appUser = appUser;
      this.subscription2 = this.ordersService.getAllClients().subscribe(clients => {
        this.clients = clients;
        this.includedClients = [];

        if (this.ordersService.getFromEditing()) {
          console.log('entra from editing');
          this.filteredClients = this.ordersService.getFilteredClients();
          //this.currentItemsToShow = this.ordersService.getClientsCurrentItemsToShow();
          this.ordersService.setFromEditing(false);
          this.onPageChange({previousPageIndex: this.ordersService.getClientPageIndex() - 1, pageIndex: this.ordersService.getClientPageIndex(), pageSize: this.ordersService.getClientPageSize(), length: this.ordersService.getFilteredClients().length});
          console.log('paginator ', this.paginator);
        }
        else {
          for (let i=0;i<this.clients.length;i++) {
            if (this.appUser && (this.appUser.isAdmin || this.appUser.isSalesManager)) {
              this.includedClients.push(this.clients[i]);
            }
          }

          this.filteredClients = this.includedClients;
          //this.currentItemsToShow = this.filteredClients;
          this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredClients.length});
          console.log('paginator ', this.paginator);
        }



        // if (this.ordersService.clientsPaginator.pageIndex > 0) {
        //   this.onPageChange({previousPageIndex: this.ordersService.clientsPaginator.pageIndex - 1, pageIndex: this.ordersService.clientsPaginator.pageIndex, pageSize: this.ordersService.clientsPaginator.pageSize, length: this.ordersService.clientsPaginator.length});
        // }
        // else this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredClients.length});

        this.subscription3 = this.ordersService.getAllPayments().subscribe(payments => {
          this.payments = payments;
          this.subscription4 = this.ordersService.getAllOrders().subscribe(orders => {
            this.orders = orders;
            this.clientsInDebt = this.ordersService.getClientsInDebt(this.clients, this.orders);
            for (let i=0;i<this.clientsInDebt.length;i++) {
              this.clientsInDebt[i].paymentDate = this.getClientLastPayment(this.clientsInDebt[i].payload.val().fantasyName).payload.val().date;
              //this.clientsInDebt[i].ordersDebt = this.ordersService.calcDebtGreatherThan30(this.clientsInDebt[i].payload.val().fantasyName);
              this.clientsInDebt[i].debt = this.ordersService.calcDebt(this.clientsInDebt[i].payload.val().fantasyName);
            }
            this.loading = false;
          });
        });

      });

    });
  }

  ngAfterViewInit(): void {

  }

  filter(query: string) {
    this.query.client = query;
    this.filteredClients = [];
    for (let i=0;i<this.includedClients.length;i++) {
      if (this.includedClients[i].payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())
      && this.includedClients[i].payload.val().designatedSeller.toLowerCase().includes(this.query.seller.toLowerCase()))
      this.filteredClients.push(this.includedClients[i]);
    }
    console.log('corre filter');
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
    console.log('corre filter');
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

  onPageChange($event: any) {
    console.log('evet', $event);
    this.currentItemsToShow = this.filteredClients.slice(
      $event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize
    );
    // this.ordersService.clientsPaginator.pageIndex = $event.pageIndex;
    // this.ordersService.clientsPaginator.pageSize = $event.pageSize;
    // this.ordersService.clientsPaginator.length = $event.length;
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

  async savePagination() {
    this.ordersService.setClientPageIndex(this.paginator.pageIndex);
    this.ordersService.setClientPageSize(this.paginator.pageSize);
    this.ordersService.setFilteredClients(this.filteredClients);
    //await this.ordersService.setClientsCurrentItemsToShow(this.currentItemsToShow);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
    // this.subscription2.unsubscribe();
    // this.subscription3.unsubscribe();
    // this.subscription4.unsubscribe();
  }
}

