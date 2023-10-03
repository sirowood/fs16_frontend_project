import toast from "react-hot-toast";
import api from "./api";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<UserRes, RegisterUserReq>({
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
    updateUser: build.mutation<UserRes, UpdateUserReq>({
      query: ({ id, userNewData }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: userNewData,
      }),
      async onQueryStarted(_args, { queryFulfilled }) {
        try {
          await queryFulfilled;
          toast.success('Update success!');
        } catch (e) { }
      },
      transformErrorResponse() { return { message: 'Update faild' }; },
    }),
    checkEmail: build.mutation<CheckEmailRes, CheckEmailReq>({
      query: (email) => ({
        url: 'users/is-available',
        method: 'POST',
        body: email,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useUpdateUserMutation,
  useCheckEmailMutation,
} = userApi;
export default userApi;
