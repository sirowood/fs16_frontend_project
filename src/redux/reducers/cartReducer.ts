import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddProductInCart, CartItem } from '../../types/cart';

const updateCart = (newCart: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(newCart));
};

const getProductIndex = (productId: string, cart: CartItem[]) => {
  return cart.findIndex((item) => item.id === productId);
};

const initialState: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductInCart: (state, action: PayloadAction<AddProductInCart>) => {
      const { id } = action.payload;

      const productIndex = getProductIndex(id, state);

      if (productIndex === -1) {
        state.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        state[productIndex].quantity += 1;
      }

      updateCart(state);
    },
    substractProductInCart: (state, action: PayloadAction<string>) => {
      const productIndex = getProductIndex(action.payload, state);
      state[productIndex].quantity -= 1;

      updateCart(state);
    },
    removeProductInCart: (state, action: PayloadAction<string>) => {
      const newCart = state.filter((item) => item.id !== action.payload);

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
