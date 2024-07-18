import React from "react";

type PriorityLevelType = "NORMAL" | "LOW" | "HIGH";
interface IPriorityTag {
	value: PriorityLevelType;
}

const PriorityTag = ({ value }: IPriorityTag) => {
	return value == "HIGH" ? (
		<div className="w-20 text-center h-7 items-center flex justify-center font-medium bg-red-400 p-3 text-white rounded-lg">
			High
		</div>
	) : value == "LOW" ? (
		<div className="w-20 text-center h-7 items-center flex justify-center font-medium bg-yellow-400 p-3 text-white rounded-lg">
			Low
		</div>
	) : (
		<div className="w-20 text-center h-7 items-center flex justify-center font-medium bg-green-400 p-3 text-white rounded-lg">
			Normal
		</div>
	);
};

export default PriorityTag;
