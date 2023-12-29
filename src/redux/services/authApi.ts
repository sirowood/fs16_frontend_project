import toast from 'react-hot-toast';

import api from './api';
import { logout, setUser } from '../reducers/authReducer';
import { LoginReq, LoginRes } from '../../types/auth';
import { UpdateUserReq, UserRes } from '../../types/user';
import { RegisterUserReq } from '../../types/auth';

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<UserRes, RegisterUserReq>({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
      transformErrorResponse(e) { return { message: e.data }; },
    }),
    login: build.mutation<LoginRes, LoginReq>({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_arg, { queryFulfilled, dispatch, getCacheEntry }) {
        try {
          await queryFulfilled;
          const token = getCacheEntry().data?.token;
          if (token) {
            localStorage.setItem('token', token);
            await dispatch(authApi.endpoints.getProfile.initiate(token));
          }
        } catch (e) { }
      },
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    getProfile: build.query<UserRes, string>({
      query: (token) => ({
        url: 'auth/profile',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }),
      providesTags: (_result, _error) => [{ type: 'Profile', id: 'Auth' }],
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (e) {
          localStorage.removeItem('token');
        }
      },
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    updateProfile: build.mutation<UserRes, UpdateUserReq>({
      query: ({ userNewData }) => ({
        url: 'users/profile',
        method: 'PATCH',
        body: userNewData,
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          toast.success('Update success!');
        } catch (e) { }
      },
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    deleteProfile: build.mutation<UserRes, void>({
      query: () => ({
        url: 'users/profile',
        method: 'DELETE',
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
        } catch (e) { }
      },
      invalidatesTags: (_result, _error) => [{ type: 'Users', id: 'LIST' }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useUpdateProfileMutation,
  useDeleteProfileMutation,
  useLazyGetProfileQuery
} = authApi;
export default authApi;
