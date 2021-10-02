import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdCategoryService } from 'src/app/services/prod-category.service';
import { ProductService } from 'src/app/services/product.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  prodCategories$: Observable<any>;
  product:any = {};
  id:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private prodCategoryService: ProdCategoryService,
    private productService: ProductService) {

    this.prodCategories$ = prodCategoryService.getAll();
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
      }
      this.router.navigate(['/admin/prods']);
    }
  }

  delete() {
    if (confirm('Está segur@ que quiere borrar este producto? No podrá recuperarlo')) {
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    }
  }

  ngOnInit(): void {
  }

}
