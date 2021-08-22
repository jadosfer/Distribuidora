
import { Component, Input, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input('product') product: any;
  @Input('show-actions') showActions=true;
  @Input('pedido') pedido: any;


  constructor(private pedidosService: PedidosService) { }

   updateItemQuantity(product: any, change: number) {
    this.pedidosService.updatePedidoItemQuantity(this.pedido, product, change);
  }

  getQuantity() {
    let result = 0;
    if (this.pedido) {
      if (this.pedido.payload.val().items) {
        this.pedido.items.forEach((item: any) => {
          if (item.productId == this.product.key) {
            result = item.quantity;
          }
        });
      }
    }

    return result;
  }

}
