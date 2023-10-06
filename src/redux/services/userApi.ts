import toast from "react-hot-toast";

import api from "./api";
import { CheckEmailRes, RegisterUserReq, UpdateUserReq, User } from "../../types/user";
import { setUser } from "../reducers/authReducer";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<User, RegisterUserReq>({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_args, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success('Register success!');
        } catch (e) { }
      },
      transformErrorResponse() { return { message: 'Register faild' }; },
    }),
    updateUser: build.mutation<User, UpdateUserReq>({
      query: ({ id, userNewData }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: userNewData,
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          toast.success('Update success!');
        } catch (e) { }
      },
      transformErrorResponse() { return { message: 'Update faild' }; },
    }),
    checkEmail: build.query<CheckEmailRes, string>({
      query: () => ({ url: 'users' }),
      transformResponse(response: User[], _meta, email) {
        const isAvailable = response.findIndex((user) => user.email === email) < 0;
        return { isAvailable };
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useUpdateUserMutation,
  useLazyCheckEmailQuery,
} = userApi;
export default userApi;
