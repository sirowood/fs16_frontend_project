import { Address } from "./address";
import { OrderDetailReq, OrderDetailRes } from "./orderDetail"
import { UserRes } from "./user";

type AddOrderReq = {
  addressId: string,
  orderDetails: OrderDetailReq[]
}

type OrderRes = {
  id: string,
  status: string,
  addressId: string,
  address: Address,
  user: UserRes,
  orderDetails: OrderDetailRes[],
  createdAt: string,
  updatedAt: string,
}

type GetAllOrdersReq = {
  offset?: number,
  limit?: number,
};

type GetAllOrdersRes = {
  items: OrderRes[],
  pages: number,
  total: number,
}

export type {
  AddOrderReq,
  OrderRes,
  GetAllOrdersReq,
  GetAllOrdersRes
}