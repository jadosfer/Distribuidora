import { OrdersService } from 'src/app/services/orders.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})
export class ClientsFormComponent {
  @Output() redirect:EventEmitter<boolean> = new EventEmitter();
  fromEditing:boolean = true;

  sellConditions:string[] = ["Contado", "Cuenta Corriente"];
  IVAConditions:string[] = ["Inscripto", "Monotributista", "Consumidor Final"];
  clientsCategories: Observable<any>;
  sellers$: Observable<any>;
  client:any = {};
  id:any;
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private ordersService: OrdersService
    ) {

    this.clientsCategories = categoryService.getAllClientsCategories();
    this.sellers$ = ordersService.getAllSellers();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.subscription = this.ordersService.getClient(this.id).take(1).subscribe(p => {
      this.client = p.payload.val();
    });
   }

  save(client: any) {
    if (confirm('Está segur@ que quiere guardar/crear este cliente?')) {
      this.ordersService.setFromEditing(true);
      if (this.id) {
        this.ordersService.update(this.id, client);
      }
      else {
        this.ordersService.createClient(client);
      }
      this.router.navigate(['/admin/clients']);
    }
  }

  delete() {
    if (confirm('Está segur@ que quiere borrar este cliente? No podrá recuperarlo')) {
      this.ordersService.delete(this.id);
      this.router.navigate(['/admin/clients']);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

