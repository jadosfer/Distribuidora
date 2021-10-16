import { CheckOutComponent } from './check-out/check-out.component';
import { AdminClientsComponent } from './admin/admin-clients/admin-clients.component';
import { OrdersComponent } from './orders/orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './orders/order.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { ClientsComponent} from './clients/clients.component';
import { ClientsFormComponent } from './forms/clients-form/clients-form.component';
import { ProductFormComponent } from './forms/product-form/product-form.component';
import { AdminSellersComponent } from './admin/admin-sellers/admin-sellers.component';
import { SellersFormComponent } from './forms/sellers-form/sellers-form.component';
import { StockComponent } from './stock/stock.component';
import { BuyComponent } from './buy/buy.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuysComponent } from './buys/buys.component';
import { AdminProdsComponent } from './admin-prods/admin-prods.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  //{ path: "", redirectTo: "home", pathMatch: "full" },

  { path: "", component: CheckOutComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "orders/order", component: OrderComponent },
  { path: "payments/payment", component: PaymentComponent },
  { path: "payments/payments", component: PaymentsComponent },
  { path: "client/client", component: ClientsComponent },
  { path: "orders/orders", component: OrdersComponent },
  { path: "login", component: LoginComponent },
  { path: "checkout", component: CheckOutComponent },

  { path: "stock/stock", component: StockComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "stock/buy", component: BuyComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "buys", component: BuysComponent, canActivate: [AuthGuard, AdminAuthGuard] },

  { path: "admin/clients/new", component: ClientsFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/clients/:id", component: ClientsFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/clients", component: AdminClientsComponent, canActivate: [AuthGuard, AdminAuthGuard] },

  { path: "admin/prods/new", component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/prods/:id", component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/prods", component: AdminProdsComponent, canActivate: [AuthGuard, AdminAuthGuard] },

  { path: "admin/sellers/new", component: SellersFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/sellers/:id", component: SellersFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/sellers", component: AdminSellersComponent, canActivate: [AuthGuard, AdminAuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


