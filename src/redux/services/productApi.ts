import { addProduct, removeProduct, setProducts, updateProduct } from "../reducers/productReducer";
import api from "./api";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ProductRes[], GetProductsReq>({
      query: ({ categoryId, offset, limit, title }) => `products?categoryId=${categoryId}&title=${title}&offset=${offset}&limit=${limit}`,
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProducts(data));
        } catch { }
      },
    }),
    getSingleProduct: build.query<ProductRes, number>({
      query: (id) => `products/${id}`,
      transformErrorResponse() {
        return { message: 'No such product' };
      },
    }),
    addProduct: build.mutation<ProductRes, AddProductReq>({
      query: (newProduct) => ({
        url: 'products',
        method: 'POST',
        body: newProduct,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addProduct(data));
        } catch { }
      },
      transformErrorResponse() {
        return { message: 'Something went wrong while adding new product' };
      },
    }),
    updateProduct: build.mutation<ProductRes, UpdateProductReq>({
      query: ({ id, productNewData }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: productNewData,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateProduct(data));
        } catch { }
      },
      transformErrorResponse() {
        return { message: 'Something went wrong while updating the product' };
      },
    }),
    removeProduct: build.mutation<boolean, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(removeProduct(id));
        } catch { }
      },
      transformErrorResponse() {
        return { message: 'No such product' };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
} = productApi;
export default productApi;
