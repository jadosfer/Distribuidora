import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyLazyRoutingModule } from './buy-lazy-routing.module';
import { BuyComponent } from 'src/app/buy/buy.component';
import { MaterialModule } from 'src/app/Material/Material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFilterModule } from '../product-filter/product-filter.module';


@NgModule({
  declarations: [
    BuyComponent
  ],
  imports: [
    CommonModule,
    BuyLazyRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ProductFilterModule
  ]
})
export class BuyLazyModule { }
