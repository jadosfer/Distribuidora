import { AdminClientsComponent } from './admin/admin-clients/admin-clients.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './pedidos/pedido.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { ClientsComponent} from './clients/clients.component';
import { ClientsFormComponent } from './forms/clients-form/clients-form.component';
import { ProductFormComponent } from './forms/product-form/product-form.component';
import { AdminSellersComponent } from './admin/admin-sellers/admin-sellers.component';
import { SellersFormComponent } from './forms/sellers-form/sellers-form.component';

const routes: Routes = [
  //{ path: "", redirectTo: "home", pathMatch: "full" },

  { path: '', component: PedidoComponent },
  { path: "client/client", component: ClientsComponent },
  { path: "pedidos/pedidos", component: PedidosComponent },
  { path: "login", component: LoginComponent },
  { path: "check-out", component: CheckOutComponent, canActivate: [AuthGuard] },

  { path: "admin/clients/new", component: ClientsFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/clients/:id", component: ClientsFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/clients", component: AdminClientsComponent, canActivate: [AuthGuard, AdminAuthGuard] },

  { path: "admin/products/new", component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/products/:id", component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/products", component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard] },

  { path: "admin/sellers/new", component: SellersFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/sellers/:id", component: SellersFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/sellers", component: AdminSellersComponent, canActivate: [AuthGuard, AdminAuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


