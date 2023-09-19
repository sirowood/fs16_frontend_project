import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

import * as productService from '../../services/productService';

type ProductsState = {
  data: Product[],
  loading: boolean,
  error: string | null,
};

const initialState: ProductsState = {
  data: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
    setError: (state, action: PayloadAction<string | null>) => {
      return { ...state, error: action.payload };
    },
    setProducts: (_state, action: PayloadAction<Product[]>) => {
      return { data: action.payload, loading: false, error: null };
    },
  },
});

export const { setLoading, setError, setProducts } = productsSlice.actions;

export const fetchProducts = ({ categoryId, offset, limit }: GetAllProductsProps) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));

  try {
    const data = await productService.getAllProducts<Product[]>({ categoryId, offset, limit });
    dispatch(setProducts(data));
    dispatch(setError(null));
  } catch (e) {
    dispatch(setError((e as Error).message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default productsSlice.reducer;
