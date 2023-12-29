import api from "./api";
import {
  UpdateUserReq,
  ChangePasswordReq,
  GetUsersRes,
  GetUsersReq,
  UserRes,
  AddUserReq
} from "../../types/user";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<GetUsersRes, GetUsersReq>({
      query: (params) => ({
        url: 'users',
        params,
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.items.map(({ id }) => ({ type: 'Users' as const, id })),
            { type: 'Users', id: 'LIST' },
          ]
          : [{ type: 'Users', id: 'LIST' }],
    }),
    getSingleUser: build.query<UserRes, string>({
      query: (id) => `users/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Users', id }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    addUser: build.mutation<UserRes, AddUserReq>({
      query: (newUser) => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    updateUser: build.mutation<UserRes, UpdateUserReq>({
      query: ({ id, userNewData }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: userNewData,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Users', id }],
      transformErrorResponse(e) { return { message: e.data }; },
    }),
    changePassword: build.mutation<boolean, ChangePasswordReq>({
      query: (data) => ({
        url: `users/change-password`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse(e) { return { message: e.data }; },
    }),
    removeUser: build.mutation<boolean, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Users', id }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useChangePasswordMutation,
  useRemoveUserMutation,
} = userApi;
export default userApi;
