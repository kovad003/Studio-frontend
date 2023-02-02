import React from "react";
import ProjectListContainer from "../ProjectList/ProjectListContainer";
import styled from "styled-components";

const Dashboard = () => {
	return (
		<StyledDashboardComponent>
			<ProjectListContainer />
		</StyledDashboardComponent>
	);
};

const StyledDashboardComponent = styled.div`
	padding: 20px;
`;

export default Dashboard;
