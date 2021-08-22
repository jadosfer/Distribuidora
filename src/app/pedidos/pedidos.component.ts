import { StockService } from './../services/stock.service';
import { PedidosService } from '../services/pedidos.service';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  appUser: AppUser;

  pedido: any;
  pedidos: any[];
  userPedidos: any[] = [];
  titles: string[]=[];
  subscription: Subscription;
  filteredProduct:any[];
  filteredPedidos:any[];
  products:any[];
  date: any;

  title: string;
  quantity: number;
  sortedData: any[];
  states: string[] = ["pendiente", "aprobado"];
  selected: string = "pendiente";

  constructor(public pedidosService: PedidosService,
  private productService: ProductService,
  private route: ActivatedRoute,
  private auth: AuthService, public datepipe: DatePipe,
  public stockService: StockService) {
  }

  ngOnInit(){
    this.filter("");
    this.subscription = this.pedidosService.getAll().subscribe(pedidos => {
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
        this.pedidos =  pedidos;
        this.userPedidos = [];
      for (let i=0;i<this.pedidos.length;i++) {
        if (this.appUser.isAdmin || this.pedidos[i].payload.val().sellerName == this.appUser.name) {
          this.userPedidos.push(this.pedidos[i]);
        }
        this.filteredPedidos = this.userPedidos;
        }
      });
    });
  }

  filter(query: string) {
    this.filteredPedidos = (query) ?
    this.userPedidos.filter(p => p.payload.val().clientFantasyName.toLowerCase().includes(query.toLowerCase())) :
    this.userPedidos;
  }

  filterByDate(query: string) {
    console.log("this.userPedidos: ", this.userPedidos);
    this.filteredPedidos = (query) ?
    this.userPedidos.filter(p => this.datepipe.transform(p.payload.val().creationDate, 'dd/MM/yyyy HH:mm')?.includes(query)):
    this.userPedidos;
  }

  sortData(sort: Sort) {
    const data = this.filteredPedidos;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        //case 'nroPedido': return this.compare(a.i, b.i, isAsc);
        case 'cliente': return this.compare(a.payload.val().clientFantasyName, b.payload.val().clientFantasyName, isAsc);
        case 'vendedor': return this.compare(a.payload.val().sellerName, b.payload.val().sellerName, isAsc);
        case 'date': return this.compare(a.payload.val().creationDate, b.payload.val().creationDate, isAsc);
        case 'import': return this.compare(this.pedidosService.getTotalCost(a), this.pedidosService.getTotalCost(b), isAsc);
        case 'state': return this.compare(a.payload.val().state, b.payload.val().state, isAsc);


        default: return 0;
      }
    });
  }

  getTitle(item: any) {
    return item.title;
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  // getTotalItems() {
  //   let pedido = this.pedidosService.getPedido();
  //   if (pedido) return pedido.pedidoItemCount;
  //   return 0;
  // }

  getTotal() {
    let total = 0;
    if (this.pedidos) {
      this.pedidos.forEach(pedido => {
        total += this.pedidosService.getTotalCost(pedido);
      });
    }
    return total;
  }

  removePedido(pedidoId: any) {
    this.pedidosService.removePedido(pedidoId);
  }

  aprove(pedido: any) {
    this.stockService.aprove(pedido);
    this.pedidosService.aprove(pedido);

  }
}
