import React from "react";
import { Form, InputWrapper, Button } from "../../Components";

const Login = ({ handleOnChange, credentials }) => {
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
					/>
					<InputWrapper
						id="password"
						name="password"
						action={handleOnChange}
						value={credentials.password}
						placeholder="Password"
					/>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a href="#">Forgot your email?</a>
					<Button>Login</Button>
				</div>
			</Form>
		</div>
	);
};

export default Login;
