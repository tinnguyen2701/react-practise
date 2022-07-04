import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BasePathAPIUrl } from '../../utils/constants';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BasePathAPIUrl}/posts/`,
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getSummaryPost: builder.query({
      query: () => `getSummaryPost`,
      transformResponse: (response: any) => response.data
    }),
  }),
});

export const { useGetSummaryPostQuery } = postApi