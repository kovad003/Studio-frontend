import React from "react";
import logo from "../../assets/logo.svg";
import styled from "styled-components";

const SidebarLogo = () => {
	return <StyledSidebarLogo src={logo} alt="sidebar-logo" />;
};

const StyledSidebarLogo = styled.img`
	display: block;
	width: 150px;
	margin: 10px 20px;
`;

export default SidebarLogo;
