import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_BASE_URL ?? 'https://localhost:7060/api/v1/';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    }
  }),
  tagTypes: ['Products', 'Categories', 'Users', 'Profile', 'Orders'],
  endpoints: () => ({}),
});

export default api;
