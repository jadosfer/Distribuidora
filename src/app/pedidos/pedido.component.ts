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
import { ConditionalExpr } from '@angular/compiler';



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
  showedProducts:any;
  prodCategory: string | null;
  products:any[];
  filteredProducts:any[];
  filteredPedido: any;
  prodQuery: string;
  subscription: Subscription;
  subscription2: Subscription;
  pedido: any[] ;
  pedidoIndex: number;
  pedidoCartId: any;
  disc: number = 0;
  iva: number = 21;
  ivas: number[] = [0, 10.5, 21];

  filteredProduct:any[];
  breakpoint:any;

  title: string;
  quantity: number;
  cartQuantities: number[];
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

    //this.pedido = this.pedidosService.getPedido();
  }

  ngOnInit(){
    this.pedidoIndex = 0;
    this.pedidosService.getPedido().subscribe(pedido => {
      this.pedido = pedido;
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;

        if (this.appUser && this.pedido.length == 0) {
            this.pedidosService.createPedido();
          }
        else {
          this.pedidoIndex = -1
          for (let i=0;i<this.pedido.length;i++) {
            if (this.appUser && this.pedido[i].payload.val().sellerName == this.appUser.name) {
              this.pedidoIndex = i
              break
            }
          }
          if (this.appUser && this.pedidoIndex == -1) {
            this.pedidosService.createPedido();
            }
        }
        this.clientsService.getAll().subscribe(clients => {
          this.filteredClients = clients;
          this.clients = [];
          for (let i=0;i<this.filteredClients.length;i++) {
            if (this.filteredClients[i].payload.val().designatedSeller == this.appUser.name || this.appUser.isAdmin == true)  {
              this.clients.push(this.filteredClients[i]);
            }
          }
          this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),
          map(value =>  value? this._filter(value) : this._filter(""))
          )
        });

        this.route.queryParamMap.subscribe(params => {
          this.prodCategory = params.get('prodCategory');
          this.filteredPedido = [];
          if (this.pedidoIndex>=0 && this.pedido) {
            for (let i=0;i<this.pedido[this.pedidoIndex].payload.val().products.length;i++) {
              if (this.pedido[this.pedidoIndex].payload.val().products[i].product.prodCategory == this.prodCategory)  {
                this.filteredPedido.push(this.pedido[this.pedidoIndex].payload.val().products[i]);
              }
            }
            if (this.filteredPedido.length == 0) {
              for (let i=0;i<this.pedido[this.pedidoIndex].payload.val().products.length;i++)
                this.filteredPedido.push(this.pedido[this.pedidoIndex].payload.val().products[i]);
            }
          }
          this.showedProducts = this.filteredPedido;
          this.filter(this.prodQuery);
          console.log("len", this.pedido.length)
          this.cartQuantities = new Array(this.pedido.length).fill(0);
          console.log("this.cartQuantities", this.cartQuantities)
        });

      });



    });
  }

  sortData(sort: Sort) {
    const data = this.showedProducts;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return this.compare(a.product.title, b.product.title, isAsc);
        case 'quantity': return this.compare(a.quantity, b.quantity, isAsc);
        case 'unitPrice': return this.compare(a.discountPrice, b.discountPrice, isAsc);
        case 'totalPriceProduct': return this.compare(a.discountPrice*a.quantity, b.discountPrice*b.quantity, isAsc);

        default: return 0;
      }
    });
  }

  getClientCategory() {
    return this.pedidosService.getClientCategory(this.clientFantasyName);
  }

  getTitle(item: any) {
    return item.title;
  }

  getQuantity(item: any) {
    if (!this.pedido) return 0;
    for (let i=0;i<this.pedido[this.pedidoIndex].payload.val().products.length;i++) {
      if (this.pedido[this.pedidoIndex].payload.val().products[i].product.title == item.title) return this.pedido[this.pedidoIndex].payload.val().products[i].quantity;
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

  filter(prodQuery: string) {
    this.prodQuery = prodQuery;
    if (prodQuery=='') {
      this.showedProducts = this.filteredPedido;
      return
    }
    this.showedProducts = (prodQuery) ?
    this.showedProducts.filter((p: { product: { title: string; }; }) => p.product.title.toLowerCase().includes(prodQuery.toLowerCase())) :
    this.showedProducts;
  }

  updatePedidoItemQuantity(pedido: any, product: any, change: number){
    this.sended = false;
    this.pedidosService.updatePedidoItemQuantity(pedido, product, change, this.pedidoIndex);
  }

  getTotal() {
    if (!this.pedido) return 0;
    let total = 0;
    if (!this.pedido[this.pedidoIndex]) return 0;
    for (let i=0;i<this.pedido[this.pedidoIndex].payload.val().products.length;i++) {
      total += this.pedido[this.pedidoIndex].payload.val().products[i].quantity * this.pedido[this.pedidoIndex].payload.val().products[i].discountPrice;
    }
    return total;
  }

  getTotalUnits() {
    if (this.pedidoIndex && this.pedido && this.pedido.length > this.pedidoIndex) {
      return this.pedido[this.pedidoIndex].payload.val().pedidoItemsCount;
    }
    else return 0;
  }

  sendPedido() {
    if (this.pedido[this.pedidoIndex].payload.val().pedidoItemsCount == 0) {
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

    let send = false;
    for (let i=0;i<this.clients.length;i++) {
      if (this.clientFantasyName == this.clients[i].payload.val().fantasyName)
      send = true;
    }
    if (send) {
      if (confirm('Está segur@ que quiere enviar el pedido? No podrá modificarlo')) {
        this.sended = true;
        this.pedidosService.sendPedido(this.pedido, this.clientFantasyName, this.iva);
        this.clientFantasyName = "";
        this.router.navigateByUrl('/pedidos/pedidos');
        this.pedidosService.resetPedido(this.pedidoIndex);
      }
      return;
    }
    confirm('El cliente es incorrecto')
  }

  reset() {
    if (confirm('Está segur@ que quiere anular el pedido que no ha enviado?')) {
      this.pedidosService.resetPedido(this.pedidoIndex);
    }
  }

  discount(e: any, p: any, disc: number) {
    this.pedidosService.discount(this.pedido, p, disc);
    //p.inputValue=discount; //<-----this will add new property to your existing object with input value.
  }

  updatePrices() {
    if (this.pedidoIndex) {
      this.pedidosService.updatePrices(this.pedido[this.pedidoIndex], this.clientFantasyName); //this.pedidoIndex en vez del 0
    }
  }
}
