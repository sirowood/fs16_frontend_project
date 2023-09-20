import api from "./api";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Omit<Product, 'categoryId'>[], GetProductsProps>({
      query: ({ categoryId, offset, limit }) => `products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`,
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
