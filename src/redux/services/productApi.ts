import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie'

export interface Product {

    _id: string;
    name: string;
    price: number;
    description: string;
    order: number;
    image?: string;
}
export interface Pagination {
    page: number,
    limit: number,
    totalPages: number,
    total: number
}
export interface Products {
    products: Product[],
    pagination: Pagination

}
export const productApi = createApi({
    reducerPath: "productApi",
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
    tagTypes: ["Wishlist"],
    endpoints: (builder) => ({
        getProducts: builder.query<Products, { query?: string, category?: string, page?: number, limit?: number }>({
            query: ({ query, category, page, limit }) => ({
                url: "/products/all",
                method: "GET",
                params: {
                    query,
                    category,
                    page,
                    limit
                }
            })
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