import { IQueryParam } from "@/interfaces/api-interface";

export const generateParamFilter = (queryParam: IQueryParam | any) => {
	let result = "";
	if (queryParam) {
		const param = [
			...(queryParam.limit
				? [`${queryParam.limit ? "_limit=" + queryParam.limit : 25}`]
				: []),
			...(queryParam.page
				? [`${queryParam.page ? "_page=" + queryParam.page : 1}`]
				: []),
		];
		result = param.join("&");
	}
	return result;
};

export const setParam = (label?: string, value?: string) => {
	return value != undefined && value != ""
		? `&${label ?? value!}=` + value!
		: "";
};
