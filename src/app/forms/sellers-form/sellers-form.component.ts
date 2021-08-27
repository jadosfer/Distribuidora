import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SellersService } from 'src/app/services/sellers.service';

@Component({
  selector: 'app-sellers-form',
  templateUrl: './sellers-form.component.html',
  styleUrls: ['./sellers-form.component.scss']
})
export class SellersFormComponent implements OnInit {

  sellConditions:string[] = ["Contado", "Cuenta Corriente"];
  seller:any = {};
  id:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sellersService: SellersService) {


    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.sellersService.get(this.id).take(1).subscribe(p => {
      this.seller = p.payload.val();
    });
   }

  save(seller: any) {
    if (confirm('Está segur@ que quiere guardar/crear este vendedor?')) {
      if (this.id) {
        this.sellersService.update(this.id, seller);
      }
      else {
        this.sellersService.create(seller);
      }
      this.router.navigate(['/admin/sellers']);
    }
  }

  delete() {
    if (confirm('Está segur@ que quiere borrar este vendedor? No podrá recuperarlo')) {
      this.sellersService.delete(this.id);
      this.router.navigate(['/admin/sellers']);
    }
  }

  ngOnInit(): void {
  }

}
