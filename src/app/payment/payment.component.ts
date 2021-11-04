import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import 'rxjs/add/operator/take';
import { ClientsService } from '../services/clients.service';
import { PaymentsService } from '../services/payments.service';
import { CategoryService } from '../services/category.service';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  clients: any;
  payWays: any
  payment:any = {};
  id:any;
  appUser: AppUser;
  filteredClients:any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private paymentsService: PaymentsService,
    private categoryService: CategoryService,
    private clientsService: ClientsService)
    {
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser
        clientsService.getAll().subscribe(clients =>{
          this.clients = clients;
          for (let i=0;i<this.clients.length;i++) {
            if (appUser.isAdmin || this.clients[i].payload.val().designatedSeller == appUser.name) {
              this.filteredClients.push(this.clients[i]);
            }
          }
        });
        categoryService.getAllPaysCategories().subscribe(payWays =>{
          this.payWays = payWays;
        });
      });
    }

  save(payment: any) {
    if (confirm('Está segur@ que quiere guardar este cobro?')) {
      payment.sellerName = this.appUser.name;
      this.paymentsService.create(payment);
      this.router.navigate(['/payments/payments']);
    }
  }

  cancel() {
    this.router.navigate(['/payments/payments']);
  }

  ngOnInit(): void {
  }

}