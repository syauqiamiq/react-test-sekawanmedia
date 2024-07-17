import { API_URL } from "@/configs/api-setting";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: () => ({}),
});
