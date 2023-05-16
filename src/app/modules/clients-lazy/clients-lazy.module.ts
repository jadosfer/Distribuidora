import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsLazyRoutingModule } from './clients-lazy-routing.module';
import { ClientsComponent } from 'src/app/clients/clients.component';
import { MaterialModule } from 'src/app/Material/Material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilityService } from 'src/app/services/utility.service';
import { CategoryService } from 'src/app/services/category.service';
import { OrdersService } from 'src/app/services/orders.service';
import { AuthService } from 'src/app/services/auth.service';
import { PrintService } from 'src/app/services/print.service';



@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsLazyRoutingModule,
    MaterialModule,
    //ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UtilityService, AuthService, OrdersService, PrintService]
})
export class ClientsLazyModule { }
