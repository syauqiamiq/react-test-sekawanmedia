import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	reducerPath: "pokemonApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
	endpoints: () => ({}),
});
