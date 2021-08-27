import { SellersService } from 'src/app/services/sellers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientsCategoryService } from 'src/app/services/clients-category.service';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})
export class ClientsFormComponent implements OnInit {

  sellConditions:string[] = ["Contado", "Cuenta Corriente"];
  clientsCategories$: Observable<any>;
  sellers$: Observable<any>;
  client:any = {};
  id:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientsCategoryService: ClientsCategoryService,
    private clientsService: ClientsService,
    private sellersService: SellersService) {

    this.clientsCategories$ = clientsCategoryService.getAll();
    this.sellers$ = sellersService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.clientsService.get(this.id).take(1).subscribe(p => {
      this.client = p.payload.val();
    });
   }

  save(client: any) {
    if (confirm('Está segur@ que quiere guardar/crear este cliente?')) {
      if (this.id) {
        this.clientsService.update(this.id, client);
      }
      else {
        this.clientsService.create(client);
      }
      this.router.navigate(['/admin/clients']);
    }
  }

  delete() {
    if (confirm('Está segur@ que quiere borrar este cliente? No podrá recuperarlo')) {
      this.clientsService.delete(this.id);
      this.router.navigate(['/admin/clients']);
    }
  }

  ngOnInit(): void {
  }

}

