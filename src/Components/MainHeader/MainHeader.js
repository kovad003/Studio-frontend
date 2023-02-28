import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";

const MainHeader = () => {
	const { auth } = useAuth();

	return (
		<StyledMainHeader>
			<Logo />
			<nav>
				<StyledNavLink to="/about">About Us</StyledNavLink>
				<StyledNavLink to="/contact">Contact Us</StyledNavLink>
				{auth.user ? (
					<Button
						variant="link"
						type="short"
						to={
							auth?.user?.roles[0] === "Admin" ||
							auth?.user?.roles[0] === "Assistant"
								? "/dashboard"
								: "/client/projects"
						}
					>
						Dashboard
					</Button>
				) : (
					<Button variant="link" type="short" to="/login">
						Login
					</Button>
				)}
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
		width: 400px;
		display: flex;
		align-items: center;
		gap: 40px;

		a {
		}
	}
`;

const StyledNavLink = styled(NavLink)`
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
