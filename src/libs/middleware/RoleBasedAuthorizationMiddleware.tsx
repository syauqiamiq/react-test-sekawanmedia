import React, { ReactNode, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface IRoleBasedAuthorizationMiddleware {
	grantRole: string[];
	children: ReactNode;
}

const RoleBasedAuthorizationMiddleware = ({
	grantRole,
	children,
}: IRoleBasedAuthorizationMiddleware) => {
	const [cookies, setCookies] = useCookies(["role-Cookie"]);
	const navigate = useNavigate();

	useEffect(() => {
		if (!cookies["role-Cookie"]) {
			navigate("/");
		}
		if (!grantRole.includes(cookies["role-Cookie"])) {
			navigate("/403");
		}
	}, [cookies, navigate]);
	return <div>{children}</div>;
};

export default RoleBasedAuthorizationMiddleware;
