import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;

}
interface LoginRequest {
  email: string;
  password: string;
}
interface LoginResponse {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    token: string;
    id: string;
  };
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
      credentials: 'include',
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    loginUser: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;

