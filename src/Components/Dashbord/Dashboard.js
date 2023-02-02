import React from "react";
import ProjectListContainer from "../ProjectList/ProjectListContainer";
import styled from "styled-components";
import DashboardInfo from "../DashboardInfo/DashboardInfo";
import DashboardRight from "../DashboardRight/DashboardRight";

const Dashboard = () => {
	return (
		<StyledDashboardComponent>
			<div className="dashboard-content">
				<DashboardInfo />
				<ProjectListContainer />
			</div>
			<DashboardRight />
		</StyledDashboardComponent>
	);
};

const StyledDashboardComponent = styled.div`
	padding: 20px;
	display: flex;
	gap: 20px;

	.dashboard-content {
		flex: 1;
	}
`;

export default Dashboard;
