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

export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        prepareHeaders: (headers) => {
            const token = Cookies.get("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => '/admin/products',
            providesTags: ['Products']
        }),
        addProduct: builder.mutation<Product, FormData>({
            query: (formData) => ({
                url: '/admin/create-product',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Products']
        }),

    }),
});

export const { useGetProductsQuery, useAddProductMutation } = adminApi;
