import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyLazyRoutingModule } from './buy-lazy-routing.module';
import { BuyComponent } from 'src/app/buy/buy.component';
import { MaterialModule } from 'src/app/Material/Material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BuyComponent
  ],
  imports: [
    CommonModule,
    BuyLazyRoutingModule,
    MaterialModule,
    //ReactiveFormsModule,
    FormsModule,
  ]
})
export class BuyLazyModule { }
