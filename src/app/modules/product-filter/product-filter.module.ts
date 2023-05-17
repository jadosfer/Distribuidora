import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from 'src/app/products/product-filter/product-filter.component';
import { ProductFilterRoutingModule } from './product-filter-routing.module';
import { MaterialModule } from 'src/app/Material/Material.module';



@NgModule({
  declarations: [ProductFilterComponent],
  imports: [
    CommonModule,
    ProductFilterRoutingModule,
    CommonModule,
    //FormsModule,
    MaterialModule,
    //ReactiveFormsModule,
  ],
  exports: [ProductFilterComponent]
})
export class ProductFilterModule { }
