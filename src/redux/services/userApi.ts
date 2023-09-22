import api from "./api";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<UserRes, RegisterUserReq>({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body,
      }),
    }),
    updateUser: build.mutation<UserRes, UpdateUserReq>({
      query: ({ id, userNewData }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: userNewData,
      }),
    }),
    checkEmail: build.mutation<CheckEmailRes, CheckEmailReq>({
      query: ({ email }) => ({
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
