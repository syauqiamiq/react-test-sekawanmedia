import { TablePaginationConfig } from "antd";
import { SorterResult } from "antd/es/table/interface";

export interface IPaginateRequest {
	perPage?: string | number;
	currentPage?: number | any;
}
