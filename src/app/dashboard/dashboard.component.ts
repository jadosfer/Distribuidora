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

  showGraph: boolean = false;
  currentItemsToShow:any[];

  public data: any;

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
    this.filter("");
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
        this.dateRangefilteredOrders = this.datefilteredOrders = this.filteredOrders = this.userOrders;
        this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length})
      });
    });
  }

  filter(query: string) {
    if (query != "") {
      this.filteredOrders = (query) ?
      this.userOrders.filter(p => p.payload.val().clientFantasyName.toLowerCase().includes(query.toLowerCase())) :
      [];
    }
    else this.filteredOrders = this.userOrders;
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  filterBySeller(query: string) {
    if (query != "") {
      this.filteredOrders = (query) ?
      this.userOrders.filter(p => p.payload.val().order.sellerName.toLowerCase().includes(query.toLowerCase())) :
      [];
    }
    else this.filteredOrders = this.userOrders;
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length});
    if (this.paginator) this.paginator.pageIndex = 0;
  }

  filterByDate(query: string) {
    if (query != "") {
      this.filteredOrders = (query) ?
      this.userOrders.filter(p => this.datepipe.transform(p.payload.val().creationDate, 'dd/MM/yyyy HH:mm')?.includes(query)):
      [];
    }
    else this.filteredOrders = this.userOrders;
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length});
    if (this.paginator) this.paginator.pageIndex = 0;
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
        //case 'nroOrder': return this.compare(a.i, b.i, isAsc);
        case 'cliente': return this.compare(a.payload.val().clientFantasyName, b.payload.val().clientFantasyName, isAsc);
        case 'vendedor': return this.compare(a.payload.val().order.sellerName, b.payload.val().order.sellerName, isAsc);
        case 'date': return this.compare(a.payload.val().creationDate, b.payload.val().creationDate, isAsc);
        case 'import': return this.compare(this.ordersService.getTotalAmount(a.payload.val().order.products), this.ordersService.getTotalAmount(b.payload.val().order.products), isAsc);
        case 'iva': return this.compare(a.payload.val().iva, b.payload.val().iva, isAsc);


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
    this.onPageChange({previousPageIndex: 0, pageIndex: 0, pageSize: 10, length: this.filteredOrders.length});
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
    this.currentItemsToShow = this.filteredOrders.slice(
      $event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize
    );
  }
}
