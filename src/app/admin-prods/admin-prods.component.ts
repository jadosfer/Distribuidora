import { CategoryService } from '../services/category.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import {MatPaginator} from '@angular/material/paginator';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { jsPDF } from 'jspdf';


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
  prod: any = {};
  categoryPDF: any;
  clientCategories: any;

  filteredProducts:any[];
  prodsCategories$: Observable<any>;
  subscription: Subscription;

  recharged: boolean;
  mobile:boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService, private db: AngularFireDatabase, private router: Router,
     private categoryService: CategoryService) {
    this.prodsCategories$ = categoryService.getAllProdsCategories()
  }

  ngOnInit() {
    this.categoryService.getAllClientsCategories().subscribe(clientCategories => {
      this.clientCategories = clientCategories;
    })
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
    });
    this.productService.getAllRecharges().subscribe(recharges => {
      this.recharges = recharges;
      if (!recharges) {
        this.productService.createRecharge();
      }
      this.recharge(this.recharges[0].payload.val().distRecharge, this.recharges[0].payload.val().comRecharge, this.recharges[0].payload.val().kiosRecharge, this.recharges[0].payload.val().gymRecharge);
    });
    if (this.recharges) this.recharge(this.recharges[0].payload.val().distRecharge, this.recharges[0].payload.val().comRecharge, this.recharges[0].payload.val().kiosRecharge, this.recharges[0].payload.val().gymRecharge);
  }

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products.filter((p: { payload: { val: () => { (): any; new(): any; title: string; }; }; }) => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

  saveProd(product: any, formproduct: any) {
    if (confirm('Está segur@ que quiere guardar estos valores?')) {
      let prod = {
        "disc1": product.disc1,
        "disc2": product.disc2,
        "disc3": product.disc3,
        "disc4": product.disc4,
        "buyPrice": product.buyPrice,
        "price1": formproduct.payload.val().price1,
        "price2": formproduct.payload.val().price2,
        "price3": formproduct.payload.val().price3,
        "price4": formproduct.payload.val().price4,
        "discPrice1": formproduct.payload.val().discPrice1,
        "discPrice2": formproduct.payload.val().discPrice2,
        "discPrice3": formproduct.payload.val().discPrice3,
        "discPrice4": formproduct.payload.val().discPrice4,
        "prodsCategory": product.prodsCategory,
        "title": product.title
      }
      this.productService.update(formproduct.key, prod);
      location.reload();
      //this.router.navigate(['/admin/prods']);
    }
  }

  delete(id: string) {
    if (confirm('Está segur@ que quiere eliminar este producto?')) {
      this.productService.delete(id);
    }
  }

  save(recharge:any) {
    if (confirm('Está segur@ que quiere cambiar la remarcación?')) {
      this.recharge(Number(recharge.dist), Number(recharge.com), Number(recharge.kios), Number(recharge.gym))
    }
  }

  recharge(distRecharge: number, comRecharge: number, kiosRecharge: number, gymRecharge: number) {
    if (this.recharges) {
      this.recharged=true;
      setTimeout(()=> {
        this.recharged = false;
       }, 800);
      this.productService.recharge(this.products, distRecharge, comRecharge, kiosRecharge, gymRecharge);
      return
    }
    this.productService.createRecharge();
  }

  applyDiscount(p: any, priceNumber: any, disc: number){
    this.productService.applyDiscount(p, priceNumber, disc);
  }

  exportPDF(prod: any) {
    if (confirm('Descargar PDF')) {

      const line1 = 20;
      const line2 = line1 + 10;
      const line3 = line2 + 10;
      const col1 = 30;
      const col2 = 140;

      var doc = new jsPDF();
      let pageHeight= 0;
      doc.setFontSize(9);
      doc.text('GENTECH MAR DEL PLATA', col1, line1);
      doc.text('PRODUCTO', col1, line2);
      doc.text('Importe s/iva', 140, line2);
      doc.setFontSize(8);

      let cont = 0;
      let price = 0;
      let yLimit = 400 // Height position of new content
      let j = 0;
      let y = 0;
      for (let i=0;i<this.products.length;i++) {
        pageHeight = doc.internal.pageSize.height
        if (y >= pageHeight -70 ) {
          doc.addPage();
          j = i;
          cont = line1;
        }
        y = 7*(i+1-j) - cont;
        doc.text(this.products[i].payload.val().title, col1, line3 + y);
        switch (prod.categoryPDF) {
          case "Distribuidor":
            doc.text(this.products[i].payload.val().discPrice1.toFixed(1).toString(), col2, line3 + y);
            break;
          case "Comercio":
            doc.text(this.products[i].payload.val().discPrice2.toFixed(1).toString(), col2, line3 + y);
            break;
          case "Kiosko":
            doc.text(this.products[i].payload.val().discPrice3.toFixed(1).toString(), col2, line3 + y);
            break;
          case "Gimnasio":
            doc.text(this.products[i].payload.val().discPrice4.toFixed(1).toString(), col2, line3 + y);
            break;
        }
      }
      doc.setFontSize(8);

      // Save the PDF
      doc.save('ListaDePreciosGentech.pdf');
    }
  }
}



