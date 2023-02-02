import styled from "styled-components";
import {
	Sidebar,
	Dashboard,
	DashboardHeader,
	Updates,
	Users,
} from "../Components";
import { useAppContext } from "../context/AppContext";

const DashboardPage = () => {
	const { currentPage } = useAppContext();

	return (
		<StyledDashboardPage>
			<Sidebar />
			<div>
				<DashboardHeader />
				{currentPage === "Home" ? (
					<Dashboard />
				) : currentPage === "Updates" ? (
					<Updates />
				) : (
					<Users />
				)}
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
