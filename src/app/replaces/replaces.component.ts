import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-replaces',
  templateUrl: './replaces.component.html',
  styleUrls: ['./replaces.component.scss']
})
export class ReplacesComponent implements OnInit {

  appUser: AppUser;
  clients: any;
  finishShow: boolean = false;
  noMatch: boolean = false;
  form: any = {};
  subscription: Subscription;
  subscription2: Subscription;

  constructor(private ordersService: OrdersService, private auth: AuthService) { }

  ngOnInit() {
    this.subscription = this.ordersService.getAllClients().subscribe(clients => {
      this.subscription2 = this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
        this.clients = clients;
      });
    });
  }

  replaceSeller(form: any) {
    for (let i=0;i<this.clients.length;i++) {
      if (this.clients[i].payload.val().designatedSeller == form.oldSeller.toString()) {
        this.ordersService.update(this.clients[i].key, {"designatedSeller": form.newSeller.toString()})
        this.finishShow = true;
      }
    }
    if (this.finishShow == false) this.noMatch = true
    setTimeout(()=> {
      this.finishShow = false;
      this.noMatch = false
     }, 800);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
