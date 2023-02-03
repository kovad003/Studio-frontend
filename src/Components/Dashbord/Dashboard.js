import React from "react";
import ProjectListContainer from "../ProjectList/ProjectListContainer";
import styled from "styled-components";
import DashboardInfo from "../DashboardInfo/DashboardInfo";
import DashboardRight from "../DashboardRight/DashboardRight";

const Dashboard = () => {
	return (
		<StyledDashboardComponent>
			<div className="dashboard-content">
				<h1>Dashboard</h1>
				<DashboardInfo />
				<h3>Recent Projects</h3>
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

		h1 {
			font-size: 32px;
			margin-bottom: 20px;
		}

		h3 {
			margin-bottom: 10px;
		}
	}
`;

export default Dashboard;
