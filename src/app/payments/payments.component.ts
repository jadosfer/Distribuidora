import { ClientsService } from './../services/clients.service';
import { StockService } from '../services/stock.service';
import { PaymentsService } from '../services/payments.service';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { DatePipe } from '@angular/common'
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  appUser: AppUser;

  payment: any;
  payments: any[];
  userPayments: any[] = [];
  titles: string[]=[];
  subscription: Subscription;
  filteredProduct:any[];
  filteredPayments:any[];
  dateRangefilteredPayments:any[];
  datefilteredPayments:any[];
  products:any[];
  date: any;
  dateValue: string;
  clientValue: string;
  sellerValue: string;

  title: string;
  quantity: number;
  sortedData: any[];
  aproved: string[] = ["NO", "SI"];
  paid: string[] = ["NO", "SI"];
  selected: string = "NO";

  aproveFirst:boolean = false;

  constructor(public paymentsService: PaymentsService,  private productService: ProductService,
  private route: ActivatedRoute,  private auth: AuthService, public datepipe: DatePipe,
  public stockService: StockService, private dateAdapter: DateAdapter<Date>, private clientsService: ClientsService) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  ngOnInit(){
    this.filter("");
    this.auth.appUser$.subscribe(appUser => {
      this.subscription = this.paymentsService.getAll().subscribe(payments => {
        this.appUser = appUser;
        this.payments =  payments;
        this.userPayments = [];
        for (let i=0;i<this.payments.length;i++) {
          if (this.appUser && (this.appUser.isAdmin || this.payments[i].payload.val().sellerName == this.appUser.name)) {
            this.userPayments.push(this.payments[i]);
          }
        }
        this.dateRangefilteredPayments = this.datefilteredPayments = this.filteredPayments = this.userPayments;
      });
    });
  }

  filter(query: string) {
    if (query != "") {
      this.filteredPayments = (query) ?
      this.filteredPayments.filter(p => p.payload.val().clientFantasyName.toLowerCase().includes(query.toLowerCase())) :
      this.filteredPayments;
    }
    else this.filteredPayments = this.userPayments;
  }

  filterBySeller(query: string) {
    if (query != "") {
      this.filteredPayments = (query) ?
      this.filteredPayments.filter(p => p.payload.val().sellerName.toLowerCase().includes(query.toLowerCase())) :
      this.filteredPayments;
    }
    else this.filteredPayments = this.userPayments;
  }

  filterByDate(query: string) {
    if (query != "") {
      this.filteredPayments = (query) ?
      this.filteredPayments.filter(p => this.datepipe.transform(p.payload.val().creationDate, 'dd/MM/yyyy HH:mm')?.includes(query)):
      this.filteredPayments;
    }
    else this.filteredPayments = this.userPayments;
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
        case 'date': return this.compare(a.payload.val().paymentDate, b.payload.val().paymentDate, isAsc);
        default: return 0;
      }
    });
  }

  getTitle(item: any) {
    return item.title;
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  // getTotal() {
  //   let total = 0;
  //   if (this.filteredPayments) {
  //     this.filteredPayments.forEach(payment => {
  //       total += this.paymentsService.getTotalCost(payment);
  //     });
  //   }
  //   return total;
  // }

  removePayment(paymentId: any) {
    this.paymentsService.removePayment(paymentId);
  }

  aprove(payment: any) {
    if (confirm('Está segur@ que quiere aprobar el pedido para que pueda ser entregada la mercadería?')) {
      this.stockService.aprove(payment);
      this.paymentsService.aprove(payment);
    }
  }

  getPaid(payment: any) {
    if (payment.payload.val().aproved == "SI") {
      if (confirm('Está segur@ que quiere dar por pagado el pedido?')) {
        this.paymentsService.getPaid(payment);
      }
    }
    else alert("Debe aprobar el pedido antes de darlo por cobrado");
  }

  searchDateRange(range: any) {
    if (range.start) {
      this.filteredPayments = (range) ?
      this.filteredPayments.filter(p => p.payload.val().creationDate > Date.parse(range.start._d) && p.payload.val().creationDate < Date.parse(range.end._d)):
      this.filteredPayments;
    }
    else this.filteredPayments = this.userPayments;
  }

  clearRange() {
    this.range.setValue({
      start: null,
      end: null
    });
    this.clientValue = "";
    this.dateValue = "";
    this.filteredPayments = this.userPayments;
  }

  isPaymentInDebt(payment: any) {
    return this.paymentsService.isPaymentInDebt(payment);
  }

  remove(id: any, amount: number, client: string) {
    if (confirm('Está segur@ que quiere eliminar este cobro?')) {
      this.paymentsService.removePayment(id);
      this.clientsService.addPaymentAmount(client, -1*amount)
    }
  }
}
