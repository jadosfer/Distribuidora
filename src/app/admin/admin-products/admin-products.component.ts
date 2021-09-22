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
  rechargeDelForm: any = {};
  recharges: any;
  rechargeId:any;
  products: any;

  displayedColumns: string[] = ['title', 'buyPrice', 'discPrice1','disc1','discPrice2','disc2','discPrice3','disc3','edit'];
  displayedMobileColumns: string[] = ['title', 'discPrice1','disc1','discPrice2','disc2','discPrice3','disc3','edit'];
  dataSource: any;
  sortedData:any[];
  filteredProducts:any[];
  subscription: Subscription;

  recharged: boolean;
  mobile:boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService, private db: AngularFireDatabase) {
  }

  ngOnInit() {
    if (window.screen.width <= 800) { // 768px portrait
      this.mobile = true;
      this.displayedColumns = this.displayedMobileColumns;
    }
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      this.dataSource = new MatTableDataSource<any>(this.filteredProducts);
      this.dataSource.paginator = this.paginator;
    });
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
        case 'discPrice1': return compare(a.payload.val().discPrice1, b.payload.val().discPrice1, isAsc);
        case 'discPrice2': return compare(a.payload.val().discPrice2, b.payload.val().discPrice2, isAsc);
        case 'discPrice3': return compare(a.payload.val().discPrice3, b.payload.val().discPrice3, isAsc);
        //case 'prodCategory': return compare(a.payload.val().prodCategory, b.payload.val().prodCategory, isAsc);
        default: return 0;
      }
    });
    this.dataSource = new MatTableDataSource<any>(this.sortedData);
    this.dataSource.paginator = this.paginator;
  }

  save(recharge:any) {
    this.recharge(Number(recharge.dist), Number(recharge.com), Number(recharge.gym))
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
