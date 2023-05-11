export interface Order {
  amountWithIva: number;
  aproved: boolean;
  clientInDebt?: boolean;
  date: number;
  fantasyName: string;
  fullPaymentDate?: number;
  hasDiscount?: boolean;
  iva: number;
  orderDetailKey: string;
  seller: string;
}
