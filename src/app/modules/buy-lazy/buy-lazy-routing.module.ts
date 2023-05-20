import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from 'src/app/buy/buy.component';
import { AuthGuard } from 'src/app/services/auth-guard.service';

const routes: Routes = [{ path: '', component: BuyComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyLazyRoutingModule { }
