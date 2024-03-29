import { ReplacesComponent } from './replaces/replaces.component';
import { LogCheckComponent } from './log-check/log-check.component';
import { AdminClientsComponent } from './admin/admin-clients/admin-clients.component';
import { OrdersComponent } from './orders/orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './orders/order.component';
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
import { CreditNoteComponent } from './credit-note/credit-note.component';
import { CommissionsDashComponent } from './commissions/commissionsDash.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { PruebaComponent } from './pruebas/prueba.component';
import { EditProductPricesComponent } from './edit-product-prices/edit-product-prices.component';

const routes: Routes = [
  //{ path: "", redirectTo: "home", pathMatch: "full" },

  { path: "", component: LogCheckComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "orders/order", component: OrderComponent },
  { path: "payments/creditNote", component: CreditNoteComponent },
  { path: "payments/payment", component: PaymentComponent },
  { path: "payments/payments/:id", component: PaymentComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "payments/payments", component: PaymentsComponent },
  { path: "client/client", component: ClientsComponent },
  { path: "orders/orders", component: OrdersComponent },
  { path: "pruebas/prueba", component: PruebaComponent },
  { path: "stock/stock", component: StockComponent},
  { path: "stock/buy", component: BuyComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "buys", component: BuysComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "editProductPrices", component: EditProductPricesComponent, canActivate: [AuthGuard, AdminAuthGuard] },

  { path: "admin/clients/new", component: ClientsFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/clients/:id", component: ClientsFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/clients", component: AdminClientsComponent },

  { path: "admin/prods/new", component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/prods/:id", component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/prods", component: AdminProdsComponent, canActivate: [AuthGuard, AdminAuthGuard] },

  { path: "admin/sellers/new", component: SellersFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/sellers/:id", component: SellersFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "admin/sellers", component: AdminSellersComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: "replaces/replaces", component: ReplacesComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  { path: "commissions/commissionsDash", component: CommissionsDashComponent},
  { path: "commissions/commissions", component: CommissionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


