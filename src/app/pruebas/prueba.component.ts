import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  prodsCategories = ["barras", "protes", "quemadores"]
  rewards = [1500, 1000, 500]
  rewardsArray:any;
  myGroup: any;

  constructor(private formBuilder: FormBuilder) {
    let myArray = []
    for (let i=0;i<this.prodsCategories.length;i++) {
      myArray.push(new FormControl(this.rewards[i])) //valor de inicializacion
    }
    this.rewardsArray = new FormArray(myArray);

    this.myGroup = new FormGroup({
      rewards: this.rewardsArray
    });
  }

  ngOnInit(): void {
  }

  send(value: any) {
    console.log('value ', value);
  }

}
