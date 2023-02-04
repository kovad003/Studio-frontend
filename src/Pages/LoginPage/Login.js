import React from "react";
import { Form, InputWrapper, Button } from "../../Components";
import { toast } from "react-toastify";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { initialState } from "./LoginPage";
import { useLocation, useNavigate } from "react-router";

const Login = ({ handleOnChange, credentials, setCredentials }) => {
	const { setAuth } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const navigatTo = location.state?.from?.pathName || "/";

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = credentials;
		if (!email.value || !password.value) {
			let newEmail = { value: email.value, error: false };
			let newPass = { value: password.value, error: false };

			if (!email.value) newEmail.error = true;
			if (!password.value) newPass.error = true;

			setCredentials({ email: newEmail, password: newPass });
			toast.error("Please provide all the credentials");
		} else {
			const apiObj = { email, password };
			const response = await axios.post(apiObj);
			const accessToken = response?.data?.accessToken;
			const roles = response?.data?.roles;
			const userName = response?.data?.name;
			const lastName = response?.data?.lastName;
			setAuth({ userName, lastName, roles, accessToken });
			setCredentials(initialState);
			navigate(navigatTo, { replace: true });
		}
	};
	return (
		<div>
			<Form width="545px" height="100%">
				<h1>Sign in to account</h1>
				<div>
					<InputWrapper
						id="email"
						name="email"
						action={handleOnChange}
						value={credentials.email}
						placeholder="Email"
						type="email"
					/>
					<InputWrapper
						id="password"
						name="password"
						action={handleOnChange}
						value={credentials.password}
						placeholder="Password"
						type="password"
					/>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a href="#">Forgot your password?</a>
					<Button action={handleFormSubmit}>Login</Button>
				</div>
			</Form>
		</div>
	);
};

export default Login;
