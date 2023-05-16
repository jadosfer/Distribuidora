import { StockService } from '../services/stock.service';
import { OrdersService } from '../services/orders.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { DatePipe } from '@angular/common'
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { jsPDF } from "jspdf";
import { MatPaginator } from '@angular/material/paginator';
import { Subscription, from } from 'rxjs';
import { TOLERATED_DAYS } from '../constants';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  @ViewChild(MatPaginator) paginator: MatPaginator;

  appUser: AppUser;

  order: any;
  recentUserOrders: any[] = [];
  userOrders: any[] = [];
  orders: any[];
  filteredProduct:any[];
  filteredOrders:any[];
  currentItemsToShow:any[];
  dateRangefilteredOrders:any[];
  datefilteredOrders:any[];
  date: any;
  dateValue: string;
  clientValue: string;
  sellerValue: string;
  ordersNotAproved: number = 0;
  notAprovedOrders: any[] = [];
  query: {client: string, seller: string, date: string, dateRange: {start: Date, end: Date}} = {client: "", seller: "", date: "", dateRange: {start: new Date(2017, 1, 1), end: new Date(2040, 1, 1)}}

  isExpanded: boolean = false;
  debtWarning: boolean = false;
  userClients: string[];
  debtors: any[];

  subscription: Subscription;
  subscription2: Subscription;
  orderDetail: any
  openAccordion: number = -1;

  constructor(
    public ordersService: OrdersService,
    private auth: AuthService,
    public datepipe: DatePipe,
    public stockService: StockService,
    private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  ngOnInit(){
    this.orders = this.ordersService.orders
    this.subscription = this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      //this.appUser = {name : "Natalia Guevara"}
      this.ordersService.getAllOrders().subscribe((orders: any) => {
        this.orders = orders;
        this.userClients = this.ordersService.getUserClients(this.appUser.name);
        this.recentUserOrders = [];
        this.userOrders = [];
        this.debtors = [];
        this.dateRangefilteredOrders = [];
        this.currentItemsToShow = [];
        this.notAprovedOrders = [];
        this.ordersNotAproved = 0;
        for (let i=0;i<this.orders.length;i++) {
          let isUserOrder = this.orders[i].payload.val().seller == this.appUser.name;
          let isUserClient = this.isClientInUserClients(this.orders[i].payload.val().fantasyName, this.userClients);
          let isRecentOrder = Date.now() - this.orders[i].payload.val().date < TOLERATED_DAYS*24*60*60*1000; //dias mora
          if (this.appUser && (this.appUser.isAdmin || this.appUser.isSalesManager || isUserOrder || isUserClient)) {
            this.userOrders.push(this.orders[i]);
            if (this.orders[i].payload.val().aproved == false) {
              this.notAprovedOrders.push(this.orders[i].payload.val());
              this.ordersNotAproved += 1;
            }
          }
          if (this.appUser && (this.appUser.isAdmin || this.appUser.isSalesManager || isUserOrder || isUserClient) && isRecentOrder) {
            this.recentUserOrders.push(this.orders[i]);
          }
        }

        for (let i=0;i<this.recentUserOrders.length;i++) {
          if (this.ordersService.isClientInDebt(this.recentUserOrders[i].payload.val().fantasyName, this.recentUserOrders)) {
            this.debtors = [];
            let date = new Date(this.recentUserOrders[i].payload.val().date)
            this.debtors.push({
              "debtorName": this.recentUserOrders[i].payload.val().fantasyName,
              "orderDate": date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
              "orderDebt": this.recentUserOrders[i].payload.val().amountWithIva
            });
            this.debtWarning = true;
          }
        }
        this.dateRangefilteredOrders = this.datefilteredOrders = this.filteredOrders = this.recentUserOrders; //ver que hace??
        this.currentItemsToShow = this.filteredOrders;

        //genera el string para la fecha de HOY
        let today = new Date().getDate().toString();
        let mon = new Date().getMonth() +1;
        let year = new Date().getFullYear();
        let month = mon.toString();
        if (mon < 10) {
          month = "0" + mon.toString();
        }
        //this.filterByDate(today + "/" + month); //se abre con los pedidos de hoy
        this.dateValue = today + "/" + month + "/" + year;
        this.filterByDate( this.dateValue); //se abre con los pedidos de hoy

        this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length})
        if (this.ordersService.fantasyName) { // esto es para desde clientes ver los cobros de un cliente en particular
          this.dateValue = "";
          this.clientValue = this.ordersService.fantasyName; // idem
          this.filter(this.ordersService.fantasyName); // idem
          this.ordersService.fantasyName = ""; // idem
          this.filterByDate("");
        }
      })

      // //genera el string para la fecha de HOY
      // let today = new Date().getDate().toString();
      // let mon = new Date().getMonth() +1;
      // let year = new Date().getFullYear();
      // let month = mon.toString();
      // if (mon < 10) {
      //   month = "0" + mon.toString();
      // }
      // //this.filterByDate(today + "/" + month); //se abre con los pedidos de hoy
      // this.dateValue = today + "/" + month + "/" + year;
      // this.filterByDate( this.dateValue); //se abre con los pedidos de hoy

      // this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length})
      // if (this.ordersService.fantasyName) { // esto es para desde clientes ver los cobros de un cliente en particular
      //   this.dateValue = "";
      //   this.clientValue = this.ordersService.fantasyName; // idem
      //   this.filter(this.ordersService.fantasyName); // idem
      //   this.ordersService.fantasyName = ""; // idem
      //   this.filterByDate("");
      // }

      //---------------------------------------------------------
      // if (this.orders[0].payload.val().order) { //borrar luego
      //   this.ordersService.createOrdersdetails(this.orders)
      // }
      //---------------------------------------------------------

    });
    //this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length})
    // this.ordersService.getAllProducts().subscribe(clients => {
    //   this.clients = clients;
    // });

  }

  expandOrderDetail(order: any, i: number) {
    this.openAccordion = (this.openAccordion === i) ? -1 : i
    this.orderDetail = this.ordersService.getOrderDetail(order.payload.val().orderDetailKey).payload.val();
    console.log('this.orderDetail', this.orderDetail);
  }

  filter(query: string) {
    this.query.client = query;
    this.filteredOrders = [];
    for (let i=0;i<this.userOrders.length;i++) {
      if (this.userOrders[i].payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())
      && this.userOrders[i].payload.val().seller.toLowerCase().includes(this.query.seller.toLowerCase())
      && this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(this.query.date) )
      //this.filteredOrders.push(this.orders[i]);
      this.filteredOrders.push(this.userOrders[i]);
    }
    this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length});

    if (this.paginator) this.paginator.pageIndex = 0;
  }

  filterBySeller(query: string) {
    this.query.seller = query;
    this.filteredOrders = [];
    for (let i=0;i<this.userOrders.length;i++) {
      if (this.userOrders[i].payload.val().fantasyName.toLowerCase().includes(this.query.client.toLowerCase())
      && this.userOrders[i].payload.val().seller.toLowerCase().includes(query.toLowerCase())
      && this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(this.query.date) ) {
        this.filteredOrders.push(this.userOrders[i])
      }
    }
    this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());

    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  filterByDate(query: string) {
    this.query.date = query;
    this.filteredOrders = [];
    for (let i=0;i<this.userOrders.length;i++) {
      if (this.userOrders[i].payload.val().fantasyName.toLowerCase().includes(this.query.client.toLowerCase())
      && this.userOrders[i].payload.val().seller.toLowerCase().includes(this.query.seller.toLowerCase())
      && this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(query) )
      this.filteredOrders.push(this.userOrders[i]);
    }
    this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());

    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  searchDateRange(range: any) {
    if (range.start) {
      this.filteredOrders = [];
      for (let i=0;i<this.userOrders.length;i++) {
        if (this.userOrders[i].payload.val().fantasyName.toLowerCase().includes(this.query.client.toLowerCase())
        && this.userOrders[i].payload.val().seller.toLowerCase().includes(this.query.seller.toLowerCase())
        && this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(this.query.date) )
        this.filteredOrders.push(this.userOrders[i]);
      }
      this.filteredOrders = (range) ?
      this.filteredOrders.filter(p => p.payload.val().date > Date.parse(range.start._d) && p.payload.val().date < Date.parse(range.end._d)):
      this.filteredOrders;
      this.query.dateRange.start = new Date(Date.parse(range.start?._d));
      this.query.dateRange.end = new Date(Date.parse(range.end?._d));
    }
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  onPageChange($event: any) {
    this.currentItemsToShow = this.filteredOrders.slice(
      $event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize
    );
  }

  getTitle(item: any) {
    return item.title;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  getTotal() {
    let total = 0;
    if (this.filteredOrders) {
      this.filteredOrders.forEach(order => {
        total += parseFloat(order.payload.val().amountWithIva);
      });
    }
    return total;
  }

  aprove(order: any) {
    if (confirm('Está segur@ que quiere aprobar el pedido para que pueda ser entregada la mercadería?')) {
      if (order.payload.val().clientInDebt && !this.appUser.isOwner) return
      this.stockService.aprove(order);
      this.ordersService.aproveOrder(order);
    }
  }

  clearRange() {
    this.range.setValue({
      start: null,
      end: null
    });
    this.sellerValue = "";
    this.clientValue = "";
    this.dateValue = "";
    this.filterByDate( this.dateValue);
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length});
    if (this.paginator) this.paginator.pageIndex = 0;

  }

  isOrderInDebt(order: any) {
    return this.ordersService.isOrderInDebt(order);
  }

  toggleAccordion(order: any) {
    this.dateValue = "";
    this.query.client = "";
    this.query.date = "";
    let result = this.userOrders.filter((o) => {
      return o.payload.val().date == order.date
    });
    this.currentItemsToShow = result
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  exportAsPDF(order: any)  {
    let orderProducts = this.ordersService.getOrderDetail(order.payload.val().orderDetailKey).payload.val().products
    let myDate = new Date(order.payload.val().date);
    var dd = String(myDate.getDate()).padStart(2, '0');
    var mm = String(myDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = myDate.getFullYear();
    let date = dd + '/' + mm + '/' + yyyy;

    const line1 = 30
    const line2 = line1 + 10
    const line3 = line2 + 10
    let address = this.ordersService.getAddress(order.payload.val().fantasyName);

    var doc = new jsPDF();
    doc.setFontSize(10);
    doc.text('GENTECH MAR DEL PLATA', 10, 20);
    doc.text('FECHA DEL PEDIDO: ' + date, 70, 20);
    doc.text('FACT Nº: ' +  order.payload.val().orderNumber, 140, 20);
    doc.setFontSize(7);
    doc.text('CLIENTE: ' + order.payload.val().fantasyName, 10, line1);
    doc.text('VENDEDOR: ' + order.payload.val().seller, 70, line1);
    doc.text('DIRECCIÓN: ' +  address, 140, line1);
    doc.setFontSize(10);
    doc.text('---------------------------------------------------------------------------------------------------------------------------------------------------------------------', 10, line1+5);
    doc.text('Cantidad', 10, line2);
    doc.text('Producto', 30, line2);
    let posX = 0;
    if (this.ordersService.getClientCategory(order.payload.val().fantasyName) != "Gimnasio" && this.ordersService.getClientCategory(order.payload.val().fantasyName) != "Kiosko") {
      doc.text('Importe+iva', 185, line2);
    }
    else {
      posX = 30
    }
    doc.text('Importe/uni', 125 + posX, line2);
    doc.text('Importe', 155 + posX, line2);

    let cont = 0;
    for (let i=0;i<orderProducts.length;i++) {
      if (orderProducts[i].quantity != 0) {
        let total = orderProducts[i].discountPrice * orderProducts[i].quantity
        doc.text(orderProducts[i].quantity.toString(), 10, line3 + 10*cont);
        doc.text(orderProducts[i].title, 30, line3 + 10*cont);
        posX = 0;
        if (this.ordersService.getClientCategory(order.payload.val().fantasyName) != "Gimnasio" && this.ordersService.getClientCategory(order.payload.val().fantasyName) != "Kiosko") {
          doc.text("$"+(total * (1+order.payload.val().iva/100)).toFixed(1), 185, line3 + 10*cont);
        }
        else {
          posX = 30
        }
        doc.text("$"+orderProducts[i].discountPrice.toFixed(1), 125 + posX, line3 + 10*cont);
        doc.text("$"+total.toFixed(1), 155 + posX, line3 + 10*cont);
        cont +=1;
      }
    }

    let footerVertPos = line3 + 10 * cont + 10;
    doc.text('---------------------------------------------------------------------------------------------------------------------------------------------------------------------', 10, footerVertPos-5);
    if (this.ordersService.getClientCategory(order.payload.val().fantasyName) != "Gimnasio" && this.ordersService.getClientCategory(order.payload.val().fantasyName) != "Kiosko") {
      doc.text("TOTAL CON IVA " +order.payload.val().iva+"%       $"    + (this.ordersService.getTotalAmount(orderProducts)*(1 + order.payload.val().iva/100)).toFixed(1), 10, footerVertPos);
    }
    else doc.text("TOTAL $"    + (this.ordersService.getTotalAmount(orderProducts)*(1 + order.payload.val().iva/100)).toFixed(1), 10, footerVertPos);

    // Save the PDF
    doc.save(`${order.payload.val().fantasyName} ${date}.pdf`);

  }

  remove(order: any) {
    if (confirm('Está segur@ que quiere eliminar este pedido? Se restará el monto del pedido a la deuda del cliente')) {
      this.ordersService.removeOrder(order);
      // this.filteredOrders = this.filteredOrders.filter(o => o.key != order.key);
      // this.currentItemsToShow = this.currentItemsToShow.filter(o => o.key != order.key);
    }
  }

  isClientInUserClients(fantasyName: string, userClients: string[]): boolean {
    for (let i=0;i<userClients.length;i++) {
      if (fantasyName.toLowerCase().includes(userClients[i].toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  downloadAll(orders: any) {
    orders.forEach((order: any) => {
      this.exportAsPDF(order)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


