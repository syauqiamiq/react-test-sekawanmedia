import React from "react";

interface IInfoCardProps {
	title: string | any;
	value: string | any;
}
const InfoCard = ({ title, value }: IInfoCardProps) => {
	return (
		<div className="flex flex-col w-full justify-center items-center h-32 dark:shadow-lg dark:shadow-black dark:bg-sekawan-dark dark:text-white  border-2 rounded-lg bg-white cursor-pointer hover:border-sekawan-primary">
			<div className=" mb-3 text-base md:text-lg font-poppins font-normal text-gray-400">
				{title}
			</div>
			<div className="text-lg md:text-2xl font-poppins font-semibold">
				{value}
			</div>
		</div>
	);
};

export default InfoCard;
