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
          console.log("crea commissions")
        }
        this.ordersService.getAll().subscribe(orders => {
          this.orders =  orders;
          this.monthOrders = this.getThisMonthOrders();
          this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            this.sellersService.getAll().subscribe(sellers => {
              this.sellers = sellers;
              if (this.month != today.getMonth() ||
              this.year != today.getFullYear()) {
                // console.log("commissions", this.commissions[0].payload.val())
                if (this.commissions[0].payload.val().monthCommissionsSavedDate.month != today.getMonth() ||
                this.commissions[0].payload.val().monthCommissionsSavedDate.year != today.getFullYear()) {
                  this.month = today.getMonth();
                  this.year = today.getFullYear();
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
    let amount = 0;
    for (let i=0;i<this.monthOrders.length;i++) {
      if (this.monthOrders[i].payload.val().order.sellerName == sellerName) {
        for (let j=0;j<this.monthOrders[i].payload.val().order.products.length;j++) {
          if (this.monthOrders[i].payload.val().order.products[j].product.prodsCategory == category)
          amount += parseFloat(this.monthOrders[i].payload.val().order.products[j].discountPrice)*this.monthOrders[i].payload.val().order.products[j].quantity;
        }
      }
    }
    if (amount) amount = Math.round(amount * 100) / 100;
    return amount
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
        // console.log("ambas commissions", this.commissions, commissions)
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
    console.log("entra a save", this.commissions)
    let date = new Date();

    let monthCommissions = {
      'month': date.getMonth(),
      'year' : date.getFullYear(),
      "minRetailTotalSales": this.commissions[0].payload.val().minRetailTotalSales,
      "retailPercent": this.commissions[0].payload.val().retailPercent,
      "wholesalerPercent": this.commissions[0].payload.val().wholesalerPercent,
      "rewards": this.commissions[0].payload.val().rewards,
      'sellersCommissionsInfo' : sellersCommissionsInfo
    }
    this.commissionsService.saveCommissionsByMonth(monthCommissions, this.commissions);
  }

  getSellersCommissionsInfo() {
    let lastFullMonthOrders = this.getLastFullMonthOrders();
    let sellersCommissionsInfo = [];
    for (let i=0;i<this.sellers.length;i++) {
      let retailSalesPMonth = this.retailSalesPMonth(this.sellers[i].payload.val().name, lastFullMonthOrders)
      let retailCommission = this.retailCommission(this.commissions[0].payload.val().retailPercent, retailSalesPMonth);
      console.log("1: ", parseFloat(this.commissions[0].payload.val().wholesalerPercent), "2: ", this.wholesalerSalesPMonth(this.sellers[i].payload.val().name, lastFullMonthOrders), "3: ", retailSalesPMonth)
      let wholesalerCommission = this.wholesalerCommission(this.commissions[0].payload.val().wholesalerPercent, this.wholesalerSalesPMonth(this.sellers[i].payload.val().name, lastFullMonthOrders), retailSalesPMonth)
      let totalRewards = 0;
      let prodCategoryRewards = [];
      for (let j=0;j<this.prodsCategories.length;j++) {
        totalRewards += this.rewardCalc(this.prodsCategories[j].name, this.sellers[i].payload.val().name, lastFullMonthOrders)
        prodCategoryRewards.push({
          'prodCategory': this.prodsCategories[j].name,
          'productCategoryAmount': this.prodCategorySales(this.prodsCategories[j].name, this.prodsCategories[j].name),
          'categoryAim': this.commissions[0].payload.val().rewards[this.prodsCategories[j].name],
          'categoryReward': this.commissions[0].payload.val().rewards["reward" + this.prodsCategories[j].name]
        })
      }

      sellersCommissionsInfo.push({
        "sellerName": this.sellers[i].payload.val().name,
        "retailCommission": retailCommission,
        "wholesalerCommission": wholesalerCommission,
        "prodCategoryRewards": prodCategoryRewards,
        "TotalRewards": totalRewards
      })
    }

    return sellersCommissionsInfo
  }

  getLastFullMonthOrders() {
    let lastFullMonthOrders = [];
    let today = new Date();
    for (let i=0;i<this.orders.length;i++) {
      var date = new Date(this.orders[i].payload.val().date);
      //miro el mes anterior, today.getMonth() me da el mes anterior porque me da el mes -1
      if (date.getMonth() == today.getMonth() -1 && date.getFullYear() == today.getFullYear()){
        lastFullMonthOrders.push(this.orders[i]);
      }
    }
    return lastFullMonthOrders
  }
}
