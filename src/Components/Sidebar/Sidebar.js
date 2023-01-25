import React from "react";
import SidebarLogo from "./SidebarLogo";
import styled from "styled-components";
import SidebarList from "./SidebarList";

const Sidebar = () => {
	return (
		<StyledSidebar>
			<SidebarLogo />
			<div>
				<SidebarList />
			</div>
		</StyledSidebar>
	);
};

const StyledSidebar = styled.section`
	background-color: ${(props) => props.theme.white};
	border-right: 1px solid ${(props) => props.theme.borderColor};
`;

export default Sidebar;
