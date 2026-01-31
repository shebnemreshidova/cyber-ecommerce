import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie'
import type { Product } from "./adminApi";

export interface CartProduct {
    quantity: number
    product: Product
}

export const cartApi = createApi({
    reducerPath: "cartApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        prepareHeaders: (headers) => {
            const token = Cookies.get("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Cart"],
    endpoints: (builder) => ({
        getCartItems: builder.query<CartProduct[], void>({
            query: () => "/cart/all",
            providesTags: ['Cart'],

        }),

        addCart: builder.mutation<void, { productId: string }>({
            query: (item) => ({
                url: "/cart/add",
                method: "POST",
                body: item,
            }),
            invalidatesTags: ['Cart'],
        }),
        removeCart: builder.mutation<void, { productId: string }>({
            query: (item) => ({
                url: "/cart/remove",
                method: "DELETE",
                body: item,
            }),
            invalidatesTags: ['Cart'],
        }),
        decreaseCount: builder.mutation<void, { productId: string }>({
            query: (item) => ({
                url: "/cart/decrease",
                method: "POST",
                body: item,
            }),
            invalidatesTags: ['Cart'],
        }),


    }),
});


export const { useAddCartMutation, useGetCartItemsQuery, useRemoveCartMutation, useDecreaseCountMutation } = cartApi;