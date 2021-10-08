import { SellersService } from './../services/sellers.service';
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
  sellers: any;

  constructor(private auth: AuthService, private pedidosService: PedidosService,
    private sellersService: SellersService) {
  }

  logout() {
    this.pedidosService.clearPedido();
    this.auth.logout()
  }

  getTotalItems() {
    // let pedido = this.pedidosService.getPedido();
    // return 0;
  }

  ngOnInit() {
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      if (appUser) {
        this.pedidosService.appUser = this.appUser;
        this.sellersService.getAll().subscribe(sellers => {
          this.sellers = sellers;
          let create = true;
          for (let i=0;i<this.sellers.length;i++) {
            if (this.sellers[i].payload.val().name == this.appUser.name) create = false;
          }
          if (create) {
            this.sellersService.create({
              "address": "",
              "cuil": "",
              "name": appUser.name,
              "phone": ""
            });
          }

        });
      }
    });

  }
}
