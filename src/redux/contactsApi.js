import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62c572eda361f7251284b2df.mockapi.io/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetContactsQuery, useDeleteContactMutation } = contactsApi;
