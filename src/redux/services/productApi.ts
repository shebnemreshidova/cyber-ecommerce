import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
interface Product {
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
    }),
});

export const { useGetProductsQuery, } = productApi;
