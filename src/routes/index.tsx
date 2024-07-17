import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../modules/login-page/pages/LoginPage";
import OverviewPage from "../modules/overview/pages/OverviewPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "/overview",
		element: <OverviewPage />,
	},
]);
