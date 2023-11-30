import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-replaces',
  templateUrl: './replaces.component.html',
  styleUrls: ['./replaces.component.scss'],
})
export class ReplacesComponent implements OnInit {
  @ViewChild('oldSeller') oldSellerInput: NgModel;
  @ViewChild('newSeller') newSellerInput: NgModel;
  appUser: AppUser;
  clients: any;
  finishShow: boolean = false;
  noMatch: boolean = false;
  form: any = {};
  subscription: Subscription;
  subscription2: Subscription;

  constructor(
    private ordersService: OrdersService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.subscription = this.ordersService
      .getAllClients()
      .subscribe((clients) => {
        this.subscription2 = this.auth.appUser$.subscribe((appUser) => {
          this.appUser = appUser;
          this.clients = clients;
        });
      });
  }

  replaceSeller(form: any) {
    const newSeller = this.getSellerFromForm(form.newSeller);
    if (newSeller) {
      for (let i = 0; i < this.clients.length; i++) {
        if (
          this.clients[i].payload
            .val()
            .designatedSeller.toLowerCase()
            .includes(form.oldSeller.toLowerCase())
        ) {
          this.ordersService.update(this.clients[i].key, {
            ...this.clients[i].payload.val(),
            designatedSeller: newSeller.toString(),
          });
          this.finishShow = true;
        }
      }
      if (this.finishShow) {
       this.oldSellerInput.reset();
       this.newSellerInput.reset();
      }
      if (this.finishShow == false) this.noMatch = true;
      setTimeout(() => {
        this.finishShow = false;
        this.noMatch = false;
      }, 3000);
    } else {
      this.noMatch = true;
      setTimeout(() => {
        this.finishShow = false;
        this.noMatch = false;
      }, 3000);
    }
  }

  getSellerFromForm(sellerForm: string) {
    return this.ordersService.getSellerFromForm(sellerForm);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
