import { StockService } from './../services/stock.service';
import { OrdersService } from '../services/orders.service';
import { Component, OnInit, ViewChild } from '@angular/core';
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
import html2canvas from 'html2canvas';
import { PieChartComponent } from '../pieChart/pieChart.component';
import { ChartOptions, ChartType } from 'chart.js';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  appUser: AppUser;

  order: any;
  orders: any[];
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
  debt: string[] = ["NO", "SI"];
  selected: string = "NO";
  query: {client: string, seller: string, date: string, dateRange: {start: Date, end: Date}} = {client: "", seller: "", date: "", dateRange: {start: new Date(2017, 1, 1), end: new Date(2040, 1, 1)}}

  showGraph: boolean = false;
  currentItemsToShow:any[];
  dashLength: number;

  public data: any;
  public dashData: any = {};
  public dashElement: any = { "seller": null, "totalAmount" : 0}

  public pieChartLabels: Array<string> =[]
  public pieChartData: Array<any> = []
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(164,38,98)'],
    }
  ];

  aproveFirst:boolean = false;

  color: string[] = ['rgba(255,64,129)', 'rgba(63,81,181)', 'rgba(101,115,193)', 'rgba(244,146,199)', 'rgba(196,202,233)'];


  constructor(public ordersService: OrdersService,
  private productService: ProductService,
  private pieChartComponent: PieChartComponent,
  private route: ActivatedRoute,
  private auth: AuthService, public datepipe: DatePipe,
  public stockService: StockService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  ngOnInit(){
    this.subscription = this.ordersService.getAll().subscribe(orders => {
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
        this.orders =  orders;
        this.userOrders = [];
        for (let i=0;i<this.orders.length;i++) {
          if (this.appUser.isAdmin || this.orders[i].payload.val().order.sellerName == this.appUser.name) {
            this.userOrders.push(this.orders[i]);
          }
        }

        this.produceDashData2(this.userOrders);
        this.dateRangefilteredOrders = this.datefilteredOrders = this.filteredOrders = this.userOrders;
        this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: Object.keys(this.dashData).length})
      });
    });
  }

  filter(query: string) {
    this.query.client = query;
    this.filteredOrders = [];
    for (let i=0;i<this.userOrders.length;i++) {
      if (this.userOrders[i].payload.val().clientFantasyName.toLowerCase().includes(query.toLowerCase())
      && this.userOrders[i].payload.val().order.sellerName.toLowerCase().includes(this.query.seller.toLowerCase())
      && this.datepipe.transform(this.userOrders[i].payload.val().date, 'dd/MM/yyyy HH:mm')?.includes(this.query.date) )
      this.filteredOrders.push(this.userOrders[i]);
    }
    this.filteredOrders.filter(p => p.payload.val().date > this.query.dateRange.start.getTime() && p.payload.val().date < this.query.dateRange.start.getTime());

    this.produceDashData2(this.filteredOrders);

    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: Object.keys(this.dashData).length});

    if (this.paginator) this.paginator.pageIndex = 0;
    if (this.showGraph) this.graphic();
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

    this.produceDashData2(this.filteredOrders);

    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: Object.keys(this.dashData).length});
    if (this.paginator) this.paginator.pageIndex = 0;
    if (this.showGraph) this.graphic();
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

    this.produceDashData2(this.filteredOrders);

    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: Object.keys(this.dashData).length});
    if (this.paginator) this.paginator.pageIndex = 0;
    if (this.showGraph) this.graphic();
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

      this.produceDashData2(this.filteredOrders);
    }
    this.query.dateRange.start = new Date(Date.parse(range.start._d));
    this.query.dateRange.end = new Date(Date.parse(range.end._d));
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: Object.keys(this.dashData).length});
    if (this.paginator) this.paginator.pageIndex = 0;
    if (this.showGraph) this.graphic();
  }

  sortData(sort: Sort) {
    const data = this.dashData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {

        //arreglar
        case 'client': return this.compare(a.client, b.client, isAsc);
        case 'seller': return this.compare(a.seller, b.seller, isAsc);
        case 'amount': return this.compare(a.totalAmount, b.totalAmount, isAsc);

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
        total += order.payload.val().amount;
      });
    }
    return total;
  }

  removeOrder(orderId: any) {
    this.ordersService.removeOrder(orderId);
  }

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
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: Object.keys(this.dashData).length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  isOrderInDebt(order: any) {
    return this.ordersService.isOrderInDebt(order);
  }

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (_value: any, ctx: { chart: { data: { labels: { [x: string]: any; }; }; }; dataIndex: string | number; }) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  graphic() {
    this.pieChartLabels = [];
    this.pieChartData = [];
    let categories = this.getCategories(this.filteredOrders);
    this.pieChartLabels = categories;
    let amounts = this.getAmounts(this.filteredOrders, categories);
    this.pieChartData = amounts;
    this.showGraph = true;
  }

  getCategories(orders: any) {
    let categories: string[] = []
    let colors = []
    for (let i=0;i<orders.length;i++) {
      for (let j=0;j<orders[i].payload.val().order.products.length; j++) {
        if (!this.isCategoryIncluded(categories, orders[i].payload.val().order.products[j].product.prodsCategory)) {
          categories.push(orders[i].payload.val().order.products[j].product.prodsCategory)
          let col = this.color.pop()
          if (col) {
            this.pieChartColors[0].backgroundColor.push(col);
          }
        }
      }
    }
    return categories;
  }

  isCategoryIncluded(categories: string[], category: string) {
    for (let i=0;i<categories.length; i++) {
      if (categories[i]==category) return true;
    }
    return false;
  }

  getAmounts(orders: any, categories: string[]) {
    let amounts = [];
    for (let i=0;i<categories.length;i++) {
      let amount = 0;
      for (let j=0;j<orders.length;j++) {
        for (let k=0;k<orders[j].payload.val().order.products.length; k++) {
          if (orders[j].payload.val().order.products[k].product.prodsCategory == categories[i]) {
            amount += parseFloat(orders[j].payload.val().order.products[k].discountPrice)*parseInt(orders[j].payload.val().order.products[k].quantity)*(1+orders[j].payload.val().iva/100)
          }
        }
      }
      amounts.push(amount)
    }
    return amounts;
  }

  getPercentage(data: any){  //porcentaje de la facturacion de cada categoria sobre el total
    let sum=0;
    for (let i=0;i<this.pieChartData.length;i++) {
      sum += this.pieChartData[i];
    }
    return 100*data/sum
  }
  getTotalCategs(){  //facturacion total de las orders filtradas
    let sum=0;
    for (let i=0;i<this.pieChartData.length;i++) {
      sum += this.pieChartData[i];
    }
    return sum
  }

  onPageChange($event: any) {
    this.sortedData = this.dashData.slice(
      $event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize
    );
  }

  //llena en dashData la lista de clientes con el monto total
  produceDashData(dataArray: any) {
    this.dashData = {};
    this.dashElement = {};
    for (let i=0;i<dataArray.length;i++) {
      let total = 0;
      if (this.dashData[dataArray[i].payload.val().clientFantasyName]) {
        total = parseFloat(this.dashData[dataArray[i].payload.val().clientFantasyName].totalAmount)
        + parseFloat(dataArray[i].payload.val().amount);
      }
      else total = dataArray[i].payload.val().amount;

      this.dashElement = { "seller" : dataArray[i].payload.val().order.sellerName, "totalAmount": total}
      this.dashData[dataArray[i].payload.val().clientFantasyName] = this.dashElement;
    }
    this.dashLength = Object.keys(this.dashData).length;
  }

  produceDashData2(dataArray: any) {
    this.dashData = [];
    for (let i=0;i<dataArray.length;i++) {
      if (!this.isClientInDashData(dataArray[i].payload.val().clientFantasyName)) {
        this.dashData.push({
          "client": dataArray[i].payload.val().clientFantasyName, "seller" : dataArray[i].payload.val().order.sellerName, "totalAmount": dataArray[i].payload.val().amount
        })
      }
      else {
        this.adAmount(dataArray[i].payload.val().clientFantasyName, dataArray[i].payload.val().amount);
      }
    }
    this.dashLength = Object.keys(this.dashData).length;
  }

  adAmount(client: string, amount: number) {
    for (let i=0;i<this.dashData.length;i++) {
      if (this.dashData[i].client == client) {
        this.dashData[i].amount += amount;
      }
    }
  }

  isClientInDashData(client: string) {
    for (let i=0;i<this.dashData.length;i++) {
      if (this.dashData[i].client == client) {
        return true;
      }
    }
    return false;
  }
}


