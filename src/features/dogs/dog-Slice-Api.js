import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const DOGS_API_KEY = '2de583d7-51ff-42a8-a4ec-2135774c1236';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', DOGS_API_KEY);

            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query({
                query(limit = 10) {
                    return `/breeds?limit=${limit}`
                }
            })
        }
    }
})

export const {useFetchBreedsQuery} = apiSlice;