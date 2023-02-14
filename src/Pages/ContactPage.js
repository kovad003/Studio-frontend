import React from "react";
import styled from "styled-components";
import loginBg1 from "../assets/loginBg1.svg";
import loginBg2 from "../assets/loginBg2.svg";
import { Card } from "../Components";
import Social from '../Components/Social'
import Contact from '../Components/Contact';

const ContactPage = () => {
	
	return (
		<StyledAboutPage>
			<Card width="750px" height="700px" logo={true}>
				<div className="container">
					<div className="title">
						<h1>Let's Keep in Touch</h1>
					</div>
					<div className="content">
						<Contact 
							name='My Name'
							email='email@email.com'
							phone='+358 123 4321'
							website='https://website.com' />
					</div>
					<div className="footer">
						<Social />
					</div>
				</div>
			</Card>
			<p className="cp">
				All rights reserved &#169;{new Date().getUTCFullYear()}
			</p>
		</StyledAboutPage>
	);
};

const StyledAboutPage = styled.section`
	height: calc(100vh - 60px);
	width: 100vw;
	background-color: ${(props) => props.theme.bgColor};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;

	.container {
		display: flex;
		height: 100%;
		max-width: 700px;
		margin: auto;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

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

	.title {
		margin-bottom: 50px;
	}

	.title h1 {
		text-align: center;
    font-size: 32px;
    font-weight: 800;
	}

	.content {
		width: 100%;
	}
	
	table {
		margin: 0 auto;
		min-width: 250px;
		width: 50%;
	}

	tr {
		width: 100%;
		height: 40px;
	}

	table td {
		font-weight: 400;
    line-height: 1.8;
	}

	.footer {
		width: 70%;
		margin: 50px auto 0 auto;
	}

	.cp {
		position: absolute;
		bottom: 10px;
		font-size: 14px;
		color: ${(props) => props.theme.darkTextColor};
		user-select: none;
	}
`;

export default ContactPage;
