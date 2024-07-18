import React, { ReactNode, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface IAuthenticationMiddleware {
	children: ReactNode;
}

const AuthenticationMiddleware = ({ children }: IAuthenticationMiddleware) => {
	const [cookies, setCookies] = useCookies(["auth-Cookie"]);
	const navigate = useNavigate();

	useEffect(() => {
		if (!cookies["auth-Cookie"]) {
			navigate("/");
		}
	}, [cookies, navigate]);

	return <div>{children}</div>;
};

export default AuthenticationMiddleware;
