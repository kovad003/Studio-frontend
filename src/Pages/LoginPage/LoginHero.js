import React from "react";
import loginHero from "../../assets/images/login-hero.png";
import { Button } from "../../Components";
import styled from "styled-components";

const LoginHero = () => {
	return (
		<StyledLoginHero className="login-hero">
			<div className="login-hero-content">
				<h1>Hi there!</h1>
				<p>If you do not have an account please contact us</p>
				<Button variant="transparent">Contact us</Button>
			</div>
			<img src={loginHero} alt="login-hero" />
		</StyledLoginHero>
	);
};

const StyledLoginHero = styled.div`
	width: 45%;
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

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
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
`;

export default LoginHero;
