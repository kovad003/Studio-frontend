import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer, Slide } from "react-toastify";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import theme from "./theme";
import "react-toastify/dist/ReactToastify.css";
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

function App() {
	const [currentTheme, setCurrentTheme] = useState(false);

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={currentTheme ? theme.dark : theme.default}>
				<Router>
					<Routes>
						<Route exact path="/" element={<WelcomePage />} />
						<Route exact path="/login" element={<LoginPage />} />
						<Route exact path="/about" element={<AboutPage />} />
						<Route exact path="/dashboard" element={<DashboardPage />}>
							<Route exact index element={<Dashboard />} />
							<Route exact path="updates" element={<Updates />} />
							<Route exact path="users" element={<Users />} />
							<Route exact path="projects" element={<Projects />}>
								<Route exact index element={<ProjectsPage />} />
								<Route exact path=":id" element={<ProjectInfo />} />
							</Route>
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
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
