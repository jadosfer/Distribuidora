import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatPaginator } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clients: any;
  clientsPaginator: {"pageIndex": number, "pageSize": number} = {"pageIndex": 0, "pageSize": 10};


  constructor(private db: AngularFireDatabase) {
    this.getAll().subscribe(clients => { this.clients = clients})
   }

  create(client: any) {
    client.debt = 0;
    return this.db.list('/clients').push(client);
  }

  getAll() {
    return this.db.list('/clients').snapshotChanges();
  }

  get(clientId:any) {
    return this.db.object('/clients/' + clientId).snapshotChanges();
  }

  update(clientId: any, client:any) {
    return this.db.object('/clients/' + clientId).update(client);
  }

  delete(clientId:any) {
    return this.db.object('/clients/' + clientId).remove();
  }

  addPaymentAmount(clientFantasyName: string, amount: number) {
    for (let i=0;i<this.clients.length;i++) {
      if (this.clients[i].payload.val().fantasyName == clientFantasyName) {
        let debt = 0;
        if (this.clients[i].payload.val().debt) debt = parseFloat(this.clients[i].payload.val().debt) - amount;
        else debt = -amount
        let client = {"debt": debt}
        this.update(this.clients[i].key, client)
        break
      }
    }
  }
}
