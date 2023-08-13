import { CommissionsService } from './commissions.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: any;

  constructor(private db: AngularFireDatabase) { }


  getAllClientsCategories() {
    return this.db.list('clientsCategories').valueChanges();
  }

  // getAllProdsCategories() {
  //   return this.db.list('categories').valueChanges();
  // }


  getAllProdsCategories() {
    return this.db.list('/productsCategories').snapshotChanges();

  }

  getAllPaysCategories() {
    return this.db.list('payWay').valueChanges();
  }

  // setNewProdCategory(category: string) {
  //   return this.db.list('/productsCategories').push({name: category});
  // }

  addProdCategory(category: string) {
    return this.db.list('/productsCategories').push({name: category});
  }
}
