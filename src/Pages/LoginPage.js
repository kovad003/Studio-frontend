import React from "react";
import styled from "styled-components";
import { Card } from "../Components";

const LoginPage = () => {
	return (
		<StyledLoginPage>
			<Card width="1280px" height="800px" logo={true}></Card>
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
`;

export default LoginPage;
