import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import { adminApi } from "./services/adminApi";
import { productApi } from "./services/productApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware).concat(adminApi.middleware).concat(productApi.middleware),

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;