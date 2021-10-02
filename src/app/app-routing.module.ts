import { AdminClientsComponent } from './admin/admin-clients/admin-clients.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './pedidos/pedido.component';
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

const routes: Routes = [
  //{ path: "", redirectTo: "home", pathMatch: "full" },

  { path: "", component: DashboardComponent },
  { path: "pedidos/pedido", component: PedidoComponent },
  { path: "client/client", component: ClientsComponent },
  { path: "pedidos/pedidos", component: PedidosComponent },
  { path: "login", component: LoginComponent },

  { path: "check-out", component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: "stock/stock", component: StockComponent, canActivate: [AuthGuard] },
  { path: "stock/buy", component: BuyComponent, canActivate: [AuthGuard] },
  { path: "buys", component: BuysComponent, canActivate: [AuthGuard] },

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


