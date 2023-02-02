import styled from "styled-components";
import { Outlet } from "react-router";
import { Sidebar } from "../Components";

const DashboardPage = () => {
	return (
		<StyledDashboardPage>
			<Sidebar />
			<div>
				<Outlet />
			</div>
		</StyledDashboardPage>
	);
};

const StyledDashboardPage = styled.section`
	background-color: ${(props) => props.theme.bgColor};
	height: 100vh;
	width: 100vw;
	display: flex;

	> div {
		flex: 1;
	}
`;

export default DashboardPage;
