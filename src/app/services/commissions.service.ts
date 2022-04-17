import { AngularFireDatabase  } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommissionsService {

  constructor(private db: AngularFireDatabase) { }

  createCommissions() {
    let result = this.db.list('/commissions/').push({
      //corregir a 400000
      "minRetailTotalSales": 400000,
      "retailCommission": 0,
      "retailPercent": 0.05,
      "wholesalerPercent": 0.01,
      "wholesalerCommission": 0,
      "rewards": {
        "Barras":200000,
        "rewardBarras": 2000,
        "BarrasCommission": 0,
        "Proteinas":150000,
        "rewardProteinas": 1500,
        "ProteinasCommission": 0,
        "Recuperadores":150000,
        "rewardRecuperadores": 1500,
        "RecuperadoresCommission": 0,
        "Quemadores":150000,
        "rewardQuemadores": 800,
        "QuemadoresCommission": 0,
        "Otros":150000,
        "rewardOtros": 1000,
        "OtrosCommission": 0
      },
      "monthCommissionsSavedDate" : {
        'month' : 0,
        'year' : 0
      }
    });
  }

  // createCommissionsByMonth() {
  //   let result = this.db.list('/commissionsByMonth/').push({
  //     'month': 0,
  //     'year' : 0,
  //     "minRetailTotalSales": 400000,
  //     "retailPercent": 0.05,
  //     "wholesalerPercent": 0.01,
  //     "rewards": {
  //       "Barras":200000,
  //       "rewardBarras": 2000,
  //       "Proteinas":150000,
  //       "rewardProteinas": 1500,
  //       "Recuperadores":150000,
  //       "rewardRecuperadores": 1500,
  //       "Quemadores":150000,
  //       "rewardQuemadores": 800,
  //       "Otros":150000,
  //       "rewardOtros": 1000,
  //     },
  //     'sellersCommissionsInfo' : {
  //       'Pirulo':{
  //         "retailCommission": 0,
  //         "wholesalerCommission": 0,
  //         "TotalRewards": 0
  //       }
  //     }
  //   })
  // }

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
      "rewards": {
        "Barras":commissionsForm.Barras,
        "rewardBarras": commissionsForm.rewardBarras,
        "BarrasCommission": commissions[0].payload.val().rewards.BarrasCommission,
        "Proteinas":commissionsForm.Proteinas,
        "rewardProteinas": commissionsForm.rewardProteinas,
        "ProteinasCommission": commissions[0].payload.val().rewards.ProteinasCommission,
        "Recuperadores":commissionsForm.Recuperadores,
        "rewardRecuperadores": commissionsForm.rewardRecuperadores,
        "RecuperadoresCommission": commissions[0].payload.val().rewards.RecuperadoresCommission,
        "Quemadores":commissionsForm.Quemadores,
        "rewardQuemadores": commissionsForm.rewardQuemadores,
        "QuemadoresCommission": commissions[0].payload.val().rewards.QuemadoresCommission,
        "Otros":commissionsForm.Otros,
        "rewardOtros": commissionsForm.rewardOtros,
        "OtrosCommission": commissions[0].payload.val().rewards.OtrosCommission
      },
      "monthCommissionsSavedDate" : {
        'month' : commissions[0].payload.val().monthCommissionsSavedDate.month,
        'year' : commissions[0].payload.val().monthCommissionsSavedDate.year
      }
    });
  }

  saveCommissionsByMonth(monthCommissions: any, commissions: any[]) {
    // debugger;
    console.log("saveCommissionsByMonth en service")
    let today = new Date();
    let result = this.db.object('/commissions/' + commissions[0].key).update({
      "minRetailTotalSales": commissions[0].payload.val().minRetailTotalSales,
      "retailPercent": commissions[0].payload.val().retailPercent,
      "wholesalerPercent": commissions[0].payload.val().wholesalerPercent,
      "rewards": {
        "Barras":commissions[0].payload.val().rewards.Barras,
        "rewardBarras": commissions[0].payload.val().rewards.rewardBarras,
        "BarrasCommission": commissions[0].payload.val().rewards.BarrasCommission,
        "Proteinas":commissions[0].payload.val().rewards.Proteinas,
        "rewardProteinas": commissions[0].payload.val().rewards.rewardProteinas,
        "ProteinasCommission": commissions[0].payload.val().rewards.ProteinasCommission,
        "Recuperadores":commissions[0].payload.val().rewards.Recuperadores,
        "rewardRecuperadores": commissions[0].payload.val().rewards.rewardRecuperadores,
        "RecuperadoresCommission": commissions[0].payload.val().rewards.RecuperadoresCommission,
        "Quemadores":commissions[0].payload.val().rewards.Quemadores,
        "rewardQuemadores": commissions[0].payload.val().rewards.rewardQuemadores,
        "QuemadoresCommission": commissions[0].payload.val().rewards.QuemadoresCommission,
        "Otros":commissions[0].payload.val().rewards.Otros,
        "rewardOtros": commissions[0].payload.val().rewards.rewardOtros,
        "OtrosCommission": commissions[0].payload.val().rewards.OtrosCommission
      },
      "monthCommissionsSavedDate" : {
        'month' : today.getMonth(),
        'year' : today.getFullYear()
      }
    });
    this.db.list('/commissionsByMonth/').push(monthCommissions);
  }
}
