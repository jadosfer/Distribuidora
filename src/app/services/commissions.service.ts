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
      "minRetailTotalSells": 400000,
      "retailCommission": 0,
      "retailLastMonthCommission": 0,
      "retailPercent": 0.05,
      "wholesalerPercent": 0.01,
      "wholesalerCommission": 0,
      "wholesalerLastMonthCommission": 0,
      "lastMonthTotalRewards": 0,
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
      "isLastMonthCommissionsSaved": false,
      "date" : {
        'month' : 3,
        'year' : 2022
      }
    });
  }

  createCommissionsByMonth() {
    let result = this.db.list('/commissionsByMonth/').push({
      'month': 3,
      'year' : 2022,
      "minRetailTotalSells": 400000,
      "retailPercent": 0.05,
      "wholesalerPercent": 0.01,
      "rewards": {
        "Barras":200000,
        "rewardBarras": 2000,
        "Proteinas":150000,
        "rewardProteinas": 1500,
        "Recuperadores":150000,
        "rewardRecuperadores": 1500,
        "Quemadores":150000,
        "rewardQuemadores": 800,
        "Otros":150000,
        "rewardOtros": 1000,
      },
      'sellerCommission' : {
        'Pirulo':{
          "retailCommission": 0,
          "wholesalerCommission": 0,
          "TotalRewards": 0
        }
      }
    })
  }

  public getCommissions() {
    let result = this.db.list('/commissions').snapshotChanges();
    return result;
  }

  update(commissions: any, commissionsForm: any) {
    return this.db.object('/commissions/' + commissions.key).update({
      "minRetailTotalSells": commissionsForm.minRetailTotalSells,
      "retailPercent": commissionsForm.retailPercent,
      "wholesalerPercent": commissionsForm.wholesalerPercent,
      "rewards": {
        "Barras":commissionsForm.Barras,
        "rewardBarras": commissionsForm.rewardBarras,
        "BarrasCommission": commissions.payload.val().rewards.BarrasCommission,
        "Proteinas":commissionsForm.Proteinas,
        "rewardProteinas": commissionsForm.rewardProteinas,
        "ProteinasCommission": commissions.payload.val().rewards.BarrasCommission,
        "Recuperadores":commissionsForm.Recuperadores,
        "rewardRecuperadores": commissionsForm.rewardRecuperadores,
        "RecuperadoresCommission": commissions.payload.val().rewards.BarrasCommission,
        "Quemadores":commissionsForm.Quemadores,
        "rewardQuemadores": commissionsForm.rewardQuemadores,
        "QuemadoresCommission": commissions.payload.val().rewards.BarrasCommission,
        "Otros":commissionsForm.Otros,
        "rewardOtros": commissionsForm.rewardOtros,
        "OtrosCommission": commissions.payload.val().rewards.BarrasCommission
      },
      "isLastMonthCommissionsSaved": commissions.payload.val().isLastMonthCommissionsSaved,
      "date" : {
        'month' : commissions.payload.val().date.month,
        'year' : commissions.payload.val().date.year
      }
    });
  }

  saveCommissionsByMonth(commissionsByMonth: any) {
    let result = this.db.list('/commissionsByMonth/').push(commissionsByMonth);
  }
}
