import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';



@Component({
  selector: 'app-chart',
  templateUrl: './pieChart.component.html',
  styleUrls: ['./pieChart.component.scss']
})


export class PieChartComponent implements OnInit {
  @Input("pedidos") pedidos: Array<any>;

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
  public pieChartLabels: Array<string> =[]//= ['Barras', 'Proteinas', 'Quemadores', 'Recuperadores', 'Otros'];
  public pieChartData: Array<any> = []//= [10, 20, 12, 6, 21];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  // public pieChartColors = [
  //   {
  //     backgroundColor: ['rgba(255,0,0)', 'rgba(0,255,0)', 'rgba(0,0,255)', 'rgba(0,255,255)', 'rgba(255,255,0)'],
  //   },
  // ];

  constructor() { }

  ngOnInit(): void {
    this.pieChartLabels = [];
    this.pieChartData = [];
    let categories = this.getCategories(this.pedidos);
    this.pieChartLabels = categories;
    let amounts = this.getAmounts(this.pedidos, categories);
    this.pieChartData = amounts;
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  graphic(pedidos: any) {
    this.pieChartLabels = [];
    this.pieChartData = [];
    let categories = this.getCategories(pedidos);
    this.pieChartLabels = categories;
    let amounts = this.getAmounts(pedidos, categories);
    this.pieChartData = amounts;
  }



  getCategories(pedidos: any) {
    let categories: string[] = []
    for (let i=0;i<pedidos.length;i++) {
      for (let j=0;j<pedidos[i].payload.val().pedido.products.length; j++) {
        if (!this.isCategoryIncluded(categories, pedidos[i].payload.val().pedido.products[j].product.prodCategory)) {
          categories.push(pedidos[i].payload.val().pedido.products[j].product.prodCategory)
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
}
