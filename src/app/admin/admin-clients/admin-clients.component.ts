import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ClientsService } from 'src/app/services/clients.service';
import { OrdersService } from 'src/app/services/orders.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.scss']
})
export class AdminClientsComponent implements OnInit {

  displayedColumns: string[] = ['businessName', 'fantasyName', 'debt', 'edit', 'payments', 'orders'];
  dataSource: any;
  clients:any[];
  sortedData:any[];
  filteredClients:any[];
  subscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clientsService: ClientsService, private paymentsService: PaymentsService, private ordersService: OrdersService) {
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
        case 'fantasyName': return this.compare(a.payload.val().fantasyName, b.payload.val().fantasyName, isAsc);
        case 'businessName': return this.compare(a.payload.val().businessName, b.payload.val().businessName, isAsc);
        default: return 0;
      }
    });
    this.dataSource = new MatTableDataSource<any>(this.sortedData);
    this.dataSource.paginator = this.paginator;
  }

  searchPayments(clientFantasyName: string) {
    this.paymentsService.clientFantasyName = clientFantasyName;
  }

  searchOrders(clientFantasyName: string) {
    this.ordersService.clientFantasyName = clientFantasyName;
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }


  ngOnDestroy() {
  //   this.subscription.unsubscribe();
  }

  exportPDF(clients: any) {
    if (confirm('Descargar PDF')) {

      const line1 = 20;
      const line2 = line1 + 10;
      const line3 = line2 + 10;
      const col1 = 10;
      const col2 = 60;
      const col3 = 112;
      const col4 = 164;

      var doc = new jsPDF();
      let pageHeight= 0;
      doc.setFontSize(9);
      doc.text('CLIENTES - GENTECH MAR DEL PLATA', col1, line1);
      doc.text('RAZÓN SOCIAL', col1, line2);
      doc.text('N. FANTASIA', col2, line2);
      doc.text('DIRECCIÓN', col3, line2);
      doc.text('TELÉFONO', col4, line2);
      doc.setFontSize(8);

      let cont = 0;
      let price = 0;
      let yLimit = 400 // Height position of new content
      let j = 0;
      let y = 0;
      for (let i=0;i<this.clients.length;i++) {
        pageHeight = doc.internal.pageSize.height
        if (y >= pageHeight -70 ) {
          doc.addPage();
          j = i;
          cont = line1;
        }
        y = 7*(i+1-j) - cont;
        doc.text(this.clients[i].payload.val().businessName, col1, line3 + y);
        doc.text(this.clients[i].payload.val().fantasyName, col2, line3 + y);
        doc.text(this.clients[i].payload.val().address, col3, line3 + y);
        doc.text(this.clients[i].payload.val().phone, col4, line3 + y);
      }
      doc.setFontSize(8);

      // Save the PDF
      doc.save('ClientesGentech.pdf');
    }
  }
}

