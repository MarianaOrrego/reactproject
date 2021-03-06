import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const toDosApi = createApi({

    reducerPath: 'toDos',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) =>({

        getToDos: builder.query({
            query: () => '/todos'
        }),
        getToDosId: builder.query({
            query: (toDoId) => `/todos/${toDoId}`
        }),
    })
})

export const { useGetToDosQuery, useGetToDosIdQuery } = toDosApi;