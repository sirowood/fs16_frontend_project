type OrderDetail = {
  id: string,
  price: number,
  quantity: number,
  priceAtPurchase: number,
}

type OrderDetailReq = {
  productId: string,
  quantity: number,
  priceAtPurchase: number,
}

type OrderDetailRes = {
  product: {
    id: string,
    title: string,
    images: { url: string }[],
  },
  quantity: number,
  priceAtPurchase: number,
}

export type {
  OrderDetail,
  OrderDetailReq,
  OrderDetailRes,
}