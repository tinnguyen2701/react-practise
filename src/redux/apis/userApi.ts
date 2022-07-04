import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '../slices/userSlice';
import { IUser } from '../../types';
import { BasePathAPIUrl } from '../../utils/constants';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BasePathAPIUrl}/users/`,
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query<(IUser | any), null>({
      query() {
        return {
          url: 'me',
          credentials: 'include',
        };
      },
      transformResponse: (result: IUser ) => result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }
    ),
    getListFiends: builder.query({
      query: (currentUserId: string) => `getListFriends?currentUserId=${currentUserId}`,
      transformResponse: (response: any) => response.data
    }),
  }),
});

export const { useGetListFiendsQuery } = userApi