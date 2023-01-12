import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': 'e9e575717amshb50d0bfc19932dcp134842jsn8607d7899801'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest =(url) =>({ url, headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
          query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
      }),
    });
    
    export const { useGetCryptoNewsQuery } = cryptoNewsApi;