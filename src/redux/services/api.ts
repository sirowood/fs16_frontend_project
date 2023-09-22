import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.escuelajs.co/api/v1/';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Products', 'Categories'],
  endpoints: () => ({}),
});

export default api;