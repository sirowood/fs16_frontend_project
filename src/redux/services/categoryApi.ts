import api from "./api";
import {
  AddCategoryReq,
  CategoriesRes,
  Category,
  GetCategoriesReq,
  UpdateCategoryReq,
} from "../../types/category";

const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<CategoriesRes, GetCategoriesReq>({
      query: (params) => ({
        url: 'categories',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.items.map(({ id }) => ({ type: 'Categories' as const, id })),
            { type: 'Categories', id: 'LIST' },
          ]
          : [{ type: 'Categories', id: 'LIST' }],
    }),
    getSingleCategory: build.query<Category, string>({
      query: (id) => `categories/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Categories', id }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    addCategory: build.mutation<Category, AddCategoryReq>({
      query: (newCategory) => ({
        url: 'categories',
        method: 'POST',
        body: newCategory,
      }),
      invalidatesTags: [{ type: 'Categories', id: 'LIST' }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    removeCategory: build.mutation<boolean, string>({
      query: (id) => ({
        url: `categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Categories', id }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    updateCategory: build.mutation<Category, UpdateCategoryReq>({
      query: ({ id, categoryNewData }) => ({
        url: `categories/${id}`,
        method: 'PATCH',
        body: categoryNewData,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Categories', id }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetSingleCategoryQuery,
  useAddCategoryMutation,
  useRemoveCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi;
export default categoryApi;
