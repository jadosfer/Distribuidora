import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }


  getAllClientsCategories() {
    return this.db.list('clientsCategories').valueChanges();
  }

  getAllProdsCategories() {
    return this.db.list('categories').valueChanges();
  }

  getAllPaysCategories() {
    return this.db.list('payWay').valueChanges();
  }
}
