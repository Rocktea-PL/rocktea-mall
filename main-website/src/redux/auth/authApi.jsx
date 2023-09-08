import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://rocktea-mall-api-test.up.railway.app/rocktea/storeowner/';

export const registerUser = createApi({
  reducerPath: 'register',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: 'register',
        method: 'POST',
        body: user,
      }),
      providesTags: ['RegisterUser'],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: 'login',
        method: 'POST',
        body: user,
      }),
      providesTags: ['LoginUser'],
    }),
    forgetPassword: builder.mutation({
      query: (email) => ({
        url: 'forget-password',
        method: 'POST',
        body: email,
      }),
      providesTags: ['ForgetPassword'],
    }),
    resetPassword: builder.mutation({
      query: (password, id) => ({
        url: `forget-password/${id}`,
        method: 'POST',
        body: password,
      }),
      providesTags: ['ResetPassword'],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
} = registerUser;