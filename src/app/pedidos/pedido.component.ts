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

  clients:any[] = [];
  filteredClients:any[];
  products$:any;
  prodCategory: string | null;
  products:any[];
  filteredProducts:any[];
  filteredPedido: any;
  subscription: Subscription;
  subscription2: Subscription;
  pedido: any;
  disc: number = 0;

  filteredProduct:any[];
  breakpoint:any;

  title: string;
  quantity: number;
  sortedData: any[];
  sended: boolean = false;
  client: boolean = true;
  pedidoEmpty: boolean = false;
  mobile:boolean;

  constructor(
    public productService: ProductService,
    public route: ActivatedRoute,
    public pedidosService: PedidosService,
    public clientsService: ClientsService,
    private auth: AuthService,
    private router: Router
  ) {
    this.pedidosService.resetPedido();
    this.pedido = this.pedidosService.getPedido();

    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      this.route.queryParamMap.subscribe(params => {
        this.prodCategory = params.get('prodCategory');
        if (this.products) {
          this.filteredProducts = (this.prodCategory) ?
          this.products.filter(p =>
            p.payload.val().prodCategory == this.prodCategory) :
          this.products;
        }
      });
    });
  }

  ngOnInit(){
    if (window.screen.width <= 800) { // 768px portrait
      this.mobile = true;
    }
    this.pedidosService.getPedido().subscribe(pedido => {
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;

        this.subscription2 = this.clientsService.getAll().subscribe(clients => {
          this.filteredClients = clients;
          this.clients = [];
          for (let i=0;i<this.filteredClients.length;i++) {
            if (this.filteredClients[i].payload.val().designatedSeller == this.appUser.name || this.appUser.isAdmin == true)  {
              this.clients.push(this.filteredClients[i]);
            }
          }

          this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value =>  value? this._filter(value) : this._filter(""))
            )
        });

      });
      this.pedido = pedido;
      this.route.queryParamMap.subscribe(params => {
        this.prodCategory = params.get('prodCategory');

        this.filteredPedido = [];
        if (this.pedido.length != 0) {
          for (let i=0;i<this.pedido[0].payload.val().products.length;i++) {
            if (this.pedido[0].payload.val().products[i].product.prodCategory == this.prodCategory)  {
              this.filteredPedido.push(this.pedido[0].payload.val().products[i]);
            }
          }
          if (this.filteredPedido.length == 0) {
            for (let i=0;i<this.pedido[0].payload.val().products.length;i++)
              this.filteredPedido.push(this.pedido[0].payload.val().products[i]);
          }
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
        case 'unitPrice': return this.compare(a.payload.val().discPrice1, b.payload.val().discPrice1, isAsc);
        case 'totalPriceProduct': return this.compare(a.payload.val().discPrice1*this.getQuantity(a), b.payload.val().discPrice1*this.getQuantity(b), isAsc);

        default: return 0;
      }
    });
  }

  // getClientPrice(product: any) {
  //   return this.pedidosService.getClientPrice(product, this.clientFantasyName, this.pedido);
  // }

  getClientCategory() {
    return this.pedidosService.getClientCategory(this.clientFantasyName);
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
    if (!this.clients) return;
    let listFiltrada = this.clients.filter(client => client.payload.val().fantasyName.toLowerCase().includes(filterValue));
    return listFiltrada
  }

  updatePedidoItemQuantity(pedido: any, product: any, change: number){
    this.sended = false;
    this.pedidosService.updatePedidoItemQuantity(pedido, product, change);
  }

  getTotal() {
    if (!this.pedido) return 0;
    let total = 0;
    if (!this.pedido[0]) return 0;
    for (let i=0;i<this.pedido[0].payload.val().products.length;i++) {
      total += this.pedido[0].payload.val().products[i].quantity * this.pedido[0].payload.val().products[i].discountPrice;
    }
    return total;
  }

  getTotalUnits() {
    if (this.pedido[0]) {
      return this.pedido[0].payload.val().pedidoItemsCount;
    }
    else return 0;
  }

  sendPedido() {
    if (this.pedido[0].payload.val().pedidoItemsCount == 0) {
      this.pedidoEmpty = true;
      return;
    }
    this.pedidoEmpty = false;
    if (this.clientFantasyName == "") {
      this.client = false;
      setTimeout(()=> {
         this.client = true;
        }, 500);
      return;
    }

    if (confirm('Está segur@ que quiere enviar el pedido? No podrá modificarlo')) {
      this.sended = true;
      this.pedidosService.sendPedido(this.pedido, this.clientFantasyName);
      this.clientFantasyName = "";
      this.router.navigateByUrl('/pedidos/pedidos');
    }
  }

  reset() {
    if (confirm('Está segur@ que quiere anular el pedido que no ha enviado?')) {
      this.pedidosService.resetPedido();
    }
  }

  discount(e: any, p: any, disc: number) {
    this.pedidosService.discount(this.pedido, p, disc);
    //p.inputValue=discount; //<-----this will add new property to your existing object with input value.
  }

  updatePrices() {
    this.pedidosService.updatePrices(this.pedido, this.clientFantasyName);
  }
}
