import { StockService } from '../services/stock.service';
import { OrdersService } from '../services/orders.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { DatePipe } from '@angular/common'
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { jsPDF } from "jspdf";
import { ClientsService } from '../services/clients.service';
import { MatPaginator } from '@angular/material/paginator';


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
  orders: any[];
  clients: any;
  userOrders: any[] = [];
  titles: string[]=[];
  subscription: Subscription;
  filteredProduct:any[];
  filteredOrders:any[];
  currentItemsToShow:any[];
  dateRangefilteredOrders:any[];
  datefilteredOrders:any[];
  products:any[];
  date: any;
  dateValue: string;
  clientValue: string;
  sellerValue: string;
  ordersNotAproved: number = 0;
  notAprovedOrders: any[] = [];

  title: string;
  quantity: number;
  aproved: string[] = ["NO", "SI"];
  selected: string = "NO";
  query: {client: string, seller: string, date: string, dateRange: {start: Date, end: Date}} = {client: "", seller: "", date: "", dateRange: {start: new Date(2017, 1, 1), end: new Date(2040, 1, 1)}}

  aproveFirst: boolean = false;
  isExpanded: boolean = false;
  changeCheckbox: boolean = false;
  userClients: string[];

  constructor(public ordersService: OrdersService,
  private productService: ProductService,
  private route: ActivatedRoute,
  private clientsService: ClientsService,
  private auth: AuthService, public datepipe: DatePipe,
  public stockService: StockService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  ngOnInit(){
    this.filter("");
    this.subscription = this.ordersService.getAll().subscribe(orders => {
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
        this.clientsService.getAll().subscribe(clients => {
          this.clients = clients;
          this.userClients = [];
          for (let i=0;i<this.clients.length;i++) {
            if (this.clients[i].payload.val().designatedSeller == this.appUser.name) this.userClients.push(this.clients[i].payload.val().fantasyName)
          }
          this.orders =  orders;
          this.userOrders = [];
          for (let i=0;i<this.orders.length;i++) {
            if (this.appUser && (this.appUser.isAdmin || this.orders[i].payload.val().order.sellerName == this.appUser.name || this.isClientInUserClients(this.orders[i].payload.val().clientFantasyName, this.userClients))) {
              this.userOrders.push(this.orders[i]);
              if (this.orders[i].payload.val().aproved == false) {
                this.notAprovedOrders.push(this.orders[i].payload.val());
                this.ordersNotAproved += 1;
              }
            }
          }

          this.dateRangefilteredOrders = this.datefilteredOrders = this.filteredOrders = this.userOrders;
          //this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length})

          //genera el string para la fecha de HOY
          let today = new Date().getDate().toString();
          let mon = new Date().getMonth() +1;
          let year = new Date().getFullYear();
          let month = mon.toString();
          if (mon < 10) {
            month = "0" + mon.toString();
          }
          // this.filterByDate(today + "/" + month); //se abre con los pedidos de hoy
          this.dateValue = today + "/" + month + "/" + year;
          this.filterByDate( this.dateValue); //se abre con los pedidos de hoy

          //this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length})
          if (this.ordersService.clientFantasyName) { // esto es para desde clientes ver los cobros de un cliente en particular
            this.dateValue = "";
            this.clientValue = this.ordersService.clientFantasyName; // idem
            this.filter(this.ordersService.clientFantasyName); // idem
            this.ordersService.clientFantasyName = ""; // idem
            this.filterByDate("");
          }

        });
      });
    });
    //this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length})
    this.clientsService.getAll().subscribe(clients => {
      this.clients = clients;
    });
  }

  filter(query: string) {
    this.query.client = query;
    this.filteredOrders = [];
    for (let i=0;i<this.userOrders.length;i++) {
      if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(query.toLowerCase())
      && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
      && this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(this.query.date) )
      this.filteredOrders.push(this.orders[i]);
    }
    this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length});

    if (this.paginator) this.paginator.pageIndex = 0;
  }

  filterBySeller(query: string) {
    this.query.seller = query;
    this.filteredOrders = [];
    for (let i=0;i<this.userOrders.length;i++) {
      if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(this.query.client.toLowerCase())
      && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(query.toLowerCase())
      && this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(this.query.date) ) {
        this.filteredOrders.push(this.userOrders[i])
      }
    }
    this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());

    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  filterByDate(query: string) {
    this.query.date = query;
    this.filteredOrders = [];
    for (let i=0;i<this.userOrders.length;i++) {
      if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(this.query.client.toLowerCase())
      && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
      && this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(query) )
      this.filteredOrders.push(this.userOrders[i]);
    }
    this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());

    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  searchDateRange(range: any) {
    if (range.start) {
      this.filteredOrders = [];
      for (let i=0;i<this.userOrders.length;i++) {
        if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(this.query.client.toLowerCase())
        && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
        && this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(this.query.date) )
        this.filteredOrders.push(this.userOrders[i]);
      }
      this.filteredOrders = (range) ?
      this.filteredOrders.filter(p => p.payload.val().date > Date.parse(range.start._d) && p.payload.val().date < Date.parse(range.end._d)):
      this.filteredOrders;
      this.query.dateRange.start = new Date(Date.parse(range.start?._d));
      this.query.dateRange.end = new Date(Date.parse(range.end?._d));
    }
    // this.query.dateRange.start = new Date(Date.parse(range.start?._d));
    // this.query.dateRange.end = new Date(Date.parse(range.end?._d));
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length});
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
        total += this.ordersService.getTotalAmount(order.payload.val().order.products);
      });
    }
    return total;
  }

  // removeOrder(orderId: any) {
  //   this.ordersService.removeOrder(orderId);
  // }

  aprove(order: any) {
    if (confirm('Está segur@ que quiere aprobar el pedido para que pueda ser entregada la mercadería?')) {
      this.stockService.aprove(order);
      this.ordersService.aprove(order);
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
    this.filteredOrders = this.userOrders;
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 20, length: this.filteredOrders.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  isOrderInDebt(order: any) {
    return this.ordersService.isOrderInDebt(order);
  }

  exportAsPDF(order: any)  {
    if (confirm('Descargar PDF')) {
      let myDate = new Date(order.payload.val().date);
      var dd = String(myDate.getDate()).padStart(2, '0');
      var mm = String(myDate.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = myDate.getFullYear();
      let date = dd + '/' + mm + '/' + yyyy;

      const line1 = 30
      const line2 = line1 + 10
      const line3 = line2 + 10

      var doc = new jsPDF();
      doc.setFontSize(10);
      doc.text('GENTECH MAR DEL PLATA', 10, 20);
      doc.text('FECHA DEL PEDIDO: ' + date, 80, 20);
      doc.text('FACT Nº: ' +  order.payload.val().orderNumber, 170, 20);
      doc.text('CLIENTE: ' + order.payload.val().clientFantasyName, 10, line1);
      doc.text('VENDEDOR: ' + order.payload.val().order.sellerName, 80, line1);
      doc.text('---------------------------------------------------------------------------------------------------------------------------------------------------------------------', 10, line1+5);
      doc.text('Cantidad', 10, line2);
      doc.text('Producto', 30, line2);
      let posX = 0;
      if (this.ordersService.getClientCategory(order.payload.val().clientFantasyName) != "Gimnasio" && this.ordersService.getClientCategory(order.payload.val().clientFantasyName) != "PVP") {
        doc.text('Importe+iva', 185, line2);
      }
      else {
        posX = 30
      }
      doc.text('Importe/uni', 125 + posX, line2);
      doc.text('Importe', 155 + posX, line2);


      let cont = 0;
      for (let i=0;i<order.payload.val().order.products.length;i++) {
        if (order.payload.val().order.products[i].quantity != 0) {
          let total = order.payload.val().order.products[i].discountPrice * order.payload.val().order.products[i].quantity
          doc.text(order.payload.val().order.products[i].quantity.toString(), 10, line3 + 10*cont);
          doc.text(order.payload.val().order.products[i].product.title, 30, line3 + 10*cont);
          posX = 0;
          if (this.ordersService.getClientCategory(order.payload.val().clientFantasyName) != "Gimnasio" && this.ordersService.getClientCategory(order.payload.val().clientFantasyName) != "PVP") {
            doc.text("$"+(total * (1+order.payload.val().iva/100)).toFixed(1), 185, line3 + 10*cont);
          }
          else {
            posX = 30
          }
          doc.text("$"+order.payload.val().order.products[i].discountPrice.toFixed(1), 125 + posX, line3 + 10*cont);
          doc.text("$"+total.toFixed(1), 155 + posX, line3 + 10*cont);
          cont +=1;
        }
      }

      let footerVertPos = line3 + 10 * cont + 10;
      doc.text('---------------------------------------------------------------------------------------------------------------------------------------------------------------------', 10, footerVertPos-5);
      if (this.ordersService.getClientCategory(order.payload.val().clientFantasyName) != "Gimnasio" && this.ordersService.getClientCategory(order.payload.val().clientFantasyName) != "PVP") {
        doc.text("TOTAL CON IVA " +order.payload.val().iva+"%       $"    + (this.ordersService.getTotalAmount(order.payload.val().order.products)*(1 + order.payload.val().iva/100)).toFixed(1), 10, footerVertPos);
      }
      else doc.text("TOTAL $"    + (this.ordersService.getTotalAmount(order.payload.val().order.products)*(1 + order.payload.val().iva/100)).toFixed(1), 10, footerVertPos);

      // Save the PDF
      doc.save('order.pdf');
    }
  }

  updateSendedStatus(order: any) {
    this.ordersService.updateSendedStatus(order);
  }

  remove(order: any) {
    if (confirm('Está segur@ que quiere eliminar este pedido? Se restará el monto del pedido a la deuda del cliente')) {
      //this.clientsService.addPaymentAmount(order.payload.val().clientFantasyName, order.payload.val().debt)
      this.ordersService.removeOrder(order);
    }
  }

  cleanDebt(order: any) {
    if (confirm('Está segur@ que quiere eliminar la DEUDA de este pedido? no modificará la deuda del cliente')) {
      this.ordersService.cleanDebt(order);
    }
  }

  isClientInUserClients(clientFantasyName: string, userClients: string[]): boolean {
    for (let i=0;i<userClients.length;i++) {
      if (clientFantasyName == userClients[i]) {
        return true;
      }
    }
    return false;
  }
}


