import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from 'src/app/clients/clients.component';
import { AdminAuthGuard } from 'src/app/services/admin-auth-guard.service';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { PrintService } from 'src/app/services/print.service';
import { UtilityService } from 'src/app/services/utility.service';


const routes: Routes = [{ path: '', component: ClientsComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthService, OrdersService, PrintService]
})
export class ClientsLazyRoutingModule { }



