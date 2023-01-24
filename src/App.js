import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer, Slide } from "react-toastify";
import GlobalStyles from "./GlobalStyles";
import CustomRouter from "./CustomRouter";
import theme from "./theme";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [currentTheme, setCurrentTheme] = useState(false);

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={currentTheme ? theme.dark : theme.default}>
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
