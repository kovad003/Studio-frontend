import React from "react";
import Logo from "../Logo";
import styled from "styled-components";
import SidebarList from "./SidebarList";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
	return (
		<StyledSidebar>
			<section>
				<Logo />
				<div>
					<SidebarList />
				</div>
			</section>
			<LogoutButton />
		</StyledSidebar>
	);
};

const StyledSidebar = styled.section`
	background-color: ${(props) => props.theme.white};
	border-right: 1px solid ${(props) => props.theme.borderColor};
	width: 250px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export default Sidebar;
