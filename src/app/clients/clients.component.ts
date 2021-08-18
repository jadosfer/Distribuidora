import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Observable, Subscription } from 'rxjs';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  appUser: AppUser;
  clients$: Observable<any>;
  clients: any;
  userClients: any = [];
  filteredClients: any;
  subscription: Subscription;
  sortedData: any[];

  constructor(private clientsService: ClientsService, private auth: AuthService) {
   }

  ngOnInit() {
    this.filter("");
    this.subscription = this.clientsService.getAll().subscribe(clients => {
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
        this.clients = clients;

        for (let i=0;i<this.clients.length;i++) {
          if (this.clients[i].payload.val().designatedSeller == this.appUser.name) this.userClients.push(this.clients[i]);
          }
      });
    });
  }


  filter(query: string) {
    this.filteredClients = (query) ?
    this.userClients.filter((c: { payload: { val: () => { (): any; new(): any; fantasyName: string; }; }; }) => c.payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())) :
    this.userClients;
  }

  sortData(sort: Sort) {
    const data = this.clients.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return this.compare(a.title, b.title, isAsc);
        case 'quantity': return this.compare(a.quantity, b.quantity, isAsc);
        default: return 0;
      }
    });
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
