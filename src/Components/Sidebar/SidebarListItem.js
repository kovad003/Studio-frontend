import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";

const SidebarListItem = ({ id, name, icon, selected, setSelected }) => {
	const { changeDashboardPage } = useAppContext();

	const handleOnClick = () => {
		setSelected(id);
		changeDashboardPage(name);
	};
	return (
		<StyledSidebarListItem
			id={id}
			onClick={handleOnClick}
			className={selected === id ? "selected" : ""}
		>
			<span>{icon}</span>
			<span>{name}</span>
		</StyledSidebarListItem>
	);
};

const StyledSidebarListItem = styled.li`
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
