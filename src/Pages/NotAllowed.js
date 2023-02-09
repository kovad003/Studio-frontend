import React from "react";
import styled from "styled-components";
import notAllowed from "../assets/notAllowed.svg";
import { useLocation } from "react-router";
import { Button } from "../Components";

const NotAllowed = () => {
	const location = useLocation();
	console.log(location.state);
	return (
		<StyledNotAllowed>
			<img src={notAllowed} alt="not-allowed" />
			<h2>You are unauthorized</h2>
			<Button variant="link" type="short" to="/">
				Back to bussiness
			</Button>
		</StyledNotAllowed>
	);
};

const StyledNotAllowed = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	h2 {
		margin-bottom: 20px;
	}

	img {
		width: 30%;
	}
`;

export default NotAllowed;
