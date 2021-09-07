import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ClientsCategoryService {

  constructor(private db: AngularFireDatabase) { }


  getAll() {
    return this.db.list('clientsCategories').valueChanges();
  }

  getAllClientCategories() {
    return this.db.list('clientsCategories').snapshotChanges();
  }
}
