import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { AdminAuthGuard } from 'src/app/services/admin-auth-guard.service';
import { OrdersComponent } from 'src/app/orders/orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent, canActivate: [AuthGuard, AdminAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
