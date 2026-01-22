import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    order: number;
    image?: string;
}

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
        prepareHeaders: (headers) => {
            const token = Cookies.get("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => '/products/all',
        }),
        getWishlist: builder.query<Product[], { userId: string | null }>({
            query: ({ userId }) => `/products/wishlist/${userId}`,
        }),
        addToWishlist: builder.mutation({
            query: (wishlistItem) => ({
                url: `/products/add-wishlist`,
                method: 'POST',
                body: wishlistItem,
            }),
        }),
        removeFromWishlist: builder.mutation({
            query: ({ userId, productId }) => ({
                url: `/products/remove-wishlist`,
                method: 'DELETE',
                body: { userId, productId },
            }),
        }),
        wishlistLocalSync: builder.mutation({
            query: ({ userId, localItems }) => ({
                url: `/products/sync-wishlist`,
                method: 'POST',
                body: { userId, items: localItems },
            }),
        })
    }),
});

export const { useGetProductsQuery, useGetWishlistQuery, useAddToWishlistMutation, useRemoveFromWishlistMutation, useWishlistLocalSyncMutation } = productApi;
