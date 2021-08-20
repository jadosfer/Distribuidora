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

      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
    });
  }

}
