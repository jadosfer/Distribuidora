import { Component, OnInit } from '@angular/core';
import { ProdCategoryService } from 'src/app/services/prod-category.service';



@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  prodCategories$:any;


  constructor(private prodCategoryService: ProdCategoryService) {
    this.prodCategories$ = prodCategoryService.getAllProdCategories();
   }

  ngOnInit(): void {
  }

}
