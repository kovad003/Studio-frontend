import React from "react";
import styled from "styled-components";
import notFound from "../assets/notFound.svg";
import { Button } from "../Components";

const NotFound = () => {
	return (
		<StyledNotFound>
			<img src={notFound} alt="not-found" />
			<Button to={"/dashboard"} variant="link" type="short">
				Back to home
			</Button>
		</StyledNotFound>
	);
};

const StyledNotFound = styled.section`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	img {
		width: 30%;
	}
`;

export default NotFound;
