import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  constructor(private db: AngularFireDatabase) { }

  create(seller: any) {
    return this.db.list('/sellers').push(seller);
  }

  getAll() {
    return this.db.list('/sellers').snapshotChanges();
  }

  get(sellerId:any) {
    return this.db.object('/sellers/' + sellerId).snapshotChanges();
  }

  update(sellerId: any, seller:any) {
    return this.db.object('/sellers/' + sellerId).update(seller);
  }

  delete(sellerId:any) {
    return this.db.object('/sellers/' + sellerId).remove();
  }
}

