import { CommissionsService } from '../services/commissions.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { SellersService } from '../services/sellers.service';
import { Router} from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissionsDash.component.html',
  styleUrls: ['./commissionsDash.component.scss']
})
export class CommissionsDashComponent implements OnInit {

  appUser: AppUser;
  orders: any[];
  monthOrders: any[] = [];
  sellers: any[];
  prodsCategories: any[];
  commissions: any;
  edit: boolean = false;
  month: number;
  year: number;
  lastFullMonthOrders: any[];
  totalSellerDebtDelayed: number;

  constructor(public ordersService: OrdersService, private auth: AuthService, public router: Router,
    private sellersService: SellersService, private commissionsService: CommissionsService, public catService: CategoryService ) {}

  ngOnInit(){
    let today = new Date();
    this.catService.getAllProdsCategories().subscribe(prodsCategories => {
      this.prodsCategories = prodsCategories;
      this.commissionsService.getCommissions().subscribe(commissions => {
        this.commissions = commissions;
        if (this.commissions.length == 0) {
          this.commissionsService.createCommissions();
        }
        this.ordersService.getAll().subscribe(orders => {
          this.orders =  orders;
          this.monthOrders = this.getThisMonthOrders();
          this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.sellersService.getAll().subscribe(sellers => {
              this.sellers = sellers;

              //eliminar desde aca
              // this.month = today.getMonth();
              // this.year = today.getFullYear();
              // this.lastFullMonthOrders = this.getLastFullMonthOrders();
              // this.getSellerPenalty(0.03, "Enrique Oyhamburu")
              // this.getSellerPenalty(0.03, "Gentech Nutrideportiva")
              //eliminar hasta aca

              console.log(this.month, today.getMonth(), this.year, today.getFullYear())
              if (this.month != today.getMonth() ||
              this.year != today.getFullYear()) {
                console.log(this.commissions[0].payload.val().monthCommissionsSavedDate.month, today.getMonth(), this.commissions[0].payload.val().monthCommissionsSavedDate.year, today.getFullYear())
                if (this.commissions[0].payload.val().monthCommissionsSavedDate.month != today.getMonth() ||
                this.commissions[0].payload.val().monthCommissionsSavedDate.year != today.getFullYear()) {
                  this.month = today.getMonth();
                  this.year = today.getFullYear();
                  this.lastFullMonthOrders = this.getLastFullMonthOrders();
                  this.saveCommissionsByMonth();
                }
              }
            });
          });
        });
      });
    });
  }

  getThisMonthOrders() {
    let today = new Date();
    let filteredMonthOrders = []
    for (let i=0;i<this.orders.length;i++) {
      var date = new Date(this.orders[i].payload.val().date);
      if (date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear()){
        filteredMonthOrders.push(this.orders[i]);
      }
    }
    return filteredMonthOrders
  }

  retailSalesPMonth(seller: string, orders: any[]) {
    let amount = 0;
    for (let i=0;i<orders.length;i++) {
      if (orders[i].payload.val().order.sellerName == seller
      && this.ordersService.getClientCategory(orders[i].payload.val().clientFantasyName) != "Distribuidor") {
        amount += parseFloat(orders[i].payload.val().amount)/(1 + (parseFloat(orders[i].payload.val().iva)/100));
      }
    }
    if (amount) amount = Math.round(amount * 100) / 100;
    return amount;
  }

  wholesalerSalesPMonth(sellerName: string, orders: any[]) {
    let amount = 0;
    for (let i=0;i<orders.length;i++) {
      if (orders[i].payload.val().order.sellerName == sellerName
      && this.ordersService.getClientCategory(orders[i].payload.val().clientFantasyName) == "Distribuidor") {
        amount += parseFloat(orders[i].payload.val().amount)/(1 + (parseFloat(orders[i].payload.val().iva)/100));
      }
    }
    if (amount) amount = Math.round(amount * 100) / 100;
    return amount;
  }

  prodCategorySales(category: string, sellerName: string) {
    let sales = 0;
    for (let i=0;i<this.monthOrders.length;i++) {
      if (this.monthOrders[i].payload.val().order.sellerName == sellerName) {
        for (let j=0;j<this.monthOrders[i].payload.val().order.products.length;j++) {
          if (this.monthOrders[i].payload.val().order.products[j].product.prodsCategory == category)
          sales += parseFloat(this.monthOrders[i].payload.val().order.products[j].discountPrice)*this.monthOrders[i].payload.val().order.products[j].quantity;
        }
      }
    }
    if (sales) sales = Math.round(sales * 100) / 100;
    return sales
  }

  retailCommission(retailPercent: number, retailSalesPMonth: number) {
    if (retailSalesPMonth >= this.commissions[0].payload.val().minRetailTotalSales)
    return Math.round((retailSalesPMonth - this.commissions[0].payload.val().minRetailTotalSales)*retailPercent * 100) / 100;
    return 0;
  }

  wholesalerCommission(wholesalerPercent: number, wholesalerSalesPMonth: number, retailSalesPMonth: number) {
    if (retailSalesPMonth >= this.commissions[0].payload.val().minRetailTotalSales)
    return Math.round(wholesalerSalesPMonth*wholesalerPercent * 100) / 100;
    return 0;
  }

  save(commissions: any) {
    if (confirm('Está segur@ que quiere guardar/crear estos valores de comisiones?')) {
      if (commissions) {
        this.commissionsService.update(this.commissions, commissions);
      }
    }
    this.edit = false;
    document.location.reload();
  }

  back() {
    this.edit = false;
  }

  rewardCalc(prodCategory: string, sellerName: string, orders: any[]) {
    let prodCategorySales = this.prodCategorySales(prodCategory, sellerName);
    if (prodCategorySales >= this.commissions[0].payload.val().rewards[prodCategory]
    && this.retailSalesPMonth(sellerName, orders) >= this.commissions[0].payload.val().minRetailTotalSales)
      return this.commissions[0].payload.val().rewards["reward" + prodCategory]
    return 0;
  }

  saveCommissionsByMonth() {
    let sellersCommissionsInfo = this.getSellersCommissionsInfo();
    let date = new Date();
    let monthCommissions = {
      'month': date.getMonth(),
      'year' : date.getFullYear(),
      "minRetailTotalSales": this.commissions[0].payload.val().minRetailTotalSales,
      "retailPercent": this.commissions[0].payload.val().retailPercent,
      "wholesalerPercent": this.commissions[0].payload.val().wholesalerPercent,
      "monthlyRate": this.commissions[0].payload.val().monthlyRate,
      "rewards": this.commissions[0].payload.val().rewards,
      'sellersCommissionsInfo' : sellersCommissionsInfo
    }
    this.commissionsService.saveCommissionsByMonth(monthCommissions, this.commissions);
  }

  getSellersCommissionsInfo() {
    let sellersCommissionsInfo = [];
    for (let i=0;i<this.sellers.length;i++) {
      let retailSalesPMonth = this.retailSalesPMonth(this.sellers[i].payload.val().name, this.lastFullMonthOrders)
      let retailCommission = this.retailCommission(this.commissions[0].payload.val().retailPercent, retailSalesPMonth);
      let wholesalerSalesPMonth = this.wholesalerSalesPMonth(this.sellers[i].payload.val().name, this.lastFullMonthOrders)
      let wholesalerCommission = this.wholesalerCommission(this.commissions[0].payload.val().wholesalerPercent, wholesalerSalesPMonth, retailSalesPMonth)
      let sellerPenalty = this.getSellerPenalty(this.commissions[0].payload.val().monthlyRate, this.sellers[i].payload.val().name)
      let totalRewards = 0;
      let prodCategoryRewards = [];
      for (let j=0;j<this.prodsCategories.length;j++) {
        totalRewards += this.rewardCalc(this.prodsCategories[j].name, this.sellers[i].payload.val().name, this.lastFullMonthOrders)
        let categoryReward = 0;
        if (this.retailSalesPMonth(this.sellers[i].payload.val().name, this.lastFullMonthOrders) > this.commissions[0].payload.val().minRetailTotalSales) {
          categoryReward = this.commissions[0].payload.val().rewards["reward" + this.prodsCategories[j].name];
        };
        prodCategoryRewards.push({
          'prodCategory': this.prodsCategories[j].name,
          'prodCategorySales': this.prodCategorySales(this.prodsCategories[j].name, this.sellers[i].payload.val().name),
          'categoryAim': this.commissions[0].payload.val().rewards[this.prodsCategories[j].name],
          'categoryReward': categoryReward
        })
      }
      let totalIncome = retailCommission + wholesalerCommission + totalRewards - sellerPenalty;
      if (this.hasSellerSalesInLastMonth(this.sellers[i].payload.val().name)) {
        sellersCommissionsInfo.push({
          "sellerName": this.sellers[i].payload.val().name,
          "retailSalesPMonth": retailSalesPMonth,
          "retailCommission": retailCommission,
          "wholesalerSalesPMonth": wholesalerSalesPMonth,
          "wholesalerCommission": wholesalerCommission,
          "prodCategoryRewards": prodCategoryRewards,
          "TotalRewards": totalRewards,
          "sellerPenalty" : sellerPenalty,
          "totalIncome" : totalIncome,
          "totalSellerDebtDelayed": this.totalSellerDebtDelayed
        });
      }
    }

    return sellersCommissionsInfo
  }

  getLastFullMonthOrders() {
    let lastFullMonthOrders = [];
    let today = new Date();
    for (let i=0;i<this.orders.length;i++) {
      var date = new Date(this.orders[i].payload.val().date);
      //miro el mes anterior, today.getMonth() me da el mes anterior porque me da el mes -1
      if (date.getMonth() == today.getMonth() -1 && date.getFullYear() == today.getFullYear()
      && parseFloat(this.orders[i].payload.val().debt) < 10 ){
        lastFullMonthOrders.push(this.orders[i]);
      }
    }
    return lastFullMonthOrders
  }

  hasSellerSalesInLastMonth(seller: string) {
    let orders = this.lastFullMonthOrders;
    for (let i=0;i<orders.length;i++) {
      if (orders[i].payload.val().order.sellerName == seller) return true
    }
    return false
  }

  getSellerPenalty(monthlyRate: number, seller: string) {
    let today = new Date();
    let monthPenalty = 0;
    this.totalSellerDebtDelayed = 0
    for (let i=0;i<this.orders.length;i++) {
      if (this.orders[i].payload.val().order.sellerName == seller && this.orders[i].payload.val().debt > 10) {
        let delay = (today.getTime() - this.orders[i].payload.val().date)/(1000*60*60*24);
        if (delay > 30 && delay < 60) {
          monthPenalty += ((delay-30)/30) * monthlyRate * parseFloat(this.orders[i].payload.val().debt) / (1 + (parseFloat(this.orders[i].payload.val().iva)/100));
          this.totalSellerDebtDelayed += parseFloat(this.orders[i].payload.val().debt);
        }
        else if (delay >= 60) {
          monthPenalty += monthlyRate * parseFloat(this.orders[i].payload.val().debt);
          this.totalSellerDebtDelayed += parseFloat(this.orders[i].payload.val().debt);
        }
        console.log("delays", delay)
      }
    }
    this.totalSellerDebtDelayed = Math.round(this.totalSellerDebtDelayed * 100) / 100;
    monthPenalty = Math.round(monthPenalty * 100) / 100;
    return monthPenalty;
  }
}
