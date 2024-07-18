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
		route: "/overview",
	},
	{
		icon: <FileOutlined />,
		labelEn: "Tickets",
		labelId: "Tiket",
		route: "/ticket",
	},
	{
		key: "3",
		icon: <ReadOutlined />,
		labelEn: "Ideas",
		labelId: "Ide",
		route: "/ideas",
	},
	{
		icon: <ProfileOutlined />,
		labelEn: "Contacts",
		labelId: "Kontak",
		route: "/contacts",
	},
	{
		icon: <UserOutlined />,
		labelEn: "Agents",
		labelId: "Agen",
		route: "/agents",
	},
	{
		icon: <SolutionOutlined />,
		labelEn: "Article",
		labelId: "Artikel",
		route: "/article",
	},
	{
		icon: <SettingOutlined />,
		labelEn: "Settings",
		labelId: "Pengaturan",
		route: "/settings",
	},
	{
		icon: <SaveOutlined />,
		labelEn: "Subscription",
		labelId: "Berlangganan",
		route: "/subscription",
	},
];
