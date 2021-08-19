import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { PedidosService } from '../services/pedidos.service';
import { ProductService } from '../services/product.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  appUser: AppUser;
  stock: any;

  constructor(public stockService: StockService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private auth: AuthService) {
    }

  ngOnInit(){
    this.stockService.getAll().subscribe(stock => {
      this.stock = stock;
     });

    //this.filter("");
    //this.subscription = this.pedidosService.getAll().subscribe(pedidos => {
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
      //this.userPedidos = [];
      //for (let i=0;i<this.pedidos.length;i++) {
        //console.log("aca1", this.appUser.name);
        // if (!this.pedidos[i].payload.val().pedidoItemCount && i<this.pedidos.length-1){
        //   this.removePedido(this.pedidos[i].key);
        //}
      //   if (this.appUser.isAdmin || this.pedidos[i].payload.val().sellerName == this.appUser.name) this.userPedidos.push(this.pedidos[i]);
      //   }
      // });
    });
  }

}
