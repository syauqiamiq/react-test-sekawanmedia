import CustomPaper from "@/components/card/CustomPaper";
import PanelLayout from "@/components/layout/PanelLayout";
import BaseTable from "@/components/table/BaseTable";
import PriorityTag from "@/components/tag/PriorityTag";
import { ITicket } from "@/interfaces/apis/ticket";
import { IPaginateRequest } from "@/interfaces/table";
import { useGetAllTicketQuery } from "@/libs/apis/endpoints/tickets";
import { dateFormatter } from "@/libs/functions/date-formatter";
import {
	FilterFilled,
	MoreOutlined,
	SortDescendingOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { differenceInDays } from "date-fns";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ITicketPageProps {}

const TicketPage = ({}: ITicketPageProps) => {
	const { t } = useTranslation("ticketPage");

	const [paginateRequest, setPaginateRequest] = useState<IPaginateRequest>({
		currentPage: 1,
		perPage: 10,
	});

	const {
		isLoading: ticketLoading,
		isError: ticketError,
		isFetching: ticketFetching,
		data: ticketData,
	} = useGetAllTicketQuery({
		limit: paginateRequest.perPage,
		page: paginateRequest.currentPage,
	});

	return (
		<PanelLayout title={t("page-title")}>
			<CustomPaper className="min-h-[750px] flex-col dark:bg-sekawan-dark">
				<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 mb-10">
					<div className="flex justify-start items-center">
						<h4 className="font-poppins font-medium text-2xl dark:text-white">
							{t("all-tickets")}
						</h4>
					</div>
					<div className="flex gap-5 justify-start md:justify-end items-center">
						<div className="flex justify-center items-center gap-2 cursor-pointer">
							<SortDescendingOutlined className="text-gray-400" />
							<h5 className="font-poppins text-lg text-gray-400">
								{t("sort")}
							</h5>
						</div>
						<div className="flex justify-center items-center gap-2 cursor-pointer">
							<FilterFilled className="text-gray-400" />
							<h5 className="font-poppins text-lg text-gray-400">
								{t("filter")}
							</h5>
						</div>
					</div>
				</div>
				{ticketError ? (
					"SOMETHING WRONG WITH API"
				) : (
					<BaseTable
						columns={[
							{
								key: "ticket-details",
								title: () => {
									return (
										<h1 className="dark:text-white">{t("ticket-details")}</h1>
									);
								},
								render: (value: ITicket, _, i) => {
									return (
										<div className="flex w-full gap-3  items-center ">
											<Avatar
												size="default"
												className="w-16 h-14"
												icon={<UserOutlined />}
											/>
											<div className="flex w-full flex-col gap-2">
												<h4 className="font-poppins text-lg font-medium dark:text-white">
													{value.description}
												</h4>
												<h5 className="font-poppins text-sm text-gray-300 font-normal">
													{`${t("updated")} ${
														differenceInDays(
															new Date(value.updated_at.replace(" ", "")),
															new Date()
														) * -1
													} ${t("days-ago")}`}
												</h5>
											</div>
										</div>
									);
								},
							},
							{
								key: "customer-name",
								title: () => {
									return (
										<h1 className="dark:text-white">{t("customer-name")}</h1>
									);
								},
								render: (value: ITicket, _, i) => {
									return (
										<div className="flex flex-col w-full gap-2">
											<h4 className="font-poppins text-lg font-medium dark:text-white">
												{value.creator}
											</h4>
											<h5 className="font-poppins text-sm text-gray-300 font-normal">
												{`${t("on")} ${dateFormatter(
													new Date(value.created_at.replace(" ", "")),
													"d.MMMM.y"
												)}`}
											</h5>
										</div>
									);
								},
							},
							{
								key: "due-date",
								title: () => {
									return <h1 className="dark:text-white">{t("due-date")}</h1>;
								},
								render: (value: ITicket, _, i) => {
									return (
										<div className="flex flex-col w-full gap-2">
											<h4 className="font-poppins text-lg font-medium dark:text-white">
												{dateFormatter(
													new Date(value.due_date.replace(" ", "")),
													"MMMM d, y"
												)}
											</h4>
											<h5 className="font-poppins text-base text-gray-300 font-normal">
												{dateFormatter(
													new Date(value.due_date.replace(" ", "")),
													"h:ii a	"
												)}
											</h5>
										</div>
									);
								},
							},
							{
								key: "priority",
								title: () => {
									return <h1 className="dark:text-white">{t("priority")}</h1>;
								},
								render: (value: ITicket, _, i) => (
									<PriorityTag value={value.priority} />
								),
							},
							{
								key: "action",
								title: () => {
									return <h1 className="dark:text-white">{t("action")}</h1>;
								},
								render: (value: ITicket, _, i) => {
									return (
										<MoreOutlined className="text-2xl cursor-pointer dark:text-white" />
									);
								},
							},
						]}
						dataSource={ticketData?.map((data, _) => {
							return {
								key: data.id,
								...data,
							};
						})}
						loading={ticketFetching || ticketLoading}
						onPageChange={(newPage, pageSize) => {
							setPaginateRequest({
								...paginateRequest,
								currentPage: newPage,
								perPage: pageSize,
							});
						}}
						currentPage={paginateRequest.currentPage}
						// HARDCODED DUE TO BACKEND LIMITATION
						totalData={11}
						rowPerPage={paginateRequest.perPage}
					/>
				)}
			</CustomPaper>
		</PanelLayout>
	);
};

export default TicketPage;
