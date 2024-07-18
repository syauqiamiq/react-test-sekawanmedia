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
		labelEn: "Overview",
		labelId: "Ringkasan",
		role: ["admin"],
		route: "/overview",
	},
	{
		icon: <FileOutlined />,
		labelEn: "Tickets",
		labelId: "Tiket",
		role: ["admin", "guest"],
		route: "/ticket",
	},
	{
		key: "3",
		icon: <ReadOutlined />,
		labelEn: "Ideas",
		labelId: "Ide",
		role: ["admin", "guest"],
		route: "/ideas",
	},
	{
		icon: <ProfileOutlined />,
		labelEn: "Contacts",
		labelId: "Kontak",
		role: ["admin", "guest"],
		route: "/contacts",
	},
	{
		icon: <UserOutlined />,
		labelEn: "Agents",
		labelId: "Agen",
		role: ["admin", "guest"],
		route: "/agents",
	},
	{
		icon: <SolutionOutlined />,
		labelEn: "Article",
		labelId: "Artikel",
		role: ["admin", "guest"],
		route: "/article",
	},
	{
		icon: <SettingOutlined />,
		labelEn: "Settings",
		labelId: "Pengaturan",
		role: ["admin", "guest"],
		route: "/settings",
	},
	{
		icon: <SaveOutlined />,
		labelEn: "Subscription",
		labelId: "Berlangganan",
		role: ["admin", "guest"],
		route: "/subscription",
	},
];
