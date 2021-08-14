import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private db: AngularFireDatabase) { }

  create(client: any) {
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
}
