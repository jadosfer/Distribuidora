import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product-prices',
  templateUrl: './edit-product-prices.component.html',
  styleUrls: ['./edit-product-prices.component.scss']
})
export class EditProductPricesComponent implements OnInit {

  products: any;
  clientCategories: any;


  filteredProducts:any[] = [];
  prodsCategories: any[];
  subscription: Subscription;
  subscription2: Subscription


  constructor(private productService: ProductService, private categoryService: CategoryService ) {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      this.filteredProducts.sort(this.compareTitle)
      this.filteredProducts.sort(this.compareCategory)
   });
   categoryService.getAllProdsCategories().subscribe((prodsCategories)=>{
    this.prodsCategories = prodsCategories;
  });
  }

  ngOnInit(): void {
  }

  saveProd(formproduct: any, product: any) {
    // if (confirm('Está segur@ que quiere guardar estos valores?')) {
      let prod = {
        "disc1": product.payload.val().disc1,
        "disc2": product.payload.val().disc2,
        "disc3": product.payload.val().disc3,
        "disc4": product.payload.val().disc4,
        "buyPrice": formproduct.buyPrice,
        "price1": product.payload.val().price1,
        "price2": product.payload.val().price2,
        "price3": product.payload.val().price3,
        "price4": product.payload.val().price4,
        "discPrice1": product.payload.val().discPrice1,
        "discPrice2": product.payload.val().discPrice2,
        "discPrice3": product.payload.val().discPrice3,
        "discPrice4": product.payload.val().discPrice4,
        "stock": product.payload.val().stock,
        "prodsCategory": formproduct.prodsCategory,
        "title": product.payload.val().title
      }
      this.productService.update(product.key, prod);
  }

  delete(id: string) {
    if (confirm('Está segur@ que quiere eliminar este producto?')) {
      this.productService.delete(id);
    }
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
}
