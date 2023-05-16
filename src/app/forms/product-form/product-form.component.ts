import { StockService } from './../../services/stock.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import 'rxjs/add/operator/take';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  prodsCategories: any[];
  product:any = {};
  id:any;
  products: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService,
    private stockService: StockService) {



    this.categoryService.getAllProdsCategories().subscribe(prodsCategories => {
      this.prodsCategories = prodsCategories
    });
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(p => {
      this.product = p.payload.val();
    });
   }

  save(product: any) {
    if (confirm('Está segur@ que quiere guardar/crear este producto?')) {
      if (this.id) {
        this.productService.update(this.id, product);
      }
      else {
        this.productService.create(product);
        this.productService.getAllProducts().subscribe(products => {
          this.products = products;
          this.stockService.updateBuy(this.products);
        })
      }
      this.router.navigate(['/admin/prods']);
    }
  }

  delete() {
    if (confirm('Está segur@ que quiere borrar este producto? No podrá recuperarlo')) {
      this.productService.delete(this.id);
      this.router.navigate(['/admin/prods']);
    }
  }

  ngOnInit(): void {
  }

}
