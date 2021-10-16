import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.scss']
})
export class AdminClientsComponent implements OnInit {

  displayedColumns: string[] = ['businessName', 'fantasyName', 'debt', 'edit'];
  dataSource: any;
  clients:any[];
  sortedData:any[];
  filteredClients:any[];
  subscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clientsService: ClientsService) {
  }

  ngOnInit() {
     this.subscription = this.clientsService.getAll().subscribe(clients => {
       this.filteredClients = this.clients = clients;
       this.dataSource = new MatTableDataSource<any>(this.filteredClients);
       this.dataSource.paginator = this.paginator;
     });
  }

  filter(query: string) {
    this.filteredClients = (query) ?
      this.clients.filter(c => c.payload.val().fantasyName.toLowerCase().includes(query.toLowerCase())) :
      this.clients;
    this.dataSource = new MatTableDataSource<any>(this.filteredClients);
    this.dataSource.paginator = this.paginator;

  }

  sortData(sort: Sort) {
    const data = this.filteredClients.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'fantasyName': return compare(a.payload.val().fantasyName, b.payload.val().fantasyName, isAsc);
        case 'businessName': return compare(a.payload.val().businessName, b.payload.val().businessName, isAsc);
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
