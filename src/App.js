import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer, Slide } from "react-toastify";
import GlobalStyles from "./GlobalStyles";
import { toast } from "react-toastify";
import theme from "./theme";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import CustomRouter from "./routers/CustomRoutes";
import useAuth from "./hooks/useAuth";
import AuthRouter from "./routers/AuthRouter";

function App() {
	const [currentTheme, setCurrentTheme] = useState(false);
	const { readFromLocalStorage, setAuth, setIsLoading } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const user = readFromLocalStorage();
		if (user) {
			setIsLoading(true);
			setAuth(user);
			navigate("/dashboard");
			toast.success(`Welcome back ${user.user.userName}`);
			setIsLoading(false);
		}
	}, []);

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={currentTheme ? theme.dark : theme.default}>
				<AuthRouter>
					<CustomRouter />
				</AuthRouter>
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
