import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import { adminApi } from "./services/adminApi";
import { productApi } from "./services/productApi";
import productReducer from "./features/productSlice";
import { cartApi } from "./services/cartApi";
export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        product: productReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware).concat(adminApi.middleware).concat(productApi.middleware).concat(cartApi.middleware),

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;