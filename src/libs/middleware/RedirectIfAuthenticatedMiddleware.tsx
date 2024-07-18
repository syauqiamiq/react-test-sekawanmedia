import React, { ReactNode, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface IRedirectIfAuthenticatedMiddleware {
	children: ReactNode;
}

const RedirectIfAuthenticatedMiddleware = ({
	children,
}: IRedirectIfAuthenticatedMiddleware) => {
	const [cookies, setCookies] = useCookies(["auth-Cookie"]);
	const navigate = useNavigate();

	useEffect(() => {
		if (cookies["auth-Cookie"]) {
			navigate("/ticket");
		}
	}, [cookies, navigate]);

	return <div>{children}</div>;
};

export default RedirectIfAuthenticatedMiddleware;
