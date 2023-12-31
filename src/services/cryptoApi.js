import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
 'x-rapidapi-key': '00265913d0msh6e06e96bebf8bb3p1f4bd9jsn46738a36fa55'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
 reducerpath: 'cryptoApi',
 baseQuery: fetchBaseQuery({ baseUrl }),
 endpoints: (builder) => ({
  getCryptos: builder.query({
   query: (count) => createRequest(`/coins?limit=${count}`),
  }),
  getCryptoDetails: builder.query({
   query: (coinId) => createRequest(`/coin/${coinId}`),
  })
 })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;


