
import { MatNavbarComponent } from './mat-navbar/mat-navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './Material/Material.module';
import { AppRoutingModule } from './app-routing.module';
import { OrderComponent } from './orders/order.component';
import { AdminClientsComponent } from './admin/admin-clients/admin-clients.component';
//import { environment } from '../environments/environment';
import { environment } from '../environments/environment.test';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { FlexLayoutModule  } from '@angular/flex-layout';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { ClientsFormComponent } from './forms/clients-form/clients-form.component';
import { AdminSellersComponent } from './admin/admin-sellers/admin-sellers.component';
import { SellersFormComponent } from './forms/sellers-form/sellers-form.component';
import { ProductFormComponent } from './forms/product-form/product-form.component';
import { ReactiveFormsModule} from '@angular/forms';
import { StockComponent } from './stock/stock.component';
import { BuyComponent } from './buy/buy.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatePipe } from '@angular/common';
import { BuysComponent } from './buys/buys.component';
import { PieChartComponent } from './pieChart/pieChart.component';
import { ChartsModule } from 'ng2-charts';
import { AdminProdsComponent } from './admin-prods/admin-prods.component';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { LogCheckComponent } from './log-check/log-check.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentComponent } from './payment/payment.component';
import { CreditNoteComponent } from './credit-note/credit-note.component';
import { CommissionsDashComponent } from './commissions/commissionsDash.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { ReplacesComponent } from './replaces/replaces.component';
import { PruebaComponent } from './pruebas/prueba.component';
import { EditProductPricesComponent } from './edit-product-prices/edit-product-prices.component';
import { UtilityService } from './services/utility.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MatNavbarComponent,
    AdminClientsComponent,
    ProductFormComponent,
    ClientsFormComponent,
    AdminSellersComponent,
    SellersFormComponent,
    StockComponent,
    DashboardComponent,
    BuysComponent,
    PieChartComponent,
    AdminProdsComponent,
    LogCheckComponent,
    PaymentsComponent,
    PaymentComponent,
    CreditNoteComponent,
    CommissionsDashComponent,
    CommissionsComponent,
    ReplacesComponent,
    PruebaComponent,
    EditProductPricesComponent,
    PaymentsComponent,
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [AuthGuard, AdminAuthGuard, ProductService, AuthService, UtilityService,
    UserService, DatePipe, PieChartComponent, {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
