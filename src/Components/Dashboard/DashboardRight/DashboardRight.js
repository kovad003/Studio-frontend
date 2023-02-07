import React from "react";
import styled from "styled-components";
import Calendar from "../../Calendar";

const DashboardRight = () => {
	return (
		<StyledDashboardRight>
			<div className="comments"></div>
			<Calendar />
		</StyledDashboardRight>
	);
};

const StyledDashboardRight = styled.div`
	width: 312px;
	height: 100%;

	.comments {
		background-color: #fff;
		border: 1px solid ${(props) => props.theme.borderColor};
		border-radius: 10px;
	}
`;

export default DashboardRight;
