import React from "react";
import styled from "styled-components";
import data from "./dummy.data";
import ProjectListItem from "./ProjectListItem";
import useAppContext from "../../hooks/useAppContext";

const ProjectList = () => {
	const { projects } = useAppContext();

	return (
		<StyledProjectList>
			{projects
				? projects.map((item) => {
						return <ProjectListItem key={item.id} {...item} />;
				  })
				: "Loading..."}
		</StyledProjectList>
	);
};

const StyledProjectList = styled.div`
	list-style: none;
	width: 100%;
	padding: 10px 0;
`;

export default ProjectList;
