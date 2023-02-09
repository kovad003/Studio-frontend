import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer, Slide } from "react-toastify";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import theme from "./theme";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
	Dashboard,
	ProjectInfo,
	Updates,
	Users,
	Projects,
	ProjectsPage,
} from "./Components";
import WelcomePage from "./Pages/WelcomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import AboutPage from "./Pages/AboutPage";
import DashboardPage from "./Pages/DashboardPage";
import NotFound from "./Pages/NotFound";
import RequireAuth from "./Components/RequireAuth";
import NotAllowed from "./Pages/NotAllowed";
import CreateUserPage from "./Components/Users/CreateUserPage";
import UsersPage from "./Components/Users/UsersPage";
import useAuth from "./hooks/useAuth";

function App() {
	const [currentTheme, setCurrentTheme] = useState(false);
	const { readFromLocalStorage, setAuth, auth } = useAuth();
	const navigate = useNavigate();

	const ROLES = {
		client: "Client",
		assistant: "Assistant",
		admin: "Admin",
	};

	useEffect(() => {
		const user = readFromLocalStorage();
		if (user) {
			setTimeout(() => {
				navigate("/dashboard");
				setAuth(user);
			});
		}
	}, []);

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={currentTheme ? theme.dark : theme.default}>
				<Routes>
					<Route path="/" element={<WelcomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/about" element={<AboutPage />} />
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
			</ThemeProvider>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={true}
				transition={Slide}
				rtl={false}
				closeOnClick
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
}

export default App;
