import { StockService } from '../services/stock.service';
import { OrdersService } from '../services/orders.service';
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
import { jsPDF } from "jspdf";
//import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ClientsService } from '../services/clients.service';


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

  appUser: AppUser;

  order: any;
  orders: any[];
  clients: any;
  userOrders: any[] = [];
  titles: string[]=[];
  subscription: Subscription;
  filteredProduct:any[];
  filteredOrders:any[];
  dateRangefilteredOrders:any[];
  datefilteredOrders:any[];
  products:any[];
  date: any;
  dateValue: string;
  clientValue: string;
  sellerValue: string;

  title: string;
  quantity: number;
  sortedData: any[];
  aproved: string[] = ["NO", "SI"];
  // paid: string[] = ["NO", "SI"];
  selected: string = "NO";

  aproveFirst: boolean = false;
  isExpanded: boolean = false;

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
        this.orders =  orders;
        this.userOrders = [];
        for (let i=0;i<this.orders.length;i++) {
          if (this.appUser && (this.appUser.isAdmin || this.orders[i].payload.val().order.sellerName == this.appUser.name)) {
            this.userOrders.push(this.orders[i]);
          }
        }
        this.dateRangefilteredOrders = this.datefilteredOrders = this.filteredOrders = this.userOrders;
      });
    });
    this.clientsService.getAll().subscribe(clients => {
      this.clients = clients;
    });
  }

  filter(query: string) {
    if (query != "") {
      this.filteredOrders = (query) ?
      this.filteredOrders.filter(p => p.payload.val().clientFantasyName.toLowerCase().includes(query.toLowerCase())) :
      this.filteredOrders;
    }
    else this.filteredOrders = this.userOrders;
  }

  filterBySeller(query: string) {
    if (query != "") {
      this.filteredOrders = (query) ?
      this.filteredOrders.filter(p => p.payload.val().order.sellerName.toLowerCase().includes(query.toLowerCase())) :
      this.filteredOrders;
    }
    else this.filteredOrders = this.userOrders;
  }

  filterByDate(query: string) {
    if (query != "") {
      this.filteredOrders = (query) ?
      this.filteredOrders.filter(p => this.datepipe.transform(p.payload.val().creationDate, 'dd/MM/yyyy HH:mm')?.includes(query)):
      this.filteredOrders;
    }
    else this.filteredOrders = this.userOrders;
  }

  sortData(sort: Sort) {
    const data = this.filteredOrders;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'client': return this.compare(a.payload.val().clientFantasyName, b.payload.val().clientFantasyName, isAsc);
        case 'seller': return this.compare(a.payload.val().order.sellerName, b.payload.val().order.sellerName, isAsc);
        case 'date': return this.compare(a.payload.val().creationDate, b.payload.val().creationDate, isAsc);
        case 'import': return this.compare(this.ordersService.getTotalAmount(a.payload.val().order.products), this.ordersService.getTotalAmount(b.payload.val().order.products), isAsc);
        case 'iva': return this.compare(a.payload.val().iva, b.payload.val().iva, isAsc);
        case 'debt': return this.compare(a.payload.val().debt, b.payload.val().debt, isAsc);
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

  getPaid(order: any) {
    if (order.payload.val().aproved == "SI") {
      if (confirm('Está segur@ que quiere dar por pagado el pedido?')) {
        this.ordersService.getPaid(order);
      }
    }
    else alert("Debe aprobar el pedido antes de darlo por cobrado");
  }

  searchDateRange(range: any) {
    if (range.start) {
      this.filteredOrders = (range) ?
      this.filteredOrders.filter(p => p.payload.val().creationDate > Date.parse(range.start._d) && p.payload.val().creationDate < Date.parse(range.end._d)):
      this.filteredOrders;
    }
    else this.filteredOrders = this.userOrders;
  }

  clearRange() {
    this.range.setValue({
      start: null,
      end: null
    });
    this.clientValue = "";
    this.dateValue = "";
    this.filteredOrders = this.userOrders;
  }

  isOrderInDebt(order: any) {
    return this.ordersService.isOrderInDebt(order);
  }

  exportAsPDF(order: any)  {
    if (confirm('Descargar PDF')) {
      let myDate = new Date(order.payload.val().creationDate);
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
      doc.text('CLIENTE: ' + order.payload.val().clientFantasyName, 10, line1);
      doc.text('VENDEDOR: ' + order.payload.val().order.sellerName, 80, line1);
      doc.text('---------------------------------------------------------------------------------------------------------------------------------------------------------------------', 10, line1+5);
      doc.text('Cantidad', 10, line2);
      doc.text('Producto', 30, line2);
      doc.text('Importe/uni', 125, line2);
      doc.text('Importe', 155, line2);
      doc.text('Importe+iva', 185, line2);

      let cont = 0;
      for (let i=0;i<order.payload.val().order.products.length;i++) {
        if (order.payload.val().order.products[i].quantity != 0) {
          let total = order.payload.val().order.products[i].discountPrice * order.payload.val().order.products[i].quantity
          doc.text(order.payload.val().order.products[i].quantity.toString(), 10, line3 + 10*cont);
          doc.text(order.payload.val().order.products[i].product.title, 30, line3 + 10*cont);
          doc.text("$"+order.payload.val().order.products[i].discountPrice.toFixed(1), 125, line3 + 10*cont);
          doc.text("$"+total.toFixed(1), 155, line3 + 10*cont);
          doc.text("$"+(total * (1+order.payload.val().iva/100)).toFixed(1), 185, line3 + 10*cont);
          cont +=1;
        }
      }

      let footerVertPos = line3 + 10 * cont + 10;
      doc.text('---------------------------------------------------------------------------------------------------------------------------------------------------------------------', 10, footerVertPos-5);
      doc.text("TOTAL CON IVA " +order.payload.val().iva+"%       $"    + (this.ordersService.getTotalAmount(order.payload.val().order.products)*(1 + order.payload.val().iva/100)).toFixed(1), 10, footerVertPos);


      // Save the PDF
      doc.save('order.pdf');
    }
  }

  remove(order: any) {
    if (confirm('Está segur@ que quiere eliminar este pedido? Se restará el monto del pedido a la deuda del cliente')) {
      this.clientsService.addPaymentAmount(order.payload.val().clientFantasyName, order.payload.val().debt)
      this.ordersService.removeOrder(order.key);
    }
  }
}
