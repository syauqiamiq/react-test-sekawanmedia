import { useAppSelector } from "@/libs/hooks/useAppSelector";
import { ConfigProvider, Pagination, Table, TableProps, theme } from "antd";
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
	const themeMode = useAppSelector((state) => state.theme.value);

	return (
		<>
			<div className="mb-3">
				<ConfigProvider
					theme={{
						components: {
							Table: {
								headerBg: `${themeMode === "dark" && "#23272F"}`,
								headerColor: `${themeMode === "dark" && "#23272F"}`,
								colorBgContainer: `${themeMode === "dark" && "#23272F"}`,
								rowHoverBg: `${themeMode === "dark" && "#152326"}`,
							},
						},
					}}
				>
					<Table
						columns={columns}
						dataSource={dataSource}
						loading={loading}
						onChange={onChange}
						pagination={false}
					/>
				</ConfigProvider>
			</div>
			<div className="flex w-full justify-center md:justify-end">
				<ConfigProvider
					theme={{
						components: {
							Pagination: {
								colorText: `${themeMode === "dark" && "#FFF"}`,
								colorTextDisabled: `${themeMode === "dark" && "#717373"}`,
								colorBgContainer: `${themeMode === "dark" && "#152326"}`,
							},
						},
					}}
				>
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
				</ConfigProvider>
			</div>
		</>
	);
};

export default BaseTable;
