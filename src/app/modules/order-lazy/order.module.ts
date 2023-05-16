import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from '../../orders/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/Material/Material.module';
import { ProductFilterComponent } from 'src/app/products/product-filter/product-filter.component';
import { CategoryService } from 'src/app/services/category.service';
import { UtilityService } from 'src/app/services/utility.service';
import { OrderService } from 'src/app/services/order.service';

@NgModule({
  declarations: [OrderComponent, ProductFilterComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [CategoryService, UtilityService, OrderService],
})
export class OrderModule { }
