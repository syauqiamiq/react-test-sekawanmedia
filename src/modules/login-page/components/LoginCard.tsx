import { yupResolver } from "@hookform/resolvers/yup";

import { Card } from "antd";
import { useCookies } from "react-cookie";

import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import CustomButton from "../../../components/button/CustomButton";
import { FormInput } from "../../../components/input/hook-form/FormInput";
import { PasswordInput } from "../../../components/input/hook-form/PasswordInput";
import { useNavigate } from "react-router-dom";

const defaultValues = {
	email: "",
	password: "",
};

const formSchema = yup
	.object({
		email: yup.string().email().required(),
		password: yup.string().required(),
	})
	.required();

const LoginCard = () => {
	const [cookies, setCookie] = useCookies();
	const navigate = useNavigate();

	const { t } = useTranslation("loginPage");
	const formMethods = useForm({
		defaultValues: defaultValues,
		mode: "onSubmit",
		resolver: yupResolver(formSchema),
	});
	const { handleSubmit } = formMethods;

	const onSubmit = (data: any) => {
		// DO SOME ACTION

		if (data.email == "admin@email.com" && data.password == "admin") {
			setCookie("role-Cookie", "admin", {
				path: "/",
			});
			setCookie("auth-Cookie", true, {
				path: "/",
			});
			// SET ROLE ADMIN
			navigate("/ticket", { replace: true });
		} else if (data.email == "guest@email.com" && data.password == "guest") {
			// SET ROLE GUEST
			setCookie("role-Cookie", "guest", {
				path: "/",
			});
			setCookie("auth-Cookie", true, {
				path: "/",
			});
			navigate("/ticket", { replace: true });
		} else {
			// HANDLE LOGIN ERROR
			setCookie("auth-Cookie", false, {
				path: "/",
			});
			navigate("/");
		}
	};
	return (
		<Card className="flex justify-center text-center w-[500px] dark:shadow-none shadow-lg shadow-gray-200 dark:!bg-sekawan-dark">
			<h1 className="mb-12 dark:text-white">LOGO</h1>
			<h3 className="mb-5 font-poppins md:text-2xl text-xl font-bold dark:text-white">
				{t("card-title")}
			</h3>
			<h4 className="mb-8 font-poppins md:text-base text-xs text-gray-400 font-medium">
				{t("card-subtitle")}
			</h4>

			<FormProvider {...formMethods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-10">
						<div className="flex flex-col ">
							<div className="flex justify-between mb-1">
								<h5 className="text-gray-400 md:text-base text-sm font-poppins dark:text-white">
									Email
								</h5>
							</div>
							<FormInput name="email" size="large" placeHolder="Email" />
						</div>
						<div className="flex flex-col ">
							<div className="flex justify-between mb-1">
								<h5 className="text-gray-400 md:text-base text-sm font-poppins dark:text-white">
									Password
								</h5>
								<h5 className="text-gray-400 md:text-base text-sm font-poppins dark:text-white cursor-pointer">
									{t("forget-password")}
								</h5>
							</div>
							<PasswordInput
								name="password"
								size="large"
								placeHolder="Password"
								type="password"
							/>
						</div>
						<div>
							<CustomButton
								buttonTitle={t("btn-login")}
								htmlType="submit"
								type="primary"
								size="large"
							/>
						</div>
						<div>
							<div>
								<span className="md:text-lg text-base font-poppins text-gray-400">
									{t("sign-up-text")}?{" "}
									<span className="text-sekawan-primary font-semibold">
										{t("sign-up")}
									</span>
								</span>
							</div>
						</div>
					</div>
				</form>
			</FormProvider>
		</Card>
	);
};

export default LoginCard;
