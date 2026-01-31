import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie'
import type { Product } from "./adminApi";

export const productApi = createApi({
    reducerPath: "productApi",
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
    tagTypes: ["Wishlist"],
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "/products/all",
        }),
        getWishlist: builder.query<Product[], void>({
            query: () => `/products/wishlist/all`,
            providesTags: ['Wishlist'],
        }),
        toggleWishlist: builder.mutation<void, { productId: string }>({
            query: ({ productId }) => ({
                url: "/products/wishlist/toggle",
                method: "POST",
                body: { productId },
            }),
            invalidatesTags: ['Wishlist'],
        }),

        syncWishlist: builder.mutation<Product[], { productId: string }[]>({
            query: (productIds) => ({
                url: "/products/sync-wishlist",
                method: "POST",
                body: productIds,
            }),
            invalidatesTags: ['Wishlist'],
        }),
    }),
});


export const { useGetProductsQuery, useGetWishlistQuery, useToggleWishlistMutation, useSyncWishlistMutation } = productApi;