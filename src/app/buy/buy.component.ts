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
  prodsCategory: string | null;
  sortedData: any[];

  buyEmpty: boolean = false;

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
        this.prodsCategory = params.get('prodsCategory');

        this.filteredBuy = [];
        if (this.buy[0]) {
          for (let i=0;i<this.buy[0].payload.val().products.length;i++) {
            if (this.buy[0].payload.val().products[i].product.prodsCategory == this.prodsCategory)  {
              this.filteredBuy.push(this.buy[0].payload.val().products[i]);
            }
          }
          if (this.filteredBuy.length == 0) {
            for (let i=0;i<this.buy[0].payload.val().products.length;i++)
              this.filteredBuy.push(this.buy[0].payload.val().products[i]);
          }
        }
      });
    });
    }

    updateBuyItemQuantity(buy: any, product: any, change: number){
      //this.sended = false;
      this.stockService.updateBuyItemQuantity(buy, product, change);
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
      if (this.buy[0].payload.val().buyItemsCount == 0) {
        this.buyEmpty = true;
        return;
      }
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

    // saveBuy(product: any, formproduct: any) {
    //   if (confirm('Está segur@ que quiere guardar estos valores?')) {
    //     let prod = {
    //       "disc1": product.disc1,
    //       "disc2": product.disc2,
    //       "disc3": product.disc3,
    //       "disc4": product.disc4,
    //       "buyPrice": product.buyPrice,
    //       "price1": formproduct.payload.val().price1,
    //       "price2": formproduct.payload.val().price2,
    //       "price3": formproduct.payload.val().price3,
    //       "price4": formproduct.payload.val().price4,
    //       "discPrice1": formproduct.payload.val().discPrice1,
    //       "discPrice2": formproduct.payload.val().discPrice2,
    //       "discPrice3": formproduct.payload.val().discPrice3,
    //       "discPrice4": formproduct.payload.val().discPrice4,
    //       "prodsCategory": product.prodsCategory,
    //       "title": product.title
    //     }
    //     this.productService.update(formproduct.key, prod);
    //     location.reload();
    //     //this.router.navigate(['/admin/prods']);
    //   }
    // }

}
