import { CommissionsService } from '../services/commissions.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { Router} from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

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
  loading: boolean = true;
  month: number;
  year: number;
  lastFullMonthOrders: any[];

  //ordersBorrar: any[] = [];

  subscription: Subscription;
  subscription2: Subscription
  subscription3: Subscription
  subscription4: Subscription

  constructor(public ordersService: OrdersService, private auth: AuthService, public router: Router,
    public commissionsService: CommissionsService, public catService: CategoryService ) {}

  ngOnInit(){
    let today = new Date();
    this.subscription = this.catService.getAllProdsCategories().subscribe(prodsCategories => {
      this.prodsCategories = prodsCategories;
      console.log('prodcategories ' + this.prodsCategories);
      this.subscription2 = this.commissionsService.getCommissions().subscribe(commissions => {
        this.commissions = commissions;
        if (this.commissions.length == 0) {
          this.commissionsService.createCommissions();
        }
        this.subscription3 = this.ordersService.getAllOrders().subscribe(orders => {
          this.ordersService.orders = orders;


          //permite ver las comisiones de un vendedor en particular
          // let mySeller = "Enrique Oyhamburu"
          // for (let i=0;i<this.ordersService.orders.length;i++) {
          //   let date = new Date(this.ordersService.orders[i].payload.val().date)
          //     if (date.getMonth() + 1 == 3 && date.getFullYear() == 2022
          //     && this.ordersService.orders[i].payload.val().order.sellerName == mySeller)
          //     this.ordersBorrar.push(this.ordersService.orders[i])
          // }

          // let retailSalesPMonth = this.retailSalesPMonth(mySeller, this.ordersBorrar)
          // let retailCommission = this.retailCommission(this.commissions[0].payload.val().retailPercent, retailSalesPMonth);
          // let wholesalerSalesPMonth = this.wholesalerSalesPMonth(mySeller, this.ordersBorrar)
          // let wholesalerCommission = this.wholesalerCommission(this.commissions[0].payload.val().wholesalerPercent, wholesalerSalesPMonth, retailSalesPMonth);
          // let sellerPenalty = this.commissionsService.getSellerPenalty(this.commissions[0].payload.val().monthlyRate, mySeller, this.ordersService.orders);
          // let rewardsObject = this.getProdCategoryRewards(mySeller)
          // let prodCategoryRewards = rewardsObject.prodCategoryRewards;
          // let totalRewards = rewardsObject.totalRewards
          // let totalIncome = retailCommission + wholesalerCommission + totalRewards - sellerPenalty;

          // console.log('factu minor: ', retailSalesPMonth);
          // console.log('retailCommission: ', retailCommission);
          // console.log('factu mayor: ', wholesalerSalesPMonth);
          // console.log('wholesalerCommission: ', wholesalerCommission);
          // console.log('sellerPenalty: ', sellerPenalty);
          // console.log('rewardsObject: ', this.getProdCategoryRewards(mySeller));
          // console.log('totalRewards: ', rewardsObject.totalRewards);
          // console.log('totalIncome: ', totalIncome);
          // console.log('this.commissionsService.totalSellerDebtDelayed: ',  this.commissionsService.totalSellerDebtDelayed);


          //Me permite calcular y setear fecha de pago completo de pedidos de un vendedor!!!-------------------------
          //this.calculateFullPaymentDates();

          this.monthOrders = this.getThisMonthOrders();

          this.subscription4 = this.auth.appUser$.subscribe(appUser => {
            this.appUser = appUser;
            //this.appUser.name = "Enrique Oyhamburu" //borrar
            //borrar
            // appUser.name = 'Enrique Oyhamburu'
            // appUser.isAdmin = false;
            this.ordersService.getAllSellers().subscribe(sellers => {
              this.sellers = sellers;
              if (this.month != today.getMonth() ||
              this.year != today.getFullYear()) {
                // console.log('monthCommissionsSavedDate.month ' + this.commissions[0].payload.val().monthCommissionsSavedDate.month);
                // console.log('today.getMonth().month ' + today.getMonth());
                // console.log('monthCommissionsSavedDate.year ' + this.commissions[0].payload.val().monthCommissionsSavedDate.year);
                // console.log('today.getFullYear() ' + today.getFullYear());
                if (this.commissions[0].payload.val().monthCommissionsSavedDate.month != today.getMonth() + 1||
                this.commissions[0].payload.val().monthCommissionsSavedDate.year != today.getFullYear()) {
                  this.month = today.getMonth();
                  this.year = today.getFullYear();
                  this.lastFullMonthOrders = this.getLastFullMonthOrders();
                  this.saveCommissionsByMonth();
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
    let filteredMonthOrders = []
    for (let i=0;i<this.ordersService.orders.length;i++) {
      //var date = new Date(this.ordersService.orders[i].payload.val().date); cambio por las cobradas en este mes
      var date = new Date(this.ordersService.orders[i].payload.val().fullPaymentDate);
      // if (date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear()
      // && parseFloat(this.ordersService.orders[i].payload.val().debt) < 10){
      //cambiando lo anterior no necesito corroborar la deuda
      if (date.getMonth() == today.getMonth() && date.getFullYear() == today.getFullYear()){
        filteredMonthOrders.push(this.ordersService.orders[i]);
      }
    }
    return filteredMonthOrders
  }

  getActiveSellers() {
    let activeSellers = [];
    for (let i=0;i<this.sellers.length;i++) {
      if (this.isSellerActive(this.sellers[i].payload.val().name)) {
        activeSellers.push(this.sellers[i]);
      }

    }
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
    for (let i=0;i<orders.length;i++) {
      if (orders[i].payload.val().order.sellerName == sellerName) {
        for (let j=0;j<orders[i].payload.val().order.products.length;j++) {
          if (orders[i].payload.val().order.products[j].product.prodsCategory == category)
          sales += parseFloat(orders[i].payload.val().order.products[j].discountPrice)*orders[i].payload.val().order.products[j].quantity;
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
    document.location.reload();
  }

  back() {
    this.edit = false;
  }

  rewardCalc(prodCategory: string, sellerName: string, orders: any[]) {
    let prodCategorySales = this.prodCategorySales(orders, prodCategory, sellerName);
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
    // this.lastFullMonthOrders = this.ordersBorrar //borrar esta linea
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
    for (let i=0;i<this.ordersService.orders.length;i++) {
      // var date = new Date(this.ordersService.orders[i].payload.val().date); cambio por ordenes completadas el mes anterior
      var date = new Date(this.ordersService.orders[i].payload.val().fullPaymentDate);
      //miro el mes anterior, today.getMonth() me da el mes anterior porque me da el mes -1
      // if (date.getMonth() == today.getMonth() -1 && date.getFullYear() == today.getFullYear()
      // && parseFloat(this.ordersService.orders[i].payload.val().debt) < 10 ){ no hace flata chequear la deuda por lo anterior
      if (date.getMonth() == today.getMonth() - 1 && date.getFullYear() == today.getFullYear()) {
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
      totalRewards += parseFloat(this.rewardCalc(this.prodsCategories[j].payload.val().name, sellerName, this.lastFullMonthOrders));
      let categoryReward = 0;
      if (this.retailSalesPMonth(sellerName, this.lastFullMonthOrders) > this.commissions[0].payload.val().minRetailTotalSales) {
        categoryReward = this.commissions[0].payload.val().rewards["reward" + this.prodsCategories[j].payload.val().name];
      };
      prodCategoryRewards.push({
        'prodCategory': this.prodsCategories[j].payload.val().name,
        'prodCategorySales': this.prodCategorySales(this.lastFullMonthOrders, this.prodsCategories[j].payload.val().name, sellerName),
        'categoryAim': parseFloat(this.commissions[0].payload.val().rewards[this.prodsCategories[j].payload.val().name]),
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


