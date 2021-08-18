import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'mat-navbar',
  templateUrl: './mat-navbar.component.html'
})
export class MatNavbarComponent implements OnInit{

  appUser: AppUser;

  constructor(private auth: AuthService, private pedidosService: PedidosService) {
  }

  logout() {
    this.auth.logout()
  }

  getTotalItems() {
    let pedido = this.pedidosService.getPedido();
    if (pedido) return pedido.pedidoItemCount;
    return 0;
  }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => {
      console.log("actualizo user");
      this.appUser = appUser;
      if (appUser) this.pedidosService.appUser = this.appUser;
    });
  }
}
