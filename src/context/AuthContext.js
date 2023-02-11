import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const saveToLocalStorage = () => {
		localStorage.setItem("user", JSON.stringify(auth));
	};

	const readFromLocalStorage = () => {
		let user = null;
		if (localStorage.getItem("user")) {
			user = JSON.parse(localStorage.getItem("user"));
		}
		return user;
	};

	const removeFromLocalStorage = () => {
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider
			value={{
				auth,
				setAuth,
				saveToLocalStorage,
				readFromLocalStorage,
				isLoading,
				setIsLoading,
				removeFromLocalStorage,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
