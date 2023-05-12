import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Sort } from '@angular/material/sort';
import { OrdersService } from '../services/orders.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  appUser: AppUser;

  //paginator
  actualPage: number = 0;
  totalPages: number = 1;
  itemsPerPage: number = 10;
  //paginator bootstrap
  currentItemsToShow: any[] = [];

  myControl = new FormControl();
  filteredOptions:  Observable<any[]>;
  disableSelect = new FormControl(false);
  filtrada: any[];

  fantasyName:string="";
  clientCategory: string | null;
  date: any;

  clients:any[] = [];
  filteredClients:any[];
  showedProducts:any;
  prodsCategory: string | null;
  orderProducts:any[] = []
  filteredOrder: any;
  prodQuery: string;
  order: any[] = [];
  orderIndex: number;
  OrderId: any;
  disc: number = 0;
  iva: number = 21;
  ivas: number[] = [0, 10.5, 21];

  title: string;
  quantity: number = 0;
  sortedData: any[];
  client: boolean = true;
  orderEmpty: boolean = false;
  mobile:boolean;
  aproved: boolean = true;
  negative: boolean = false;
  noStock: boolean = false;
  showOrder: boolean = false;
  catNull: boolean = false;

  query: {client: string, seller: string, date: string, dateRange: {start: Date, end: Date}} = {client: "", seller: "", date: "", dateRange: {start: new Date(2017, 1, 1), end: new Date(2040, 1, 1)}}
  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;
  subscription5: Subscription;


  constructor(
    public productService: ProductService,
    public route: ActivatedRoute,
    public ordersService: OrdersService,
    private auth: AuthService,
    private router: Router,
    public utilityService: UtilityService
  ) {

    //this.order = this.ordersService.getOrder();
  }

  ngOnInit(){
    this.subscription = this.ordersService.getOrderNumber().subscribe(orderNumber => {
      if (!orderNumber) this.ordersService.createOrderNumber();
      this.ordersService.orderNumber = orderNumber;
    });

    this.subscription2 = this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.orderIndex = 0;
      this.subscription3 = this.ordersService.getOrder().subscribe(order => {
        this.order = order;
        if (this.order.length == 0) this.ordersService.createOrderEmpty();

        this.orderIndex = -1
        for (let i=0;i<this.order.length;i++) {
          if (this.appUser && this.order[i].payload.val().seller == this.appUser.name) {
            this.orderIndex = i
            this.orderProducts = this.order[this.orderIndex].payload.val().products;
            break
          }
        }
        if (this.appUser && this.orderIndex == -1) {
          this.ordersService.createOrderEmpty();
        }

        this.subscription4 = this.ordersService.getAllClients().subscribe(clients => {
          this.filteredClients = clients;
          this.clients = [];
          for (let i=0;i<this.filteredClients.length;i++) {
            if (this.filteredClients[i].payload.val().designatedSeller == this.appUser.name || this.appUser?.isAdmin == true)  {
              this.clients.push(this.filteredClients[i]);
            }
          }
          this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),
          map(value =>  value? this._filter(value) : this._filter(""))
          )
        });

        this.subscription5 = this.route.queryParamMap.subscribe(params => {
          this.prodsCategory = params.get('prodsCategory');
          this.filteredOrder = [];
          if (this.orderIndex>=0 && this.order[0]) {
            for (let i=0;i<this.order[this.orderIndex].payload.val().products.length;i++) {
              if (this.order[this.orderIndex].payload.val().products[i].product.prodsCategory == this.prodsCategory)  {
                this.order[this.orderIndex].payload.val().products[i].quantity = this.orderProducts[i].quantity;
                this.filteredOrder.push(this.orderProducts[i]);
              }
            }
            if (this.filteredOrder.length == 0) {
              for (let i=0;i<this.order[this.orderIndex].payload.val().products.length;i++) {
                this.filteredOrder.push(this.order[this.orderIndex].payload.val().products[i]);
              }
            }
          }
          this.showedProducts = this.filteredOrder;
          if (!this.prodsCategory) this.showedProducts = this.orderProducts;
          this.actualPage = 0;
          this.refreshPages();
        });
      });
    });
  }

  pickClient(clientCategory: string) {
    // if(!this.clientCategory) {
    //   this.catNull = true;
    //   setTimeout(()=>{
    //     this.catNull = false;
    //   }, 2000)
    // }

    let price;
    let products = [];
    if (!this.orderProducts) return
    for (let i=0;i<this.orderProducts.length;i++) {
      // switch (this.clientCategory) {
        switch (clientCategory) {
        case null:
          // this.orderProducts[i].price = this.orderProducts[i].product.discPrice1;
          // this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice1*(1-this.orderProducts[i].discount/100) ;
          throw Error("Error en el canal de venta");
            break;
        case "Distribuidor":
          this.orderProducts[i].price = this.orderProducts[i].product.discPrice1;
          this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice1*(1-this.orderProducts[i].discount/100) ;
          break;
        case "Comercio":
          this.orderProducts[i].price = this.orderProducts[i].product.discPrice2;
          this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice2*(1-this.orderProducts[i].discount/100) ;
          break;
        case "Kiosko":
          this.orderProducts[i].price = this.orderProducts[i].product.discPrice3;
          this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice3*(1-this.orderProducts[i].discount/100) ;
          this.iva = 0;
          break;
        case "Gimnasio":
          this.orderProducts[i].price = this.orderProducts[i].product.discPrice4;
          this.orderProducts[i].discountPrice = this.orderProducts[i].product.discPrice4*(1-this.orderProducts[i].discount/100) ;
          this.iva = 0;
          break;
      }
    }
    this.showedProducts = this.orderProducts;
    if (this.fantasyName) this.router.navigateByUrl('/orders/order');

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
    this.clientCategory = null;
    const filterValue = value.toLowerCase();
    if (!this.clients) return;
    let listFiltrada = this.clients.filter(client => client.payload.val().fantasyName.toLowerCase().includes(filterValue));
    if (listFiltrada.length > 0) {
      this.clientCategory = listFiltrada[0].payload.val().clientCategory;
      this.pickClient(this.clientCategory!)
    }
    return listFiltrada
  }

  filter(prodQuery: string) {
    this.prodQuery = prodQuery;
    if (prodQuery=='') {
      // this.showedProducts = this.filteredOrder;
      this.showedProducts = this.orderProducts;
      return
    }
    this.showedProducts = (prodQuery) ?
    this.showedProducts.filter((p: { product: { title: string; }; }) => p.product.title.toLowerCase().includes(prodQuery.toLowerCase())) :
    this.showedProducts;
    this.actualPage = 0;
    this.refreshPages();
  }

  updateOrderItemQuantity(product: any, change: number, index: number){
    for (let i=0;i<this.orderProducts.length;i++) {
      if (product.product.title == this.orderProducts[i].product.title) {
        if (this.orderProducts[i].quantity + change < 0) return;
        if (this.orderProducts[i].quantity + change > this.ordersService.getStock(product) ) {
          this.noStock = true;
          setTimeout(()=> {
            this.noStock = false;
           }, 1600);
          return;}
        this.orderProducts[i].quantity += change;
        break
      }
    }
    this.quantity += change;
  }

  orderProductsLength() {
    let result = 0;
    for (let i=0;i<this.orderProducts.length;i++) {
      if (this.orderProducts[i].quantity > 0) {
        result++;
      }
    }
    return result
  }

  beforeShowOrder() {
    this.ordersService.getOrderDetail(this.order[this.orderIndex].key).take(1).subscribe((orderDetail:any) => {
      for (let i=0;i<orderDetail.products.length;i++) {
        if (this.orderProducts[i].quantity > 0 && !this.ordersService.isProductStock(this.orderProducts[i])) {
          return
        }
      }
      this.noStock = true;
        setTimeout(()=> {
          this.noStock = false;
         }, 1600);
        return
    });

    //if (!this.ordersService.isStock(this.order[this.orderIndex], this.orderProducts)) {
    if (true) {
      this.noStock = true;
      setTimeout(()=> {
        this.noStock = false;
       }, 1600);
      return
    }
    this.orderEmpty = true;
    for (let i=0;i<this.orderProducts.length;i++) {
      if (this.orderProducts[i].quantity != 0) {
        this.orderEmpty = false;
      }
    }
    if (this.orderEmpty) return;
    if (this.fantasyName == "") {
      this.client = false;
      setTimeout(()=> {
         this.client = true;
        }, 900);
      return;
    }

    this.showOrder= !this.showOrder;
  }


  createOrder() {
    let clientOk = false;
    for (let i=0;i<this.clients.length;i++) {
      if (this.fantasyName.toLowerCase().includes(this.clients[i].payload.val().fantasyName.toLowerCase()))
      clientOk = true;
    }
    if (clientOk) {
      if (confirm('Está segur@ que quiere crear el pedido? No podrá modificarlo')) {
        let debt = this.ordersService.calcDebtGreatherThanToleratedDays(this.fantasyName);
        this.ordersService.createOrder(this.order[this.orderIndex].payload.val().seller,
          this.fantasyName, this.iva, this.orderProducts, this.quantity, this.date, debt);
        this.fantasyName = "";
        this.router.navigateByUrl('/orders/orders');
        this.ordersService.resetOrder(this.orderIndex);
      }
      return;
    }
    confirm('El cliente es incorrecto')
  }

  reset() {
    if (confirm('Está segur@ que quiere anular el pedido que no ha creado?')) {
      this.quantity = 0;
    for (let i=0;i<this.orderProducts.length;i++) {
      this.orderProducts[i].quantity = 0;
    }
    this.showOrder=false;
    this.ordersService.resetOrder(this.orderIndex);
    this.fantasyName = "";
    }
  }

  discount(e: any, p: any, disc: number) {
    for (let i=0;i<this.orderProducts.length;i++) {
      if (p.product.title == this.orderProducts[i].product.title) {
        this.orderProducts[i].discount = disc;
        this.orderProducts[i].discountPrice = this.orderProducts[i].price*(1 - disc/100);
        this.disc = 0 ;
        break
      }
    }
  }

  updatePrices() {
    // this.clientCategory = null;
  }

  getStock(product: any) {
    return this.ordersService.getStock(product);
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    this.ordersService.clearOrder();
  }

  //funciones paginator bootstrap
  prevPage() {
    if (this.actualPage == 0) return
    this.actualPage -= 1;
    this.refreshPages()
  }

  nextPage() {
    if (this.actualPage == this.totalPages) return
    this.actualPage += 1;
    this.refreshPages();
  }

  refreshPages() {
    this.totalPages = Math.ceil(this.showedProducts.length/this.itemsPerPage);
    this.currentItemsToShow = []
    for (let i = this.actualPage*this.itemsPerPage; i<this.actualPage*this.itemsPerPage + this.itemsPerPage; i++) {
      if (i == this.showedProducts.length) return
      this.currentItemsToShow.push(this.showedProducts[i])
    }
  }
  //funciones paginator bootstrap

  ngOnDestroy() {
    this.ordersService.clearOrder();
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
    this.subscription5.unsubscribe();
  }
}
