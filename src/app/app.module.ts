import { AdminAuthGuard as AdminAuthGuard } from './admin-auth-guard.service';
import { MatNavbarComponent } from './mat-navbar/mat-navbar.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './Material/Material.module';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { PedidoSuccessComponent } from './pedido-success/pedido-success.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminPedidosComponent } from './admin/admin-pedidos/admin-pedidos.component';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CustomFormsModule } from 'ng2-validation';
import { FlexLayoutModule  } from '@angular/flex-layout';
import { CategoryService } from './services/category.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartService } from './services/cart.service';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MatNavbarComponent,
    ProductsComponent,
    CheckOutComponent,
    PedidoSuccessComponent,
    PedidosComponent,
    AdminProductsComponent,
    AdminPedidosComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent


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
    FlexLayoutModule
  ],
  providers: [AuthGuard, UserService, AdminAuthGuard, CategoryService,
    ProductService, AuthService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
