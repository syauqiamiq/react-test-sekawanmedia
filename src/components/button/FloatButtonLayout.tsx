import { FlagOutlined, SettingOutlined, SwapOutlined } from "@ant-design/icons";
import { Drawer, FloatButton } from "antd";
import { ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface IFloatButtonLayoutProps {
	children: ReactNode;
}

const FloatButtonLayout = ({ children }: IFloatButtonLayoutProps) => {
	const [openAppCostumizeDrawer, setOpenAppCostumizeDrawer] = useState(false);

	const { t } = useTranslation("common");

	const showAppCostumizeDrawer = () => {
		setOpenAppCostumizeDrawer(true);
	};

	const onCloseAppOptimizeDrawer = () => {
		setOpenAppCostumizeDrawer(false);
	};

	const [openLanguageCostumizeDrawer, setOpenLanguageCostumizeDrawer] =
		useState(false);

	const showLanguageCostumizeDrawer = () => {
		setOpenLanguageCostumizeDrawer(true);
	};

	const onCloseLanguageOptimizeDrawer = () => {
		setOpenLanguageCostumizeDrawer(false);
	};

	const [cookies, setCookies] = useCookies(["i18n", "appMode"]);

	useEffect(() => {
		if (!cookies.i18n) {
			setCookies("i18n", "en", {
				path: "/",
			});
		}

		if (!cookies.appMode) {
			setCookies("appMode", "dark", {
				path: "/",
			});
		}
	}, []);

	return (
		<div>
			{children}
			<FloatButton.Group
				trigger="hover"
				type="primary"
				style={{ right: 35 }}
				icon={<SettingOutlined />}
			>
				<FloatButton
					icon={<FlagOutlined />}
					onClick={showLanguageCostumizeDrawer}
				/>
				<FloatButton icon={<SwapOutlined />} onClick={showAppCostumizeDrawer} />
			</FloatButton.Group>
			<Drawer
				title={t("language-customize")}
				onClose={onCloseLanguageOptimizeDrawer}
				open={openLanguageCostumizeDrawer}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
					<div
						onClick={() => {
							setCookies("i18n", "en");
							window.location.reload();
						}}
						className={`flex flex-col w-full justify-center items-center h-32 border-2 rounded-lg bg-white cursor-pointer ${
							cookies.i18n == "en" && "border-sekawan-primary"
						}`}
					>
						<div className=" mb-2 text-base md:text-lg font-poppins font-normal text-gray-400">
							{t("language")}
						</div>
						<div className="text-xs md:text-sm font-poppins font-semibold">
							English
						</div>
					</div>
					<div
						onClick={() => {
							setCookies("i18n", "id");
							window.location.reload();
						}}
						className={`flex flex-col w-full justify-center items-center h-32 border-2 rounded-lg bg-white cursor-pointer ${
							cookies.i18n == "id" && "border-sekawan-primary"
						}`}
					>
						<div className=" mb-2 text-base md:text-lg font-poppins font-normal text-gray-400">
							{t("language")}
						</div>
						<div className="text-xs md:text-sm font-poppins font-semibold">
							Bahasa Indonesia
						</div>
					</div>
				</div>
			</Drawer>
			<Drawer
				title={t("app-customize")}
				onClose={onCloseAppOptimizeDrawer}
				open={openAppCostumizeDrawer}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
					<div className="flex flex-col w-full justify-center items-center h-32 border-2 rounded-lg bg-white cursor-pointer hover:border-sekawan-primary">
						<div className=" mb-2 text-base md:text-lg font-poppins font-normal text-gray-400">
							Mode
						</div>
						<div className="text-xs md:text-sm font-poppins font-semibold">
							Dark
						</div>
					</div>
					<div className="flex flex-col w-full justify-center items-center h-32 border-2 rounded-lg bg-white cursor-pointer hover:border-sekawan-primary">
						<div className=" mb-2 text-base md:text-lg font-poppins font-normal text-gray-400">
							Mode
						</div>
						<div className="text-xs md:text-sm font-poppins font-semibold">
							Light
						</div>
					</div>
				</div>
			</Drawer>
		</div>
	);
};

export default FloatButtonLayout;
