import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie'
import type { CartProduct } from "./cartApi";

export const paymentApi = createApi({
    reducerPath: "paymentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = Cookies.get("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        checkout: builder.mutation<{ url: string }, { cartItems: CartProduct[] }>({
            query: ({ cartItems }) => ({
                url: "/payment/create-checkout-session",
                method: "POST",
                body: cartItems,
            }),
        }),

    }),
});


export const { useCheckoutMutation} = paymentApi;