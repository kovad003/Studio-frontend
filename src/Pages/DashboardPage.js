import styled from "styled-components";
import { Outlet } from "react-router";
import { Sidebar } from "../Components";
import { DashboardHeader } from "../Components";

const DashboardPage = () => {
	return (
		<StyledDashboardPage>
			<Sidebar />
			<div className="dashboard-page-content">
				<DashboardHeader />
				<Outlet className="outlet" />
			</div>
		</StyledDashboardPage>
	);
};

const StyledDashboardPage = styled.section`
	background-color: ${(props) => props.theme.bgColor};
	height: 100vh;
	width: 100vw;
	display: flex;

	.dashboard-page-content {
		flex: 1;
		display: flex;
		flex-direction: column;

		.outlet {
			flex: 1;
		}
	}
`;

export default DashboardPage;
