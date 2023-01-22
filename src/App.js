import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer, Slide } from "react-toastify";
import GlobalStyles from "./GlobalStyles";
import themes from "./themes";
import CustomRouter from "./CustomRouter";

function App() {
	const [currentTheme, setCurrentTheme] = useState(false);

	return (
		<>
			<GlobalStyles />
			<ThemeProvider
				theme={currentTheme ? themes.dark : themes.default}
			></ThemeProvider>
			<CustomRouter />
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
