import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  prodsArray = ["barras", "protes", "quemadores"]

  prodCategoriesArray:any;
  prodCategoryGroup:any;

  cities = ["SF", "NY", "CHI"]
  cityArray: any;
  myGroup: any;

  constructor(private formBuilder: FormBuilder) {
    let myArray = []
    for (let i=0;i<this.cities.length;i++) {
      myArray.push(new FormControl(this.cities[i]))
    }
    this.cityArray = new FormArray(myArray);

    this.myGroup = new FormGroup({
      cities: this.cityArray
    });

    // this.prodCategoryGroup = this.formBuilder.group({
    //   goalAmount: new FormControl(0),
    //   rewardAmount: new FormControl(0)
    // })

    // this.prodCategoriesArray = this.formBuilder.array([
    //   this.formBuilder.control('', [Validators.required])
    // ])
  }

  ngOnInit(): void {
  }

  send(value: any) {
    console.log('len ', value.length);
    console.log('value ', value);

  }

}
