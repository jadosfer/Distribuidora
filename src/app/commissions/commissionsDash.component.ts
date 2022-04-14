import { CommissionsService } from '../services/commissions.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { SellersService } from '../services/sellers.service';
import { Router} from '@angular/router';

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
  commissions: any;
  edit: boolean = false;

  constructor(public ordersService: OrdersService, private auth: AuthService, public router: Router,
    private sellersService: SellersService, private commissionsService: CommissionsService ) {}

  ngOnInit(){
    this.commissionsService.getCommissions().subscribe(commissions => {
      if (!commissions || commissions.length == 0) {
        this.commissionsService.createCommissions();
      }
      this.commissions = commissions;
      this.ordersService.getAll().subscribe(orders => {
        let today = new Date();
        this.orders =  orders;
        for (let i=0;i<this.orders.length;i++) {
          if ((Date.parse(today.toString()) - parseInt(this.orders[i].payload.val().date) < today.getDate()*24*60*60*1000)) {
            var date = new Date(this.orders[i].payload.val().date);
            if (date.getMonth() == today.getMonth()) {
              this.monthOrders.push(this.orders[i]);
            }
          }
        }
        this.auth.appUser$.subscribe(appUser => {
          this.appUser = appUser;
          this.sellersService.getAll().subscribe(sellers => {
            this.sellers = sellers;
            if (this.commissions.payload.val().isLastMonthCommissionsSaved == false || this.isNewMonth())
             this.saveCommissionsByMonth();
          });
        });
      });
    });
  }

  retailSellsPMonth(seller: string) {
    let amount = 0;
    for (let i=0;i<this.monthOrders.length;i++) {
      if (this.monthOrders[i].payload.val().order.sellerName == seller
      && this.ordersService.getClientCategory(this.monthOrders[i].payload.val().clientFantasyName) != "Distribuidor") {
        amount += parseFloat(this.monthOrders[i].payload.val().amount)/(1 + (parseFloat(this.monthOrders[i].payload.val().iva)/100));
      }
    }
    if (amount) amount = Math.round(amount * 100) / 100;
    return amount;
  }

  wholesalerSellsPMonth(sellerName: string) {
    let amount = 0;
    for (let i=0;i<this.monthOrders.length;i++) {
      if (this.monthOrders[i].payload.val().order.sellerName == sellerName
      && this.ordersService.getClientCategory(this.monthOrders[i].payload.val().clientFantasyName) == "Distribuidor") {
        amount += parseFloat(this.monthOrders[i].payload.val().amount)/(1 + (parseFloat(this.monthOrders[i].payload.val().iva)/100));
      }
    }
    if (amount) amount = Math.round(amount * 100) / 100;
    return amount;
  }

  productCategoryAmount(category: string, sellerName: string) {
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

  retailCommission(retailPercent: number, retailSellsPMonth: number) {
    if (retailSellsPMonth >= this.commissions[0].payload.val().minRetailTotalSells)
    return Math.round((retailSellsPMonth - this.commissions[0].payload.val().minRetailTotalSells)*retailPercent * 100) / 100;
    return 0;
  }

  wholesalerCommission(wholesalerPercent: number, wholesalerSellsPMonth: number, retailSellsPMonth: number) {
    if (retailSellsPMonth >= this.commissions[0].payload.val().minRetailTotalSells)
    return Math.round(wholesalerSellsPMonth*wholesalerPercent * 100) / 100;
    return 0;
  }

  save(commissions: any) {
    if (confirm('Está segur@ que quiere guardar/crear estos valores de comisiones?')) {
      if (commissions) {
        this.commissionsService.update(this.commissions[0], commissions);
      }
    }
    this.edit = false;
    document.location.reload();
  }

  back() {
    this.edit = false;
  }

  rewardCalc(prodCategory: string, sellerName: string) {
    let groupAmount = this.productCategoryAmount(prodCategory, sellerName);
    if (groupAmount >= this.commissions[0].payload.val().rewards[prodCategory]
    && this.retailSellsPMonth(sellerName) >= this.commissions[0].payload.val().minRetailTotalSells)
      return this.commissions[0].payload.val().rewards["reward" + prodCategory]
    return 0;
  }

  saveCommissionsByMonth() {
    let date = new Date();
    let commissionsByMonth = {
      'month': date.getMonth() + 1,
      'year' : date.getFullYear(),
      "minRetailTotalSells": this.commissions[0].payload.val().minRetailTotalSells,
      "retailPercent": this.commissions[0].payload.val().retailPercent,
      "wholesalerPercent": this.commissions[0].payload.val().wholesalerPercent,
      "rewards": this.commissions[0].payload.val().rewards,
      'sellerCommission' : {
        //aca tengo que hacer que agregue a cada vendedor con su comision mensual y sus premios respectivos
        'Pirulo':{
          "retailCommission": 0,
          "wholesalerCommission": 0,
          "TotalRewards": 0
        }
      }
    }
    this.commissionsService.saveCommissionsByMonth(commissionsByMonth);
  }

  isNewMonth() {
    let date = new Date();
    return (date.getMonth() + 1) != this.commissions.payload.val().month
  }
}
