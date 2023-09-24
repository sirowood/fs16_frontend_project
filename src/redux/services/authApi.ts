import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.escuelajs.co/api/v1/auth';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    login: build.mutation<LoginRes, LoginReq>({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
      }),
      transformErrorResponse() {
        return { message: 'Invalid username or password' };
      },
    }),
    getUser: build.query<User, string>({
      query: (token) => ({
        url: 'profile',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }),
      transformErrorResponse() {
        return { message: 'Invalid token' };
      },
    }),
  }),
});

export const { useLoginMutation, useLazyGetUserQuery, useGetUserQuery } = authApi;
export default authApi;
