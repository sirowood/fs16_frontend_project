type CartItem = {
  productId: number,
  title: string,
  price: number,
  image: string,
  quantity: number,
};


type AddProductInCart = {
  productId: number,
  title: string,
  image: string,
  price: number,
};

export type {
  CartItem,
  AddProductInCart,
};
