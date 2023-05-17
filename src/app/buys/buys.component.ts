import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import { Subscription } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-buys',
  templateUrl: './buys.component.html',
  styleUrls: ['./buys.component.scss']
})
export class BuysComponent implements OnInit {
  loading: boolean = true;
  sortedData: any;
  subscription: Subscription;
  subscription2: Subscription;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  buys: any;
  filteredBuys: any;
  datefilteredBuys: any;
  dateRangefilteredBuys: any;
  appUser: AppUser;
  date: any;
  dateValue: string;
  clientValue: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private auth: AuthService, public datepipe: DatePipe,
    public stockService: StockService, private dateAdapter: DateAdapter<Date>) {

      this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    }

    ngOnInit(){
      this.loading = true;
      //this.filter("");
      this.subscription = this.stockService.getBuys().subscribe(buys => {
        this.subscription2 = this.auth.appUser$.subscribe(appUser => {
          this.appUser = appUser;
          //this.buys =  buys;
          this.buys = this.dateRangefilteredBuys = this.datefilteredBuys = this.filteredBuys = buys;
          this.loading = false;
        });
      });
    }


    filterByDate(query: string) {
      if (query != "") {
        this.filteredBuys = (query) ?
        this.filteredBuys.filter((b: { payload: { val: () => { (): any; new(): any; date: string | number | Date; }; }; }) => this.datepipe.transform(b.payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(query)):
        this.filteredBuys;
      }
      else this.filteredBuys = this.buys;
    }

    sortData(sort: Sort) {
      const data = this.filteredBuys;
      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
      }

      this.sortedData = data.sort((a: any, b: any) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          //case 'nroOrder': return this.compare(a.i, b.i, isAsc);
          case 'cliente': return this.compare(a.payload.val().clientFantasyName, b.payload.val().clientFantasyName, isAsc);
          case 'vendedor': return this.compare(a.payload.val().sellerName, b.payload.val().sellerName, isAsc);
          case 'date': return this.compare(a.payload.val().date, b.payload.val().date, isAsc);
          default: return 0;
        }
      });
    }

    removeBuy(buy: any){
        this.stockService.removeBuy(buy);
    }

    getTitle(item: any) {
      return item.title;
    }


    compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    getTotal() {
      let total = 0;
      if (this.filteredBuys) {
        this.filteredBuys.forEach((buy: any) => {
          total += this.stockService.getTotalCost(buy);
        });
      }
      return Math.round(total * 10) / 10;;
    }

    searchDateRange(range: any) {
      if (range.start) {
        this.filteredBuys = (range) ?
        this.filteredBuys.filter((b: { payload: { val: () => { (): any; new(): any; date: number; }; }; }) => b.payload.val().date > Date.parse(range.start._d) && b.payload.val().date < Date.parse(range.end._d)):
        this.filteredBuys;
      }
      else this.filteredBuys = this.buys;


    }
    clearRange() {
      this.range.setValue({
        start: null,
        end: null
      });

      this.dateValue = "";
      this.filteredBuys = this.buys;
    }

    exportAsPDF(buy: any)  {

      var doc = new jsPDF();
      doc.text('Cantidad', 10, 20);
      doc.text('Producto', 40, 20);
      doc.text('Importe/uni', 140, 20);
      doc.text('Importe', 180, 20);

      let cont = 0;
      for (let i=0;i<buy.payload.val().buy.products.length;i++) {
        if (buy.payload.val().buy.products[i].quantity != 0) {
          let total = buy.payload.val().buy.products[i].price * buy.payload.val().product[i].quantity
          doc.text(buy.payload.val().product[i].quantity.toString(), 10, 30 + 10*cont);
          doc.text(buy.payload.val().product[i].product.title, 40, 30 + 10*cont);
          doc.text(buy.payload.val().product[i].price.toString(), 140, 30 + 10*cont);
          doc.text(total.toString(), 180, 30 + 10*cont);
          cont +=1;
        }
      }

      // Save the PDF
      doc.save('buy.pdf');
    }

    ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
