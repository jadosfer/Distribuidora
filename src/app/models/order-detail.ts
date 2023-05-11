import { Product } from "./product";

export interface OrderDetail {
  //orderItemsCount: number //eliminado porque no se usa
  products: Product[]
}
