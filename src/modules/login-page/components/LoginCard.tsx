import CustomButton from "@components/button/CustomButton";
import { FormInput } from "@components/input/hook-form/FormInput";
import { PasswordInput } from "@components/input/hook-form/PasswordInput";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Card } from "antd";
import { useCookies } from "react-cookie";

import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

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

	const { t } = useTranslation(lng, "login-page");
	const formMethods = useForm({
		defaultValues: defaultValues,
		mode: "onSubmit",
		resolver: yupResolver(formSchema),
	});
	const { handleSubmit } = formMethods;

	const onSubmit = (data: any) => {
		// DO SOME ACTION
		console.log(data);
		if (data.email == "admin@email.com" && data.password == "admin") {
			setCookie("role-Cookie", "admin", {
				path: "/",
			});
			setCookie("auth-Cookie", true, {
				path: "/",
			});
			// SET ROLE ADMIN
			router.replace(`/${lng}/panel/overview`);
		}
		if (data.email == "guest@email.com" && data.password == "guest") {
			// SET ROLE GUEST
			setCookie("role-Cookie", "guest", {
				path: "/",
			});
			setCookie("auth-Cookie", true, {
				domain: "/",
			});
			router.replace(`/${lng}/panel/overview`);
		}
		// HANDLE LOGIN ERROR
		setCookie("auth-Cookie", false, {
			domain: "/",
		});
	};
	return (
		<Card className="flex justify-center text-center w-[500px]">
			<h1 className="mb-12">LOGO</h1>
			<h3 className="mb-5 font-poppins md:text-4xl text-xl font-bold">
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
								<h5 className="text-gray-400 md:text-base text-sm font-poppins">
									Email
								</h5>
							</div>
							<FormInput name="email" size="large" placeHolder="Email" />
						</div>
						<div className="flex flex-col ">
							<div className="flex justify-between mb-1">
								<h5 className="text-gray-400 md:text-base text-sm font-poppins">
									Password
								</h5>
								{t("forget-password")}
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
									Dont have account?{" "}
									<span className="text-sekawan-primary font-semibold">
										Sign Up
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
