import api from "./api";
import { AddOrderReq, GetAllOrdersReq, GetAllOrdersRes, OrderRes } from "../../types/order";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserOrders: build.query<OrderRes[], string>({
      query: (userId) => ({
        url: `orders/users/${userId}`,
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Orders' as const, id })),
            { type: 'Orders', id: 'LIST' },
          ]
          : [{ type: 'Orders', id: 'LIST' }],
    }),
    getAllOrders: build.query<GetAllOrdersRes, GetAllOrdersReq>({
      query: (params) => ({
        url: `orders`,
        params,
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.items.map(({ id }) => ({ type: 'Orders' as const, id })),
            { type: 'Orders', id: 'LIST' },
          ]
          : [{ type: 'Orders', id: 'LIST' }],
    }),
    getSingleOrder: build.query<OrderRes, string>({
      query: (id) => `orders/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Orders', id }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    addOrder: build.mutation<OrderRes, AddOrderReq>({
      query: (newOrder) => ({
        url: 'orders',
        method: 'POST',
        body: newOrder,
      }),
      invalidatesTags: [{ type: 'Orders', id: 'LIST' }],
      transformErrorResponse(e) {
        return { message: e.data };
      },
    }),
    cancelOrder: build.mutation<boolean, string>({
      query: (id) => ({
        url: `orders/${id}/cancel`,
        method: 'PATCH',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Orders', id }],
    }),
    returnOrder: build.mutation<boolean, string>({
      query: (id) => ({
        url: `orders/${id}/return`,
        method: 'PATCH',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Orders', id }],
    }),
    deliveryOrder: build.mutation<boolean, string>({
      query: (id) => ({
        url: `orders/${id}/delivering`,
        method: 'PATCH',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Orders', id }],
    }),
    deliveredOrder: build.mutation<boolean, string>({
      query: (id) => ({
        url: `orders/${id}/delivered`,
        method: 'PATCH',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Orders', id }],
    }),
  }),
});

export const {
  useGetUserOrdersQuery,
  useGetAllOrdersQuery,
  useGetSingleOrderQuery,
  useAddOrderMutation,
  useCancelOrderMutation,
  useReturnOrderMutation,
  useDeliveryOrderMutation,
  useDeliveredOrderMutation,
} = productApi;
export default productApi;
