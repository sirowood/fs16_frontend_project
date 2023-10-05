import api from "./api";
import { setCategory } from "../reducers/categoryReducer";
import { Category } from "../../types/category";

const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      query: () => 'categories',
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCategory(data));
        } catch { }
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
export default categoryApi;
