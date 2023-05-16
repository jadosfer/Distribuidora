import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from '../../orders/order.component';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { AdminAuthGuard } from 'src/app/services/admin-auth-guard.service';

const routes: Routes = [
  { path: '', component: OrderComponent, canActivate: [AuthGuard, AdminAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
