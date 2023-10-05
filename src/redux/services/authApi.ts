import toast from 'react-hot-toast';

import api from './api';
import { setUser } from '../reducers/authReducer';
import { LoginReq, LoginRes } from '../../types/auth';
import { User } from '../../types/user';

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginRes, LoginReq>({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch, getCacheEntry }) {
        try {
          await queryFulfilled;
          const data = getCacheEntry().data;
          if (data) {
            localStorage.setItem('token', JSON.stringify(data));
            await dispatch(authApi.endpoints.getUser.initiate(data.access_token));
          }
        } catch (e) { }
      },
      transformErrorResponse() {
        return { message: 'Invalid username or password' };
      },
    }),
    getUser: build.query<User, string>({
      query: (token) => ({
        url: 'auth/profile',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          toast.success('Welcome back!');
        } catch (e) {
          localStorage.removeItem('token');
        }
      },
      transformErrorResponse() {
        return { message: 'Invalid token' };
      },
    }),
  }),
});

export const { useLoginMutation, useGetUserQuery, useLazyGetUserQuery } = authApi;
export default authApi;
