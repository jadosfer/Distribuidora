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
  prodsCategories: any[];
  commissions: any[];

  constructor(private db: AngularFireDatabase, private prodsCatService: CategoryService) {
    this.prodsCatService.getAllProdsCategories().subscribe((prodsCategories)=>{
      this.prodsCategories = prodsCategories;
      this.getCommissions().subscribe((commissions) => {
        this.commissions = commissions
      })
    })
   }

  createCommissions() {
    console.log('creando commissions');    //let rewardsStrObj = '{';
    let rewardsArray = []
    let prodsCat = []
    for (let i=0; i<this.prodsCategories.length; i++) {
      //rewardsStrObj += '"' + this.prodsCategories[i].payload.val().name + '": 0,';
      rewardsArray.push("0");
      prodsCat.push(this.prodsCategories[i].payload.val().name)
    }
    // rewardsStrObj = rewardsStrObj.slice(0, -1) + '}';
    // let rewardsObj = JSON.parse(rewardsStrObj)

    let result = this.db.list('/commissions/').push({
      "minRetailTotalSales": 400000,
      "retailPercent": 0.05,
      "wholesalerPercent": 0.01,
      "monthlyRate": 0.01,
      "productsCategories" : prodsCat,
      "rewardsGoals": rewardsArray, //uso el mismo porque pongo 0 en todos y tienen el mismo length
      "rewards": rewardsArray, //uso el mismo porque pongo 0 en todos y tienen el mismo length
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
      "rewards" : commissionsForm.rewards,
      "rewardsGoals" : commissionsForm.rewardsGoals,
      //"productsCategories" : commissions[0].payload.val().productsCategories,
      "monthCommissionsSavedDate" : {
        'month' : commissions[0].payload.val().monthCommissionsSavedDate.month,
        'year' : commissions[0].payload.val().monthCommissionsSavedDate.year
      }
    });
  }

  addProdCategory(productsCategories: any) {
    return this.db.object('/commissions/' + this.commissions[0].key).update({
      "minRetailTotalSales": this.commissions[0].payload.val().minRetailTotalSales,
      "retailPercent": this.commissions[0].payload.val().retailPercent,
      "wholesalerPercent": this.commissions[0].payload.val().wholesalerPercent,
      "monthlyRate": this.commissions[0].payload.val().monthlyRate,
      "rewards" : this.commissions[0].payload.val().rewards,
      "rewardsGoals" : this.commissions[0].payload.val().rewardsGoals,
      "productsCategories" : productsCategories,
      "monthCommissionsSavedDate" : {
        'month' : this.commissions[0].payload.val().monthCommissionsSavedDate.month,
        'year' : this.commissions[0].payload.val().monthCommissionsSavedDate.year
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
      //"productsCategories": commissions[0].payload.val().productsCategories,
      "rewardsGoals": commissions[0].payload.val().rewardsGoals,
      "rewards": commissions[0].payload.val().rewards,
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
