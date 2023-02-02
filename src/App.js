import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer, Slide } from "react-toastify";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import theme from "./theme";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard, ProjectInfo, Updates, Users } from "./Components";
import WelcomePage from "./Pages/WelcomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import AboutPage from "./Pages/AboutPage";
import DashboardPage from "./Pages/DashboardPage";

function App() {
	const [currentTheme, setCurrentTheme] = useState(false);

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={currentTheme ? theme.dark : theme.default}>
				<Router>
					<Routes>
						<Route path="/" element={<WelcomePage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/dashboard" element={<DashboardPage />}>
							<Route path="" element={<Dashboard />} />
							<Route path="updates" element={<Updates />} />
							<Route path="users" element={<Users />} />
							<Route path="project/:id" element={<ProjectInfo />} />
						</Route>
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
