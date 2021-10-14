import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/crypyoApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
