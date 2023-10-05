import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Category } from "../../types/category";

const initialState: Category[] = [];

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (_state, action: PayloadAction<Category[]>) => {
      return [...action.payload];
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
