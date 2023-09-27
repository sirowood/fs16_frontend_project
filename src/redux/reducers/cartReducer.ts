import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const updateCart = (newCart: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(newCart));
};

const getProductIndex = (productId: number, cart: CartItem[]) => {
  return cart.findIndex((item) => item.productId === productId);
};

const initialState: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductInCart: (state, action: PayloadAction<AddProductInCart>) => {
      const { productId, title, price } = action.payload;

      const productIndex = getProductIndex(productId, state);

      if (productIndex === -1) {
        state.push({
          productId,
          title,
          price,
          quantity: 1,
        });
      } else {
        state[productIndex].quantity += 1;
      }

      updateCart(state);
    },
    substractProductInCart: (state, action: PayloadAction<number>) => {
      const productIndex = getProductIndex(action.payload, state);
      state[productIndex].quantity -= 1;

      updateCart(state);
    },
    removeProductInCart: (state, action: PayloadAction<number>) => {
      const newCart = state.filter((item) => item.productId !== action.payload);

      updateCart(newCart);

      return newCart;
    },
    clearCart: () => {
      updateCart([]);
      return [];
    },
  },
});

export const {
  addProductInCart,
  substractProductInCart,
  removeProductInCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
