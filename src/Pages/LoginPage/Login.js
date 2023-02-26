import { useEffect } from "react";
import { Form, InputWrapper, Button } from "../../Components";
import { toast } from "react-toastify";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { initialState } from "./LoginPage";
import { useNavigate } from "react-router";

const Login = ({ handleOnChange, credentials, setCredentials }) => {
	const { setAuth, auth, saveToLocalStorage } = useAuth();
	const navigate = useNavigate();

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
			try {
				const apiObj = { email: email.value, password: password.value };
				console.log(apiObj);

				const response = await axios.post("/api/useraccount/login", apiObj);
				const accessToken = response?.data?.token;
				const id = response?.data?.id;
				const roles = [response?.data?.role];
				const userName = response?.data?.firstName;
				const lastName = response?.data?.lastName;
				const user = { id, userName, lastName, roles };
				setAuth({ user, accessToken });
				setCredentials(initialState);

				toast.success(`Welcome ${user.roles[0]}`);
			} catch (error) {
				console.log(error);
				toast.error(`Something went wrong while logging in`);
			}
		}
	};

	useEffect(() => {
		if (auth.user) {
			saveToLocalStorage();
			if (
				auth.user.roles.includes("Admin") ||
				auth.user.roles.includes("Assistant")
			) {
				navigate("/dashboard");
			} else if (auth.user.roles.includes("Client")) {
				navigate("/client/dashboard");
			}
		}
	}, [auth, navigate, saveToLocalStorage]);

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
