import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer, Slide } from "react-toastify";
import GlobalStyles from "./GlobalStyles";
import { toast } from "react-toastify";
import theme from "./theme";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import CustomRouter from "./routers/CustomRoutes";
import useAuth from "./hooks/useAuth";
import MainHeader from "./Components/MainHeader/MainHeader";

function App() {
	const [currentTheme, setCurrentTheme] = useState(false);
	const { readFromLocalStorage, setAuth, setIsLoading, auth } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const path = location.pathname;

	useEffect(() => {
		const user = readFromLocalStorage();
		setIsLoading(true);
		if (user) {
			setAuth(user);
			navigate("/dashboard");
			toast.success(`Welcome back ${user.user.userName}`);
			setIsLoading(false);
		} else {
			setIsLoading(false);
		}
	}, []);

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={currentTheme ? theme.dark : theme.default}>
				{path === "/" || path === "/about" || path === "/login" || path === "/contact" ? (
					<MainHeader />
				) : (
					""
				)}

				<CustomRouter />
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
