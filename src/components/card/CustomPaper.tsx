import React, { ReactNode } from "react";

interface ICustomPaperProps {
	children: ReactNode;
	className?: string;
}

const CustomPaper = ({ children, className }: ICustomPaperProps) => {
	return (
		<div className="grid grid-cols-1 w-full mt-6">
			<div
				className={`flex w-full  rounded-lg p-6 bg-white border-2 ${className}`}
			>
				{children}
			</div>
		</div>
	);
};

export default CustomPaper;
