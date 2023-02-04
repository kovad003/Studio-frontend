import React from "react";
import styled from "styled-components";
import notAllowed from "../assets/notAllowed.svg";

const NotAllowed = () => {
	return (
		<StyledNotAllowed>
			<img src={notAllowed} alt="not-allowed" />
			<h2>You are unauthorized</h2>
		</StyledNotAllowed>
	);
};

const StyledNotAllowed = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	img {
		width: 30%;
	}
`;

export default NotAllowed;
