import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdCategoryService {

  constructor(private db: AngularFireDatabase) { }


  getAll() {
    //return this.db.list('categories').snapshotChanges();
    return this.db.list('prodCategories').valueChanges();
  }

  getAllProdCategories() {
    return this.db.list('prodCategories').snapshotChanges();
  }
}
