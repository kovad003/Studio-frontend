import React from "react";
import styled from "styled-components";

const DashboardInfoCard = ({ icon, title, icon2, quantity, background }) => {
	return (
		<StyledDashboardCard>
			<div className="DashboardCard__top">
				<span
					className="DashboardCard__icon"
					style={{ backgroundColor: background }}
				>
					{icon}
				</span>
				<span className="DashboardCard__title">{title}</span>
				<span className="DashboardCard__icon2">{icon2}</span>
			</div>
			<div className="DashboardCard__bottom">
				<span className="DashboardCard__quantity">{quantity}</span>
			</div>
		</StyledDashboardCard>
	);
};

const StyledDashboardCard = styled.div`
	height: 91px;
	border-radius: 10px;
	background-color: #fff;
	flex: 1;
	font-size: 16px;
	.DashboardCard__top {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 10px;
	}
	.DashboardCard__icon {
		/* padding-top: 2px; */
		padding: 2px 3px 2px 3px;
		/*  background-color: ${(props) => props.theme.sidebarBtnHoverBg}; */
		border-radius: 50%;
	}
	.DashboardCard__title {
		margin-right: 10px;
		margin-left: 10px;
		color: ${(props) => props.theme.lightCardColor};
	}
	.DashboardCard__icon2 {
		padding-top: 4px;
		color: ${(props) => props.theme.lightInfoIcon};
	}
	.DashboardCard__bottom {
		display: flex;
		justify-content: center;
		/*  align-items: center; */
	}
	.DashboardCard__quantity {
		font-size: 38px;
		/* font-weight: 700; */
	}
`;

export default DashboardInfoCard;
