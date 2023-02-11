import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const MainHeader = () => {
	return (
		<StyledMainHeader>
			<Logo />
			<nav>
				<StyledAboutNavLink to="/about">About us</StyledAboutNavLink>
				<Button variant="link" type="short" to="/login">
					Login
				</Button>
			</nav>
		</StyledMainHeader>
	);
};

const StyledMainHeader = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	height: 60px;
	z-index: 999;
	background-color: #fff;

	nav {
		width: 300px;
		display: flex;
		align-items: center;
		gap: 50px;

		a {
		}
	}
`;

const StyledAboutNavLink = styled(NavLink)`
	font-weight: 600;
	color: #555;
	transition: all 0.3s ease;

	:hover {
		color: ${(props) => props.theme.primaryColor};
	}

	&.active {
		color: ${(props) => props.theme.primaryColor};
	}
`;

export default MainHeader;