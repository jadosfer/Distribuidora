import { PedidosService } from '../services/pedidos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  pedido: any;
  pedidos: any[];
  titles: string[]=[];
  subscription: Subscription;
  filteredProduct:any[];
  products:any[];
  date: any;

  title: string;
  quantity: number;
  sortedData: any[];

  constructor(public pedidosService: PedidosService,
  private productService: ProductService,
  private route: ActivatedRoute,
  private auth: AuthService) {

    this.subscription = this.pedidosService.getAll().subscribe(pedidos => {
      this.pedidos = pedidos;
      for (let i=0;i<this.pedidos.length;i++) {
        if (!this.pedidos[i].payload.val().pedidoItemCount && i<this.pedidos.length-1){
          this.removePedido(this.pedidos[i].key);
        }
      }
    });
  }

  sortData(sort: Sort) {
    const data = this.pedidos.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return this.compare(a.title, b.title, isAsc);
        case 'quantity': return this.compare(a.quantity, b.quantity, isAsc);
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


  async ngOnInit(){

  }


  getTotalItems() {
    let pedido = this.pedidosService.getPedido();
    if (pedido) return pedido.pedidoItemCount;
    return 0;
  }

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
}
