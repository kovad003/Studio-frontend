import React from "react";
import styled from "styled-components";
import { Sidebar, Dashboard } from "../Components";

const DashboardPage = () => {
	return (
		<StyledDashboardPage>
			<Sidebar />
			<Dashboard />
		</StyledDashboardPage>
	);
};

const StyledDashboardPage = styled.section`
	background-color: ${(props) => props.theme.bgColor};
	height: 100vh;
	width: 100vw;
	display: grid;
	grid-template-columns: repeat(8, 1fr);
`;

export default DashboardPage;
