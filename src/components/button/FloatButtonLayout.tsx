import { useAppDispatch } from "@/libs/hooks/useAppDispatch";
import { useAppSelector } from "@/libs/hooks/useAppSelector";
import { setTheme } from "@/stores/slices/theme-slice";
import {
	CloseOutlined,
	FlagOutlined,
	SettingOutlined,
	SwapOutlined,
} from "@ant-design/icons";
import { Drawer, FloatButton } from "antd";
import { ReactNode, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";

interface IFloatButtonLayoutProps {
	children: ReactNode;
}

const FloatButtonLayout = ({ children }: IFloatButtonLayoutProps) => {
	const [openAppCostumizeDrawer, setOpenAppCostumizeDrawer] = useState(false);
	const dispatch = useAppDispatch();

	const themeMode = useAppSelector((state) => state.theme.value);

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
			setCookies("appMode", "light", {
				path: "/",
			});
			dispatch(setTheme("light"));
		} else {
			dispatch(setTheme(cookies.appMode));
		}
	}, []);

	useEffect(() => {
		if (cookies.appMode) {
			if (cookies.appMode == "light") {
				document.documentElement.classList.remove("dark");
			} else {
				document.documentElement.classList.add("dark");
			}
		}
	}, [themeMode]);

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
				closeIcon={<CloseOutlined className="dark:text-white" />}
				className="dark:bg-sekawan-dark bg-sekawan-light  dark:text-white"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
					<div
						onClick={() => {
							setCookies("i18n", "en");
							window.location.reload();
						}}
						className={`flex flex-col w-full justify-center items-center h-32 border-2 dark:shadow-lg  dark:shadow-black dark:bg-sekawan-dark dark:text-white rounded-lg bg-white cursor-pointer ${
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
						className={`flex flex-col w-full justify-center items-center h-32 border-2 dark:shadow-lg  dark:shadow-black dark:bg-sekawan-dark dark:text-white rounded-lg bg-white cursor-pointer ${
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
				closeIcon={<CloseOutlined className="dark:text-white" />}
				open={openAppCostumizeDrawer}
				className="dark:bg-sekawan-dark bg-sekawan-light dark:text-white"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
					<div
						onClick={() => {
							setCookies("appMode", "dark");
							dispatch(setTheme("dark"));
						}}
						className={`flex flex-col w-full justify-center items-center h-32 border-2 dark:shadow-black dark:shadow-lg   rounded-lg bg-white dark:bg-sekawan-dark dark:text-white cursor-pointer ${
							themeMode == "dark" && "border-sekawan-primary "
						}`}
					>
						<div className=" mb-2 text-base md:text-lg font-poppins font-normal text-gray-400 dark:text-gray-200">
							Mode
						</div>
						<div className="text-xs md:text-sm font-poppins font-semibold">
							Dark
						</div>
					</div>
					<div
						onClick={() => {
							setCookies("appMode", "light");
							dispatch(setTheme("light"));
						}}
						className={`flex flex-col w-full justify-center items-center h-32 border-2 dark:shadow-lg  dark:shadow-black dark:bg-sekawan-dark dark:text-white rounded-lg bg-white cursor-pointer ${
							themeMode == "light" && "border-sekawan-primary"
						}`}
					>
						<div className=" mb-2 text-base md:text-lg font-poppins font-normal text-gray-400 dark:text-gray-200">
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
