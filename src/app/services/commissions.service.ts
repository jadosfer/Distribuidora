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
      "minFactTotalMinorista": 400000,
      "minFactGrupo": 400000,
      "porcentMinorista": 0.05,
      "porcentMayorista": 0.01,
      "premios": {
        "Barras":50000,
        "rewardBarras": 2100,
        "Proteinas":150000,
        "rewardProteinas": 1500,
        "Recuperadores":150000,
        "rewardRecuperadores": 1500,
        "Quemadores":150000,
        "rewardQuemadores": 800,
        "Otros":150000,
        "rewardOtros": 1000
      }
  });
  }

  public getCommissions() {
    let result = this.db.list('/commissions').snapshotChanges();
    return result;
  }

  update(id: any, commissions:any) {
    return this.db.object('/commissions/' + id).update({
      "minFactTotalMinorista": commissions.minFactTotalMinorista,
      "minFactGrupo": commissions.minFactGrupo,
      "porcentMinorista": commissions.porcentMinorista,
      "porcentMayorista": commissions.porcentMayorista,
      "premios": {
        "Barras":commissions.Barras,
        "rewardBarras": commissions.rewardBarras,
        "Proteinas":commissions.Proteinas,
        "rewardProteinas": commissions.rewardProteinas,
        "Recuperadores":commissions.Recuperadores,
        "rewardRecuperadores": commissions.rewardRecuperadores,
        "Quemadores":commissions.Quemadores,
        "rewardQuemadores": commissions.rewardProteinas,
        "Otros":commissions.Otros,
        "rewardOtros": commissions.rewardOtros
      }
    });
  }
}
