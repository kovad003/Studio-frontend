import React from "react";
import NoContent from "../../assets/closed.svg";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const UserDashboardMain = () => {
	const [projects, setProjects] = React.useState();
	const { auth } = useAuth();

	const fetchProject = async () => {
		try {
			const response = await axios.get("/api/projects/getprojectsasclient");
			console.log(response);
		} catch (error) {}
	};

	React.useEffect(() => {
		if (auth.user) {
		}
	});

	return <section></section>;
};

export default UserDashboardMain;
