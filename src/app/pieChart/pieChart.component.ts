import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';



@Component({
  selector: 'app-chart',
  templateUrl: './pieChart.component.html',
  styleUrls: ['./pieChart.component.scss']
})


export class PieChartComponent implements OnInit {
  @Input("orders") orders: Array<any>;

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
    let categories = this.getCategories(this.orders);
    this.pieChartLabels = categories;
    let amounts = this.getAmounts(this.orders, categories);
    this.pieChartData = amounts;
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  graphic(orders: any) {
    this.pieChartLabels = [];
    this.pieChartData = [];
    let categories = this.getCategories(orders);
    this.pieChartLabels = categories;
    let amounts = this.getAmounts(orders, categories);
    this.pieChartData = amounts;
  }



  getCategories(orders: any) {
    let categories: string[] = []
    for (let i=0;i<orders.length;i++) {
      for (let j=0;j<orders[i].payload.val().order.products.length; j++) {
        if (!this.isCategoryIncluded(categories, orders[i].payload.val().order.products[j].product.prodsCategory)) {
          categories.push(orders[i].payload.val().order.products[j].product.prodsCategory)
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
            amount += parseInt(orders[j].payload.val().order.products[k].discountPrice)
          }
        }
      }
      amounts.push(amount)
    }
    return amounts;
  }
}
