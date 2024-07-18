import { Pagination, Table, TableProps } from "antd";
import { ColumnType } from "antd/es/table";

interface IBaseTableProps {
	columns: ColumnType<any>[];
	dataSource: any;
	loading?: boolean;
	rowPerPage?: number | any;
	totalData?: number | any;
	currentPage?: number | any;
	onChange?: TableProps["onChange"];
	onPageChange?: (page: number, pageSize: number) => void;
}

const BaseTable = ({
	columns,
	dataSource,
	loading,
	onChange,
	onPageChange,
	totalData,
	currentPage,
	rowPerPage,
}: IBaseTableProps) => {
	return (
		<>
			<div className="mb-3">
				<Table
					columns={columns}
					dataSource={dataSource}
					loading={loading}
					onChange={onChange}
					pagination={false}
				/>
			</div>
			<div className="flex w-full justify-center md:justify-end">
				<Pagination
					responsive={true}
					pageSize={rowPerPage}
					current={currentPage}
					pageSizeOptions={[5, 10, 25, 50, 100]}
					defaultCurrent={1}
					total={totalData}
					showQuickJumper={true}
					showSizeChanger={true}
					hideOnSinglePage={false}
					onChange={onPageChange}
				/>
			</div>
		</>
	);
};

export default BaseTable;
