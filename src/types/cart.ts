type CartItem = {
  id: string,
  title: string,
  priceAtPurchase: number,
  image: string,
  quantity: number,
};

type AddProductInCart = {
  id: string,
  title: string,
  image: string,
  priceAtPurchase: number,
};

export type {
  CartItem,
  AddProductInCart,
};
