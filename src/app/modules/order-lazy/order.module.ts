import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from '../../orders/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/Material/Material.module';
import { CategoryService } from 'src/app/services/category.service';
import { UtilityService } from 'src/app/services/utility.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductFilterModule } from '../product-filter/product-filter.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ProductFilterModule
  ],
  providers: [CategoryService, UtilityService, OrderService],
})
export class OrderModule { }
