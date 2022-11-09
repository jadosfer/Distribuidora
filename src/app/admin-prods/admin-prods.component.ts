import { CommissionsService } from './../services/commissions.service';
import { CategoryService } from '../services/category.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {MatPaginator} from '@angular/material/paginator';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-admin-prods',
  templateUrl: './admin-prods.component.html',
  styleUrls: ['./admin-prods.component.scss']
})
export class AdminProdsComponent implements OnInit {



  @ViewChild(MatPaginator) paginator: MatPaginator;
  currentItemsToShow: any[];
  toSave: any[] = [];
  pageSize: number = 20;
  pageIndex: number = 0;
  prodCat: String;
  prodCategory:any = {};

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

  filteredProducts:any[] = [];
  prodsCategories: any[];
  subscription: Subscription;
  subscription2: Subscription
  subscription3: Subscription

  recharged: boolean;
  mobile: boolean = false;
  prodAdded: boolean = false;
  saving: boolean = false;

  constructor(private productService: ProductService, private commissionsService: CommissionsService,
    private router: Router, private categoryService: CategoryService) {
      this.subscription = this.categoryService.getAllClientsCategories().subscribe(clientCategories => {
        this.clientCategories = clientCategories;
      })
      categoryService.getAllProdsCategories().subscribe((prodsCategories)=>{
        this.prodsCategories = prodsCategories;
      });
      this.subscription2 = this.productService.getAll().subscribe(products => {
        this.filteredProducts = this.products = products;
        this.filteredProducts.sort(this.compareTitle);
        this.filteredProducts.sort(this.compareCategory);

        this.onPageChange({previousPageIndex: 0, pageIndex: this.pageIndex, pageSize: this.pageSize, length: this.filteredProducts.length})
        //this.createStockValue(this.products);
        this.subscription3 = this.productService.getAllRecharges().subscribe(recharges => {
          this.recharges = recharges;
          if (!recharges) {
            this.productService.createRecharge();
          }
          this.recharge(this.recharges[0].payload.val().distRecharge, this.recharges[0].payload.val().comRecharge, this.recharges[0].payload.val().kiosRecharge, this.recharges[0].payload.val().gymRecharge);
        });
      });

      // if (this.recharges) this.recharge(this.recharges[0].payload.val().distRecharge, this.recharges[0].payload.val().comRecharge, this.recharges[0].payload.val().kiosRecharge, this.recharges[0].payload.val().gymRecharge);
    }

  ngOnInit() {
  }

  // filter(query: string) {
  //   this.filteredProducts = (query) ?
  //     this.products.filter((p: { payload: { val: () => { (): any; new(): any; title: string; }; }; }) => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :
  //     this.products;
  // }

  filter(query: string) {
    if (query != "") {
      this.filteredProducts = (query) ?
      this.products.filter((p: { payload: { val: () => { (): any; new(): any; title: string; }; }; }) => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) :
      [];
    }
    else this.filteredProducts = this.products;
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredProducts.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  saveProd(productForm: any, product: any) {
    // if (confirm('Está segur@ que quiere guardar estos valores?')) {
      let prod = {
        "disc1": productForm.disc1,
        "disc2": productForm.disc2,
        "disc3": productForm.disc3,
        "disc4": productForm.disc4,
        "buyPrice": productForm.buyPrice,
        "price1": product.payload.val().price1,
        "price2": product.payload.val().price2,
        "price3": product.payload.val().price3,
        "price4": product.payload.val().price4,
        "discPrice1": product.payload.val().discPrice1,
        "discPrice2": product.payload.val().discPrice2,
        "discPrice3": product.payload.val().discPrice3,
        "discPrice4": product.payload.val().discPrice4,
        "stock": productForm.stock,
        "prodsCategory": productForm.prodsCategory,
        "title": productForm.title
      }
      this.productService.update(product.key, prod);
      //this.toSave.push({"key": product.key, "prod": prod})
      //location.reload();
      //this.router.navigate(['/admin/prods']);
    // }
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

  onPageChange($event: any) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.currentItemsToShow = this.filteredProducts.slice(
      $event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize
    );
  }

  compareCategory( a: any, b: any ) {
    if ( a.payload.val().prodsCategory.toLowerCase() < b.payload.val().prodsCategory.toLowerCase()){
      return -1;
    }
    if ( a.payload.val().prodsCategory.toLowerCase() > b.payload.val().prodsCategory.toLowerCase()){
      return 1;
    }
    return 0;
  }

  compareTitle( a: any, b: any ) {
    if ( a.payload.val().title.toLowerCase() < b.payload.val().title.toLowerCase()){
      return -1;
    }
    if ( a.payload.val().title.toLowerCase() > b.payload.val().title.toLowerCase()){
      return 1;
    }
    return 0;
  }

  exportExcel(prod: any) {
    this.products.sort(this.compareTitle)
    this.products.sort(this.compareCategory)
    if (confirm('Descargar Excel')) {
      let data: any[] = [];
      data.push(["PRODUCTO", "DISTRIBUIDOR", "COMERCIO", "KIOSKO", "GIMNASIO", "CATEGORIA"])
      this.filteredProducts.forEach((prod)=>{
        data.push([prod.payload.val().title, prod.payload.val().discPrice1.toFixed(1),
          prod.payload.val().discPrice2.toFixed(1), prod.payload.val().discPrice3.toFixed(1),
          prod.payload.val().discPrice4.toFixed(1), prod.payload.val().prodsCategory])
      });

      // (C2) CREATE NEW EXCEL "FILE"
      var workbook = XLSX.utils.book_new(),
          worksheet = XLSX.utils.aoa_to_sheet(data);
      workbook.SheetNames.push("Precios");
      workbook.Sheets["Precios"] = worksheet;

      var wscols = [
        {wch:40},
        {wch:15},
        {wch:15},
        {wch:15},
        {wch:15},
        {wch:15}
    ];

    worksheet['!cols'] = wscols;

      // (C3) "FORCE DOWNLOAD" XLSX FILE
      XLSX.writeFile(workbook, "precios.xlsx");
    }

  }

  exportPDF(prod: any) {
    if (confirm('Descargar PDF')) {
      this.products.sort(this.compareTitle)
      this.products.sort(this.compareCategory)

      const line1 = 20;
      const line2 = line1 + 10;
      const line3 = line2 + 10;
      const col1 = 20;
      const col2 = 120;
      const col3 = 160;

      var doc = new jsPDF();
      let pageHeight= 0;
      doc.setFontSize(9);
      doc.text('GENTECH MAR DEL PLATA', col1, line1);
      doc.text('CATEGORÍA: ' + prod.categoryPDF, 120, line1);
      doc.text('PRODUCTO', col1, line2);
      if (prod.categoryPDF == "Kiosko" || prod.categoryPDF == "Gimnasio") {
        doc.text('Importe', 120, line2);
      }
      else {
        doc.text('Importe s/IVA', 120, line2);
        doc.text('Importe c/IVA', 160, line2);
      }

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
            doc.text((1.21*this.products[i].payload.val().discPrice1).toFixed(1).toString(), col3, line3 + y);
            break;
          case "Comercio":
            doc.text(this.products[i].payload.val().discPrice2.toFixed(1).toString(), col2, line3 + y);
            doc.text((1.21*this.products[i].payload.val().discPrice2).toFixed(1).toString(), col3, line3 + y);
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
      doc.save('ListaDePreciosGentech-' + prod.categoryPDF +'.pdf');
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

  addProdCategory(prodCategory: any) {
    this.categoryService.addProdCategory(prodCategory.title);
    location.reload();
    //this.commissionsService.addProdCategory(prodCategory.title);
  }
}



