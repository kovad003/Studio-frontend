import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<AppContextProvider>
		<AuthProvider>
			<Router>
				<App />
			</Router>
		</AuthProvider>
	</AppContextProvider>
	// </React.StrictMode>
);
