import React from "react";
import styled from "styled-components";
import DashboardInfoCard from "./DashboardInfoCard";
import data from "./data";

const DashboardInfo = () => {
	return (
		<StyledDashboardInfo>
			{data.map((item) => {
				return <DashboardInfoCard key={item.id} {...item} />;
			})}
		</StyledDashboardInfo>
	);
};

const StyledDashboardInfo = styled.section`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 15px;
	height: 91px;
	margin-bottom: 10px;
`;

export default DashboardInfo;
