type CartItem = {
  id: number,
  title: string,
  price: number,
  image: string,
  quantity: number,
};


type AddProductInCart = {
  id: number,
  title: string,
  image: string,
  price: number,
};

export type {
  CartItem,
  AddProductInCart,
};
