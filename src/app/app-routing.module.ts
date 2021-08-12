import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminPedidosComponent } from './admin/admin-pedidos/admin-pedidos.component';

import { CheckOutComponent } from './check-out/check-out.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';

import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidoSuccessComponent } from './pedido-success/pedido-success.component';

const routes: Routes = [
  //{ path: "", redirectTo: "home", pathMatch: "full" },

  { path: '', component: ProductsComponent },
  { path: "cart", component: CartComponent },
  { path: "login", component: LoginComponent },

  { path: "check-out", component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: "pedido-success", component: PedidoSuccessComponent, canActivate: [AuthGuard] },
  { path: 'my/pedidos', component: PedidosComponent, canActivate: [AuthGuard] },

  { path: "admin/products/new", component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/products/:id", component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/products", component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/pedidos", component: AdminPedidosComponent, canActivate: [AuthGuard, AdminAuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


