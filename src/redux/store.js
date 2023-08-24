import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import pcPartsReducer from './features/pcPartsSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    pcParts: pcPartsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
