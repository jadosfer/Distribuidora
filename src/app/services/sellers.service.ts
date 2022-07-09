import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ClientsService } from './clients.service';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  sellers: any[];

  constructor(private db: AngularFireDatabase, private clientsService: ClientsService) {
    this.getAll().subscribe(sellers => {
      this.sellers = sellers;
    });
  }

  ngOnInit() {
  }

  create(seller: any) {
    seller.retailSalesAdded = 0;
    seller.wholesalerSalesAdded = 0;
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

  getSellerRetailSalesAdded(seller: string) {
    if (this.getSeller(seller).payload.val().retailSalesAdded)
    return this.getSeller(seller).payload.val().retailSalesAdded;
    return 0;
  }

  getSellerWholesalerSalesAdded(seller: string) {
    if (this.getSeller(seller).payload.val().wholesalerSalesAdded)
    return this.getSeller(seller).payload.val().wholesalerSalesAdded;
    return 0;
  }

  getSeller(seller: string) {
    if (this.sellers) {
      for (let i=0;i<this.sellers.length;i++) {
        if (this.sellers[i].payload.val().name == seller)
        return this.sellers[i];
      }
    }
    return null;
  }

  addSaleToSeller(order: any, amount: any, clientFantasyName: string) {
    console.log("entra addSaleToSeller order: ", order)
    if (!this.isDateInThisMonth(parseInt(order.payload.val().date))) {
      let sellerName = order.payload.val().order.sellerName;
      amount = Math.round(parseFloat(amount) * 10) / 10;
      let seller = this.getSeller(sellerName);
      let category = this.clientsService.getClientCategory(clientFantasyName);
      if (category == "Distribuidor") {
        console.log('Distribuidor');
        let updatedWholesalerSalesAdded = parseFloat(seller.payload.val().wholesalerSalesAdded) + parseFloat(amount);
        console.log('updatedWholesalerSalesAdded: ', updatedWholesalerSalesAdded);
        this.update(seller.key, {"wholesalerSalesAdded": updatedWholesalerSalesAdded})
      }
      else {
        let updatedRetailSalesAdded = parseFloat(seller.payload.val().retailSalesAdded) + parseFloat(amount);
        console.log('updatedRetailSalesAdded ', updatedRetailSalesAdded);
        this.update(seller.key, {"retailSalesAdded": updatedRetailSalesAdded})
      }
    }
  }
  isDateInThisMonth(date: number) {
    let daysFromOrderCreation = (Date.now() - date)/(1000*3600*24);
    let today = new Date(Date.now())
    return daysFromOrderCreation < today.getDate();
  }
}

