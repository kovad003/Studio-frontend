import { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import LoginHero from "./LoginHero";
import { Card } from "../../Components";
import loginBg1 from "../../assets/loginBg1.svg";
import loginBg2 from "../../assets/loginBg2.svg";

const initialState = {
	email: {
		value: "",
		error: false,
		errMessage: "",
	},
	password: {
		value: "",
		error: false,
		errMessage: "",
	},
};

const LoginPage = () => {
	const [credentials, setCredentials] = useState(initialState);

	const handleOnChange = () => {};

	return (
		<StyledLoginPage>
			<img className="login-bg1" src={loginBg1} alt="login-background" />
			<img className="login-bg2" src={loginBg2} alt="login-background" />
			<Card width="1280px" height="700px" logo={true}>
				<div className="login-wrapper">
					<Login handleOnChange={handleOnChange} credentials={credentials} />
					<LoginHero />
				</div>
			</Card>
			<p className="cp">
				All rights reserved &#169;{new Date().getUTCFullYear()}
			</p>
		</StyledLoginPage>
	);
};

const StyledLoginPage = styled.section`
	height: 100vh;
	width: 100vw;
	background-color: ${(props) => props.theme.bgColor};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;

	.login-bg1,
	.login-bg2 {
		position: absolute;
	}

	.login-bg1 {
		top: 0;
		left: 0;
	}

	.login-bg2 {
		bottom: 0;
		right: 0;
	}

	.login-wrapper {
		display: flex;
		height: 100%;

		h1 {
			text-align: center;
			font-size: 32px;
			font-weight: 800;
		}

		div:first-child {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;

			a {
				display: block;
				color: ${(props) => props.theme.primaryColor};
				margin: 14px 0;
				text-align: right;
			}
		}
	}

	.cp {
		position: absolute;
		bottom: 10px;
		font-size: 14px;
		color: ${(props) => props.theme.darkTextColor};
		user-select: none;
	}
`;

export default LoginPage;
