import React from "react";
import NoContent from "../../assets/closed.svg";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Spinner";
import useAppContext from "../../hooks/useAppContext";
import ProjectList from "../ProjectList/ProjectList";
import styled from "styled-components";

const UserDashboardMain = () => {
	const [loading, setLoading] = React.useState(false);
	const { auth } = useAuth();
	const { setProjects, projects } = useAppContext();

	const fetchProject = async () => {
		setLoading(true);
		try {
			const response = await axios.get("/api/projects/getprojectsasclient", {
				headers: {
					Authorization: `Bearer ${auth.accessToken}`,
				},
			});
			setProjects(response.data);
			setLoading(false);
		} catch (error) {}
	};

	React.useEffect(() => {
		if (auth.user) {
			fetchProject();
		}
	}, []);

	if (loading) {
		return (
			<StyledUserDashboardMain>
				<Spinner />;
			</StyledUserDashboardMain>
		);
	}

	return (
		<StyledUserDashboardMain>
			<section className="projects-container">
				<h1>Projects</h1>
				<ProjectList />
			</section>
		</StyledUserDashboardMain>
	);
};

const StyledUserDashboardMain = styled.section`
	min-height: calc(100vh - 60px);
	padding: 20px;
	overflow-y: auto;
	overflow-x: hidden;

	.projects-container {
		h1 {
			font-size: 24px;
		}
	}
`;

export default UserDashboardMain;
