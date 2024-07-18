import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n.ts";
import { Provider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import { store } from "./stores/store.ts";
import FloatButtonLayout from "./components/button/FloatButtonLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<FloatButtonLayout>
				<RouterProvider router={router} />
			</FloatButtonLayout>
		</Provider>
	</React.StrictMode>
);
