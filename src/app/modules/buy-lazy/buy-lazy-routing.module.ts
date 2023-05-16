import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from 'src/app/buy/buy.component';

const routes: Routes = [{ path: '', component: BuyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyLazyRoutingModule { }