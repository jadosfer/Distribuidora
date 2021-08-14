import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { SellersService } from 'src/app/services/sellers.service';

@Component({
  selector: 'admin-sellers',
  templateUrl: './admin-sellers.component.html',
  styleUrls: ['./admin-sellers.component.scss']
})
export class AdminSellersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'phone', 'edit'];
  dataSource: any;
  sellers:any[];
  sortedData:any[];
  filteredSellers:any[];
  subscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private sellersService: SellersService) {
  }

  ngOnInit() {
     this.subscription = this.sellersService.getAll().subscribe(sellers => {
       console.log(sellers)
       this.filteredSellers = this.sellers = sellers;
       this.dataSource = new MatTableDataSource<any>(this.filteredSellers);
       this.dataSource.paginator = this.paginator;
     });
  }

  filter(query: string) {
    this.filteredSellers = (query) ?
      this.sellers.filter(c => c.payload.val().name.toLowerCase().includes(query.toLowerCase())) :
      this.sellers;
    this.dataSource = new MatTableDataSource<any>(this.filteredSellers);
    this.dataSource.paginator = this.paginator;

  }

  sortData(sort: Sort) {
    const data = this.filteredSellers.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.payload.val().name, b.payload.val().name, isAsc);
        case 'phone': return compare(a.payload.val().phone, b.payload.val().phone, isAsc);
        default: return 0;
      }
    });
    this.dataSource = new MatTableDataSource<any>(this.sortedData);
    this.dataSource.paginator = this.paginator;
  }


  ngOnDestroy() {
  //   this.subscription.unsubscribe();
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
