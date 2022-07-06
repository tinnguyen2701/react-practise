import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../types';
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
    getPostScheduleByDatetime: builder.query({
      query: (params: {day: number, month: number, year: number}) => 
        `getPostScheduleByDatetime?day=${params.day}&month=${params.month}&year=${params.year}`,
    }),
    getPostById: builder.query<IPost | any, string>({
      query: (postId: string) => 
        `getPostById?postId=${postId}`,
      transformResponse: (result: IPost ) => result,
    }),
    getAllPostSchedule: builder.query<IPost[] | any, null>({
      query: () => 
        `getAllPostSchedule`,
      transformResponse: (result: IPost[] ) => result,
    })
  }),
});

export const { 
  useGetSummaryPostQuery, 
  useGetPostScheduleByDatetimeQuery,
  useGetPostByIdQuery,
  useGetAllPostScheduleQuery } = postApi