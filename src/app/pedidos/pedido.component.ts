import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Sort } from '@angular/material/sort';
import { PedidosService } from '../services/pedidos.service';
import { ClientsService } from '../services/clients.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  appUser: AppUser;

  myControl = new FormControl();
  filteredOptions:  Observable<any[]>;
  disableSelect = new FormControl(false);
  filtrada: any[];

  clientFantasyName:string="";

  clients:any[];
  products$:any;
  category: string | null;
  products:any[];
  filteredProducts:any[];
  filteredPedido: any;
  subscription: Subscription;
  subscription2: Subscription;
  pedido: any;

  filteredProduct:any[];

  title: string;
  quantity: number;
  sortedData: any[];
  sended: boolean = false;
  client: boolean = true;
  pedidoEmpty: boolean = false;

  constructor(
    public productService: ProductService,
    public route: ActivatedRoute,
    public pedidosService: PedidosService,
    public clientsService: ClientsService,
    private auth: AuthService,
    private router: Router
  ) {
    this.pedido = this.pedidosService.getPedido();

    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        if (this.products) {
          this.filteredProducts = (this.category) ?
          this.products.filter(p =>
            p.payload.val().category == this.category) :
          this.products;
        }
      });
    });

    this.subscription2 = this.clientsService.getAll().subscribe(clients => {
      this.clients = clients;

      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value =>  value? this._filter(value) : this._filter(""))
        )
    });
  }

  ngOnInit(){
    this.pedidosService.getPedido().subscribe(pedido => {
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
      });
      this.pedido = pedido;
      this.route.queryParamMap.subscribe(params => {
        this.category = params.get('category');

        this.filteredPedido = [];
        if (this.pedido) {
          for (let i=0;i<this.pedido.length;i++) {
            if (this.pedido[i].payload.val().product.category == this.category)  {
              this.filteredPedido.push(this.pedido[i]);
            }
          }
          if (this.filteredPedido.length == 0) this.filteredPedido = this.pedido;
        }
      });
    });
    }

  sortData(sort: Sort) {
    const data = this.filteredProducts;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return this.compare(a.payload.val().title, b.payload.val().title, isAsc);
        case 'quantity': return this.compare(this.getQuantity(a), this.getQuantity(b), isAsc);
        case 'unitPrice': return this.compare(a.payload.val().price1, b.payload.val().price1, isAsc);
        case 'totalPriceProduct': return this.compare(a.payload.val().price1*this.getQuantity(a), b.payload.val().price1*this.getQuantity(b), isAsc);

        default: return 0;
      }
    });
  }

  getTitle(item: any) {
    return item.title;
  }

  getQuantity(item: any) {
    if (!this.pedido) return 0;
    for (let i=0;i<this.pedido.payload.val().items.length;i++) {
      if (this.pedido.items[i].title == item.payload.val().title) return this.pedido.items[i].quantity;
    }
    return 0;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  private _filter(value: any): any {
    const filterValue = value.toLowerCase();
    let listFiltrada = this.clients.filter(client => client.payload.val().fantasyName.toLowerCase().includes(filterValue));
    return listFiltrada
  }

  updatePedidoItemQuantity(pedido: any, product: any, change: number){
    this.sended = false;
    this.pedidosService.updatePedidoItemQuantity(pedido, product, change);
  }

  getTotalItems() {
    // let pedido = this.pedidosService.getPedido();
    // if (pedido) return pedido.pedidoItemCount;
    // return 0;
  }

  getTotal() {
    // let pedido = this.pedidosService.getPedido();
    // if (!pedido) return 0;
    // let total = 0;
    // for (let i=0;i<pedido.items.length;i++) {
    //   total += pedido.items[i].quantity * pedido.items[i].price;
    // }
    // return total;
  }

  getTotalUnits() {
    // let pedido = this.pedidosService.getPedido();
    // if (pedido) {
    //   return pedido.payload.val().pedidoItemCount;
    // }
    // else return 0;
  }

  sendPedido() {
    // let pedido = this.pedidosService.getPedido();
    // if (!pedido) {
    //   this.pedidoEmpty = true;
    //   return;
    // }
    // this.pedidoEmpty = false;
    // if (this.clientFantasyName == "") {
    //   this.client = false;
    //   setTimeout(()=> {
    //      this.client = true;
    //     }, 500);
    //   return;
    // }
    // pedido.payload.val().sellerName = this.appUser.name;
    // this.sended = true;
    // this.pedidosService.sendPedido(pedido, this.clientFantasyName);
    // this.clientFantasyName = "";
    // this.router.navigateByUrl('/pedidos/pedidos');
  }

  reset() {
    this.pedidosService.resetPedido();
  }

}
