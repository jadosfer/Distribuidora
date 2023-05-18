import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/Material/Material.module';
import { CategoryService } from 'src/app/services/category.service';
import { UtilityService } from 'src/app/services/utility.service';
import { ProductFilterModule } from '../product-filter/product-filter.module';
import { OrdersComponent } from 'src/app/orders/orders.component';
import { OrdersService } from 'src/app/services/orders.service';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ProductFilterModule
  ],
  providers: [CategoryService, UtilityService, OrdersService],
})
export class OrdersModule { }
