type CartItem = {
  productId: number,
  title: string,
  price: number,
  quantity: number,
};


type AddProductInCart = {
  productId: number,
  title: string,
  price: number,
};

export type {
  CartItem,
  AddProductInCart,
};
