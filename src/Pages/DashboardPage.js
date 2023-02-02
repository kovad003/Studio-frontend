import { useState } from "react";
import styled from "styled-components";
import { Sidebar, Dashboard } from "../Components";

const DashboardPage = () => {
	const [currentPage, setCurrentPage] = useState("home");
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
	display: flex;
`;

export default DashboardPage;
