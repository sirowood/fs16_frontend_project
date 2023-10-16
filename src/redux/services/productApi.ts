import api from "./api";
import { ProductRes, GetProductsReq, AddProductReq, UpdateProductReq } from "../../types/product";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ProductRes[], GetProductsReq>({
      query: (params) => ({
        url: 'products',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Products' as const, id })),
            { type: 'Products', id: 'LIST' },
          ]
          : [{ type: 'Products', id: 'LIST' }],
    }),
    getSingleProduct: build.query<ProductRes, number>({
      query: (id) => `products/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Products', id }],
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
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
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
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Products', id }],
      transformErrorResponse() {
        return { message: 'Something went wrong while updating the product' };
      },
    }),
    removeProduct: build.mutation<boolean, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Products', id }],
      transformErrorResponse() {
        return { message: 'No such product' };
      },
    }),
    getPageCount: build.query<number, { limit: number, categoryId: number, title: string }>({
      query: ({ categoryId, title }) => `/products/?categoryId=${categoryId}&&title=${title}`,
      transformResponse(products: ProductRes[], _meta, { limit }) {
        return Math.ceil(products.length / limit);
      },
    })
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
  useGetPageCountQuery,
} = productApi;
export default productApi;
