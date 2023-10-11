import api from "./api";
import { Category } from "../../types/category";

const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      query: () => 'categories',
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
export default categoryApi;
