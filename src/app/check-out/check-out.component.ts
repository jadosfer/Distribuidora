import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  loading = true;

  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
    this.loading = false;
  }

}
