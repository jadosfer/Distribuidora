import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { StockService } from '../services/stock.service';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  appUser: AppUser;
  subscription: Subscription;
  buy: any;
  filteredBuy:any;
  products:any;
  products$:any;
  category: string | null;
  sortedData: any[];

  constructor(public stockService: StockService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private auth: AuthService) {
    }

  ngOnInit() {
    //this.filter("");
    this.stockService.getBuy().subscribe(buy => {
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
      });
      this.buy = buy;
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');

        this.filteredBuy = [];
        if (this.buy) {
          for (let i=0;i<this.buy.length;i++) {
            if (this.buy[i].payload.val().product.category == this.category)  {
              this.filteredBuy.push(this.buy[i]);
            }
          }
          if (this.filteredBuy.length == 0) this.filteredBuy = this.buy;
        }
      });
    });
    }

    updateBuyItemQuantity(p: any, change: number){
      //this.sended = false;
      this.stockService.updateBuyItemQuantity(p, change);
    }

    sortData(sort: Sort) {
      const data = this.filteredBuy;
      if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
      }

      this.sortedData = data.sort((a: any, b: any) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'title': return this.compare(a.payload.val().product.title, b.payload.val().product.title, isAsc);
          case 'quantity': return this.compare(a.payload.val().quantity, b.payload.val().quantity, isAsc);
          case 'stock': return this.compare(this.getQuantityOfP(a), this.getQuantityOfP(b), isAsc);
          default: return 0;
        }
      });
    }

    compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    sendBuy() {
      if (confirm('Está segur@ que quiere cargar la compra? No podrá modificarla')) {
        this.stockService.sendBuy(this.buy);
      }
    }

    reset() {
      if (confirm('Está segur@ que quiere anular la compra? aun no fue cargada')) {
      this.stockService.reset();
      }
    }

    getQuantityOfP(pBuy: any) {
      return this.stockService.getQuantityOfP(pBuy);
    }





  // filter(query: string) {
  //   this.filteredPedidos = (query) ?
  //   this.userPedidos.filter(p => p.payload.val().clientFantasyName.toLowerCase().includes(query.toLowerCase())) :
  //   this.userPedidos;
  // }
  // getOrCreateStock() {
  //   return this.stockService.getOrCreateStock()
  // }

}
