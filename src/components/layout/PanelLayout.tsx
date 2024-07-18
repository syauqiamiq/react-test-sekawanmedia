import { panelMenu } from "@/contstants/panel-menu";
import {
	BellOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	SearchOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

interface IPanelLayout {
	title: string;
	children: React.ReactNode;
}
const PanelLayout = ({ children, title }: IPanelLayout) => {
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

	return (
		<Layout>
			<Sider
				breakpoint="md"
				collapsedWidth="0"
				trigger={null}
				collapsible
				collapsed={collapsed}
				width={250}
				className="!bg-sekawan-dark"
			>
				<div className="bg-sekawan-dark w-full h-24 flex justify-center items-center text-center font-poppins font-medium text-lg md:text-2xl text-white">
					<h5>Dashboard Kit</h5>
				</div>
				<Menu
					className="bg-sekawan-dark text-xs md:text-base font-poppins"
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["1"]}
					selectedKeys={getSelectedMenu(panelMenu)}
					items={panelMenu.map((v, i) => {
						return {
							key: v.route,
							label: v.label,
							icon: v.icon,
							onClick: () => {
								navigate(v.route);
							},
						};
					})}
				/>
			</Sider>
			<Layout>
				<Header
					style={{ padding: 0, background: colorBgContainer }}
					className="h-20 w-full items-center flex justify-between"
				>
					<div className="flex items-center">
						<Button
							type="text"
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: "16px",
								width: 64,
								height: 64,
							}}
						/>
						<h2 className="font-poppins font-semibold text-2xl">{title}</h2>
					</div>
					<div className="px-10 flex items-center gap-4">
						<SearchOutlined className="text-xl cursor-pointer" />
						<Badge className="cursor-pointer" size="small" count={10}>
							<BellOutlined className="text-xl" />
						</Badge>
						<div className="flex justify-center items-center border-l-2 px-5 ml-5 gap-5">
							<div className="font-poppins font-medium text-base">John Doe</div>
							<Avatar size="large" icon={<UserOutlined />} />
						</div>
					</div>
				</Header>
				<div className="p-6 m-6 min-h-[100vh]">{children}</div>
			</Layout>
		</Layout>
	);
};

export default PanelLayout;
