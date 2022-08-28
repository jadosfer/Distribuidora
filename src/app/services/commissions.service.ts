import { CategoryService } from 'src/app/services/category.service';
import { AngularFireDatabase  } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { OrdersService } from './orders.service';

@Injectable({
  providedIn: 'root'
})
export class CommissionsService {

  totalSellerDebtDelayed: number;
  prodsCategory: any;

  constructor(private db: AngularFireDatabase, private prodsCatService: CategoryService) {
    this.prodsCatService.getAllProdsCategories().subscribe((prodsCategory)=>{
      this.prodsCategory = prodsCategory;
    })
   }

  createCommissions() {
    let rewardsStrObj = '{';
    for (let i=0; i<this.prodsCategory.length; i++) {
      rewardsStrObj += '"' + this.prodsCategory[i].payload.val().name + '": 0,';
    }
    rewardsStrObj = rewardsStrObj.slice(0, -1) + '}';
    let rewardsObj = JSON.parse(rewardsStrObj)

    let result = this.db.list('/commissions/').push({
      "minRetailTotalSales": 400000,
      "retailCommission": 0,
      "retailPercent": 0.05,
      "wholesalerPercent": 0.01,
      "monthlyRate": 0.01,
      "wholesalerCommission": 0,
      "rewardsGoals": rewardsObj,
      "rewards": rewardsObj,
      // "rewards": {
      //   "Barras":250000,
      //   "rewardBarras": 3500,
      //   "Proteinas":150000,
      //   "rewardProteinas": 2500,
      //   "Recuperadores":150000,
      //   "rewardRecuperadores": 1500,
      //   "Quemadores":150000,
      //   "rewardQuemadores": 1500,
      //   "Otros":100000,
      //   "rewardOtros": 3000
      // },
      "monthCommissionsSavedDate" : {
        'month' : 7,
        'year' : 2022
      }
    });
  }

  public getCommissions() {
    let result = this.db.list('/commissions').snapshotChanges();
    return result;
  }

  public getCommissionsByMonth() {
    let result = this.db.list('/commissionsByMonth').snapshotChanges();
    return result;
  }

  update(commissions: any, commissionsForm: any) {
    return this.db.object('/commissions/' + commissions[0].key).update({
      "minRetailTotalSales": commissionsForm.minRetailTotalSales,
      "retailPercent": commissionsForm.retailPercent,
      "wholesalerPercent": commissionsForm.wholesalerPercent,
      "monthlyRate": commissionsForm.monthlyRate,
      "rewards": {
        "Barras":commissionsForm.Barras,
        // "rewardBarras": commissionsForm.rewardBarras,
        "Proteinas":commissionsForm.Proteinas,
        // "rewardProteinas": commissionsForm.rewardProteinas,
        "Recuperadores":commissionsForm.Recuperadores,
        // "rewardRecuperadores": commissionsForm.rewardRecuperadores,
        "Quemadores":commissionsForm.Quemadores,
        // "rewardQuemadores": commissionsForm.rewardQuemadores,
        "Otros":commissionsForm.Otros,
        // "rewardOtros": commissionsForm.rewardOtros,
      },
      "monthCommissionsSavedDate" : {
        'month' : commissions[0].payload.val().monthCommissionsSavedDate.month,
        'year' : commissions[0].payload.val().monthCommissionsSavedDate.year
      }
    });
  }

  saveCommissionsByMonth(monthCommissions: any, commissions: any[]) {
    let today = new Date();
    let result = this.db.object('/commissions/' + commissions[0].key).update({
      "minRetailTotalSales": commissions[0].payload.val().minRetailTotalSales,
      "retailPercent": commissions[0].payload.val().retailPercent,
      "wholesalerPercent": commissions[0].payload.val().wholesalerPercent,
      "monthlyRate": commissions[0].payload.val().monthlyRate,
      "rewards": {
        "Barras":commissions[0].payload.val().rewards.Barras,
       // "rewardBarras": commissions[0].payload.val().rewards.rewardBarras,
        "Proteinas":commissions[0].payload.val().rewards.Proteinas,
    //    "rewardProteinas": commissions[0].payload.val().rewards.rewardProteinas,
        "Recuperadores":commissions[0].payload.val().rewards.Recuperadores,
        // "rewardRecuperadores": commissions[0].payload.val().rewards.rewardRecuperadores,
        "Quemadores":commissions[0].payload.val().rewards.Quemadores,
        // "rewardQuemadores": commissions[0].payload.val().rewards.rewardQuemadores,
        "Otros":commissions[0].payload.val().rewards.Otros,
        // "rewardOtros": commissions[0].payload.val().rewards.rewardOtros,
      },
      "monthCommissionsSavedDate" : {
        'month' : today.getMonth(),
        'year' : today.getFullYear()
      }
    });
    this.db.list('/commissionsByMonth/').push(monthCommissions);
  }

  getSellerPenalty(monthlyRate: number, seller: string, orders: any[]) {
    let today = new Date();
    let monthPenalty = 0;
    this.totalSellerDebtDelayed = 0
    for (let i=0;i<orders.length;i++) {
      if (orders[i].payload.val().order.sellerName == seller && !orders[i].payload.val().fullPaymentDate) {
        let delay = (today.getTime() - orders[i].payload.val().date)/(1000*60*60*24);
        if (delay > 30 && delay < 60) {
          monthPenalty += ((delay-30)/30) * monthlyRate * parseFloat(orders[i].payload.val().debt) / (1 + (parseFloat(orders[i].payload.val().iva)/100));
          this.totalSellerDebtDelayed += parseFloat(orders[i].payload.val().amount);
        }
        else if (delay >= 60) {
          monthPenalty += monthlyRate * parseFloat(orders[i].payload.val().amount);
          this.totalSellerDebtDelayed += parseFloat(orders[i].payload.val().amount);
        }
      }
      //if (orders[i].payload.val().order.sellerName == "Enrique Oyhamburu") console.log('totalSellerDebtDelayed ', this.totalSellerDebtDelayed);
    }
    this.totalSellerDebtDelayed = Math.round(this.totalSellerDebtDelayed * 100) / 100;
    monthPenalty = Math.round(monthPenalty * 10) / 10;
    return monthPenalty;
  }
}
