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
    // let pedido = this.pedidosService.getPedido();
    // return 0;
  }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      if (appUser) this.pedidosService.appUser = this.appUser;
    });
  }
}
