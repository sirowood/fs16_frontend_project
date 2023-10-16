import api from "./api";
import { Category } from "../../types/category";

const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      query: () => 'categories',
    }),
    getSingleCategory: build.query<Category, number>({
      query: (id) => `categories/${id}`,
      transformErrorResponse() {
        return { message: 'No such category' };
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useGetSingleCategoryQuery } = categoryApi;
export default categoryApi;
