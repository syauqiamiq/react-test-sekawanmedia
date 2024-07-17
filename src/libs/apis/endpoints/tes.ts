import { baseApi } from "../config/base-query";

export const pokemonApi = baseApi.enhanceEndpoints({}).injectEndpoints({
	endpoints: (builder) => {
		return {
			getPokemonByName: builder.query<any[]>({
				query: () => ({
					method: "GET",
					url: "/",
				}),
			}),
		};
	},
});

export const { useGetPokemonByNameQuery } = pokemonApi;
