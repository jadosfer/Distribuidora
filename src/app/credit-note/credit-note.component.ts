import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { OrdersService } from '../services/orders.service';
import { ClientsService } from '../services/clients.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { AppUser } from '../models/app-user';
import { AuthService } from '../services/auth.service';
import { PaymentsService } from '../services/payments.service';

@Component({
  selector: 'app-credit-note',
  templateUrl: './credit-note.component.html',
  styleUrls: ['./credit-note.component.scss']
})
export class CreditNoteComponent implements OnInit {

  appUser: AppUser;
  note:any = {};
  myControl = new FormControl();
  filteredOptions:  Observable<any[]>;
  filtrada: any[];
  clientFantasyName:string="";
  creditAmount: number = 0;
  clients:any[] = [];
  filteredClients:any[];
  client: boolean = true;
  noteEmpty: boolean = true;

  constructor(
    public route: ActivatedRoute,
    public ordersService: OrdersService,
    public clientsService: ClientsService,
    private auth: AuthService,
    private router: Router,
    private paymentsService: PaymentsService
  ) {}

  ngOnInit(){
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.clientsService.getAll().subscribe(clients => {
        this.clients = clients;
        this.filteredClients = [];
        for (let i=0;i<this.clients.length;i++) {
          if (this.clients[i].payload.val().designatedSeller == this.appUser.name || this.appUser.isAdmin == true)  {
            this.filteredClients.push(this.clients[i]);
          }
        }
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),
        map(value =>  value? this._filter(value) : this._filter(""))
        )
      });
    });
  }


  getClientCategory() {
    return this.ordersService.getClientCategory(this.clientFantasyName);
  }

  private _filter(value: any): any {
    const filterValue = value.toLowerCase();
    if (!this.filteredClients) return;
    let listFiltrada = this.filteredClients.filter(client => client.payload.val().fantasyName.toLowerCase().includes(filterValue));
    return listFiltrada
  }

  sendNote(note: any) {
    if (!note.amount || note.amount == 0 ) {
      this.noteEmpty = false;
      setTimeout(()=> {
         this.noteEmpty = true;
        }, 900);
      return;
    }
    if (confirm('Está segur@ que quiere crear la nota de crédito?')) {
      // let time = new Date().getTime()
      let noteDate = new Date(note.date)
      this.paymentsService.create({
        "amount": note.amount,
        "aproved": true,
        "client": this.clientFantasyName,
        "payWay": "Nota de Crédito",
        "date": noteDate.getTime(),
        "sellerName": this.appUser.name,
        "orderNumber": note.orderNumber
      });
      this.router.navigateByUrl('/payments/payments');
    }
    return;
  }

  ngOnDestroy() {
  }
}

