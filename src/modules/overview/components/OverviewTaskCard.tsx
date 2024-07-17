import { PlusOutlined } from "@ant-design/icons";
import { Checkbox, Tag } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

interface IOverviewTaskCardProps {}

const OverviewTaskCard = ({}: IOverviewTaskCardProps) => {
	// i18n
	const { t } = useTranslation("overviewPage");
	return (
		<div className="flex flex-col w-full min-h-[400px] rounded-lg p-6 bg-white border-2">
			<div className="grid grid-cols-2 gap-8 w-full mb-5">
				<div className="flex w-full flex-col">
					<div className="font-poppins font-medium text-base md:text-2xl mb-3">
						{t("tasks")}
					</div>
					<div className="font-poppins font-medium text-xs md:text-base text-gray-400">
						{t("today")}
					</div>
				</div>
				<div className="text-end flex w-full justify-end items-center">
					<div className=" font-poppins font-medium text-xs md:text-base mb-3 text-sekawan-primary ">
						{t("view-details")}
					</div>
				</div>
			</div>
			<div>
				<div className="flex w-full min-h-[75px] border-b-2 justify-between items-center mb-2">
					<div className="text-xs md:text-base font-medium text-gray-400 font-poppins">
						Create new task
					</div>
					<div className=" cursor-pointer text-center h-7 items-center flex justify-center font-medium bg-gray-200 p-3  rounded-lg">
						<PlusOutlined className="font-bold text-base" text-gray-400 />
					</div>
				</div>
				<div className="flex w-full min-h-[75px] border-b-2 justify-between items-center mb-2">
					<Checkbox>
						<div className="text-xs md:text-base font-poppins">
							Finish ticket update
						</div>
					</Checkbox>
					<div className="w-20 text-center h-7 items-center flex justify-center font-medium bg-yellow-400 p-3 text-white rounded-lg">
						URGENT
					</div>
				</div>
				<div className="flex w-full min-h-[75px] border-b-2 justify-between items-center mb-2">
					<Checkbox>
						<div className="text-xs md:text-base font-poppins">
							Create new ticket example
						</div>
					</Checkbox>
					<div className="w-20 text-center h-7 items-center font-medium flex justify-center bg-green-400 p-3 text-white rounded-lg">
						NEW
					</div>
				</div>
				<div className="flex w-full min-h-[75px] border-b-2 justify-between items-center mb-2">
					<Checkbox>
						<div className="text-xs md:text-base font-poppins">
							Update ticket report
						</div>
					</Checkbox>
					<div className="w-20 text-center h-7 items-center font-medium flex justify-center bg-gray-200 p-3 text-gray-400 rounded-lg">
						DEFAULT
					</div>
				</div>
			</div>
		</div>
	);
};

export default OverviewTaskCard;
