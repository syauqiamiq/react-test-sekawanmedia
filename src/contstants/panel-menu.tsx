import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

export const panelMenu: ItemType<MenuItemType>[] = [
	{
		key: "1",
		icon: <UserOutlined />,
		label: "Overview",
	},
	{
		key: "2",
		icon: <VideoCameraOutlined />,
		label: "Tickets",
	},
	{
		key: "3",
		icon: <UploadOutlined />,
		label: "Ideas",
	},
	{
		key: "4",
		icon: <UploadOutlined />,
		label: "Contacts",
	},
	{
		key: "5",
		icon: <UploadOutlined />,
		label: "Agents",
	},
	{
		key: "6",
		icon: <UploadOutlined />,
		label: "Article",
	},
	{
		key: "7",
		icon: <UploadOutlined />,
		label: "Settings",
	},
	{
		key: "8",
		icon: <UploadOutlined />,
		label: "Subscription",
	},
];
