import api from "./api";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ProductRes[], GetProductsReq>({
      query: ({ categoryId, offset, limit, title }) => `products?categoryId=${categoryId}&title=${title}&offset=${offset}&limit=${limit}`,
      providesTags: ['Products'],
    }),
    addProduct: build.mutation<ProductRes, AddProductReq>({
      query: (newProduct) => ({
        url: 'products',
        method: 'POST',
        body: newProduct,
      }),
      invalidatesTags: ['Products'],
    }),
    updateProduct: build.mutation<ProductRes, UpdateProductReq>({
      query: ({ id, productNewData }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: productNewData,
      }),
      invalidatesTags: ['Products'],
    }),
    removeProduct: build.mutation<boolean, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
} = productApi;
