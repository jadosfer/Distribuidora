import { StockService } from './../services/stock.service';
import { PedidosService } from '../services/pedidos.service';
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
import html2canvas from 'html2canvas';
import { DashboardService } from '../services/dashboard.service';
import { PieChartComponent } from '../pieChart/pieChart.component';
import { ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  appUser: AppUser;

  pedido: any;
  pedidos: any[];
  userPedidos: any[] = [];
  titles: string[]=[];
  subscription: Subscription;
  filteredProduct:any[];
  filteredPedidos:any[];
  dateRangefilteredPedidos:any[];
  datefilteredPedidos:any[];
  products:any[];
  date: any;
  dateValue: string;
  clientValue: string;
  sellerValue: string;

  title: string;
  quantity: number;
  sortedData: any[];
  aproved: string[] = ["NO", "SI"];
  paid: string[] = ["NO", "SI"];
  selected: string = "NO";

  showGraph: boolean = false;

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


  constructor(public pedidosService: PedidosService,
  private productService: ProductService,
  private dashboardService: DashboardService,
  private pieChartComponent: PieChartComponent,
  private route: ActivatedRoute,
  private auth: AuthService, public datepipe: DatePipe,
  public stockService: StockService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  ngOnInit(){
    this.filter("");
    this.subscription = this.pedidosService.getAll().subscribe(pedidos => {
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
        this.pedidos =  pedidos;
        this.userPedidos = [];
        for (let i=0;i<this.pedidos.length;i++) {
          if (this.appUser.isAdmin || this.pedidos[i].payload.val().pedido.sellerName == this.appUser.name) {
            this.userPedidos.push(this.pedidos[i]);
          }
        }
        this.dateRangefilteredPedidos = this.datefilteredPedidos = this.filteredPedidos = this.userPedidos;
      });
    });
  }

  filter(query: string) {
    if (query != "") {
      this.filteredPedidos = (query) ?
      this.filteredPedidos.filter(p => p.payload.val().clientFantasyName.toLowerCase().includes(query.toLowerCase())) :
      this.filteredPedidos;
    }
    else this.filteredPedidos = this.userPedidos;
  }

  filterBySeller(query: string) {
    if (query != "") {
      this.filteredPedidos = (query) ?
      this.filteredPedidos.filter(p => p.payload.val().pedido.sellerName.toLowerCase().includes(query.toLowerCase())) :
      this.filteredPedidos;
    }
    else this.filteredPedidos = this.userPedidos;
  }

  filterByDate(query: string) {
    if (query != "") {
      this.filteredPedidos = (query) ?
      this.filteredPedidos.filter(p => this.datepipe.transform(p.payload.val().creationDate, 'dd/MM/yyyy HH:mm')?.includes(query)):
      this.filteredPedidos;
    }
    else this.filteredPedidos = this.userPedidos;
  }

  sortData(sort: Sort) {
    const data = this.filteredPedidos;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        //case 'nroPedido': return this.compare(a.i, b.i, isAsc);
        case 'cliente': return this.compare(a.payload.val().clientFantasyName, b.payload.val().clientFantasyName, isAsc);
        case 'vendedor': return this.compare(a.payload.val().sellerName, b.payload.val().sellerName, isAsc);
        case 'date': return this.compare(a.payload.val().creationDate, b.payload.val().creationDate, isAsc);
        case 'import': return this.compare(this.pedidosService.getTotalCost(a), this.pedidosService.getTotalCost(b), isAsc);
        case 'aproved': return this.compare(a.payload.val().aproved, b.payload.val().aproved, isAsc);


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
    if (this.filteredPedidos) {
      this.filteredPedidos.forEach(pedido => {
        total += this.pedidosService.getTotalCost(pedido);
      });
    }
    return total;
  }

  removePedido(pedidoId: any) {
    this.pedidosService.removePedido(pedidoId);
  }

  aprove(pedido: any) {
    if (confirm('Está segur@ que quiere aprobar el pedido para que pueda ser entregada la mercadería?')) {
      this.stockService.aprove(pedido);
      this.pedidosService.aprove(pedido);
    }
  }

  getPaid(pedido: any) {
    if (pedido.payload.val().aproved == "SI") {
      if (confirm('Está segur@ que quiere dar por pagado el pedido?')) {
        this.pedidosService.getPaid(pedido);
      }
    }
    else alert("Debe aprobar el pedido antes de darlo por cobrado");
  }

  searchDateRange(range: any) {
    if (range.start) {
      this.filteredPedidos = (range) ?
      this.filteredPedidos.filter(p => p.payload.val().creationDate > Date.parse(range.start._d) && p.payload.val().creationDate < Date.parse(range.end._d)):
      this.filteredPedidos;
    }
    else this.filteredPedidos = this.userPedidos;
  }

  clearRange() {
    this.range.setValue({
      start: null,
      end: null
    });
    this.clientValue = "";
    this.dateValue = "";
    this.sellerValue = "";
    this.filteredPedidos = this.userPedidos;
  }

  isPedidoInDebt(pedido: any) {
    return this.pedidosService.isPedidoInDebt(pedido);
  }

  exportAsPDF(pedido: any)  {

    var doc = new jsPDF();
    doc.text('Cantidad', 10, 20);
    doc.text('Producto', 40, 20);
    doc.text('Importe/uni', 140, 20);
    doc.text('Importe', 180, 20);

    let cont = 0;
    for (let i=0;i<pedido.payload.val().pedido.products.length;i++) {
      if (pedido.payload.val().pedido.products[i].quantity != 0) {
        let total = pedido.payload.val().pedido.products[i].price * pedido.payload.val().pedido.products[i].quantity
        doc.text(pedido.payload.val().pedido.products[i].quantity.toString(), 10, 30 + 10*cont);
        doc.text(pedido.payload.val().pedido.products[i].product.title, 40, 30 + 10*cont);
        doc.text(pedido.payload.val().pedido.products[i].price.toString(), 140, 30 + 10*cont);
        doc.text(total.toString(), 180, 30 + 10*cont);
        cont +=1;
      }
    }
      let footerVertPos = 30 + 10 * cont + 10;
      doc.text("TOTAL:    " + this.pedidosService.getTotalCost(pedido).toString(), 10, footerVertPos);


    // Save the PDF
    doc.save('pedido.pdf');
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
    let categories = this.getCategories(this.filteredPedidos);
    this.pieChartLabels = categories;
    let amounts = this.getAmounts(this.filteredPedidos, categories);
    this.pieChartData = amounts;
    this.showGraph = true;
  }

  getCategories(pedidos: any) {
    let categories: string[] = []
    console.log("pedidos", pedidos)
    let colors = []
    for (let i=0;i<pedidos.length;i++) {
      for (let j=0;j<pedidos[i].payload.val().pedido.products.length; j++) {
        if (!this.isCategoryIncluded(categories, pedidos[i].payload.val().pedido.products[j].product.prodCategory)) {
          categories.push(pedidos[i].payload.val().pedido.products[j].product.prodCategory)
          let col = this.color.pop()
          if (col) {
            this.pieChartColors[0].backgroundColor.push(col);
          }
        }
      }
    }
    console.log("categories", categories)
    return categories;
  }

  isCategoryIncluded(categories: string[], category: string) {
    for (let i=0;i<categories.length; i++) {
      if (categories[i]==category) return true;
    }
    return false;
  }

  getAmounts(pedidos: any, categories: string[]) {
    let amounts = [];
    for (let i=0;i<categories.length;i++) {
      let amount = 0;
      for (let j=0;j<pedidos.length;j++) {
        for (let k=0;k<pedidos[j].payload.val().pedido.products.length; k++) {
          if (pedidos[j].payload.val().pedido.products[k].product.prodCategory == categories[i]) {
            amount += parseInt(pedidos[j].payload.val().pedido.products[k].discountPrice)
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
  getTotalCategs(){  //facturacion total de los pedidos filtrados
    let sum=0;
    for (let i=0;i<this.pieChartData.length;i++) {
      sum += this.pieChartData[i];
    }
    return sum
  }
}
