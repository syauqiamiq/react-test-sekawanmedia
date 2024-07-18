import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../modules/login-page/pages/LoginPage";
import OverviewPage from "../modules/overview/pages/OverviewPage";
import TicketPage from "@/modules/ticket/pages/TicketPage";
import IdeasPage from "@/modules/ideas/pages/IdeasPage";
import ContactPage from "@/modules/contacts/pages/ContactPage";
import AgentPage from "@/modules/agents/pages/AgentPage";
import SettingPage from "@/modules/settings/pages/SettingPage";
import SubscriptionPage from "@/modules/subscriptions/pages/SubscriptionPage";
import ArticlePage from "@/modules/article/pages/ArticlePage";
import AuthenticationMiddleware from "@/libs/middleware/AuthenticationMiddleware";
import RoleBasedAuthorizationMiddleware from "@/libs/middleware/RoleBasedAuthorizationMiddleware";
import UnauthorizedPage from "@/modules/403/pages/UnauthorizedPage";
import RedirectIfAuthenticatedMiddleware from "@/libs/middleware/RedirectIfAuthenticatedMiddleware";

export const router = createBrowserRouter([
	{
		path: "/403",
		element: <UnauthorizedPage />,
	},
	{
		path: "/",
		element: (
			<RedirectIfAuthenticatedMiddleware>
				<LoginPage />
			</RedirectIfAuthenticatedMiddleware>
		),
	},
	{
		path: "/overview",
		element: (
			<AuthenticationMiddleware>
				<RoleBasedAuthorizationMiddleware grantRole={["admin"]}>
					<OverviewPage />
				</RoleBasedAuthorizationMiddleware>
			</AuthenticationMiddleware>
		),
	},
	{
		path: "/ticket",
		element: (
			<AuthenticationMiddleware>
				<RoleBasedAuthorizationMiddleware grantRole={["admin", "guest"]}>
					<TicketPage />
				</RoleBasedAuthorizationMiddleware>
			</AuthenticationMiddleware>
		),
	},
	{
		path: "/ideas",
		element: <IdeasPage />,
	},
	{
		path: "/contacts",
		element: <ContactPage />,
	},
	{
		path: "/agents",
		element: <AgentPage />,
	},
	{
		path: "/article",
		element: <ArticlePage />,
	},
	{
		path: "/settings",
		element: <SettingPage />,
	},
	{
		path: "/subscription",
		element: <SubscriptionPage />,
	},
]);
