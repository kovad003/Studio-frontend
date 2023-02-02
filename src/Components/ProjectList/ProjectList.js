import React from "react";
import styled from "styled-components";
import data from "./dummy.data";
import ProjectListItem from "./ProjectListItem";

const ProjectList = () => {
	return (
		<StyledProjectList>
			{data.map((item) => {
				return <ProjectListItem {...item} />;
			})}
		</StyledProjectList>
	);
};

const StyledProjectList = styled.ul`
	list-style: none;
	width: 100%;
	padding: 10px 0;
`;

export default ProjectList;
