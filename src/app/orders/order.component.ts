import { StockService } from './../services/stock.service';
import { Product } from './../models/product';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Sort } from '@angular/material/sort';
import { OrdersService } from '../services/orders.service';
import { ClientsService } from '../services/clients.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  appUser: AppUser;

  myControl = new FormControl();
  filteredOptions:  Observable<any[]>;
  disableSelect = new FormControl(false);
  filtrada: any[];

  clientFantasyName:string="";

  clients:any[] = [];
  filteredClients:any[];
  showedProducts:any;
  prodsCategory: string | null;
  products:any[] = []
  filteredProducts:any[];
  filteredOrder: any;
  prodQuery: string;
  order: any[] = [];
  orderIndex: number;
  OrderId: any;
  disc: number = 0;
  iva: number = 21;
  ivas: number[] = [0, 10.5, 21];

  filteredProduct:any[];
  breakpoint:any;

  title: string;
  quantity: number = 0;
  sortedData: any[];
  sended: boolean = false;
  client: boolean = true;
  orderEmpty: boolean = false;
  mobile:boolean;
  aproved: boolean = true;
  giveRecive: boolean = false;


  constructor(
    public productService: ProductService,
    public route: ActivatedRoute,
    public ordersService: OrdersService,
    public clientsService: ClientsService,
    private auth: AuthService,
    private router: Router
  ) {

    //this.order = this.ordersService.getOrder();
  }

  ngOnInit(){
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.orderIndex = 0;
      this.ordersService.getOrder().subscribe(order => {
        this.order = order;
        if (this.order.length == 0) this.ordersService.createOrder();
        //if (this.order[0]) this.products = this.order[0].payload.val().products;

        this.orderIndex = -1
        for (let i=0;i<this.order.length;i++) {
          if (this.appUser && this.order[i].payload.val().sellerName == this.appUser.name) {
            this.orderIndex = i
            this.products = this.order[this.orderIndex].payload.val().products;
            break
          }
        }
        if (this.appUser && this.orderIndex == -1) {
          this.ordersService.createOrder();
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
          this.prodsCategory = params.get('prodsCategory');
          this.filteredOrder = [];
          if (this.orderIndex>=0 && this.order[0]) {
            for (let i=0;i<this.order[this.orderIndex].payload.val().products.length;i++) {
              if (this.order[this.orderIndex].payload.val().products[i].product.prodsCategory == this.prodsCategory)  {
                this.order[this.orderIndex].payload.val().products[i].quantity = this.products[i].quantity;
                //this.filteredOrder.push(this.order[this.orderIndex].payload.val().products[i]);
                this.filteredOrder.push(this.products[i]);
              }
            }
            if (this.filteredOrder.length == 0) {
              for (let i=0;i<this.order[this.orderIndex].payload.val().products.length;i++) {
                //this.filteredOrder.push(this.order[this.orderIndex].payload.val().products[i]);
                this.filteredOrder.push(this.order[this.orderIndex].payload.val().products[i]);
              }
            }
          }
          this.showedProducts = this.filteredOrder;
          this.filter(this.prodQuery);
          if (!this.prodsCategory) this.showedProducts = this.products;
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
    return this.ordersService.getClientCategory(this.clientFantasyName);
  }

  getTitle(item: any) {
    return item.title;
  }

  getQuantity(item: any) {
    if (!this.order) return 0;
    for (let i=0;i<this.order[this.orderIndex].payload.val().products.length;i++) {
      if (this.order[this.orderIndex].payload.val().products[i].product.title == item.title) return this.order[this.orderIndex].payload.val().products[i].quantity;
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
      this.showedProducts = this.filteredOrder;
      return
    }
    this.showedProducts = (prodQuery) ?
    this.showedProducts.filter((p: { product: { title: string; }; }) => p.product.title.toLowerCase().includes(prodQuery.toLowerCase())) :
    this.showedProducts;
  }

  updateOrderItemQuantity(product: any, change: number, index: number){
    for (let i=0;i<this.products.length;i++) {
      if (product.product.title == this.products[i].product.title) {
        this.products[i].quantity += change;
        //this.ordersService.updateOrderItemQuantity(this.order, product, change, i)
        break
      }
    }
    this.quantity += change;
  }

  sendOrder() {
    this.orderEmpty = true;
    let give = false,recive = false;
    for (let i=0;i<this.products.length;i++) {
      if (this.products[i].quantity > 0) give = true;
      if (this.products[i].quantity < 0) recive = true;
      if (give && recive) {
        this.giveRecive = true;
        setTimeout(()=> {
          this.giveRecive = false;
         }, 1700);
        return;
      }
      if (this.products[i].quantity != 0) {
        this.orderEmpty = false;
      }
    }
    if (this.orderEmpty) return;

    if (this.clientFantasyName == "") {
      this.client = false;
      setTimeout(()=> {
         this.client = true;
        }, 900);
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
        this.ordersService.sendOrder(this.order[this.orderIndex].payload.val().sellerName, this.clientFantasyName, this.iva, this.aproved, this.products, this.quantity);
        this.clientFantasyName = "";
        this.router.navigateByUrl('/orders/orders');
        this.ordersService.resetOrder(this.orderIndex);
      }
      return;
    }
    confirm('El cliente es incorrecto')
  }

  reset() {
    if (confirm('Está segur@ que quiere anular el pedido que no ha enviado?')) {
      for (let i=0;i<this.products.length;i++) {
        this.products[i].quantity = 0;
      }
      this.ordersService.resetOrder(this.orderIndex);
    }
  }

  discount(e: any, p: any, disc: number) {
    for (let i=0;i<this.products.length;i++) {
      if (p.product.title == this.products[i].product.title) {
        this.products[i].discount = disc;
        this.products[i].discountPrice = this.products[i].price*(1 - disc/100);
        this.disc = 0 ;
        break
      }
    }
    this.aproved = false;

  }

  updatePrices() {
    let clientCategory = this.getClientCategory();
    let price;
    let products = [];
    if (!this.products) return
    for (let i=0;i<this.products.length;i++) {
      switch (clientCategory) {
        case "":
          this.products[i].price = this.products[i].product.discPrice1;
          this.products[i].discountPrice = this.products[i].product.discPrice1*(1-this.products[i].discount/100) ;
            break;
        case "Distribuidor":
          this.products[i].price = this.products[i].product.discPrice1;
          this.products[i].discountPrice = this.products[i].product.discPrice1*(1-this.products[i].discount/100) ;
          break;
        case "Comercio":
          this.products[i].price = this.products[i].product.discPrice2;
          this.products[i].discountPrice = this.products[i].product.discPrice2*(1-this.products[i].discount/100) ;
          break;
          case "Kiosko":
          this.products[i].price = this.products[i].product.discPrice3;
          this.products[i].discountPrice = this.products[i].product.discPrice3*(1-this.products[i].discount/100) ;
          this.iva = 0;
          break;
        case "Gimnasio":
          this.products[i].price = this.products[i].product.discPrice4;
          this.products[i].discountPrice = this.products[i].product.discPrice4*(1-this.products[i].discount/100) ;
          this.iva = 0;
          break;
      }
    }
    this.showedProducts = this.products;
    if (this.clientFantasyName != "") this.router.navigateByUrl('/orders/order');
  }
  ngOnDestroy() {
    this.ordersService.clearOrder();
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    this.ordersService.clearOrder();
  }
}
