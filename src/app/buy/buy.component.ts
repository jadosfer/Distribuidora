import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  buy: any;
  filteredBuy:any;
  products:any;
  orderProducts: {buyItemsCount: number, products: any};
  products$:any;
  prodsCategory: string | null;
  sortedData: any[];

  subscription: Subscription;
  subscription2: Subscription
  subscription3: Subscription
  subscription4: Subscription

  buyEmpty: boolean = false;

  constructor(public stockService: StockService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService) {
    }

  ngOnInit() {
    this.subscription2 = this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.subscription3 = this.productService.getAllProducts().subscribe(products => {
        this.products = products;
        //this.subscription = this.stockService.getBuy().subscribe(buy => {
          // this.buy = buy;
          this.orderProducts = this.buildOrderProducts(this.products);
          this.subscription4 = this.route.queryParamMap.subscribe(params => {
            this.prodsCategory = params.get('prodsCategory');
            this.filteredBuy = [];
            if (this.orderProducts) {
              for (let i=0;i<this.orderProducts.products.length;i++) {
                if (this.orderProducts.products[i].product.prodsCategory == this.prodsCategory)  {
                  this.filteredBuy.push(this.orderProducts.products[i]);
                }
              }
              if (this.filteredBuy.length == 0) {
                for (let i=0;i<this.orderProducts.products.length;i++)
                  this.filteredBuy.push(this.orderProducts.products[i]);
              }
            }
          });
        //});
      })
    });
  }

  buildOrderProducts(products: any) {
    let prods: any[] = []
    products.forEach((p: any) => {
      let prod = {
        price: p.payload.val().buyPrice,
        product: p.payload.val(),
        productId: p.key,
        quantity: 0
      }
      prods.push(prod)
    });
    let orderProducts = { buyItemsCount: 0, products: prods }
    return orderProducts;
  }

  updateBuyItemQuantity(product: any, change: number){
    for (let i=0;i<this.orderProducts.products.length;i++) {
      if (this.orderProducts.products[i].productId == product.productId) {
        this.orderProducts.products[i].quantity += change
      }
    }
    this.orderProducts.buyItemsCount += change
  }

  setBuyItemQuantity(product: any, quantity: string) {
    let quan = parseInt(quantity)
    for (let i=0;i<this.orderProducts.products.length;i++) {
      if (this.orderProducts.products[i].productId == product.productId) {
        if (!Number.isInteger(quan)) {
          this.orderProducts.products[i].quantity = 0;
          return
        }
        this.orderProducts.products[i].quantity = quan;
      }
    }
    this.orderProducts.buyItemsCount += parseInt(quantity)
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
    // if (parseInt(this.buy[0].payload.val().buyItemsCount) == 0) {
    //   this.buyEmpty = true;
    //   setTimeout(()=> {
    //     this.buyEmpty = false;
    //   }, 2000)
    //   return;
    // }
    // if (confirm('Está segur@ que quiere cargar la compra? No podrá modificarla')) {
    //   this.stockService.sendBuy(this.buy);
    //   this.productService.updateStocks(this.buy[0].payload.val().products, this.products, true);
    //   this.router.navigate(['/stock/stock'])
    // }

    if (this.orderProducts.buyItemsCount == 0) {
      this.buyEmpty = true;
      setTimeout(()=> {
        this.buyEmpty = false;
      }, 2000)
      return;
    }
    if (confirm('Está segur@ que quiere cargar la compra? No podrá modificarla')) {
      this.stockService.sendBuy(this.orderProducts);
      this.productService.updateStocks(this.orderProducts.products, this.products, true);
      this.router.navigate(['/stock/stock'])
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

  ngOnDestroy() {
    //this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
  }
}
