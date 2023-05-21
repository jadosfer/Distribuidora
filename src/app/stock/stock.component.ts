import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { StockService } from '../services/stock.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  appUser: AppUser;
  currentItemsToShow: any[];
  alertProducts: any[] = [];
  filteredStock: any;
  filteredProducts: any;
  products: any;
  stock: any;
  sortedData: any[];
  subscription: Subscription;
  subscription2: Subscription;


  constructor(public stockService: StockService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private auth: AuthService) {
    }

  ngOnInit(){
    this.subscription = this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.subscription2 = this.productService.getAllProducts().subscribe(products => {
        this.products = this.filteredProducts = products;
        this.currentItemsToShow = this.filteredProducts;
        this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.products.length})
        let alertProducts = []
        for (let i=0;i<this.products.length;i++) {
          if (this.products[i].payload.val().stock < 5) {
            alertProducts.push(this.products[i].payload.val());
          }
        }
        this.alertProducts = alertProducts;
      });
    // this.stockService.getStock().subscribe(stock => {
    //   this.stock = this.filteredStock = stock;
    //   let alertProducts = []
    //   for (let i=0;i<this.stock.length;i++) {
    //     if (this.stock[i].payload.val().quantity < 5) {
    //       alertProducts.push(this.stock[i]);
    //     }
    //   }
    //   this.alertProducts = alertProducts;
    //  });
    });
  }

  filter(query: string) {
    // this.filteredStock = (query) ?
    //   this.stock.filter( (p: { payload: { val: () => { (): any; new(): any; product: { (): any; new(): any; title: string; }; }; }; }) => p.payload.val().product.title.toLowerCase().includes(query.toLowerCase())) :
    //   this.stock;
    this.filteredProducts = (query) ?
      this.products.filter( (p: { payload: { val: () => { (): any; new(): any; title: string; }; }; }) => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredProducts.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  sortData(sort: Sort) {
    // const data = this.stock;
    // if (!sort.active || sort.direction === '') {
    //   this.sortedData = data;
    //   return;
    // }

    // this.sortedData = data.sort((a: any, b: any) => {
    //   const isAsc = sort.direction === 'asc';
    //   switch (sort.active) {
    //     case 'title': return this.compare(a.payload.val().product.title, b.payload.val().product.title, isAsc);
    //     case 'quantity': return this.compare(a.payload.val().quantity, b.payload.val().quantity, isAsc);
    //     default: return 0;
    //   }
    // });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  onPageChange($event: any) {
    this.currentItemsToShow = this.filteredProducts.slice(
      $event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
