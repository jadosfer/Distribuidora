import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html'
})
export class PedidosComponent implements OnInit {
  products:any[];
  filteredProducts:any[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
   }

   ngOnInit() {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      console.log(this.products)
    });
 }

}
