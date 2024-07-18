import {
	FileOutlined,
	FundProjectionScreenOutlined,
	ProfileOutlined,
	ReadOutlined,
	SaveOutlined,
	SettingOutlined,
	SolutionOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

export const panelMenu = [
	{
		icon: <FundProjectionScreenOutlined />,
		label: "Overview",
		route: "/overview",
	},
	{
		icon: <FileOutlined />,
		label: "Tickets",
		route: "/ticket",
	},
	{
		key: "3",
		icon: <ReadOutlined />,
		label: "Ideas",
		route: "/ideas",
	},
	{
		icon: <ProfileOutlined />,
		label: "Contacts",
		route: "/contacts",
	},
	{
		icon: <UserOutlined />,
		label: "Agents",
		route: "/agents",
	},
	{
		icon: <SolutionOutlined />,
		label: "Article",
		route: "/article",
	},
	{
		icon: <SettingOutlined />,
		label: "Settings",
		route: "/settings",
	},
	{
		icon: <SaveOutlined />,
		label: "Subscription",
		route: "/subscription",
	},
];
