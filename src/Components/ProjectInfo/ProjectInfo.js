import React from "react";
import { useParams } from "react-router";
import PageContainer from "../PageContainer/PageContainer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

const ProjectInfo = () => {
	const { id } = useParams();
	return (
		<PageContainer>
			<BreadCrumbs />
			<h1>Project Info</h1>
			<p>Project id: {id}</p>
		</PageContainer>
	);
};

export default ProjectInfo;
