import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { ClientsService } from './clients.service';
import { OrdersService } from './orders.service';
import { PaymentsService } from './payments.service';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  orders: any;
  payments: any;
  orderOrPayment: boolean;
  clients: any;
  filteredClients: any;

  constructor(private clientsService: ClientsService, private paymentsService: PaymentsService,
    private ordersService: OrdersService) { }

    ngOnInit() {
      this.clientsService.getAll().subscribe(clients => {
        this.filteredClients = this.clients = clients;
        // this.dataSource = new MatTableDataSource<any>(this.filteredClients);
        // this.dataSource.paginator = this.paginator;
        // if (this.clientsService.clientsPaginator.pageIndex > 0 || this.clientsService.clientsPaginator.pageSize != 10) {
        // this.paginator.pageIndex = this.clientsService.clientsPaginator.pageIndex;
        // this.paginator.pageSize = this.clientsService.clientsPaginator.pageSize;
        // this.dataSource.paginator = this.paginator
        // }
      });
      this.ordersService.getAll().subscribe(orders => {
        this.orders = orders;
      });
      this.paymentsService.getAll().subscribe(payments => {
        this.payments = payments;
      });
    }

  exportResume(client: any) {
    if (confirm('Descargar PDF')) {
      const line1 = 20;
      const line2 = line1 + 10;
      const line3 = line2 + 20;
      const col1 = 10;
      const col2 = 45;
      const col3 = 80;
      const col4 = 115;
      const col5 = 150;
      const col6 = 175;

      var doc = new jsPDF();
      let pageHeight= 0;
      doc.setFontSize(9);
      doc.text('GENTECH - MAR DEL PLATA', 10, 10);
      doc.text('RESUMEN DE CUENTA', 10, line1);
      doc.text('CLIENTE: ' + client.fantasyName, 60, line1);
      doc.text('DIRECCIÓN: ' + client.address, 112, line1);
      doc.text('TELÉFONO: ' + client.phone, 164, line1);

      doc.text('FECHA', col1, line2);
      doc.text('TIPO', col2, line2);
      doc.text('NÚMERO', col3 - 1, line2);
      doc.text('HABER', col4, line2);
      doc.text('DEBE', col5, line2);
      doc.text('SALDO', col6, line2);
      doc.setFontSize(7);

      this.ordersService.getAll().subscribe(orders => {
        this.orders = orders;
        this.paymentsService.getAll().subscribe(paymnts => {
          this.payments = paymnts;
          let orders = [];
          let payments = [];
          for (let i=0;i<this.orders.length;i++) {
            if (this.orders[i].payload.val().clientFantasyName == client.fantasyName) orders.push(this.orders[i].payload.val())
          }
          for (let i=0;i<this.payments.length;i++) {
            if (this.payments[i].payload.val().client == client.fantasyName) payments.push(this.payments[i].payload.val())
          }

          let y = 0;
          let k = 0;
          let balance = 0;
          let loopSize = orders.length + payments.length

          for (let i=0;i<loopSize;i++) {
            pageHeight = doc.internal.pageSize.height
            if (y >= pageHeight -50 ) {
              doc.addPage();
              k = i;
            }
            y = 7*(i+1-k) - line1;

            let pos1 = 0;
            let pos2 = 0;

            if (orders.length > 0 && payments.length > 0) {
              pos1 = this.getMinPos(orders);
              pos2 = this.getMinPos(payments);
              this.orderOrPayment = orders[pos1].date <= payments[pos2].date;
            }
            else if (orders.length > 0) {
              this.orderOrPayment = true;
              pos1 = this.getMinPos(orders);
            }
            else {
              this.orderOrPayment = false;
              pos2 = this.getMinPos(payments);
            }

            if (this.orderOrPayment && orders.length > 0) {
              balance +=  parseFloat(orders[pos1].amount)
              let dateObject = new Date(orders[pos1].date);
              let humanDateFormat = dateObject.toLocaleString();
              doc.text(humanDateFormat, col1, line3 + y);
              doc.text("FACTURA", col2, line3 + y);
              doc.text(parseInt(orders[pos1].orderNumber).toString(), col3, line3 + y);
              doc.text(parseFloat(orders[pos1].amount).toFixed(2).toString(), col5, line3 + y);
              doc.text(balance.toFixed(2).toString(), col6, line3 + y);
              orders = this.splice2(orders, pos1);
              doc.text('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -', 10, line3+y+3);
            }
            else if (!this.orderOrPayment && payments.length > 0) {
                balance -=  parseFloat(payments[pos2].amount)
                let dateObject = new Date(payments[pos2].date);
                let humanDateFormat = dateObject.toLocaleString();
                doc.text(humanDateFormat, col1, line3 + y);
                doc.text(parseInt(payments[pos2].orderNumber).toString(), col3, line3 + y);
                doc.text(parseFloat(payments[pos2].amount).toFixed(2).toString(), col4, line3 + y);
                doc.text(balance.toFixed(2).toString(), col6, line3 + y);
                doc.text('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -', 10, line3+y+3);
                if (payments[pos2].payWay == "Nota de Crédito") doc.text("NOTA CRED.", col2, line3 + y);
                else doc.text("RECIBO", col2, line3 + y);
                payments = this.splice2(payments, pos2);
              }
          }

          doc.setFontSize(8);

          // Save the PDF
          doc.save('Resumen.pdf');
        });
      });
      // while (!this.orders && !this.payments) {
      // }
    }
  }

  getMinPos(arr: any[]) {
    let pos = arr.length;
    let result = 0;
    let min = parseInt(arr[pos-1].date);
    while (pos--){
        if(parseInt(arr[pos].date) < min){
            min = arr[pos].date
            result = pos
        }
    }
    return result;
  }

  splice2(arr: any[], pos: number) {
    let result = []
    for (let i=0;i<arr.length;i++) {
      if (i != pos) result.push(arr[i])
    }
    return result
  }

  exportClients(clients: any) {
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
