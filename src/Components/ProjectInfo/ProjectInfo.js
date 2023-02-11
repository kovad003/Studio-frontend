import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PageContainer from "../PageContainer/PageContainer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";

const ProjectInfo = () => {
	const [project, setProject] = useState(null);
	const { auth } = useAuth();
	const { id } = useParams();

	const getProject = async () => {
		try {
			const response = await axios.get(`/api/projects/${id}`, {
				headers: {
					Authorization: `Bearer ${auth.accessToken}`,
				},
			});
			setProject(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProject();
	}, []);

	return (
		<PageContainer>
			<BreadCrumbs />
			<h1>Project Info</h1>
			<StyledProjectInfo>
				{project ? (
					<>
						<div>
							<span className="label">Id: </span>
							<span>{project.projectId}</span>
						</div>
						<div>
							<span className="label">Title: </span>
							<span>{project.title}</span>
						</div>
						<div>
							<span className="label">Created at: </span>
							<span>{project.createdOn}</span>
						</div>
						<div>
							<span className="label">Completed at: </span>
							<span>{project.completedOn}</span>
						</div>
						<div>
							<span className="label">Description: </span>
							<span>{project.description}</span>
						</div>
						<div>
							<span className="label">Status: </span>
							<span>{project.isActive ? "Ongoing..." : "Done"}</span>
						</div>
						<div>
							<span className="label">Owner: </span>
							<div>name: {project.owner.firstName}</div>
							<div>lastname: {project.owner.lastName}</div>
							<div>email: {project.owner.email}</div>
							<div>phone: {project.owner.phone}</div>
							<div>bio: {project.owner.bio}</div>
						</div>
						<div>
							<span className="label">Photos: </span>
							{project.photos.length > 0
								? project.photos.map((img) => {
										return <img src={img.url} alt={img.id} />;
								  })
								: "No image to show"}
						</div>
					</>
				) : (
					""
				)}
			</StyledProjectInfo>
		</PageContainer>
	);
};

const StyledProjectInfo = styled.section`
	padding: 20px;
	background-color: #fff;

	div {
		margin-bottom: 20px;

		.label {
			font-weight: 800;
		}
	}

	img {
		width: 150px;
	}
`;

export default ProjectInfo;
