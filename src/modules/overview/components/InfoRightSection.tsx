import React from "react";

interface IInfoRightSection {
	title: string;
	description: string | any;
}

const InfoRightSection = ({ title, description }: IInfoRightSection) => {
	return (
		<div className="flex flex-col w-full min-h-[100px] border-b-2 justify-center items-center mb-5 text-center">
			<div className="text-sm md:text-xl text-gray-400 font-poppins">
				{title}
			</div>
			<div className="text-sm md:text-xl font-poppins font-medium mt-2 mb-2 dark:text-white">
				{description}
			</div>
		</div>
	);
};

export default InfoRightSection;
