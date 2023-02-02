import React from "react";
import styled from "styled-components";

const DashboardRight = () => {
	return <StyledDashboardRight>DashboardRight</StyledDashboardRight>;
};

const StyledDashboardRight = styled.div`
	width: 200px;
	background-color: #fff;
	border: 1px solid ${(props) => props.theme.borderColor};
	border-radius: 10px;
`;

export default DashboardRight;
