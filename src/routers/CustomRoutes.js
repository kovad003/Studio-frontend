import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import {
	Dashboard,
	ProjectInfo,
	Updates,
	Users,
	Projects,
	ProjectsPage,
} from "../Components";
import WelcomePage from "../Pages/WelcomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import DashboardPage from "../Pages/DashboardPage";
import NotFound from "../Pages/NotFound";
import RequireAuth from "../Components/RequireAuth";
import NotAllowed from "../Pages/NotAllowed";
import CreateUserPage from "../Components/Users/CreateUserPage";
import UsersPage from "../Components/Users/UsersPage";

const ROLES = {
	client: "Client",
	assistant: "Assistant",
	admin: "Admin",
};

const CustomRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<WelcomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="unauthorized" element={<NotAllowed />} />
			<Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
				<Route path="/dashboard" element={<DashboardPage />}>
					<Route index element={<Dashboard />} />
					<Route path="updates" element={<Updates />} />
					<Route path="users" element={<Users />}>
						<Route index element={<UsersPage />} />
						<Route path="create" element={<CreateUserPage />} />
					</Route>
					<Route path="projects" element={<Projects />}>
						<Route index element={<ProjectsPage />} />
						<Route path=":id" element={<ProjectInfo />} />
					</Route>
				</Route>
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default CustomRouter;
