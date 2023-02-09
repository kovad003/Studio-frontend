import React from "react";
import appLogo from "../assets/logo.svg";
import styled from "styled-components";

const Card = ({ children, width, height, logo }) => {
	return (
		<StyledCard width={width} height={height}>
			{logo && <img className="card-logo" src={appLogo} alt="app-logo" />}
			{children}
		</StyledCard>
	);
};

const StyledCard = styled.section`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	max-width: 100%;
	max-height: 100%;
	background-color: ${(props) => props.theme.white};
	border-radius: 20px;
	box-shadow: 0 4px 30px 0 rgba(11, 99, 229, 0.13);
	position: relative;
	overflow: hidden;

	.card-logo {
		position: absolute;
		top: 15px;
		left: 15px;
		width: 140px;
	}
`;

export default Card;
