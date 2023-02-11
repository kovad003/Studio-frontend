import React from "react";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Logo = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/");
	};
	return <StyledLogo src={logo} alt="sidebar-logo" onClick={handleClick} />;
};

const StyledLogo = styled.img`
	display: block;
	width: 150px;
	margin: 10px 20px;
	cursor: pointer;
`;

export default Logo;
