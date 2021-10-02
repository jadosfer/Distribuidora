import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import {MatPaginator} from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-prods',
  templateUrl: './admin-prods.component.html',
  styleUrls: ['./admin-prods.component.scss']
})
export class AdminProdsComponent implements OnInit {
  dist:number;
  com:number;
  gym:number;
  rechargeDelForm: any = {};
  recharges: any;
  rechargeId:any;
  products: any;

  filteredProducts:any[];
  subscription: Subscription;

  recharged: boolean;
  mobile:boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService, private db: AngularFireDatabase, private router: Router) {
  }

  ngOnInit() {
    if (window.screen.width <= 800) { // 768px portrait
      this.mobile = true;
    }
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
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
  }

  saveProd(product: any, formproduct: any) {
    if (confirm('Está segur@ que quiere guardar/crear este producto?')) {
      let prod = {
        "disc1": product.disc1,
        "disc2": product.disc2,
        "disc3": product.disc3,
        "buyPrice": product.buyPrice,
        "imageUrl": formproduct.payload.val().imageUrl,
        "price1": formproduct.payload.val().price1,
        "price2": formproduct.payload.val().price2,
        "price3": formproduct.payload.val().price3,
        "discPrice1": formproduct.payload.val().discPrice1,
        "discPrice2": formproduct.payload.val().discPrice2,
        "discPrice3": formproduct.payload.val().discPrice3,
        "prodCategory": formproduct.payload.val().prodCategory,
        "title": product.title
      }
      this.productService.update(formproduct.key, prod);
      location.reload();
      //this.router.navigate(['/admin/prods']);
    }
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


