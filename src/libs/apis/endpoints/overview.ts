import {
	IOverview,
	IOverviewStatistic,
	IUnresolveTicket,
} from "@/interfaces/apis/overview";
import { baseApi } from "../config/base-query";

export const overviewApi = baseApi.enhanceEndpoints({}).injectEndpoints({
	endpoints: (builder) => {
		return {
			getOverview: builder.query<IOverview[], "">({
				query: () => ({
					method: "GET",
					url: "/overview",
					cache: "no-cache",
				}),
			}),
			getOverviewStatistic: builder.query<IOverviewStatistic[], "">({
				query: () => ({
					method: "GET",
					url: "/overview-statistic",
					cache: "no-cache",
				}),
			}),
			getUnresolveTicket: builder.query<IUnresolveTicket[], "">({
				query: () => ({
					method: "GET",
					url: "/unresolved-ticket",
					cache: "no-cache",
				}),
			}),
		};
	},
});

export const {
	useGetOverviewQuery,
	useGetOverviewStatisticQuery,
	useGetUnresolveTicketQuery,
} = overviewApi;
