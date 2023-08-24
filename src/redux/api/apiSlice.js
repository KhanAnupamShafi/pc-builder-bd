import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pc-parts-api-henna.vercel.app/',
  }),
  endpoints: () => ({}),
});
