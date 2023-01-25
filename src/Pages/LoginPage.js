import { useState } from "react";
import styled from "styled-components";
import { Button, Card, Form, InputWrapper } from "../Components";
import loginHero from "../assets/images/login-hero.png";
import loginBg1 from "../assets/loginBg1.svg";
import loginBg2 from "../assets/loginBg2.svg";

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
								<a href="#">Forgot your email?</a>
								<Button>Login</Button>
							</div>
						</Form>
					</div>
					<div className="login-hero">
						<div className="login-hero-content">
							<h1>Hi there!</h1>
							<p>If you do not have an account please contact us</p>
							<Button variant="transparent">Contact us</Button>
						</div>
						<img src={loginHero} alt="login-hero" />
					</div>
				</div>
			</Card>
			<p className="cp">All rights reserved &#169;</p>
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
		.login-hero {
			flex-basis: 40%;
			position: relative;

			::before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(3, 8, 18, 0.61);
			}

			.login-hero-content {
				position: absolute;
				color: ${(props) => props.theme.white};
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

				h1 {
					font-size: 32px;
					font-weight: 600;
					padding-bottom: 26px;
				}

				p {
					width: 300px;
					text-align: center;
					font-weight: 300;
					line-height: 1.8;
					padding-bottom: 26px;
					letter-spacing: 1px;
				}
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
