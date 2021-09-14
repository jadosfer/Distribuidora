import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import {MatPaginator} from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import {Sort} from '@angular/material/sort';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  dist:number;
  com:number;
  gym:number;
  recharges: any;
  rechargeId:any;
  products: any;

  displayedColumns: string[] = ['title', 'buyPrice', 'discPrice1','disc1','discPrice2','disc2','discPrice3','disc3', 'prodCategory', 'edit'];
  dataSource: any;
  sortedData:any[];
  filteredProducts:any[];
  subscription: Subscription;

  recharged: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService, private db: AngularFireDatabase) {
  }

  ngOnInit() {
    //if (!this.productService.recharges) this.productService.createRecharge();
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      this.dataSource = new MatTableDataSource<any>(this.filteredProducts);
      this.dataSource.paginator = this.paginator;
    });
    //this.productService.updateRechargePrices();
    this.productService.getAllRecharges().subscribe(recharges => {
      this.recharges = recharges;
      if (!recharges) {
        this.productService.createRecharge();
      }
      this.recharge(this.recharges[0].payload.val().distRecharge, this.recharges[0].payload.val().comRecharge, this.recharges[0].payload.val().gymRecharge);
    });
    if (this.recharges) this.recharge(this.recharges[0].payload.val().distRecharge, this.recharges[0].payload.val().comRecharge, this.recharges[0].payload.val().gymRecharge);
  }

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter((p: { payload: { val: () => { (): any; new(): any; title: string; }; }; }) => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
    this.dataSource = new MatTableDataSource<any>(this.filteredProducts);
    this.dataSource.paginator = this.paginator;

  }

  sortData(sort: Sort) {
    const data = this.filteredProducts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return compare(a.payload.val().title, b.payload.val().title, isAsc);
        case 'buyPrice': return compare(a.payload.val().buyPrice, b.payload.val().buyPrice, isAsc);
        case 'price1': return compare(a.payload.val().price1, b.payload.val().price1, isAsc);
        case 'price2': return compare(a.payload.val().price2, b.payload.val().price2, isAsc);
        case 'price3': return compare(a.payload.val().price3, b.payload.val().price3, isAsc);
        case 'prodCategory': return compare(a.payload.val().prodCategory, b.payload.val().prodCategory, isAsc);
        default: return 0;
      }
    });
    this.dataSource = new MatTableDataSource<any>(this.sortedData);
    this.dataSource.paginator = this.paginator;
  }

  recharge(distRecharge: number, comRecharge: number, gymRecharge: number) {
    if (this.recharges) {
      this.recharged=true;
      setTimeout(()=> {
        this.recharged = false;
       }, 800);
      this.productService.recharge(this.products, distRecharge, comRecharge, gymRecharge);
      return
    }
    this.productService.createRecharge();
  }

  applyDiscount(p: any, priceNumber: any, disc: number){
    this.productService.applyDiscount(p, priceNumber, disc);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
