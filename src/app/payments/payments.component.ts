import { OrdersService } from 'src/app/services/orders.service';
import { StockService } from '../services/stock.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { DatePipe } from '@angular/common'
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  @ViewChild(MatPaginator) paginator: MatPaginator;

  appUser: AppUser;

  payment: any;
  payments: any[];
  userPayments: any[] = [];
  clients: any;
  userClients: string[];
  titles: string[]=[];
  query: {client: string, seller: string, date: string, dateRange: {start: Date, end: Date}} = {client: "", seller: "", date: "", dateRange: {start: new Date(2017, 1, 1), end: new Date(2040, 1, 1)}}
  filteredPayments: any[];
  dateRangefilteredPayments: any[];
  datefilteredPayments: any[];
  products:any[];
  date: any;
  dateValue: string;
  clientValue: string;
  sellerValue: string;
  currentItemsToShow: any[];
  title: string;
  quantity: number;
  sortedData: any[];
  aproved: string[] = ["NO", "SI"];
  selected: string = "NO";
  aproveFirst:boolean = false;
  loading: boolean = true;

  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute,
    private auth: AuthService, public datepipe: DatePipe, public stockService: StockService,
    private dateAdapter: DateAdapter<Date>, private ordersService: OrdersService) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  ngOnInit(){
    this.filter("");
    this.subscription = this.auth.appUser$.subscribe(appUser => {
      this.subscription2 = this.ordersService.getAllPayments().subscribe(payments => {
        this.appUser = appUser;
        this.subscription3 = this.ordersService.getAllClients().subscribe(clients => {
          this.clients = clients;
          this.userClients = this.ordersService.getUserClients(appUser.name);
          this.payments = payments;
          this.userPayments = [];
          this.dateRangefilteredPayments = [];
          this.currentItemsToShow = [];

          for (let i=0;i<this.payments.length;i++) {
            let isUserPayment = this.payments[i].payload.val().sellerName == this.appUser.name;
            let isUserClient = this.isClientInUserClients(this.payments[i].payload.val().client, this.userClients);
            if (this.appUser && (this.appUser.isAdmin || this.appUser.isSalesManager || isUserPayment || isUserClient)) {
              this.userPayments.push(this.payments[i]);
            }
          }

          this.dateRangefilteredPayments = this.datefilteredPayments = this.filteredPayments = this.userPayments; //ver que hace??

          if (this.ordersService.fantasyName) { // esto es para desde clientes ver los cobros de un cliente en particular
            this.filter(this.ordersService.fantasyName); // idem
            this.clientValue = this.ordersService.fantasyName; // idem
            this.ordersService.fantasyName = ""; // idem
          }

          //this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length})
          if (this.ordersService.fantasyName) { // esto es para desde clientes ver los cobros de un cliente en particular
            // this.dateValue = "";
            this.clientValue = this.ordersService.fantasyName; // idem
            this.filter(this.ordersService.fantasyName); // idem
            this.ordersService.fantasyName = ""; // idem
            this.filterByDate("");
          }
          this.currentItemsToShow = this.filteredPayments;
          this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length})
          if (this.paginator) this.paginator.pageIndex = 0;
          this.loading = false;
          //this.clearRange();
        });
      });
    });
  }

  filter(query: string) {
    this.query.client = query;
    this.filteredPayments = [];
    for (let i=0;i<this.userPayments.length;i++) {
      if (this.userPayments[i].payload.val().client.toLowerCase().includes(query.toLowerCase())
      && this.userPayments[i].payload.val().sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
      && this.datepipe.transform(this.userPayments[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(this.query.date) )
      this.filteredPayments.push(this.userPayments[i]);
    }
    this.filteredPayments.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  filterBySeller(query: string) {
    this.query.seller = query;
    this.filteredPayments = [];
    for (let i=0;i<this.userPayments.length;i++) {
      if (this.userPayments[i].payload.val().client.toLowerCase().includes(this.query.client.toLowerCase())
      && this.userPayments[i].payload.val().sellerName.toLowerCase().includes(query.toLowerCase())
      && this.datepipe.transform(this.userPayments[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(this.query.date) ) {
        this.filteredPayments.push(this.userPayments[i])
      }
    }
    this.filteredPayments.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());

    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  filterByDate(query: string) {
    this.query.date = query;
    this.filteredPayments = [];
    for (let i=0;i<this.userPayments.length;i++) {
      if (this.userPayments[i].payload.val().client.toLowerCase().includes(this.query.client.toLowerCase())
      && this.userPayments[i].payload.val().sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
      && this.datepipe.transform(this.userPayments[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(query) )
      this.filteredPayments.push(this.userPayments[i]);
    }
    this.filteredPayments.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  searchDateRange(range: any) {
    if (range.start) {
      this.filteredPayments = [];
      for (let i=0;i<this.userPayments.length;i++) {
        if (this.userPayments[i].payload.val().client.toLowerCase().includes(this.query.client.toLowerCase())
        && this.userPayments[i].payload.val().sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
        && this.datepipe.transform(this.userPayments[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(this.query.date) )
        this.filteredPayments.push(this.userPayments[i]);
      }
      this.filteredPayments = (range) ?
      this.filteredPayments.filter(p => p.payload.val().date >= Date.parse(range.start._d) && p.payload.val().date <= Date.parse(range.end._d)):
      this.filteredPayments;
      this.query.dateRange.start = new Date(Date.parse(range.start?._d));
      this.query.dateRange.end = new Date(Date.parse(range.end?._d));
    }
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  isClientInUserClients(fantasyName: string, userClients: string[]): boolean {
    for (let i=0;i<userClients.length;i++) {
      if (fantasyName.toLowerCase().includes(userClients[i].toLowerCase().trim())) {
        return true;
      }
    }
    return false;
  }

  sortData(sort: Sort) {
    const data = this.filteredPayments;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'cliente': return this.compare(a.payload.val().client, b.payload.val().client, isAsc);
        case 'amount': return this.compare(a.payload.val().amount, b.payload.val().amount, isAsc);
        case 'payWay': return this.compare(a.payload.val().payWay, b.payload.val().payWay, isAsc);
        case 'seller': return this.compare(a.payload.val().sellerName, b.payload.val().sellerName, isAsc);
        case 'date': return this.compare(a.payload.val().date, b.payload.val().date, isAsc);
        default: return 0;
      }
    });
  }

  onPageChange($event: any) {
    this.currentItemsToShow = this.filteredPayments.slice(
      $event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize
    );
  }

  getTitle(item: any) {
    return item.title;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  getTotal() {
    let total = 0;
    if (this.filteredPayments) {

      this.filteredPayments.forEach(payment => {
        total += parseFloat(payment.payload.val().amount);
      });
    }
    return total;
  }

  removePayment(paymentId: any) {
    this.ordersService.removePayment(paymentId);
  }

  aprove(payment: any) {
    if (confirm('Está segur@ que quiere aprobar el pedido para que pueda ser entregada la mercadería?')) {
      this.stockService.aprove(payment);
      this.ordersService.aprovePayment(payment);
    }
  }

  clearRange() {
    this.range.setValue({
      start: null,
      end: null
    });
    this.sellerValue = "";
    this.clientValue = "";
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredPayments.length});
    if (this.paginator) this.paginator.pageIndex = 0;

  }

  remove(pay: any) {
    if (confirm('Está segur@ que quiere eliminar este cobro?')) {
      //if (pay.payload.val().orderNumber > 0) this.ordersService.restoreOrderAmount(pay);
      this.ordersService.removePayment(pay.key);
      //this.ordersService.addPaymentAmount(pay.payload.val().client, -1*pay.payload.val().amount, this.clients)
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscription2?.unsubscribe();
    this.subscription3?.unsubscribe();
  }
}
