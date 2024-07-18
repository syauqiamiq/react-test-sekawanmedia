import BasicSkeleton from "@/components/skeleton/BasicSkeleton";
import { useGetUnresolveTicketQuery } from "@/libs/apis/endpoints/overview";
import React from "react";
import { useTranslation } from "react-i18next";

const UnresolveTicketCard = () => {
	// i18n
	const { t } = useTranslation("overviewPage");
	// Fetch
	const {
		data: unresolveTicketData,
		isFetching: unresolveTicketFetching,
		isLoading: unresolveTicketLoading,
		isError: unresolveTicketError,
	} = useGetUnresolveTicketQuery("");
	return (
		<div className="flex flex-col w-full min-h-[400px] rounded-lg p-6 bg-white dark:bg-sekawan-dark border-2">
			<div className="grid grid-cols-2 gap-8 w-full mb-5">
				<div className="flex w-full flex-col">
					<div className="font-poppins font-medium text-base md:text-2xl dark:text-white mb-3">
						{t("unresolved-ticket")}
					</div>
					<div className="font-poppins font-medium text-xs md:text-base text-gray-400">
						{t("group")}:{" "}
						<span className="text-black font-semibold dark:text-white">
							Support
						</span>
					</div>
				</div>
				<div className="text-end flex w-full justify-end items-center">
					<div className=" font-poppins font-medium text-xs md:text-base mb-3 dark:text-white text-sekawan-primary ">
						{t("view-details")}
					</div>
				</div>
			</div>
			<div>
				{unresolveTicketFetching || unresolveTicketLoading
					? [1, 2, 3, 4].map((_, i) => {
							return (
								<div key={i} className="mb-10">
									<BasicSkeleton shape="square" size="large" />
								</div>
							);
					  })
					: unresolveTicketError
					? "SOMETHING WRONG WITH API"
					: unresolveTicketData?.map((v, i) => {
							return (
								<div
									key={i}
									className="flex w-full min-h-[75px] border-b-2 justify-between items-center mb-2"
								>
									<div className="text-xs md:text-base font-poppins dark:text-white">
										{v.type}
									</div>
									<div className="text-xs md:text-base font-poppins font-medium mt-2 mb-2  text-gray-400">
										{v.total}
									</div>
								</div>
							);
					  })}
			</div>
		</div>
	);
};

export default UnresolveTicketCard;
