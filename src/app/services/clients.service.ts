import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

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

  getClientsInDebt(clients: any[], orders: any[]) {
    let result = [];
    for (let i=0;i<clients.length;i++) {
      if (this.isClientInDebt(clients[i].payload.val().fantasyName, orders))
      result.push(clients[i])
    }
    return result;
  }

  isOrderInDebt(order: any) {
    let today = new Date();
    if((Date.parse(today.toString()) - order.payload.val().date > 30*24*60*60*1000)
    && parseFloat(order.payload.val().debt) > 100 ) { //que pasen 30 dias
      return true;
    }
    return false;
  }

  isClientInDebt(fantasyName: string, orders: any[]) {
    for (let i=0;i<orders.length;i++) {
      if (orders[i].payload.val().clientFantasyName == fantasyName &&
      this.isOrderInDebt(orders[i])) return true;
    }
    return false;
  }

  getClientLastPayment(fantasyName: string, payments: any[]) {
    let payment = payments[0];
    payment.payload.val().date = 1
    for (let i=0;i<payments.length;i++) {
      if (payments[i].payload.val().client == fantasyName && payments[i].payload.val().date > payment.payload.val().date)
      payment = payments[i];
    }
    return payment;
  }
}
