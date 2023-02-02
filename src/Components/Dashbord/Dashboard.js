import React from "react";
import ProjectListContainer from "../ProjectList/ProjectListContainer";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import DashboardContent from "./DashboardContent";
import styled from "styled-components";

const Dashboard = () => {
	return (
		<StyledDashboardComponent>
			<DashboardHeader />
			<DashboardContent>
				<ProjectListContainer />
			</DashboardContent>
		</StyledDashboardComponent>
	);
};

const StyledDashboardComponent = styled.div`
	flex: 1;
`;

export default Dashboard;
