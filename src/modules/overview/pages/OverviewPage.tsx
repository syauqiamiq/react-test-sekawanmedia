import InfoCard from "@/components/card/InfoCard";
import PanelLayout from "@/components/layout/PanelLayout";
import BasicSkeleton from "@/components/skeleton/BasicSkeleton";
import {
	useGetOverviewQuery,
	useGetOverviewStatisticQuery,
} from "@/libs/apis/endpoints/overview";
import InfoRightSection from "../components/InfoRightSection";
import UnresolveTicketCard from "../components/UnresolveTicketCard";
import OverviewTaskCard from "../components/OverviewTaskCard";
import ReactApexChart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const OverviewPage = () => {
	// i18n
	const { t } = useTranslation("overviewPage");
	// Fetch
	const {
		data: overviewData,
		isFetching: overviewFetching,
		isLoading: overviewLoading,
		isError: overviewError,
	} = useGetOverviewQuery("");

	// Fetch
	const {
		data: overviewStatisticData,
		isFetching: overviewStatisticFetching,
		isLoading: overviewStatisticLoading,
		isError: overviewStatisticError,
	} = useGetOverviewStatisticQuery("");

	return (
		<PanelLayout title={t("page-title")}>
			<div className="grid  grid-cols-1 md:grid-cols-4  gap-4">
				{overviewFetching || overviewLoading
					? [1, 2, 3, 4].map((_, i) => {
							return <BasicSkeleton key={i} shape="square" size="large" />;
					  })
					: overviewError
					? "SOMETHING WRONG WITH API"
					: overviewData?.map((v, i) => {
							return <InfoCard key={i} title={v.type} value={v.total} />;
					  })}
			</div>

			<div className="grid grid-cols-1 w-full mt-6">
				<div className="flex w-full min-h-[500px] rounded-lg p-6 bg-white border-2">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full ">
						<div>
							<h4 className="font-poppins font-medium text-3xl">
								{t("today-trend")}
							</h4>
							<ReactApexChart
								height={"100%"}
								type="line"
								options={{
									chart: {
										id: "apexchart-example",
									},
									xaxis: {
										categories: [
											1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
										],
									},
								}}
								series={[
									{
										name: "series-1",
										data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
									},
								]}
							/>
						</div>
						<div className="flex flex-col">
							{overviewStatisticFetching || overviewStatisticLoading
								? [1, 2, 3, 4].map((_, i) => {
										return (
											<div key={i} className="mb-10">
												<BasicSkeleton shape="square" size="large" />
											</div>
										);
								  })
								: overviewStatisticError
								? "SOMETHING WRONG WITH API"
								: overviewStatisticData?.map((v, i) => {
										if (v.type == 3) {
											return (
												<InfoRightSection
													key={i}
													title={v.title}
													description={`${Math.round(
														v.total / 60
													)}h ${Math.round(v.total % 60)}m`}
												/>
											);
										}
										if (v.type == 4) {
											return (
												<InfoRightSection
													key={i}
													title={v.title}
													description={`${Math.round(
														v.total / 60
													)}h ${Math.round(v.total % 60)}m`}
												/>
											);
										}
										if (v.type == 5) {
											return (
												<InfoRightSection
													key={i}
													title={v.title}
													description={`${v.total}%`}
												/>
											);
										}
										return (
											<InfoRightSection
												key={i}
												title={v.title}
												description={v.total}
											/>
										);
								  })}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-6">
				<UnresolveTicketCard />
				<OverviewTaskCard />
			</div>
		</PanelLayout>
	);
};

export default OverviewPage;
