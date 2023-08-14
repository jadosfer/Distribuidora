import { StockService } from '../services/stock.service';
import { OrdersService } from '../services/orders.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { jsPDF } from 'jspdf';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { TOLERATED_DAYS } from '../constants';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  @ViewChild(MatPaginator) paginator: MatPaginator;

  appUser: AppUser;

  order: any;
  // orders: any[];
  clients: any;
  recentUserOrders: any[] = [];
  userOrders: any[] = [];
  titles: string[] = [];
  filteredProduct: any[];
  filteredOrders: any[];
  currentItemsToShow: any[];
  dateRangefilteredOrders: any[];
  datefilteredOrders: any[];
  products: any[];
  date: any;
  dateValue: string;
  clientValue: string;
  sellerValue: string;
  ordersNotAproved: number = 0;
  notAprovedOrders: any[] = [];

  title: string;
  quantity: number;
  aproved: string[] = ['NO', 'SI'];
  selected: string = 'NO';
  query: {
    client: string;
    seller: string;
    date: string;
    dateRange: { start: Date; end: Date };
  } = {
    client: '',
    seller: '',
    date: '',
    dateRange: { start: new Date(2017, 1, 1), end: new Date(2040, 1, 1) },
  };

  aproveFirst: boolean = false;
  isExpanded: boolean = false;
  changeCheckbox: boolean = false;
  debtWarning: boolean = false;
  userClients: string[];
  debtors: any[];

  subscription: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  constructor(
    public ordersService: OrdersService,
    private auth: AuthService,
    public datepipe: DatePipe,
    public stockService: StockService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  ngOnInit() {
    this.filter('');
    this.subscription = this.ordersService
      .getAllOrders()
      .subscribe((orders) => {
        this.subscription2 = this.auth.appUser$.subscribe((appUser) => {
          this.appUser = appUser;
          this.subscription3 = this.ordersService
            .getAllClients()
            .subscribe((clients) => {
              this.clients = clients;
              this.userClients = [];
              for (let i = 0; i < this.clients.length; i++) {
                if (
                  this.clients[i].payload.val().designatedSeller ==
                  this.appUser?.name
                )
                  this.userClients.push(
                    this.clients[i].payload.val().fantasyName
                  );
              }
              this.ordersService.orders = orders;
              this.recentUserOrders = [];
              this.userOrders = [];
              this.debtors = [];
              this.dateRangefilteredOrders = [];
              this.currentItemsToShow = [];
              this.notAprovedOrders = [];
              this.ordersNotAproved = 0;
              for (let i = 0; i < this.ordersService.orders.length; i++) {
                let isUserOrder =
                  this.ordersService.orders[i].payload.val().order.sellerName ==
                  this.appUser?.name;
                let isUserClient = this.isClientInUserClients(
                  this.ordersService.orders[i].payload.val().clientFantasyName,
                  this.userClients
                );
                let isRecentOrder =
                  Date.now() - this.ordersService.orders[i].payload.val().date <
                  TOLERATED_DAYS * 24 * 60 * 60 * 1000; //7 dias
                if (
                  this.appUser &&
                  (this.appUser.isAdmin ||
                    this.appUser.isSalesManager ||
                    isUserOrder ||
                    isUserClient)
                ) {
                  this.userOrders.push(this.ordersService.orders[i]);
                  if (
                    this.ordersService.orders[i].payload.val().aproved == false
                  ) {
                    this.notAprovedOrders.push(
                      this.ordersService.orders[i].payload.val()
                    );
                    this.ordersNotAproved += 1;
                  }
                }
                if (
                  this.appUser &&
                  (this.appUser.isAdmin ||
                    this.appUser.isSalesManager ||
                    isUserOrder ||
                    isUserClient) &&
                  isRecentOrder
                ) {
                  this.recentUserOrders.push(this.ordersService.orders[i]);
                }
              }

              for (let i = 0; i < this.recentUserOrders.length; i++) {
                if (
                  this.ordersService.isClientInDebt(
                    this.recentUserOrders[i].payload.val().clientFantasyName,
                    this.recentUserOrders
                  )
                ) {
                  this.debtors = [];
                  let date = new Date(
                    this.recentUserOrders[i].payload.val().date
                  );
                  let debt =
                    Math.round(
                      this.recentUserOrders[i].payload.val().debt * 10
                    ) / 10;
                  this.debtors.push({
                    debtorName:
                      this.recentUserOrders[i].payload.val().clientFantasyName,
                    orderDate:
                      date.getDate() +
                      '/' +
                      date.getMonth() +
                      '/' +
                      date.getFullYear(),
                    orderDebt: debt,
                  });
                  this.debtWarning = true;
                }
              }

              this.dateRangefilteredOrders =
                this.datefilteredOrders =
                this.filteredOrders =
                  this.recentUserOrders; //ver que hace??

              //genera el string para la fecha de HOY
              let today = new Date().getDate().toString();
              let mon = new Date().getMonth() + 1;
              let year = new Date().getFullYear();
              let month = mon.toString();
              if (mon < 10) {
                month = '0' + mon.toString();
              }
              if (this.query.client === "" && this.query.seller === "") {
                this.dateValue = today + '/' + month + '/' + year;
                this.filterByDate(this.dateValue); //se abre con los pedidos de hoy
              }
              else {
                this.filter(this.query.client);
                this.filterBySeller(this.query.seller);
                this.filterByDate(this.query.date);
              }

              this.onPageChange({
                previousPageIndex: 0,
                pageIndex: 0,
                pageSize: 10,
                length: this.filteredOrders.length,
              });
              if (this.ordersService.clientFantasyName) {
                // esto es para desde clientes ver los cobros de un cliente en particular
                this.dateValue = '';
                this.clientValue = this.ordersService.clientFantasyName; // idem
                this.filter(this.ordersService.clientFantasyName); // idem
                this.ordersService.clientFantasyName = ''; // idem
                this.filterByDate('');
              }
              this.currentItemsToShow = this.filteredOrders;
            });
        });
      });
    //this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length})
    // this.ordersService.getAll().subscribe(clients => {
    //   this.clients = clients;
    // });
  }

  filter(query: string) {
    this.query.client = query;
    this.filteredOrders = [];
    for (let i = 0; i < this.userOrders.length; i++) {
      if (
        this.userOrders[i].payload
          .val()
          .clientFantasyName.toLowerCase()
          .includes(query.toLowerCase()) &&
        this.userOrders[i].payload
          .val()
          .order.sellerName.toLowerCase()
          .includes(this.query.seller.toLowerCase()) &&
        this.datepipe
          .transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')
          ?.includes(this.query.date)
      )
        //this.filteredOrders.push(this.ordersService.orders[i]);
        this.filteredOrders.push(this.userOrders[i]);
    }
    this.filteredOrders.filter(
      (p) =>
        p.payload.val().date > this.query.dateRange.start.getTime() &&
        p.payload.val().date < this.query.dateRange.start.getTime()
    );
    this.onPageChange({
      previousPageIndex: 0,
      pageIndex: 0,
      pageSize: 10,
      length: this.filteredOrders.length,
    });

    if (this.paginator) this.paginator.pageIndex = 0;
  }

  filterBySeller(query: string) {
    this.query.seller = query;
    this.filteredOrders = [];
    for (let i = 0; i < this.userOrders.length; i++) {
      if (
        this.userOrders[i].payload
          .val()
          .clientFantasyName.toLowerCase()
          .includes(this.query.client.toLowerCase()) &&
        this.userOrders[i].payload
          .val()
          .order.sellerName.toLowerCase()
          .includes(query.toLowerCase()) &&
        this.datepipe
          .transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')
          ?.includes(this.query.date)
      ) {
        this.filteredOrders.push(this.userOrders[i]);
      }
    }
    this.filteredOrders.filter(
      (p) =>
        p.payload.val().date > this.query.dateRange.start.getTime() &&
        p.payload.val().date < this.query.dateRange.start.getTime()
    );

    this.onPageChange({
      previousPageIndex: 0,
      pageIndex: 0,
      pageSize: 10,
      length: this.filteredOrders.length,
    });
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  filterByDate(query: string) {
    this.query.date = query;
    this.filteredOrders = [];
    for (let i = 0; i < this.userOrders.length; i++) {
      if (
        this.userOrders[i].payload
          .val()
          .clientFantasyName.toLowerCase()
          .includes(this.query.client.toLowerCase()) &&
        this.userOrders[i].payload
          .val()
          .order.sellerName.toLowerCase()
          .includes(this.query.seller.toLowerCase()) &&
        this.datepipe
          .transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')
          ?.includes(query)
      )
        this.filteredOrders.push(this.userOrders[i]);
    }
    this.filteredOrders.filter(
      (p) =>
        p.payload.val().date > this.query.dateRange.start.getTime() &&
        p.payload.val().date < this.query.dateRange.start.getTime()
    );

    this.onPageChange({
      previousPageIndex: 0,
      pageIndex: 0,
      pageSize: 10,
      length: this.filteredOrders.length,
    });
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  searchDateRange(range: any) {
    if (range.start) {
      this.filteredOrders = [];
      for (let i = 0; i < this.userOrders.length; i++) {
        if (
          this.userOrders[i].payload
            .val()
            .clientFantasyName.toLowerCase()
            .includes(this.query.client.toLowerCase()) &&
          this.userOrders[i].payload
            .val()
            .order.sellerName.toLowerCase()
            .includes(this.query.seller.toLowerCase()) &&
          this.datepipe
            .transform(
              this.userOrders[i].payload.val().date,
              'dd/MM/yyyy HH:mm'
            )
            ?.includes(this.query.date)
        )
          this.filteredOrders.push(this.userOrders[i]);
      }
      this.filteredOrders = range
        ? this.filteredOrders.filter(
            (p) =>
              p.payload.val().date > range.start.getTime() &&
              p.payload.val().date < range.end.getTime() + 86400000
          )
        : this.filteredOrders;
      this.query.dateRange.start = range.start;
      this.query.dateRange.end = range.end;
    }
    this.onPageChange({
      previousPageIndex: 0,
      pageIndex: 0,
      pageSize: 10,
      length: this.filteredOrders.length,
    });
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
      this.filteredOrders.forEach((order) => {
        //total += this.ordersService.getTotalAmount(order.payload.val().order.products);
        total += parseFloat(order.payload.val().amount);
      });
    }
    return total;
  }

  aprove(order: any) {
    if (
      confirm(
        'Está segur@ que quiere aprobar el pedido para que pueda ser entregada la mercadería?'
      )
    ) {
      if (order.payload.val().clientInDebt && !this.appUser.isOwner) {
        alert('El cliente tiene deuda. Mauro debe aprobar el pedido');
        return;
      }
      this.stockService.aprove(order);
      this.ordersService.aproveOrder(order);
    }
  }

  clearRange() {
    this.range.setValue({
      start: null,
      end: null,
    });
    this.sellerValue = '';
    this.clientValue = '';
    this.dateValue = '';
    this.filterByDate(this.dateValue);
    this.onPageChange({
      previousPageIndex: 0,
      pageIndex: 0,
      pageSize: 10,
      length: this.filteredOrders.length,
    });
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  isOrderInDebt(order: any) {
    return this.ordersService.isOrderInDebt(order);
  }

  filterNotAprovedOrder(order: any) {
    this.dateValue = '';
    this.query.client = '';
    this.query.date = '';
    let result = this.userOrders.filter((o) => {
      return o.payload.val().date == order.date;
    });
    this.currentItemsToShow = result;
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }

  exportAsPDF(order: any) {
    let myDate = new Date(order.payload.val().date);
    var dd = String(myDate.getDate()).padStart(2, '0');
    var mm = String(myDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = myDate.getFullYear();
    let date = dd + '/' + mm + '/' + yyyy;

    const line1 = 30;
    const line2 = line1 + 10;
    const line3 = line2 + 10;
    let address = this.ordersService.getAddress(
      order.payload.val().clientFantasyName,
      this.clients
    );

    var doc = new jsPDF();
    doc.setFontSize(10);
    doc.text('GENTECH MAR DEL PLATA', 10, 20);
    doc.text('FECHA DEL PEDIDO: ' + date, 70, 20);
    doc.text('FACT Nº: ' + order.payload.val().orderNumber, 140, 20);
    doc.setFontSize(7);
    doc.text('CLIENTE: ' + order.payload.val().clientFantasyName, 10, line1);
    doc.text('VENDEDOR: ' + order.payload.val().order.sellerName, 70, line1);
    doc.text('DIRECCIÓN: ' + address, 140, line1);
    doc.setFontSize(10);
    doc.text(
      '---------------------------------------------------------------------------------------------------------------------------------------------------------------------',
      10,
      line1 + 5
    );
    doc.text('Cantidad', 10, line2);
    doc.text('Producto', 30, line2);
    let posX = 0;
    if (
      this.ordersService.getClientCategory(
        order.payload.val().clientFantasyName
      ) != 'Gimnasio' &&
      this.ordersService.getClientCategory(
        order.payload.val().clientFantasyName
      ) != 'Kiosko'
    ) {
      doc.text('Importe+iva', 185, line2);
    } else {
      posX = 30;
    }
    doc.text('Importe/uni', 125 + posX, line2);
    doc.text('Importe', 155 + posX, line2);

    let cont = 0;
    for (let i = 0; i < order.payload.val().order.products.length; i++) {
      if (order.payload.val().order.products[i].quantity != 0) {
        let total =
          order.payload.val().order.products[i].discountPrice *
          order.payload.val().order.products[i].quantity;
        doc.text(
          order.payload.val().order.products[i].quantity.toString(),
          10,
          line3 + 10 * cont
        );
        doc.text(
          order.payload.val().order.products[i].product.title,
          30,
          line3 + 10 * cont
        );
        posX = 0;
        if (
          this.ordersService.getClientCategory(
            order.payload.val().clientFantasyName
          ) != 'Gimnasio' &&
          this.ordersService.getClientCategory(
            order.payload.val().clientFantasyName
          ) != 'Kiosko'
        ) {
          doc.text(
            '$' + (total * (1 + order.payload.val().iva / 100)).toFixed(1),
            185,
            line3 + 10 * cont
          );
        } else {
          posX = 30;
        }
        doc.text(
          '$' + order.payload.val().order.products[i].discountPrice.toFixed(1),
          125 + posX,
          line3 + 10 * cont
        );
        doc.text('$' + total.toFixed(1), 155 + posX, line3 + 10 * cont);
        cont += 1;
      }
    }

    let footerVertPos = line3 + 10 * cont + 10;
    doc.text(
      '---------------------------------------------------------------------------------------------------------------------------------------------------------------------',
      10,
      footerVertPos - 5
    );
    if (
      this.ordersService.getClientCategory(
        order.payload.val().clientFantasyName
      ) != 'Gimnasio' &&
      this.ordersService.getClientCategory(
        order.payload.val().clientFantasyName
      ) != 'Kiosko'
    ) {
      doc.text(
        'TOTAL CON IVA ' +
          order.payload.val().iva +
          '%       $' +
          (
            this.ordersService.getTotalAmount(
              order.payload.val().order.products
            ) *
            (1 + order.payload.val().iva / 100)
          ).toFixed(1),
        10,
        footerVertPos
      );
    } else
      doc.text(
        'TOTAL $' +
          (
            this.ordersService.getTotalAmount(
              order.payload.val().order.products
            ) *
            (1 + order.payload.val().iva / 100)
          ).toFixed(1),
        10,
        footerVertPos
      );

    // Save the PDF
    doc.save(`${order.payload.val().clientFantasyName} ${date}.pdf`);
  }

  remove(order: any) {
    if (
      confirm(
        'Está segur@ que quiere eliminar este pedido? Se restará el monto del pedido a la deuda del cliente'
      )
    ) {
      this.ordersService.removeOrder(order).then(() => {
        this.filter(this.query.client);
        this.filterBySeller(this.query.seller);
        this.filterByDate(this.query.date);
      });
    }
  }

  cleanDebt(order: any) {
    if (
      confirm(
        'Está segur@ que quiere eliminar la DEUDA de este pedido? no modificará la deuda del cliente'
      )
    ) {
      this.ordersService.cleanDebt(order);
    }
  }

  isClientInUserClients(
    clientFantasyName: string,
    userClients: string[]
  ): boolean {
    for (let i = 0; i < userClients.length; i++) {
      if (
        clientFantasyName.toLowerCase().includes(userClients[i].toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  }

  downloadAll(orders: any) {
    orders.forEach((order: any) => {
      this.exportAsPDF(order);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }
}
