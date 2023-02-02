import React from "react";
import Avatar from "./Avatar";
import Status from "../Status/Status";
import styled from "styled-components";

const ProjectListItem = ({
	clientName,
	projectId,
	projectName,
	status,
	date,
}) => {
	const names = clientName.split(" ");
	const letter = names[0][0] + names[1][0];
	return (
		<StyledProjectListItem>
			<span
				className="indicator"
				style={{ backgroundColor: status === "done" ? "#A2DAB8" : "#6FB8FC" }}
			></span>
			<span className="client-name col-1">
				<Avatar letters={letter} />
				{clientName}
			</span>
			<span className="col-2">{projectId}</span>
			<span className="col-3">{projectName}</span>
			<span className="col-4">
				<Status type={status} />
			</span>
			<span className="col-5">{date}</span>
		</StyledProjectListItem>
	);
};

const StyledProjectListItem = styled.li`
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	background-color: ${(props) => props.theme.projectItemBg};
	margin-bottom: 4px;
	height: 50px;
	border-radius: 10px;
	padding: 0 20px;
	transition: all 0.3s ease;
	cursor: pointer;
	position: relative;
	font-size: 14px;

	:hover {
		background-color: ${(props) => props.theme.projectItemHover};
	}

	span {
		display: grid;
		align-items: center;
	}

	.indicator {
		position: absolute;
		left: 0;
		top: 0;
		width: 8px;
		height: 100%;
		background-color: red;
		border-radius: 10px 0 0 10px;
	}

	:last-child {
		margin-bottom: 0;
	}

	.client-name {
		display: flex;
		align-items: center;
		justify-content: start;
	}

	.col-1 {
		grid-column: 1 / span 2;
	}

	.col-3 {
		grid-column: 4 / span 4;
	}

	.col-5 {
		grid-column: 9 / span 2;
	}
`;

export default ProjectListItem;
