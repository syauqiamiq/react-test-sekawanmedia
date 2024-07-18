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

export const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "/overview",
		element: <OverviewPage />,
	},
	{
		path: "/ticket",
		element: <TicketPage />,
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
