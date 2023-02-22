import React from "react";
import styled from "styled-components";

const SectionTitle = ({ children }) => {
	return <StyledSectionTitle>{children}</StyledSectionTitle>;
};

const StyledSectionTitle = styled.div`
	font-size: 14px;
	font-weight: 800;
	padding-bottom: 4px;
	margin-bottom: 20px;
	margin-top: 20px;
	border-bottom: 1px solid ${(props) => props.theme.borderColor};
	color: ${(props) => props.theme.sidebarSelectedBg};
	display: flex;
	align-items: center;
	color: ${(props) => props.theme.sidebarSelectedBg};

	padding: 2px 3px;
	border-radius: 4px;

	svg {
		margin-right: 10px;
		fill: ${(props) => props.theme.sidebarSelectedBg};
	}
`;

export default SectionTitle;
