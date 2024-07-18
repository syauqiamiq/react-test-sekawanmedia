import { panelMenu } from "@/contstants/panel-menu";
import { useAppSelector } from "@/libs/hooks/useAppSelector";
import {
	BellOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	SearchOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

interface IPanelLayout {
	title: string;
	children: React.ReactNode;
}

const PanelLayout = ({ children, title }: IPanelLayout) => {
	const themeMode: any = useAppSelector((state) => state.theme.value);
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const navigate = useNavigate();
	const location = useLocation();
	const getSelectedMenu = (array: any[]) => {
		const found = panelMenu.find((v) => {
			return v.route === location.pathname;
		});

		return [`${found?.route}`];
	};

	const [cookies, setCookie] = useCookies(["i18n", "role-Cookie"]);
	const instanceCookie = new Cookies();

	return (
		<Layout>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				trigger={null}
				collapsible
				collapsed={collapsed}
				onBreakpoint={(broken) => {
					if (broken) {
						setCollapsed(true);
					}
				}}
				width={250}
				className="!bg-sekawan-light dark:!bg-sekawan-dark "
			>
				<div className="bg-sekawan-light dark:bg-sekawan-dark w-full h-24 flex justify-center items-center text-center font-poppins font-medium text-lg md:text-2xl dark:text-white">
					<h5>Dashboard Kit</h5>
				</div>
				<Menu
					className="bg-sekawan-light dark:bg-sekawan-dark text-xs md:text-base font-poppins"
					theme={themeMode}
					mode="inline"
					defaultSelectedKeys={["1"]}
					selectedKeys={getSelectedMenu(panelMenu)}
					items={panelMenu
						.filter((v) => v.role.includes(cookies["role-Cookie"]))
						.map((v, i) => {
							if (cookies.i18n == "en") {
								return {
									key: v.route,
									label: v.labelEn,
									icon: v.icon,
									onClick: () => {
										navigate(v.route);
									},
								};
							}
							return {
								key: v.route,
								label: v.labelId,
								icon: v.icon,
								onClick: () => {
									navigate(v.route);
								},
							};
						})}
				/>
			</Sider>
			<Layout className="dark:bg-gray-900">
				<Header
					style={{ padding: 0, background: colorBgContainer }}
					className="h-20 w-full items-center flex justify-between !bg-sekawan-light dark:!bg-sekawan-dark "
				>
					<div className="flex items-center">
						<Button
							type="text"
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							className=" dark:text-white "
							style={{
								fontSize: "16px",
								width: 64,
								height: 64,
							}}
						/>
						<h2 className="font-poppins font-semibold text-2xl dark:text-white ">
							{title}
						</h2>
					</div>
					<div className="px-10 flex items-center gap-4">
						<SearchOutlined className="text-xl cursor-pointer dark:text-white " />
						<Badge className="cursor-pointer" size="small" count={10}>
							<BellOutlined className="text-xl dark:text-white " />
						</Badge>
						<div className="flex justify-center items-center border-l-2 px-5 ml-5 gap-5">
							<div className="font-poppins font-medium text-base dark:text-white ">
								John Doe
							</div>
							<Dropdown
								className="cursor-pointer"
								menu={{
									items: [
										{
											key: "1",

											label: (
												<span
													onClick={() => {
														instanceCookie.remove("auth-Cookie");
														instanceCookie.remove("role-Cookie");
													}}
													className="cursor-pointer font-poppins font-normal text-base"
												>
													Logout
												</span>
											),
										},
									],
								}}
							>
								<Avatar
									size="large"
									className="dark:bg-sekawan-light dark:text-black"
									icon={<UserOutlined />}
								/>
							</Dropdown>
						</div>
					</div>
				</Header>
				<div className="p-6 m-6 min-h-[100vh] ">{children}</div>
			</Layout>
		</Layout>
	);
};

export default PanelLayout;
