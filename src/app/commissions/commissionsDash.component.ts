import { CommissionsService } from '../services/commissions.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { Router} from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissionsDash.component.html',
  styleUrls: ['./commissionsDash.component.scss']
})
export class CommissionsDashComponent implements OnInit {

  rewards = [1500, 1000, 500]
  retailPercent: any;
  wholesalerPercent: any;
  monthlyRate: any;
  minRetailTotalSales: any;
  rewardsArray:any;
  rewardsGoalsArray: any
  myGroup: any;
  myRewardsGoalsGroup: any;

  appUser: AppUser;
  orders: any[];
  monthOrders: any[] = [];
  sellers: any[];
  prodsCategories: any[];
  commissions: any;
  edit: boolean = false;
  loading: boolean = true;
  month: number;
  year: number;
  lastFullMonthOrders: any[];

  subscription: Subscription;
  subscription2: Subscription
  subscription3: Subscription
  subscription4: Subscription


  constructor(public ordersService: OrdersService, private auth: AuthService, public router: Router,
    public commissionsService: CommissionsService, public catService: CategoryService,
    private formBuilder: FormBuilder) {
    }

  ngOnInit(){

    let today = new Date();
    this.subscription = this.catService.getAllProdsCategories().subscribe(prodsCategories => {
      this.prodsCategories = prodsCategories;
      this.subscription2 = this.commissionsService.getCommissions().subscribe(commissions => {
        this.commissions = commissions;
        if (this.commissions.length == 0) {
          this.commissionsService.createCommissions();
        }
        // Forms groups  --------------------
        let rewardsGoalsArray = [];
        let rewardsArray = [];
        for (let i=0;i<this.prodsCategories.length;i++) {
          rewardsGoalsArray.push(new FormControl(this.commissions[0].payload.val().rewardsGoals[i])) //valor de inicializacion
          rewardsArray.push(new FormControl(this.commissions[0].payload.val().rewards[i])) //valor de inicializacion
        }
        this.rewardsGoalsArray = new FormArray(rewardsGoalsArray);
        this.rewardsArray = new FormArray(rewardsArray);
        this.myGroup = new FormGroup({
          retailPercent: new FormControl(this.commissions[0].payload.val().retailPercent),
          wholesalerPercent: new FormControl(this.commissions[0].payload.val().wholesalerPercent),
          monthlyRate: new FormControl(this.commissions[0].payload.val().monthlyRate),
          minRetailTotalSales: new FormControl(this.commissions[0].payload.val().minRetailTotalSales),
          rewardsGoals: this.rewardsGoalsArray,
          rewards: this.rewardsArray
        });

        this.subscription3 = this.ordersService.getAllOrders().subscribe(orders => {
          this.orders = this.ordersService.orders = orders;

          //Me permite calcular y setear fecha de pago completo de pedidos de un vendedor!!!-------------------------
          //this.calculateFullPaymentDates();

          this.monthOrders = this.getThisMonthOrders();
          // IMPORTANTE!!!! .month es el mes salvado, si guardé febrero vale 2
          this.subscription4 = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            //manipulo USER
            // appUser.name = 'Enrique Oyhamburu'
            // appUser.isAdmin = false;
            this.ordersService.getAllSellers().subscribe(sellers => {
              this.sellers = sellers;
              if (this.month != today.getMonth() ||
              this.year != today.getFullYear()) {
                if (this.commissions[0].payload.val().monthCommissionsSavedDate.month != (today.getMonth()))
                //|| this.commissions[0].payload.val().monthCommissionsSavedDate.year != today.getFullYear()
                {
                  this.month = today.getMonth();
                  this.year = today.getFullYear();
                  this.lastFullMonthOrders = this.getLastFullMonthOrders();
                  this.saveCommissionsByMonth();
                  setTimeout(()=>{console.log('salvando comisiones')},1000)
                }
              }
              this.getActiveSellers();
              this.loading = false;
            });
          });
        });
      });
    });
  }

  getThisMonthOrders() {
    let today = new Date();
    let filteredMonthOrders = this.ordersService.orders.filter(order => {
      let date = new Date(order.payload.val().fullPaymentDate);
      if (date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear()){
        return order
      }
    });

    return filteredMonthOrders
  }

  getActiveSellers() {
    let activeSellers = this.sellers.filter(seller =>
      this.isSellerActive(seller.payload.val().name)
    )
    this.sellers = activeSellers;
  }

  isSellerActive(name: String) {
    for (let i=this.ordersService.orders.length - 1;i>0;i--) {
      let orderDate = this.ordersService.orders[i].payload.val().date;
      let timeAfterOrder = (Date.now() - orderDate)/(1000*3600*24);
      const d = new Date(Date.now());
      let day = d.getDate()
      if(this.ordersService.orders[i].payload.val().order.sellerName == name && timeAfterOrder <= day + 1) {
        return true;
      }
    }
    return false;
  }

  retailSalesPMonth(seller: string, orders: any[]) {
    let amount = 0;
    if (orders) {
      for (let i=0;i<orders.length;i++) {
        if (orders[i].payload.val().order.sellerName == seller
        && this.ordersService.getClientCategory(orders[i].payload.val().clientFantasyName) != "Distribuidor") {
          amount += parseFloat(orders[i].payload.val().amount)/(1 + (parseFloat(orders[i].payload.val().iva)/100));
        }
      }
    }

    if (amount) amount = Math.round(amount * 10) / 10;
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
    if (amount) amount = Math.round(amount * 10) / 10;
    return amount;
  }

  prodCategorySales(orders: any, category: string, sellerName: string) {
    let sales = 0;
    if (orders) {
      for (let i=0;i<orders.length;i++) {
        if (orders[i].payload.val().order.sellerName == sellerName) {
          for (let j=0;j<orders[i].payload.val().order.products.length;j++) {
            if (orders[i].payload.val().order.products[j].product.prodsCategory == category)
            sales += parseFloat(orders[i].payload.val().order.products[j].discountPrice)*orders[i].payload.val().order.products[j].quantity;
          }
        }
      }
    }
    if (sales) sales = Math.round(sales * 10) / 10;
    return sales
  }

  retailCommission(retailPercent: number, retailSalesPMonth: number) {
    if (retailSalesPMonth >= this.commissions[0].payload.val().minRetailTotalSales)
    return Math.round((retailSalesPMonth - this.commissions[0].payload.val().minRetailTotalSales)*retailPercent * 10) / 10;
    return 0;
  }

  wholesalerCommission(wholesalerPercent: number, wholesalerSalesPMonth: number, retailSalesPMonth: number) {
    if (retailSalesPMonth >= this.commissions[0].payload.val().minRetailTotalSales)
    return Math.round(wholesalerSalesPMonth*wholesalerPercent * 10) / 10;
    return 0;
  }

  save(commissions: any) {
    if (confirm('Está segur@ que quiere guardar/crear estos valores de comisiones?')) {
      if (commissions) {
        this.commissionsService.update(this.commissions, commissions);
      }
    }
    this.edit = false;
    //document.location.reload();
  }

  back() {
    this.edit = false;
  }

  rewardCalc(indexx: number, prodCategory: string, sellerName: string, orders: any[]) {
    let prodCategorySales = this.prodCategorySales(orders, prodCategory, sellerName);
    if (prodCategorySales >= this.commissions[0].payload.val().rewardsGoals[indexx]
    && this.retailSalesPMonth(sellerName, orders) >= this.commissions[0].payload.val().minRetailTotalSales)
      return this.commissions[0].payload.val().rewards[indexx]
    return 0;
  }

  saveCommissionsByMonth() {
    let sellersCommissionsInfo = this.getSellersCommissionsInfo();
    let date = new Date();
    //let date = new Date('2023-01-01T03:24:00');
    let month =  date.getMonth();
    let year = date.getFullYear();
    if (month == 0) {
      month = 12;
      year -= 1;
    }
    let monthCommissions = {
      'month': month,
      'year' : year,
      "minRetailTotalSales": this.commissions[0].payload.val().minRetailTotalSales,
      "retailPercent": this.commissions[0].payload.val().retailPercent,
      "wholesalerPercent": this.commissions[0].payload.val().wholesalerPercent,
      "monthlyRate": this.commissions[0].payload.val().monthlyRate,
      //"productsCategories" : this.commissions[0].payload.val().productsCategories,
      "rewards": this.commissions[0].payload.val().rewards,
      "rewardsGoals" : this.commissions[0].payload.val().rewardsGoals,
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
      let wholesalerCommission = this.wholesalerCommission(this.commissions[0].payload.val().wholesalerPercent, wholesalerSalesPMonth, retailSalesPMonth);
      let sellerPenalty = this.commissionsService.getSellerPenalty(this.commissions[0].payload.val().monthlyRate, this.sellers[i].payload.val().name, this.ordersService.orders);
      let rewardsObject = this.getProdCategoryRewards(this.sellers[i].payload.val().name)
      let prodCategoryRewards = rewardsObject.prodCategoryRewards;
      let totalRewards = rewardsObject.totalRewards
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
          "totalSellerDebtDelayed": this.commissionsService.totalSellerDebtDelayed
        });
      }
    }

    return sellersCommissionsInfo
  }

  getLastFullMonthOrders() {
    let lastFullMonthOrders = [];
    let today = new Date();
    let lastMonth = today.getMonth() - 1;
    let lastMonthYear = today.getFullYear();
    if (today.getMonth() == 0) {
      lastMonth = 11;
      lastMonthYear -= 1;
    }
    for (let i=0;i<this.ordersService.orders.length;i++) {
      // var date = new Date(this.ordersService.orders[i].payload.val().date); cambio por ordenes completadas el mes anterior
      var date = new Date(this.ordersService.orders[i].payload.val().fullPaymentDate);
      //miro el mes anterior, today.getMonth() me da el mes anterior porque me da el mes -1
      // if (date.getMonth() == today.getMonth() -1 && date.getFullYear() == today.getFullYear()
      // && parseFloat(this.ordersService.orders[i].payload.val().debt) < 10 ){ no hace flata chequear la deuda por lo anterior
      if (date.getMonth() == lastMonth && date.getFullYear() == lastMonthYear) {
        lastFullMonthOrders.push(this.ordersService.orders[i]);
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
  getProdCategoryRewards(sellerName: string) {
    let prodCategoryRewards = [];
    let totalRewards = 0;
    for (let j=0;j<this.prodsCategories.length;j++) {
      totalRewards += parseFloat(this.rewardCalc(j, this.prodsCategories[j].payload.val().name, sellerName, this.lastFullMonthOrders));
      let categoryReward = 0;
      if (this.retailSalesPMonth(sellerName, this.lastFullMonthOrders) > this.commissions[0].payload.val().minRetailTotalSales
      && this.commissions[0].payload.val().rewards[j]) {
        categoryReward = this.commissions[0].payload.val().rewards[j];
      };

      let categoryAim = "0";
      this.commissions[0].payload.val().rewardsGoals[j] ? categoryAim = this.commissions[0].payload.val().rewardsGoals[j] : "0"
      prodCategoryRewards.push({
        'prodCategory': this.prodsCategories[j].payload.val().name,
        'prodCategorySales': this.prodCategorySales(this.lastFullMonthOrders, this.prodsCategories[j].payload.val().name, sellerName),
        'categoryAim': parseFloat(categoryAim),
        'categoryReward': categoryReward
      })
    }
    let result = {
      'prodCategoryRewards': prodCategoryRewards,
      'totalRewards': totalRewards
    }
    return result
  }

  //solo para setear fechas de pedidos con pago completo para un vendedor
  calculateFullPaymentDates() {
    this.ordersService.calculateFullPaymentDates("Enrique Oyhamburu")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
    this.subscription4.unsubscribe();
   }
}


