import React from "react";
import styled from "styled-components";

const DashboardContent = ({ children }) => {
	return <StyledDashboardContent>{children}</StyledDashboardContent>;
};

const StyledDashboardContent = styled.section`
	padding: 20px;
`;

export default DashboardContent;
