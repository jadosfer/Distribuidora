import { Component, OnInit } from '@angular/core';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { ClientsService } from '../services/clients.service';

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

  constructor(private clientsService: ClientsService, private auth: AuthService) { }

  ngOnInit() {
    this.clientsService.getAll().subscribe(clients => {
      this.auth.appUser$.subscribe(appUser => {
        this.appUser = appUser;
        this.clients = clients;
      });
    });
  }

  replaceSeller(form: any) {
    console.log('form', form);

    for (let i=0;i<this.clients.length;i++) {
      if (this.clients[i].payload.val().designatedSeller == form.oldSeller.toString()) {
        this.clientsService.update(this.clients[i].key, {"designatedSeller": form.newSeller.toString()})
        this.finishShow = true;
      }
    }
    if (this.finishShow == false) this.noMatch = true
    setTimeout(()=> {
      this.finishShow = false;
      this.noMatch = false
     }, 800);
  }

}
