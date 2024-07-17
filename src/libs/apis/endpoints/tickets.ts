import { IOverview, IOverviewStatistic } from "@/interfaces/apis/overview";
import { baseApi } from "../config/base-query";
import { ITicket } from "@/interfaces/apis/ticket";
import { generateParamFilter } from "@/libs/functions/api-helper";
import { IQueryParam } from "@/interfaces/api-interface";

export const ticketApi = baseApi.enhanceEndpoints({}).injectEndpoints({
	endpoints: (builder) => {
		return {
			getAllTicket: builder.query<ITicket[], IQueryParam | void>({
				query: (arg) => ({
					method: "GET",
					url: `/tickets?${generateParamFilter(arg)}`,
					cache: "no-cache",
				}),
			}),
		};
	},
});

export const { useGetAllTicketQuery } = ticketApi;
