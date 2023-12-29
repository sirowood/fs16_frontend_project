import api from "./api";
import {
  ProductRes,
  GetProductsReq,
  AddProductReq,
  UpdateProductReq,
  GetProductRes
} from "../../types/product";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<GetProductRes, GetProductsReq>({
      query: (params) => ({
        url: 'products',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.items.map(({ id }) => ({ type: 'Products' as const, id })),
            { type: 'Products', id: 'LIST' },
          ]
          : [{ type: 'Products', id: 'LIST' }],
    }),
    getSingleProduct: build.query<ProductRes, string>({
      query: (id) => `products/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Products', id }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    addProduct: build.mutation<ProductRes, AddProductReq>({
      query: (newProduct) => ({
        url: 'products',
        method: 'POST',
        body: newProduct,
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    updateProduct: build.mutation<ProductRes, UpdateProductReq>({
      query: ({ id, productNewData }) => ({
        url: `products/${id}`,
        method: 'PATCH',
        body: productNewData,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Products', id }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    removeProduct: build.mutation<boolean, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Products', id }],
      transformErrorResponse(e) {
        return { message: e.data };
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
