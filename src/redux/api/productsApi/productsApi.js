import { apiSlice } from '../apiSlice';

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
    }),
  }),
});

export const {} = productsApi;
