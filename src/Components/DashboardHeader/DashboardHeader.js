import React from "react";
import styled from "styled-components";

const DashboardHeader = () => {
	return <StyledDashboardHeader></StyledDashboardHeader>;
};

const StyledDashboardHeader = styled.header`
	width: 100%;
	height: 60px;
	background-color: ${(props) => props.theme.white};
`;

export default DashboardHeader;
