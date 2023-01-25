import React from "react";
import styled from "styled-components";

const SidebarListItem = ({ id, name, icon, selected, setSelected }) => {
	return (
		<StyledSidebarListItem
			selected={selected}
			id={id}
			onClick={() => setSelected(id)}
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
	color: ${(props) =>
		props.selected === props.id
			? props.theme.white
			: props.theme.sidebarBtnColor};
	transition: all 0.3s ease;
	background-color: ${(props) =>
		props.selected === props.id
			? props.theme.sidebarSelectedBg
			: "transparent"};

	:hover {
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
		font-size: 18px;
		display: flex;
		align-items: center;
		padding-left: 20px;
	}
`;

export default SidebarListItem;
