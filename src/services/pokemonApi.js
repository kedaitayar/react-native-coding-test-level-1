import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  keepUnusedDataFor: 30,
  endpoints: (build) => ({
    getPokemonList: build.query({
      query: (offset) => {
        return {
          url: "pokemon/",
          params: {
            limit: "10",
            offset: offset,
          },
        };
      },
    }),
    getPokemonDetail: build.query({
      query: (id) => {
        return {
          url: "pokemon/" + id,
        };
      },
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailQuery } = pokemonApi;
