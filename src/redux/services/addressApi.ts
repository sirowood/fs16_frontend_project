import api from './api';
import { AddAddressReq, Address, UpdateAddressReq } from '../../types/address';

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    addAddress: build.mutation<Address, AddAddressReq>({
      query: (body) => ({
        url: 'addresses',
        method: 'POST',
        body,
      }),
      invalidatesTags: (_result, _error) => [{ type: 'Profile', id: 'Auth' }],
      transformErrorResponse(e) { return { message: e.data }; },
    }),
    updateAddress: build.mutation<Address, UpdateAddressReq>({
      query: ({ id, addressNewData }) => ({
        url: `addresses/${id}`,
        method: 'PATCH',
        body: addressNewData,
      }),
      invalidatesTags: (_result, _error) => [{ type: 'Profile', id: 'Auth' }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    removeAddress: build.mutation<boolean, string>({
      query: (id) => ({
        url: `addresses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error) => [{ type: 'Profile', id: 'Auth' }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
  }),
});

export const {
  useAddAddressMutation,
  useUpdateAddressMutation,
  useRemoveAddressMutation
} = authApi;
export default authApi;
