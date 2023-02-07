import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import ProjectListContainer from "../ProjectList/ProjectListContainer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const ProjectsPage = () => {
	return (
		<PageContainer>
			<h1 className="page-title">Projects</h1>
			<BreadCrumbs />
			<ProjectListContainer />
		</PageContainer>
	);
};

export default ProjectsPage;
