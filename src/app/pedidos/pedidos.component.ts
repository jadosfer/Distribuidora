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
import { FormControl, FormGroup } from '@angular/forms';

import { DateAdapter } from '@angular/material/core';


@Component({
  selector: 'pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  appUser: AppUser;

  pedido: any;
  pedidos: any[];
  userPedidos: any[] = [];
  titles: string[]=[];
  subscription: Subscription;
  filteredProduct:any[];
  filteredPedidos:any[];
  dateRangefilteredPedidos:any[];
  datefilteredPedidos:any[];
  products:any[];
  date: any;
  dateValue: string;
  clientValue: string;

  title: string;
  quantity: number;
  sortedData: any[];
  aproved: string[] = ["NO", "SI"];
  paid: string[] = ["NO", "SI"];
  selected: string = "NO";

  aproveFirst:boolean = false;

  constructor(public pedidosService: PedidosService,
  private productService: ProductService,
  private route: ActivatedRoute,
  private auth: AuthService, public datepipe: DatePipe,
  public stockService: StockService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
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
        this.dateRangefilteredPedidos = this.datefilteredPedidos = this.filteredPedidos = this.userPedidos;
        }
      });
    });
  }

  filter(query: string) {
    // this.filteredPedidos = (query) ?
    // this.userPedidos.filter(p => p.payload.val().clientFantasyName.toLowerCase().includes(query.toLowerCase())) :
    // this.userPedidos;
    if (query != "") {
      this.filteredPedidos = (query) ?
      this.filteredPedidos.filter(p => p.payload.val().clientFantasyName.toLowerCase().includes(query.toLowerCase())) :
      this.filteredPedidos;
    }
    else this.filteredPedidos = this.userPedidos;
    console.log("else filter", this.filteredPedidos);
  }

  filterByDate(query: string) {
    // this.filteredPedidos = (query) ?
    // this.userPedidos.filter(p => this.datepipe.transform(p.payload.val().creationDate, 'dd/MM/yyyy HH:mm')?.includes(query)):
    // this.userPedidos;
    if (query != "") {
      this.filteredPedidos = (query) ?
      this.filteredPedidos.filter(p => this.datepipe.transform(p.payload.val().creationDate, 'dd/MM/yyyy HH:mm')?.includes(query)):
      this.filteredPedidos;
    }
    else this.filteredPedidos = this.userPedidos;
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
        case 'aproved': return this.compare(a.payload.val().aproved, b.payload.val().aproved, isAsc);


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

  getTotal() {
    let total = 0;
    if (this.filteredPedidos) {
      this.filteredPedidos.forEach(pedido => {
        total += this.pedidosService.getTotalCost(pedido);
      });
    }
    return total;
  }

  removePedido(pedidoId: any) {
    this.pedidosService.removePedido(pedidoId);
  }

  aprove(pedido: any) {
    if (confirm('Está segur@ que quiere aprobar el pedido para que pueda ser entregada la mercadería?')) {
      this.stockService.aprove(pedido);
      this.pedidosService.aprove(pedido);
    }
  }

  getPaid(pedido: any) {
    if (pedido.payload.val().aproved == "SI") {
      if (confirm('Está segur@ que quiere dar por pagado el pedido?')) {
        this.pedidosService.getPaid(pedido);
      }
    }
    else {
      this.aproveFirst = true;
      setTimeout(()=> {
        this.aproveFirst = false;
       }, 2500);
    }
  }

  searchDateRange(range: any) {
    // if (range.start) {
    //   this.filteredPedidos = (range) ?
    //   this.userPedidos.filter(p => p.payload.val().creationDate > Date.parse(range.start._d) && p.payload.val().creationDate < Date.parse(range.end._d)):
    //   this.userPedidos;
    // }
    if (range.start) {
      this.filteredPedidos = (range) ?
      this.filteredPedidos.filter(p => p.payload.val().creationDate > Date.parse(range.start._d) && p.payload.val().creationDate < Date.parse(range.end._d)):
      this.filteredPedidos;
      console.log("range", this.filteredPedidos);
    }
    else this.filteredPedidos = this.userPedidos;
    console.log("else range", this.filteredPedidos);

  }
  clearRange() {
    this.range.setValue({
      start: null,
      end: null
    });
    this.clientValue = "";
    this.dateValue = "";
    this.filteredPedidos = this.userPedidos;
  }

  isInDebt(pedido: any) {
    let today = new Date();
    if((Date.parse(today.toString()) - pedido.payload.val().creationDate > 30*24*60*60*1000) && pedido.payload.val().paid == "NO" ) { //que pasen 30 dias
      return true;
    }
    return false;
  }
}
