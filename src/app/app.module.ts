import { AdminAuthGuard as AdminAuthGuard } from './admin-auth-guard.service';
import { MatNavbarComponent } from './mat-navbar/mat-navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './Material/Material.module';
import { AppRoutingModule } from './app-routing.module';
import { PedidoComponent } from './pedidos/pedido.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminClientsComponent } from './admin/admin-clients/admin-clients.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { FlexLayoutModule  } from '@angular/flex-layout';
import { CategoryService } from './services/category.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { PedidosService } from './services/pedidos.service';
import { ClientsComponent } from './clients/clients.component';
import {PedidosComponent} from './pedidos/pedidos.component';
import { ClientsFormComponent } from './forms/clients-form/clients-form.component';
import { AdminSellersComponent } from './admin/admin-sellers/admin-sellers.component';
import { SellersFormComponent } from './forms/sellers-form/sellers-form.component';
import { ProductFormComponent } from './forms/product-form/product-form.component';
import { ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    MatNavbarComponent,
    PedidoComponent,
    CheckOutComponent,
    AdminProductsComponent,
    AdminClientsComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ClientsComponent,
    ClientsFormComponent,
    AdminSellersComponent,
    SellersFormComponent


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
    ReactiveFormsModule
  ],
  providers: [AuthGuard, UserService, AdminAuthGuard, CategoryService,
    ProductService, AuthService, PedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
