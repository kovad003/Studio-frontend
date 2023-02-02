import React from "react";
import { useParams } from "react-router";

const ProjectInfo = () => {
	const { id } = useParams();
	return (
		<div>
			<h1>Project Info</h1>
			<p>Project id: {id}</p>
		</div>
	);
};

export default ProjectInfo;
