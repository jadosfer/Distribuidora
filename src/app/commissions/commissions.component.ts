import { CommissionsService } from '../services/commissions.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { SellersService } from '../services/sellers.service';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss']
})
export class CommissionsComponent implements OnInit {

  appUser: AppUser;
  orders: any[];
  monthOrders: any[] = [];
  sellers: any[];
  commissions: any;
  edit: boolean = false;

  constructor(public ordersService: OrdersService, private auth: AuthService,
    private sellersService: SellersService, private commissionsService: CommissionsService ) { }

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
          });
        });
      });
    });
  }

  facturaMensualMinorista(seller: string) {
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

  facturaMensualMayorista(sellerName: string) {
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

  comision(porcentMinorista: number, facturaMensualMinorista: number) {
    if (facturaMensualMinorista >= this.commissions[0].payload.val().minFactTotalMinorista)
    return facturaMensualMinorista*porcentMinorista
    return 0;
  }

  save(commissions: any) {
    if (confirm('Está segur@ que quiere guardar/crear estos valores de comisiones?')) {
      if (commissions) {
        this.commissionsService.update(this.commissions[0].key, commissions);
      }
    }
    this.edit = false;
  }

  back() {
    this.edit = false;
  }

  rewardCalc(prodCategory: string, sellerName: string) {
    let groupAmount = this.productCategoryAmount(prodCategory, sellerName);
    if (groupAmount >= this.commissions[0].payload.val().premios[prodCategory])
      return this.commissions[0].payload.val().premios["reward" + prodCategory]
    return 0;
  }
}
