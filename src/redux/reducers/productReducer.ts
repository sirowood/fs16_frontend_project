import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ProductRes } from "../../types/product";

const initialState: ProductRes[] = [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (_state, action: PayloadAction<ProductRes[]>) => {
      return [...action.payload];
    },
    addProduct: (state, action: PayloadAction<ProductRes>) => {
      state.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<ProductRes>) => {
      const productIndex = state.findIndex((product) => product.id === action.payload.id);
      state[productIndex] = action.payload;
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      return [...state.filter((product) => product.id !== action.payload)];
    },
  },
});

export const { setProducts, addProduct, updateProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
