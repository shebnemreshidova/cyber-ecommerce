import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie'
import type { Category } from "./adminApi";

export const categoryApi = createApi({
    reducerPath: "categoryApi",
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
    tagTypes: ["Category"],
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => "/category/all",
        }),

    }),
});


export const {useGetCategoriesQuery } = categoryApi;