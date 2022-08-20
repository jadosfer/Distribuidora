import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-sellers-form',
  templateUrl: './sellers-form.component.html',
  styleUrls: ['./sellers-form.component.scss']
})
export class SellersFormComponent {

  sellConditions:string[] = ["Contado", "Cuenta Corriente"];
  seller:any = {};
  id:any;
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ordersService: OrdersService) {
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.subscription = this.ordersService.getSeller(this.id).take(1).subscribe(p => {
        this.seller = p.payload.val();
      });
    }

  save(seller: any) {
    if (confirm('Está segur@ que quiere guardar/crear este vendedor?')) {
      if (this.id) {
        this.ordersService.updateSeller(this.id, seller);
      }
      else {
        this.ordersService.createSeller(seller);
      }
      this.router.navigate(['/admin/sellers']);
    }
  }

  delete() {
    if (confirm('Está segur@ que quiere borrar este vendedor? No podrá recuperarlo')) {
      this.ordersService.deleteSeller(this.id);
      this.router.navigate(['/admin/sellers']);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
