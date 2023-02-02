import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";

import { Link } from "react-router-dom";

const SidebarListItem = ({ id, name, icon, selected, setSelected }) => {
	const handleOnClick = () => {
		setSelected(id);
	};
	const to = `${
		name === "Home"
			? "/dashboard"
			: name === "Updates"
			? "/dashboard/updates"
			: "/dashboard/users"
	}`;
	return (
		<StyledSidebarListItem
			id={id}
			onClick={handleOnClick}
			className={selected === id ? "selected" : ""}
			to={to}
		>
			<span>{icon}</span>
			<span>{name}</span>
		</StyledSidebarListItem>
	);
};

const StyledSidebarListItem = styled(Link)`
	width: 127px;
	height: 40px;
	display: flex;
	align-items: center;
	margin-bottom: 14px;
	width: 100%;
	cursor: pointer;
	border-radius: 10px;
	color: ${(props) => props.theme.sidebarBtnColor};
	transition: all 0.3s ease;
	background-color: transparent;

	&.selected {
		background-color: ${(props) => props.theme.darkBgColor};
		color: ${(props) => props.theme.white};
	}

	:not(.selected):hover {
		background-color: ${(props) => props.theme.sidebarBtnHoverBg};
		color: ${(props) => props.theme.primaryColor};
	}

	span:first-child {
		display: flex;
		align-items: center;
		justify-content: start;
		width: 40px;
		padding-left: 18px;
	}

	span:last-child {
		font-size: 16px;
		display: flex;
		align-items: center;
		padding-left: 20px;
	}
`;

export default SidebarListItem;
